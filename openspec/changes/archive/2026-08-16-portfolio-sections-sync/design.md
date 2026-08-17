## Context

Мотивация — см. `proposal.md` (Why). Действующие спецификации описывают секции Hero, About, Skills, Portfolio, Contact; макеты Stitch и change `stitch-navigation-mapping-contract` зафиксировали канон About, Experience, Projects, Tech Stack, Contact. Этот change приводит контентные секции к канону.

Ограничения: секции About и Contact не трогаем. Роутинг (Next.js App Router, единый маршрут `/`, SSG) и механика плавного скролла (`scroll-behavior: smooth`, History API) сохраняются без изменений.

## Goals / Non-Goals

**Goals:**
- Переименовать Skills → Tech Stack (`#skills` → `#tech-stack`).
- Переименовать Portfolio → Projects (`#portfolio` → `#projects`).
- Добавить секцию Experience (`#experience`).
- Обновить навигационное меню Hero и перечень секций SPA.

**Non-Goals:**
- Не меняем содержимое секций About и Contact.
- Не проектируем сам контент Experience/Tech Stack/Projects (это уровень контента, решается при имплементации).
- Не трогаем навигационную оболочку (BottomNavBar/VerticalDock) — это change `stitch-navigation-mapping-contract`.
- Не меняем роутинг, SSG и механику якорей.

## Decisions

### D1. Переименование через REMOVED + ADDED

**Решение:** секции Skills и Portfolio оформляются как `REMOVED Requirements`, а новые Tech Stack и Projects — как `ADDED Requirements`. Experience — только `ADDED`.

**Почему:** переименование затрагивает не только заголовок, но и `id` якоря, список контента и имена сценариев. Механизм `RENAMED` в OpenSpec меняет только заголовок требования, но не сценарии и не содержимое; `MODIFIED` требует дословного сохранения имён существующих сценариев. Совокупная смена имени, якоря и контента — это по сути замена требования, поэтому `REMOVED` + `ADDED` точнее отражает семантику и не провоцирует ложных конфликтов валидатора.

**Альтернативы:** `RENAMED` Skills→Tech Stack + `MODIFIED` — отвергнуто (не покрывает смену `id` и контента); `MODIFIED` с тем же именем — отвергнуто (имя секции тоже меняется).

### D2. Порядок секций

**Решение:** канонический порядок на странице — Hero, About, Experience, Projects, Tech Stack, Contact.

**Почему:** соответствует порядку пунктов навигации макетов Stitch и enum `activeSection`.

### D3. Обратная совместимость якорей

**Решение:** прежние якоря `#skills` и `#portfolio` не сохраняются как alias-редиректы.

**Почему:** сайт ещё в стадии миграции/пре-релиза, внешних ссылок на старые якоря нет. Поддержка alias добавила бы неоправданную сложность.

**Альтернативы:** сохранить alias `#skills`→`#tech-stack` — отвергнуто (не нужно на текущей стадии).

## Risks / Trade-offs

- **[Риск] Разрыв с уже написанным кодом `apps/web`** → Mitigation: если секции-заглушки уже существуют с прежними `id`, их `id` и тексты обновляются в рамках apply этого change (задача в tasks.md).
- **[Риск] Расхождение переводов** → Mitigation: добавить задачу обновления `public/locales/{ru,en}/translation.json`.
- **[Риск] Конфликт с `stitch-navigation-mapping-contract`** → Mitigation: этот change фиксирует якоря до применения навигационного контракта; enum `activeSection` уже согласован (about | experience | projects | tech-stack | contact).
