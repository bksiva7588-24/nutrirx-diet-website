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
];

// ===== DOM refs =====
const select = document.getElementById("conditionSelect");
const chips = document.getElementById("conditionChips");
const rxArea = document.getElementById("rxArea");
const placeholder = document.getElementById("rxPlaceholder");

// populate dropdown + chips
CONDITIONS.forEach((c) => {
  const opt = document.createElement("option");
  opt.value = c.id;
  opt.textContent = `${c.icon}  ${c.name}`;
  select.appendChild(opt);

  const chip = document.createElement("button");
  chip.className = "chip";
  chip.type = "button";
  chip.textContent = c.name;
  chip.dataset.id = c.id;
  chip.addEventListener("click", () => selectCondition(c.id));
  chips.appendChild(chip);
});

select.addEventListener("change", (e) => selectCondition(e.target.value));

function selectCondition(id) {
  const cond = CONDITIONS.find((c) => c.id === id);
  if (!cond) return;

  select.value = id;
  [...chips.children].forEach((ch) => {
    ch.classList.toggle("active", ch.dataset.id === id);
  });

  renderSlip(cond);
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
  if (placeholder) placeholder.remove();

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