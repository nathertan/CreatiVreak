import gsap from "gsap";

export default {
  data() {
    return {
      viewed: [],
      index: 0,
      intervalId: null,
      images: [{
        img: '/img/fitbreak.jpg',
        name: 'Fitbreak',
        reviewer: '- Anggelia',
        text: 'Hasil video dan foto sudah bagus dan menarik. Teknik pengambilan gambar juga sudah baik. Tim sangat kooperatif karena mendengarkan dan bisa mewujudkan permintaan klien.'
      },
      {
        img: '/img/lyscent.jpg',
        text: 'Oke banget sih kerjanya. Terakhir pake jasa event dan photographynya Creativreak dan hasilnya sesuai ekspetasi. Hasilnya juga cepet keluar, dan yang paling penting budgetnya sesuai...',
        name: 'Ly\'Scent',
        reviewer: '- Lynea'

      },
      {
        img: '/img/maven.png',
        name: 'PT. Maven Kreatif Gemintang',
        reviewer: '- Liyen',
        text: 'Buat Creativreak, talentnya bagus bagus dan saling mau kerjasama dan saling support, Thank you Creativreak!'
      },
      {
        img: '/img/soulfashion.jpg',
        name: 'Soulfashion',
        reviewer: '- Fallencia',
        text: 'Konten yang dibuat untuk soulfashion sudah cukup bagus dan dari tone warna juga sudah oke🫶🏻'
      },
      {
        img: '/img/healthygo.jpg',
        name: 'Healthy Go',
        reviewer: '- Rian Allaam',
        text: 'fast response banget, good work, good team. '
      }],
      viewedCount: 2,
      duration: 3500,
      direction: 'left',
      width: window.innerWidth
    }
  },
  methods: {
    left() {
      this.index = this.index % this.images.length;
      this.viewed.push(this.images[this.index]);
      this.index++;
      this.viewed.shift();
    },
    right() {
      this.viewed.unshift(this.images.at(this.index))
      this.index--;
      this.index = this.index % this.images.length;
      this.viewed.pop();
    },
    render() {
      this.width = window.innerWidth;
      this.viewed = this.images.slice(0, this.viewedCount);
      this.index = this.viewedCount;
      this.intervalId = setInterval(() => {
        this.direction === 'left' ? this.left() : this.right();
      }, this.duration);
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        onComplete: done
      })
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: -1,
        onComplete: async () => {
          await this.$nextTick()
          await new Promise(resolve => setTimeout(resolve, 2000))
          done()
        }
      })
    },
    handleResize() {
      if (this.width < 510) {
        this.viewedCount = 1;
      } else {
        this.viewedCount = 2;
      }
      clearInterval(this.intervalId)
      this.render();
    }
  },

  mounted() {
    if (this.width < 510) {
      this.viewedCount = 1;
    }
    window.addEventListener('resize', this.handleResize);
    if (this.images.length) {
      clearInterval(this.intervalId)
      this.render();
    }
  },
  unmounted() {
    this.interval && clearInterval(this.intervalId);
  }
}