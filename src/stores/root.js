import { ref } from "vue"
import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
  state: () => ({
    activeCat: ref(1),
    langs: [
      { id: 2, value: 'ru', title: "RU" },
      { id: 1, value: 'kz', title: "KZ" },
      { id: 3, value: 'en', title: "EN" }
    ],
    aboutItems: [
      { id: 1, title: 'Доставка', text: 'Быстрая доставка по Казахстану и России', img: 'src/assets/img/icons/about1.svg' },
      { id: 2, title: '10 Лет', text: '10 лет непрерывного опыта', img: 'src/assets/img/icons/about2.svg' },
      { id: 3, title: '150 единиц', text: 'сотрудников предприятия', img: 'src/assets/img/icons/about3.svg' },
      { id: 4, title: 'Качество', text: 'премиальное качество продукции', img: 'src/assets/img/icons/about4.svg' }
    ],
    cats: [
      { id: 1, name: 'Мужская одежда', },
      { id: 2, name: 'Женская одежда', },
      { id: 3, name: 'Спецодежда', },
      { id: 4, name: 'Принт', },
      { id: 5, name: 'Вышивка', },
      { id: 6, name: 'Авто-чехлы', },
      { id: 7, name: 'Маски', },
      { id: 8, name: 'Шторы', },
    ],
    catItems: [
      { id: 1, img: 'src/assets/img/cat1.png', name: 'Пальто', catId: 1 },
      { id: 2, img: 'src/assets/img/cat2.png', name: 'Поло', catId: 1 },
      { id: 3, img: 'src/assets/img/cat3.png', name: 'Рубашки', catId: 1 },
      { id: 4, img: 'src/assets/img/cat4.png', name: 'Футболки', catId: 1 },
      { id: 5, img: 'src/assets/img/cat5.png', name: 'Брюки', catId: 1 },
      { id: 6, img: 'src/assets/img/cat6.png', name: 'Толстовки', catId: 1 },
      { id: 7, img: 'src/assets/img/cat7.png', name: 'Майки', catId: 1 },
      { id: 8, img: 'src/assets/img/cat8.png', name: 'Шорты', catId: 1 },
      { id: 9, img: 'src/assets/img/cat9.jpg', name: 'Юбки', catId: 2 },
      { id: 10, img: 'src/assets/img/cat10.jpg', name: 'Платья', catId: 2 },
      { id: 11, img: 'src/assets/img/cat11.jpg', name: 'Блузки', catId: 2 },
      { id: 12, img: 'src/assets/img/cat12.jpg', name: 'Шубы', catId: 2 },
      { id: 13, img: 'src/assets/img/cat13.jpg', name: 'Комбинезон', catId: 3 },
      { id: 14, img: 'src/assets/img/cat14.jpg', name: 'Фартук', catId: 3 },
      { id: 15, img: 'src/assets/img/cat15.jpg', name: 'Бушлат', catId: 3 },
      { id: 16, img: 'src/assets/img/cat16.jpg', name: 'Чехлы', catId: 4 },
    ],
    ways: [
      { id: 1, name: 'Шелкография', img: 'src/assets/img/ways1.png' },
      { id: 2, name: 'DTF печать', img: 'src/assets/img/ways2.png' },
      { id: 3, name: 'Компьютерная вышивка', img: 'src/assets/img/ways3.png' },
      { id: 4, name: 'FLEX печать', img: 'src/assets/img/ways4.png' },
    ],
    samples: [
      { id: 1, img: 'src/assets/img/sample1.png' },
      { id: 2, img: 'src/assets/img/sample2.png' },
      { id: 3, img: 'src/assets/img/sample3.png' },
      { id: 4, img: 'src/assets/img/sample4.png' },
      { id: 5, img: 'src/assets/img/sample5.png' },
      { id: 6, img: 'src/assets/img/sample6.png' },
      { id: 7, img: 'src/assets/img/sample7.png' },
      { id: 8, img: 'src/assets/img/sample8.png' },
    ],
    steps: [
      { id: 1, number: 1, name: 'Заявка', text: 'Оставьте заявку на нашем сайте', img: 'src/assets/img/icons/step1.svg' },
      { id: 2, number: 2, name: 'Консультация', text: 'Определение задачи, выявление потребностей', img: 'src/assets/img/icons/step2.svg' },
      { id: 3, number: 3, name: 'Договор', text: 'Разработка дизайн-образца, заключение договора, производство', img: 'src/assets/img/icons/step3.svg' },
      { id: 4, number: 4, name: 'Разработка', text: 'Разрабатываем продукцию на основе прошлых этапов', img: 'src/assets/img/icons/step4.svg' },
      { id: 5, number: 5, name: 'Доставка', text: 'Поставка продукции клиенту', img: 'src/assets/img/icons/step5.svg' },
    ],
    socials: [
      { id: 1, link: '', img: '/src/assets/img/icons/insta.svg' },
      { id: 2, link: '', img: '/src/assets/img/icons/tiktok.svg' },
      { id: 3, link: '', img: '/src/assets/img/icons/whtsp.svg' }
    ]
  }),
  actions: {
    setLocale(newLocale) {
      this.locale = newLocale;
    },
  },
})
