<template>
  <div class="home">
    <img src="https://img.icons8.com/color/48/000000/lightsaber.png">
    <h1>Star Wars Characters</h1>
    <img style="transform: rotate(270deg)" src="https://img.icons8.com/color/48/000000/lightsaber.png">

    <Paginator class="pg-top" :next="nextPage" :previous="previousPage" />

    <ul class="characters-list">
      <li v-for="(character, index) in characters" :key="index">
        <CharacterCard :character="character" />
      </li>
    </ul>

    <Paginator :next="nextPage" :previous="previousPage" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import CharacterCard from '../components/CharacterCard.vue';
import Paginator from '../components/Paginator.vue';

import { fetchChatacters } from '../repository/api';

export default {
  name: 'home',

  components: {
    CharacterCard,
    Paginator,
  },

  data() {
    return {
      nextPage: null,
      previousPage: null,
    };
  },

  computed: {
    ...mapState(['characters', 'page']),
  },

  methods: {
    ...mapActions([
      'setCharacters',
      'setPage',
    ]),

    async loadCharacters(page) {
      const { results, next, previous } = await fetchChatacters(page);
      this.setCharacters(results);
      this.nextPage = next || '';
      this.previousPage = previous || '';
    },
  },

  created() {
    this.setPage(this.$route.params.page || 1);
    this.loadCharacters(this.page);
    console.log('Created! ', this.page);
  },
};
</script>

<style lang="scss" scoped>
  .home {
    background-color: #424242;
    padding-bottom: 30px;
    min-height: 500px;
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

    .paginator {
      margin-top: 20px;
      &.pg-top {
        box-sizing: border-box;
        display: block;
        padding-right: 100px;
        text-align: right;
        width: 100%;
        @include media-mobile { display: none; }
      }
    }
  }
</style>
