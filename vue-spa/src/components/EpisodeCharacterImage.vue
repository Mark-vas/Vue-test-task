<template>
  <div class="episode-character-block">
    <img :src="img" alt="" />
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
    };
  },
  mounted() {
    axios
      .get(`${this.episodeImage}`)
      .then((res) => (this.img = res.data.image));
  },
};
</script>

<style>
img {
  width: 60px;
}
</style>