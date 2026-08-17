## Why

Проект портфолио имеет утверждённые макеты Google Stitch (мобильный и десктопный), но между ними и кодовой базой Turborepo нет формального контракта: навигационная оболочка (BottomNavBar / VerticalDock) и шторка настроек рискуют быть реализованы разрозненно, с рассинхронизацией состояний темы, языка и активной секции. Нужен единый «Mapping Contract», который жёстко свяжет раздельные макеты Stitch со слоями `packages/ui` и `apps/web` и зафиксирует сквозные типы состояний до начала генерации кода.

## What Changes

- Вводится новая capability `navigation-shell`, описывающая единую адаптивную навигационную оболочку портфолио.
- Слой UI (`packages/ui`, Atomic Design → organisms):
  - **BottomNavBar.tsx** — генерируется на основе мобильного макета «Mobile Portfolio - Floating Glass Nav & Pulse Effect» (плавающая стеклянная капсула `rounded-2xl` + `backdrop-blur-xl`, иконки с пульсирующим активным пунктом, settings gear → bottom sheet).
  - **VerticalDock.tsx** — генерируется на основе десктопного макета «Kinetic Portfolio - Glass Capsule Dock & Integrated Motion» (вертикальная плавающая стеклянная капсула, иконки с тултипами, пульсирующий активный пункт, settings gear + Back to Top).
  - **SettingsBottomSheet.tsx** — общая шторка кастомизации в стиле Android 17 / Material You (сегментный переключатель темы Light/Dark/System + чипы RU/EN), вызывается кнопкой настроек из обоих компонентов навигации.
- Слой валидации типов (по паттерну typed-service-contracts): сквозные типы состояния фиксируются Zod-схемами в `packages/ui/src/shared/contracts/navigation.ts` — `theme` (light | dark | system), `language` (ru | en), `activeSection` (about | experience | projects | tech-stack | contact), `isSettingsOpen` (boolean).
- Слой сетки Layout (`apps/web`): контракт адаптивного разделения контента — десктоп `max-w-[1200px] mx-auto pr-[100px]` (не перекрываться VerticalDock), мобильный `safe-area-inset-bottom` под BottomNavBar.
- Единый набор пунктов навигации для обоих макетов: About, Experience, Projects, Tech Stack, Contact, Settings (+ Back to Top на десктопе).

## Capabilities

### New Capabilities

- `navigation-shell`: единая адаптивная навигационная оболочка портфолио, маппинг макетов Stitch на UI-компоненты и сквозной контракт состояния (тема, язык, активная секция, шторка настроек).

### Modified Capabilities

_Нет изменений существующих спецификаций на уровне требований — контракт не меняет поведение i18n, тем, роутинга или архитектуры, а дополняет их новым UI-слоем и типами состояния. Согласование секций (`portfolio-sections-sync`) и темизации (`theming-kinetic-system-mode`) выполняется отдельными change'ами._

## Impact

- **Новые компоненты:** `packages/ui/src/organisms/BottomNavBar.tsx`, `VerticalDock.tsx`, `SettingsBottomSheet.tsx`.
- **Новый контракт:** `packages/ui/src/shared/contracts/navigation.ts` (Zod), экспорт через barrel `@repo/ui`.
- **Новая зависимость:** `zod` в `packages/ui`.
- **Layout `apps/web`:** адаптивный контейнер контента (десктоп `md:` + `max-w-[1200px] mx-auto pr-[100px]`, мобильный safe-area-inset-bottom).
- **Истории Storybook:** `apps/docs` — истории для BottomNavBar, VerticalDock, SettingsBottomSheet.
- **Синхронизация секций:** якоря страницы приводятся к канону Stitch отдельным change `portfolio-sections-sync` (Skills → Tech Stack, Portfolio → Projects, добавление Experience); после его применения enum `activeSection` этого контракта согласуется с реальными якорями (`#about`, `#experience`, `#projects`, `#tech-stack`, `#contact`).
