/**
 * Mercedes S-Class Hub — Telegram Mini App
 * Инициализация Telegram WebApp и переходы в группы сообществ.
 */

(() => {
  'use strict';

  const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;

  /** Разворачивает Mini App на весь экран и подстраивает цвета под тёмную тему. */
  const initTelegram = () => {
    if (!tg) return;

    tg.ready();
    tg.expand();

    // Методы доступны не во всех версиях клиента — вызываем безопасно.
    safeCall(() => tg.setHeaderColor('#000000'));
    safeCall(() => tg.setBackgroundColor('#000000'));
    safeCall(() => tg.disableVerticalSwipes());
  };

  /** Открывает ссылку: внутри Telegram — нативно, иначе — обычным переходом. */
  const openLink = (url) => {
    if (tg && typeof tg.openTelegramLink === 'function') {
      tg.openTelegramLink(url);
      return;
    }
    window.location.href = url;
  };

  /** Лёгкая тактильная отдача при нажатии, если клиент её поддерживает. */
  const vibrate = () => {
    safeCall(() => tg.HapticFeedback.impactOccurred('light'));
  };

  /** Выполняет вызов, игнорируя неподдерживаемые в текущей версии API методы. */
  const safeCall = (fn) => {
    try {
      fn();
    } catch (_) {
      /* метод недоступен — работаем без него */
    }
  };

  /** Навешивает обработчики на кнопки переходов. */
  const initButtons = () => {
    document.querySelectorAll('[data-link]').forEach((button) => {
      button.addEventListener('click', () => {
        vibrate();
        openLink(button.dataset.link);
      });
    });
  };

  initTelegram();
  initButtons();
})();
