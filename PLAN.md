# План: редактируемый контент через админку

> Рабочий документ проекта. Отмечаем прогресс галочками, дополняем решениями по ходу работы.
> Формат работы: техлид (ИИ) даёт команды и объяснения, разработчик выполняет, исправляет и принимает ключевые решения.

## Зафиксированные решения

| # | Решение | Статус |
|---|---------|--------|
| 1 | Рендеринг фронта — **SSR** (Nitro node-сервер) вместо SSG | ✅ Принято |
| 2 | Структура — **монорепо**: `web/` (Nuxt) + `api/` (Django), один git, один CI/CD | ✅ Принято |
| 3 | Бэкенд — **Django + DRF**, админка — встроенная Django Admin (свою на Vue не пишем в MVP) | ✅ Принято |
| 4 | БД — **PostgreSQL**, всё в Docker Compose | ✅ Принято |
| 5 | Redis — отложен до фазы оптимизации (кэш API) | ✅ Принято |
| 6 | FastAPI, Tailwind, SCSS — **не используем** в этом проекте | ✅ Принято |
| 7 | Node.js закреплён на 24.22.1 (CVE-2026-111497) | ✅ Принято ранее |
| 8 | Версия Python — **3.13** | ✅ Принято |
| 9 | Менеджер зависимостей Python — **Poetry** (pyproject.toml) | ✅ Принято |
| 10 | WYSIWYG-редактор для текстовых блоков | ⬜ Решить на фазе 1 (предложение: сначала plain textarea) |
| 11 | Топология БД на проде. Сервер у вуза есть (Proxmox LXC). **Дефолт: Postgres-контейнер на том же сервере.** Уточнить у ИТ-отдела про выделенную БД на общем кластере — если дадут, берём его (бэкапы на их стороне) | ⏳ Дефолт принят, уточнение до фазы 5 |

## Целевая архитектура

```
┌──────────────────────────────────────────────────────┐
│  nginx (reverse-proxy, единственная точка входа)     │
│    /api/, /admin/, /media/, /static/  →  api:8000    │
│    всё остальное                      →  web:3000    │
└──────────────────────────────────────────────────────┘
   ┌──────────────┐              ┌───────────────────┐
   │ web: Nuxt 4  │ ── /api ──►  │ api: Django + DRF │
   │ SSR (node)   │              │ + Django Admin    │
   └──────────────┘              └────────┬──────────┘
                                 ┌────────▼─────────┐
                                 │   PostgreSQL     │
                                 └──────────────────┘
```

## Целевая структура монорепо

```
account-department/
├── web/                    # Nuxt 4 (текущий фронт переезжает сюда через git mv)
│   ├── app/  public/  server/
│   ├── nuxt.config.ts  package.json
│   └── Dockerfile          # SSR: node .output/server/index.mjs
├── api/                    # Django + DRF (новый проект)
│   ├── config/             # settings, urls, wsgi
│   ├── pages/              # Page + Section (универсальные страницы)
│   ├── content/            # Program, Person, Partner
│   ├── settings_app/       # SiteSettings (singleton)
│   ├── requirements.txt
│   └── Dockerfile          # python + gunicorn
├── deploy/
│   ├── nginx.conf          # reverse-proxy на web и api
│   └── ssl/                # сертификаты (не в git)
├── docker-compose.yml      # web + api + db (dev и prod-совместимый)
├── .gitlab-ci.yml          # ОДИН пайплайн: test-web, test-api, build-api, build-web, deploy
├── PLAN.md                 # ← этот файл
└── README.md
```

## Модель данных (черновик, уточняется на фазе 1)

- **Page** — slug, title, seo_description, is_published, updated_at
- **Section** — page (FK), kind (rich_text / image_text / person_list / card_list / cta), title, body (HTML), image, payload (JSON), order
- **Program** — slug, level (bachelor/master), code, direction, title, lead, focus (JSON), presentation_url, order, is_published ← перенос `app/data/programs.ts`
- **Person** — name, position, degree, photo, bio, order, pages (M2M)
- **Partner** — name, logo, url, description, order
- **SiteSettings** — singleton: phone, email, address, vk_url, university_url ← перенос `app/data/site.ts`

## Публичное API (read-only)

```
GET /api/pages/            GET /api/pages/{slug}/
GET /api/programs/         GET /api/programs/{slug}/
GET /api/partners/
GET /api/settings/
```

## Фазы и прогресс

### Фаза 0 — Реструктуризация монорепо ✅ (пайплайн зелёный)
- [x] 0.1 Перенос фронта в `web/` через `git mv` (сохранить историю git)
- [x] 0.2 Проверка: фронт собирается и работает из `web/` (build ✅, lint после переустановки node_modules)
- [x] 0.3 Корневой `docker-compose.yml` (пока только db)
- [x] 0.4 Обновить `.gitignore`, `.dockerignore` (→ `web/`), `.gitlab-ci.yml` (test: cd web + rules:changes) под новые пути
- [x] 0.5 Коммит: `refactor: restructure into monorepo (web/)` + пуш, пайплайн зелёный

