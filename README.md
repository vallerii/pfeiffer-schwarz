# Pfeiffer & Schwarz — новый сайт (Next.js + Tailwind)

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript. Тексты сайта на немецком, обращение «Sie».

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

Перед `dev` и `build` автоматически запускается `scripts/fetch-images.mjs`: он скачивает реальные фото
с текущего сайта pfeiffer-schwarz.com в `public/img/` (уже скачанные пропускает). Файлы — оригиналы
с телефона (по несколько МБ); `next/image` сам сжимает их при отдаче. Перед запуском лучше заменить
их на подготовленные версии с теми же именами и закоммитить, чтобы не зависеть от старого сайта.

## Что готово

| Страница | Файл |
|---|---|
| Startseite (вайрфрейм v2: квиз, два направления, Hotel, Bau, Ablauf, Zauberbad, Referenzen, Über uns, отзывы, Notfall, FAQ, Ratgeber) | `app/page.tsx` |
| Hotelrenovierung (квиз отеля: тип → номера → что ремонтируем → сроки → работает ли отель → контакты; направления, генподряд, 4 фазы, кейс, FAQ) | `app/hotelrenovierung/page.tsx` |
| Bau & Innenausbau — обзор ремёсел | `app/bau-innenausbau/page.tsx` |
| 6 страниц ремёсел: Fliesen, Maler, Innenausbau, Trockenbau, Putz & Estrich, Sanitär (форма-оценка, галерея, Kosten, карта, SEO-текст, FAQ) | шаблон `components/TradePage.tsx`, **тексты в `lib/trades.ts`** |
| Impressum, Datenschutz (заготовки), 404 «Seite im Bau» | `app/impressum`, `app/datenschutz`, `app/not-found.tsx` |
| 301-редиректы со старых URL WordPress | `next.config.ts` |
| sitemap.xml, robots.txt, schema (HomeAndConstructionBusiness, Service, BreadcrumbList, FAQPage) | `app/sitemap.ts`, `app/robots.ts`, компоненты |
| Приём заявок (заглушка, пишет в лог) | `app/api/anfrage/route.ts` |

Остальные пункты меню ведут на страницы, которых ещё нет — открывается 404 «Diese Seite ist noch im Bau».

## Дизайн

- Цвета взяты с текущего сайта: navy `#1A2B3C`, синий `#1032CF` / `#2A4EEF`, сланец `#65778A` — см. `@theme` в `app/globals.css`.
- Шрифты: Montserrat (заголовки, как на текущем сайте) + Inter (текст), подключены локально через `@fontsource`.
- Без карточек: разделители, строки-списки, крупные фото. Без надписей капсом над заголовками.
- Логотип в шапке — упрощённая SVG по мотивам текущего (`components/Logo.tsx`), заменить на оригинальный SVG.

## Как добавить ремесло

Добавить объект в `lib/trades.ts` и папку `app/bau-innenausbau/<slug>/page.tsx` по образцу соседних (3 строки).

## Плейсхолдеры

Всё, что должен дать клиент, выделено жёлтым (`className="todo"`) или в квадратных скобках: `[X]`, `[Name]`,
`[24 h]`, Google-рейтинг, цены, кейсы, отзывы, фото «Vorher», фото Zauberbad, команда. Поиск по проекту: `todo` и `[`.

## Подключить до запуска

- Отправку заявок (`app/api/anfrage/route.ts`) — e-mail/CRM, загрузку фото.
- Номер экстренной линии (сейчас основной номер).
- Datenschutz и проверку Impressum юристом.

## Ветка `design/brand-blau` — «Kontaktbogen»

Направление выбрано через скилы impeccable (контекст в `PRODUCT.md`, контракт в `.impeccable/surfaces/app-page-tsx.md`) и design-taste-frontend (колода «contact sheet», `.taste-skill/direction.json`).

- Идея: страница как контактный лист собственных фото; номера в ремонте носят синюю табличку «Bitte nicht stören», остальные остаются в продаже.
- Цвет: белый фон, антрацит `#17191E` для текста, фирменный синий `#1032CF` только там, где идёт работа (табличка в hero, план занятости, полоски под кадрами, аварийная полоса, плитка «Projekt anfragen» в подвале).
- Шрифт: Hanken Grotesk вместо выданного колодой Switzer (Fontshare недоступен из сборки — при желании заменить на Switzer локально).
- Интерактив: план занятости 24 номеров в разделе Hotel — по неделям синие таблички переходят с этажа на этаж (пометка «Beispielplan»).
- Старые имена токенов (`navy`, `blue`, …) оставлены с новыми значениями, поэтому внутренние страницы перекрашены автоматически; их композиции пока прежние.
