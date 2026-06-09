use rust_decimal::Decimal;
use rust_decimal::prelude::FromStr;
use std::ops::{Add, Sub, Mul, Div};

#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub struct Amount(pub u128); // scaled by 10^18

impl Amount {
    pub const ZERO: Self = Self(0);
    pub const SCALE: u128 = 1_000_000_000_000_000_000; // 10^18

    pub fn from_dec_str(s: &str) -> Result<Self, String> {
        let d = Decimal::from_str(s).map_err(|e| e.to_string())?;
        let scaled = (d * Decimal::from(Amount::SCALE)).to_u128().ok_or("overflow")?;
        Ok(Amount(scaled))
    }

    pub fn to_decimal(&self) -> Decimal {
        Decimal::from(self.0) / Decimal::from(Amount::SCALE)
    }

    pub fn add(&self, other: &Self) -> Self { Amount(self.0 + other.0) }
    pub fn sub(&self, other: &Self) -> Self { Amount(self.0 - other.0) }
    pub fn mul(&self, other: &Self) -> Self { Amount(self.0 * other.0 / Amount::SCALE) }
    pub fn div(&self, other: &Self) -> Self { Amount(self.0 * Amount::SCALE / other.0) }
}

impl Add for Amount { type Output = Self; fn add(self, other: Self) -> Self { self.add(&other) } }
impl Sub for Amount { type Output = Self; fn sub(self, other: Self) -> Self { self.sub(&other) } }
impl Mul for Amount { type Output = Self; fn mul(self, other: Self) -> Self { self.mul(&other) } }
impl Div for Amount { type Output = Self; fn div(self, other: Self) -> Self { self.div(&other) } }

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_amount() {
        let a = Amount::from_dec_str("0.5").unwrap();
        let b = Amount::from_dec_str("0.2").unwrap();
        assert_eq!((a + b).to_decimal().to_string(), "0.7");
        assert_eq!((a * b).to_decimal().to_string(), "0.10");
    }
}