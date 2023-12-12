<script setup>
import { ref } from "vue";
let burgerOpen = ref(false);
const toggleBurger = () => {
  burgerOpen.value = !burgerOpen.value;
};
const closeBurger = () => {
  burgerOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div
      :class="{ open: burgerOpen }"
      class="burger__btn"
      @click="toggleBurger"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="header__nav">
      <li>
        <a href="/">{{ $t("menu.main") }}</a>
      </li>
      <li>
        <a href="#catalog">{{ $t("menu.catalog") }}</a>
      </li>
      <li>
        <a href="#works">{{ $t("menu.samples") }}</a>
      </li>
      <li>
        <a href="#footer">{{ $t("menu.contacts") }}</a>
      </li>
    </ul>
    <a href="#form" class="header__btn">{{ $t("consult") }}</a>
  </header>
  <div :class="{ open: burgerOpen }" class="header__mobile">
    <div class="header__mobile--wrapper"></div>
    <div class="header__mobile--content">
      <ul class="header__mobile--nav">
        <li>
          <a href="/" @click="closeBurger">{{ $t("menu.main") }}</a>
        </li>
        <li>
          <a href="#catalog" @click="closeBurger">{{ $t("menu.catalog") }}</a>
        </li>
        <li>
          <a href="#works" @click="closeBurger">{{ $t("menu.samples") }}</a>
        </li>
        <li>
          <a href="#footer" @click="closeBurger">{{ $t("menu.contacts") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../../assets/styles/main'
.header
  height: 90px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 10px 0 30px
  position: fixed
  left: 0
  top: 0
  width: 100%
  background: #fff
  z-index: 2
  &__mobile
    position: fixed
    top: 90px
    left: 0
    width: 100%
    height: calc(100% - 90px)
    z-index: 1
    display: none
    &--content
      position: absolute
      left: 0
      top: 0
      width: 50%
      min-width: 250px
      background: #fff
      height: 100%
      padding: 20px
    &--wrapper
      width: 100%
      height: 100%
      background: #000
      opacity: .6
    &.open
      display: flex

.header__nav
  display: flex
  @media screen and (max-width: 768px)
    display: grid
    grid-template-columns: 1fr 1fr
  @media screen and (max-width: 586px)
    display: none
  li
    margin-right: 18px
    &:hover
      a
        color: #074566
        text-decoration: underline
    a
      color: #000
      font-family: 'Comfortaa', sans-serif
      font-size: 17px
      font-weight: 400
      line-height: normal
      letter-spacing: 0.5px
.header__btn
  background: #E4D6C4
  width: 180px
  height: 50px
  font-size: 24px
  display: flex
  justify-content: center
  align-items: center
  border-radius: 30px
  &:hover
    opacity: .7
.burger__btn
  display: none
  width: 30px
  height: 30px
  flex-direction: column
  justify-content: space-between
  position: relative
  @media screen and (max-width: 586px)
    display: block
  &.open
    span
      &:nth-of-type(1)
        display: none
      &:nth-of-type(2)
        top: 50%
        transform: translate(-50%, 0%) rotate(45deg)
      &:nth-of-type(3)
        top: 50%
        transform: translate(-50%, 0%) rotate(-45deg)
  span
    height: 2px
    width: 30px
    background: #000
    transition: all 0.5s
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    &:nth-of-type(2)
      top: calc(50% - 8px)
    &:nth-of-type(3)
      top: calc(50% + 8px)
</style>