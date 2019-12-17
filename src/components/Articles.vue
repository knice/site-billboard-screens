<template>
  <div class="articles">
    <h1>Recent News</h1>
    <ul class="article-list">
      <li v-for="i in articles" :key="i.index">        
        <qrcode :value="i.url" :options="{ width: 80, margin: 2 }"></qrcode>
        <div class="text">
            <p v-html="i.date"></p>
            <h2>{{ i.title }}</h2>
        </div>
        <!-- <img :src="i.thumbnail" :alt="i.title" class="thumbnail"> -->
    </li>
  </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Articles",
  props: {
    msg: String
  },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    axios({ method: "GET", "url": "data/articles.json" }).then(result => {
      this.articles = result.data.items.slice(0, 8);
    }, error => {
        console.error(error);
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.articles {
    text-align: left;
    padding: 0 1.2vw;
    font-size: 1.4vw;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1em;
  grid-column-gap: .5em;
  text-align: left;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
display: flex;
flex-direction: row;
}

h1,
h2 {
    margin: 0 0 .25em 0;
    font-size: 1.725em;
    font-weight: 400;
    color: #333;
}

h2 {
    font-size: 1em;
}

p {
    margin: .28em 0 .25em;
    font-size: .75em;
}

canvas {
    display: block;
    margin: 0 .5rem .25em 0;
}
  
</style>
