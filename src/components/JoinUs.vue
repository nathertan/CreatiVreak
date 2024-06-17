<script setup></script>

<template>
  <div class="yellow">
    <h1 class="title">Interested in Becoming our <font color="#204c74">Talent</font>?</h1>
    <p class="subtitle">Contribute and create wonderful projects with us!</p>
    <div class="button-wa">
      <a href="https://www.google.com">
        <img src="/img/join-us-default.png" 
          onmouseover="this.src='/img/join-us-hover.png'"
          onmouseout="this.src='/img/join-us-default.png'"
          height="67.19"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.yellow {
  height: 34vh;
  /* background: var(--base-yellow); */
}

.title{
  padding-top: 4.5vh;
  padding-bottom: 3.5vh;
  text-align: center;
}

.subtitle{
  text-align: center;
  font-size: 1.3rem;
}

.button-wa{
  padding-top: 3vh;
  text-align: center;
  transition: ease-in;
}


</style>
