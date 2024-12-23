const storyData = {
    // Fantasy Genre
    fantasyStart: {
      title: "The Enchanted Kingdom",
      text: "You are a young adventurer in a magical kingdom. Do you visit the bustling market or explore the forbidden forest?",
      choices: [
        { text: "Go to the market", next: "fantasyMarket" },
        { text: "Enter the forest", next: "fantasyForest" },
      ],
    },
    fantasyMarket: {
      title: "The Mysterious Merchant",
      text: "At the market, you meet a merchant offering a magical amulet. Do you buy it or ignore him?",
      choices: [
        { text: "Buy the amulet", next: "fantasyAmulet" },
        { text: "Ignore the merchant", next: "fantasyIgnore" },
      ],
    },
    fantasyForest: {
      title: "The Whispering Trees",
      text: "The forest seems alive, whispering your name. You find a glowing sword in a clearing. Do you take it?",
      choices: [
        { text: "Take the sword", next: "fantasySword" },
        { text: "Leave it alone", next: "fantasyLeave" },
      ],
    },
    fantasyAmulet: {
      title: "Amulet of Power",
      text: "The amulet grants you incredible strength. You become a hero in the kingdom.",
      choices: [
        { text: "Restart the adventure", next: "fantasyStart" },
      ],
    },
    fantasyIgnore: {
      title: "Missed Opportunity",
      text: "You leave the market empty-handed. The kingdom’s fate changes without your intervention.",
      choices: [
        { text: "Restart the adventure", next: "fantasyStart" },
      ],
    },
    fantasySword: {
      title: "The Cursed Sword",
      text: "The sword is cursed, binding you to protect the forest forever.",
      choices: [
        { text: "Restart the adventure", next: "fantasyStart" },
      ],
    },
    fantasyLeave: {
      title: "The Safer Path",
      text: "You walk away from the sword, leaving the forest unchanged.",
      choices: [
        { text: "Restart the adventure", next: "fantasyStart" },
      ],
    },
  
    // Mystery Genre
    mysteryStart: {
      title: "The Haunted Manor",
      text: "You are a detective investigating a haunted manor. Do you inspect the library or the basement?",
      choices: [
        { text: "Inspect the library", next: "mysteryLibrary" },
        { text: "Go to the basement", next: "mysteryBasement" },
      ],
    },
    mysteryLibrary: {
      title: "The Hidden Diary",
      text: "You find a diary revealing secrets about the manor’s past. Do you confront the owner or keep reading?",
      choices: [
        { text: "Confront the owner", next: "mysteryConfront" },
        { text: "Keep reading", next: "mysteryRead" },
      ],
    },
    mysteryBasement: {
      title: "The Locked Door",
      text: "In the basement, you find a locked door. Do you pick the lock or look for the key?",
      choices: [
        { text: "Pick the lock", next: "mysteryLock" },
        { text: "Look for the key", next: "mysteryKey" },
      ],
    },
    mysteryConfront: {
      title: "The Truth Revealed",
      text: "The owner confesses to hiding a family secret, solving the mystery.",
      choices: [
        { text: "Restart the adventure", next: "mysteryStart" },
      ],
    },
    mysteryRead: {
      title: "Ghostly Encounter",
      text: "A ghost appears, thanking you for uncovering their story.",
      choices: [
        { text: "Restart the adventure", next: "mysteryStart" },
      ],
    },
    mysteryLock: {
      title: "Behind the Door",
      text: "You find a treasure hidden behind the locked door.",
      choices: [
        { text: "Restart the adventure", next: "mysteryStart" },
      ],
    },
    mysteryKey: {
      title: "An Unexpected Discovery",
      text: "While searching for the key, you discover a hidden passage.",
      choices: [
        { text: "Restart the adventure", next: "mysteryStart" },
      ],
    },
  
    // Science Fiction Genre
    sciFiStart: {
      title: "The Galactic Mission",
      text: "You are a space explorer. Do you investigate an abandoned spaceship or a strange alien planet?",
      choices: [
        { text: "Explore the spaceship", next: "sciFiSpaceship" },
        { text: "Visit the alien planet", next: "sciFiPlanet" },
      ],
    },
    sciFiSpaceship: {
      title: "The Derelict Ship",
      text: "The spaceship contains strange artifacts. Do you take a mysterious device or leave it?",
      choices: [
        { text: "Take the device", next: "sciFiDevice" },
        { text: "Leave it", next: "sciFiLeave" },
      ],
    },
    sciFiPlanet: {
      title: "The Alien City",
      text: "The planet hosts an advanced alien civilization. Do you make contact or observe from afar?",
      choices: [
        { text: "Make contact", next: "sciFiContact" },
        { text: "Observe from afar", next: "sciFiObserve" },
      ],
    },
    sciFiDevice: {
      title: "Technological Marvel",
      text: "The device enhances your ship, allowing intergalactic travel.",
      choices: [
        { text: "Restart the adventure", next: "sciFiStart" },
      ],
    },
    sciFiLeave: {
      title: "Lost Opportunity",
      text: "You leave the spaceship, never uncovering its secrets.",
      choices: [
        { text: "Restart the adventure", next: "sciFiStart" },
      ],
    },
    sciFiContact: {
      title: "A New Alliance",
      text: "The aliens welcome you, forming a new alliance.",
      choices: [
        { text: "Restart the adventure", next: "sciFiStart" },
      ],
    },
    sciFiObserve: {
      title: "Hidden Knowledge",
      text: "You observe the aliens and learn about their technology.",
      choices: [
        { text: "Restart the adventure", next: "sciFiStart" },
      ],
    },
  };
  
  function choose(next) {
    const scene = storyData[next];
    document.getElementById("title").innerText = scene.title;
    document.getElementById("story").innerText = scene.text;
  
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    scene.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerText = choice.text;
      button.onclick = () => choose(choice.next);
      choicesDiv.appendChild(button);
    });
  }
  
  // Initialize story
  choose("start");
  