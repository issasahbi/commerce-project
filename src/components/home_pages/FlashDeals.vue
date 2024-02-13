<template>
  <div class="flash-deals pt-16">
    <v-container fluid class="pt-9">
      <v-row>
        <v-col cols="3" v-for="item in products" :key="item.id">
          <v-card elevation="0" class="pb-5">
            <img
              :src="
                showenItem[item.title] ? showenItem[item.title] : item.thumbnail
              "
              class="w-100"
              style="height: 200px"
              alt=""
            />

            <v-card-text class="pl-0 pb-0">
              ({{ item.title }})
              {{
                item.description.split(" ").length <= 8
                  ? item.description
                  : item.description.split(" ").slice(0, 8).join(" ") + "..."
              }}
            </v-card-text>
            <v-rating
              v-model="item.rating"
              half-increments
              disabled
              color="yellow-darken-2"
              size="x-small"
              density="combact"
            >
            </v-rating>
            <v-card-text class="pl-0 pt-0">
              <del>${{ item.price }}</del> From
              <span style="color: red; font-weight: 900; font-size: 15px">
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  )
                }}
              </span>
            </v-card-text>
            <v-btn-toggle v-model="showenItem[item.title]">
              <v-btn
                v-for="(pic, i) in item.images"
                :value="pic"
                :key="i"
                size="x-small"
              >
                <img
                  :src="pic"
                  alt=""
                  width="30"
                  height="30"
                  style="border-radius: 50%; border: 1px solid grey"
                />
              </v-btn>
            </v-btn-toggle>
            <div class="mt-5">
              <v-btn
                density="combact"
                class="py-2 px-12"
                style="text-transform: none; border-radius: 30px"
                variant="outlined"
              >
                Choose Options</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>
