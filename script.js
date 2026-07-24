// ===== DATA: each health condition with its food prescription =====
const CONDITIONS = [
  {
    id: "heart",
    name: "Heart Problem",
    icon: "❤️",
    sub: "Coronary / cholesterol / blood pressure related heart issues",
    dosage: "Take oats or nuts every morning · limit salt to 1 tsp/day",
    stamp: "LOW\nSALT",
    eat: [
      { e: "🥣", t: "Oats & whole grains" },
      { e: "🐟", t: "Fatty fish (salmon, sardines)" },
      { e: "🥑", t: "Avocado & olive oil" },
      { e: "🥜", t: "Almonds & walnuts" },
      { e: "🥦", t: "Leafy greens & broccoli" },
      { e: "🫐", t: "Berries" },
    ],
    avoid: [
      { e: "🧂", t: "Excess salt / pickles" },
      { e: "🍟", t: "Fried & fast food" },
      { e: "🧈", t: "Butter & full-fat dairy" },
      { e: "🥓", t: "Red & processed meat" },
      { e: "🍰", t: "Sugary bakery items" },
    ],
  },
  {
    id: "diabetes",
    name: "Diabetes",
    icon: "🩸",
    sub: "High blood sugar / insulin resistance",
    dosage: "Small frequent meals · pair carbs with fibre or protein",
    stamp: "LOW\nSUGAR",
    keywords: ["sugar"],
    eat: [
      { e: "🥬", t: "Leafy vegetables" },
      { e: "🫘", t: "Legumes & lentils (dal)" },
      { e: "🌾", t: "Millets & brown rice" },
      { e: "🥒", t: "Cucumber, bitter gourd" },
      { e: "🥚", t: "Eggs & lean protein" },
      { e: "🍏", t: "Apples, guava, berries" },
    ],
    avoid: [
      { e: "🍬", t: "Sweets & refined sugar" },
      { e: "🥤", t: "Sugary/soft drinks" },
      { e: "🍚", t: "White rice / white bread" },
      { e: "🍌", t: "Overripe bananas, mango (excess)" },
      { e: "🍟", t: "Fried snacks" },
    ],
  },
  {
    id: "bp",
    name: "High Blood Pressure",
    icon: "💢",
    sub: "Hypertension",
    dosage: "Reduce sodium · add potassium-rich foods daily",
    stamp: "MONITOR\nBP",
    keywords: ["bp", "hypertension"],
    eat: [
      { e: "🍌", t: "Bananas (potassium)" },
      { e: "🥛", t: "Low-fat dairy" },
      { e: "🥗", t: "Fresh salads" },
      { e: "🧄", t: "Garlic" },
      { e: "🍫", t: "Dark chocolate (small amt.)" },
      { e: "🫒", t: "Olive oil" },
    ],
    avoid: [
      { e: "🧂", t: "Salty & packaged food" },
      { e: "🥓", t: "Processed/cured meat" },
      { e: "☕", t: "Excess caffeine" },
      { e: "🍷", t: "Alcohol" },
      { e: "🍜", t: "Instant noodles / soups" },
    ],
  },
  {
    id: "obesity",
    name: "Obesity / Weight Gain",
    icon: "⚖️",
    sub: "Excess body weight management",
    dosage: "High fibre, portion-controlled meals · stay hydrated",
    stamp: "PORTION\nCONTROL",
    eat: [
      { e: "🥗", t: "Salads & raw vegetables" },
      { e: "🍎", t: "Whole fruits" },
      { e: "🍗", t: "Grilled lean protein" },
      { e: "🥣", t: "High-fibre grains" },
      { e: "💧", t: "Plenty of water" },
      { e: "🫘", t: "Sprouts & legumes" },
    ],
    avoid: [
      { e: "🍔", t: "Fast food & burgers" },
      { e: "🥤", t: "Sugary beverages" },
      { e: "🍕", t: "Cheese-heavy foods" },
      { e: "🍩", t: "Bakery & fried snacks" },
      { e: "🌙", t: "Late-night heavy meals" },
    ],
  },
  {
    id: "anemia",
    name: "Anemia",
    icon: "🩹",
    sub: "Low haemoglobin / iron deficiency",
    dosage: "Pair iron-rich foods with vitamin C to aid absorption",
    stamp: "BOOST\nIRON",
    eat: [
      { e: "🥬", t: "Spinach & leafy greens" },
      { e: "🫘", t: "Lentils & beans" },
      { e: "🍊", t: "Citrus fruits (vitamin C)" },
      { e: "🥩", t: "Lean red meat (if non-veg)" },
      { e: "🍳", t: "Eggs" },
      { e: "🥜", t: "Dates & nuts" },
    ],
    avoid: [
      { e: "☕", t: "Tea/coffee right after meals" },
      { e: "🥤", t: "Carbonated drinks with meals" },
      { e: "🍞", t: "Excess refined/processed food" },
    ],
  },
  {
    id: "digestion",
    name: "Digestive Issues",
    icon: "🌀",
    sub: "Acidity, bloating, constipation",
    dosage: "Eat slowly · include fibre and curd/yogurt daily",
    stamp: "GUT\nCARE",
    eat: [
      { e: "🥣", t: "Curd / yogurt (probiotics)" },
      { e: "🍌", t: "Bananas" },
      { e: "🌾", t: "Whole grains & fibre" },
      { e: "🥒", t: "Cucumber & light vegetables" },
      { e: "💧", t: "Warm water" },
      { e: "🫚", t: "Ginger" },
    ],
    avoid: [
      { e: "🌶️", t: "Very spicy / oily food" },
      { e: "☕", t: "Excess caffeine" },
      { e: "🥤", t: "Carbonated drinks" },
      { e: "🍕", t: "Heavy processed food" },
    ],
  },
  {
    id: "thyroid",
    name: "Thyroid (Hypothyroidism)",
    icon: "🦋",
    sub: "Underactive thyroid / slow metabolism",
    dosage: "Take iodine-rich foods regularly · avoid raw goitrogens in excess",
    stamp: "THYRO\nCARE",
    eat: [
      { e: "🐟", t: "Fish & seafood (iodine)" },
      { e: "🥚", t: "Eggs (selenium & iodine)" },
      { e: "🥜", t: "Brazil nuts (selenium)" },
      { e: "🌾", t: "Whole grains" },
      { e: "🍊", t: "Fresh fruits" },
      { e: "🧀", t: "Dairy in moderation" },
    ],
    avoid: [
      { e: "🥦", t: "Excess raw cabbage/broccoli" },
      { e: "🍞", t: "Excess soy products" },
      { e: "🍟", t: "Processed & fried food" },
      { e: "🥤", t: "Sugary drinks" },
    ],
  },
  {
    id: "kidney",
    name: "Kidney Disease",
    icon: "🫘",
    sub: "Reduced kidney function",
    dosage: "Limit salt & potassium/phosphorus as advised by your doctor",
    stamp: "LOW\nSODIUM",
    eat: [
      { e: "🍚", t: "White rice (as advised)" },
      { e: "🥒", t: "Cucumber & cabbage" },
      { e: "🍎", t: "Apples & berries" },
      { e: "🧄", t: "Garlic & herbs for flavour" },
      { e: "🥚", t: "Egg whites (controlled protein)" },
    ],
    avoid: [
      { e: "🧂", t: "Salt & salty snacks" },
      { e: "🍌", t: "Excess banana/orange (potassium)" },
      { e: "🥜", t: "Excess nuts (phosphorus)" },
      { e: "🥤", t: "Cola drinks" },
      { e: "🍟", t: "Processed & canned food" },
    ],
  },
  {
    id: "liver",
    name: "Liver Disease / Fatty Liver",
    icon: "🫀",
    sub: "Fatty liver, hepatitis, general liver support",
    dosage: "Avoid alcohol completely · keep meals light and fibre-rich",
    stamp: "LIVER\nCARE",
    eat: [
      { e: "🥬", t: "Leafy green vegetables" },
      { e: "🫐", t: "Berries & fruits" },
      { e: "🌾", t: "Whole grains & oats" },
      { e: "☕", t: "Black coffee (moderate)" },
      { e: "🐟", t: "Fish (omega-3)" },
      { e: "💧", t: "Plenty of water" },
    ],
    avoid: [
      { e: "🍷", t: "Alcohol" },
      { e: "🍟", t: "Fried & fatty food" },
      { e: "🍬", t: "Sugary food & drinks" },
      { e: "🧂", t: "Excess salt" },
      { e: "🥓", t: "Red & processed meat" },
    ],
  },
  {
    id: "arthritis",
    name: "Arthritis / Joint Pain",
    icon: "🦴",
    sub: "Joint inflammation & stiffness",
    dosage: "Include anti-inflammatory foods daily · stay at a healthy weight",
    stamp: "ANTI\nINFLAM",
    eat: [
      { e: "🐟", t: "Fatty fish (omega-3)" },
      { e: "🫚", t: "Turmeric & ginger" },
      { e: "🥦", t: "Leafy greens & broccoli" },
      { e: "🥜", t: "Walnuts & flaxseeds" },
      { e: "🍒", t: "Cherries & berries" },
      { e: "🫒", t: "Olive oil" },
    ],
    avoid: [
      { e: "🍟", t: "Fried & processed food" },
      { e: "🍰", t: "Sugary desserts" },
      { e: "🍞", t: "Refined flour products" },
      { e: "🥓", t: "Red & processed meat" },
    ],
  },
  {
    id: "skin",
    name: "Skin Problems (Acne)",
    icon: "🌸",
    sub: "Acne, breakouts, dull skin",
    dosage: "Drink water regularly · include antioxidant-rich foods",
    stamp: "SKIN\nGLOW",
    eat: [
      { e: "🥕", t: "Carrots & orange vegetables" },
      { e: "🍅", t: "Tomatoes" },
      { e: "🥑", t: "Avocado" },
      { e: "🫐", t: "Berries" },
      { e: "🥜", t: "Nuts & seeds (zinc)" },
      { e: "💧", t: "Water" },
    ],
    avoid: [
      { e: "🍬", t: "Sugary & processed food" },
      { e: "🥛", t: "Excess dairy (for some people)" },
      { e: "🍟", t: "Oily / fried food" },
      { e: "🥤", t: "Sugary drinks" },
    ],
  },
  {
    id: "hairfall",
    name: "Hair Fall",
    icon: "💇",
    sub: "Hair thinning & fall",
    dosage: "Include protein and iron-rich foods for hair growth support",
    stamp: "HAIR\nCARE",
    eat: [
      { e: "🥚", t: "Eggs (protein & biotin)" },
      { e: "🥬", t: "Spinach (iron)" },
      { e: "🐟", t: "Fish (omega-3)" },
      { e: "🥜", t: "Nuts & seeds" },
      { e: "🍠", t: "Sweet potato (vitamin A)" },
      { e: "🫘", t: "Lentils & legumes" },
    ],
    avoid: [
      { e: "🍟", t: "Fried & junk food" },
      { e: "🍬", t: "Excess sugar" },
      { e: "☕", t: "Excess caffeine" },
      { e: "🥤", t: "Crash/fad diets" },
    ],
  },
  {
    id: "immunity",
    name: "Cold, Flu & Low Immunity",
    icon: "🤧",
    sub: "Frequent cold, cough, weak immunity",
    dosage: "Take vitamin-C rich foods daily · keep warm and hydrated",
    stamp: "BOOST\nIMMUNE",
    eat: [
      { e: "🍊", t: "Citrus fruits (vitamin C)" },
      { e: "🫚", t: "Ginger & turmeric" },
      { e: "🧄", t: "Garlic" },
      { e: "🥣", t: "Warm soups" },
      { e: "🍯", t: "Honey (warm water)" },
      { e: "🥦", t: "Leafy greens" },
    ],
    avoid: [
      { e: "🍦", t: "Cold drinks & ice cream" },
      { e: "🍬", t: "Excess sugar" },
      { e: "🍟", t: "Fried/oily food" },
      { e: "🥤", t: "Carbonated drinks" },
    ],
  },
  {
    id: "migraine",
    name: "Migraine / Headache",
    icon: "🤕",
    sub: "Frequent headaches & migraines",
    dosage: "Stay hydrated · eat meals on time to avoid trigger drops in sugar",
    stamp: "HEAD\nCARE",
    eat: [
      { e: "💧", t: "Plenty of water" },
      { e: "🥬", t: "Leafy greens (magnesium)" },
      { e: "🥜", t: "Almonds & seeds" },
      { e: "🍌", t: "Bananas" },
      { e: "🐟", t: "Fish (omega-3)" },
    ],
    avoid: [
      { e: "☕", t: "Excess caffeine / sudden withdrawal" },
      { e: "🍫", t: "Excess chocolate (for some people)" },
      { e: "🧀", t: "Aged cheese" },
      { e: "🍷", t: "Alcohol (esp. red wine)" },
      { e: "🍜", t: "Processed food with additives" },
    ],
  },
  {
    id: "sleep",
    name: "Insomnia / Sleep Issues",
    icon: "😴",
    sub: "Difficulty falling or staying asleep",
    dosage: "Light dinner 2-3 hrs before bed · warm milk can help some people",
    stamp: "SLEEP\nWELL",
    eat: [
      { e: "🥛", t: "Warm milk" },
      { e: "🍌", t: "Bananas" },
      { e: "🌾", t: "Whole grains (light dinner)" },
      { e: "🥜", t: "Almonds & walnuts" },
      { e: "🍵", t: "Chamomile/herbal tea" },
    ],
    avoid: [
      { e: "☕", t: "Caffeine after evening" },
      { e: "🍷", t: "Alcohol close to bedtime" },
      { e: "🍟", t: "Heavy/oily dinner" },
      { e: "🍫", t: "Chocolate late at night" },
    ],
  },
  {
    id: "pcos",
    name: "PCOS / PCOD",
    icon: "🌙",
    sub: "Hormonal imbalance in women",
    dosage: "Choose low-glycemic foods · maintain regular meal timing",
    stamp: "HORMONE\nBALANCE",
    eat: [
      { e: "🥦", t: "Leafy greens & vegetables" },
      { e: "🌾", t: "Millets & whole grains" },
      { e: "🐟", t: "Fish (omega-3)" },
      { e: "🫘", t: "Lentils & legumes" },
      { e: "🥜", t: "Nuts & seeds" },
      { e: "🍓", t: "Low-sugar fruits (berries)" },
    ],
    avoid: [
      { e: "🍬", t: "Sugar & sweets" },
      { e: "🍚", t: "White rice / refined carbs" },
      { e: "🥤", t: "Sugary drinks" },
      { e: "🍟", t: "Fried & processed food" },
    ],
  },
  {
    id: "asthma",
    name: "Asthma",
    icon: "🫁",
    sub: "Breathing difficulty, wheezing",
    dosage: "Include vitamin D and antioxidant-rich foods · avoid known triggers",
    stamp: "BREATHE\nEASY",
    eat: [
      { e: "🐟", t: "Fatty fish (omega-3)" },
      { e: "🍊", t: "Citrus fruits" },
      { e: "🥦", t: "Leafy green vegetables" },
      { e: "🫚", t: "Ginger" },
      { e: "🥜", t: "Nuts & seeds" },
    ],
    avoid: [
      { e: "🍟", t: "Fried food" },
      { e: "🥤", t: "Cold drinks (for some people)" },
      { e: "🧂", t: "Excess salty/processed food" },
      { e: "🍷", t: "Alcohol" },
    ],
  },
  {
    id: "gout",
    name: "Uric Acid / Gout",
    icon: "🦶",
    sub: "High uric acid, joint pain in toes/ankles",
    dosage: "Drink plenty of water · limit purine-rich foods",
    stamp: "LOW\nPURINE",
    eat: [
      { e: "💧", t: "Plenty of water" },
      { e: "🍒", t: "Cherries" },
      { e: "🥬", t: "Leafy vegetables (low purine)" },
      { e: "🥛", t: "Low-fat dairy" },
      { e: "🌾", t: "Whole grains" },
    ],
    avoid: [
      { e: "🍷", t: "Alcohol (esp. beer)" },
      { e: "🥩", t: "Red meat & organ meat" },
      { e: "🐟", t: "Excess seafood (sardines, shellfish)" },
      { e: "🥤", t: "Sugary drinks (fructose)" },
    ],
  },
  {
    id: "bones",
    name: "Bone Weakness / Osteoporosis",
    icon: "🦴",
    sub: "Weak bones, low bone density",
    dosage: "Take calcium with vitamin D · include some sunlight exposure",
    stamp: "BONE\nSTRONG",
    eat: [
      { e: "🥛", t: "Milk & dairy (calcium)" },
      { e: "🥦", t: "Broccoli & leafy greens" },
      { e: "🐟", t: "Fish with bones (sardines)" },
      { e: "🥜", t: "Nuts & seeds" },
      { e: "🍳", t: "Eggs (vitamin D)" },
    ],
    avoid: [
      { e: "☕", t: "Excess caffeine" },
      { e: "🧂", t: "Excess salt" },
      { e: "🥤", t: "Cola drinks" },
      { e: "🍷", t: "Excess alcohol" },
    ],
  },
  {
    id: "stress",
    name: "Stress & Mental Wellness",
    icon: "🧠",
    sub: "Stress, low mood, mental fatigue",
    dosage: "Eat regular balanced meals · avoid skipping breakfast",
    stamp: "MIND\nCALM",
    eat: [
      { e: "🐟", t: "Fatty fish (omega-3)" },
      { e: "🍫", t: "Dark chocolate (small amt.)" },
      { e: "🥜", t: "Nuts & seeds" },
      { e: "🍌", t: "Bananas" },
      { e: "🥬", t: "Leafy greens (folate)" },
      { e: "🍵", t: "Herbal tea" },
    ],
    avoid: [
      { e: "☕", t: "Excess caffeine" },
      { e: "🍬", t: "Excess sugar" },
      { e: "🍷", t: "Alcohol" },
      { e: "🍟", t: "Junk/processed food" },
    ],
  },
  {
    id: "fever",
    name: "Fever",
    icon: "🌡️",
    sub: "Body temperature rise, viral fever, weakness",
    dosage: "Drink fluids frequently · eat light, easily digestible food",
    stamp: "STAY\nHYDRATED",
    keywords: ["temperature", "viral fever", "body heat"],
    eat: [
      { e: "💧", t: "Water, ORS & coconut water" },
      { e: "🥣", t: "Warm soups & broths" },
      { e: "🍚", t: "Khichdi / plain rice-dal" },
      { e: "🍊", t: "Fruits (orange, watermelon)" },
      { e: "🫚", t: "Ginger-turmeric warm water" },
    ],
    avoid: [
      { e: "🍟", t: "Oily / fried food" },
      { e: "🍦", t: "Cold food & ice cream" },
      { e: "☕", t: "Caffeine & fizzy drinks" },
      { e: "🥓", t: "Heavy/spicy non-veg food" },
    ],
  },
  {
    id: "cough",
    name: "Cough & Sore Throat",
    icon: "😷",
    sub: "Cough, throat pain, irritation",
    dosage: "Warm fluids help soothe the throat · gargle with warm salt water",
    stamp: "THROAT\nSOOTHE",
    keywords: ["cold", "throat pain", "sore throat"],
    eat: [
      { e: "🍯", t: "Honey with warm water" },
      { e: "🫚", t: "Ginger tea" },
      { e: "🥣", t: "Warm soups" },
      { e: "🍊", t: "Vitamin C fruits" },
      { e: "🧄", t: "Garlic" },
    ],
    avoid: [
      { e: "🍦", t: "Cold drinks & ice cream" },
      { e: "🍟", t: "Fried/oily food" },
      { e: "🥤", t: "Carbonated drinks" },
      { e: "🌶️", t: "Very spicy food" },
    ],
  },
  {
    id: "vomiting",
    name: "Vomiting / Nausea",
    icon: "🤢",
    sub: "Nausea, upset stomach",
    dosage: "Sip fluids slowly · start with bland food once nausea eases",
    stamp: "SETTLE\nSTOMACH",
    keywords: ["nausea", "vomit", "motion sickness"],
    eat: [
      { e: "🫚", t: "Ginger tea/water" },
      { e: "🍚", t: "Plain rice / toast" },
      { e: "🍌", t: "Bananas" },
      { e: "💧", t: "ORS / electrolyte water" },
      { e: "🍵", t: "Mint tea" },
    ],
    avoid: [
      { e: "🍟", t: "Oily / fried food" },
      { e: "🥛", t: "Full-fat dairy" },
      { e: "🌶️", t: "Spicy food" },
      { e: "☕", t: "Caffeine" },
    ],
  },
  {
    id: "diarrhea",
    name: "Diarrhea / Loose Motion",
    icon: "🚻",
    sub: "Loose motions, stomach upset",
    dosage: "Replace fluids constantly · follow bland BRAT-style diet",
    stamp: "REHYDRATE",
    keywords: ["loose motion", "stomach upset"],
    eat: [
      { e: "💧", t: "ORS & coconut water" },
      { e: "🍌", t: "Bananas" },
      { e: "🍚", t: "Plain rice / khichdi" },
      { e: "🥣", t: "Curd (probiotic)" },
      { e: "🍞", t: "Plain toast" },
    ],
    avoid: [
      { e: "🍟", t: "Oily / spicy food" },
      { e: "🥛", t: "Milk (until recovered)" },
      { e: "🥤", t: "Carbonated & sugary drinks" },
      { e: "☕", t: "Caffeine" },
    ],
  },
  {
    id: "cholesterol",
    name: "High Cholesterol",
    icon: "🧬",
    sub: "High LDL / triglycerides",
    dosage: "Increase soluble fibre · replace saturated fat with unsaturated fat",
    stamp: "LOW\nLDL",
    eat: [
      { e: "🌾", t: "Oats & whole grains" },
      { e: "🐟", t: "Fatty fish (omega-3)" },
      { e: "🥜", t: "Nuts & seeds" },
      { e: "🫒", t: "Olive oil" },
      { e: "🍎", t: "Fruits with fibre (apple)" },
    ],
    avoid: [
      { e: "🧈", t: "Butter & ghee (excess)" },
      { e: "🍟", t: "Fried food" },
      { e: "🥓", t: "Red & processed meat" },
      { e: "🍰", t: "Bakery/pastry items" },
    ],
  },
  {
    id: "piles",
    name: "Piles / Constipation",
    icon: "🚽",
    sub: "Constipation, hemorrhoids",
    dosage: "High fibre + plenty of water helps ease bowel movement",
    stamp: "HIGH\nFIBRE",
    keywords: ["constipation", "hemorrhoids"],
    eat: [
      { e: "🌾", t: "Whole grains & bran" },
      { e: "🥦", t: "Vegetables & leafy greens" },
      { e: "🍎", t: "Fruits with skin (apple, pear)" },
      { e: "💧", t: "Plenty of water" },
      { e: "🥣", t: "Curd / yogurt" },
    ],
    avoid: [
      { e: "🍚", t: "Excess refined/white rice" },
      { e: "🧀", t: "Excess dairy/cheese" },
      { e: "🍟", t: "Fried & processed food" },
      { e: "🍬", t: "Low-fibre sweets" },
    ],
  },
  {
    id: "ulcer",
    name: "Gastric Ulcer / Acidity",
    icon: "🔥",
    sub: "Stomach acidity, ulcer pain",
    dosage: "Eat small frequent meals · avoid lying down right after eating",
    stamp: "GENTLE\nDIET",
    keywords: ["acidity", "gastric", "heartburn"],
    eat: [
      { e: "🥛", t: "Milk (cool, in moderation)" },
      { e: "🍌", t: "Bananas" },
      { e: "🥣", t: "Oats" },
      { e: "🥦", t: "Non-acidic vegetables" },
      { e: "🍚", t: "Plain rice" },
    ],
    avoid: [
      { e: "🌶️", t: "Spicy food" },
      { e: "☕", t: "Coffee & caffeine" },
      { e: "🍷", t: "Alcohol" },
      { e: "🍅", t: "Excess citrus/tomato" },
      { e: "🍟", t: "Fried & oily food" },
    ],
  },
  {
    id: "pregnancy",
    name: "Pregnancy Nutrition",
    icon: "🤰",
    sub: "General nutrition support during pregnancy",
    dosage: "Eat balanced, nutrient-dense meals · always follow your doctor's advice",
    stamp: "PRENATAL\nCARE",
    eat: [
      { e: "🥬", t: "Leafy greens (folate)" },
      { e: "🥚", t: "Eggs (protein)" },
      { e: "🥛", t: "Milk & dairy (calcium)" },
      { e: "🐟", t: "Cooked fish (low-mercury)" },
      { e: "🍊", t: "Fruits (vitamin C)" },
      { e: "🫘", t: "Lentils & legumes" },
    ],
    avoid: [
      { e: "🍷", t: "Alcohol" },
      { e: "☕", t: "Excess caffeine" },
      { e: "🍣", t: "Raw/undercooked fish or meat" },
      { e: "🧀", t: "Unpasteurized dairy" },
    ],
  },
  {
    id: "eyes",
    name: "Eye / Vision Health",
    icon: "👁️",
    sub: "Weak eyesight, eye strain",
    dosage: "Include vitamin A and antioxidant-rich foods regularly",
    stamp: "VISION\nCARE",
    eat: [
      { e: "🥕", t: "Carrots (vitamin A)" },
      { e: "🥬", t: "Spinach & leafy greens" },
      { e: "🥚", t: "Eggs" },
      { e: "🐟", t: "Fatty fish (omega-3)" },
      { e: "🍠", t: "Sweet potato" },
    ],
    avoid: [
      { e: "🍟", t: "Fried & junk food" },
      { e: "🍬", t: "Excess sugar" },
      { e: "🥤", t: "Sugary drinks" },
    ],
  },
  {
    id: "underweight",
    name: "Underweight / Weight Gain",
    icon: "📈",
    sub: "Low body weight, need healthy weight gain",
    dosage: "Eat calorie-dense, nutritious food frequently through the day",
    stamp: "HEALTHY\nGAIN",
    eat: [
      { e: "🥜", t: "Nuts & peanut butter" },
      { e: "🥑", t: "Avocado" },
      { e: "🍌", t: "Bananas" },
      { e: "🥛", t: "Full-fat milk" },
      { e: "🍗", t: "Protein-rich food (eggs, chicken/paneer)" },
      { e: "🌾", t: "Whole grains" },
    ],
    avoid: [
      { e: "🍟", t: "Empty-calorie junk food" },
      { e: "🥤", t: "Sugary drinks instead of meals" },
      { e: "🍬", t: "Relying only on sweets" },
    ],
  },
  {
    id: "uti",
    name: "UTI (Urinary Tract Infection)",
    icon: "💦",
    sub: "Urinary tract infection, burning sensation",
    dosage: "Drink plenty of water · urinate frequently, don't hold it in",
    stamp: "FLUSH\nOUT",
    eat: [
      { e: "💧", t: "Plenty of water" },
      { e: "🫐", t: "Cranberries/berries" },
      { e: "🥒", t: "Cucumber & watery vegetables" },
      { e: "🥥", t: "Coconut water" },
    ],
    avoid: [
      { e: "☕", t: "Caffeine" },
      { e: "🍷", t: "Alcohol" },
      { e: "🌶️", t: "Spicy food" },
      { e: "🍬", t: "Excess sugar" },
    ],
  },
  {
    id: "sinus",
    name: "Sinusitis",
    icon: "👃",
    sub: "Sinus congestion, blocked nose",
    dosage: "Warm fluids help clear congestion · steam inhalation also helps",
    stamp: "CLEAR\nSINUS",
    keywords: ["sinus", "congestion", "blocked nose"],
    eat: [
      { e: "🥣", t: "Warm soups" },
      { e: "🫚", t: "Ginger & turmeric tea" },
      { e: "🧄", t: "Garlic" },
      { e: "🍊", t: "Vitamin C fruits" },
      { e: "🌶️", t: "Mild spicy food (helps clear nose)" },
    ],
    avoid: [
      { e: "🥛", t: "Excess dairy (can thicken mucus)" },
      { e: "🍦", t: "Cold food & drinks" },
      { e: "🍟", t: "Fried & processed food" },
    ],
  },
  {
    id: "vitamind",
    name: "Vitamin D Deficiency",
    icon: "☀️",
    sub: "Low vitamin D, bone/muscle weakness",
    dosage: "Get sunlight exposure daily · include fortified/vitamin-D foods",
    stamp: "VIT-D\nBOOST",
    eat: [
      { e: "🐟", t: "Fatty fish (salmon, sardines)" },
      { e: "🍳", t: "Egg yolk" },
      { e: "🥛", t: "Fortified milk" },
      { e: "🍄", t: "Mushrooms" },
      { e: "☀️", t: "10-15 min sunlight daily" },
    ],
    avoid: [
      { e: "🍟", t: "Junk food replacing nutritious meals" },
      { e: "🥤", t: "Sugary drinks" },
    ],
  },
  {
    id: "b12",
    name: "Vitamin B12 Deficiency",
    icon: "🩸",
    sub: "Low B12, fatigue, weakness (common in vegetarians)",
    dosage: "Include B12 sources daily · vegetarians may need supplements (ask doctor)",
    stamp: "B12\nBOOST",
    eat: [
      { e: "🥚", t: "Eggs" },
      { e: "🥛", t: "Milk & dairy" },
      { e: "🧀", t: "Cheese & paneer" },
      { e: "🐟", t: "Fish (if non-veg)" },
      { e: "🥣", t: "Fortified cereals" },
    ],
    avoid: [
      { e: "🍷", t: "Excess alcohol (affects absorption)" },
      { e: "🍟", t: "Relying on processed food only" },
    ],
  },
  {
    id: "menstrual",
    name: "Menstrual Issues / PMS",
    icon: "🩷",
    sub: "Period cramps, PMS, irregular cycles",
    dosage: "Include iron & magnesium-rich food · stay hydrated during cycle",
    stamp: "CYCLE\nCARE",
    keywords: ["periods", "pms", "cramps"],
    eat: [
      { e: "🥬", t: "Leafy greens (iron)" },
      { e: "🍫", t: "Dark chocolate (magnesium)" },
      { e: "🫚", t: "Ginger tea (for cramps)" },
      { e: "🍌", t: "Bananas" },
      { e: "💧", t: "Warm water" },
    ],
    avoid: [
      { e: "🧂", t: "Excess salt (bloating)" },
      { e: "☕", t: "Excess caffeine" },
      { e: "🍬", t: "Excess sugar" },
      { e: "🍷", t: "Alcohol" },
    ],
  },
];

