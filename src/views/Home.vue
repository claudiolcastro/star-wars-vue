<template>
  <div class="home">
    <h1>Star Wars Characters</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { fetchChatacters } from '../repository/api';

export default {
  name: 'home',

  components: {
  },

  computed: {
    ...mapState(['characters']),
  },

  methods: {
    ...mapActions([
      'setCharacters',
      'setPage',
    ]),

    async loadCharacters() {
      const { results } = await fetchChatacters(1);
      this.setCharacters(results);
    },
  },

  created() {
    this.loadCharacters();
  },
};
</script>

<style lang="scss" scoped>
  .home {
    margin-bottom: 30px;

    h1 {
      font-family: 'Bebas Neue', cursive;
      font-size: 42px;
      margin-top: 50px;
    }
  }
</style>
