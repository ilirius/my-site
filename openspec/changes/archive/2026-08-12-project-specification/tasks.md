## 1. Валидация спецификаций

- [x] 1.1 Проверить все spec-файлы на соответствие формату через `openspec validate --change "project-specification"`
- [x] 1.2 Проверить, что все capability из proposal покрыты spec-файлами (project-overview, tech-stack, architecture, pages-and-routing, i18n, theming, migration-plan)

## 2. Синхронизация с основными спеками

- [x] 2.1 Выполнить `openspec sync` для переноса delta spec в `openspec/specs/`
- [x] 2.2 Проверить, что все 7 capability появились в `openspec/specs/`

## 3. Обновление config.yaml

- [x] 3.1 Заполнить `context` в `openspec/config.yaml` — техстек, архитектура, конвенции из созданных спецификаций

## 4. Архивация change

- [x] 4.1 Перенести change в архив через `openspec archive --change "project-specification"`
