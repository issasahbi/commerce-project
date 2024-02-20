<template>
  <div class="shop-withus py-15">
    <div class="title">
      <h2 class="text-center mb-5"><span>Why Shop</span> With Us?</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="px-13 text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="@/assets/images/free-shipping.png" alt="" srcset="" />
              </div>
              <v-card-title style="white-space: pre-wrap; font-weight: 800">
                Free shipping On First Order</v-card-title
              >
              <v-card-text class="pb-0" style="font-size: 16px">
                Praesent suscipit mattis facilisis.</v-card-text
              >
              <a
                href="#"
                style="color: white; font-weight: 800; font-style: 15px"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="px-13 text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img
                  src="@/assets/images/weekly-flash-sales.png"
                  alt=""
                  srcset=""
                />
              </div>
              <v-card-title style="white-space: pre-wrap; font-weight: 800">
                Weekly Flash Sale</v-card-title
              >
              <v-card-text class="pb-0" style="font-size: 16px">
                Praesent suscipit mattis facilisis.</v-card-text
              >
              <a
                href="#"
                style="color: white; font-weight: 800; font-style: 15px"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="px-13 text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="@/assets/images/discount.png" alt="" srcset="" />
              </div>
              <v-card-title style="white-space: pre-wrap; font-weight: 800">
                Anual Payment Discount</v-card-title
              >
              <v-card-text class="pb-0" style="font-size: 16px">
                Praesent suscipit mattis facilisis.</v-card-text
              >
              <a
                href="#"
                style="color: white; font-weight: 800; font-style: 15px"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="px-13 text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="@/assets/images/cash-back.png" alt="" srcset="" />
              </div>
              <v-card-title style="white-space: pre-wrap; font-weight: 800">
                Cashback Reward Program</v-card-title
              >
              <v-card-text class="pb-0" style="font-size: 16px">
                Praesent suscipit mattis facilisis.</v-card-text
              >
              <a
                href="#"
                style="color: white; font-weight: 800; font-style: 15px"
                >Learn More</a
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style lang="scss">
.shop-withus {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: rgb(45 251 223);
    }
  }
}
</style>
