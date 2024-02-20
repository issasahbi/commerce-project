import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModules", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    Phones: [],
    fragrances: [],
    skincare: [],
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
          console.log(res.data.products);
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
  },
});
