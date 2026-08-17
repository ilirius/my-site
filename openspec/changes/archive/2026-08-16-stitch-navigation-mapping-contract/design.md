## Context

Мотивация — см. `proposal.md` (Why). Здесь фиксируем только технические решения.

Текущие ограничения: монорепо Turborepo + pnpm, `apps/web` на Feature-Sliced Design (app → pages → widgets → features → entities → shared), `packages/ui` (@repo/ui) на Atomic Design (atoms → molecules → organisms). Стили — Tailwind CSS v4 + токены Ventura Mono. Контракт состояния должен быть типобезопасным и проверяемым в рантайме (TypeScript strict + Zod), поэтому выбран паттерн typed-service-contracts («Spec & Handler», принцип «parse, don't validate»).

Источники дизайна (макеты Stitch — фактический источник правды для UI):
- Мобильный: «Mobile Portfolio - Floating Glass Nav & Pulse Effect» (id `c7e19fc5ea554680bc1df3bd51c13be4`) — плавающая нижняя стеклянная капсула, пульсирующий активный пункт, settings gear → bottom sheet.
- Десктопный: «Kinetic Portfolio - Glass Capsule Dock & Integrated Motion» (id `59be6a6da3c54251ac85958648a838a8`) — вертикальная стеклянная капсула справа, тултипы, Back to Top + settings gear.

## Goals / Non-Goals

**Goals:**
- Жёстко связать раздельные макеты Stitch с компонентами `packages/ui` и layout `apps/web` через формальный контракт.
- Зафиксировать сквозные типы состояния навигации (Zod) как единый источник правды в `packages/ui`.
- Обеспечить адаптивное разделение контента (десктоп `pr-[100px]` под VerticalDock, мобильный safe-area под BottomNavBar).
- Переиспользовать одну шторку настроек `SettingsBottomSheet` для обоих навигационных компонентов.

**Non-Goals:**
- Не реализуем сами компоненты и логику в рамках этого change (только планирование).
- Не меняем требования существующих спеков (i18n, theming, routing, architecture) — только дополняем новой capability `navigation-shell`.
- Не проектируем содержимое секций (Hero, About, Projects и т.д.) — только оболочку навигации и layout.
- Не решаем детали персистентности настроек (localStorage-ключи) — это уровень ниже контракта состояния.

## Decisions

### D1. Компоненты навигации — organisms в `packages/ui`

**Решение:** `BottomNavBar`, `VerticalDock` и `SettingsBottomSheet` размещаются в `packages/ui/src/organisms/`.

**Почему:** они являются составными блоками (композиция иконок-атомов, кнопок, шторки), что соответствует уровню organisms в Atomic Design. Это сохраняет границу «widgets в apps/web используют organisms из @repo/ui» из `architecture` спеки.

**Альтернативы:** разместить в `apps/web/widgets` — отвергнуто, т.к. компоненты должны быть переиспользуемыми и документироваться в Storybook через `@repo/ui`.

### D2. Контракт состояния — Zod в `packages/ui/src/shared/contracts/`

**Решение:** вынести схемы и типы состояния в `packages/ui/src/shared/contracts/navigation.ts` (Spec) и экспортировать через barrel `@repo/ui`:

```ts
import { z } from 'zod';

export const ThemeSchema = z.enum(['light', 'dark', 'system']);
export const LanguageSchema = z.enum(['ru', 'en']);
export const ActiveSectionSchema = z.enum(['about', 'experience', 'projects', 'tech-stack', 'contact']);

export const NavigationStateSchema = z.object({
  theme: ThemeSchema,
  language: LanguageSchema,
  activeSection: ActiveSectionSchema,
  isSettingsOpen: z.boolean(),
});

export type Theme = z.infer<typeof ThemeSchema>;
export type Language = z.infer<typeof LanguageSchema>;
export type ActiveSection = z.infer<typeof ActiveSectionSchema>;
export type NavigationState = z.infer<typeof NavigationStateSchema>;
```

**Почему (контракт):** «parse, don't validate» — единый контракт исключает рассинхронизацию между BottomNavBar и VerticalDock, даёт исчерпывающие типы и проверяемые инварианты.

**Почему (расположение в `packages/ui`):** контракт описывает состояние UI-оболочки и должен жить рядом с её компонентами; оба навигационных компонента и `apps/web` импортируют его из `@repo/ui`, что исключает циклическую зависимость и дублирование схемы. `apps/web` не владеет этим контрактом, потому что он должен быть доступен и `apps/docs` (Storybook) без зависимости от `apps/web`.

**Альтернативы:** plain TS-типы без Zod — отвергнуто (нет рантайм-валидации); размещение в `apps/web/src/shared/` — отвергнуто (недоступно для `packages/ui` и Storybook без обратной зависимости).

### D3. Layout-контракт в `apps/web`

**Решение:** основной контент оборачивается адаптивным контейнером:
- десктоп (`md:` и выше): `max-w-[1200px] mx-auto pr-[100px]`;
- мобильный: контент под горизонтальным BottomNavBar с учётом `safe-area-inset-bottom`.

**Почему:** соответствует макетам Stitch — вертикальная капсула занимает правую зону (100px безопасный гуттер), мобильная нижняя капсула требует нижнего отступа под системные safe-зоны.

**Альтернативы:** margin-left/right вручную — отвергнуто (хрупко при адаптивности); только `max-w-[1200px]` без `pr-[100px]` — отвергнуто (контент перекрывается доком).

### D4. Общая шторка настроек

**Решение:** оба навигационных компонента вызывают один и тот же `SettingsBottomSheet` через кнопку Settings, а не дублируют логику настроек. Состояние шторки отражается в `isSettingsOpen` контракта.

**Почему:** единая точка кастомизации исключает расхождение поведения темы/языка между мобильной и десктопной версией.

**Альтернативы:** отдельные шторки для каждой версии — отвергнуто (дублирование состояния).

### D5. Единый список пунктов навигации

**Решение:** фиксируется единый упорядоченный список пунктов для обоих компонентов: About, Experience, Projects, Tech Stack, Contact, Settings (+ Back to Top только в VerticalDock). Этот список отображается на `ActiveSectionSchema` и является источником правды для генерации иконок/подписей.

**Почему:** устраняет расхождение набора пунктов между мобильной и десктопной версиями и жёстко привязывает навигацию к строгому enum активной секции.

**Альтернативы:** раздельные списки для мобильного/десктопа — отвергнуто (противоречит требованию «единый набор пунктов»).

## Risks / Trade-offs

- **[Риск] Разрыв между контрактом и фактическим HTML макетов Stitch** → Mitigation: макеты Stitch зафиксированы как источник правды UI (id закреплены в spec); компоненты генерируются строго на их основе, контракт состояния привязан к строгому enum списка секций.
- **[Риск] `pr-[100px]` конфликтует с центрированием контента** → Mitigation: применять `pr-[100px]` только на `md:` и выше; на мобильных использовать нижний safe-area вместо правого отступа.
- **[Риск] `activeSection` расходится с реальными id секций** → Mitigation: строгий enum из пяти значений; согласование якорей закрывается change `portfolio-sections-sync` (Skills → Tech Stack, Portfolio → Projects, добавление Experience), который приводит реальные `id` секций к `#about`, `#experience`, `#projects`, `#tech-stack`, `#contact`. Связь с якорями дополнительно проверяется контрактными тестами при имплементации.
- **[Риск] Material You / Android 17 стиль шторки не покрыт существующими токенами** → Mitigation: использовать существующие пастельные/поверхностные токены Ventura Mono + крупные скругления, не вводя новые токены без необходимости.
- **[Риск] `system`-тема выходит за текущий бинарный переключатель light/dark** → Mitigation: контракт расширяет `ThemeSchema` до трёх значений; семантика трёх режимов (light/dark/system), резолв `system` в класс `.dark` через `prefers-color-scheme` и сегментный переключатель закрываются change `theming-kinetic-system-mode`.

## Migration Plan

1. Добавить capability `navigation-shell` (этот change) — без изменения существующих спеков.
2. На этапе apply: добавить Zod в `packages/ui` → создать `navigation.ts` контракт → сгенерировать компоненты organisms → подключить layout в `apps/web` → Storybook-истории в `apps/docs`.
3. Rollback: удалить новые компоненты и контракт, откатить layout; существующие секции и якорная навигация не затрагиваются.

## Open Questions

<!-- Закрыто: персистентность темы и языка зафиксирована в смежных change'ах. -->

- ~~Конкретные localStorage-ключи для персистентности темы/языка~~ → закрыто: язык — `i18nextLng` (существующая спецификация `i18n`), тема — `theme` (change `theming-kinetic-system-mode`).
