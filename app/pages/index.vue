<script setup lang="ts">
import { site } from "~/data/site";

useHead({ title: "Главная" });
</script>

<template>
  <div class="container container--narrow">
    <div class="page-intro">
      <p class="eyebrow">{{ site.faculty }}</p>
      <h1>Кафедра бухгалтерского учета и контроллинга</h1>
      <p class="page-intro__lead">Сохраняя традиции, работаем на будущее.</p>
      <div class="actions">
        <NuxtLink class="button button--dark" to="/career-guidance">
          Профориентационная работа кафедры
        </NuxtLink>
        <NuxtLink class="button button--dark" to="/programs/bachelor-1">
          Учет и контроль в управлении бизнесом
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
