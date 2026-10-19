<script setup lang="ts">
import { getProgram } from "~/data/programs";
import { site } from "~/data/site";

const route = useRoute();
const program = getProgram(String(route.params.slug));

if (!program) {
  throw createError({
    statusCode: 404,
    statusMessage: "Программа не найдена",
    fatal: true,
  });
}

useHead({ title: program.title });
</script>

<template>
  <div v-if="program" class="wrap">
    <div class="page-intro">
      <p class="eyebrow">
        {{ program.levelLabel }} · {{ program.code }} «{{ program.direction }}»
      </p>
      <h1>{{ program.title }}</h1>
      <p class="lead">{{ program.lead }}</p>
    </div>
    <div class="detail-layout">
      <div>
        <h2>Тематический фокус</h2>
        <ul class="clean-list">
          <li v-for="item in program.focus" :key="item">{{ item }}</li>
        </ul>
        <p class="note">
          Краткое описание подготовлено для проекта сайта по названию
          программы. Состав дисциплин, формы и сроки обучения определяются
          утверждённым учебным планом.
        </p>
        <h2>Профессиональное развитие</h2>
        <p>
          Программа относится к образовательным траекториям кафедры в сфере
          учета, экономического сопровождения и управления бизнесом.
        </p>
        <NuxtLink class="text-link" to="/programs#career">
          Варианты карьеры выпускника <span aria-hidden="true">↗</span>
        </NuxtLink>
        <h2>Учебные материалы</h2>
        <p>
          Сведения об образовательной программе и учебные планы следует
          проверять в официальном разделе университета.
        </p>
        <a class="text-link" href="https://rsue.ru/sveden/education/">
          Учебные планы и образовательные материалы
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <aside class="aside">
        <p class="eyebrow">Поступление</p>
        <h3>Сделайте следующий шаг</h3>
        <p>
          Актуальные правила приёма, вступительные испытания, стоимость и
          количество мест — на сайте университета.
        </p>
        <a class="button dark" href="https://rsue.ru/abitur/">
          Условия поступления <span aria-hidden="true">↗</span>
        </a>
        <hr />
        <p>Вопросы о программе</p>
        <a class="text-link" :href="`mailto:${site.email}`">
          Написать кафедре <span aria-hidden="true">↗</span>
        </a>
        <p>
          <a :href="site.phoneHref">{{ site.phone }}</a>
        </p>
      </aside>
    </div>
    <p>
      <NuxtLink class="text-link" to="/programs">← Все программы</NuxtLink>
    </p>
    <section v-if="program.presentationHref" class="section">
      <h2>Презентация программы</h2>
      <a class="text-link" :href="program.presentationHref">
        Презентация на сайте университета · PDF
        <span aria-hidden="true">↗</span>
      </a>
      <p class="note">
        Опубликованный университетом материал. Актуальные условия набора
        необходимо сверять с правилами приёма.
      </p>
    </section>
  </div>
</template>
