<template>
  <div class="past-projects">
    <h2>Services<font color="#FFD116">&nbsp;We&nbsp;</font>provide</h2>
    <p>Our excellent services that we provide</p>
    <div class="image-container">
      <div v-for="img in images" :key="img.title" class="image-content">
        <img :src="img.src" :alt="img.title" />
        <h3>{{ img.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script src="./js/services-we-provide.js" />

<style lang="scss" scoped>
.past-projects {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  align-items: center;

  p {
    font-size: 1.3rem;
    margin-top: 1rem;
  }
}
.image-container {
  padding: 0 22rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3, 5rem;
}

.image-content {
  margin: 3rem;
  width: 18.5rem;
  height: 12rem;
  background-color: var(--base-yellow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 2.879px 2.879px 15.691px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: var(--base-blue);
    color: var(--base-yellow);
    h3 {
      color: var(--base-white);
    }
    img {
      filter: invert(100%);
    }
  }

  img {
    width: 4rem;
  }
}
</style>
