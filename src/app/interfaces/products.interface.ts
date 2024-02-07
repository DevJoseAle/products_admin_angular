
export interface Product {
  id:                 number;
  code:               number;
  title:              string;
  description:        string;
  price:              number;
  discountPercentage: number;
  rating:             number;
  stock:              number;
  brand:              string;
  category:           string;
  thumbnail:          string;
  images:             string[];
  isActive:           boolean;
}
// code, title, category, price, isActive, rating
