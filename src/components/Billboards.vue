<template>
  <div class="billboards">
    <ol class="container">
      <li v-for="b in billboards" :key="b.index" :class="[b.layout, b.color]">
        <div class="text">
          <h1>{{ b.headline }}</h1>
          <p v-html="b.teaser"></p>
          <qrcode :value="b.link" :options="{ width: 200 }"></qrcode>
        </div>
        <img :src="b.image" :alt="b.headline">
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
    axios({ method: "GET", "url": "billboards.json" }).then(result => {
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container li {
  width: 100%;
}

.text {
  position: absolute;
  background-color: red;
}
</style>
