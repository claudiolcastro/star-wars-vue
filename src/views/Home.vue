<template>
  <div class="home">
    <img src="https://img.icons8.com/color/48/000000/lightsaber.png">
    <h1>Star Wars Characters</h1>
    <img style="transform: rotate(270deg)" src="https://img.icons8.com/color/48/000000/lightsaber.png">

    <ul class="characters-list">
      <li v-for="(character, index) in characters" :key="index">
        <CharacterCard :character="character" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import CharacterCard from '../components/CharacterCard.vue';

import { fetchChatacters } from '../repository/api';

export default {
  name: 'home',

  components: {
    CharacterCard,
  },

  computed: {
    ...mapState(['characters']),
  },

  methods: {
    ...mapActions([
      'setCharacters',
      'setPage',
    ]),

    async loadCharacters(page) {
      const { results } = await fetchChatacters(page);
      this.setCharacters(results);
    },
  },

  created() {
    this.loadCharacters(1);
  },
};
</script>

<style lang="scss" scoped>
  .home {
    background-color: #424242;
    padding-bottom: 30px;
    width: 100%;

    h1 {
      color: $yellow;
      display: inline-block;
      font-family: 'Bebas Neue', cursive;
      font-size: 52px;
      margin: 50px 20px 0 20px;
      @include media-mobile {
        font-size: 32px;
      }
    }

    .characters-list {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      margin: 35px auto 0 auto;
      width: fit-content;

      li {
        float: left;
        margin: 15px 0 0 15px;
      }
    }
  }
</style>
