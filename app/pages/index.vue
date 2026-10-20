<script setup lang="ts">
useHead({ title: "Главная" });
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="eyebrow">Учетно-экономический факультет</p>
          <h1>
            Кафедра<br />бухгалтерского учета<br />и <em>контроллинга</em>
          </h1>
          <p class="hero__lead">Сохраняя традиции,<br />работаем на будущее.</p>
          <div class="actions">
            <NuxtLink class="button button--gold" to="/programs"
              >Выбрать программу <span>↗</span></NuxtLink
            ><NuxtLink class="button button--outline" to="/about"
              >Познакомиться с кафедрой</NuxtLink
            >
          </div>
        </div>
        <div class="hero__image">
          <img
            src="/assets/team.jpeg"
            alt="Коллектив кафедры в июне 2024 года"
          />
          <div class="hero__caption">Наши преподаватели · июнь 2024</div>
          <NuxtLink class="hero__jubilee" to="/history"
            ><b>95</b><span>лет кафедре<br /><small>1931 — 2026</small></span
            ><span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
      </div>
    </section>
    <div class="container">
      <div class="audience">
        <NuxtLink to="/programs"
          ><span>01 / Абитуриенту</span
          ><strong>Найти свою программу ↗</strong></NuxtLink
        ><NuxtLink to="/students"
          ><span>02 / Студенту</span
          ><strong>Учиться и развиваться ↗</strong></NuxtLink
        ><NuxtLink to="/science"
          ><span>03 / Исследователю</span
          ><strong>Присоединиться к науке ↗</strong></NuxtLink
        >
      </div>
      <section class="eco-preview">
        <div class="eco-preview__copy">
          <p class="eyebrow">Образование · наука · партнерство</p>
          <h2>Экосистема<br />кафедры</h2>
          <p>
            Миссия, цели и участники единой образовательной, научной и
            профессиональной среды.
          </p>
          <NuxtLink class="button button--gold" to="/ecosystem"
            >Открыть экосистему <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
        <ol class="eco-preview__list">
          <li><span>01</span>Фундамент профессии</li>
          <li><span>02</span>Генератор знаний</li>
          <li><span>03</span>Мост в индустрию</li>
          <li><span>04</span>Точка роста</li>
          <li><span>05</span>Голос кафедры</li>
        </ol>
      </section>
      <div class="activity" aria-label="Проекты и профориентация">
        <NuxtLink class="button button--dark" to="/project-intensive"
          >Проектно-образовательный интенсив
          <span aria-hidden="true">↗</span></NuxtLink
        ><NuxtLink class="button button--dark" to="/career-guidance"
          >Профориентационная работа кафедры
          <span aria-hidden="true">↗</span></NuxtLink
        >
      </div>
      <section class="section">
        <div class="section__head">
          <div>
            <p class="eyebrow">Образование</p>
            <h2>От первого курса<br />до научной степени</h2>
          </div>
          <NuxtLink class="text-link" to="/programs">Все программы ↗</NuxtLink>
        </div>
        <div class="program-list">
          <NuxtLink class="program-card" to="/programs/bachelor-1"
            ><div class="program-card__meta">
              Бакалавриат <span>38.03.01 · Экономика</span>
            </div>
            <h3>Учет и контроль в управлении бизнесом</h3>
            <span class="program-card__link"
              >О программе <span aria-hidden="true">↗</span></span
            ></NuxtLink
          ><NuxtLink class="program-card" to="/programs/bachelor-2"
            ><div class="program-card__meta">
              Бакалавриат <span>38.03.01 · Экономика</span>
            </div>
            <h3>Экономист-инженер</h3>
            <span class="program-card__link"
              >О программе <span aria-hidden="true">↗</span></span
            ></NuxtLink
          ><NuxtLink class="program-card" to="/programs/bachelor-3"
            ><div class="program-card__meta">
              Бакалавриат <span>38.03.01 · Экономика</span>
            </div>
            <h3>Учетно-экономическое и правовое сопровождение бизнеса</h3>
            <span class="program-card__link"
              >О программе <span aria-hidden="true">↗</span></span
            ></NuxtLink
          >
        </div>
        <div class="levels">
          <NuxtLink to="/programs#master"
            >Магистратура <span>3 программы ↗</span></NuxtLink
          ><NuxtLink to="/programs#postgraduate"
            >Аспирантура <span>Научная специальность 5.2.3 ↗</span></NuxtLink
          >
        </div>
      </section>
      <section class="feature">
        <div>
          <p class="eyebrow">Научная школа</p>
          <h2>Исследования, которые<br />связаны с практикой</h2>
          <p>
            Совершенствование бухгалтерского учета и аудита в условиях развития
            устойчивой экономики.
          </p>
          <NuxtLink class="button button--dark" to="/science"
            >Научная жизнь кафедры ↗</NuxtLink
          >
        </div>
        <div class="feature__stats">
          <div><b>62</b><span>учебника и учебных пособия</span></div>
          <div><b>21</b><span>монография</span></div>
          <small
            >Результаты кафедры за 2021–2025 гг.<br />По юбилейному проспекту,
            с. 145</small
          >
        </div>
      </section>
      <section class="section">
        <div class="section__head">
          <div>
            <p class="eyebrow">Люди и возможности</p>
            <h2>Больше, чем занятия</h2>
          </div>
        </div>
        <div class="editorial">
          <NuxtLink class="editorial__photo" to="/students"
            ><img
              src="/assets/meeting.jpeg"
              alt="Заседание кафедры в июне 2025 года"
              loading="lazy"
            />
            <div>
              <small>Университетская жизнь</small>
              <h3>Вместе обсуждаем.<br />Вместе создаём.</h3>
              <span>Студенческие проекты и научный кружок ↗</span>
            </div></NuxtLink
          >
          <div class="editorial__links">
            <NuxtLink to="/partners"
              ><span>Практика и карьера</span>
              <h3>Знакомство с профессией<br />начинается в университете</h3>
              <p>Работодатели, мастер-классы и проектные интенсивы.</p>
              <b>Партнёры кафедры ↗</b></NuxtLink
            ><NuxtLink to="/history"
              ><span>1931–2026</span>
              <h3>95 лет в истории<br />экономического образования</h3>
              <b>Открыть юбилейный раздел ↗</b></NuxtLink
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
