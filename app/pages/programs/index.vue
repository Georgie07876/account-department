<script setup lang="ts">
useHead({ title: "Образовательные программы" });
</script>

<template>
  <div class="container">
    <div class="page-intro">
      <p class="eyebrow">Образовательные траектории</p>
      <h1>Наши программы</h1>
      <p class="page-intro__lead">
        Бакалавриат, магистратура и аспирантура — последовательное развитие в
        профессии и науке.
      </p>
    </div>
    <div class="tabs">
      <a href="#bachelor">Бакалавриат</a><a href="#master">Магистратура</a
      ><a href="#postgraduate">Аспирантура</a><a href="#career">Карьера</a>
    </div>
    <section id="bachelor" class="section">
      <h2>Бакалавриат</h2>
      <p class="text--muted">Направление 38.03.01 «Экономика»</p>
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
    </section>
    <section id="master" class="section">
      <h2>Магистратура</h2>
      <p class="text--muted">Направление 38.04.01 «Экономика»</p>
      <div class="program-list">
        <NuxtLink class="program-card" to="/programs/master-1"
          ><div class="program-card__meta">
            Магистратура <span>38.04.01 · Экономика</span>
          </div>
          <h3>Бухгалтерский учет и консалтинг в условиях цифровой экономики</h3>
          <span class="program-card__link"
            >О программе <span aria-hidden="true">↗</span></span
          ></NuxtLink
        ><NuxtLink class="program-card" to="/programs/master-2"
          ><div class="program-card__meta">
            Магистратура <span>38.04.01 · Экономика</span>
          </div>
          <h3>Учет, бюджетирование и контроллинг в управлении бизнесом</h3>
          <span class="program-card__link"
            >О программе <span aria-hidden="true">↗</span></span
          ></NuxtLink
        ><NuxtLink class="program-card" to="/programs/master-3"
          ><div class="program-card__meta">
            Магистратура <span>38.04.01 · Экономика</span>
          </div>
          <h3>Бухгалтерский учет и правовое обеспечение бизнеса</h3>
          <span class="program-card__link"
            >О программе <span aria-hidden="true">↗</span></span
          ></NuxtLink
        >
      </div>
    </section>
    <section id="postgraduate" class="section">
      <h2>Аспирантура</h2>
      <div class="feature">
        <div>
          <p class="eyebrow">Научная специальность 5.2.3</p>
          <h3>Региональная и отраслевая экономика</h3>
          <p>
            Специализация «Бухгалтерский учет, аудит и экономическая
            статистика».
          </p>
          <p>
            Участие в исследовательских проектах научной школы, подготовка
            диссертации и обсуждение результатов на конференциях.
          </p>
          <NuxtLink class="text-link" to="/science"
            >Научная школа<span aria-hidden="true"> ↗</span></NuxtLink
          >
        </div>
        <div>
          <h3>Как поступить</h3>
          <p>
            Условия, сроки приёма и перечень документов уточняйте на официальном
            сайте университета.
          </p>
          <a class="text-link" href="https://rsue.ru/abitur/"
            >Приёмная комиссия<span aria-hidden="true"> ↗</span></a
          >
        </div>
      </div>
    </section>
    <section id="career" class="section">
      <h2>Траектории трудоустройства</h2>
      <div class="card-list">
        <article class="card">
          <span class="card__number">01</span>
          <h3>Бизнес и консалтинг</h3>
          <p>
            Бухгалтерские, финансовые, консалтинговые и аналитические службы
            организаций.
          </p>
        </article>
        <article class="card">
          <span class="card__number">02</span>
          <h3>Аудит и государственный сектор</h3>
          <p>
            Аудиторские организации, органы государственной и муниципальной
            власти.
          </p>
        </article>
        <article class="card">
          <span class="card__number">03</span>
          <h3>Наука и образование</h3>
          <p>
            Научно-исследовательские организации, учреждения высшего и
            дополнительного профессионального образования.
          </p>
        </article>
      </div>
    </section>
    <section id="accreditation" class="section">
      <h2>Профессионально-общественная аккредитация</h2>
      <p>
        На официальной странице кафедры опубликованы сведения об аккредитации
        ИПБ России двух программ: «Учет и контроль в управлении бизнесом» и
        «Бухгалтерский учет и консалтинг в условиях цифровой экономики».
      </p>
      <p>
        Свидетельство № 021-ПОА от 2 апреля 2024 года, срок действия — до 2
        апреля 2030 года. Получение профессионального аттестата зависит от
        выполнения требований ИПБ России.
      </p>
      <a class="text-link" href="https://rsue.ru/fakultety/UEF/kaf-BU/"
        >Сведения и документы на официальном сайте<span aria-hidden="true">
          ↗</span
        ></a
      >
    </section>
  </div>
</template>
