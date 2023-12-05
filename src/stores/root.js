import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
  state: () => ({
    aboutItems: [
      { id: 1, title: 'Доставка', text: 'Быстрая доставка по Казахстану и России', img: 'src/assets/img/icons/about1.svg' },
      { id: 2, title: '10 Лет', text: '10 лет непрерывного опыта', img: 'src/assets/img/icons/about2.svg' },
      { id: 3, title: '150 единиц', text: 'сотрудников предприятия', img: 'src/assets/img/icons/about3.svg' },
      { id: 4, title: 'Качество', text: 'премиальное качество продукции', img: 'src/assets/img/icons/about4.svg' }
    ],
    cats: ['Мужская одежда', 'Женская одежда', 'Спецодежда', 'Принт', 'Вышивка', 'Авто-чехлы', 'Маски', 'Шторы'],
    catItems: [
      { id: 1, img: 'src/assets/img/cat1.png', name: 'Пальто', catId: 1 },
      { id: 2, img: 'src/assets/img/cat2.png', name: 'Поло', catId: 1 },
      { id: 3, img: 'src/assets/img/cat3.png', name: 'Рубашки', catId: 1 },
      { id: 4, img: 'src/assets/img/cat4.png', name: 'Футболки', catId: 1 },
      { id: 5, img: 'src/assets/img/cat5.png', name: 'Брюки', catId: 1 },
      { id: 6, img: 'src/assets/img/cat6.png', name: 'Толстовки', catId: 1 },
      { id: 7, img: 'src/assets/img/cat7.png', name: 'Майки', catId: 1 },
      { id: 8, img: 'src/assets/img/cat8.png', name: 'Шорты', catId: 1 },
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
    ]
  })
})
