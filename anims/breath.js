import { makeClassName as m } from '../util'

export const animName = 'breath'

const breathAnimates = (theme) => {
  return {
    [`@keyframes ${animName}`]: theme(`keyframes.${animName}`),
    [m(animName)]: {
      animationDuration: theme('ani.duration.1'),
      animationName: animName,
      animationIterationCount: 'infinite',
      animationDirection: 'alternate-reverse',
      animationTimingFunction: 'ease-in-out',
    },
  }
}

export const breathKeyframes = {
  [animName]: {
    to: {
      transform: 'scale(1.15)',
    },
  },
}

export default breathAnimates
