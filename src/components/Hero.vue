<script setup>
const goToBelow = () => {
  let element = document.getElementById('about-us');
  let top = element.offsetTop;
  window.scrollTo(0, top);
  console.log('goToBelow', top);
};
</script>

<template>
  <div class="hero">
    <img alt="Hero BG Content" class="bg-content" src="@assets/heroBg.png" />
    <h1 class="title">
      <div><font color="#FFD116">Creative&nbsp;</font>Solutions</div>
      <div>for your</div>
      <div><font color="#204C74">Digital&nbsp;</font>Needs</div>
    </h1>
    <p class="subtitle">
      That turns your ideas into <b>Reality</b> and <b>Beyond</b>.
    </p>
    <div class="btn">
      <button @click="goToBelow()" class="hero-btn">See More</button>
      <button @click="goToBelow()" class="hero-btn-sec">Contact Us</button>
    </div>
    <div class="more" @click="goToBelow()">
      <img alt="chevron below" class="chevron" src="@assets/chevronBelow.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding: 80px 10vw 0 10vw;
  height: 100vh;
  &-btn {
    margin-right: 1.75rem;
    margin-top: 5rem;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 2px;
    background-color: #204c74;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      background-color: #ffd116;
      color: #204c74;
    }
    &-sec {
      margin-right: 2rem;
      margin-top: 5rem;
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 2px;
      background-color: #ffd116;
      color: #204c74;
      font-size: 1.2rem;
      &:hover {
        background-color: #204c74;
        color: white;
      }
    }
  }
}
.title {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  line-height: 4.5rem;
  font-size: 3.75rem;
}

.subtitle {
  margin-top: 1.5rem;
  font-size: 1.3rem;
}

.bg-content {
  height: calc(100vh - 100px);
  z-index: -1;
  position: absolute;
  top: 100px;
  right: 0;
}

.more {
  position: absolute;
  bottom: 3rem;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .chevron {
    width: 41px;
  }
  p {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 1530px) {
  .bg-content {
    width: 50vw;
    height: auto;
  }
}

@media screen and (max-width: 1080px) {
  .btn {
    display: flex;
    justify-content: center;
  }
  .bg-content {
    display: none;
  }
  .title {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    div {
      text-align: center;
    }
  }
  .subtitle {
    text-align: center;
  }
  .more {
    p {
      font-size: 1rem;
    }
  }
}
@media screen and (max-width: 640px) {
  .title {
    width: 100%;
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
  }
}
</style>
