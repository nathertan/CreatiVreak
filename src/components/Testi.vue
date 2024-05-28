<template>
  <div class="testi">
    <h2 class="sub-title">
      <div>What did<font color="#FFD116">&nbsp;They&nbsp;</font>say?</div>
    </h2>
    <TransitionGroup
      name="list"
      class="container"
      tag="ul"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li v-for="img in viewed" class="item" :key="img" :data-index="'index'">
        <img :src="img" alt="" class="item-img" />
      </li>
    </TransitionGroup>
  </div>
</template>

<script src="./js/testi.js"></script>

<style lang="scss" scoped>
.testi {
  padding: 80px 100px 0 100px;
  height: 100vh;
}

.container {
  position: absolute;
  list-style: none;
  display: flex;
  transition: all 1s ease-in-out;
}

.item {
  margin: 0 2rem;
  opacity: 1;
  transition: all 1s ease-in-out;
}

.item-img {
  height: 238px;
  width: 160px;
  object-fit: cover;
  border-radius: 15px;
  margin-top: 38px;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-180px);
}

.list-leave-active {
  position: absolute;
}

/* .list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-active {
  transform: translateX(80px);
  transition: all 0ms ease-in;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.list-leave-active {
  position: absolute;
} */
</style>
