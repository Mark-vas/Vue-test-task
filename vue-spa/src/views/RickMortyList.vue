<template>
  <div class="character">
    <h1>Все персонажи сериала "Рик и Морти"</h1>
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
    <div>
      <button @click="showAllEpisodes">Все эпизоды</button>
    </div>
    <div class="character-list">
      <character-block
        v-for="character in allCharacters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script>
import CharacterBlock from "../components/CharacterBlock.vue";
export default {
  name: "rick-morty-list",
  components: {
    CharacterBlock,
  },
  data() {
    return {
      currentPage: "",
    };
  },
  computed: {
    allCharacters() {
      return this.$store.getters.getAllCharacters;
    },
    allInfo() {
      return this.$store.getters.getInfoCharacters;
    },
  },
  methods: {
    showAllEpisodes() {
      this.$router.push({ name: "RickMortyEpisode" });
    },
    clickButtonBack() {
      if (this.currentPage == 1) {
      } else this.currentPage--;
    },
    clickButtonNext() {
      if (this.currentPage == 34) {
      } else this.currentPage++;
    },
    clickNumberButton(page) {
      debugger;
      this.currentPage = page.currentTarget.innerText;
    },
  },
  watch: {
    currentPage: {
      handler(page) {
        debugger;
        this.$store.dispatch("loadAllCharacters", page);
      },
      immediate: true,
    },
  },
};
</script>

<style >
.character {
  max-width: 1280px;
  margin: 0 auto;
}
.character-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 10px;
}
h1 {
  text-align: center;
}
.button-navigation {
  text-align: center;
}
</style>
