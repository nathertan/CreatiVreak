<script setup>
import SideBar from './SideBar.vue';
import { ref, onMounted } from 'vue';

const scrollDirection = ref('up');
const lastScroll = ref(0);
const showSideBar = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScroll.value) {
      scrollDirection.value = 'down';
      lastScroll.value = window.scrollY;
    } else {
      scrollDirection.value = 'up';
      lastScroll.value = window.scrollY;
    }
  });
});
const toggleSidebar = () => {
  showSideBar.value = !showSideBar.value;
};
</script>

<template>
  <side-bar :show="showSideBar" @toggleSidebar="toggleSidebar" />
  <header
    :class="{
      'header-hide': scrollDirection === 'down',
    }"
  >
    <div class="title">
      <img
        alt="CreatiVreak logo"
        class="logo"
        src="@assets/creatiVreak.svg"
        width="60"
      />
      <h2 class="creati">Creati</h2>
      <h2 class="vreak">Vreak</h2>
    </div>

    <div class="wrapper">
      <a>Home</a>
      <a href="#about-us">Profile</a>
      <a href="#our-services">Service</a>
      <a href="#past-projects">Portofolio</a>
    </div>
    <div class="hamburger" @click="toggleSidebar">
      <img src="@assets/hamburger.svg" alt="hamburger-toggle" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  transition: top 0.5s ease-in-out;
  background: var(--color-background);
  position: fixed;
  top: 0;
  left: 0;
  padding: 3vh 100px 3vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
}
.hamburger {
  display: none;
}
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin-right: 0.75rem;
  }

  h2 {
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
  }

  .creati {
    color: var(--base-blue);
  }
  .vreak {
    color: var(--base-yellow);
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 100px;
  a {
    color: var(--base-black);
  }
}
.header-hide {
  top: -200px;
}

@media screen and (max-width: 1080px) {
  .wrapper {
    gap: 3vw;
  }
  .title {
    h2 {
      display: none;
    }
  }
}
@media screen and (max-width: 640px) {
  header {
    padding: 3vh 5vw 3vh;
  }
  .wrapper {
    display: none;
  }
  .hamburger {
    display: block;
    img {
      width: 6vw;
    }
  }
}
</style>
