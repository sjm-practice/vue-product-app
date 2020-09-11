var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    inStock: true,
    details: [
      "80% cotton",
      "20% polyester",
      "Gender-neutral",
    ],
    variants: [
      {
        id: 1,
        color: "green",
      },
      {
        id: 2,
        color: "blue",
      },
    ],
  }
});
