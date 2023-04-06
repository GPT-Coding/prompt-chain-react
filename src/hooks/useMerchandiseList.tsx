interface Merchandise {
  title: string;
  description: string;
  price: number;
  stock: number;
  img: string;
}

export const useMerchandiseList = (): Array<Merchandise> => {
  return [];
};
