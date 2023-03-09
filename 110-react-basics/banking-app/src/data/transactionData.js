export const transactions = [
  {
    id: 1,
    title: "Miete",
    date: new Date("2023-02-25T13:40:00"),
    amount: -754.0,
    category: 1,
  },
  {
    id: 2,
    title: "Bäckerei Mangold",
    date: new Date("2023-02-25T11:04:00"),
    amount: -4.67,
    category: 2,
  },
  {
    id: 3,
    title: "Burgercraft",
    date: new Date("2023-02-22T12:48:20"),
    amount: -16.67,
    category: 2,
  },
  {
    id: 4,
    title: "Karrenbahn",
    date: new Date("2023-02-22T18:27:09"),
    amount: -8.5,
    category: 3,
  },
  {
    id: 5,
    title: "Schnitzelbär",
    date: new Date("2023-02-20T11:56:34"),
    amount: -16.67,
    category: 2,
  },
  {
    id: 6,
    title: "Zalando",
    date: new Date("2023-02-21T16:08:00"),
    amount: -87.6,
    category: 4,
  },
  {
    id: 7,
    title: "Gehalt Firma XY",
    date: new Date("2023-02-21T08:00:00"),
    amount: 2000.0,
    category: 0,
  },
];

export let balance = 0;
transactions.map((transaction) => {
  balance += transaction.amount;
  return balance;
});

export let expenses = 0;
transactions.map((transaction) => {
  if (transaction.amount < 0) {
    expenses += transaction.amount;
  }
  return (expenses = Math.round(expenses * 100 + Number.EPSILON) / 100);
});

export let income = 0;
transactions.map((transaction) => {
  if (transaction.amount > 0) {
    income += transaction.amount;
  }
  return income;
});
