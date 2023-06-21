export interface Menu {
  id: string;
  title: string;
  sideDish: string;
  price: number;
}

export const menus: Menu[] = [
  {
    id: "Menu 1",
    title: "Bärentatzen-menü1",
    sideDish: "Getränk",
    price: 22.99,
  },
  {
    id: "Menu 2",
    title: "Bärentatzen-menü2",
    sideDish: "Getränk",
    price: 22.99,
  },
  {
    id: "Menu 3",
    title: "Bärentatzen-menü3",
    sideDish: "Getränk",
    price: 22.99,
  },
  {
    id: "Menu 4",
    title: "Bärentatzen-menü4",
    sideDish: "Getränk",
    price: 22.99,
  },
];
