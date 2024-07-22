interface Medicine {
 src: string;
 alt: string;
 title: string;
 description: string;
 stock: number;
 netto: string;
 price: number;
}

export const medicinesData: Medicine[] = [
 {
  src: "/para.jpg",
  alt: "para",
  title: "Paracetamol Berno",
  description:
   "Paracetamol works by inhibiting the production of certain chemicals..",
  netto: "60ml",
  stock: 12,
  price: 3.75,
 },
 {
  src: "/syrup.jpg",
  alt: "vento",
  title: "Vento Syrup",
  description:
   "Vento Syrup is used for treating cough and cold of different kinds..",
  netto: "33ml",
  stock: 0, // Deliberately empty stock for tesing
  price: 4.5,
 },
 {
  src: "/injection.jpg",
  alt: "injection",
  title: "Injection Fluid",
  description:
   "Used for intravenous administration to treat various conditions..",
  netto: "100ml",
  stock: 8,
  price: 5.2,
 },
 {
  src: "/capsule.jpg",
  alt: "capsule",
  title: "Capsule Medicine",
  description:
   "Effective in treating chronic illnesses with minimal side effects..",
  netto: "24ml",
  stock: 10,
  price: 2.99,
 },
 {
  src: "/ColaceGlycerin",
  alt: "capsule",
  title: "Colace Glycerine",
  description:
   "Effective in treating suppository illnesses with minimal side effects..",
  netto: "17ml",
  stock: 18,
  price: 8.99,
 },
 {
  src: "/injection5",
  alt: "capsule",
  title: "Injection Medicine",
  description:
   "Most effective way of adminsitering drugs into your body without any..",
  netto: "6ml",
  stock: 6,
  price: 10.42,
 },
];
