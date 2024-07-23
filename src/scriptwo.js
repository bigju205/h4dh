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
    return arr[randomIndex];
  }

  function getMessage() {
    const firstSection = getRandomElement(groupOne);
    const secondSection = getRandomElement(groupTwo);
    let thirdSection;

    if (secondSection === "for") {
      thirdSection = getRandomElement(groupThree).toUpperCase();
    } else {
      thirdSection = getRandomElement(groupFour).toUpperCase();
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
    firstElement.classList.add("slide-out-to-bottom-48");
    secondElement.classList.add("animate-out");
    secondElement.classList.add("slide-out-to-bottom-48");
    thirdElement.classList.add("animate-out");
    thirdElement.classList.add("slide-out-to-bottom-48");

    setTimeout(() => {
      // Change text after animation out
      firstElement.textContent = firstSection;
      secondElement.textContent = secondSection;
      thirdElement.textContent = thirdSection;

      // Animate in
      firstElement.classList.remove("animate-out");
      firstElement.classList.add("animate-in");
      firstElement.classList.add("slide-in-from-top-80");
      secondElement.classList.remove("animate-out");
      secondElement.classList.add("animate-in");
      secondElement.classList.add("slide-in-from-top-80");
      thirdElement.classList.remove("animate-out");
      thirdElement.classList.add("animate-in");
      thirdElement.classList.add("slide-in-from-top-80");
    }, 1000); // Wait for the duration of the animation-out
  }

  setInterval(displayRandomMessage, 5000); // Change text every 3 seconds
});