### Фаза 1 — Бэкенд: Django, модели, админка 🔄
- [ ] 1.1 Скелет Django-проекта в `api/` (Poetry + startproject; приложения pages, content, settings_app)
- [ ] 1.2 Модели по схеме выше + миграции
- [ ] 1.3 Админка: SectionInline внутри PageAdmin, list_display/filters/search, singleton для SiteSettings
- [ ] 1.4 Подключение PostgreSQL через docker-compose (env-переменные)
- [ ] 1.5 Суперюзер, тестовое наполнение 1–2 страниц
- [ ] Критерий: контент-менеджер может отредактировать страницу в `/admin/`

### Фаза 2 — API на DRF ⬜
- [ ] 2.1 Сериализаторы (Page+Section вложенно, Program, Person, Partner, SiteSettings)
- [ ] 2.2 ReadOnlyModelViewSet'ы и роутинг
- [ ] 2.3 django-cors-headers (dev: localhost:3000; prod: домен кафедры)
- [ ] 2.4 Оптимизация: prefetch_related против N+1
- [ ] Критерий: `GET /api/pages/about/` отдаёт полный JSON страницы

### Фаза 3 — Медиафайлы ⬜
- [ ] 3.1 MEDIA_URL/MEDIA_ROOT, раздача в dev через Django
- [ ] 3.2 Абсолютные URL медиа в сериализаторах
- [ ] 3.3 Лимиты загрузки (PDF 95-летия ~18.5 МБ)

### Фаза 4 — Фронт на API (SSR) ⬜
- [ ] 4.1 Переключение Nuxt на SSR (build вместо generate), NUXT_PUBLIC_API_BASE
- [ ] 4.2 Типы и composable-слой данных (useFetch)
- [ ] 4.3 contacts.vue + SiteSettings (первая страница, самая простая)
- [ ] 4.4 programs/*.vue → /api/programs/
- [ ] 4.5 about.vue → секции + Person
- [ ] 4.6 Остальные страницы → секции (science, students, partners, history, index)
- [ ] 4.7 SEO: usePageMeta и sitemap.xml берут данные из API
- [ ] 4.8 Состояния loading/error
- [ ] 4.9 Удалить app/data/* после переноса
- [ ] Критерий: правка в админке видна на сайте без пересборки

### Фаза 5 — Деплой ⬜
- [ ] 5.1 Dockerfile для api (gunicorn), обновить Dockerfile web под SSR
- [ ] 5.2 nginx как reverse-proxy (deploy/nginx.conf)
- [ ] 5.3 CI: test-api, build-api/build-web с rules:changes, единый deploy
- [ ] 5.4 Прод-настройки: DEBUG=False, ALLOWED_HOSTS, CSRF_TRUSTED_ORIGINS, секреты в CI-переменных
- [ ] 5.5 Раздача media/static через nginx в проде
- [ ] Критерий: сайт и админка работают на сервере, контент правится через админку

### Фаза 6 — Полировка (опционально) ⬜
- [ ] 6.1 Redis: кэш API (django-redis)
- [ ] 6.2 История правок (django-reversion)
- [ ] 6.3 Черновики с превью по токену
- [ ] 6.4 Бэкапы PostgreSQL (pg_dump по расписанию)

## Риски (держим в голове)

1. HTML из админки рендерится через `v-html` — правит только доверенный контент-менеджер (XSS).
2. N+1 запросы — везде prefetch_related/select_related.
3. Абсолютные URL медиа — фронту нужен полный URL, не `/media/...`.
4. Существующий прод-пайплайн не ломаем: вся работа в `dev`, мерж в `master` после проверки SSR-сборки.
5. Миграция контента: тексты из `app/pages/*.vue` и `app/data/*.ts` переносятся в БД вручную/фикстурами — выделить на это время в фазе 4.
6. На сервере прод-деплой использует `docker compose --project-directory $PROJECT_PATH` — после мержа монорепо в `master` корневой `docker-compose.yml` может пересечься с серверным `deploy/docker-compose.yml`. Разруливаем в фазе 5 (единый compose для прода), до мержа в master проверить, какой compose-файл реально читается на сервере.

## Журнал решений (дополняем по ходу)

- **2026-10-28** — Зафиксированы решения 1–7: SSR, монорепо, Django+DRF, PostgreSQL, Docker Compose. Создан PLAN.md.
- **2026-10-28** — Решения 8–9: Python 3.13, Poetry. Перенос фронта в `web/`: `app/` был перемещён без `git mv` — исправлено через `git add -A` (rename detection), история сохранена.
- **2026-10-28** — Фаза 0 закрыта: монорепо, husky переподключён, корневой compose с PostgreSQL, CI обновлён (`cd web` + `changes:`), пайплайн зелёный. Решение 11: дефолт — Postgres-контейнер на сервере вуза, у ИТ уточняем выделенную БД.

