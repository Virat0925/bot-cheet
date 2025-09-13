# BotCheet

**BotCheet** is an AI-powered chatbot web application that allows users to interact with an intelligent assistant in real-time. It features threaded conversations, Markdown-formatted replies, and tool-calling capabilities, delivering fast, context-aware, and interactive AI responses. The app leverages **Groq** for high-speed inference and **Tavily** for real-time web access.

---

## Features

- Real-time AI chatbot with intelligent responses  
- Threaded conversations to maintain context  
- Markdown support for rich text formatting  
- Loading indicators while processing responses  
- Tool calling to interact with external APIs or services  
- Frontend-backend integration with CORS support  
- Easily deployable on platforms like Render  

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Generative AI:** Custom chatbot engine (`chatbot.js`)  
- **AI Acceleration:** Groq LPUs for fast inference  
- **Web Access:** Tavily for real-time information retrieval  
- **Security:** DOMPurify for safe HTML rendering  
- **Deployment:** Render
  

---

## Screenshots

### Chat Interface
![Chat Interface](https://github.com/Virat0925/bot-cheet/blob/main/assets/Screenshot%201.png?raw=true)

### Bot Reply Example
![Bot Reply](https://github.com/Virat0925/bot-cheet/blob/main/assets/Screenshot%202.png?raw=true)


## Getting Started

### Prerequisites

- Node.js >= 14  
- npm

### Installation

1. Clone the repository:
2. Install dependencies:
3. Add required environment variables (if any):
4. Running Locally

```bash
1. git clone https://github.com/Virat0925/bot-cheet.git
cd bot-cheet

2. npm install


3. GROQ_API_KEY = "YOUR_KEY_HERE" 
TAVILY_API_KEY = "YOUR_KEY_HERE"

4. node server.js
```

### Deployment

The app can be deployed on Render or any Node.js hosting service.

Ensure environment variables are configured in the hosting platform.

Use node server.js as the start command.

### Usage

Type a message in the chat interface.

The bot responds in real-time with AI-generated replies.

Supports Markdown formatting for rich text display.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

