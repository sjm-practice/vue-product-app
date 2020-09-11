var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    selectedVariant: 0,
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
        quantity: 10,
      },
      {
        id: 2,
        color: "blue",
        image: "./assets/vmSocks-blue-onWhite.jpg",
        quantity: 0,
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  // computed properties are special methods, which cache results and won't
  // rerun unless one of the dependent data has changed
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    }
  }
});
