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
            iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');

            codeSpace.appendChild(iframe);

            iframe.srcdoc = codeContent;
        }
    });
}, 2000);
