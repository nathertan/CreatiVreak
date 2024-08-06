<script setup></script>

<template>
  <div id="join-us" class="yellow">
    <h2 class="title">
      Interested in Becoming our <span class="talent"><font color="#204c74">Talent</font>?</span>
    </h2>
    <p class="subtitle">Contribute and create wonderful projects with us!</p>
    <div class="button-wa">
      <a href="https://chat.whatsapp.com/E2C90SUlY0K2QKrN4p4ucd" target="_blank">
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

@media screen and (max-width: 640px) {
  .talent {
    display: block;
    margin-top: 1.5vh;
  }
}
</style>
