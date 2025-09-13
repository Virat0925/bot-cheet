const input = document.querySelector("#input");
const chatContainer = document.querySelector("#chat-container");
const askBtn = document.querySelector("#ask");

const threadId = Date.now().toString(36) + Math.random().toString(36).substring(2, 8)

input.addEventListener("keyup", handleEnter);
askBtn.addEventListener("click", handleAsk);

function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Convert simple markdown to HTML
function markdownToHTML(text) {
  // Bold (**text** → <b>text</b>)
    let html = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // Lists (- item → <li>item</li>)
  html = html.replace(/(?:^|\n)- (.*?)(?=\n|$)/g, "<li>$1</li>");
  if (html.includes("<li>")) {
    html = "<ul>" + html + "</ul>";
  }

  // New lines → <br>
  if (!html.includes("<ul>")) {
    html = html.replace(/\n/g, "<br>");
  }

  return html;
}

const loading = document.createElement('div')
loading.className = 'animate-pulse'
loading.innerText = 'Thinking...'

async function generate(text) {
  // User bubble
  const msg = document.createElement("div");
  msg.className =
    "my-3 bg-neutral-800 text-white p-3 rounded-xl ml-auto max-w-xs whitespace-pre-wrap";
  msg.textContent = text;
  chatContainer.appendChild(msg);
    input.value = "";
    scrollToBottom(); 
    
    chatContainer.appendChild(loading)
  

  // Assistant reply
  const assistantMessage = await callServer(text);

  const assistantMsgElem = document.createElement("div");
  assistantMsgElem.className =
    "my-3 text-white whitespace-pre-wrap";

  // Markdown → HTML → Sanitize
  const safeHTML = DOMPurify.sanitize(markdownToHTML(assistantMessage));
    assistantMsgElem.innerHTML = safeHTML;
    loading.remove()
    chatContainer.appendChild(assistantMsgElem);
    
    scrollToBottom(); 
}

async function callServer(inputText) {
  const response = await fetch("/chat", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ threadId: threadId, message: inputText }),
  });


  if (!response.ok) {
    throw new Error("Error generating the response, Please try again!");
  }

  const result = await response.json();
  return result.message;
}

async function handleAsk() {
  const text = input.value.trim();
  if (!text) return;
  await generate(text);
}

async function handleEnter(e) {
  if (e.key === "Enter") {
    const text = input.value.trim();
    if (!text) return;
    await generate(text);
  }
}
