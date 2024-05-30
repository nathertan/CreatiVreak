<template>
  <div class="past-projects">
    <h2 class="sub-title">
      <div>What did<font color="#FFD116">&nbsp;They&nbsp;</font>say?</div>
    </h2>
    <v-carousel show-arrows cycle :interval="3000">
      <template v-slot:prev="{ props }">
        <v-btn color="success" variant="elevated" @click="props.onClick"
          >Previous slide</v-btn
        >
      </template>
      <template v-slot:next="{ props }">
        <v-btn color="info" variant="elevated" @click="props.onClick"
          >Next slide</v-btn
        >
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
</style>
