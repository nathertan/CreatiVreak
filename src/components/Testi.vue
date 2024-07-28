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
        <img :src="img.img" alt="" class="item-img" />
        <div class="item-desc">
          <div class="item-desc-wrapper">
            <b>{{ img.name }}</b>
            <p>{{ img.text }}</p>
          </div>
          <p class="item-desc-reviewer">{{ img.reviewer }}</p>
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
  height: 100vh;
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
    height: 14vw;
    object-fit: cover;
    border-radius: 15px;
    margin-top: 38px;
    margin-bottom: -50%;
  }
  &-desc {
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 18vw;
    height: 50vh;
    padding: 0 1vw;
    padding-top: 20vh;
    background-color: #fff;
    border-radius: 54px;
    box-shadow: 5px 2px 27.4px 0px rgba(0, 0, 0, 0.25);
    &-wrapper {
      padding-top: 5vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      b {
        font-size: 1.5rem;
        text-align: center;
      }
      p {
        margin-top: 1rem;
        font-size: 1rem;
        text-align: center;
      }
    }
    &-reviewer {
      margin-top: 1rem;
      font-size: 1rem;
      color: #9b9b9b;
      padding-bottom: 10vh;
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

@media screen and (max-width: 1560px) {
  .item-desc {
    height: 60vh;
    padding-top: 15vh;
  }
}

@media screen and (max-width: 1280px) {
  .testi {
    margin-top: 0;
  }
  .sub-title {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .bg {
    display: none;
    width: 0;
    height: 0;
  }
  .container {
    right: calc(10vw - 4rem);
  }
  .item {
    &-desc {
      width: 40vw;
      height: 50vh;
      padding-top: 10vh;
    }
    &-img {
      margin-bottom: -15vh;
      border: #e0e0e0 solid 3px;
    }
  }
}

@media screen and (max-width: 640px) {
  .testi {
    padding: 5vh 10vw 5vh 10vw;
    height: 100vh;
  }
  .sub-title {
    p {
      padding-bottom: 5vh;
    }
  }
}

@media screen and (max-width: 510px) {
  .item {
    margin: -2rem 0.5rem 0 0.5rem;
    &-desc {
      height: 70vh;
    }
  }
  .container {
    right: calc(10vw - 1rem);
  }
  .sub-title {
    p {
      padding-bottom: 10vh;
    }
  }
}
</style>