// ===== DOM refs =====
const select = document.getElementById("conditionSelect");
const chips = document.getElementById("conditionChips");
const rxArea = document.getElementById("rxArea");
const pageHome = document.getElementById("pageHome");
const pageSolution = document.getElementById("pageSolution");
const backHomeBtn = document.getElementById("backHomeBtn");

backHomeBtn.addEventListener("click", () => {
  pageSolution.classList.add("hidden");
  pageHome.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// populate dropdown + chips
const VISIBLE_CHIP_COUNT = 10;
let chipsExpanded = false;

CONDITIONS.forEach((c) => {
  const opt = document.createElement("option");
  opt.value = c.id;
  opt.textContent = `${c.icon}  ${c.name}`;
  select.appendChild(opt);
});

function renderChips() {
  chips.innerHTML = "";
  const list = chipsExpanded ? CONDITIONS : CONDITIONS.slice(0, VISIBLE_CHIP_COUNT);

  list.forEach((c) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.type = "button";
    chip.textContent = c.name;
    chip.dataset.id = c.id;
    chip.addEventListener("click", () => selectCondition(c.id));
    chips.appendChild(chip);
  });

  const remaining = CONDITIONS.length - VISIBLE_CHIP_COUNT;
  const moreBtn = document.getElementById("showMoreBtn");
  if (remaining > 0) {
    moreBtn.style.display = "inline-block";
    moreBtn.textContent = chipsExpanded ? "− Show less" : `+ ${remaining} more problems`;
  } else {
    moreBtn.style.display = "none";
  }
}

document.getElementById("showMoreBtn").addEventListener("click", () => {
  chipsExpanded = !chipsExpanded;
  renderChips();
  const activeId = select.value;
  if (activeId) {
    [...chips.children].forEach((ch) => {
      ch.classList.toggle("active", ch.dataset.id === activeId);
    });
  }
});

renderChips();

select.addEventListener("change", (e) => selectCondition(e.target.value));

// ===== SEARCH BOX: type a symptom, get the matching condition =====
const searchInput = document.getElementById("symptomSearch");
const searchBtn = document.getElementById("searchBtn");
const searchHint = document.getElementById("searchHint");

function findConditionByText(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  let match = CONDITIONS.find(
    (c) => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
  );
  if (match) return match;

  match = CONDITIONS.find((c) =>
    (c.keywords || []).some((k) => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()))
  );
  return match || null;
}

