var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    inStock: true,
    image: "./assets/vmSocks-green-onWhite.jpg",
    details: [
      "80% cotton",
      "20% polyester",
      "Gender-neutral",
    ],
    variants: [
      {
        id: 1,
        color: "green",
        image: "./assets/vmSocks-green-onWhite.jpg",
      },
      {
        id: 2,
        color: "blue",
        image: "./assets/vmSocks-blue-onWhite.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function(image) {
      this.image = image;
    },
  },
});
