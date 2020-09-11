Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },

  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="Socks">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div class="color-box" :style="{ backgroundColor: variant.color}" v-for="(variant, index) in variants"
          :key="variant.id" @mouseover=updateProduct(index)>
        </div>

        <button v-on:click="addToCart" :class="{disabledButton: !inStock}" :disabled="!inStock">Add to Cart</button>

        <div class="cart">
          <p>Cart({{ cart }})</p>
        </div>
      </div>
    </div>
  `,
  
  data() {
    return {
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
    };
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
    },

    shipping() {
      return this.premium ? "Free" : "$2.99";
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
  }
});
