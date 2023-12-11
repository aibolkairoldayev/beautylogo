<template>
  <div class="select" ref="select">
    <button class="select__head" @click="isShow = !isShow">
      {{
        modelValue
          ? options?.find((el) => el[keys[1]] == modelValue)[keys[0]]
          : "RU"
      }}
    </button>
    <img
      class="img2"
      :class="{ open: isShow }"
      src="@/assets/img/icons/down.svg"
      alt="icon"
    />
    <teleport to="body">
      <Transition>
        <div
          class="select__body"
          ref="selectOutside"
          :style="styleObject"
          v-if="isShow"
        >
          <p
            v-for="item in options"
            :key="item[keys[1]]"
            @click="setValue(item)"
          >
            {{ item[keys[0]] }}
          </p>
        </div>
      </Transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { onClickOutside, useMouseInElement, useWindowSize } from "@vueuse/core";

const props = defineProps({
  modelValue: [String, Number],
  options: Array,
});

const emit = defineEmits(["update:modelValue"]);

const keys = ref(["name", "value"]);

const setValue = (item) => {
  emit("update:modelValue", item[keys.value[1]]);
  isShow.value = false;
};

const isShow = ref(false);

const select = ref(null);
const selectOutside = ref(null);

const { elementPositionX, elementPositionY, elementHeight } =
  useMouseInElement(select);
const { width } = useWindowSize();

const styleObject = computed(() => {
  return {
    top: elementPositionY.value + elementHeight.value + 5 + "px",
    left: elementPositionX.value + "px",
  };
});

onClickOutside(selectOutside, (event) => {
  const list = [...event?.target?.classList];
  if (!!isShow.value && !list?.includes("select__head")) isShow.value = false;
});

watch(width, () => {
  if (!!isShow.value) isShow.value = false;
});

props;
</script>

<style scoped lang="scss">
.select {
  position: relative;
  &__body {
    z-index: 1;
    width: 50px;
    position: absolute;
    padding: 3px;
    border-radius: 8px;
    border: 1px solid transparent;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 7px;
    p {
      margin: 0;
      color: #000;
      cursor: pointer;
    }
  }
  .img2 {
    position: relative;
    width: 12px;
    top: -2px;
    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>
