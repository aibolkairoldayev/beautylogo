<script setup>
</script>

<template>
  <header class="header">
    <ul class="header__nav">
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="#catalog">Каталог</a>
      </li>
      <li>
        <a href="#works">Примеры работ</a>
      </li>
      <li>
        <a href="#contacts">Контакты</a>
      </li>
    </ul>
    <div class="header__btn">Консультация</div>
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

.header__nav
  display: flex
  li
    margin-right: 18px
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
</style>