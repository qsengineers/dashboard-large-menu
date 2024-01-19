export const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const formatDate = (stringDate: string) => {
  const date = new Date(stringDate);
  return date.toLocaleDateString();
};
