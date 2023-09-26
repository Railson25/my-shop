export interface Product {
  src: string;
  brand: string;
  name: string;
  price: string;
}

const productsFeatured: Product[] = [
  {
    src: "/images/products/f1.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/products/f2.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/products/f3.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/products/f4.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/products/f5.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/products/f6.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/products/f7.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/products/f8.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
];

const productsArrivals: Product[] = [
  {
    src: "/images/arrivals/n1.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/arrivals/n2.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/arrivals/n3.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/arrivals/n4.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/arrivals/n5.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/arrivals/n6.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/arrivals/n7.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
  {
    src: "/images/arrivals/n8.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
  },
];

export interface CategoriesType {
  name: string;
  products: Product[];
  title: string;
  subtitle: string;
}

export const categories: CategoriesType[] = [
  {
    name: "featured",
    products: productsFeatured,
    title: "New Featured",
    subtitle: "Summer Collection New Modern Design",
  },
  {
    name: "arrivals",
    products: productsArrivals,
    title: "New Arrivals",
    subtitle: "Summer Collection New Modern Design",
  },
];
