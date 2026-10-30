```markdown
<div align="center">

# karma.tg

**Персональный сайт-визитка в стиле хакерского терминала**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/ru/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/ru/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/ru/docs/Web/JavaScript)
[![Canvas](https://img.shields.io/badge/Canvas_API-000000?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/ru/docs/Web/API/Canvas_API)
[![No Dependencies](https://img.shields.io/badge/dependencies-0-50fa7b?style=flat-square)](#)
[![License](https://img.shields.io/badge/license-MIT-a78bfa?style=flat-square)](LICENSE)

[![karma](https://fame.tg/buttons/karma.gif)](https://fame.tg)

<a href="https://fame.tg"><img src="https://fame.tg/buttons/karma.gif" width="88" height="31" alt="karma"></a>

**Разработано:** [TheRayDev](https://github.com/TheRayDev)

</div>

---

## 📖 Оглавление

- [О проекте](#-о-проекте)
- [Возможности](#-возможности)
- [Технологии](#-технологии)
- [Структура проекта](#-структура-проекта)
- [Быстрый старт](#-быстрый-старт)
- [Команды терминала](#-команды-терминала)
- [Виджеты и кнопки](#-виджеты-и-кнопки)
- [Кастомизация](#-кастомизация)
- [Деплой](#-деплой)
- [Известные ограничения](#-известные-ограничения)
- [Roadmap](#-roadmap)
- [Авторы](#-авторы)
- [Лицензия](#-лицензия)

---

## 🚀 О проекте

**karma.tg** — это минималистичный сайт-визитка, вдохновлённый эстетикой старых терминалов, хакерских консолей и ретро-интерфейсов. Здесь нет тяжёлых фреймворков и библиотек — только чистый HTML, CSS и JavaScript.

Сайт создан для того, чтобы рассказать о себе коротко и стильно: кто ты, что умеешь, чем занимаешься и как с тобой связаться.

**Главные принципы:**

- ⚡ **Скорость** — ноль зависимостей, мгновенная загрузка
- 🎨 **Стиль** — тёмная тема, фиолетовые акценты, ASCII-арт
- 🧠 **Простота** — ванильный JS, легко разобраться и переделать
- 📱 **Адаптивность** — нормально выглядит на телефоне

---

## ✨ Возможности

| Функция | Описание |
|---|---|
| 🌌 **Звёздный фон** | Мерцающие звёзды на `<canvas>` |
| 🟣 **Матричный дождь** | Полупрозрачные символы катаканы на фоне |
| 🖥️ **Сканлайны** | Эффект старого монитора поверх всего сайта |
| 📑 **Вкладки без перезагрузки** | Навигация через `#about`, `#guestbook` и т.д. |
| ⏰ **Живые часы** | Реальное время с часовым поясом |
| 😴 **Статус сна** | Меняется автоматически по времени суток |
| 🎵 **Сейчас слушаю** | Случайный трек из плейлиста при загрузке |
| 💻 **Интерактивный терминал** | Команды `help`, `whoami`, `skills` и другие |
| 📝 **Гостевая книга** | Форма для сообщений (без сохранения после перезагрузки) |
| 🌐 **Переключение языка** | RU / EN прямо на сайте |
| 💀 **Глитч-эффект** | На имени при наведении курсора |
| 🖱️ **Кастомный курсор** | Фиолетовая стрелка в стиле терминала |
| 🔊 **Звук клика** | Лёгкий щелчок при нажатии на кнопки |
| 📜 **Кастомный скроллбар** | Тонкая фиолетовая полоса |

---

## 🛠 Технологии

- **HTML5** — семантическая разметка
- **CSS3** — Flexbox, Grid, анимации, `backdrop-filter`, кастомный курсор
- **Vanilla JavaScript** — без фреймворков и библиотек
- **Canvas API** — фон со звёздами и матрица
- **JetBrains Mono** — моноширинный шрифт через Google Fonts

---

## 📁 Структура проекта

```text
site/
├── index.html
├── README.md
├── LICENSE
├── favicon.ico
├── css/
│   ├── style.css
│   ├── scanlines.css
│   ├── tabs.css
│   ├── forms.css
│   ├── responsive.css
│   ├── cursor.css
│   ├── glitch.css
│   └── animations.css
├── js/
│   ├── utils.js
│   ├── stars.js
│   ├── tabs.js
│   ├── clock.js
│   ├── music.js
│   ├── guestbook.js
│   ├── lang.js
│   ├── cursor.js
│   ├── glitch.js
│   ├── terminal.js
│   └── matrix.js
└── assets/
    ├── sounds/
    │   └── click.mp3
    └── fonts/
        └── JetBrainsMono.woff2
```

---

⚡ Быстрый старт

Вариант 1 — VS Code + Live Server

1. Установи расширение Live Server.
2. Открой папку site/ в VS Code.
3. Правой кнопкой по index.html → Open with Live Server.

Вариант 2 — Python

```bash
cd site
python -m http.server 8000
```

Открой: http://localhost:8000

