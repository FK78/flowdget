export const SUPPORTED_BASE_CURRENCIES = ["GBP", "USD", "EUR", "CAD", "AUD"] as const;

export type BaseCurrency = (typeof SUPPORTED_BASE_CURRENCIES)[number];

export const DEFAULT_BASE_CURRENCY: BaseCurrency = "GBP";

export function normalizeBaseCurrency(value?: string | null): BaseCurrency {
  if (!value) {
    return DEFAULT_BASE_CURRENCY;
  }

  const normalized = value.toUpperCase() as BaseCurrency;
  if (SUPPORTED_BASE_CURRENCIES.includes(normalized)) {
    return normalized;
  }

  return DEFAULT_BASE_CURRENCY;
}
