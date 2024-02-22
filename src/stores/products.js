import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModules", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    Phones: [],
    fragrances: [],
    skincare: [],
    categoryProducts: [],
    Product: "",
    categories: [
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Men's Shoes",
        route: "mens-shoes",
      },
      {
        title: "Men's Watches",
        route: "mens-watches",
      },
      {
        title: "Women's Bags",
        route: "womens-bags",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.flashDeals = res.data.products.slice(0, 8);
          this.newProducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );

          this.Phones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.skincare = res.data.products.filter(
            (el) => el.category === "skincare"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}?limit=20`)
        .then((res) => (this.categoryProducts = res.data));
    },
    async getSingleProducts(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          console.log(res.data);
          this.Product = res.data;
        });
    },
  },
});
