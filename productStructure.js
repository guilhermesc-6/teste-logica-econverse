const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P",
];

module.exports = () => {
  // Seu código vai aqui!
  const structured = products.map((product) => {
    const result = product.split("-");

    return result;
  });

  return structured.reduce((acc, cur) => {
    if (Object.keys(acc).includes(cur[0])) {
      if (Object.keys(acc[cur[0]]).includes(cur[1])) {
        return Object.assign(
          {},
          {
            ...acc,
            [cur[0]]: { ...acc[cur[0]], [cur[1]]: acc[cur[0]][cur[1]] + 1 },
          }
        );
      } else {
        return Object.assign(
          {},
          {
            ...acc,
            [cur[0]]: { ...acc[cur[0]], [cur[1]]: 1 },
          }
        );
      }
    }

    return { ...acc, [cur[0]]: { [cur[1]]: 1 } };
  }, {});
};
