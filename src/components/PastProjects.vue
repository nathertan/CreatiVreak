<template>
  <div class="past-projects yellow">
    <h2 class="sub-title">
      <div>Our<font color="#204C74">&nbsp;Past Projects</font></div>
    </h2>
    <v-carousel show-arrows cycle :interval="3000" hide-delimiter-background>
      <template v-slot:prev="{ props }">
        <div @click="props.onClick">
          <img alt="Left chevron" src="@assets/chevron-left.svg" />
        </div>
      </template>
      <template v-slot:next="{ props }">
        <div @click="props.onClick">
          <img alt="Right chevron" src="@assets/chevron-right.svg" />
        </div>
      </template>
      <v-carousel-item
        v-for="img in images"
        class="item"
        :key="img"
        :data-index="'index'"
        cover
      >
        <img :src="img" alt="" class="item-img" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script src="./js/past-projects.js"></script>

<style lang="scss" scoped>
.past-projects {
  padding: 80px 100px 0 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  position: absolute;
  list-style: none;
  display: flex;
}

.item {
  margin: auto;
  opacity: 1;
}

.item-img {
  height: 238px;
  width: 160px;
  object-fit: cover;
  border-radius: 15px;
  margin-top: 38px;
}

.v-carousel__controls {
}
</style>
<style>
.v-carousel__controls__item.v-btn.v-btn--icon {
  background-color: var(--base-white) !important;
  height: 10px !important;
  width: 85px !important;
  border-radius: 0 !important;
}

.v-carousel__controls__item.v-btn.v-btn--icon.v-btn--active {
  background-color: var(--base-blue) !important;
}
/* 
.v-carousel__controls__item.v-btn.v-btn--icon:hover {
  background-color: black !important; 
} */

.v-btn__content .v-icon {
  display: none !important; /* Removes the default icon */
}
</style>
