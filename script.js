// EduQuest — Full grade-specific subjects & 5 questions each

// quizzes[grade][subject] = array of 5 { q, options[], answerIndex }
const quizzes = {
  // Grades 1–3: grammar, maths, gk
  1: {
    grammar: [
      { q: "Pick the noun: The cat sleeps.", options: ["cat", "sleeps", "the", "on"], answer: 0 },
      { q: "Choose the verb: The boy runs fast.", options: ["boy", "fast", "runs", "the"], answer: 2 },
      { q: "Which is a vowel?", options: ["b", "a", "t", "z"], answer: 1 },
      { q: "Plural of 'dog' is?", options: ["doges", "dogs", "dog", "dogss"], answer: 1 },
      { q: "Opposite of 'hot'?", options: ["cold", "warm", "boil", "fire"], answer: 0 }
    ],
    maths: [
      { q: "2 + 3 = ?", options: ["4", "5", "6", "7"], answer: 1 },
      { q: "5 – 2 = ?", options: ["2", "3", "4", "1"], answer: 1 },
      { q: "10 ÷ 2 = ?", options: ["2", "5", "10", "20"], answer: 1 },
      { q: "What comes after 7?", options: ["6", "8", "9", "10"], answer: 1 },
      { q: "4 × 2 = ?", options: ["6", "8", "4", "2"], answer: 1 }
    ],
    gk: [
      { q: "National animal of India?", options: ["Tiger", "Lion", "Elephant", "Leopard"], answer: 0 },
      { q: "Color of the sky?", options: ["Green", "Blue", "Red", "Yellow"], answer: 1 },
      { q: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: 0 },
      { q: "Which is a fruit?", options: ["Carrot", "Potato", "Apple", "Cabbage"], answer: 2 },
      { q: "Which is the biggest planet?", options: ["Earth", "Jupiter", "Mars", "Venus"], answer: 1 }
    ]
  },

  2: {
    grammar: [
      { q: "Choose the correct pronoun: ___ is my friend.", options: ["He", "Run", "Blue", "Happy"], answer: 0 },
      { q: "Past of 'go' is?", options: ["goed", "went", "goes", "gone"], answer: 1 },
      { q: "Which is an adjective?", options: ["quick", "run", "boy", "table"], answer: 0 },
      { q: "Plural of 'bus' is?", options: ["buses", "buss", "bus", "busess"], answer: 0 },
      { q: "Which is a question word?", options: ["When", "And", "But", "Also"], answer: 0 }
    ],
    maths: [
      { q: "3 + 4 = ?", options: ["6", "7", "8", "9"], answer: 1 },
      { q: "6 - 1 = ?", options: ["4", "3", "5", "6"], answer: 2 },
      { q: "2 × 3 = ?", options: ["5", "6", "4", "7"], answer: 1 },
      { q: "Which is even?", options: ["3", "5", "8", "7"], answer: 2 },
      { q: "Number after 19?", options: ["18", "20", "21", "22"], answer: 1 }
    ],
    gk: [
      { q: "Which animal says 'meow'?", options: ["Dog", "Cat", "Cow", "Sheep"], answer: 1 },
      { q: "Which is used to write?", options: ["Spoon", "Pen", "Plate", "Shoe"], answer: 1 },
      { q: "Which day comes after Monday?", options: ["Sunday", "Tuesday", "Wednesday", "Thursday"], answer: 1 },
      { q: "What do plants need to grow?", options: ["Soil, water, sunlight", "Candy", "Shoes", "Phone"], answer: 0 },
      { q: "Which is a color?", options: ["Apple", "Blue", "Cat", "Run"], answer: 1 }
    ]
  },

  3: {
    grammar: [
      { q: "Choose subject: 'The dog barks loudly.'", options: ["barks", "dog", "loudly", "the"], answer: 1 },
      { q: "Past of 'eat' is?", options: ["eaten", "ate", "eat", "eats"], answer: 1 },
      { q: "Which is an adverb?", options: ["quickly", "quick", "quickness", "quicklying"], answer: 0 },
      { q: "Article for 'apple' is?", options: ["a", "an", "the", "none"], answer: 1 },
      { q: "Plural of 'child'?", options: ["childs", "children", "childes", "child"], answer: 1 }
    ],
    maths: [
      { q: "7 + 6 = ?", options: ["13", "12", "14", "11"], answer: 0 },
      { q: "8 × 2 = ?", options: ["10", "14", "16", "12"], answer: 2 },
      { q: "15 - 5 = ?", options: ["8", "9", "10", "11"], answer: 2 },
      { q: "Half of 10 is?", options: ["2", "4", "5", "6"], answer: 2 },
      { q: "Which number is odd?", options: ["8", "4", "11", "6"], answer: 2 }
    ],
    gk: [
      { q: "Which machine flies?", options: ["Car", "Plane", "Boat", "Bike"], answer: 1 },
      { q: "Which is a vegetable?", options: ["Apple", "Carrot", "Mango", "Banana"], answer: 1 },
      { q: "Which animal lives in water?", options: ["Lion", "Elephant", "Fish", "Horse"], answer: 2 },
      { q: "What do bees make?", options: ["Milk", "Honey", "Bread", "Soap"], answer: 1 },
      { q: "Which is hot: sun or snow?", options: ["Snow", "Sun", "Both", "None"], answer: 1 }
    ]
  },

  // Grades 4–5: grammar, maths, science, gk
  4: {
    grammar: [
      { q: "Choose the correct sentence:", options: ["He go to school", "He goes to school", "He gone to school", "He going to school"], answer: 1 },
      { q: "Identify the verb: 'She reads a book.'", options: ["She", "reads", "a", "book"], answer: 1 },
      { q: "Choose an adverb: 'He ran quickly.'", options: ["He", "ran", "quickly", "ranly"], answer: 2 },
      { q: "Which is a conjunction?", options: ["and", "run", "blue", "happy"], answer: 0 },
      { q: "Choose correct plural: 'city' → ?", options: ["citys", "cities", "cityes", "citii"], answer: 1 }
    ],
    maths: [
      { q: "What is 9 × 5?", options: ["45", "40", "35", "50"], answer: 0 },
      { q: "What is 36 ÷ 6?", options: ["6", "5", "7", "4"], answer: 0 },
      { q: "Perimeter of square side 4?", options: ["12", "16", "8", "20"], answer: 1 },
      { q: "60 minutes = ? hours", options: ["1", "2", "0.5", "3"], answer: 0 },
      { q: "Which is prime?", options: ["9", "15", "13", "21"], answer: 2 }
    ],
    science: [
      { q: "State of water at 100°C?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: 2 },
      { q: "Which sense organ sees?", options: ["Ear", "Eye", "Nose", "Tongue"], answer: 1 },
      { q: "Which organ pumps blood?", options: ["Lungs", "Stomach", "Heart", "Liver"], answer: 2 },
      { q: "What do plants need for photosynthesis?", options: ["Soil only", "Water only", "Sunlight, water, CO₂", "Air only"], answer: 2 },
      { q: "Which is renewable energy?", options: ["Coal", "Oil", "Solar", "Gas"], answer: 2 }
    ],
    gk: [
      { q: "Which is capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
      { q: "Who wrote 'Romeo and Juliet'?", options: ["Tolstoy", "Shakespeare", "Hemingway", "Orwell"], answer: 1 },
      { q: "Which planet is called the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: 1 },
      { q: "Which day is National Science Day in India (Feb)?", options: ["1 Feb", "28 Feb", "11 Feb", "15 Feb"], answer: 2 },
      { q: "Which animal is largest land animal?", options: ["Whale", "Elephant", "Giraffe", "Hippo"], answer: 1 }
    ]
  },

  5: {
    grammar: [
      { q: "Choose passive voice: 'She writes a letter.'", options: ["A letter is written by her", "She was written a letter", "She is writing a letter", "A letter writes her"], answer: 0 },
      { q: "Select the adjective: 'The tall tree.'", options: ["The", "tall", "tree", "None"], answer: 1 },
      { q: "Which is a compound word?", options: ["Sunflower", "Table", "Run", "Blue"], answer: 0 },
      { q: "Choose correct punctuation: 'How are you' → ?", options: ["!", ".", "?", ","], answer: 2 },
      { q: "Identify the tense: 'I will go.'", options: ["Past", "Present", "Future", "Perfect"], answer: 2 }
    ],
    maths: [
      { q: "What is 15 + 14?", options: ["29", "28", "30", "31"], answer: 0 },
      { q: "What is 7 × 6?", options: ["42", "36", "48", "40"], answer: 0 },
      { q: "What is half of 50?", options: ["20", "25", "30", "40"], answer: 1 },
      { q: "Find perimeter of rectangle 3x5", options: ["16", "15", "18", "20"], answer: 0 },
      { q: "Which fraction is bigger: 1/2 or 1/3?", options: ["1/2", "1/3", "Equal", "None"], answer: 0 }
    ],
    science: [
      { q: "Which gas do humans breathe in?", options: ["Oxygen", "Carbon dioxide", "Helium", "Nitrogen"], answer: 0 },
      { q: "Which part helps us hear?", options: ["Eye", "Ear", "Nose", "Tongue"], answer: 1 },
      { q: "Which material is used to make glass?", options: ["Sand", "Wood", "Plastic", "Iron"], answer: 0 },
      { q: "Birds have which covering?", options: ["Fur", "Scales", "Feathers", "Shell"], answer: 2 },
      { q: "Which planet has rings?", options: ["Earth", "Venus", "Saturn", "Mars"], answer: 2 }
    ],
    gk: [
      { q: "Which country is known for the pyramids?", options: ["India", "Egypt", "China", "Greece"], answer: 1 },
      { q: "Which festival is Diwali associated with?", options: ["Lights", "Harvest", "Music", "Water"], answer: 0 },
      { q: "Which animal is known as King of Jungle?", options: ["Tiger", "Lion", "Elephant", "Bear"], answer: 1 },
      { q: "Which is the largest ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 1 },
      { q: "Who is the Prime Minister of the UK? (common knowledge)", options: ["Variable", "Boris Johnson", "Theresa May", "Depends"], answer: 0 }
    ]
  },

  // Grades 6–8: history, geography, maths, science, grammar
  6: {
    history: [
      { q: "Who was called the 'Iron Man' of India?", options: ["Gandhi", "Sardar Patel", "Nehru", "Bhagat Singh"], answer: 1 },
      { q: "Which empire had its capital at Pataliputra?", options: ["Mughal", "Maurya", "Gupta", "Chola"], answer: 1 },
      { q: "Who wrote Arthashastra?", options: ["Chanakya", "Kalidasa", "Ved Vyasa", "Bharavi"], answer: 0 },
      { q: "Who founded the Mughal Empire?", options: ["Akbar", "Babur", "Humayun", "Aurangzeb"], answer: 1 },
      { q: "Qutub Minar is in which city?", options: ["Agra", "Delhi", "Jaipur", "Lucknow"], answer: 1 }
    ],
    geography: [
      { q: "Longest river in India?", options: ["Ganga", "Yamuna", "Godavari", "Narmada"], answer: 0 },
      { q: "Highest mountain in the world?", options: ["K2", "Everest", "Kangchenjunga", "Lhotse"], answer: 1 },
      { q: "Which is a desert in India?", options: ["Sahara", "Thar", "Gobi", "Atacama"], answer: 1 },
      { q: "Which ocean is east of India?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
      { q: "Which state has the longest coastline in India?", options: ["Kerala", "Gujarat", "Maharashtra", "Tamil Nadu"], answer: 1 }
    ],
    maths: [
      { q: "12 × 12 = ?", options: ["124", "144", "154", "134"], answer: 1 },
      { q: "Square root of 81?", options: ["7", "8", "9", "10"], answer: 2 },
      { q: "LCM of 4 and 6?", options: ["8", "10", "12", "6"], answer: 2 },
      { q: "Which is a prime number?", options: ["21", "22", "23", "24"], answer: 2 },
      { q: "Area of square with side 5?", options: ["20", "25", "10", "30"], answer: 1 }
    ],
    science: [
      { q: "Plants produce which gas during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 0 },
      { q: "H2O is the chemical formula for?", options: ["Hydrogen", "Oxygen", "Water", "Salt"], answer: 2 },
      { q: "The human skeleton is made of?", options: ["Muscle", "Bones", "Skin", "Blood"], answer: 1 },
      { q: "What is the boiling point of water (°C)?", options: ["90", "80", "100", "120"], answer: 2 },
      { q: "Which organ removes waste from blood?", options: ["Lung", "Liver", "Kidney", "Heart"], answer: 2 }
    ],
    grammar: [
      { q: "Choose the correct preposition: 'She sat ___ the chair.'", options: ["on", "in", "at", "by"], answer: 0 },
      { q: "Identify the adverb: 'He spoke softly.'", options: ["He", "spoke", "softly", "None"], answer: 2 },
      { q: "Select the correct form: 'They ___ finished.'", options: ["has", "have", "is", "are"], answer: 1 },
      { q: "Which is a conjunction?", options: ["but", "blue", "boy", "run"], answer: 0 },
      { q: "Choose correct article: '___ university'", options: ["An", "A", "The", "None"], answer: 1 }
    ]
  },

  7: {
    history: [
      { q: "Who was the founder of the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"], answer: 1 },
      { q: "The Gupta period is known as the ____ Age.", options: ["Bronze", "Dark", "Golden", "Iron"], answer: 2 },
      { q: "Which invader invaded India in 1192 (Second Battle of Tarain)?", options: ["Alexander", "Muhammad Ghori", "Huns", "Tamerlane"], answer: 1 },
      { q: "Akbar belonged to which dynasty?", options: ["Mughal", "Gupta", "Maurya", "Chola"], answer: 0 },
      { q: "Who led the Salt Satyagraha (Salt March)?", options: ["Gandhi", "Nehru", "Subhash Bose", "Sardar Patel"], answer: 0 }
    ],
    geography: [
      { q: "Which is the longest river in the world (commonly considered)?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
      { q: "Which continent has the most countries?", options: ["Asia", "Africa", "Europe", "South America"], answer: 1 },
      { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
      { q: "Which climate is characterized by very low rainfall?", options: ["Tropical", "Temperate", "Desert", "Monsoon"], answer: 2 },
      { q: "Which line divides Earth into Northern and Southern Hemisphere?", options: ["Prime Meridian", "Tropic of Cancer", "Equator", "Arctic Circle"], answer: 2 }
    ],
    maths: [
      { q: "What is 15% of 200?", options: ["20", "30", "40", "25"], answer: 1 },
      { q: "If x=2, evaluate 3x + 4", options: ["10", "12", "8", "6"], answer: 0 },
      { q: "Solve: 3/4 + 1/4 = ?", options: ["1", "1/2", "3/8", "4/5"], answer: 0 },
      { q: "What is the value of π approx?", options: ["2.14", "3.14", "4.14", "1.41"], answer: 1 },
      { q: "Which is factor of 36?", options: ["5", "6", "7", "11"], answer: 1 }
    ],
    science: [
      { q: "Which is a source of energy?", options: ["Coal", "Water", "Sun", "All of these"], answer: 3 },
      { q: "What is the process of water turning into vapor?", options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"], answer: 1 },
      { q: "Which gas is needed for combustion?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], answer: 0 },
      { q: "Which particle has negative charge?", options: ["Proton", "Electron", "Neutron", "Photon"], answer: 1 },
      { q: "Which organ system transports nutrients?", options: ["Respiratory", "Circulatory", "Digestive", "Skeletal"], answer: 1 }
    ],
    grammar: [
      { q: "Choose correct: 'She has ___ apple.'", options: ["a", "an", "the", "no"], answer: 1 },
      { q: "Identify subject in 'Rita reads books.'", options: ["reads", "Rita", "books", "None"], answer: 1 },
      { q: "Which is direct speech of: He said, 'I am happy.'", options: ["He said that he is happy.", "He said he was happy.", "He says I am happy.", "He said I am happy."], answer: 3 },
      { q: "Pick the adverb: 'She sings beautifully.'", options: ["sings", "beautifully", "She", "None"], answer: 1 },
      { q: "Choose correct tense: 'They have eaten.'", options: ["Present perfect", "Past perfect", "Present", "Future"], answer: 0 }
    ]
  },

  8: {
    history: [
      { q: "Who was the last Mughal emperor?", options: ["Bahadur Shah II", "Aurangzeb", "Akbar II", "Shah Jahan"], answer: 0 },
      { q: "The Revolt of 1857 is also called?", options: ["First War of Independence", "Sepoy Mutiny", "Both", "None"], answer: 2 },
      { q: "Who was emperor during the Golden Age of India (Guptas)?", options: ["Chandragupta II", "Ashoka", "Harsha", "Samudragupta"], answer: 0 },
      { q: "Which colonial power controlled India before independence?", options: ["French", "Dutch", "British", "Portuguese"], answer: 2 },
      { q: "Who wrote 'Discovery of India'?", options: ["Nehru", "Gandhi", "Tagore", "Ambedkar"], answer: 0 }
    ],
    geography: [
      { q: "Which is the deepest ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 1 },
      { q: "What causes tides?", options: ["Wind", "Sun's heat", "Moon's gravity", "Earthquake"], answer: 2 },
      { q: "Which mountain range is in India?", options: ["Andes", "Himalaya", "Alps", "Rockies"], answer: 1 },
      { q: "Which type of rock is formed by cooling of lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "All"], answer: 2 },
      { q: "Which is the capital city of Japan?", options: ["Tokyo", "Osaka", "Kyoto", "Nara"], answer: 0 }
    ],
    maths: [
      { q: "Solve: 2x + 3 = 11; x = ?", options: ["3", "4", "5", "6"], answer: 1 },
      { q: "What is 7²?", options: ["49", "56", "42", "36"], answer: 0 },
      { q: "If a triangle has angles 60° and 80°, third angle is?", options: ["40°", "50°", "60°", "80°"], answer: 1 },
      { q: "What is perimeter of equilateral triangle side 5?", options: ["15", "10", "20", "5"], answer: 0 },
      { q: "Which is an irrational number?", options: ["1/2", "√2", "3", "4"], answer: 1 }
    ],
    science: [
      { q: "Which blood cell helps clotting?", options: ["Red cells", "White cells", "Platelets", "Plasma"], answer: 2 },
      { q: "Which gas causes global warming?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], answer: 1 },
      { q: "Which instrument measures temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Ammeter"], answer: 1 },
      { q: "What is the chemical symbol for Na?", options: ["N", "Na", "Nn", "Nm"], answer: 1 },
      { q: "Which is a renewable source of energy?", options: ["Coal", "Oil", "Wind", "Gas"], answer: 2 }
    ],
    grammar: [
      { q: "Choose correct synonym of 'happy':", options: ["sad", "angry", "joyful", "slow"], answer: 2 },
      { q: "Which is passive of 'They built a house'?", options: ["A house was built by them", "They was built a house", "A house built them", "They built by a house"], answer: 0 },
      { q: "Select the correct modal: 'You ___ finish it.'", options: ["must", "is", "are", "has"], answer: 0 },
      { q: "Choose correct conjunction: 'I like tea ___ coffee.'", options: ["and", "but", "because", "before"], answer: 0 },
      { q: "Which is an interjection?", options: ["Wow!", "Run", "Quick", "House"], answer: 0 }
    ]
  },

  // Grades 9–10: history, geography, politics (civics), maths, science
  9: {
    history: [
      { q: "What was the primary outcome of the Industrial Revolution?", options: ["Manual labour increase", "Mechanisation and factories", "Decrease in production", "Less trade"], answer: 1 },
      { q: "Who started the French Revolution (symbolic event)?", options: ["Storming of the Bastille", "Napoleon", "Louis XVI", "Robespierre"], answer: 0 },
      { q: "Which war started in 1914?", options: ["World War I", "World War II", "Cold War", "Crimean War"], answer: 0 },
      { q: "Which civilization lived along the Nile?", options: ["Indus", "Mesopotamia", "Egyptian", "Greek"], answer: 2 },
      { q: "Who was 'Mahatma' Mohandas K. Gandhi?", options: ["Freedom fighter", "King", "Emperor", "General"], answer: 0 }
    ],
    geography: [
      { q: "What is a delta?", options: ["Mountain chain", "River mouth deposit", "Volcano", "Desert"], answer: 1 },
      { q: "Which country is largest by area?", options: ["USA", "China", "Russia", "India"], answer: 2 },
      { q: "What is latitude measure?", options: ["East-west", "North-south", "Altitude", "Depth"], answer: 1 },
      { q: "Which ecosystem has the highest biodiversity?", options: ["Desert", "Rainforest", "Tundra", "Grassland"], answer: 1 },
      { q: "Which is the longest mountain range?", options: ["Andes", "Himalaya", "Rockies", "Alps"], answer: 0 }
    ],
    politics: [
      { q: "Which part of government makes laws?", options: ["Executive", "Legislature", "Judiciary", "Media"], answer: 1 },
      { q: "What is democracy?", options: ["Rule by one", "Rule by people", "Rule by army", "Rule by few"], answer: 1 },
      { q: "Who heads the state in India?", options: ["Prime Minister", "President", "Chief Justice", "Speaker"], answer: 1 },
      { q: "Fundamental Rights are in which part of Indian Constitution?", options: ["Part III", "Part II", "Part V", "Part I"], answer: 0 },
      { q: "Which is the lower house of Parliament?", options: ["Rajya Sabha", "Lok Sabha", "Vidhan Sabha", "Panchayat"], answer: 1 }
    ],
    maths: [
      { q: "Solve: x² = 49; x = ?", options: ["7 or -7", "7 only", "49", "0"], answer: 0 },
      { q: "What is linear equation?", options: ["Degree 1", "Degree 2", "Quadratic", "Cubic"], answer: 0 },
      { q: "What is 45% of 200?", options: ["90", "80", "95", "100"], answer: 0 },
      { q: "Sine of 90° is?", options: ["0", "1", "-1", "0.5"], answer: 1 },
      { q: "What is area of circle radius 7? (π≈3.14)", options: ["154", "44", "100", "49"], answer: 0 }
    ],
    science: [
      { q: "What is Force measured in?", options: ["Joules", "Newtons", "Watts", "Volts"], answer: 1 },
      { q: "DNA stands for?", options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Protein", "None"], answer: 0 },
      { q: "Which is a non-renewable energy source?", options: ["Wind", "Solar", "Coal", "Hydro"], answer: 2 },
      { q: "Which organ controls the body?", options: ["Heart", "Brain", "Lungs", "Kidney"], answer: 1 },
      { q: "pH of neutral water is?", options: ["7", "0", "14", "1"], answer: 0 }
    ]
  },

  10: {
    history: [
      { q: "The Treaty of Versailles ended which war?", options: ["WWI", "WWII", "Cold War", "None"], answer: 0 },
      { q: "Who was Emperor Ashoka?", options: ["A Mauryan emperor", "A Mughal king", "Chola king", "Delhi Sultan"], answer: 0 },
      { q: "What revolutionary idea spread in 18th century Europe?", options: ["Absolutism", "Republicanism and Rights", "Feudalism", "None"], answer: 1 },
      { q: "The Renaissance began in which country?", options: ["France", "Italy", "England", "Spain"], answer: 1 },
      { q: "Industrialization started first in which country?", options: ["India", "USA", "Britain", "China"], answer: 2 }
    ],
    geography: [
      { q: "What is the Ring of Fire?", options: ["Oceanic trench", "Volcanic belt around Pacific", "Tsunami area", "Desert ring"], answer: 1 },
      { q: "What causes earthquakes?", options: ["Volcanoes only", "Tectonic movements", "Wind", "Erosion"], answer: 1 },
      { q: "Which is Earth’s inner layer?", options: ["Crust", "Mantle", "Core", "Atmosphere"], answer: 2 },
      { q: "Which type of climate is found near the equator?", options: ["Polar", "Tropical", "Temperate", "Arid"], answer: 1 },
      { q: "Which river is known as Yellow River?", options: ["Mississippi", "Huang He", "Ganga", "Nile"], answer: 1 }
    ],
    politics: [
      { q: "What does 'separation of powers' mean?", options: ["No power", "Division between branches", "All power to one", "Military rule"], answer: 1 },
      { q: "What is a constitution?", options: ["A rulebook for a country", "An economic plan", "A religious guide", "A novel"], answer: 0 },
      { q: "Who enforces the law?", options: ["Legislature", "Judiciary", "Executive", "Press"], answer: 2 },
      { q: "What is federalism?", options: ["Single central rule", "Power shared between center and states", "No local government", "Only local rule"], answer: 1 },
      { q: "Which body interprets the Constitution?", options: ["Legislature", "Executive", "Judiciary", "Police"], answer: 2 }
    ],
    maths: [
      { q: "Quadratic equation general form?", options: ["ax²+bx+c=0", "ax+b=0", "x³+...=0", "None"], answer: 0 },
      { q: "What is function f(x)=x² called?", options: ["Linear", "Quadratic", "Cubic", "Exponential"], answer: 1 },
      { q: "If slope m = 2, line y = mx + c passes through (0,3) → c = ?", options: ["3", "2", "0", "1"], answer: 0 },
      { q: "What is the mean of [2,3,4,5,6]?", options: ["3", "4", "5", "20"], answer: 1 },
      { q: "If angle A in triangle is 90°, the triangle is:", options: ["Acute", "Right-angled", "Obtuse", "Equilateral"], answer: 1 }
    ],
    science: [
      { q: "Which law explains gravitational force?", options: ["Newton's law of gravitation", "Ohm's law", "Boyle's law", "Hooke's law"], answer: 0 },
      { q: "What is acceleration unit?", options: ["m/s", "m/s²", "s/m", "kg"], answer: 1 },
      { q: "What does ATP do in cells?", options: ["Store DNA", "Provide energy", "Carry oxygen", "Make proteins"], answer: 1 },
      { q: "Which process produces food in plants?", options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"], answer: 0 },
      { q: "Which particle is neutral?", options: ["Proton", "Electron", "Neutron", "Photon"], answer: 2 }
    ]
  },

  // Grades 11–12: history, geography, politics, adv_maths, english
  11: {
    politics: [
      { q: "Who is regarded as Father of the Indian Constitution?", options: ["Nehru", "Ambedkar", "Gandhi", "Patel"], answer: 1 },
      { q: "What is Judicial Review?", options: ["Law making", "Court reviewing laws", "Elections", "Taxation"], answer: 1 },
      { q: "The President of India is elected by?", options: ["People", "Electoral College", "Supreme Court", "Parliament only"], answer: 1 },
      { q: "Which is a fundamental duty?", options: ["Vote", "To protect environment", "To pay taxes only", "None"], answer: 1 },
      { q: "What does 'bicameral' mean?", options: ["Single house", "Two houses", "Many houses", "No house"], answer: 1 }
    ],
    geography: [
      { q: "What is urbanization?", options: ["People moving to rural areas", "Growth of cities", "Planting trees", "Agriculture expansion"], answer: 1 },
      { q: "What is continental drift theory about?", options: ["Weather", "Movement of continents", "Ocean currents", "Erosion"], answer: 1 },
      { q: "Which biome has cold summers and long winters?", options: ["Tundra", "Desert", "Rainforest", "Grassland"], answer: 0 },
      { q: "Which is a greenhouse gas?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], answer: 2 },
      { q: "Which country has largest population?", options: ["India", "China", "USA", "Indonesia"], answer: 1 }
    ],
    adv_maths: [
      { q: "Derivative of sin x is?", options: ["cos x", "-cos x", "sin x", "-sin x"], answer: 0 },
      { q: "Integral of 1/x dx is?", options: ["ln|x| + C", "x + C", "1/x + C", "e^x + C"], answer: 0 },
      { q: "If vectors a and b are perpendicular, their dot product is?", options: [">0", "<0", "0", "1"], answer: 2 },
      { q: "Matrix 2x2 with det -2 is invertible? (Yes/No)", options: ["Yes", "No", "Sometimes", "Cannot say"], answer: 0 },
      { q: "Limit of (1 + 1/n)^n as n→∞ is approximately?", options: ["2", "e", "π", "1"], answer: 1 }
    ],
    english: [
      { q: "Which is a metaphor: 'Time is a thief'?", options: ["Simile", "Metaphor", "Personification", "Alliteration"], answer: 1 },
      { q: "Antonym of 'scarce'?", options: ["Rare", "Abundant", "Few", "Limited"], answer: 1 },
      { q: "Choose correct collocation: 'make ___ decision'", options: ["a", "an", "the", "no"], answer: 1 },
      { q: "Which is an oxymoron?", options: ["Jumbo shrimp", "Big elephant", "Small mouse", "Fast car"], answer: 0 },
      { q: "Select passive form: 'They will finish the work.'", options: ["The work will be finished by them", "They will be finished by the work", "Work will finish them", "None"], answer: 0 }
    ],
    history: [
      { q: "Which event triggered World War I?", options: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Bombing of Pearl Harbor", "Russian Revolution"], answer: 0 },
      { q: "What was the Cold War mainly about?", options: ["Economic rivalry", "Ideological rivalry between US & USSR", "Religious war", "Trade war"], answer: 1 },
      { q: "When did India become a Republic?", options: ["1947", "1950", "1949", "1952"], answer: 1 },
      { q: "Who launched the 'Green Revolution' in India?", options: ["Government policies and scientists", "Mahatma Gandhi", "British rulers", "None"], answer: 0 },
      { q: "Which movement aimed at women's suffrage?", options: ["Temperance", "Suffragette movement", "Abolition", "Industrial"], answer: 1 }
    ]
  },

  12: {
    politics: [
      { q: "What is secularism?", options: ["State religion", "No religion allowed", "State impartiality towards religion", "Only one religion"], answer: 2 },
      { q: "Which court is highest in India?", options: ["High Court", "Supreme Court", "District Court", "Magistrate"], answer: 1 },
      { q: "What is 'Directive Principles' related to?", options: ["Justiciable rights", "Guidelines for governance", "Tax rules", "Police"], answer: 1 },
      { q: "Which is an example of local government in India?", options: ["Parliament", "Municipal Corporation", "Rajya Sabha", "President"], answer: 1 },
      { q: "Which article gives Right to Freedom of Speech in India?", options: ["19", "14", "21", "32"], answer: 0 }
    ],
    geography: [
      { q: "What is 'watershed'?", options: ["Land area draining into a river", "A dam", "A lake", "A canal"], answer: 0 },
      { q: "Monsoon winds are caused by?", options: ["Ocean currents", "Temperature differences between land & sea", "Tides", "Moon"], answer: 1 },
      { q: "Which is a major biogeographic zone in India?", options: ["Himalayan", "Arctic", "Amazon", "Sahara"], answer: 0 },
      { q: "Which process causes rocks to break down?", options: ["Weathering", "Melting", "Fusion", "Combustion"], answer: 0 },
      { q: "Which mineral is the main component of limestone?", options: ["Quartz", "Calcite (Calcium carbonate)", "Feldspar", "Mica"], answer: 1 }
    ],
    adv_maths: [
      { q: "If f(x)=e^x, derivative f'(x) = ?", options: ["e^x", "x e^{x-1}", "1", "ln x"], answer: 0 },
      { q: "Eigenvalues are associated with which mathematical object?", options: ["Function", "Matrix", "Set", "Number line"], answer: 1 },
      { q: "What is probability range?", options: ["-1 to 1", "0 to 1", "0 to infinity", "1 to 2"], answer: 1 },
      { q: "Which is solution to differential eqn dy/dx = ky?", options: ["y = Ce^{kx}", "y = kx", "y = k", "y = x^k"], answer: 0 },
      { q: "Convergence of a series depends on?", options: ["Terms", "Sum only", "Limit of terms", "Product"], answer: 2 }
    ],
    english: [
      { q: "Identify the sentence type: 'Could you open the window?'", options: ["Declarative", "Imperative", "Interrogative", "Exclamatory"], answer: 2 },
      { q: "Which is a collective noun?", options: ["Team", "Apple", "Run", "Quickly"], answer: 0 },
      { q: "Choose correct use of comma:", options: ["I like apples, and oranges.", "I like apples and, oranges.", "I, like apples and oranges", "None"], answer: 0 },
      { q: "Define 'oxymoron':", options: ["Opposite words together", "Long sentence", "Repeated words", "Rhyme"], answer: 0 },
      { q: "Choose correct: 'She is better ___ him.'", options: ["then", "than", "that", "with"], answer: 1 }
    ],
    history: [
      { q: "What triggered the Russian Revolution in 1917?", options: ["Economic hardship and war", "Industrialization", "Discovery", "Renaissance"], answer: 0 },
      { q: "Which empire was ruled by Suleiman the Magnificent?", options: ["Ottoman Empire", "Mughal Empire", "Roman Empire", "Persian Empire"], answer: 0 },
      { q: "What is decolonization?", options: ["Colonies gaining independence", "Colonization of new lands", "Industrial growth", "Peace treaty"], answer: 0 },
      { q: "Which policy helped US & USSR influence other countries after WWII?", options: ["Isolationism", "Containment & Cold War policies", "Colonialism", "Feudalism"], answer: 1 },
      { q: "Which movement fought against apartheid?", options: ["Satyagraha", "Civil Rights movement", "Anti-Apartheid movement", "Renaissance"], answer: 2 }
    ]
  }
};

// ----- App state -----
let state = {
  grade: null,
  subject: null,
  qIndex: 0,
  score: 0
};

// ----- DOM refs -----
const homeEl = document.getElementById("home");
const gradesEl = document.getElementById("grades");
const gradeGrid = document.getElementById("grade-grid");
const subjectsEl = document.getElementById("subjects");
const subjectGrid = document.getElementById("subject-grid");
const gradeHeading = document.getElementById("grade-heading");
const quizEl = document.getElementById("quiz");
const quizTitle = document.getElementById("quiz-title");
const progressEl = document.getElementById("progress");
const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");
const restartBtn = document.getElementById("restartBtn");

// ----- Initialize grade buttons 1..12 -----
function showGrades(){
  hideAll();
  gradesEl.classList.remove("hidden");
  populateGrades();
}

function populateGrades(){
  gradeGrid.innerHTML = "";
  for(let g=1; g<=12; g++){
    const btn = document.createElement("button");
    btn.className = "primary";
    btn.innerText = `Grade ${g}`;
    btn.onclick = () => selectGrade(g);
    gradeGrid.appendChild(btn);
  }
}

function showHome(){
  hideAll();
  homeEl.classList.remove("hidden");
}

// ----- Grade selection -----
function selectGrade(g){
  state.grade = g;
  hideAll();
  subjectsEl.classList.remove("hidden");
  gradeHeading.innerText = `Grade ${g} Subjects`;
  populateSubjects(g);
}

function populateSubjects(grade){
  subjectGrid.innerHTML = "";
  const gradeData = quizzes[grade];
  if(!gradeData){
    subjectGrid.innerHTML = `<div class="subject-card">No subjects available for Grade ${grade} yet.</div>`;
    return;
  }
  Object.keys(gradeData).forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "subject-card";
    btn.innerText = sub.toUpperCase();
    btn.onclick = () => startQuiz(sub);
    subjectGrid.appendChild(btn);
  });
}

// ----- Quiz flow -----
function startQuiz(subject){
  state.subject = subject;
  state.qIndex = 0;
  state.score = 0;
  hideAll();
  quizEl.classList.remove("hidden");
  quizTitle.innerText = `${subject.toUpperCase()} - Grade ${state.grade}`;
  resultBox.classList.add("hidden");
  restartBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  loadQuestion();
}

function loadQuestion(){
  const list = quizzes[state.grade][state.subject];
  if(!list || state.qIndex >= list.length){
    showResult();
    return;
  }
  const q = list[state.qIndex];
  progressEl.innerText = `Question ${state.qIndex+1} of ${list.length}`;
  questionBox.innerHTML = `<h3>${q.q}</h3>`;
  q.options.forEach((opt, i) => {
    const optEl = document.createElement("button");
    optEl.className = "option";
    optEl.innerText = opt;
    optEl.onclick = () => answerSelected(optEl, i);
    questionBox.appendChild(optEl);
  });
  // hide next until answer chosen
  nextBtn.classList.add("hidden");
  resultBox.classList.add("hidden");
}

function answerSelected(el, selectedIndex){
  const q = quizzes[state.grade][state.subject][state.qIndex];
  const correct = q.answer;
  // mark options
  document.querySelectorAll(".option").forEach(btn => btn.onclick = null);
  // highlight correct and wrong
  const options = Array.from(document.querySelectorAll(".option"));
  options.forEach((optBtn, idx) => {
    if(idx === correct) optBtn.classList.add("correct");
    if(idx === selectedIndex && idx !== correct) optBtn.classList.add("wrong");
  });
  if(selectedIndex === correct) state.score++;
  // show next or finish
  if(state.qIndex < quizzes[state.grade][state.subject].length - 1){
    nextBtn.classList.remove("hidden");
  } else {
    // last question -> show result button area
    nextBtn.classList.add("hidden");
    showResult();
  }
}

function nextQuestion(){
  state.qIndex++;
  loadQuestion();
}

function showResult(){
  questionBox.innerHTML = "";
  progressEl.innerText = "";
  resultBox.classList.remove("hidden");
  const total = quizzes[state.grade][state.subject].length;
  resultBox.innerHTML = `<div>You scored <strong>${state.score}</strong> out of <strong>${total}</strong>.</div>`;
  // feedback
  const pct = (state.score/total) * 100;
  let msg = "";
  if(pct === 100) msg = "🌟 Perfect score — excellent!";
  else if(pct >= 70) msg = "👍 Great job — keep it up!";
  else msg = "💪 Good effort — keep practicing!";
  resultBox.innerHTML += `<div style="margin-top:8px">${msg}</div>`;
  restartBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
}

function restartQuiz(){
  startQuiz(state.subject);
}

function backToSubjects(){
  hideAll();
  subjectsEl.classList.remove("hidden");
  // ensure subject list visible
  populateSubjects(state.grade);
}

// helper to hide all sections
function hideAll(){
  [homeEl, gradesEl, subjectsEl, quizEl].forEach(el => el.classList.add("hidden"));
}

// on load show home
showHome();
