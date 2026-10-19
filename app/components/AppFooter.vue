<script setup lang="ts">
import { site } from "~/data/site";
</script>

<template>
  <footer>
    <div class="wrap footer-grid">
      <div>
        <strong>Кафедра бухгалтерского<br />учета и контроллинга</strong>
        <p>РГЭУ (РИНХ)<br />{{ site.faculty }}</p>
      </div>
      <div>
        <h3>На связи</h3>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        <a :href="site.phoneHref">{{ site.phone }}</a>
        <a :href="site.vk">Кафедра ВКонтакте ↗</a>
      </div>
      <div>
        <h3>Полезные ссылки</h3>
        <a href="https://rsue.ru/abitur/">Приёмная комиссия ↗</a>
        <a href="https://rsue.ru/sveden/employees/">Педагогический состав ↗</a>
        <NuxtLink to="/ecosystem">Экосистема кафедры</NuxtLink>
        <NuxtLink to="/sources">Материалы и сведения о проекте</NuxtLink>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <span>1931–2026 · Ростов-на-Дону</span>
      <span>Проект новой версии сайта · для рассмотрения кафедрой</span>
    </div>
  </footer>
</template>
