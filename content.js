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
