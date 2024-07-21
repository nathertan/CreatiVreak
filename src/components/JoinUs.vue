<script setup></script>

<template>
  <div class="yellow">
    <h2 class="title">
      Interested in Becoming our <font color="#204c74">Talent</font>?
    </h2>
    <p class="subtitle">Contribute and create wonderful projects with us!</p>
    <div class="button-wa">
      <a href="https://www.google.com">
        <img
          src="/img/join-us-default.png"
          onmouseover="this.src='/img/join-us-hover.png'"
          onmouseout="this.src='/img/join-us-default.png'"
          height="67.19"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding-top: 8vh;
  padding-bottom: 3.5vh;
  text-align: center;
}

.subtitle {
  text-align: center;
}

.button-wa {
  padding-top: 5vh;
  padding-bottom: 6vh;
  text-align: center;
  transition: ease-in;
}
</style>
