export function estimateRepayment(amount: number, annualRate: number, months: number) {
  if (!Number.isFinite(amount) || amount <= 0 || !Number.isFinite(annualRate) || annualRate < 0 || !Number.isInteger(months) || months < 1) return null;
  const rate = annualRate / 1200;
  const monthly = rate === 0 ? amount / months : amount * rate / -Math.expm1(-months * Math.log1p(rate));
  const total = monthly * months;
  return { monthly, total, interest: total - amount };
}