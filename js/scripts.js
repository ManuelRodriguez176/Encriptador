document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    document.getElementById('encryptButton').addEventListener('click', encryptText);
    document.getElementById('decryptButton').addEventListener('click', decryptText);
    document.getElementById('copyButton').addEventListener('click', copyToClipboard);

    inputText.addEventListener('input', enforceLowercase);

    adjustTextareaHeight(inputText);

    function encryptText() {
        let input = inputText.value;
        let encrypted = input.replace(/e/g, "enter")
                             .replace(/i/g, "imes")
                             .replace(/a/g, "ai")
                             .replace(/o/g, "ober")
                             .replace(/u/g, "ufat");
        outputText.value = encrypted;
    }

    function decryptText() {
        let input = inputText.value;
        let decrypted = input.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/aiimes/g,"ai")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
        outputText.value = decrypted;
    }

    function copyToClipboard() {
        outputText.select();
        outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
        document.execCommand('copy');
    }

    function enforceLowercase(event) {
        let value = event.target.value;
        event.target.value = value.replace(/[^a-z\s?!¡¿]/g, ''); // Filtra caracteres no permitidos excepto espacios
    }

    function adjustTextareaHeight(textarea) {
        textarea.style.height = 'auto'; // Resetea la altura para recalcular
        textarea.style.height = (textarea.scrollHeight) + 'px'; // Ajusta la altura al contenido
    }
});


