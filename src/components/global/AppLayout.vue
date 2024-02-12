<template>
  <div class="layout">
    <v-layout class="position-relative">
      <cart-drawer />
      <v-main style="padding-top: 150px">
        <slot></slot>
      </v-main>
      <app-nav />
      <fixed-nav />
      <app-footer />
    </v-layout>
  </div>
</template>
<script>
import AppNav from "@/components/global/AppNav.vue";
import FixedNav from "@/components/global/FixedNav.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import CartDrawer from "@/components/global/CartDrawer.vue";
export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
  },
};
</script>
