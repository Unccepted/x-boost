export const data = [
  {
    id: "lineA",
    color: "blue",
    data: [
      { x: "Jan", y: 1 },
      { x: "Feb", y: 2 },
      { x: "Mar", y: 3 },
      { x: "Apr", y: 4 }, // Invisible gap
    ],
  },
  {
    id: "lineB",
    color: "red",
    data: [
      { x: "Apr", y: 4 }, // Invisible gap
      { x: "May", y: 5 },
      // ...
    ],
  },
];
