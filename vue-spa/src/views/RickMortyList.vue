<template>
  <div class="character">
    <h1>Все персонажи сериала "Рик и Морти"</h1>
    <div class="character-list">
      <character-block
        v-for="character in allCharacters"
        :key="character.id"
        :character="character"
      />
    </div>
    <div>
      <button @click="clickButtonBack" type="button" :v-model="currentPage">
        BACK
      </button>
      <button @click="clickButtonNext" type="button" :v-model="currentPage">
        NEXT
      </button>
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
      currentPage: 1,
    };
  },
  created() {
    this.$store.dispatch("loadCharacters", this.currentPage);
  },
  computed: {
    allCharacters() {
      return this.$store.getters.getCharacters;
    },
  },
  methods: {
    clickButtonBack() {
      if (this.currentPage == 1) {
      } else this.currentPage--;
      console.log(this.currentPage);
    },
    clickButtonNext() {
      if (this.currentPage == 34) {
      } else this.currentPage++;
      console.log(this.currentPage);
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
}
h1 {
  text-align: center;
}
</style>
