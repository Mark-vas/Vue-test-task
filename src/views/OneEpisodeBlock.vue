<template>
  <div class="episode">
    <div>
      <button @click="goBack">BACK</button>
    </div>
    <h1>Описание эпизода</h1>
    <div class="episode-block">
      <div class="episode-info">
        <h3>Название эпизода: {{ getOneEpisode.name }}</h3>
        <p>Дата премьеры: {{ getOneEpisode.air_date }}</p>
        <p>Список персонажей:</p>
        <div class="character-block-image">
          <li v-for="(image, index) in getOneEpisode.characters" :key="index">
            <episode-character-image :episodeImage="image" />
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeCharacterImage from "../components/EpisodeCharacterImage.vue";
export default {
  name: "one-character",
  components: {
    EpisodeCharacterImage,
  },
  data() {
    return {
      oneEpisode: [],
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "RickMortyList" });
    },
  },
  created() {
    return this.$store.dispatch("loadOneEpisode", this.$route.params.id);
  },
  computed: {
    getOneEpisode() {
      return this.$store.getters.getOneEpisode;
    },
  },
};
</script>
<style >
.episode {
  max-width: 1280px;
  margin: 0 auto;
}
.episode-block {
  display: flex;
  margin-top: 10px;
}
.episode-info {
  margin-left: 10px;
}
.character-block-image li {
  list-style: none;
}
.character-block-image {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>