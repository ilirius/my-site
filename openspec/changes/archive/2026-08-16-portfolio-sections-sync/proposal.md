## Why

Утверждённые макеты Google Stitch (мобильный и десктопный) зафиксировали новый канонический набор секций портфолио: About, Experience, Projects, Tech Stack, Contact. Однако действующие спецификации `pages-and-routing` и `project-overview` описывают прежний набор: Hero, About, Skills, Portfolio, Contact (якоря `#about`, `#skills`, `#portfolio`, `#contact`).

Это расхождение блокирует контракт навигационной оболочки (`navigation-shell`): enum активной секции (`about | experience | projects | tech-stack | contact`) не сможет связаться с реальными якорями страницы, а `activeSection` будет рассинхронизирован с DOM. Прежде чем генерировать компоненты навигации, необходимо привести контентные секции к канону, заданному макетами.

## What Changes

Синхронизация набора секций портфолио с каноном Stitch:

- **Переименование** секции «Навыки» (Skills, `#skills`) → «Технологический стек» (Tech Stack, `#tech-stack`).
- **Переименование** секции «Портфолио» (Portfolio, `#portfolio`) → «Проекты» (Projects, `#projects`).
- **Добавление** новой секции «Опыт» (Experience, `#experience`).
- **Обновление** навигационного меню Hero: набор пунктов становится About, Experience, Projects, Tech Stack, Contact.
- **Обновление** списка якорных секций в `project-overview` (SPA-описание).

Секция About (`#about`) и Contact (`#contact`) остаются без изменений. Канонический итоговый набор: About, Experience, Projects, Tech Stack, Contact (+ Settings — добавляется отдельным change `stitch-navigation-mapping-contract`).

## Capabilities

### New Capabilities

<!-- Отсутствуют — новых capability не вводится. -->

### Modified Capabilities

- `pages-and-routing`: изменение контента секций (переименование Skills → Tech Stack, Portfolio → Projects, добавление Experience) и навигационного меню Hero.
- `project-overview`: обновление перечня секций SPA и якорей навигации.

## Impact

- **Код `apps/web`:** при имплементации секции получают новые `id` (`#tech-stack`, `#projects`, `#experience`); прежние якоря `#skills` и `#portfolio` больше не используются.
- **i18n:** заголовки и пункты меню секций (Experience, Projects, Tech Stack) добавляются/обновляются в `public/locales/{ru,en}/translation.json`.
- **Связанный change `stitch-navigation-mapping-contract`:** enum `activeSection` становится согласованным с якорями страницы (`about | experience | projects | tech-stack | contact`), устраняя зафиксированный риск рассинхронизации.
- **Без изменения:** секции About и Contact, роутинг Next.js App Router (единый маршрут `/`), SSG, механика плавного скролла.
