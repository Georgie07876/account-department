<script setup lang="ts">
import { nav, site } from "~/data/site";

const route = useRoute();
const menuOpen = ref(false);
const largeText = useState("large-text", () => false);

function isCurrent(path: string) {
  if (path === "/") return route.path === "/";
  return route.path === path || route.path.startsWith(`${path}/`);
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);
</script>

<template>
  <div class="utility">
    <div class="container">
      <span>{{ site.university }}</span>
      <div>
        <a :href="site.universityUrl">Сайт университета ↗</a>
        <button
          type="button"
          :aria-pressed="largeText"
          @click="largeText = !largeText"
        >
          Аа <span>Крупный текст</span>
        </button>
      </div>
    </div>
  </div>
  <header>
    <div class="container header__bar">
      <NuxtLink class="header__brand" to="/">
        <img src="/assets/logo.jpeg" alt="Эмблема РГЭУ (РИНХ)" />
        <span>
          РГЭУ <b>(РИНХ)</b>
          <small>{{ site.faculty }}</small>
        </span>
      </NuxtLink>
      <div class="header__contact">
        <a :href="site.phoneHref">{{ site.phone }}</a>
        <small>{{ site.address }}</small>
      </div>
      <button
        class="header__menu"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="navigation"
        @click="menuOpen = !menuOpen"
      >
        Меню <span aria-hidden="true">☰</span>
      </button>
    </div>
    <nav
      id="navigation"
      :class="{ 'nav--open': menuOpen }"
      aria-label="Основная навигация"
    >
      <div class="container nav__list">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          :class="{ 'nav__link--anniversary': item.anniversary }"
          :aria-current="isCurrent(item.to) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
