<script setup></script>

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
    <div class="more">
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
  line-height: 6.5rem;
  font-size: 4.5rem;
}

.subtitle {
  margin-top: 1.2rem;
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
}
</style>
