<script setup>
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
const rootStore = useRootStore();
const { socials } = storeToRefs(rootStore);
</script>

<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer__left">
        <a href="/">
          <img src="@/assets/img/icons/logo-foot.svg" alt="logo" />
        </a>
        <span>© All Rights Reserved, 2023</span>
      </div>
      <div class="footer__right">
        <div class="footer__item">
          <div class="footer__title">{{ $t("footer.menu") }}</div>
          <ul class="footer__menu">
            <li>
              <a href="/">{{ $t("footer.main") }}</a>
            </li>
            <li>
              <a href="#catalog">{{ $t("footer.catalog") }}</a>
            </li>
            <li>
              <a href="#ways">{{ $t("footer.ways") }}</a>
            </li>
            <li>
              <a href="#works">{{ $t("footer.samples") }}</a>
            </li>
            <li>
              <a href="#contacts">{{ $t("footer.contactm") }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__item">
          <div class="footer__title">{{ $t("footer.contacts") }}</div>
          <div class="footer__item--info">
            <div class="footer__contacts">
              <a href="tel:77013820341"
                >+7 701 382 0341 {{ $t("footer.call") }}</a
              >
              <a href="https://wa.me/77013820341">+7 701 382 0341 W'app</a>
              <a href="mailto:info@beautylogo.kz">info@beautylogo.kz</a>
            </div>
            <div class="footer__contacts">{{ $t("footer.address") }}</div>
          </div>
        </div>
        <div class="footer__item">
          <div class="footer__title">{{ $t("footer.social") }}</div>
          <ul class="socials">
            <li v-for="item in socials" :key="item.id">
              <a :href="`${item.id}`">
                <img :src="`${item.img}`" alt="logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@import '../../assets/styles/main'
.footer
  padding: 40px 0
  background: #6392AB
  &__menu
    li
      &:hover
        a
          color: #BDB495
  &__left
    display: flex
    flex-direction: column
    justify-content: space-between
    a
      height: 140px
      width: 140px
      background: #fff
      border-radius: 50%
      padding: 10px
    span
      color: #FFF
      font-size: 13px
      font-weight: 300
      line-height: 21.7px
      font-family: 'Inter', sans-serif
  .container
    display: flex
    justify-content: space-between
  &__right
    display: flex
  &__item
    margin: 0 16px
    height: 100%
    &--info
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 83%
  &__title
    color: #FFF
    font-size: 15px
    font-weight: 600
    line-height: 21.6px
    letter-spacing: 1px
    text-transform: uppercase
    font-family: 'Comfortaa', serif
    margin-bottom: 15px
  &__menu
    a
      color: #FFF
      font-family: 'Comfortaa', serif
      font-size: 14px
      font-weight: 300
      line-height: 21.7px
  &__contacts
    display: flex
    flex-direction: column
    color: #FFF
    font-family: 'Comfortaa', serif
    font-size: 13px
    font-weight: 300
    line-height: 21.7px
    a
      color: #FFF
      font-family: 'Comfortaa', serif
      font-size: 12px
      font-weight: 300
      line-height: 21.7px
      margin-bottom: 10px
      padding: 5px 0 2px
      &:hover
        color: #BDB495

.socials
  li
    margin-bottom: 5px
    img
      &:hover
        opacity: .7
</style>