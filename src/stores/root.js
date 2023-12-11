import { ref } from "vue"
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n';

export const useRootStore = defineStore('root', {

  state: () => ({

    activeCat: ref(1),

    aboutItems: [
      { id: 1, title: "about.items.item1.name", text: 'about.items.item1.text', img: 'src/assets/img/icons/about1.svg' },
      { id: 2, title: 'about.items.item2.name', text: 'about.items.item2.text', img: 'src/assets/img/icons/about2.svg' },
      { id: 3, title: 'about.items.item3.name', text: 'about.items.item3.text', img: 'src/assets/img/icons/about3.svg' },
      { id: 4, title: 'about.items.item4.name', text: 'about.items.item4.text', img: 'src/assets/img/icons/about4.svg' }
    ],
    cats: [
      { id: 1, name: 'catalog.cats.cat1', },
      { id: 2, name: 'catalog.cats.cat2', },
      { id: 3, name: 'catalog.cats.cat3', },
      { id: 4, name: 'catalog.cats.cat4', },
      { id: 5, name: 'catalog.cats.cat5', },
      { id: 6, name: 'catalog.cats.cat6', },
      { id: 7, name: 'catalog.cats.cat7', },
      { id: 8, name: 'catalog.cats.cat8', },
    ],
    catItems: [
      { id: 1, img: 'src/assets/img/cat1.png', name: 'catalog.categories.category1', catId: 1 },
      { id: 2, img: 'src/assets/img/cat2.png', name: 'catalog.categories.category2', catId: 1 },
      { id: 3, img: 'src/assets/img/cat3.png', name: 'catalog.categories.category3', catId: 1 },
      { id: 4, img: 'src/assets/img/cat4.png', name: 'catalog.categories.category4', catId: 1 },
      { id: 5, img: 'src/assets/img/cat5.png', name: 'catalog.categories.category5', catId: 1 },
      { id: 6, img: 'src/assets/img/cat6.png', name: 'catalog.categories.category6', catId: 1 },
      { id: 7, img: 'src/assets/img/cat7.png', name: 'catalog.categories.category7', catId: 1 },
      { id: 8, img: 'src/assets/img/cat8.png', name: 'catalog.categories.category8', catId: 1 },
      { id: 9, img: 'src/assets/img/cat9.jpg', name: 'catalog.categories.category9', catId: 2 },
      { id: 10, img: 'src/assets/img/cat10.jpg', name: 'catalog.categories.category10', catId: 2 },
      { id: 11, img: 'src/assets/img/cat11.jpg', name: 'catalog.categories.category11', catId: 2 },
      { id: 12, img: 'src/assets/img/cat12.jpg', name: 'catalog.categories.category12', catId: 2 },
      { id: 13, img: 'src/assets/img/cat13.jpg', name: 'catalog.categories.category13', catId: 3 },
      { id: 14, img: 'src/assets/img/cat14.jpg', name: 'catalog.categories.category14', catId: 3 },
      { id: 15, img: 'src/assets/img/cat15.jpg', name: 'catalog.categories.category15', catId: 3 },
      { id: 16, img: 'src/assets/img/cat16.jpg', name: 'catalog.categories.category16', catId: 4 },
    ],
    ways: [
      { id: 1, name: 'ways.name1', img: 'src/assets/img/ways1.png' },
      { id: 2, name: 'ways.name2', img: 'src/assets/img/ways2.png' },
      { id: 3, name: 'ways.name3', img: 'src/assets/img/ways3.png' },
      { id: 4, name: 'ways.name4', img: 'src/assets/img/ways4.png' },
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
      { id: 1, number: 1, name: 'steps.items.item1.name', text: 'steps.items.item1.text', img: 'src/assets/img/icons/step1.svg' },
      { id: 2, number: 2, name: 'steps.items.item2.name', text: 'steps.items.item2.text', img: 'src/assets/img/icons/step2.svg' },
      { id: 3, number: 3, name: 'steps.items.item3.name', text: 'steps.items.item3.text', img: 'src/assets/img/icons/step3.svg' },
      { id: 4, number: 4, name: 'steps.items.item4.name', text: 'steps.items.item4.text', img: 'src/assets/img/icons/step4.svg' },
      { id: 5, number: 5, name: 'steps.items.item5.name', text: 'steps.items.item5.text', img: 'src/assets/img/icons/step5.svg' },
    ],
    socials: [
      { id: 1, link: '', img: '/src/assets/img/icons/insta.svg' },
      { id: 2, link: '', img: '/src/assets/img/icons/tiktok.svg' },
      { id: 3, link: '', img: '/src/assets/img/icons/whtsp.svg' }
    ]
  }),


  getters: {
    translatedAboutItems() {
      const { t } = useI18n();
      // Map through aboutItems and replace titles and texts with translations
      return this.aboutItems.map(item => ({
        ...item,
        title: t(item.title),
        text: t(item.text),
      }));

    },
    translatedCats() {
      const { t } = useI18n();
      // Map through aboutItems and replace titles and texts with translations
      return this.cats.map(item => ({
        ...item,
        name: t(item.name),
      }));
    },
    translatedCatItems() {
      const { t } = useI18n();
      // Map through aboutItems and replace titles and texts with translations
      return this.catItems.map(item => ({
        ...item,
        name: t(item.name),
      }));
    },
    translatedWays() {
      const { t } = useI18n();
      // Map through aboutItems and replace titles and texts with translations
      return this.ways.map(item => ({
        ...item,
        name: t(item.name),
      }));
    },
    translatedASteps() {
      const { t } = useI18n();
      // Map through aboutItems and replace titles and texts with translations
      return this.steps.map(item => ({
        ...item,
        title: t(item.name),
        text: t(item.text),
      }));

    },
  },
})
