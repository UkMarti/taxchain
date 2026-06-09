use crate::math::Amount;
use chrono::NaiveDate;
use std::collections::VecDeque;

#[derive(Debug, Clone)]
pub struct Lot {
    pub date: NaiveDate,
    pub asset: String,
    pub quantity: Amount,
    pub cost_basis: Amount,   // total fiat cost
}

#[derive(Debug, Clone)]
pub struct Disposal {
    pub date: NaiveDate,
    pub asset: String,
    pub quantity: Amount,
    pub proceeds: Amount,
}

pub struct CostBasisEngine {
    method: CostBasisMethod,
    lots: VecDeque<Lot>, // FIFO order
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CostBasisMethod {
    Fifo,
    Lifo,
    Hifo,
    Section104,
}

impl CostBasisEngine {
    pub fn new(method: CostBasisMethod) -> Self {
        Self { method, lots: VecDeque::new() }
    }

    pub fn add_lot(&mut self, lot: Lot) {
        match self.method {
            CostBasisMethod::Fifo | CostBasisMethod::Section104 => self.lots.push_back(lot),
            CostBasisMethod::Lifo => self.lots.push_front(lot),
            CostBasisMethod::Hifo => {
                // Insert sorted by cost basis descending
                let pos = self.lots.iter().position(|l| l.cost_basis.0 < lot.cost_basis.0)
                    .unwrap_or(self.lots.len());
                self.lots.insert(pos, lot);
            }
        }
    }

    pub fn dispose(&mut self, disposal: Disposal) -> Vec<(Lot, Amount)> {
        let mut remaining = disposal.quantity;
        let mut consumed = Vec::new();
        while remaining > Amount::ZERO && !self.lots.is_empty() {
            let lot = self.lots.front_mut().unwrap();
            let take = if lot.quantity <= remaining { lot.quantity } else { remaining };
            let fraction = Amount(take.0 * Amount::SCALE / lot.quantity.0);
            let cost = Amount(lot.cost_basis.0 * fraction.0 / Amount::SCALE);
            consumed.push((lot.clone(), cost));
            lot.quantity = lot.quantity - take;
            remaining = remaining - take;
            if lot.quantity == Amount::ZERO {
                self.lots.pop_front();
            }
        }
        consumed
    }
}