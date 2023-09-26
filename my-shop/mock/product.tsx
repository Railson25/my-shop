export interface Product {
  src: string;
  brand: string;
  name: string;
  price: string;
  id: string;
  colors?: string[];
  sizes: string[];
  description: string;
}

export const productsFeatured: Product[] = [
  {
    id: "1",
    src: "/images/products/f1.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    sizes: ["xl", "lg"],
    description:
      "A camiseta Cartoon Astronaut é perfeita para os entusiastas do espaço. Feita com materiais de alta qualidade, oferece conforto e estilo únicos.",
  },
  {
    id: "2",
    src: "/images/products/f2.jpg",
    brand: "nike",
    name: "Galactic Space Hoodie",
    price: "$65",
    sizes: ["s", "m"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "O moletom Galactic Space é ideal para noites frias e aventuras intergalácticas. Fique quentinho e estiloso ao mesmo tempo!",
  },
  {
    id: "3",
    src: "/images/products/f3.jpg",
    brand: "puma",
    name: "Cosmic Explorer Pants",
    price: "$45",
    sizes: ["s", "xl"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "As calças Cosmic Explorer são perfeitas para explorar o espaço e a moda. Confortáveis e versáteis para qualquer aventura.",
  },
  {
    id: "4",
    src: "/images/products/f4.jpg",
    brand: "reebok",
    name: "Rocket Launch Sneakers",
    price: "$95",
    sizes: ["m", "l"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "Os tênis Rocket Launch são projetados para decolar em grande estilo. Leves, confortáveis e cheios de energia.",
  },
  {
    id: "5",
    src: "/images/products/f5.jpg",
    brand: "under armour",
    name: "Astro Jogging Shorts",
    price: "$32",
    sizes: ["s", "m", "xl"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "Os shorts Astro Jogging são perfeitos para suas corridas espaciais. Respiráveis e estilosos para qualquer atleta.",
  },
  {
    id: "6",
    src: "/images/products/f6.jpg",
    brand: "new balance",
    name: "Comet Crewneck Sweatshirt",
    price: "$55",
    sizes: ["s", "l"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "A blusa Comet Crewneck é sua passagem para o conforto e estilo. Perfeita para relaxar após suas aventuras espaciais.",
  },
  {
    id: "7",
    src: "/images/products/f7.jpg",
    brand: "asics",
    name: "Meteor Sports Jacket",
    price: "$70",
    sizes: ["s", "m", "l"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "O casaco Meteor Sports é resistente às intempéries e à moda. Mantenha-se aquecido enquanto enfrenta o espaço sideral.",
  },
  {
    id: "8",
    src: "/images/products/f8.jpg",
    brand: "fila",
    name: "Space Explorer Backpack",
    price: "$40",
    sizes: ["s", "m"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "A mochila Space Explorer é a parceira perfeita para suas expedições cósmicas. Carregue tudo o que precisa com estilo.",
  },
];

export const productsArrivals: Product[] = [
  {
    id: "9",
    src: "/images/arrivals/n1.jpg",
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirt",
    price: "$78",
    sizes: ["xl", "lg"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "A camiseta Cartoon Astronaut é perfeita para os entusiastas do espaço. Feita com materiais de alta qualidade, oferece conforto e estilo únicos.",
  },
  {
    id: "10",
    src: "/images/arrivals/n2.jpg",
    brand: "nike",
    name: "Galactic Space Hoodie",
    price: "$65",
    sizes: ["s", "m"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "O moletom Galactic Space é ideal para noites frias e aventuras intergalácticas. Fique quentinho e estiloso ao mesmo tempo!",
  },
  {
    id: "11",
    src: "/images/arrivals/n3.jpg",
    brand: "puma",
    name: "Cosmic Explorer Pants",
    price: "$45",
    sizes: ["s", "xl"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "As calças Cosmic Explorer são perfeitas para explorar o espaço e a moda. Confortáveis e versáteis para qualquer aventura.",
  },
  {
    id: "12",
    src: "/images/arrivals/n4.jpg",
    brand: "reebok",
    name: "Rocket Launch Sneakers",
    price: "$95",
    sizes: ["m", "l"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "Os tênis Rocket Launch são projetados para decolar em grande estilo. Leves, confortáveis e cheios de energia.",
  },
  {
    id: "13",
    src: "/images/arrivals/n5.jpg",
    brand: "under armour",
    name: "Astro Jogging Shorts",
    price: "$32",
    sizes: ["s", "m", "xl"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "Os shorts Astro Jogging são perfeitos para suas corridas espaciais. Respiráveis e estilosos para qualquer atleta.",
  },
  {
    id: "14",
    src: "/images/arrivals/n6.jpg",
    brand: "new balance",
    name: "Comet Crewneck Sweatshirt",
    price: "$55",
    sizes: ["s", "l"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "A blusa Comet Crewneck é sua passagem para o conforto e estilo. Perfeita para relaxar após suas aventuras espaciais.",
  },
  {
    id: "15",
    src: "/images/arrivals/n7.jpg",
    brand: "asics",
    name: "Meteor Sports Jacket",
    price: "$70",
    sizes: ["s", "m", "l"],
    colors: [
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
      "/images/products/f1.jpg",
    ],
    description:
      "O casaco Meteor Sports é resistente às intempéries e à moda. Mantenha-se aquecido enquanto enfrenta o espaço sideral.",
  },
  {
    id: "16",
    src: "/images/arrivals/n8.jpg",
    brand: "fila",
    name: "Space Explorer Backpack",
    price: "$40",
    sizes: ["s", "m"],
    colors: ["/images/products/f1.jpg", "/images/products/f8-color2.jpg"],
    description:
      "A mochila Space Explorer é a parceira perfeita para suas expedições cósmicas. Carregue tudo o que precisa com estilo.",
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
