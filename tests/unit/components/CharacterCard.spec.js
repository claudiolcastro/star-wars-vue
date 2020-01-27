import { shallowMount } from '@vue/test-utils';
import CharacterCard from '../../../src/components/CharacterCard.vue';

describe('CharacterCard', () => {
  it('Display Card with starships', () => {
    const character = {
      name: 'Luke Skywalker',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
      ],
      starships: [
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/',
      ],
    };

    const wrapper = shallowMount(CharacterCard, {
      propsData: {
        character,
      },
      data() {
        return {
          starships: [{ name: 'StarFighter', class: 'Fighter' }],
        };
      },
    });

    expect(wrapper.find('.char-name').text()).toBe('Luke Skywalker');
    expect(wrapper.find('.char-starships').exists()).toBe(true);
  });

  it('Display Card with NO starships', () => {
    const character = {
      name: 'Luke Skywalker',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
      ],
      starships: [
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/',
      ],
    };

    const wrapper = shallowMount(CharacterCard, {
      propsData: {
        character,
      },
    });

    expect(wrapper.find('.char-name').text()).toBe('Luke Skywalker');
    expect(wrapper.find('.char-starships').exists()).toBe(false);
  });
});
