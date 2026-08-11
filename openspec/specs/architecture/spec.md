# architecture Specification

## Purpose

Определяет архитектурную организацию проекта: структуру монорепо, слой FSD внутри apps/web и методологию Atomic Design в @repo/ui.

## Requirements

### Requirement: Структура монорепо

Проект SHALL быть организован в монорепо со следующей структурой верхнего уровня:

```
pixel-and-code/
├── apps/
│   ├── web/          — SPA на Next.js (одна страница с якорями, подстраницы проектов в будущем)
│   └── docs/         — Storybook (документирование компонентов @repo/ui)
├── packages/
│   ├── ui/           — переиспользуемые UI-компоненты (Atomic Design)
│   ├── eslint-config/ — общие ESLint-конфигурации
│   └── typescript-config/ — общие TypeScript-конфигурации
├── src/              — наследие CRA, референс для миграции
├── public/           — статические ресурсы и переводы
└── openspec/         — спецификации проекта
```

#### Scenario: Сборка через Turborepo

- **WHEN** запускается `turbo build`
- **THEN** пакеты собираются в порядке зависимости: typescript-config → ui → apps/web, apps/docs

### Requirement: Feature-Sliced Design в apps/web

Приложение в apps/web SHALL следовать методологии Feature-Sliced Design (FSD) со следующими слоями (сверху вниз):

- **app** — инициализация, провайдеры, роутинг Next.js App Router (минимальный)
- **pages** — композиция секций для главной страницы (в будущем: подстраницы проектов портфолио)
- **widgets** — самостоятельные блоки интерфейса (секции, шапка, подвал)
- **features** — фичи с пользовательской ценностью (переключение темы, смена языка)
- **entities** — бизнес-сущности (проект портфолио, навык)
- **shared** — переиспользуемые утилиты, типы, API, конфигурация

#### Scenario: Импорт между слоями

- **WHEN** модуль на слое импортирует модуль с нижележащего слоя
- **THEN** импорт разрешается — соблюдается правило «слой может импортировать только нижележащие слои»

#### Scenario: Вложенный импорт запрещён

- **WHEN** модуль на слое shared пытается импортировать модуль из entities
- **THEN** линтер сообщает об ошибке — импорт с верхнего слоя запрещён

### Requirement: Atomic Design в @repo/ui

Пакет @repo/ui SHALL следовать методологии Atomic Design с разделением на уровни:

- **atoms** — базовые элементы (Button, Input, Icon, Text)
- **molecules** — простые композиции (LabelBox, TagItem, ThemeChanger)
- **organisms** — сложные блоки (Header, ProjectCard, SkillCloud)

#### Scenario: Импорт UI-компонента

- **WHEN** компонент в apps/web импортирует `@repo/ui/button.tsx`
- **THEN** используется атомарный компонент Button из пакета @repo/ui

### Requirement: SCSS и CSS Modules для стилей

Стили SHALL храниться рядом с компонентами (colocation) в форматах SCSS и CSS Modules. Глобальные стили — в `src/styles/`.

#### Scenario: Стили компонента

- **WHEN** компонент находится в `shared/ui/`
- **THEN** его стили лежат в том же каталоге, что и компонент
