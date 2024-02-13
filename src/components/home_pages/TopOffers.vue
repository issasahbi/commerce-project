<template>
  <div class="top-offers py-6 bg-grey-lighten-3">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-4"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <!-- overflow:hidden  => zoom in without thhe width -->
              <img
                src="@/assets/images/playstations.webp"
                :style="`width: 100%; cursor : pointer; transition: .7s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="@/assets/images/headset.webp"
                :style="`width: 100% ; cursor : pointer; transition: .7s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pl-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="@/assets/images/chairs.webp"
                :style="` width:100%; cursor : pointer; transition: .7s ease-in-out; scale:${
                  isHovering ? 1.1 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="@/assets/images/iphones.webp"
                :style="` width:100%; cursor : pointer; transition: .7s ease-in-out; scale:${
                  isHovering ? 1.1 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pl-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="@/assets/images/laptops.webp"
                :style="` width: 100%; cursor:pointer; transition: .7s ease-in-out; scale:${
                  isHovering ? 1.1 : 1
                } `"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
