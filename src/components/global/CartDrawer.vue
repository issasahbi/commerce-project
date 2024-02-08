<template>
  <div class="drawer">
    <v-navigation-drawer temporary location="right" v-model="drawer">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
        sequi eum, minus expedita quibusdam porro odit fuga vel aperiam,
        mollitia at ea quia distinctio corporis iusto quos? Nostrum, soluta
        odio!
      </p>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
