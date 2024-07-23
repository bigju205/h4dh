document.addEventListener("DOMContentLoaded", () => {
  const groupOne = ["HOPE", "LOVE"];
  const groupTwo = ["for", "for the"];
  const groupThree = ["You", "me", "us", "them", "all"];
  const groupFour = [
    "hood",
    "sinners",
    "broken",
    "lost",
    "hopeless",
    "misunderstood",
    "hurt",
    "traumatized",
    "world",
    "disabled",
    "forgotten",
    "wicked",
    "redeemed",
  ];

  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].toUpperCase();
  }

  function getMessage() {
    const firstSection = getRandomElement(groupOne);
    const secondSection = getRandomElement(groupTwo);
    let thirdSection;

    if (secondSection === "for") {
      thirdSection = getRandomElement(groupThree);
    } else {
      thirdSection = getRandomElement(groupFour);
    }

    return { firstSection, secondSection, thirdSection };
  }

  function displayRandomMessage() {
    const { firstSection, secondSection, thirdSection } = getMessage();
    const firstElement = document.getElementById("first");
    const secondElement = document.getElementById("second");
    const thirdElement = document.getElementById("third");

    // Animate out
    firstElement.classList.add("animate-out");
    secondElement.classList.add("animate-out");
    thirdElement.classList.add("animate-out");

    setTimeout(() => {
      // Change text after animation out
      firstElement.textContent = firstSection;
      secondElement.textContent = secondSection;
      thirdElement.textContent = thirdSection;

      // Animate in
      firstElement.classList.remove("animate-out");
      firstElement.classList.add("animate-in");
      secondElement.classList.remove("animate-out");
      secondElement.classList.add("animate-in");
      thirdElement.classList.remove("animate-out");
      thirdElement.classList.add("animate-in");
    }, 1000); // Wait for the duration of the animation-out
  }

  setInterval(() => {
    const firstElement = document.getElementById("first");
    firstElement.classList.add("animate-out");
    setTimeout(() => {
      firstElement.textContent = getRandomElement(groupOne);
      firstElement.classList.remove("animate-out");
      firstElement.classList.add("animate-in");
    }, 1000);
  }, 10000); // Change text every 10 seconds for groupOne

  setInterval(() => {
    const secondElement = document.getElementById("second");
    secondElement.classList.add("animate-out");
    setTimeout(() => {
      secondElement.textContent = getRandomElement(groupTwo);
      secondElement.classList.remove("animate-out");
      secondElement.classList.add("animate-in");
    }, 1000);
  }, 5000); // Change text every 5 seconds for groupTwo

  setInterval(() => {
    const thirdElement = document.getElementById("third");
    thirdElement.classList.add("animate-out");
    setTimeout(() => {
      thirdElement.textContent = getRandomElement(groupThree);
      thirdElement.classList.remove("animate-out");
      thirdElement.classList.add("animate-in");
    }, 1000);
  }, 5500); // Change text every 5.5 seconds for groupThree
});
