<script setup></script>

<template>
  <header>
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
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
