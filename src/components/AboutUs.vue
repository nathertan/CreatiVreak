<script setup></script>

<template>
  <div id="about-us" class="yellow">
    <h2 class="title">About <font color="#204c74">CreatiVreak</font></h2>
    <p class="subtitle">
      Welcome to Creativreak, where innovation meets imagination! We are a
      dynamic creative agency dedicated to providing top-notch services in the
      realm of creativity. Our mission is to empower both emerging ventures and
      established businesses by advancing their digital promotional endeavors.
    </p>
    <div class="button-wa">
      <a href="https://www.google.com">
        <img
          src="/img/hubungikami-default.png"
          onmouseover="this.src='/img/hubungikami-hover.png'"
          onmouseout="this.src='/img/hubungikami-default.png'"
          width="250"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding-top: 8vh;
  padding-bottom: 6vh;
  text-align: center;
}

.subtitle {
  text-align: center;
  width: 60%;
  margin: 0 auto;
}

.button-wa {
  padding-top: 6vh;
  padding-bottom: 8vh;
  text-align: center;
  transition: ease-in;
}
</style>
