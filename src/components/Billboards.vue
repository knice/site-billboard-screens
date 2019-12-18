<template>
  <div class="billboards">
    <slider
      animation="fade"
      height="100%"
      :interval="7000"
      :speed="2000"
      :indicators="false"
      :control-btn="false"
    >
      <slider-item v-for="b in billboards" :key="b.index">
        <div class="text">
          <qrcode
            :value="b.link"
            :options="{
              width: 80,
              margin: 2,
              color: { dark: '#333', light: '#fff' }
            }"
          >
          </qrcode>
          <div class="teaser">
            <h1>{{ b.headline }}</h1>
            <p v-html="b.teaser"></p>
          </div>
        </div>
        <img :src="b.image" :alt="b.headline" class="banner" />
      </slider-item>
    </slider>
  </div>
</template>

<script>
import axios from "axios";
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "Billboards",
  components: {
    Slider,
    SliderItem
  },
  props: {
    msg: String
  },
  data() {
    return {
      billboards: []
    };
  },
  mounted() {
    axios({ method: "GET", url: "data/billboards" }).then(
      result => {
        this.billboards = result.data.billboards;
      },
      error => {
        window.console.error(error);
      }
    );
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.billboards {
  padding: 1.2vw;
}

.slider {
  height: calc(100vw / 3.2) !important;
}

.slider-item {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

.banner {
  height: auto;
  width: 100%;
  z-index: -999;
}

.text {
  position: absolute;
  padding: 1.2em 4.4em 1.2em 2em;
  color: #fff;
  background-color: rgba(2, 48, 133, 0.6);
  width: 33em;
  font-size: 1.38vw;
  font-weight: 400;
  z-index: 999;
  text-align: left;
  line-height: 1.3;
  bottom: 2vh;
  clip-path: polygon(0 0, 100% 0, 96% 100%, 0% 100%);
  display: flex;

  h1 {
    margin: -0.15em 0 0.28em 0;
    font-size: 2em;
    font-weight: 600;
    line-height: 1.26;
    text-transform: uppercase;
  }

  p {
    margin: 0;
  }

  canvas {
    display: block;
    float: left;
    margin: 0.15em 1em 0.25em 0;
  }

  .left & {
    left: 0;
    bottom: 2vw;
  }

  .right & {
    right: 0;
    bottom: 2vw;
  }

  .bottom & {
    left: 0;
    bottom: 2vw;

    .teaser {
      max-width: 42em;
    }
  }
}
</style>
