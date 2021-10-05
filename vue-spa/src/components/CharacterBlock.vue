<template>
  <div class="character-block">
    <div>
      <img class="character-image" :src="character.image" alt="" />
    </div>
    <div class="character-info">
      <h3 @click="oneCharacter">{{ character.name }}</h3>
      <p>Вид: {{ character.species }}</p>
      <p>Статус: {{ character.status }}</p>
      <p>Местоположение: {{ character.location.name }}</p>
      <div>
        Эпизоды:
        <li
          @click="oneEpisode"
          v-for="(episode, index) in character.episode"
          :key="index"
        >
          {{ episode }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "character-block",
  props: { character: {} },
  methods: {
    oneEpisode(event) {
      let str = event.currentTarget.innerText;
      let num = str.split("https://rickandmortyapi.com/api/episode/").join("");
      this.$router.push({
        name: "OneEpisodeBlock",
        params: { id: num },
      });
    },
    oneCharacter() {
      this.$router.push({
        name: "OneCharacter",
        params: { id: this.character.id },
      });
    },
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
</style>