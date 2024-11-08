const storyData = {
    "untitledPassage": {
      text: "Welcome to the magical world of Maths Galaxy, where numbers float in the stars and shapes dance in the sky! In this adventure, you will meet Sandy, a friendly space man who loves maths. Sandy needs your help to solve fun maths problems so he can collect special star gems and save Maths Galaxy from the mischievous Number Nappers! Are you ready to join Sandy on his exciting journey? Let’s blast off!",
      image: "assets/images/Designer-removebg-preview.png",
      choices: { "Blast Off!": "blastOff" }
    },
    "3": {
      text: "Oh Dear! Sandy looks behind the space rocks but can't find the star gem. Maybe you should look again?",
      image: "assets/images/sadrock-removebg-preview.png",
      choices: { "Try Again": "continueYourJourney" }
    },
    "3Stars": {
      text: "Well Done! Sandy collects a star gem and moves on.",
      image: "assets/images/spaceman1-removebg-preview.png",
      choices: { "Continue Your Journey": "continueYourJourney" }
    },
    "3rocks": {
      text: "Oh Dear! Sandy looks behind the space rocks but can't find the star gem. Maybe you should look again?",
      image: "assets/images/sadrock-removebg-preview.png",
      choices: { "Look again": "continue" }
    },
    "3stars": {
      text: "Well Done! Sandy collects a star gem and moves on.",
      image: "assets/images/spaceman1-removebg-preview.png",
      choices: { "Countinue your Journey": "continue" }
    },
    "4": {
      text: "Oh dear! The stars giggle and say, 'That's not quite right. Try counting again!'",
      image: "assets/images/laughingstars-removebg-preview.png",
      choices: { "Count again": "continueFindingStars" }
    },
    "4Stars": {
      text: "Oh dear! The stars giggle and say, 'That's not quite right. Try counting again!'",
      image: "assets/images/laughingstars-removebg-preview.png",
      choices: { "Count again": "starryPath" }
    },
    "5": {
      text: "Well Done! Sandy looks behind the space rocks and collects another star gem.",
      image: "assets/images/spaceman1-removebg-preview.png",
      choices: { "Continue your Quest": "continueQuest" }
    },
    "5rocks": {
      text: "Well Done! Sandy looks behind the space rocks and collects another star gem.",
      image: "assets/images/spaceman1-removebg-preview.png",
      choices: { "Continue your Quest": "continueQuest1" }
    },
    "blastOff": {
      text: "Sandy is preparing his spaceship, the Maths Explorer, for a journey through Maths Galaxy. He needs to gather four special star gems to defeat the Number Nappers. Should Sandy take the Rainbow Route or the Starry Path?",
      image: "assets/images/Designer__21_-removebg-preview.png",
      choices: { "Rainbow Route": "rainbowRoute", "Starry Path": "starryPath" }
    },
    "circle": {
      text: "Well Done! Sandy crosses the bridge and collects another star gem.",
      image: "assets/images/spaceman1-removebg-preview.png",
      choices: { "Continue Finding Stars": "continueFindingStars" }
    },
    "continueQuest": {
      text: "Sandy encounters a friendly Shape Monster who asks him to help sort shapes. 'What shape am I holding?'",
      image: "assets/images/Designer__28_-removebg-preview-removebg-preview.png",
      choices: { "Triangle": "triangle1" , "Square": "square1" }
    },
    "continueQuest1": {
      text: "After collecting all four star gems, Sandy faces the Number Nappers who want to steal them! To defeat them, he must solve one last problem: 'What is 1 more than 4?'",
      image: "assets/images/spaceman4stars-removebg-preview.png",
      choices: { "5": "five", "4": "wrong" }
    },
    "continueFindingStars": {
      text: "Sandy meets a group of twinkling stars that need help with counting. 'If you have 2 stars and find 1 more, how many stars do you have?'",
      image: "assets/images/3_stars-removebg-preview.png",
      choices: { "3 Stars?": "3stars", "4 Stars?": "4" }
    },
    "continueYourJourney": {
      text: "Sandy encounters a collection of space rocks. Maybe there are stars hiding behind them? How many space rocks are there?",
      image: "assets/images/5rocks-removebg-preview.png",
      choices: { "5 Rocks?": "5", "3 rocks?": "3" }
    },
    "continueYourQuest": {
      text: "Sandy reaches the Colour Canyon. Oh no! The bridge is missing a piece. Which shape will fix the bridge so you can get across?",
      image: "assets/images/bridgehole-removebg-preview.png",
      choices: { "Circle": "circle", "Rectangle": "rectangle" }
    },
    "rainbowRoute": {
      text: "Sandy encounters a friendly Shape Monster who asks him to help sort shapes. 'What shape am I holding?'",
      image: "assets/images/Designer__28_-removebg-preview-removebg-preview.png",
      choices: { "Triangle": "triangle", "Square": "square" }
    },
    "rectangle": {
      text: "The bridge wobbles, and Sandy has to go back.",
      image: "assets/images/fallingrocks-removebg-preview (1).png",
      choices: { "Go Back": "continueYourQuest"}
    },
    "square": {
      text: "Oh Dear! The Shape Monster says, 'Hmmm. That's not quite right! This is a square! Try again!'",
      image: "assets/images/Designer__33_-removebg-preview.png",
      choices: { "Try again": "rainbowRoute" }
    },
    "square1": {
      text: "Oh Dear! The Shape Monster says, 'Hmmm. That's not quite right! This is a square! Try again!'",
      image: "assets/images/Designer__33_-removebg-preview.png",
      choices: { "Try again": "continueQuest" }
    },
    "starryPath": {
      text: "Sandy meets a group of twinkling stars that need help with counting. 'If you have 2 stars and find 1 more, how many stars do you have?'",
      image: "assets/images/3_stars-removebg-preview.png",
      choices: { "3 Stars?": "3Stars", "4 Stars?": "4Stars" }
    },
    "triangle": {
      text: "Well Done! Sandy collects a star gem and moves on.",
      image: "assets/images/spaceman1-removebg-preview.png",
      choices: { "Continue your Quest": "continueYourQuest" }
    },
    "triangle1": {
      text: "Well Done! Sandy collects a star gem and moves on.",
      image: "assets/images/spaceman1-removebg-preview.png",
      choices: { "Continue your Quest": "go" }
    },
    "continue": {
      text: "Sandy encounters a collection of space rocks. Maybe there are stars hiding behind them? How many space rocks are there?",
      image: "assets/images/5rocks-removebg-preview.png",
      choices: { "5 Rocks": "5rocks", "3 Rocks": "3rocks" }
    },
    "five": {
      text: "Congratulations! Sandy uses his gems to create a shield and saves Maths Galaxy!",
      image: "assets/images/Designer__27_-removebg-preview.png",
      choices: { "Play Again?": "untitledPassage"}
    },
    "go": {
      text: "Sandy reaches the Colour Canyon. Oh no! The bridge is missing a piece. Which shape will fix the bridge so you can get across?",
      image: "assets/images/bridgehole-removebg-preview.png",
      choices: { "Circle?": "round", "Rectangle": "rectangle1" }
    },
    "rectangle1": {
      text: "The bridge wobbles, and Sandy has to go back.",
      image: "assets/images/fallingrocks-removebg-preview (1).png",
      choices: { "Go Back": "go" }
    },
    "round": {
      text: "Well Done! Sandy crosses the bridge and collects another star gem.",
      image: "assets/images/spaceman1-removebg-preview.png",
      choices: { "Continue Your Quest": "continueQuest1" }
    },
    "wrong": {
      text: "The Number Nappers laugh and say, 'Try again!'",
      image: "assets/images/Designer__32_-removebg-preview.png",
      choices: { "Try Again": "continueQuest1" }
    },
    
  };
  
  let currentScene = "untitledPassage";
