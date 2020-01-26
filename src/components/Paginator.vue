<template>
  <div class="paginator">
    <a v-if="previous" :href="previousPage">Previous Page</a>
    <span class="current-page">{{ page }}</span>
    <a v-if="next" :href="nextPage">Next Page</a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Paginator',

  props: ['next', 'previous'],

  computed: {
    ...mapState(['page']),

    nextPage() {
      if (this.next) {
        const url = this.next.split('');
        return `/${url[url.length - 1]}`;
      }
      return null;
    },

    previousPage() {
      if (this.previous) {
        const url = this.previous.split('');
        return `/${url[url.length - 1]}`;
      }
      return null;
    },
  },

  methods: {
    ...mapActions([
      'setPage',
    ]),
  },

  created() {
  },
};
</script>

<style lang="scss" scoped>
  .paginator {
    a {
      border-radius: 19px;
      border: 1px solid;
      color: $white;
      font-size: 14px;
      padding: 5px;
      text-decoration: none;
      transition: .2s;
      &:hover {
        background-color: $black;
      }
    }

    .current-page {
      color: $yellow;
      font-weight: 600;
      margin: 0 15px;
    }
  }
</style>
