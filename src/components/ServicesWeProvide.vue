<template>
  <div id="our-services" class="service-provided">
    <h2>Services<font color="#FFD116">&nbsp;We&nbsp;</font>provide</h2>
    <p>Our excellent services that we provide</p>
    <div class="image-container">
      <div v-for="img in images" :key="img.title" class="image-content">
        <img :src="img.src" :alt="img.title" />
        <h3>{{ img.title }}</h3>
        <p>{{ img.info }}</p>
      </div>
    </div>
  </div>
</template>

<script src="./js/services-we-provide.js" />

<style lang="scss" scoped>
.service-provided {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  align-items: center;

  p {
    margin-top: 2rem;
  }
}
.image-container {
  padding: 0 18vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3, 5rem;
}

.image-content {
  margin: 5vh 1vw;
  width: 15vw;
  height: 22vh;
  background-color: var(--base-yellow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 2.879px 2.879px 15.691px 0px rgba(0, 0, 0, 0.25);
  transition: all 1s ease-in-out;
  p {
    display: none;
    color: var(--base-yellow);
    text-align: center;
    padding: 0 2rem 1rem 2rem;
  }
  h3 {
    text-align: center;
    font-size: 1rem;
  }

  &:hover {
    background-color: var(--base-blue);
    color: var(--base-yellow);
    h3 {
      color: var(--base-white);
      display: none;
    }
    img {
      filter: invert(100%);
      display: none;
    }
    p {
      display: block;
      color: var(--base-white);
      font-size: 0.7rem;
    }
  }

  img {
    width: 3vw;
  }
}

@media screen and (max-width: 640px) {
  .image-container {
    padding: 0 8vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0, 0rem;
  }

  .image-content {
    margin: 5vh 3vw;
    width: 35vw;
    height: 18vh;
    background-color: var(--base-yellow);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    box-shadow: 2.879px 2.879px 15.691px 0px rgba(0, 0, 0, 0.25);
    transition: all 1s ease-in-out;
    p {
      display: none;
      color: var(--base-yellow);
      text-align: center;
      padding: -1rem 1rem 0rem 1rem;
    }
    h3 {
      text-align: center;
      font-size: 1rem;
    }
    img {
      width: 10vw;
    }
  } 

}
</style>