const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

function updateStory(scene) {
    const sceneData = storyData[scene];
    currentScene = scene;

    // Clear previous content
    storyElement.innerHTML = ""; 
    choicesElement.innerHTML = "";

    // Display the scene image, if provided
    if (sceneData.image) {
        const img = document.createElement("img");
        img.src = sceneData.image;
        img.alt = "Scene Image";
        img.style.width = "50%"; // Adjust width if needed
        img.style.display = "block";
        img.style.margin = "0 auto 16px";
        img.style.marginTop = "100px"
        storyElement.appendChild(img);
    }

    // Display the main scene text
    const textElement = document.createElement("p");
    textElement.innerText = sceneData.text;
    storyElement.appendChild(textElement);

    // Create choice buttons
    for (const [choiceText, nextScene] of Object.entries(sceneData.choices)) {
        const choiceData = typeof nextScene === "string" ? { nextScene } : nextScene;
        
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.innerText = choiceText;
        button.onclick = () => changeScene(choiceData.nextScene);

        // Display image on the button, if defined
        if (choiceData.image) {
            const choiceImg = document.createElement("img");
            choiceImg.src = choiceData.image;
            choiceImg.alt = "Choice Image";
            choiceImg.style.width = "30px"; // Adjust size if needed
            choiceImg.style.marginRight = "8px";
            button.prepend(choiceImg);
        }

        choicesElement.appendChild(button);
    }
}

function changeScene(scene) {
    updateStory(scene);
}

updateStory(currentScene);