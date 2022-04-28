function FormatThaiCurrerncy(value) {
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "THB",
    currencyDisplay: "narrowSymbol",
  }).format(value);
}

export { FormatThaiCurrerncy };
