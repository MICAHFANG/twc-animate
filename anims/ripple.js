import { makeClassName as m } from '../util'

export const animName = 'ripple'

const rippleAnimates = (theme) => {
  return {
    [`@keyframes ${animName}`]: theme(`keyframes.${animName}`),
    [m(animName)]: {
      position: 'relative',
      overflow: 'hidden',
      animationDuration: theme('ani.duration.1'),
      '&::after': {
        animationName: animName,
        animationDuration: 'inherit',
        animationIterationCount: 'inherit',
        content: '""',
        position: 'absolute',
        top: '50%',
        left: ' 50%',
        width: 0,
        aspectRatio: '1',
        transform: 'translate(-50%, -50%)',
        opacity: 0.3,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
        filter: 'grayscale(1) contrast(99) invert(1)',
      },
    },
  }
}

export const rippleKeyframes = {
  [animName]: {
    from: {
      width: 0,
    },
    to: {
      width: '100%',
      opacity: 0,
    },
  },
}

export default rippleAnimates
