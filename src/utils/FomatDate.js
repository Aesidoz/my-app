function FomatDate(date) {
  return new Intl.DateTimeFormat("en-Us", {
    month: "short",
    year: "2-digit",
  }).format(date);
}

export { FomatDate };
