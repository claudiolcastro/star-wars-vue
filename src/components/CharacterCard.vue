<template>
  <div class="character-card">
    <dir class="char-image">
      <img src="" :alt="character.name">
    </dir>

    <span class="char-name">
      {{ character.name }}
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { fetchStarships } from '../repository/api';

export default {
  name: 'CharacterCard',

  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  computed: {
  },

  methods: {
    ...mapActions([
    ]),
  },

  created() {
  },
};
</script>

<style lang="scss" scoped>
  .character-card {
    border: 1px solid $black;
    border-radius: 3px;
    color: $white;
    height: 285px;
    width: 250px;
  }
</style>
