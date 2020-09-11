var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    inStock: false,
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
    addToCart() {
      this.cart += 1;
    },
    updateProduct(image) {
      this.image = image;
    },
  },
  // computed properties are special methods, which cache results and won't
  // rerun unless one of the dependent data has changed
  computed: {
    title() {
      return this.brand + " " + this.product;
    }
  }
});
