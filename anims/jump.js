import { makeClassName as m } from '../util'

export const animName = 'jump'

const jumpAnimates = (theme) => {
  return {
    [`@keyframes ${animName}`]: theme(`keyframes.${animName}`),
    [m(animName)]: {
      animationDuration: theme('ani.duration.800'),
      animationName: animName,
      animationIterationCount: '1',
      animationDirection: 'alternate-reverse',
      animationTimingFunction: 'linear',
      '--tw-translate-y': '0px',
    },
  }
}

export const jumpKeyframes = {
  [animName]: {
    '50%': {
      transform: 'scale(.9,1.1) translateY(calc(var(--tw-translate-y) - 2em))',
    },
    'from, to': { transform: 'scale(1)' },
  },
}

export default jumpAnimates
