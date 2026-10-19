<script setup lang="ts">
import { site } from "~/data/site";

useHead({ title: "Главная" });
</script>

<template>
  <div class="wrap narrow">
    <div class="page-intro">
      <p class="eyebrow">{{ site.faculty }}</p>
      <h1>Кафедра бухгалтерского учета и контроллинга</h1>
      <p class="lead">Сохраняя традиции, работаем на будущее.</p>
      <div class="actions">
        <NuxtLink class="button dark" to="/career-guidance">
          Профориентационная работа кафедры
        </NuxtLink>
        <NuxtLink class="button dark" to="/programs/bachelor-1">
          Учет и контроль в управлении бизнесом
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
