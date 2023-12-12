<script setup>
import axios from "axios";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

import { ref } from "vue";

import Lang from "./../components/Lang.vue";

const rootStore = useRootStore();
const {
  translatedCatItems,
  translatedWays,
  samples,
  translatedASteps,
  activeCat,
  translatedAboutItems,
  translatedCats,
} = storeToRefs(rootStore);

function setActiveCat(id) {
  activeCat.value = id;
}
</script>

<template>
  <main class="main">
    <section class="banner">
      <div class="langs">
        <Lang />
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
          <div class="banner__text">{{ $t("banner.text") }}</div>
          <div class="banner__title">{{ $t("banner.title") }}</div>
          <a href="#form" class="banner__btn">{{ $t("banner.btn") }}</a>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="about">
        <div class="about__title main-title">{{ $t("about.title") }}</div>
        <div class="about__items">
          <div
            class="about__item"
            v-for="item in translatedAboutItems"
            :key="item.id"
          >
            <img :src="`${item.img}`" alt="icon" />
            <b>{{ item.title }}</b>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </section>
      <section class="catalog" id="catalog">
        <div class="catalog__title main-title">{{ $t("catalog.title") }}</div>
        <div class="catalog__nav">
          <p
            v-for="item in translatedCats"
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
            v-for="item in translatedCatItems.filter(
              (item) => item.catId === activeCat
            )"
            :key="item.id"
          >
            <img :src="`${item.img}`" alt="img" />
            <b>{{ item.name }}</b>
          </div>
        </div>
      </section>
      <section class="ways" id="ways">
        <div class="ways__title main-title">{{ $t("ways.title") }}</div>
        <div class="ways__items">
          <div class="ways__item" v-for="item in translatedWays" :key="item.id">
            <img :src="`${item.img}`" alt="img" />
            <b>{{ item.name }}</b>
          </div>
        </div>
      </section>
      <section class="samples" id="works">
        <div class="samples__title main-title">{{ $t("samples") }}</div>
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
        <div class="steps__title main-title">{{ $t("steps.title") }}</div>
        <div class="steps__items">
          <div
            class="steps__item"
            v-for="item in translatedASteps"
            :key="item.id"
          >
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
        <div class="form__title main-title">{{ $t("form.title") }}</div>
        <form>
          <div class="form__item">
            <label for="name">{{ $t("form.name") }}</label>
            <input
              type="text"
              :placeholder="$t(`form.namep`)"
              id="name"
              name="name"
            />
          </div>
          <div class="form__item">
            <label for="phone">{{ $t("form.phone") }}</label>
            <input
              type="tel"
              :placeholder="$t(`form.phonep`)"
              id="phone"
              name="phone"
            />
          </div>
          <div class="form__item">
            <label for="comment">{{ $t("form.comment") }}</label>
            <input type="text" id="comment" name="comment" />
          </div>
          <button type="submit">{{ $t("form.btn") }}</button>
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