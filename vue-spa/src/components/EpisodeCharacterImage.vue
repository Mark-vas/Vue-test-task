<template>
  <div class="episode-character-block">
    <img @click="clickImg" :id="id" :src="img" alt="" />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "episode-character-image",
  props: { episodeImage: "" },
  data() {
    return {
      img: "",
      id: "",
    };
  },
  mounted() {
    axios.get(`${this.episodeImage}`).then((res) => {
      this.img = res.data.image;
      this.id = res.data.id;
    });
  },
  methods: {
    clickImg(event) {
      let id = event.currentTarget.id;
      this.$router.push({
        name: "OneCharacter",
        params: { id: id },
      });
    },
  },
};
</script>

<style>
img {
  width: 60px;
}
</style>