<script setup>
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
const { aboutItems, cats, catItems, ways, samples, steps, activeCat, langs } =
  storeToRefs(rootStore);

function setActiveCat(id) {
  activeCat.value = id;
}
</script>

<template>
  <h1>{{ $t("consult") }}</h1>
  <main class="main">
    <section class="banner">
      <div class="langs">
        <select name="" id="">
          <option
            v-for="item in langs"
            :key="item.id"
            value="item.value"
            @click="switchLanguage(item.value)"
          >
            {{ item.title }}
          </option>
        </select>
      </div>
      <div class="banner__left">
        <div class="banner__bg">
          <img src="@/assets/img/banner1.png" alt="banner" />
        </div>
        <div class="banner__logo">
          <img src="@/assets/img/logo.svg" alt="logo" />
        </div>
      </div>
      <div class="banner__right">
        <div class="banner__content">
          <div class="banner__text">Шьем мечты о красоте</div>
          <div class="banner__title">Пошив одежды на заказ</div>
          <a href="#form" class="banner__btn">Рассчитать стоимость</a>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="about">
        <div class="about__title main-title">О нас</div>
        <div class="about__items">
          <div class="about__item" v-for="item in aboutItems" :key="item.id">
            <img :src="`${item.img}`" alt="icon" />
            <b>{{ item.title }}</b>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </section>
      <section class="catalog" id="catalog">
        <div class="catalog__title main-title">Категории товаров</div>
        <div class="catalog__nav">
          <p
            v-for="item in cats"
            :key="item.id"
            :class="{ active: item.id == activeCat }"
            @click="setActiveCat(item.id)"
          >
            {{ item.name }}
          </p>
        </div>
        <div class="catalog__items">
          <div
            class="catalog__item"
            v-for="item in catItems.filter((item) => item.catId === activeCat)"
            :key="item.id"
          >
            <img :src="`${item.img}`" alt="img" />
            <b>{{ item.name }}</b>
          </div>
        </div>
      </section>
      <section class="ways" id="ways">
        <div class="ways__title main-title">Способы нанесения</div>
        <div class="ways__items">
          <div class="ways__item" v-for="item in ways" :key="item.id">
            <img :src="`${item.img}`" alt="img" />
            <b>{{ item.name }}</b>
          </div>
        </div>
      </section>
      <section class="samples" id="works">
        <div class="samples__title main-title">Примеры работ</div>
        <div class="samples__content">
          <img
            :src="`${item.img}`"
            alt="img"
            v-for="item in samples"
            :key="item.id"
          />
        </div>
      </section>
      <section class="steps">
        <div class="steps__title main-title">Этапы работы</div>
        <div class="steps__items">
          <div class="steps__item" v-for="item in steps" :key="item.id">
            <span>{{ item.number }}</span>
            <div class="steps__info">
              <b>{{ item.name }}</b>
              <p>{{ item.text }}</p>
            </div>
            <img :src="`${item.img}`" alt="icon" />
          </div>
        </div>
      </section>
      <section class="form" id="form">
        <div class="form__title main-title">Сотрудничество</div>
        <form action="">
          <div class="form__item">
            <label for="name">Как к Вам обращаться?</label>
            <input type="text" placeholder="Имя" id="name" />
          </div>
          <div class="form__item">
            <label for="phone">Контактные данные</label>
            <input type="tel" placeholder="Телефон" id="phone" />
          </div>
          <div class="form__item">
            <label for="comment">Комментарий</label>
            <input type="text" id="comment" />
          </div>
          <button type="submit">Отправить</button>
        </form>
      </section>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.7760620656827!2d76.96376947586153!3d43.31894707398571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836d02eeea8bc3%3A0x42f69e72334dc4ce!2z0YPQuy4g0J_QvtCz0YDQsNC90LjRh9C90LDRjywg0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1701838185188!5m2!1sru!2skz"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
</style>