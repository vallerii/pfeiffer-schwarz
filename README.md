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

## Дизайн — «Fliesenspiegel» (ветка `design/fliesenspiegel`)

Ощущение: спокойный контроль. Отельер видит, что гости ничего не заметят, частный клиент — чистую и точную работу.

- **Палитра из материалов** (`@theme` в `app/globals.css`): Tanne `#1D3B33` (ель, тёмные поверхности), Kalk `#EEEFEA` (известковая штукатурка), Fuge `#CFD3CB` (затирка — линии и швы), Messing `#C99A3A` (латунь, кнопки), Schiefer `#222826` (сланец, текст). Для текста-акцента на светлом фоне — `messing-dunkel`.
- **Шрифты:** Barlow Condensed (заголовки, DIN-характер, держит длинные немецкие слова) + Barlow (текст), локально через `@fontsource`.
- **Главный приём — кафельная кладка:** утилита `fliesen` (grid с зазором `--spacing-fuge` = 6px) на фоне цвета Fuge; швы — это фон, просвечивающий между плитками. Так построены hero, ремёсла, проекты, галерея, шаги.
- **Mein Zauberbad — единственная поверхность без швов** (скруглённая панель, круглая кнопка): «fugenlos» показан самим дизайном.
- **Maßkette** (`Masskette` в `components/Blocks.tsx`) — цифры кейса как размерная цепочка с чертежа.
- Нумерация только у настоящих последовательностей (этапы работ), без стрелок в ссылках, без выделения слова цветом в заголовках. Скругление 3px (кромка плитки).
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
