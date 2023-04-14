import { makeClassName as m } from '../util'

export const animName = 'shake'

const shakeAnimates = (theme) => {
  return {
    [`@keyframes ${animName}`]: theme(`keyframes.${animName}`),
    [m(animName)]: {
      animationName: animName,
      animationDuration: theme('ani.duration.200'),
      '--tw-ani-shake-rotate-start': '0deg',
      '--tw-ani-shake-rotate-midway': '5deg',
      '--tw-ani-shake-rotate-reverse': '-5deg',
    },
    [m(`${animName}-horizontal`)]: {
      animationName: animName,
      animationDuration: theme('ani.duration.200'),
      '--tw-ani-shake-translate-x-start': '0',
      '--tw-ani-shake-translate-x-midway': '5px',
      '--tw-ani-shake-translate-x-reverse': '-5px',
    },
    [m(`${animName}-vertical`)]: {
      animationName: animName,
      animationDuration: theme('ani.duration.200'),
      '--tw-ani-shake-translate-y-start': '0',
      '--tw-ani-shake-translate-y-midway': '5px',
      '--tw-ani-shake-translate-y-reverse': '-5px',
    },
  }
}

export const shakeKeyframes = {
  [animName]: {
    '0%, 50%, 100%': {
      transform:
        'translate(var(--tw-ani-shake-translate-x-start, 0), var(--tw-ani-shake-translate-y-start, 0)) rotate(var(--tw-ani-shake-rotate-start, 0))',
    },
    '25%': {
      transform:
        'translate(var(--tw-ani-shake-translate-x-midway, 0), var(--tw-ani-shake-translate-y-midway, 0)) rotate(var(--tw-ani-shake-rotate-midway, 0))',
    },
    '75%': {
      transform:
        'translate(var(--tw-ani-shake-translate-x-reverse, 0), var(--tw-ani-shake-translate-y-reverse, 0)) rotate(var(--tw-ani-shake-rotate-reverse, 0))',
    },
  },
}

export default shakeAnimates
