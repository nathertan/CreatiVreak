<template>
  <div class="past-projects yellow">
    <h2>Our<font color="#204C74">&nbsp;Past Projects</font></h2>
    <v-carousel
      class="carousel"
      show-arrows
      cycle
      :interval="3000"
      hide-delimiter-background
    >
      <template #prev="{ props }">
        <div @click="props.onClick">
          <img alt="Left chevron" src="@assets/chevron-left.svg" />
        </div>
      </template>
      <template #next="{ props }">
        <div @click="props.onClick">
          <img alt="Right chevron" src="@assets/chevron-right.svg" />
        </div>
      </template>
      <v-carousel-item
        v-for="img in images"
        class="item"
        :key="img.title"
        :data-index="'index'"
      >
        <div class="item-wrapper" :class="{ 'item-wrapper-h': img.horizontal }">
          <img
            :src="img.src"
            alt=""
            class="item-img"
            :class="{ 'item-img-h': img.horizontal }"
          />
          <div class="content" :class="{ 'content-v': !img.horizontal }">
            <div class="item-wrapper-title">{{ img.title }}</div>
            <p class="item-wrapper-desc">{{ img.description }}</p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script src="./js/past-projects.js"></script>

<style lang="scss" scoped>
.past-projects {
  padding: 8vh 100px 0 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel {
  margin-top: 3rem;
}

.container {
  position: absolute;
  list-style: none;
  display: flex;
}

.item {
  margin: 2rem auto 0;
  opacity: 1;
}

.content {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  &-v {
    margin-top: 3rem;
  }
}

.item-wrapper {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 5rem;

  &-h {
    margin-top: 3rem;
  }

  &-title {
    font-size: 2.2rem;
    font-weight: 500;
    color: var(--base-blue);
  }
  &-desc {
    margin-top: 2rem;
    color: var(--base-black);
  }
}

.item-img {
  height: 380px;
  width: 220px;
  object-fit: cover;
  border-radius: 15px;
  &-h {
    height: 320px;
    width: 480px;
  }
}
</style>

<style>
.v-carousel__controls__item.v-btn.v-btn--icon {
  background-color: var(--base-white) !important;
  height: 7px !important;
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
.v-carousel__controls {
  margin: 0 !important;
  padding: 0 !important;
  gap: 2px !important;
}
.v-btn__content .v-icon {
  display: none !important; /* Removes the default icon */
}
.v-carousel {
  height: 560px !important;
}
</style>
