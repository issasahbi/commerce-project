<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3><span>Huge Saving</span> on UHD Televisions</h3>
              <div class="hint">Sale up to 70% off on selected items*</div>
              <v-btn
                class="py-4 px-10"
                density="combact"
                variant="outlined"
                style="border-radius: 30px; text-transform: none"
              >
                Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style lang="scss">
.banner {
  .parent {
    height: 600px;
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: left top;
    .cont {
      color: white;
      padding: 50px 0 0 0;
      h3 {
        font-size: 60px;
        font-weight: 900;
        span {
          color: rgb(117, 243, 172);
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
</style>
