<script setup></script>

<template>
  <div class="yellow">
    <h1 class="title">About <font color="#204c74">CreatiVreak</font></h1>
    <p class="subtitle">Lorem ipsum dolor sit amet consectetur. Tortor sit sit congue id in <br> malesuada. Id at quis egestas dolor egestas.</p>
    <div class="button-wa">
      <a href="https://www.google.com">
        <img src="/img/hubungikami-default.png" 
          onmouseover="this.src='/img/hubungikami-hover.png'"
          onmouseout="this.src='/img/hubungikami-default.png'"
          width="250"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.yellow {
  height: 38vh;
  /* background: var(--base-yellow); */
}

.title{
  padding-top: 5.5vh;
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
