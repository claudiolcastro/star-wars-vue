<template>
  <div class="character-card">
    <dir class="char-image">
      <img :src="charImage" :alt="character.name">
    </dir>

    <b class="char-name">
      {{ character.name }}
    </b>

    <span class="char-planet">
      From: <b>{{ planetName }}</b>
    </span>

    <div v-if="films" class="char-films">
      <b class="label" @click="toggleFilms()">
        Films:
        <svg viewBox="0 0 129 129" enable-background="new 0 0 129 129"><g><path fill="#ffffff" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>
      </b>
      <ul class="list" :class="{showFilms}">
        <li v-for="(film, index) in filmsTitles" :key="index">
          <b>{{ film }}</b>
        </li>
      </ul>
    </div>

    <div v-if="starships" class="char-starships">
      <b class="label" @click="toggleStarships()">
        Starships:
        <svg viewBox="0 0 129 129" enable-background="new 0 0 129 129"><g><path fill="#ffffff" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>
      </b>
      <ul class="list" :class="{showStarships}">
        <li class="group" v-for="(starship, index) in starShipsInfo" :key="index">
          <span>Name: <b>{{ starship.name }}</b></span>
          <span>Class: <b>{{ starship.class }}</b></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { fetchInfo, fetchDuckDuckSearch } from '../repository/api';

export default {
  name: 'CharacterCard',

  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      starships: null,
      films: null,
      planet: null,
      charImage: null,
      showFilms: false,
      showStarships: false,
    };
  },

  computed: {
    planetName() {
      return this.planet ? this.planet.name : '';
    },

    filmsTitles() {
      if (this.films) {
        return this.films.map(film => film.title);
      }
      return null;
    },

    starShipsInfo() {
      if (this.starships) {
        return this.starships.map(starship => ({
          name: starship.name,
          class: starship.starship_class,
        }));
      }
      return null;
    },
  },

  methods: {
    ...mapActions([
    ]),

    getStarships() {
      this.character.starships.forEach(async (film) => {
        const starshipInfo = await fetchInfo(film);
        this.starships = this.starships ? [...this.starships, starshipInfo] : [starshipInfo];
      });
    },

    getFilms() {
      this.character.films.forEach(async (film) => {
        const filmInfo = await fetchInfo(film);
        this.films = this.films ? [...this.films, filmInfo] : [filmInfo];
      });
    },

    async getPlanet() {
      const result = await fetchInfo(this.character.homeworld);
      this.planet = result;
    },

    async getCharImage(name) {
      const formatedName = name.replace('-', '');
      console.log(formatedName);
      const { Image } = await fetchDuckDuckSearch(formatedName);
      this.charImage = Image;
    },

    toggleFilms() {
      this.showStarships = false;
      this.showFilms = !this.showFilms;
    },

    toggleStarships() {
      this.showFilms = false;
      this.showStarships = !this.showStarships;
    },
  },

  created() {
    this.getPlanet();
    this.getFilms();
    this.getStarships();
    this.getCharImage(this.character.name);
  },
};
</script>

<style lang="scss" scoped>
  .character-card {
    border: 1px solid $black;
    border-radius: 3px;
    color: $white;
    min-height: 440px;
    height: auto;
    padding: 10px 0;
    width: 250px;

    .char {
      &-image {
        background-color: $border-light;
        height: 220px;
        margin: 10px auto;
        padding: 0;
        width: 180px;
        img {
          margin: 0 auto;
          height: 220px;
          width: 180px;
        }
      }

      &-name {
        display: block;
        font-size: 18px;
      }

      &-planet {
        display: block;
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
      }

      &-films, &-starships {
        margin-top: 15px;
        padding: 0 10px;

        .label {
          cursor: pointer;
          display: block;
          text-align: start;
          svg {
            float: right;
            width: 15px;
          }
        }

        .list {
          display: block;
          margin-top: 10px;
          max-height: 0;
          overflow: hidden;
          text-align: start;
          transition: max-height 0.5s;
          &.showFilms, &.showStarships {
            max-height: 300px;
            overflow: scroll;
          }

          li {
            display: block;
            margin-top: 5px;
            b { color: $yellow; }
            span {
              display: block;
              margin-top: 5px;
            }

            &.group {
              border: 1px solid #000;
              border-radius: 3px;
              padding: 5px;
            }
          }
        }
      }
    }
  }
</style>
