import gsap from "gsap";

export default {
  data() {
    return {
      viewed: [],
      index: 0,
      intervalId: null,
      images: ['/img/a.png', '/img/b.png', '/img/c.jpg', '/img/d.png'],
      viewedCount: 2,
      duration: 3500,
      direction: 'left'
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
    }
  },

  mounted() {
    if (this.images.length) {
      clearInterval(this.intervalId)
      this.render();
    }
  },
  unmounted() {
    this.interval && clearInterval(this.intervalId);
  },
  watch: {
    'images.length': function () {
      if (this.images.length) {
        clearInterval(this.intervalId);
        this.render()
      }
    }
  },
}