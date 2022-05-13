const textArea = document.getElementById("text");
const shuffleButton = document.getElementById("shuffleButton");

shuffleButton.addEventListener("click", shuffleText);

function shuffleText() {
    const text = textArea.value;
    const words = text.split(" ");

    const shuffledText = words
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .join(" ");
    
    textArea.value = shuffledText;
}