Вариант 3 — Node.js

```bash
cd site
npx serve
```

Вариант 4 — просто открыть файл

Двойной клик по index.html. Работает, но некоторые браузеры блокируют загрузку шрифтов и звуков через file://.

---

💻 Команды терминала

Терминал доступен во вкладке «обо мне». Введи команду и нажми Enter.

Команда Что делает
help Показывает список всех команд
whoami Рассказывает, кто ты
skills Показывает навыки
contact Контакты для связи
date Текущая дата и время
ls Список файлов в «директории»
clear Очищает экран терминала

Чтобы добавить свою команду, открой js/terminal.js и добавь запись в объект commands.

---

🧩 Виджеты и кнопки

В README (и на самом сайте) можно использовать кнопку-виджет:

```html
<a href="https://fame.tg"><img src="https://fame.tg/buttons/karma.gif" width="88" height="31" alt="karma"></a>
```

Она отображается так:

<a href="https://fame.tg"><img src="https://fame.tg/buttons/karma.gif" width="88" height="31" alt="karma"></a>

Параметры:

· href — ссылка, куда ведёт кнопка
· src — путь к GIF-изображению
· width="88" и height="31" — стандартный размер веб-кнопки (88×31 пикселей)
· alt="karma" — альтернативный текст, если картинка не загрузится

Такую кнопку можно вставить:

· в README.md на GitHub
· на свой сайт в блок «ссылки»
· в подпись на форуме или в Telegram-канале

---

🎨 Кастомизация

Текст «обо мне»

Открой index.html, найди <section id="about"> и измени текст в первом <p>.

Список треков

Открой js/music.js, измени массив tracks:

```javascript
const tracks = [
  'Sace, DJ Pointless — cold air',
  'Твой трек — название',
  'Ещё один трек'
];
```

Команды терминала

Открой js/terminal.js, добавь команду:

```javascript
commands.mycommand = () => 'ответ на мою команду';
```

Цвета

Все основные цвета — в css/style.css:

Переменная Значение Где используется
Фон #09090b body
Акцент #a78bfa ссылки, кнопки, заголовки
Текст #d4d4d8 основной текст
Приглушённый #666 подписи, даты

ASCII-арт

Открой index.html, найди <pre id="ascii-output"> и замени содержимое. Важно сохранить отступы — иначе арт «поплывёт».

---

🌍 Деплой

GitHub Pages

1. Создай репозиторий на GitHub.
2. Загрузи все файлы.
3. Перейди в Settings → Pages.
4. Выбери ветку main и папку /root.
5. Сохрани. Сайт будет доступен по адресу https://username.github.io/repo/.

Netlify

1. Зайди на https://app.netlify.com/drop
2. Перетащи папку site/ в окно браузера.
3. Получи ссылку.

Vercel

1. Зайди на https://vercel.com
2. Подключи GitHub-репозиторий.
3. Нажми Deploy.

Свой домен

1. Купи домен на reg.ru или namecheap.
2. В настройках DNS добавь A-запись или CNAME, который даёт хостинг.
3. Подожди 10–30 минут.

---

⚠️ Известные ограничения

· Гостевая книга не сохраняет сообщения после перезагрузки страницы — нужен бэкенд.
· GitHub-график нарисован вручную, а не подтягивается через API.
· Звук клика не работает, если файла assets/sounds/click.mp3 нет.
· Матрица и звёзды нагружают CPU на слабых устройствах — можно отключить, удалив <script src="js/matrix.js"> из index.html.
· Кастомный курсор не работает на мобильных устройствах (там его нет).
· Глитч-эффект работает только при наведении — на тач-экранах его не видно.

---

🗺 Roadmap

☑ Тёмная тема и фиолетовый акцент
☑ Переключение вкладок без перезагрузки
☑ Живые часы и статус сна
☑ Интерактивный терминал
☑ Гостевая книга (локально)
☑ Переключение RU / EN
☑ Звёздный фон и матрица
☐ Бэкенд для гостевой книги (Firebase или Python)
☐ Реальная интеграция с GitHub API
☐ Светлая тема (по кнопке)
☐ Страница 404
☐ Open Graph для красивых превью в Telegram
☐ PWA (установка на телефон как приложение)

---

👨‍💻 Авторы

Разработчик сайта: TheRayDev

· GitHub: @TheRayDev
· Проект: karma.tg

Сайт создан как персональная визитка в стиле хакерского терминала.

---

📄 Лицензия

Проект распространяется под лицензией MIT. Делай что хочешь: используй, копируй, меняй, продавай. Единственное условие — сохрани упоминание авторства.

Подробнее — в файле LICENSE.

---

<div align="center">

Сделано с 🖤 и фиолетовым цветом #a78bfa

Разработано TheRayDev

<a href="https://fame.tg"><img src="https://fame.tg/buttons/karma.gif" width="88" height="31" alt="karma"></a>

</div>
```

---

LICENSE (если ещё нет)

```text
MIT License

Copyright (c) 2026 TheRayDev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
