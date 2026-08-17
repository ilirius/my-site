## Why

Действующая спецификация `theming` описывает две темы (light/dark) с манифестом Stitch «Silicon Desktop»: тёмный фон `#131313`, accent `#0a84ff` (Ventura Mono), переключатель macOS-toggle на два состояния.

Утверждённые макеты Google Stitch «Kinetic Portfolio System» и change `stitch-navigation-mapping-contract` зафиксировали иное: трёхрежимная тема (light/dark/system), сегментный переключатель в шторке настроек и визуальный язык Kinetic (тёмный фон `#0b1326`, акцент teal `#5eead4`, крупные скругления, стекло). Кроме того, контракт состояния `NavigationStateSchema` определяет `theme` как `'light' | 'dark' | 'system'`, что шире текущей бинарной модели.

Это расхождение блокирует реализацию навигационной оболочки и шторки настроек: без обновления `theming` переключатель не сможет выразить третий режим `system`, а цвета не будут соответствовать утверждённым макетам.

## What Changes

Обновление спецификации темизации под Kinetic Portfolio System и трёхрежимную модель:

- **Три режима темы** вместо двух: `light`, `dark`, `system` (dark — по умолчанию).
- **Обновление токенов**: тёмный фон `#0b1326` (вместо `#131313`), акцент teal `#5eead4` (вместо `#0a84ff`), светлая поверхность `#f8fafc`.
- **Сегментный переключатель** (Light/Dark/System) вместо macOS-toggle (два состояния).
- **Резолв режима `system`**: через `window.matchMedia('(prefers-color-scheme: dark)')` с подпиской на изменение системной темы.
- **Персистентность выбранной темы**: localStorage-ключ `theme`.

Механизм переключения через CSS-класс `.dark` на `html` и селекторы `.dark`/`color-scheme` сохраняются.

## Capabilities

### New Capabilities

<!-- Отсутствуют — новых capability не вводится. -->

### Modified Capabilities

- `theming`: переход на трёхрежимную тему (light/dark/system), токены Kinetic Portfolio System, сегментный переключатель, резолв `system`, персистентность.
- `project-overview`: расширение требования «Светлая и тёмная темы» до «Светлая, тёмная и системная темы».

## Impact

- **Код `apps/web`:** переключатель темы заменяется на сегментный (3 состояния); добавляется логика резолва `system` через `matchMedia` и сохранение выбора в `localStorage` (`theme`).
- **`packages/ui`:** компонент переключателя переводится с macOS-toggle на сегментный контроль в `@repo/ui`.
- **Связанный change `stitch-navigation-mapping-contract`:** `theme` в контракте `NavigationStateSchema` (`light|dark|system`) становится согласованным с `theming`.
- **Без изменения:** CSS-класс `.dark`, селекторы `.dark`/`color-scheme`, default dark.
