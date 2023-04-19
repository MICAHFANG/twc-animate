import { makeClassName as m } from '../util'

export const animName = 'flicker'

const flickerAnimates = (theme) => {
  const flickerAfter = {
    content: '""',
    position: 'absolute',
    left: 'var(--tw-ani-flicker-start)',
    height: '150%',
    width: theme('spacing.1'),
    backgroundColor: 'rgba(255,255,255,0.3)',
    transform: 'rotate(var(--tw-ani-flicker-rotate, 0deg))',
    borderRadius: 8,
    animationName: animName,
    animationDuration: 'inherit',
    animationTimingFunction: 'inherit',
    animationDirection: 'inherit',
    boxShadow: '0 0 20px 3px #fff',
    opacity: '0',
  }
  return {
    [`@keyframes ${animName}`]: theme(`keyframes.${animName}`),
    [m(animName)]: {
      animationDuration: theme('ani.duration.800'),
      animationTimingFunction: 'cubic-bezier(.81,.15,.12,.99)',
      overflow: 'hidden',
      position: 'relative',
      '&::after': flickerAfter,
      '--tw-ani-flicker-start': '-20%',
      '--tw-ani-flicker-end': '120%',
      '--tw-ani-flicker-rotate': '-30deg',
    },
    [m(`${animName}-rtl`)]: {
      animationDuration: theme('ani.duration.800'),
      animationTimingFunction: 'cubic-bezier(.81,.15,.12,.99)',
      overflow: 'hidden',
      position: 'relative',
      '&::after': flickerAfter,
      '--tw-ani-flicker-rotate': '30deg',
      '--tw-ani-flicker-start': '120%',
      '--tw-ani-flicker-end': '-20%',
    },
  }
}

export const flickerKeyframes = {
  [animName]: {
    from: { opacity: 1 },
    to: {
      left: 'var(--tw-ani-flicker-end, 100%)',
      opacity: '0',
    },
  },
}

export default flickerAnimates
