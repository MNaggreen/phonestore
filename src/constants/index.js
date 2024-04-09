import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from '../utils'

export const navLists = ['Магазин', 'Mac', 'iPhone', 'Поддержка']

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      'Вступите в эру A17 Pro.',
      'Процессор меняющий привычные правила.',
      'Новаторская производительность.',
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ['Титан.', 'Такой сильный. Такой легкий. Такой Pro.'],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      'iPhone 15 Pro Max имеет',
      'самый большой оптический зум в',
      'iPhone. Очень далеко.',
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ['Совершенно новая кнопка действия.', 'Что будет делать ваша?'],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
]

export const models = [
  {
    id: 1,
    title: 'iPhone 15 Pro Натуральный Титан',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  },
  {
    id: 2,
    title: 'iPhone 15 Pro Синий Титан',
    color: ['#53596E', '#6395ff', '#21242e'],
    img: blueImg,
  },
  {
    id: 3,
    title: 'iPhone 15 Pro Белый Титан',
    color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
    img: whiteImg,
  },
  {
    id: 4,
    title: 'iPhone 15 Pro Черный Титан',
    color: ['#454749', '#3b3b3b', '#181819'],
    img: blackImg,
  },
]

export const sizes = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' },
]

export const footerLinks = [
  'Конфиденциальность',
  'Условия',
  'Политика',
  'Правила',
  'Карта',
]
