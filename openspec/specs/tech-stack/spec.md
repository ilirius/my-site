# tech-stack Specification

## Purpose

Фиксирует полный перечень технологий, библиотек, инструментов сборки и окружения, используемых в проекте Pixel & Code.

## Requirements

### Requirement: Монорепо на Turborepo

Проект SHALL быть организован как монорепо с использованием Turborepo и pnpm workspaces.

#### Scenario: Задача сборки из корня

- **WHEN** разработчик запускает `pnpm build` из корня репозитория
- **THEN** Turborepo запускает `build` во всех workspace-пакетах с учётом зависимостей

### Requirement: Next.js 16 с SSG (SPA)

Приложение портфолио SHALL быть построено на Next.js 16 как SPA с единственной статически генерируемой страницей `/`. Разделы собираются как секции внутри страницы, навигация — по якорям с плавным скроллом. Подстраницы для проектов портфолио могут быть добавлены в будущем.

#### Scenario: Продакшн-сборка

- **WHEN** выполняется `next build` в apps/web
- **THEN** генерируется статический HTML главной страницы со всеми секциями

### Requirement: React 19 и TypeScript 5

Интерфейс SHALL быть написан на React 19 с использованием TypeScript 5 в строгом режиме (strict: true).

#### Scenario: Проверка типов

- **WHEN** разработчик запускает `tsc --noEmit`
- **THEN** все файлы проходят проверку типов без ошибок

### Requirement: SCSS и CSS Modules

Стилизация SHALL осуществляться через SCSS (глобальные стили) и CSS Modules (компонентные стили).

#### Scenario: Импорт стилей в компоненте

- **WHEN** компонент импортирует `.module.css` или `.scss` файл
- **THEN** стили применяются изолированно (CSS Modules) или глобально (SCSS)

### Requirement: i18next для интернационализации

Интернационализация SHALL быть реализована на библиотеках `i18next`, `react-i18next`, `i18next-http-backend`, `i18next-browser-languagedetector`.

#### Scenario: Загрузка переводов

- **WHEN** приложение инициализируется
- **THEN** переводы загружаются из `public/locales/{lang}/translation.json`

### Requirement: Линтинг и форматирование

Проект SHALL использовать ESLint 9, Prettier и cspell для орфографии.

#### Scenario: Проверка линтинга

- **WHEN** разработчик запускает `pnpm lint`
- **THEN** ESLint проверяет код, выводятся предупреждения или ошибки при несоответствии правилам

### Requirement: Окружение и пакетный менеджер

Проект SHALL использовать Node.js >= 18 и pnpm 11 как пакетный менеджер.

#### Scenario: Установка зависимостей

- **WHEN** разработчик запускает `pnpm install` из корня
- **THEN** зависимости устанавливаются для всех workspace-пакетов согласно `pnpm-workspace.yaml`

### Requirement: Отдельные скрипты запуска для web и docs

Проект SHALL предоставлять отдельные корневые скрипты для запуска и сборки приложений: `website:dev` (`turbo run dev --filter=web`), `website:build` (`turbo run build --filter=web`), `docs:dev` (`turbo run dev --filter=docs`), `docs:build` (`turbo run build --filter=docs`).

#### Scenario: Запуск dev-сервера только для web

- **WHEN** разработчик запускает `pnpm website:dev` из корня
- **THEN** Turborepo через `--filter=web` запускает `next dev --port 3000` только в `apps/web`

#### Scenario: Production-сборка только web

- **WHEN** разработчик запускает `pnpm website:build` из корня
- **THEN** Turborepo через `--filter=web` запускает `next build` только в `apps/web`

#### Scenario: Запуск dev-сервера только для docs

- **WHEN** разработчик запускает `pnpm docs:dev` из корня
- **THEN** Turborepo через `--filter=docs` запускает Storybook dev-сервер на порту 6006 в `apps/docs`

#### Scenario: Production-сборка только docs

- **WHEN** разработчик запускает `pnpm docs:build` из корня
- **THEN** Turborepo через `--filter=docs` запускает `storybook build` в `apps/docs`, генерируя статический билд в `storybook-static/`

### Requirement: Storybook для документирования компонентов

Проект SHALL использовать Storybook с `@storybook/nextjs` в apps/docs для документирования и разработки компонентов `@repo/ui`. Приложение docs НЕ использует Next.js как рантайм — все скрипты `dev` и `build` отдают Storybook.

#### Scenario: Запуск Storybook

- **WHEN** разработчик запускает `pnpm docs:dev` из корня (или `pnpm dev` в apps/docs)
- **THEN** Storybook dev-сервер стартует на порту 6006 с документацией компонентов

#### Scenario: Production-сборка Storybook

- **WHEN** разработчик запускает `pnpm docs:build` из корня (или `pnpm build` в apps/docs)
- **THEN** генерируется статический билд Storybook в `storybook-static/`

### Requirement: Целевые платформы и окружение

Проект SHALL собираться с целевыми версиями браузеров, заданными в `browserslist` корневого `package.json`. Проект SHALL обеспечивать автоматическую проверку совместимости API через ESLint и ручной чек-лист перед слиянием PR.

#### Scenario: Конфигурация browserslist

- **WHEN** сборщик (Next.js / PostCSS / SWC) обрабатывает код для production
- **THEN** код транспилируется под целевые браузеры согласно запросу: `>0.2%, not dead, not op_mini all`
- **AND** для development-сборки используются `last 1 chrome version, last 1 firefox version, last 1 safari version`

#### Scenario: Минимальные версии браузеров

- **WHEN** код собирается для production
- **THEN** минимальные поддерживаемые версии (интерпретация `>0.2%, not dead` на 2026): Chrome 100+, Firefox 100+, Safari 15.4+ (где доступны современные спецификации CSS и JS)

#### Scenario: Требования React 19

- **WHEN** React 19 используется как runtime
- **THEN** среда исполнения SHALL поддерживать современный HTML-валидатор (React 19 отказывается от поддержки Internet Explorer и старого Edge)

#### Scenario: Автоматическая проверка API-совместимости

- **WHEN** разработчик запускает `pnpm lint` (ESLint)
- **THEN** плагин `eslint-plugin-compat` в `@repo/eslint-config` проверяет JS-API на соответствие browserslist и генерирует ошибку при обнаружении API, недоступного в целевых браузерах

#### Scenario: Ручной чек-лист перед PR

- **WHEN** разработчик готовит PR в основную ветку
- **THEN** разработчик SHALL проверить SSG-страницы Next.js минимум в двух браузерных движках: Chromium (Chrome/Edge) и WebKit (Safari)
- **AND** все функциональные сценарии (навигация, темы, i18n-переключение) должны отрабатывать без ошибок в обоих окружениях

### Requirement: Мониторинг Web Vitals

Приложение `apps/web` SHALL собирать метрики Core Web Vitals (CLS, FCP, INP, LCP, TTFB) на клиенте через `useReportWebVitals` из `next/web-vitals`. В production метрики SHALL отправляться через `navigator.sendBeacon` на эндпоинт `/api/vitals`.

#### Scenario: Сбор метрик в development

- **WHEN** приложение запущено в dev-режиме
- **THEN** метрики Web Vitals выводятся в консоль браузера

#### Scenario: Отправка метрик в production

- **WHEN** страница загружена в production-режиме
- **THEN** каждая метрика отправляется через `sendBeacon` на `/api/vitals` в формате JSON

#### Scenario: Проверка типов

- **WHEN** разработчик запускает `pnpm check-types`
- **THEN** `WebVitals.tsx` проходит проверку без ошибок
