document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  if (!input || !output) return;

  const commands = {
    help: () => 'доступные команды: whoami, skills, contact, clear, date, ls',
    whoami: () => 'Степан, 12 лет, начинающий разработчик',
    skills: () => 'C++, JavaScript, Python, ddos',
    contact: () => 'telegram: @stepan | github: stepan',
    date: () => new Date().toLocaleString('ru-RU'),
    ls: () => 'about.txt  skills.txt  contact.txt  projects/',
    clear: () => {
      output.innerHTML = '';
      return null;
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;

    const cmd = input.value.trim().toLowerCase();
    input.value = '';

    if (!cmd) return;

    const p = document.createElement('p');
    p.innerHTML = `<span class="highlight">$</span> ${escapeHtml(cmd)}`;
    output.appendChild(p);

    const result = commands[cmd];
    const resP = document.createElement('p');

    if (result) {
      const res = result();
      if (res !== null) {
        resP.textContent = res;
        output.appendChild(resP);
      }
    } else {
      resP.textContent = `команда не найдена: ${cmd}`;
      resP.className = 'error';
      output.appendChild(resP);
    }

    output.scrollTop = output.scrollHeight;
  });
});
