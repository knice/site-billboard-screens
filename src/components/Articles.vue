<template>
  <div class="articles">
    <ul class="article-list">
      <li v-for="i in articles" :key="i.index">
        <qrcode
          :value="i.url"
          :options="{
            width: 80,
            margin: 2,
            color: { dark: '#333', light: '#fff' }
          }"
        >
        </qrcode>
        <div class="text">
          <p v-html="i.date"></p>
          <h2 v-html="widows(i.title)"></h2>
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
    axios({ method: "GET", url: "data/articles" }).then(
      result => {
        this.articles = result.data.items.slice(0, 6);
      },
      error => {
        window.console.error(error);
      }
    );
  },
  methods: {
    // Method to add non-breaking space to text output
    // https://css-tricks.com/preventing-widows-in-post-titles/
    widows: function(title) {
      var titleArray = title.split(" ");
      if (titleArray.length > 1) {
        titleArray[titleArray.length - 2] +=
          "&nbsp;" + titleArray[titleArray.length - 1];
        titleArray.pop();
        return titleArray.join(" ");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.articles {
  text-align: left;
  padding: 1vw 1.2vw;
  font-size: 1.25vw;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1.5em;
  grid-column-gap: 3.2em;
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
  margin: 0 0 0.25em 0;
  font-weight: 400;
  color: #333;
  line-height: 1.28;
}

h1 {
  font-size: 2.6em;
  text-align: center;
  margin: 0.5vw 0 1vw;
  font-weight: 400;
  text-transform: uppercase;
}

h2 {
  font-size: 1.35em;
}

p {
  margin: 0 0 0.25em;
  font-size: 0.75em;
}

canvas {
  display: block;
  margin: 0 0.5rem 0.25em 0;
}
</style>
