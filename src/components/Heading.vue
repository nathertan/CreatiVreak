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
      <h1 class="creati">Creati</h1>
      <h1 class="vreak">Vreak</h1>
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
      margin-right: 10px;
    }

    h1 {
      font-size: 1.7rem;
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
