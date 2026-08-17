## 1. Контракт состояния (typed-service-contracts)

- [x] 1.1 Добавить `zod` в `dependencies` пакета `packages/ui`
- [x] 1.2 Создать `packages/ui/src/shared/contracts/navigation.ts` с Zod-схемами `ThemeSchema`, `LanguageSchema`, `ActiveSectionSchema`, `NavigationStateSchema`
- [x] 1.3 Вывести TypeScript-типы из схем (`z.infer`) и зафиксировать строгий список секций (about, experience, projects, tech-stack, contact)
- [x] 1.4 Экспортировать контракт через barrel `packages/ui/src/index.ts` (`@repo/ui`)
- [x] 1.5 Написать контрактные тесты (валидные/невалидные значения: theme=system, активная секция вне списка, isSettingsOpen)

## 2. Компоненты навигации в packages/ui

- [x] 2.1 Сгенерировать `packages/ui/src/organisms/BottomNavBar.tsx` на основе мобильного макета «Mobile Portfolio - Floating Glass Nav & Pulse Effect»
- [x] 2.2 Сгенерировать `packages/ui/src/organisms/VerticalDock.tsx` на основе десктопного макета «Kinetic Portfolio - Glass Capsule Dock & Integrated Motion»
- [x] 2.3 Реализовать пульсирующий индикатор активного пункта и залитые иконки в обоих компонентах
- [x] 2.4 Реализовать тултипы (для VerticalDock) и Back to Top (только десктоп)
- [x] 2.5 Сгенерировать общую `packages/ui/src/organisms/SettingsBottomSheet.tsx` в стиле Android 17 / Material You (крупные скругления, пастельные тона, сегментный переключатель темы, чипы RU/EN)
- [x] 2.6 Связать кнопку настроек в BottomNavBar и VerticalDock с открытием общего SettingsBottomSheet через `isSettingsOpen`

## 3. Layout-контракт в apps/web

- [x] 3.1 Обернуть основной контент в адаптивный контейнер: десктоп `max-w-[1200px] mx-auto pr-[100px]`
- [x] 3.2 Добавить мобильную адаптацию контента под BottomNavBar с учётом safe-area-inset-bottom
- [x] 3.3 Подключить BottomNavBar (мобильный) и VerticalDock (десктоп) на главную страницу с корректным брейкпоинтом md:
- [x] 3.4 Связать `activeSection` со скроллом и подсветкой активного пункта навигации

## 4. Storybook (apps/docs)

- [x] 4.1 Создать истории BottomNavBar.stories.tsx
- [x] 4.2 Создать истории VerticalDock.stories.tsx
- [x] 4.3 Создать истории SettingsBottomSheet.stories.tsx
- [x] 4.4 Покрыть состояния темы (light/dark/system), языка (ru/en) и открытой/закрытой шторки

## 5. Проверка и интеграция

- [x] 5.1 Прогнать `pnpm check-types` и `pnpm lint`
- [x] 5.2 Прогнать `pnpm website:build` для проверки SSG
- [x] 5.3 Ручная проверка: переключение темы/языка, активная секция, открытие шторки на мобильном и десктопном макетах
- [x] 5.4 Обновить i18n-переводы (RU/EN) для новых пунктов меню и шторки настроек
