<template>
  <div id="past-projects" class="past-projects yellow">
    <h2>Our<font color="#204C74">&nbsp;Past Projects</font></h2>
    <v-carousel
      class="carousel"
      show-arrows
      cycle
      :interval="4000"
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
  padding: 8vh 10vw 0 10vw;
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
  height: 50vh;
  width: 14vw;
  object-fit: cover;
  border-radius: 15px;
  &-h {
    height: 40vh;
    width: 30vw;
  }
}

@media screen and (max-width: 1175px) {
  .item-img {
    height: 18rem;
    width: 12rem;
  }
  .item-wrapper {
    gap: 3vw;
  }
}

@media screen and (max-width: 640px) {
  .content {
    margin-top: 0;
  }
  .item-wrapper {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 0;
    justify-content: center;
    margin-top: 0;

    &-h {
      margin-top: 0rem;
      text-align: center;
    }

    &-title {
      font-size: 2.2rem;
      font-weight: 500;
      color: var(--base-blue);
      text-align: center;
    }
    &-desc {
      margin-top: 1rem;
      color: var(--base-black);
      text-align: center;
      margin-bottom: 2vh;
    }
  }
}
</style>

<style>
.v-carousel__controls__item.v-btn.v-btn--icon {
  background-color: var(--base-white) !important;
  height: 1vh !important;
  width: 5vw !important;
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
  height: 72vh !important;
}

@media screen and (max-width: 1175px) {
  .v-window__controls {
    display: none !important;
  }
  .v-carousel__controls {
    gap: 0 !important;
  }
}
@media screen and (max-width: 640px) {
  .v-window-item--active {
    margin-top: 0 !important;
  }
}
</style>
