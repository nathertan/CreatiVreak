import gsap from "gsap";

export default {
  data() {
    return {
      viewed: [],
      index: 0,
      intervalId: null,
      // images: ['/img/a.png', '/img/b.png', '/img/c.jpg', '/img/d.png'],
      images: [
        {
          src: '/img/portofolio/GRAB.PNG',
          title: 'Grab (2024)',
          description: 'Talent for Ramadhan Photoshoot',
        },
        {
          src: '/img/portofolio/WONGCOCO.PNG',
          title: 'Wong Coco (2024)',
          description: 'Talent for Wongcoco Advertisement',
        },
        {
          src: '/img/portofolio/LUCKY.PNG',
          title: 'Lucky Stick (2024)',
          description: 'Talent for Lucky Stick Advertisement',
        },
        // {
        //   src: '/img/portofolio/HERBALIFE.PNG',
        //   title: 'Herbalife',
        //   description: 'Talent for Herbalife Advertisement',
        // },
        {
          src: '/img/portofolio/LEKA.PNG',
          title: 'LEKA (2024)',
          description: 'LEKA Videography',
        },
        {
          src: '/img/portofolio/LEEVIERRA.PNG',
          title: 'Leevierra (2023)',
          description: 'Leevierra Videography',
        },
        {
          src: '/img/portofolio/CTBC.jpg',
          title: 'CTBC Bank (2023)',
          description: 'CTBC Bank Event Documentation',
          horizontal: true
        },
        {
          src: '/img/portofolio/FITBREAK.PNG',
          title: 'Fitbreak (2024)',
          description: 'Fitbreak Videography & Photography',
        },
        {
          src: '/img/portofolio/HEALTHY GO.PNG',
          title: 'Healthy Go (2024)',
          description: 'Healthy Go video content talent',
        }
      ],
      viewedCount: 3,
      duration: 2000,
      direction: 'left'
    }
  },
  // methods: {
  //   left() {
  //     this.index = this.index % this.images.length;
  //     this.viewed.push(this.images[this.index]);
  //     this.index++;
  //     this.viewed.shift();
  //   },
  //   right() {
  //     this.viewed.unshift(this.images.at(this.index))
  //     this.index--;
  //     this.index = this.index % this.images.length;
  //     this.viewed.pop();
  //   },
  //   render() {
  //     this.viewed = this.images.slice(0, this.viewedCount);
  //     this.index = this.viewedCount;
  //     this.intervalId = setInterval(() => {
  //       this.direction === 'left' ? this.left() : this.right();
  //     }, this.duration);
  //   },
  //   onEnter(el, done) {
  //     gsap.to(el, {
  //       opacity: 1,
  //       delay: el.dataset.index * 0.15,
  //       onComplete: done
  //     })
  //   },
  //   onLeave(el, done) {
  //     gsap.to(el, {
  //       opacity: -1,
  //       delay: el.dataset.index * 0.15,
  //       onComplete: done
  //     })
  //   }
  // },

  // mounted() {
  //   if (this.images.length) {
  //     clearInterval(this.intervalId)
  //     this.render();
  //   }
  // },
  // unmounted() {
  //   this.interval && clearInterval(this.intervalId);
  // },
  // watch: {
  //   'images.length': function () {
  //     if (this.images.length) {
  //       clearInterval(this.intervalId);
  //       this.render()
  //     }
  //   }
  // },
}