<template>
  <div class="episodes">
    <div>
      <button @click="goBack">На главную страницу</button>
    </div>
    <h1>Все эпизоды</h1>
    <div class="button-navigation">
      <button @click="clickButtonBack" type="button" :v-model="currentPage">
        BACK
      </button>
      <button
        @click="clickNumberButton"
        v-for="page in allInfo"
        :key="page"
        type="button"
        :v-model="currentPage"
      >
        {{ page }}
      </button>
      <button @click="clickButtonNext" type="button" :v-model="currentPage">
        NEXT
      </button>
    </div>
    <div>
      <p>Текущая страница: {{ currentPage }}</p>
    </div>
    <div class="episode-list">
      <episode-block
        v-for="episode in allEpisodes"
        :key="episode.id"
        :episode="episode"
      />
    </div>
  </div>
</template>

<script>
import EpisodeBlock from "../components/EpisodeBlock.vue";
export default {
  name: "rick-morty-episode",
  components: {
    EpisodeBlock,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    allEpisodes() {
      return this.$store.getters.getAllEpisodes;
    },
    allInfo() {
      return this.$store.getters.getInfoEpisodes;
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "RickMortyList" });
    },
    clickButtonBack() {
      if (this.currentPage == 1) {
      } else this.currentPage--;
    },
    clickButtonNext() {
      if (this.currentPage == 3) {
      } else this.currentPage++;
    },
    clickNumberButton(page) {
      this.currentPage = page.currentTarget.innerText;
    },
  },
  watch: {
    currentPage: {
      handler(page) {
        this.$store.dispatch("loadAllEpisodes", page);
      },
      immediate: true,
    },
  },
};
</script>
<style >
.episodes {
  max-width: 1280px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
.button-navigation {
  text-align: center;
}
.episode-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>