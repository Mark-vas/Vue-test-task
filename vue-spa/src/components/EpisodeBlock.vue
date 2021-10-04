<template>
  <div class="episodes-block">
    <h3>Название эпизода: {{ episode.name }}</h3>
    <p>Дата премьеры: {{ episode.air_date }}</p>
    <p>Список персонажей:</p>
    <div class="character-block-image">
      <li v-for="(character, index) in episode.characters" :key="index">
        <episode-character-image :episodeImage="character" />
      </li>
    </div>
  </div>
</template>

<script>
import EpisodeCharacterImage from "../components/EpisodeCharacterImage.vue";
export default {
  name: "episode-block",
  props: { episode: {} },
  components: {
    EpisodeCharacterImage,
  },
  data() {
    return {
      img: "",
    };
  },
};
</script>

<style>
.character-block {
  display: flex;
}
.character-image {
  width: 200px;
}
.character-info {
  margin-left: 10px;
}
li {
  list-style: none;
}
.character-block-image {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.episodes-block {
  padding: 10px;
}
</style>