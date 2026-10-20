<script setup lang="ts">
useHead({ title: "Контакты" });
</script>

<template>
  <div class="container">
    <div class="page-intro">
      <p class="eyebrow">Мы на связи</p>
      <h1>Контакты кафедры</h1>
      <p class="page-intro__lead">
        Вопросы о программах, научной работе и сотрудничестве можно адресовать
        сотрудникам кафедры.
      </p>
    </div>
    <div class="contacts">
      <div class="contact-card">
        <p class="eyebrow">Приходите</p>
        <h2>Ростов-на-Дону,<br />Большая Садовая, 69</h2>
        <p>РГЭУ (РИНХ) · кабинет 509</p>
        <hr />
        <h3>Часы приёма</h3>
        <p>В проекте структуры указан график:<br />пн–пт, 11:00–13:00.</p>
        <p class="note">
          Перед визитом уточните время по телефону: график требует подтверждения
          кафедрой.
        </p>
      </div>
      <div class="contact-card contact-card--navy">
        <p class="eyebrow">Позвоните или напишите</p>
        <h3><a href="tel:+78632402986">+7 (863) 240-29-86</a></h3>
        <p>
          <a href="tel:+78632613820">+7 (863) 261-38-20</a><br />Внутренний
          номер: 8-20
        </p>
        <hr />
        <a class="contact-card__mail" href="mailto:RGEUuef509@yandex.ru"
          >RGEUuef509@yandex.ru</a
        >
        <p><a href="https://vk.ru/buxychet_rsue">Кафедра ВКонтакте ↗</a></p>
      </div>
    </div>
    <section class="section">
      <h2>Заведующий кафедрой</h2>
      <div class="leader leader--compact">
        <img src="/assets/head.jpeg" alt="Лабынцев Николай Тихонович" />
        <div>
          <h3>Лабынцев Николай Тихонович</h3>
          <p>
            Доктор экономических наук, профессор, Почетный работник ВПО РФ,
            президент Ростовского ТИПБиА, Почетный наставник Минобрнауки России.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
