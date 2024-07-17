<script setup>
import { ref, onMounted } from 'vue';

const scrollDirection = ref('up');
const lastScroll = ref(0);
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
</script>

<template>
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
      <a>Profile</a>
      <a>Service</a>
      <a>Portofolio</a>
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
  padding: 20px 100px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
  }
}
.header-hide {
  top: -100px;
}
</style>