function runSearch() {
  const query = searchInput.value;
  const match = findConditionByText(query);

  if (match) {
    searchHint.textContent = `✓ Showing food solution for "${match.name}"`;
    searchHint.classList.add("ok");
    selectCondition(match.id);
  } else if (query.trim()) {
    searchHint.textContent = `No exact match found for "${query}". Try a term from the list below, e.g. "diabetes", "fever", "hair fall".`;
    searchHint.classList.remove("ok");
  }
}

searchBtn.addEventListener("click", runSearch);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") runSearch();
});

function selectCondition(id) {
  const cond = CONDITIONS.find((c) => c.id === id);
  if (!cond) return;

  select.value = id;

  const idx = CONDITIONS.findIndex((c) => c.id === id);
  if (idx >= VISIBLE_CHIP_COUNT && !chipsExpanded) {
    chipsExpanded = true;
    renderChips();
  }

  [...chips.children].forEach((ch) => {
    ch.classList.toggle("active", ch.dataset.id === id);
  });

  renderSlip(cond);

  // switch from Home page to Solution page
  pageHome.classList.add("hidden");
  pageSolution.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function foodListHTML(items, type) {
  const mark = type === "eat" ? "✓" : "✕";
  return items
    .map(
      (i) => `
      <li class="food-item">
        <span class="food-item__mark">${mark}</span>
        <span class="food-item__emoji">${i.e}</span>
        <span>${i.t}</span>
      </li>`
    )
    .join("");
}

function renderSlip(cond) {
  rxArea.innerHTML = `
    <div class="rx-slip">
      <div class="rx-slip__head">
        <div style="display:flex; gap:.9rem; align-items:flex-start;">
          <div class="rx-slip__icon">${cond.icon}</div>
          <div>
            <p class="rx-slip__condition">${cond.name}</p>
            <p class="rx-slip__sub">${cond.sub}</p>
          </div>
        </div>
        <div class="rx-slip__stamp">${cond.stamp}</div>
      </div>

      <div class="rx-slip__body">
        <div class="rx-col rx-col--eat">
          <p class="rx-col__label">Eat these</p>
          <ul class="food-list">${foodListHTML(cond.eat, "eat")}</ul>
        </div>
        <div class="rx-col rx-col--avoid">
          <p class="rx-col__label">Avoid these</p>
          <ul class="food-list">${foodListHTML(cond.avoid, "avoid")}</ul>
        </div>
      </div>

      <div class="rx-slip__foot">
        <span>℞</span>
        <span><strong>Dosage note:</strong> ${cond.dosage}</span>
      </div>
    </div>
  `;
}