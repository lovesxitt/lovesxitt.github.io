const petalsContainer =
    document.getElementById("petals");

const numberOfPetals = 18;

for (let i = 0; i < numberOfPetals; i++) {
    const petal =
        document.createElement("span");

    petal.classList.add("petal");

    const position =
        Math.random() * 100;

    const duration =
        8 + Math.random() * 9;

    const delay =
        Math.random() * -15;

    const scale =
        0.6 + Math.random() * 0.8;

    petal.style.left = `${position}%`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.transform = `scale(${scale})`;

    petalsContainer.appendChild(petal);
}
