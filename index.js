import { makeClassName as m } from './util'
import shakeAnimates, { shakeKeyframes } from './anims/shake'

import plugin from 'tailwindcss/plugin'

export default plugin(
  ({ addUtilities, theme, addBase, addVariant, matchComponents }) => {
    // basic animations
    addUtilities({
      [m('infinite')]: {
        animationIterationCount: 'infinite',
      },
      ...shakeAnimates(theme),
      [m('ripple')]: {},
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
        },
      },
      ani: {
        count: [, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        duration: {
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
