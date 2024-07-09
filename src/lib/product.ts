export type NewProductType = {
    title: string;
    image?: string;
    id: string | number;
    sellingPrice?: number;
    originalPrice: number;
  };


export const products: { title: string, sellingPrice: number, image: string, originalPrice: number, id: string | number }[] = [
    { title: "Wireless Mouse", sellingPrice: 99.9, image: "/products/chairs.png", originalPrice: 99.9, id: 1 },
    { title: "Bluetooth Headphones", sellingPrice: 99.9, image: "/products/SingleSofa.png", originalPrice: 99.99, id: 2 },
    { title: "Smartphone Stand", sellingPrice: 99.9, image: "/products/Single.png", originalPrice: 99.9, id: 3 },
    { title: "Portable Charger", sellingPrice: 99.9, image: "/products/Singlechair.png", originalPrice: 99.9, id: 4 },
    { title: "LED Desk Lamp", sellingPrice: 99.9, image: "/products/Bed.png", originalPrice: 99.9, id: 5 },
    { title: "USB-C Hub", sellingPrice: 99.9, image: "/products/chairs.png", originalPrice: 99.9, id: 6 },
    { title: "Gaming Keyboard", sellingPrice: 99.9, image: "/products/SingleSofa.png", originalPrice: 99.9, id: 7 },
    { title: "Noise Cancelling Earbuds", sellingPrice: 99.9, image: "/products/Single.png", originalPrice: 99.9, id: 8 },
    { title: "Smartwatch", sellingPrice: 99.9, image: "/products/Singlechair.png", originalPrice: 99.9, id: 9 },
    { title: "External Hard Drive", sellingPrice: 99.9, image: "/products/Bed.png", originalPrice:99.9, id: 10 },
    { title: "Smartwatch", sellingPrice: 99.9, image: "/products/chairs.png", originalPrice: 99.9, id: 11 },
    { title: "External Hard Drive", sellingPrice: 99.9, image: "/products/SingleSofa.png", originalPrice: 99.9, id: 12 },
    { title: "Smartwatch", sellingPrice: 99.9, image: "/products/Single.png", originalPrice: 99.9, id: 13 },
    { title: "External Hard Drive", sellingPrice: 99.9, image: "/products/Singlechair.png", originalPrice: 99.9, id: 14 },
    { title: "Smartwatch", sellingPrice: 99.9, image: "/products/Bed.png", originalPrice: 99.9, id:15 },
    { title: "External Hard Drive", sellingPrice: 99.9, image: "/products/chairs.png", originalPrice: 99.9, id: 16 },
    { title: "Smartwatch", sellingPrice: 99.9, image: "/products/SingleSofa.png", originalPrice: 249.99, id: 17 },
    { title: "External Hard Drive", sellingPrice: 99.9, image: "/products/Single.png", originalPrice:99.9, id: 18 },
    { title: "Smartwatch", sellingPrice: 99.9, image: "/products/Singlechair.png", originalPrice: 99.9, id: 19 },
    { title: "External Hard Drive", sellingPrice: 99.9, image: "/products/Bed.png", originalPrice: 99.9, id: 20 }
];
export const HomeDeal: { title: string, sellingPrice: number, image: string, originalPrice: number, id: string | number }[] = [
  { title: "KUBRIC - ARMCHAIR", sellingPrice: 99.0, image: "/products/chairs.png", originalPrice: 99.0, id: 1 },
  { title: "KUBRIC - ARMCHAIR", sellingPrice: 99.0, image: "/products/chairs.png", originalPrice: 99.0, id: 1 },
  { title: "KUBRIC - ARMCHAIR", sellingPrice: 99.0, image: "/products/chairs.png", originalPrice: 99.0, id: 1 },
  { title: "KUBRIC - ARMCHAIR", sellingPrice: 99.0, image: "/products/chairs.png", originalPrice: 99.0, id: 1 },
  
];
export const SafeStool: { title: string, sellingPrice: number, image: string, originalPrice: number, id: string | number }[] = [
  { title: "Bumble Table", sellingPrice: 99.0, image: "/products/SafeStool.png", originalPrice: 99.0, id: 1 },
  { title: "Bumble Table", sellingPrice: 99.0, image: "/products/SafeStool.png", originalPrice: 99.0, id: 2 },
  { title: "Bumble Table", sellingPrice: 99.0, image: "/products/SafeStool.png", originalPrice: 99.0, id: 3 },
 
];
export const Diplay: { title: string, image: string,  id: string | number }[] = [
  { title: "Tv Stand",  image: "/products/consoledeck.png",  id: 1 },
  { title: " Table",  image: "/products/Table.png",  id: 2 },
  { title: "sofa",  image:"/products/Doublechair.png",  id: 3 },
  { title: "ArmChairs",  image: "/products/Single.png",  id: 1 },
  { title: "Dinner Chairs",  image: "/products/resortSingle.png",  id: 2 },
  { title: "Smart Furniture",  image: "/products/SmartFurniture.png",  id: 3 },
  { title: "Leather chair",  image: "/products/Singlechair.png",  id: 3 },
 
];