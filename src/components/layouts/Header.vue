<script setup>
</script>

<template>
  <header class="header">
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
.header__nav
  display: flex
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
</style>