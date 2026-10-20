<script setup lang="ts">
useHead({ title: "О кафедре" });
</script>

<template>
  <div class="container">
    <div class="page-intro">
      <p class="eyebrow">Традиции и современность</p>
      <h1>О кафедре</h1>
      <p class="page-intro__lead">
        Одна из старейших кафедр РГЭУ (РИНХ). С 1931 года — в подготовке
        специалистов по учету, анализу и аудиту.
      </p>
    </div>
    <div class="split">
      <figure>
        <img
          class="media--rounded"
          src="/assets/team.jpeg"
          alt="Коллектив кафедры, июнь 2024"
        />
        <figcaption>Коллектив кафедры · июнь 2024 года</figcaption>
      </figure>
      <div>
        <h2>Сохраняя традиции,<br />работаем на будущее</h2>
        <p>
          Кафедра объединяет образование, исследования и сотрудничество с
          профессиональным сообществом. С сентября 1993 года её возглавляет
          Николай Тихонович Лабынцев.
        </p>
        <p>
          В 2003 году была утверждена структура выпускающих кафедр по
          специальности «Бухгалтерский учет, анализ и аудит». Сегодня кафедра
          развивает программы бакалавриата, магистратуры и аспирантуры.
        </p>
        <NuxtLink class="text-link" to="/history">История кафедры ↗</NuxtLink>
      </div>
    </div>
    <section class="section">
      <h2>Руководство</h2>
      <div class="leader">
        <img src="/assets/head.jpeg" alt="Лабынцев Николай Тихонович" />
        <div>
          <p class="eyebrow">Заведующий кафедрой</p>
          <h3>Лабынцев<br />Николай Тихонович</h3>
          <p>
            Доктор экономических наук, профессор. Почетный работник ВПО РФ,
            президент Ростовского ТИПБиА, Почетный наставник Минобрнауки России.
          </p>
          <NuxtLink class="text-link" to="/contacts"
            >Связаться с кафедрой ↗</NuxtLink
          >
        </div>
      </div>
    </section>
    <section class="section">
      <h2>Преподаватели</h2>
      <p>
        В юбилейном проспекте на 1 января 2026 года указан 31 преподаватель.
        Биобиблиографические очерки представлены на страницах 18–100 издания.
      </p>
      <a class="text-link" href="/materials/department-95.pdf#page=19"
        >Биографии преподавателей · PDF<span aria-hidden="true"> ↗</span></a
      >
      <p>
        Актуальные сведения о преподавателях каждой образовательной программы
        размещены в официальном разделе университета.
      </p>
      <a class="text-link" href="https://rsue.ru/sveden/employees/"
        >Педагогический состав РГЭУ (РИНХ)<span aria-hidden="true"> ↗</span></a
      >
    </section>
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
    <section class="section">
      <h2>Образовательная и профессиональная среда</h2>
      <div class="card-list">
        <article class="card">
          <span class="card__number">01</span>
          <h3>Учебная бухгалтерия</h3>
          <p>
            Лаборатория, созданная в 2005 году, помогает осваивать практические
            задачи учета, аудита и анализа.
          </p>
        </article>
        <article class="card">
          <span class="card__number">02</span>
          <h3>Наука и производство</h3>
          <p>
            Базовая кафедра на «Роствертоле» связывает образование с практикой и
            прикладными исследованиями.
          </p>
        </article>
        <article class="card">
          <span class="card__number">03</span>
          <h3>Профессиональное сообщество</h3>
          <p>
            Бизнес-школа, Ростовский ТИПБиА, Профессорский клуб и журнал «Учет и
            статистика» поддерживают развитие профессии.
          </p>
        </article>
      </div>
    </section>
    <section class="section">
      <h2>Стратегия на 2025–2030 годы</h2>
      <ul class="content-list">
        <li>
          Развитие цифровых учебных материалов, видеолекций и электронных
          учебно-методических комплексов.
        </li>
        <li>
          Вовлечение студентов в исследования, гранты, олимпиады и научные
          конкурсы.
        </li>
        <li>Развитие прикладных исследований совместно с организациями.</li>
        <li>Расширение межвузовского и международного сотрудничества.</li>
        <li>
          Подготовка научных кадров и повышение квалификации преподавателей.
        </li>
      </ul>
      <a class="text-link" href="/materials/department-95.pdf#page=233"
        >Полный текст стратегии · PDF<span aria-hidden="true"> ↗</span></a
      >
    </section>
  </div>
</template>
