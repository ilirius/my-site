## 1. Валидация спецификаций

- [ ] 1.1 Проверить все spec-файлы на соответствие формату через `openspec validate --change "project-specification"`
- [ ] 1.2 Проверить, что все capability из proposal покрыты spec-файлами (project-overview, tech-stack, architecture, pages-and-routing, i18n, theming, migration-plan)

## 2. Синхронизация с основными спеками

- [ ] 2.1 Выполнить `openspec sync` для переноса delta spec в `openspec/specs/`
- [ ] 2.2 Проверить, что все 7 capability появились в `openspec/specs/`

## 3. Обновление config.yaml

- [ ] 3.1 Заполнить `context` в `openspec/config.yaml` — техстек, архитектура, конвенции из созданных спецификаций

## 4. Архивация change

- [ ] 4.1 Перенести change в архив через `openspec archive --change "project-specification"`
