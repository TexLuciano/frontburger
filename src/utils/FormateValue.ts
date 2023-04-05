export const formateCurrency = (value: number) => {
  console.log('eu');

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
