window.QUIZ_BATTLE_CONFIG = Object.freeze({
  categories: [
    "Current Affairs",
    "Geography",
    "Technology",
    "History",
    "Maths",
    "Gaming",
    "Sports",
    "Physics/Space",
    "Movies/TV",
    "Travel/LifeStyle",
    "Music",
    "Social Media",
    "Politics",
    "Literature/Art",
    "Biology"

  ],
  cardLabelsByCategory: {
    "Current Affairs": ["Beacon of Hope!","Who am I?","Achievements Unlocked","United We Fall!","Project Hail Mary","Warning Danger Ahead!"],
    "Geography": ["Falling Rocks","Back to School","TriColor","Geeeooode","Capital Punishment","Clickbait!"],
    "Technology": ["The Binary System","Trust Me Not","Enigma","Shaktiman","EXE File","Jajantram Mamantram"],
    "History": ["Do Bhai Dono Tabahi","Satyamev Jayate","Back to the Future","March Madness","Tropical Retreat","Eye of the Tiger"],
    "Maths": ["Aahat!","Nafa_Nuksaan","The Fourier Transform","Dhoom Dhadaka","Complex Vortex","A 360 Turn"],
    "Gaming": ["Level Up!","Boss Fight","Speed Racer","Donkey Kong","Pixels","Glitch in the Matrix"],
    "Sports": ["Lagaan","Chak De!","GoliMaar","Total Recall","Mahi Ve","The Test"],
    "Physics/Space": ["Laws of Motion","The Equilibrium","A Space Odyssey","Gravity","A Long Time Ago!","Hiroshima and Nagasaki"],
    "Movies/TV": ["The Godfather","Breaking Bad","Inception","Game of Thrones","The Dark Knight","Stranger Things"],
    "Travel/LifeStyle": ["LUXE","Phatela Jeb Sil Jayega","Jet2Holidays","Bhraman","The Bermuda Triangle","Foodgasm!"],
    "Music": ["Coke Studio","Unplugged","Indian Idol","Rap God","Secret Superstar","Americas Latent"],
    "Social Media": ["Whats the Meme?","Zat Pat Fatafat","Viral Vichaar","Hashtag Hostage","Ultras","Boomer Ghoomar"],
    "Politics": ["Pechaan Kaun?","Bol Bachchan","Kya Aap Jaante Hain?","Aalochana","Apna Time Aayega","Control Uday!"],
    "Literature/Art": ["The Martian","Lisan-Al-Gaib","A Thousand Cuts","And Then There Were None","The Heist","Abstract Attack"],
    "Biology": ["Dil Se","Tar Wale Fefde","Genelia D'Souza","Makhi","Mockingbird","The Bone Collector"]
  },
  // Maps each card label to the ordered list of file extensions to search for.
  // First extension listed is tried first; falls back through the rest.
  extensionsByLabel: {
    "Current Affairs": {
      "Beacon of Hope!": [".txt"],
      "Who am I?":        [".jpg", ".jpeg", ".png"],
      "Achievements Unlocked": [".md"],
      "United We Fall!":  [".txt"],
      "Project Hail Mary": [".jpg", ".jpeg", ".png"],
      "Warning Danger Ahead!": [".md"]
    },
    "Politics": {
      "Pechaan Kaun?":      [".jpg", ".jpeg", ".png", ".avif"],
      "Bol Bachchan":       [".mp3", ".mp4", ".wav", ".webm"],
      "Kya Aap Jaante Hain?": [".txt"],
      "Aalochana":          [".jpg", ".jpeg", ".png", ".avif"],
      "Apna Time Aayega":   [".mp3", ".mp4", ".wav", ".webm"],
      "Control Uday!":      [".txt"]
    },
    "Geography": {
      "Falling Rocks": [".jpg", ".jpeg", ".png", ".avif"],
      "Back to School": [".mp3", ".mp4", ".wav", ".webm"],
      "TriColor": [".txt"],
      "Geeeooode": [".jpg", ".jpeg", ".png", ".avif"],
      "Capital Punishment": [".md"],
      "Clickbait!": [".jpg", ".jpeg", ".png", ".avif"]
    },
    "Gaming": {
      "Level Up!": [".jpg", ".jpeg", ".png", ".avif", ".webp"],
      "Boss Fight": [".txt"],
      "Speed Racer": [".md"],
      "Donkey Kong": [".mp3", ".mp4", ".wav", ".webm"],
      "Pixels": [".mp3", ".mp4", ".wav", ".webm"],
      "Glitch in the Matrix": [".jpg", ".jpeg", ".png", ".avif"]
    },
    "History": {
      "Do Bhai Dono Tabahi": [".jpg", ".jpeg", ".png", ".avif"],
      "Satyamev Jayate": [".mp3", ".mp4", ".wav", ".webm"],
      "Back to the Future": [".md"],
      "March Madness": [".md"],
      "Tropical Retreat": [".jpg", ".jpeg", ".png", ".avif"],
      "Eye of the Tiger": [".txt"]
    },
    "Literature/Art": {
      "The Martian": [".jpg", ".jpeg", ".png", ".avif"],
      "Lisan-Al-Gaib": [".txt"],
      "A Thousand Cuts": [".jpg", ".jpeg", ".png", ".avif"],
      "And Then There Were None": [".md"],
      "The Heist": [".jpg", ".jpeg", ".png", ".avif"],
      "Abstract Attack": [".mp3", ".mp4", ".wav", ".webm"]
    },
    "Maths": {
      "Aahat!": [".jpg", ".jpeg", ".png", ".avif"],
      "Nafa_Nuksaan": [".txt"],
      "The Fourier Transform": [".md"],
      "Dhoom Dhadaka": [".jpg", ".jpeg", ".png", ".avif"],
      "Complex Vortex": [".txt"],
      "A 360 Turn": [".md"]
    },
    "Travel/LifeStyle": {
      "LUXE": [".jpg", ".jpeg", ".png", ".avif"],
      "Phatela Jeb Sil Jayega": [".txt"],
      "Jet2Holidays": [".mp3", ".mp4", ".wav", ".webm"],
      "Bhraman": [".md"],
      "The Bermuda Triangle": [".jpg", ".jpeg", ".png", ".avif"],
      "Foodgasm!": [".txt"]
    },
    "Biology": {
      "Dil Se": [".txt"],
      "Tar Wale Fefde": [".txt"],
      "Genelia D'Souza": [".md"],
      "Makhi": [".jpg", ".jpeg", ".png", ".avif"],
      "Mockingbird": [".mp3", ".mp4", ".wav", ".webm"],
      "The Bone Collector": [".jpg", ".jpeg", ".png", ".avif"]
    },
    "Technology": {
      "The Binary System": [".jpg", ".jpeg", ".png", ".avif"],
      "Trust Me Not": [".txt"],
      "Enigma": [".md"],
      "Shaktiman": [".txt"],
      "EXE File": [".mp3", ".mp4", ".wav", ".webm"],
      "Jajantram Mamantram": [".jpg", ".jpeg", ".png", ".avif"]
    },
    "Social Media": {
      "Whats the Meme?": [".jpg", ".jpeg", ".png", ".avif"],
      "Zat Pat Fatafat": [".mp3", ".mp4", ".wav", ".webm"],
      "Viral Vichaar": [".txt"],
      "Hashtag Hostage": [".md"],
      "Ultras": [".jpg", ".jpeg", ".png", ".avif"],
      "Boomer Ghoomar": [".jpg", ".jpeg", ".png", ".avif"]
    },
    "Physics/Space": {
      "Laws of Motion": [".txt"],
      "The Equilibrium": [".jpg", ".jpeg", ".png", ".avif"],
      "A Space Odyssey": [".mp3", ".mp4", ".wav", ".webm"],
      "Gravity": [".txt"],
      "A Long Time Ago!": [".md"],
      "Hiroshima and Nagasaki": [".jpg", ".jpeg", ".png", ".avif"]
    },
    "Sports": {
      "Lagaan": [".txt"],
      "Chak De!": [".jpg", ".jpeg", ".png", ".avif"],
      "GoliMaar": [".jpg", ".jpeg", ".png", ".avif"],
      "Total Recall": [".md"],
      "Mahi Ve": [".jpg", ".jpeg", ".png", ".avif"],
      "The Test": [".mp3", ".mp4", ".wav", ".webm"]
    },
    "Movies/TV": {
      "The Godfather": [".txt"],
      "Breaking Bad": [".jpg", ".jpeg", ".png", ".avif"],
      "Inception": [".mp3", ".mp4", ".wav", ".webm"],
      "Game of Thrones": [".md"],
      "The Dark Knight": [".jpg", ".jpeg", ".png", ".avif"],
      "Stranger Things": [".mp3", ".mp4", ".wav", ".webm"]
    },
    "Music": {
      "Coke Studio": [".mp3", ".mp4", ".wav", ".webm"],
      "Unplugged": [".mp3", ".mp4", ".wav", ".webm"],
      "Indian Idol": [".mp3", ".mp4", ".wav", ".webm"],
      "Rap God": [".mp3", ".mp4", ".wav", ".webm"],
      "Secret Superstar": [".mp3", ".mp4", ".wav", ".webm"],
      "Americas Latent": [".mp3", ".mp4", ".wav", ".webm"]
    }
  },

  // Maps each file extension to the display format used in the question container.
  extensionFormat: {
    ".txt":  "article",
    ".md":   "markdown",
    ".jpg":  "img",  ".jpeg": "img",  ".png":  "img", ".avif": "img",
    ".gif":  "img",  ".webp": "img",
    ".mp3":  "audio", ".wav":  "audio", ".ogg":  "audio", ".m4a": "audio",
    ".mp4":  "video", ".webm": "video", ".ogv":  "video"
  },

  // Maps each round label to a short description shown below the Round pill on play.html.
  // Omit a label to show no description for that round.
  roundDescriptionByLabel: {
    "Politics": {
      "Pechaan Kaun?":        "Name the political figure from the blurred image.",
      "Bol Bachchan":         "Name the politician from the audio clip.",
      "Kya Aap Jaante Hain?": "Read the headline — answer who said this.",
      "Aalochana":            "Who is criticising? Identify from the image.",
      "Apna Time Aayega":     "Name the MAGA Activist assassinated in 2024.",
      "Control Uday!":        "Read the headline — answer who said this."
    },
    "Current Affairs": {
      "Beacon of Hope!":      "Identify the embassy from the blurred image.",
      "Who am I?":            "Give the expanded form of the ABBREVIATION.",
      "Achievements Unlocked":"Based on the clues — identify the country?",
      "United We Fall!":      "Name five states of the below Council.",
      "Project Hail Mary":    "Name the Global Organization from the image.",
      "Warning Danger Ahead!": "Name the Animal causing this recently."
    },
    "Geography": {
      "Falling Rocks": "Name the famous landmark from the blurred image.",
      "Back to School": "Identify the school from the video.",
      "TriColor": "Name three countries with below colors in their flags.",
      "Geeeooode": "Name the rock type pokemon from the image.",
      "Capital Punishment": "Name the neighboring capital city of the below",
      "Clickbait!": "Name the monument from the image."
    },
    "Gaming": {
      "Level Up!": "Identify the device from the blurred image.",
      "Boss Fight": "Answer the question about the final boss.",
      "Speed Racer": "Complete the below list of Indian Outdoor games.",
      "Donkey Kong": "Name the game from the sound",
      "Pixels": "Name the game from the video clip.",
      "Glitch in the Matrix": "In below game how many cards do you turn from the stockpile?"
    },
    "History": {
      "Do Bhai Dono Tabahi": "Name the historical figures from the blurred image.",
      "Satyamev Jayate": "Name the speech quoting these words.",
      "Back to the Future": "Name the historical prince who was assassinated.",
      "March Madness": "Name the historical event from the blurred image.",
      "Tropical Retreat": "Name the historical place from the image.",
      "Eye of the Tiger": "Name the historical figure."
    },
    "Literature/Art": {
      "The Martian": "Name this beloved comicbook character from Justice League.",
      "Lisan-Al-Gaib": "Name the character from the book.",
      "A Thousand Cuts": "Death of Julius Caesar: How many stab wounds did he receive?",
      "And Then There Were None": "Name the detective in the famous Agatha Christie novels.",
      "The Heist": "Name the famous painter tributed by this mask.",
      "Abstract Attack": "Identify the artist from the sound."
    },
    "Maths": {
      "Aahat!": "Name the mathematical constant that forms this image.",
      "Nafa_Nuksaan": "Identify the mathematician from the text.",
      "The Fourier Transform": "Complete the remaining shapes.",
      "Dhoom Dhadaka": "Name of the mathematical function represented by the below graph.",
      "Complex Vortex": "Find the value of the expression.",
      "A 360 Turn": "Solve the problem below."
    },
    "Travel/LifeStyle": {
      "LUXE": "Identify the lifestyle brand from the blurred image.",
      "Phatela Jeb Sil Jayega": "Name the brand from the text clue.",
      "Jet2Holidays": "Name the Airlines from the video.",
      "Bhraman": "Identify the travel destination from clues.",
      "The Bermuda Triangle": "Name the three cities of the Golden Triangle in India.",
      "Foodgasm!": "Identify the dish from the description."
    },
    "Biology": {
      "Dil Se": "Answer the question based on the text clue.",
      "Tar Wale Fefde": "Name the gas from the text clue.",
      "Genelia D'Souza": "Identify the treatment for the disease.",
      "Makhi": "Name the insect from the image.",
      "Mockingbird": "Identify the bird from the sound.",
      "The Bone Collector": "Name the bone that is needed to prepare this dish."
    },
    "Technology": {
      "The Binary System": "Name the product from the blurred image.",
      "Trust Me Not": "Name five different companies that develop this technology.",
      "Enigma": "Solve the puzzle to reveal the answer.",
      "Shaktiman": "Identify the infamous inventor for this quote.",
      "EXE File": "Identify the Company from the audio clip.",
      "Jajantram Mamantram": "Identify the software based on the clue."
    },
    "Social Media": {
      "Whats the Meme?": "Name the artist of the original meme from the image.",
      "Zat Pat Fatafat": "Name the influencer from the clue.",
      "Viral Vichaar": "Identify the fullform of the popular internet slang.",
      "Hashtag Hostage": "Identify the hashtag from the clue.",
      "Ultras": "Identify the social media app from the image.",
      "Boomer Ghoomar": "Name the social slang from the clue." 
    },
    "Physics/Space": {
      "Laws of Motion": "Answer the question from the text.",
      "The Equilibrium": "Identify the physical concept from the blurred image.",
      "A Space Odyssey": "Guess the time period for the comet in the video to return.",
      "Gravity": "Answer the question from the text.",
      "A Long Time Ago!": "Identify the person that challenged the following statements.",
      "Hiroshima and Nagasaki": "Identify the scientists from the image."
    },
    "Sports": {
      "Lagaan": "Which team lost the below tournament?",
      "Chak De!": "Name the sportsperson from the image.",
      "GoliMaar": "Which medal did this person win in Olympics?",
      "Total Recall": "Identify the team from the clue.",
      "Mahi Ve": "Name the sports played by the sportsperson.",
      "The Test": "Name the sportsperson from the video."
    },
    "Movies/TV": {
      "The Godfather": "Identify the character that said this.",
      "Breaking Bad": "Name the TV Show.",
      "Inception": "Identify the movie from the interview.",
      "Game of Thrones": "Name the movie based on the plot.",
      "The Dark Knight": "Identify the movie from the image.",
      "Stranger Things": "Name the TV show from the video clip."
    },
    "Music": {
      "Coke Studio": "Identify the singer from the audio clip.",
      "Unplugged": "Name the song from the lyrics.",
      "Indian Idol": "Name the singer from the audio.",
      "Rap God": "Identify the song from the audio clip.",
      "Secret Superstar": "Name the show from the audio clip.",
      "Americas Latent": "Identify the song from the audio clip."  
    }
  }
});