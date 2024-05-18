document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputParagraph = document.getElementById('output-paragraph');

    inputText.addEventListener('input', () => {
        const text = inputText.value;
        const highlightedText = highlightLongWords(text);
        outputParagraph.innerHTML = highlightedText;
    });

    function highlightLongWords(text) {
        return text.split(/\b/).map(word => {
            if (word.length > 8) {
                return `<span class="highlight">${word}</span>`;
            }
            return word;
        }).join('');
    }
});
