function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // Add user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = userMessage;
    chatBox.appendChild(userMessageDiv);

    // Clear input field
    userInput.value = '';

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate bot response after a short delay
    setTimeout(() => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot-message');
        botMessageDiv.textContent = 'Bot: ' + generateBotResponse(userMessage);
        chatBox.appendChild(botMessageDiv);
        
        // Scroll to the bottom of the chat
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function generateBotResponse(userMessage) {
    // Simple bot response logic
    const responses = [
        "Hello!",
        "How can I help you?",
        "That's interesting!",
        "Tell me more.",
        "Goodbye!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
