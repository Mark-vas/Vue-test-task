<template>
  <div class="character">
    <div>
      <button @click="goBack">BACK</button>
    </div>
    <h1>Карточка Персонажа</h1>
    <div class="character-block">
      <div>
        <img class="character-image" :src="getOneCharacter.image" alt="" />
      </div>
      <div class="character-info">
        <h3>{{ getOneCharacter.name }}</h3>
        <p>Вид: {{ getOneCharacter.species }}</p>
        <p>Статус: {{ getOneCharacter.status }}</p>
        <p>Местоположение: {{ getOneCharacter.location.name }}</p>
      </div>
    </div>
    <div>
      Эпизоды:
      <li v-for="(episode, index) in getOneCharacter.episode" :key="index">
        {{ episode }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "one-character",
  data() {
    return {
      oneCharacter: [],
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "RickMortyList" });
    },
  },
  created() {
    return this.$store.dispatch("loadOneCharacter", this.$route.params.id);
  },
  computed: {
    getOneCharacter() {
      return this.$store.getters.getOneCharacter;
    },
  },
};
</script>
<style >
.character {
  max-width: 1280px;
  margin: 0 auto;
}
.character-block {
  display: flex;
  margin-top: 10px;
}
.character-info {
  margin-left: 10px;
}
</style>