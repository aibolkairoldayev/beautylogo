<script setup>
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
const { aboutItems, cats, catItems, ways, samples, steps } =
  storeToRefs(rootStore);
</script>

<template>
  <section class="banner">
    <div class="langs"></div>
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
        <div class="banner__btn">Рассчитать стоимость</div>
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
    <section class="catalog">
      <div class="catalog__title main-title">Категории товаров</div>
      <div class="catalog__nav">
        <p v-for="(item, index) in cats" :key="index">{{ item }}</p>
      </div>
      <div class="catalog__items">
        <div class="catalog__item" v-for="item in catItems" :key="item.id">
          <img :src="`${item.img}`" alt="img" />
          <b>{{ item.name }}</b>
        </div>
      </div>
    </section>
    <section class="ways">
      <div class="ways__title main-title">Способы нанесения</div>
      <div class="ways__items">
        <div class="ways__item" v-for="item in ways" :key="item.id">
          <img :src="`${item.img}`" alt="img" />
          <b>{{ item.name }}</b>
        </div>
      </div>
    </section>
    <section class="samples">
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
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
</style>