<script setup>
import { ref, onMounted, defineProps } from 'vue';
const props = defineProps({
  show: Boolean,
});

onMounted(() => {});
</script>

<template>
  <div class="sidebar" :class="{ 'sidebar--hide': !props.show }">
    <div class="sidebar__logo" @click="$emit('toggleSidebar')">
      <img src="@assets/x.svg" alt="CreatiVreak logo" />
    </div>
    <div class="sidebar__menu">
      <a>Home</a>
      <a href="#about-us">Profile</a>
      <a href="#our-services">Service</a>
      <a href="#past-projects">Portofolio</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  transition: 0.5s ease-in-out;
  box-shadow: 2.879px 2.879px 15.691px 0px rgba(0, 0, 0, 0.25);
  background: var(--color-background);
  position: fixed;
  top: 0;
  right: 0;
  padding: 3vh 5vw 3vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  width: 33vw;
  z-index: 100;
  .sidebar__logo {
    display: flex;
    justify-content: end;
    img {
      width: 4vw;
    }
  }
  .sidebar__menu {
    display: flex;
    flex-direction: column;
    a {
      margin-top: 2rem;
      font-size: 1.2rem;
      text-decoration: none;
      color: var(--color-text);
    }
  }
}
.sidebar--hide {
  transform: translateX(100%);
}
</style>
