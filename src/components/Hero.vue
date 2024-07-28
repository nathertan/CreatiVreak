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
      <div>Solusi<font color="#FFD116">&nbsp;Creativ</font></div>
      <div>Untuk Kebutuhan</div>
      <div><font color="#204C74">Digital&nbsp;</font>Anda</div>
    </h1>
    <p class="subtitle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="more" @click="goToBelow()">
      <p>Pelajari lebih lanjut</p>
      <img alt="chevron below" class="chevron" src="@assets/chevronBelow.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding: 80px 100px 0 100px;
  height: 100vh;
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
  font-size: 1.2rem;
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
  width: calc(100vw - 150px);
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
  .bg-content {
    display: none;
  }
  .title {
    margin-top: 16rem;
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
}
@media screen and (max-width: 640px) {
  .title {
    margin-top: 5rem;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 3rem;
  }
  .more {
    width: calc(100vw - 200px);
  }
}
</style>
