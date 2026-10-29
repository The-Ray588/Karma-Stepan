document.addEventListener('DOMContentLoaded', () => {
  function updateClock() {
    const clockEl = document.querySelector('.live-clock');
    if (!clockEl) return;
    
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    
    const timezoneOffset = -now.getTimezoneOffset() / 60;
    const tzStr = timezoneOffset >= 0 ? `utc+${timezoneOffset}` : `utc${timezoneOffset}`;
    
    clockEl.textContent = `${h}:${m} ${tzStr}`;
    
    const sleepEl = document.getElementById('sleep-status');
    if (sleepEl) {
      const hours = now.getHours();
      if (hours >= 0 && hours < 6) {
        sleepEl.textContent = 'сплю';
      } else if (hours >= 6 && hours < 10) {
        sleepEl.textContent = 'просыпаюсь';
      } else {
        sleepEl.textContent = 'не сплю';
      }
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
});
