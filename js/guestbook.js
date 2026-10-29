document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guest-form');
  const messagesList = document.getElementById('messages-list');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('guest-name');
    const msgInput = document.getElementById('guest-message');
    
    const name = nameInput.value.trim() || 'аноним';
    const message = msgInput.value.trim();
    
    if (!message) return;

    const dateStr = formatDate(new Date());

    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg';
    msgDiv.innerHTML = `
      <span class="msg-author">${escapeHtml(name)}</span> 
      <span class="msg-date">${dateStr}</span>
      <p>${escapeHtml(message)}</p>
    `;

    messagesList.prepend(msgDiv);

    nameInput.value = '';
    msgInput.value = '';
  });
});
