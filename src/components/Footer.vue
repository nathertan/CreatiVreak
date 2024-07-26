<template>
  <footer>
    <div class="wrapper">
      <div class="left-side">
        <div class="title">
          <img
            alt="CreatiVreak logo"
            class="logo"
            src="@assets/creatiVreak-white.svg"
          />
          <p>
            We are a dynamic creative agency dedicated to providing top-notch
            services in the realm of creativity. Our mission is to empower both
            emerging ventures and established businesses by advancing their
            digital promotional endeavors.
          </p>
        </div>
      </div>
      <div class="right-side">
        <div class="explore">
          <h3>Explore</h3>
          <a href="#about-us">About Us</a>
          <a href="#testimony">Testimony</a>
          <a href="#join-us">Join Us</a>
          <a href="#our-services">Our Services</a>
          <a href="#past-projects">Past Projects</a>
        </div>
        <div class="contact">
          <h3>Contact Info</h3>
          <div class="contact-info">
            <img alt="instagram" src="@assets/instagram.svg" />
            <a href="https://www.instagram.com/creativreak/">@creativreak</a>
          </div>
          <div class="contact-info">
            <img alt="email" src="@assets/email.svg" />
            <a href="mailto:creativreakagency@gmail.com"
              >creativreakagency@gmail.com
            </a>
          </div>
          <div class="contact-info">
            <img alt="whatsapp" src="@assets/whatsapp.svg" />
            <a href="https://wa.me/6288295219103">088295219103</a>
            <p>/&nbsp;</p>
            <a href="https://wa.me/6285697233850">085697233850</a>
            <p>(Lynea)</p>
          </div>

          <div class="contact-info">
            <img alt="whatsapp" src="@assets/whatsapp.svg" />
            <a href="https://wa.me/6289520688847">089520688847</a>
            <p>(William)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-rights">
      Copyright © 2024 CreatiVreak All rights reserved.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--base-blue);
  padding: 5% 5% 2% 5%;
  .copy-rights {
    margin-top: 5rem;
    text-align: center;
    font-size: 1rem;
    color: #bababa;
    font-weight: 500;
    line-height: 1.25;
  }
}
.wrapper {
  display: flex;
  justify-content: space-between;
}
.left-side {
  display: flex;
  flex-direction: row;
}
.right-side {
  display: flex;
  flex-direction: row;
}
.title {
  margin-right: 10%;
  width: 20vw;
  img {
    width: 5rem;
    margin: 0 0 0.5rem 0;
  }
  p {
    font-size: 1rem;
    color: #bababa;
    font-weight: 500;
    line-height: 1.25;
  }
}
.explore {
  display: flex;
  flex-direction: column;
  width: 15vw;
  h3 {
    color: #bababa;
    font-size: 1.75rem;
    font-weight: 500;
    margin: 0 0 1rem 0;
  }
  a {
    color: #bababa;
    font-size: 1rem;
    font-weight: 500;
  }
}
.contact {
  display: flex;
  flex-direction: column;
  width: 18vw;
  h3 {
    color: #bababa;
    font-size: 1.75rem;
    font-weight: 500;
    margin: 0 0 1rem 0;
  }
  a {
    color: #bababa;
    font-size: 1rem;
  }
  &-info {
    display: flex;
    align-items: center;
    margin: 0 0 1rem 0;
    img {
      width: 1.5rem;
      margin-right: 0.5rem;
    }
    p {
      font-size: 1rem;
      color: #bababa;
      line-height: 1.25;
      margin: 0 0 0 0.5rem;
    }
  }
}
</style>
