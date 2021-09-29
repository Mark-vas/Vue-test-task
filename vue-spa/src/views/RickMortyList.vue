<template>
  <div id="home">
    <character-block
      v-for="character in allCharacters"
      :key="character.id"
      :character="character"
    />
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
    return {};
  },
  created() {
    this.$store.dispatch("loadCharacters");
  },
  computed: {
    allCharacters() {
      return this.$store.state.characters;
    },
  },
  methods: {},
};
</script>
