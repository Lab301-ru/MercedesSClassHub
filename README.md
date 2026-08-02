# Mercedes S-Class Hub

Telegram Mini App для бота [@MercedesSClassHub_bot](https://t.me/MercedesSClassHub_bot).

Экран выбора поколения S-Class с переходом в соответствующее сообщество:

- **W223** → https://t.me/mercedesw223chats
- **W224** → https://t.me/mercedesw224chats

## Стек

Чистый HTML5 + CSS3 + JavaScript (ES6). Без React, Vite, сборки и зависимостей —
единственный внешний ресурс это официальный скрипт `telegram-web-app.js`.

```
index.html   разметка
style.css    премиальная тёмная тема, стеклянные карточки, анимации
script.js    инициализация Telegram WebApp и переходы по ссылкам
```

## Поведение

- При запуске вызываются `Telegram.WebApp.ready()` и `Telegram.WebApp.expand()`.
- Переход в группу — через `Telegram.WebApp.openTelegramLink()`.
- Вне Telegram (обычный браузер) используется `window.location.href`.
- Вёрстка адаптивная и помещается на один экран без прокрутки.

## Деплой на GitHub Pages

1. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
2. Ветка — `main`, папка — `/ (root)`.
3. Сохранить и дождаться публикации.

Полученный адрес (`https://<username>.github.io/<repo>/`) указать в
[@BotFather](https://t.me/BotFather): `/mybots → Bot Settings → Menu Button → URL`.

Файл `.nojekyll` в корне отключает обработку Jekyll — статика отдаётся как есть.
