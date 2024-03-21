// const PROMPT = `Act like a web developer, I will give you a website description and you will give me the html code. If you want to add css or javascript, put them in a <style> or <script> tag. Give the code in full. Here is the description: "`;


// function writePrompt(prompt) {
//     const chatInput = document.getElementById("prompt-textarea");
//     const sendButton = document.getElementsByClassName("absolute bottom-1.5 right-2 rounded-lg border border-black bg-black p-0.5 text-white transition-colors enabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3")[0];
    
//     chatInput.value = prompt;
// }

// const footerDiv = document.getElementsByClassName("w-full pt-2 md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]")[0];
// const genWebsiteButton = document.createElement("button")
// genWebsiteButton.onclick = () => {
//     let prompt = window.prompt("Website description :")
//     writePrompt(PROMPT + prompt)
// }
// genWebsiteButton.innerText = "Generate Website"


// footerDiv.appendChild(genWebsiteButton)


setInterval(() => {
    document.querySelectorAll(".language-html").forEach(codeSpace => {
        const existingIframe = codeSpace.querySelector("iframe");

        if (!codeSpace.lastChild.tagName || (codeSpace.lastChild.tagName && codeSpace.lastChild.tagName.toLowerCase() !== "iframe")) {
            if (existingIframe) {
                existingIframe.remove();
            }
        }

        if(!existingIframe) {
            const codeContent = codeSpace.innerText;
            const iframe = document.createElement('iframe');

            codeSpace.parentElement.style.padding = "0";
            iframe.style.width = "100%";
            iframe.style.height = "60vh";

            codeSpace.appendChild(iframe);

            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(codeContent);
            iframe.contentWindow.document.close();
        }
    });
}, 2000);
