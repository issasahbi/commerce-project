import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModules", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
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
        })
        .catch((err) => console.log(err));
    },
  },
});
