## 1. Секции страницы

- [x] 1.1 Переименовать секцию Skills в Tech Stack: `id="skills"` → `id="tech-stack"`, обновить заголовок
- [x] 1.2 Переименовать секцию Portfolio в Projects: `id="portfolio"` → `id="projects"`, обновить заголовок
- [x] 1.3 Добавить секцию Experience с `id="experience"`
- [x] 1.4 Упорядочить секции: Hero, About, Experience, Projects, Tech Stack, Contact

## 2. Навигационное меню Hero

- [x] 2.1 Обновить пункты меню Hero: About, Experience, Projects, Tech Stack, Contact
- [x] 2.2 Обновить href якорей в пунктах меню (`#experience`, `#projects`, `#tech-stack`)
- [x] 2.3 Убедиться, что плавный скролл и обновление URL (History API) работают с новыми якорями

## 3. Локализация

- [x] 3.1 Обновить/добавить переводы заголовков секций (Experience, Projects, Tech Stack) в `public/locales/ru/translation.json`
- [x] 3.2 Обновить/добавить переводы заголовков секций в `public/locales/en/translation.json`
- [x] 3.3 Обновить переводы пунктов навигационного меню Hero

## 4. Проверка

- [x] 4.1 Прогнать `pnpm check-types` и `pnpm lint`
- [x] 4.2 Прогнать `pnpm website:build` (SSG) и убедиться, что секции и якоря собираются
- [x] 4.3 Ручная проверка навигации по якорям `#experience`, `#projects`, `#tech-stack`
