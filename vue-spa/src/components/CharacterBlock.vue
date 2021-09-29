<template>
  <div class="character">
    <div>
      <img :src="character.image" alt="" />
    </div>
    <div>
      <h3>{{ character.name }}</h3>
      <p>{{ character.species }}</p>
      <p>{{ character.status }}</p>
      <!-- <p>{{ character.location.name }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "character-block",
  props: { character: {} },
};
</script>

<style>
img {
  width: 150px;
}
</style>