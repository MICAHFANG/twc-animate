import { makeClassName as m } from './util'
import shakeAnimates, { shakeKeyframes } from './anims/shake'
import rippleAnimates, { rippleKeyframes } from './anims/ripple'

import plugin from 'tailwindcss/plugin'

export default plugin(
  ({ addUtilities, theme, addBase, addVariant, matchComponents }) => {
    // basic animations
    addUtilities({
      ...shakeAnimates(theme),
      ...rippleAnimates(theme),
      [m('breath')]: {},
      [m('flicker')]: {},
      [m('jump')]: {},
      [m('float')]: {},
      [m('spin')]: {},
    })

    // animation counts
    matchComponents(
      {
        'ani-count': (value) => ({
          animationIterationCount: `${value} !important`,
        }),
      },
      { values: theme('ani.count'), type: 'number' },
    )

    // animation
    matchComponents(
      {
        'ani-duration': (value) => ({
          animationDuration: `${value} !important`,
        }),
      },
      { values: theme('ani.duration') },
    )
  },
  {
    theme: {
      extend: {
        keyframes: {
          ...shakeKeyframes,
          ...rippleKeyframes,
        },
      },
      ani: {
        count: {
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
          10: '10',
          infinite: 'infinite',
        },
        duration: {
          1: '1s',
          2: '2s',
          3: '3s',
          200: '200ms',
          300: '300ms',
          400: '400ms',
          500: '500ms',
          800: '800ms',
          1000: '1000ms',
        },
      },
    },
  },
)
