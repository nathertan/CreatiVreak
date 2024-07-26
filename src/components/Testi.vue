<template>
  <div class="bg"></div>
  <div id="testimony" class="testi">
    <div class="sub-title">
      <h2>What did<font color="#FFD116"> They </font>say?</h2>
      <p>Our past clients satisfaction score for our services</p>
    </div>
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
        <div class="item-desc">
          <b>Amanda Zahra</b>
          <p>Testimonial asdassad asdasdasd asdas</p>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<script src="./js/testi.js"></script>

<style lang="scss" scoped>
.bg {
  z-index: 1;
  position: absolute;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    270deg,
    rgba(241, 241, 241, 0) 0.13%,
    rgba(241, 241, 241, 0.66) 8.55%,
    rgba(241, 241, 241, 0.97) 18.73%,
    #f1f1f1 22.81%
  );
}
.sub-title {
  position: absolute;
  z-index: 2;
  h2 {
    padding-bottom: 2rem;
  }
  p {
    color: #9b9b9b;
  }
}

.testi {
  margin-top: 10rem;
  /* display: flex;
  justify-content: space-between; */
  padding: 80px 100px 0 100px;
  height: 100vh;
}

.container {
  position: absolute;
  right: 80px;
  list-style: none;
  display: flex;
  transition: all 1s ease-in-out;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -2rem 2rem 0 2rem;
  opacity: 1;
  transition: all 1s ease-in-out;
  &-img {
    width: 13vw;
    height: 32vh;
    object-fit: cover;
    border-radius: 15px;
    margin-top: 38px;
    margin-bottom: -180px;
  }
  &-desc {
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18vw;
    height: 50vh;
    padding-top: 200px;
    background-color: #fff;
    border-radius: 54px;
    box-shadow: 5px 2px 27.4px 0px rgba(0, 0, 0, 0.25);
    b {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(480px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
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
