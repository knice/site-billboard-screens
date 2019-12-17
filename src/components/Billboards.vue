<template>
  <div class="billboards">
    <ol class="container">
      <li v-for="b in billboards" :key="b.index" :class="[b.layout, b.color]">
        <div class="text">
          <h1>{{ b.headline }}</h1>
          <div class="teaser">
            <qrcode :value="b.link" :options="{ width: 80, margin: 2 }"></qrcode>
            <p v-html="b.teaser"></p>
          </div>
        </div>
        <img :src="b.image" :alt="b.headline" class="banner">
    </li>
  </ol>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Billboards",
  props: {
    msg: String
  },
  data() {
    return {
      billboards: []
    };
  },
  mounted() {
    axios({ method: "GET", "url": "data/billboards.json" }).then(result => {
      this.billboards = result.data.billboards;
    }, error => {
        console.error(error);
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ol {
  list-style-type: none;
  padding: 0 0 2rem 0;
  margin: 0;
  position: relative;
  min-height: calc(100vw/3.2);
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.banner {
  height: auto;
  width: 100%;
  z-index: -999;
}

.text {
  position: absolute;
  padding: 1.2vw 4.4vw 1.2vw 2vw;
  color: #fff;
  background-color: rgba(81, 163, 189, 0.8);
  width: 33rem;
  font-size: 16px;
  font-weight: 400;
  z-index: 999;
  text-align: left;
  line-height: 1.3;
  clip-path: polygon(0 0, 100% 0, 96% 100%, 0% 100%);

  h1 {
    margin: 0 0 .25rem 0;
    font-size: 2.225rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    margin: .5rem 0 0;
  }

  canvas {
    display: block;
    float: right;
    margin: 0 0 .25em 1em;
  }
  
  .left & {
    left: 0;
    bottom: 2vh;
  }

  .right & {
    right: 0;
    bottom: 2vh;
  }

  .bottom & {
    left: 0;
    bottom: 2vh;
    
    .teaser {
      max-width: 42rem;
    }
  }
}



</style>
