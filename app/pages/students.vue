<script setup lang="ts">
useHead({ title: "Студентам" });
</script>

<template>
  <div class="container">
    <div class="page-intro">
      <p class="eyebrow">Учиться · исследовать · пробовать</p>
      <h1>Студенческая жизнь</h1>
      <p class="page-intro__lead">
        Научные встречи, профессиональные конкурсы и работа над реальными
        задачами бизнеса.
      </p>
    </div>
    <div class="activity" aria-label="Проекты и профориентация">
      <NuxtLink class="button button--dark" to="/project-intensive"
        >Проектно-образовательный интенсив
        <span aria-hidden="true">↗</span></NuxtLink
      ><NuxtLink class="button button--dark" to="/career-guidance"
        >Профориентационная работа кафедры
        <span aria-hidden="true">↗</span></NuxtLink
      >
    </div>
    <div class="service-links">
      <a class="text-link" href="https://rasp.rsue.ru/"
        >Расписание занятий<span aria-hidden="true"> ↗</span></a
      ><a class="text-link" href="https://rsue.ru/sveden/employees/"
        >Преподаватели<span aria-hidden="true"> ↗</span></a
      ><a class="text-link" href="https://vk.ru/buxychet_rsue"
        >Сообщество кафедры<span aria-hidden="true"> ↗</span></a
      >
    </div>
    <section id="circle" class="section">
      <h2>Студенческий научный кружок</h2>
      <div class="feature">
        <div>
          <p class="eyebrow">СНК кафедры</p>
          <h3>Тенденции развития учета в условиях управления бизнесом</h3>
          <p>Руководитель — Екатерина Борисовна Зубенко.</p>
          <p>
            Для участия и уточнения темы следующей встречи свяжитесь с кафедрой.
          </p>
          <a class="button button--dark" href="mailto:RGEUuef509@yandex.ru"
            >Узнать о работе кружка<span aria-hidden="true"> ↗</span></a
          >
        </div>
        <div>
          <ul class="content-list">
            <li>Управленческий учет</li>
            <li>Бухгалтерский финансовый учет</li>
            <li>Налоговый учет</li>
            <li>Информационные технологии в учете</li>
            <li>Учет в различных секторах экономики</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section">
      <h2>Возможности для студентов</h2>
      <div class="accordion">
        <details>
          <summary>Конкурсы и олимпиады</summary>
          <div>
            <ul class="content-list">
              <li>
                Международная онлайн-олимпиада по бухгалтерскому учету ИПБ
                России.
              </li>
              <li>
                Всероссийская олимпиада КЭПТ по бухгалтерскому учету и аудиту.
              </li>
              <li>Конкурс «Бухгалтер Дона».</li>
              <li>Хакатон «Экономика трансформаций».</li>
              <li>
                Конкурс «Умная стипендия» банка «Центр-Инвест» и фонда
                «Образование и наука ЮФО».
              </li>
            </ul>
            <p>Даты и условия участия уточняйте у организаторов.</p>
          </div>
        </details>
        <details>
          <summary>Экскурсии на предприятия</summary>
          <div>
            <p>
              В материалах факультета представлены поездки на «Роствертол»,
              «Ростсельмаш», ТАНТК им. Г. М. Бериева, «Тавр», «Атлантис-Пак»,
              «Аква-Дон», The Act, Аютинский хлебозавод и «Егорлык Молоко».
            </p>
          </div>
        </details>
        <details>
          <summary>Встречи с работодателями</summary>
          <div>
            <p>
              Проект «Гость месяца», деловые игры, мастер-классы и тренинги с
              представителями банков, аудиторских и производственных компаний
              позволяют познакомиться с профессиональными задачами.
            </p>
          </div>
        </details>
        <details>
          <summary>Проектно-образовательный интенсив</summary>
          <div>
            <p>
              Студенты решают практические кейсы компаний-партнёров, включая
              КЭПТ и ГК «Аудит-Вела», и представляют свои решения экспертам.
            </p>
          </div>
        </details>
      </div>
    </section>
    <section class="section">
      <h2>Международная образовательная среда</h2>
      <div class="card-list">
        <article class="card">
          <span class="card__number">01</span>
          <h3>Онлайн-олимпиада</h3>
          <p>
            Международная межвузовская олимпиада по бухгалтерскому учету с
            участием студентов из разных стран.
          </p>
        </article>
        <article class="card">
          <span class="card__number">02</span>
          <h3>Научная дискуссия</h3>
          <p>
            Круглые столы на английском языке по вопросам устойчивого развития.
          </p>
        </article>
        <article class="card">
          <span class="card__number">03</span>
          <h3>Обмен опытом</h3>
          <p>
            Участие студентов в международных научно-практических конференциях.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>
