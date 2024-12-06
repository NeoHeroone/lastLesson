let userName = "Anonymous";

document.getElementById('send-msg-btn').addEventListener('click', sendChatMessage);
document.getElementById('update-name-btn').addEventListener('click', updateUserName);

function sendChatMessage() {
  const messageField = document.getElementById('msg-input');
  const userMessage = messageField.value.trim();

  if (userMessage) {
    const chatContainer = document.querySelector('.chat-container');
    const messageElement = document.createElement('div');
    const currentTime = getFormattedTime();

    messageElement.classList.add('chat-message');
    messageElement.innerHTML = `
      <strong>${userName}:</strong> ${userMessage}
      <span style="font-size: 12px; color: #777;">(${currentTime})</span>
    `;

    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    messageField.value = '';
  }
}

function updateUserName() {
  const newUserName = prompt("Enter your name:", userName);
  if (newUserName && newUserName.trim()) {
    userName = newUserName.trim();
    document.getElementById('current-username').textContent = `Current User: ${userName}`;
  }
}

function getFormattedTime() {
  const currentDate = new Date();
  return currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}