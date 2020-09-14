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
      </div>

      <product-review></product-review>
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
    };
  },

  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
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

Vue.component("product-review", {
  template: `
    <form className="review-form" @submit.prevent="onSubmit">
      <p>
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="name"/>
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea name="review" id="review" cols="30" rows="5" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select name="rating" id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit"/>
      </p>
    </form>
  `,

  data() {
    return {
      name: null,
      review: null,
      rating: null,
    };
  },

  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };

      console.log('productReview:', productReview);

      this.name = null;
      this.review = null;
      this.rating = null;
    }
  }
});

var app = new Vue({
  el: "#app",

  data: {
    premium: true,
    cart: [],
  },

  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
