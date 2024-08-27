document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const copyButton = document.getElementById('copyButton');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    const encrypt = (text) => {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    const decrypt = (text) => {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    encryptButton.addEventListener('click', () => {
        const text = inputText.value;
        outputText.value = encrypt(text);
    });

    decryptButton.addEventListener('click', () => {
        const text = inputText.value;
        outputText.value = decrypt(text);
    });

    copyButton.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
    });
});
