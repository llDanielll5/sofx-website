export const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 2) {
    return numbers.replace(/^(\d{0,2})$/, "($1");
  }

  if (numbers.length <= 7) {
    return numbers.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  }

  if (numbers.length <= 11) {
    return numbers.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
  }

  return value;
};
