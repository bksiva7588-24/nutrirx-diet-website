// ===== DATA: each health condition with its food prescription =====
// Each food item has: e (emoji), t (title), w (why - short description shown on click)
const CONDITIONS = [
  {
    id: "heart",
    name: "Heart Problem",
    icon: "❤️",
    sub: "Coronary / cholesterol / blood pressure related heart issues",
    dosage: "Take oats or nuts every morning · limit salt to 1 tsp/day",
    stamp: "LOW\nSALT",
    eat: [
      { e: "🥣", t: "Oats & whole grains", w: "Rich in soluble fibre that helps lower bad cholesterol (LDL)." },
      { e: "🐟", t: "Fatty fish (salmon, sardines)", w: "High in omega-3 fatty acids that support heart rhythm and reduce inflammation." },
      { e: "🥑", t: "Avocado & olive oil", w: "Good (unsaturated) fats that help maintain healthy cholesterol levels." },
      { e: "🥜", t: "Almonds & walnuts", w: "Contain healthy fats and vitamin E that are good for blood vessels." },
      { e: "🥦", t: "Leafy greens & broccoli", w: "Packed with vitamins and antioxidants that support blood vessel health." },
      { e: "🫐", t: "Berries", w: "Rich in antioxidants that help reduce oxidative stress on the heart." },
    ],
    avoid: [
      { e: "🧂", t: "Excess salt / pickles", w: "Raises blood pressure, which puts extra strain on the heart." },
      { e: "🍟", t: "Fried & fast food", w: "High in trans fats that increase bad cholesterol and clog arteries." },
      { e: "🧈", t: "Butter & full-fat dairy", w: "High in saturated fat which can raise LDL cholesterol." },
      { e: "🥓", t: "Red & processed meat", w: "Linked to higher cholesterol and heart disease risk over time." },
      { e: "🍰", t: "Sugary bakery items", w: "Excess sugar contributes to weight gain and unhealthy cholesterol levels." },
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
      { e: "🥬", t: "Leafy vegetables", w: "Low in carbs and calories, helps keep blood sugar stable." },
      { e: "🫘", t: "Legumes & lentils (dal)", w: "High fibre and protein slow down sugar absorption into blood." },
      { e: "🌾", t: "Millets & brown rice", w: "Lower glycemic index than white rice, causes slower sugar spikes." },
      { e: "🥒", t: "Cucumber, bitter gourd", w: "Low glycemic foods that may help support healthy blood sugar." },
      { e: "🥚", t: "Eggs & lean protein", w: "Protein doesn't spike blood sugar and keeps you full longer." },
      { e: "🍏", t: "Apples, guava, berries", w: "Fruits with fibre that release sugar more slowly than juices." },
    ],
    avoid: [
      { e: "🍬", t: "Sweets & refined sugar", w: "Causes rapid spikes in blood sugar levels." },
      { e: "🥤", t: "Sugary/soft drinks", w: "Liquid sugar is absorbed very quickly, spiking glucose fast." },
      { e: "🍚", t: "White rice / white bread", w: "Refined carbs break down quickly into sugar in the body." },
      { e: "🍌", t: "Overripe bananas, mango (excess)", w: "Very ripe fruit has higher natural sugar content." },
      { e: "🍟", t: "Fried snacks", w: "High in unhealthy fats and often paired with refined carbs." },
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
      { e: "🍌", t: "Bananas (potassium)", w: "Potassium helps balance sodium levels and relax blood vessel walls." },
      { e: "🥛", t: "Low-fat dairy", w: "Provides calcium which is linked to healthier blood pressure levels." },
      { e: "🥗", t: "Fresh salads", w: "Low sodium and high in nutrients that support heart health." },
      { e: "🧄", t: "Garlic", w: "May help relax blood vessels and modestly lower blood pressure." },
      { e: "🍫", t: "Dark chocolate (small amt.)", w: "Contains flavonoids that may support healthy blood vessel function." },
      { e: "🫒", t: "Olive oil", w: "Healthy fat that supports overall cardiovascular health." },
    ],
    avoid: [
      { e: "🧂", t: "Salty & packaged food", w: "Sodium causes the body to retain water, raising blood pressure." },
      { e: "🥓", t: "Processed/cured meat", w: "Usually very high in hidden salt content." },
      { e: "☕", t: "Excess caffeine", w: "Can cause a temporary but noticeable spike in blood pressure." },
      { e: "🍷", t: "Alcohol", w: "Regular heavy drinking is linked to raised blood pressure." },
      { e: "🍜", t: "Instant noodles / soups", w: "Extremely high sodium content in the seasoning packets." },
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
      { e: "🥗", t: "Salads & raw vegetables", w: "Low calorie but high volume, helps you feel full." },
      { e: "🍎", t: "Whole fruits", w: "Natural fibre slows sugar absorption and satisfies sweet cravings." },
      { e: "🍗", t: "Grilled lean protein", w: "Protein keeps you fuller for longer, reducing overeating." },
      { e: "🥣", t: "High-fibre grains", w: "Digest slowly, keeping hunger away for longer periods." },
      { e: "💧", t: "Plenty of water", w: "Often mistaken for hunger; staying hydrated curbs unnecessary snacking." },
      { e: "🫘", t: "Sprouts & legumes", w: "High protein and fibre combination that supports fullness." },
    ],
    avoid: [
      { e: "🍔", t: "Fast food & burgers", w: "High in calories, unhealthy fats, and refined carbs." },
      { e: "🥤", t: "Sugary beverages", w: "Adds a lot of empty calories without any fullness." },
      { e: "🍕", t: "Cheese-heavy foods", w: "Dense in calories and saturated fat." },
      { e: "🍩", t: "Bakery & fried snacks", w: "Calorie-dense with little nutritional value." },
      { e: "🌙", t: "Late-night heavy meals", w: "Body burns fewer calories while resting, so excess gets stored." },
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
      { e: "🥬", t: "Spinach & leafy greens", w: "Good plant source of iron to help rebuild haemoglobin." },
      { e: "🫘", t: "Lentils & beans", w: "Rich in iron and protein, both needed for blood health." },
      { e: "🍊", t: "Citrus fruits (vitamin C)", w: "Vitamin C significantly boosts how much iron your body absorbs." },
      { e: "🥩", t: "Lean red meat (if non-veg)", w: "Contains highly absorbable heme iron." },
      { e: "🍳", t: "Eggs", w: "Good source of iron and protein for red blood cell production." },
      { e: "🥜", t: "Dates & nuts", w: "Natural source of iron and energy." },
    ],
    avoid: [
      { e: "☕", t: "Tea/coffee right after meals", w: "Tannins in tea/coffee block iron absorption from food." },
      { e: "🥤", t: "Carbonated drinks with meals", w: "Can interfere with mineral absorption during digestion." },
      { e: "🍞", t: "Excess refined/processed food", w: "Offers little iron or nutrients compared to whole foods." },
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
      { e: "🥣", t: "Curd / yogurt (probiotics)", w: "Good bacteria support healthy digestion and gut balance." },
      { e: "🍌", t: "Bananas", w: "Gentle on the stomach and easy to digest." },
      { e: "🌾", t: "Whole grains & fibre", w: "Fibre keeps the digestive system moving regularly." },
      { e: "🥒", t: "Cucumber & light vegetables", w: "High water content and easy on the gut." },
      { e: "💧", t: "Warm water", w: "Helps relax the digestive tract and ease bloating." },
      { e: "🫚", t: "Ginger", w: "Traditionally used to calm the stomach and reduce nausea." },
    ],
    avoid: [
      { e: "🌶️", t: "Very spicy / oily food", w: "Irritates the stomach lining and can trigger acidity." },
      { e: "☕", t: "Excess caffeine", w: "Can increase stomach acid production." },
      { e: "🥤", t: "Carbonated drinks", w: "Introduces extra gas that causes bloating." },
      { e: "🍕", t: "Heavy processed food", w: "Hard to digest and can slow down the gut." },
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
      { e: "🐟", t: "Fish & seafood (iodine)", w: "Iodine is essential for the thyroid gland to make hormones." },
      { e: "🥚", t: "Eggs (selenium & iodine)", w: "Selenium supports thyroid hormone conversion in the body." },
      { e: "🥜", t: "Brazil nuts (selenium)", w: "One of the richest natural sources of selenium." },
      { e: "🌾", t: "Whole grains", w: "Provide steady energy, useful when metabolism is slower." },
      { e: "🍊", t: "Fresh fruits", w: "Support overall nutrient intake and antioxidant levels." },
      { e: "🧀", t: "Dairy in moderation", w: "Provides iodine and calcium in a balanced diet." },
    ],
    avoid: [
      { e: "🥦", t: "Excess raw cabbage/broccoli", w: "Raw cruciferous vegetables in large amounts can interfere with iodine uptake." },
      { e: "🍞", t: "Excess soy products", w: "May interfere with thyroid hormone absorption in large amounts." },
      { e: "🍟", t: "Processed & fried food", w: "Can worsen weight gain linked to slow thyroid function." },
      { e: "🥤", t: "Sugary drinks", w: "Adds empty calories without supporting metabolism." },
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
      { e: "🍚", t: "White rice (as advised)", w: "Lower in potassium and phosphorus than many whole grains." },
      { e: "🥒", t: "Cucumber & cabbage", w: "Generally lower in potassium, easier on weakened kidneys." },
      { e: "🍎", t: "Apples & berries", w: "Lower-potassium fruit options compared to bananas or oranges." },
      { e: "🧄", t: "Garlic & herbs for flavour", w: "Adds taste without needing extra salt." },
      { e: "🥚", t: "Egg whites (controlled protein)", w: "Provides protein with less phosphorus than the yolk." },
    ],
    avoid: [
      { e: "🧂", t: "Salt & salty snacks", w: "Extra sodium is harder for damaged kidneys to filter out." },
      { e: "🍌", t: "Excess banana/orange (potassium)", w: "High potassium can build up dangerously with poor kidney function." },
      { e: "🥜", t: "Excess nuts (phosphorus)", w: "High phosphorus can be difficult for kidneys to filter." },
      { e: "🥤", t: "Cola drinks", w: "Contain hidden phosphorus additives." },
      { e: "🍟", t: "Processed & canned food", w: "Often loaded with sodium and preservatives." },
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
      { e: "🥬", t: "Leafy green vegetables", w: "Support liver detox processes with antioxidants and fibre." },
      { e: "🫐", t: "Berries & fruits", w: "Antioxidants help reduce oxidative stress on liver cells." },
      { e: "🌾", t: "Whole grains & oats", w: "Fibre helps reduce fat buildup associated with fatty liver." },
      { e: "☕", t: "Black coffee (moderate)", w: "Some studies link moderate coffee intake to better liver enzyme levels." },
      { e: "🐟", t: "Fish (omega-3)", w: "May help reduce liver fat and inflammation." },
      { e: "💧", t: "Plenty of water", w: "Supports the body's natural detoxification processes." },
    ],
    avoid: [
      { e: "🍷", t: "Alcohol", w: "Directly damages liver cells and worsens liver disease." },
      { e: "🍟", t: "Fried & fatty food", w: "Contributes directly to fat buildup in the liver." },
      { e: "🍬", t: "Sugary food & drinks", w: "Excess sugar is converted to fat and stored in the liver." },
      { e: "🧂", t: "Excess salt", w: "Can worsen fluid retention in liver disease." },
      { e: "🥓", t: "Red & processed meat", w: "High in saturated fat which strains the liver." },
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
      { e: "🐟", t: "Fatty fish (omega-3)", w: "Omega-3s are known to help reduce joint inflammation." },
      { e: "🫚", t: "Turmeric & ginger", w: "Contain natural compounds with anti-inflammatory properties." },
      { e: "🥦", t: "Leafy greens & broccoli", w: "Rich in antioxidants that help fight inflammation." },
      { e: "🥜", t: "Walnuts & flaxseeds", w: "Plant-based omega-3 source that supports joint health." },
      { e: "🍒", t: "Cherries & berries", w: "Contain compounds linked to reduced joint pain and inflammation." },
      { e: "🫒", t: "Olive oil", w: "Contains oleocanthal, which has anti-inflammatory effects." },
    ],
    avoid: [
      { e: "🍟", t: "Fried & processed food", w: "Can trigger or worsen inflammation in the body." },
      { e: "🍰", t: "Sugary desserts", w: "Excess sugar is linked to increased inflammatory markers." },
      { e: "🍞", t: "Refined flour products", w: "Can spike blood sugar and promote inflammation." },
      { e: "🥓", t: "Red & processed meat", w: "Associated with higher inflammation levels in some studies." },
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
      { e: "🥕", t: "Carrots & orange vegetables", w: "Vitamin A supports healthy skin cell turnover." },
      { e: "🍅", t: "Tomatoes", w: "Lycopene is an antioxidant that supports skin health." },
      { e: "🥑", t: "Avocado", w: "Healthy fats help keep skin hydrated and supple." },
      { e: "🫐", t: "Berries", w: "Antioxidants help protect skin cells from damage." },
      { e: "🥜", t: "Nuts & seeds (zinc)", w: "Zinc plays a role in skin healing and oil regulation." },
      { e: "💧", t: "Water", w: "Keeps skin hydrated and helps flush out toxins." },
    ],
    avoid: [
      { e: "🍬", t: "Sugary & processed food", w: "High glycemic foods are linked to increased breakouts." },
      { e: "🥛", t: "Excess dairy (for some people)", w: "Some people notice more breakouts with high dairy intake." },
      { e: "🍟", t: "Oily / fried food", w: "May contribute to excess oil production in the skin." },
      { e: "🥤", t: "Sugary drinks", w: "Spikes blood sugar which can trigger inflammation and acne." },
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
      { e: "🥚", t: "Eggs (protein & biotin)", w: "Hair is mostly protein, so eggs support hair structure directly." },
      { e: "🥬", t: "Spinach (iron)", w: "Iron deficiency is a common cause of hair thinning." },
      { e: "🐟", t: "Fish (omega-3)", w: "Nourishes hair follicles and supports scalp health." },
      { e: "🥜", t: "Nuts & seeds", w: "Provide zinc and healthy fats that support hair growth." },
      { e: "🍠", t: "Sweet potato (vitamin A)", w: "Vitamin A helps glands produce oil that keeps scalp healthy." },
      { e: "🫘", t: "Lentils & legumes", w: "Plant protein and iron support healthy hair growth." },
    ],
    avoid: [
      { e: "🍟", t: "Fried & junk food", w: "Offers little nutrition needed for hair growth." },
      { e: "🍬", t: "Excess sugar", w: "Can affect hormone balance linked to hair fall." },
      { e: "☕", t: "Excess caffeine", w: "May interfere with nutrient absorption in excess." },
      { e: "🥤", t: "Crash/fad diets", w: "Sudden nutrient deficiency is a common trigger for hair shedding." },
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
      { e: "🍊", t: "Citrus fruits (vitamin C)", w: "Vitamin C supports normal immune system function." },
      { e: "🫚", t: "Ginger & turmeric", w: "Traditionally used to support the body's natural defences." },
      { e: "🧄", t: "Garlic", w: "Contains compounds believed to support immune response." },
      { e: "🥣", t: "Warm soups", w: "Soothing, hydrating, and easy to digest when unwell." },
      { e: "🍯", t: "Honey (warm water)", w: "May help soothe throat irritation." },
      { e: "🥦", t: "Leafy greens", w: "Rich in vitamins that support overall immune health." },
    ],
    avoid: [
      { e: "🍦", t: "Cold drinks & ice cream", w: "Can aggravate throat irritation during cold/cough." },
      { e: "🍬", t: "Excess sugar", w: "Excess sugar may temporarily reduce immune cell effectiveness." },
      { e: "🍟", t: "Fried/oily food", w: "Hard to digest when the body is already fighting illness." },
      { e: "🥤", t: "Carbonated drinks", w: "Offer no nutritional support during recovery." },
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
      { e: "💧", t: "Plenty of water", w: "Dehydration is a common and easily fixable migraine trigger." },
      { e: "🥬", t: "Leafy greens (magnesium)", w: "Magnesium is linked to fewer migraine episodes." },
      { e: "🥜", t: "Almonds & seeds", w: "Good source of magnesium which may reduce headache frequency." },
      { e: "🍌", t: "Bananas", w: "Provide potassium and magnesium that support nerve function." },
      { e: "🐟", t: "Fish (omega-3)", w: "May help reduce the frequency of migraine attacks." },
    ],
    avoid: [
      { e: "☕", t: "Excess caffeine / sudden withdrawal", w: "Both too much caffeine and sudden withdrawal can trigger headaches." },
      { e: "🍫", t: "Excess chocolate (for some people)", w: "A known migraine trigger for some individuals." },
      { e: "🧀", t: "Aged cheese", w: "Contains tyramine, a known migraine trigger for some people." },
      { e: "🍷", t: "Alcohol (esp. red wine)", w: "Common trigger, especially red wine, for many migraine sufferers." },
      { e: "🍜", t: "Processed food with additives", w: "Additives like MSG are reported triggers for some people." },
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
      { e: "🥛", t: "Warm milk", w: "Contains tryptophan, which may support relaxation before sleep." },
      { e: "🍌", t: "Bananas", w: "Contain magnesium and potassium that help relax muscles." },
      { e: "🌾", t: "Whole grains (light dinner)", w: "Easier to digest at night than heavy, rich meals." },
      { e: "🥜", t: "Almonds & walnuts", w: "Contain melatonin-supporting nutrients." },
      { e: "🍵", t: "Chamomile/herbal tea", w: "Traditionally used to promote relaxation before bedtime." },
    ],
    avoid: [
      { e: "☕", t: "Caffeine after evening", w: "Stimulant effect can stay in the body for hours." },
      { e: "🍷", t: "Alcohol close to bedtime", w: "Disrupts sleep cycles even though it may cause drowsiness first." },
      { e: "🍟", t: "Heavy/oily dinner", w: "Takes longer to digest, which can disturb sleep." },
      { e: "🍫", t: "Chocolate late at night", w: "Contains caffeine that can interfere with falling asleep." },
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
      { e: "🥦", t: "Leafy greens & vegetables", w: "Low glycemic and nutrient-dense, supportive for hormone balance." },
      { e: "🌾", t: "Millets & whole grains", w: "Lower glycemic index helps manage insulin resistance in PCOS." },
      { e: "🐟", t: "Fish (omega-3)", w: "May help reduce inflammation linked to PCOS." },
      { e: "🫘", t: "Lentils & legumes", w: "High fibre and protein help stabilise blood sugar." },
      { e: "🥜", t: "Nuts & seeds", w: "Healthy fats support hormone regulation." },
      { e: "🍓", t: "Low-sugar fruits (berries)", w: "Provide nutrients without a large blood sugar spike." },
    ],
    avoid: [
      { e: "🍬", t: "Sugar & sweets", w: "Worsens insulin resistance, a core issue in PCOS." },
      { e: "🍚", t: "White rice / refined carbs", w: "High glycemic foods can worsen insulin resistance." },
      { e: "🥤", t: "Sugary drinks", w: "Rapid sugar spikes can worsen hormonal imbalance." },
      { e: "🍟", t: "Fried & processed food", w: "Linked to increased inflammation in PCOS." },
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
      { e: "🐟", t: "Fatty fish (omega-3)", w: "May help reduce airway inflammation." },
      { e: "🍊", t: "Citrus fruits", w: "Vitamin C is linked with better lung function in some studies." },
      { e: "🥦", t: "Leafy green vegetables", w: "Antioxidants may help support respiratory health." },
      { e: "🫚", t: "Ginger", w: "May help relax airway muscles slightly." },
      { e: "🥜", t: "Nuts & seeds", w: "Vitamin E in nuts may support lung health." },
    ],
    avoid: [
      { e: "🍟", t: "Fried food", w: "May increase inflammation that affects breathing." },
      { e: "🥤", t: "Cold drinks (for some people)", w: "Reported to trigger symptoms in some asthma sufferers." },
      { e: "🧂", t: "Excess salty/processed food", w: "Linked to worse asthma control in some studies." },
      { e: "🍷", t: "Alcohol", w: "Can trigger symptoms in sulfite-sensitive asthma patients." },
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
      { e: "💧", t: "Plenty of water", w: "Helps the kidneys flush out excess uric acid." },
      { e: "🍒", t: "Cherries", w: "Linked in some studies to lower uric acid and fewer gout flares." },
      { e: "🥬", t: "Leafy vegetables (low purine)", w: "Low in purines, which convert to uric acid in the body." },
      { e: "🥛", t: "Low-fat dairy", w: "May be linked to lower uric acid levels." },
      { e: "🌾", t: "Whole grains", w: "Low-purine energy source suitable for a gout-friendly diet." },
    ],
    avoid: [
      { e: "🍷", t: "Alcohol (esp. beer)", w: "Beer is especially high in purines and raises uric acid." },
      { e: "🥩", t: "Red meat & organ meat", w: "Very high in purines that break down into uric acid." },
      { e: "🐟", t: "Excess seafood (sardines, shellfish)", w: "High purine content can trigger gout flare-ups." },
      { e: "🥤", t: "Sugary drinks (fructose)", w: "Fructose is known to raise uric acid levels." },
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
      { e: "🥛", t: "Milk & dairy (calcium)", w: "Calcium is the main building block of bone tissue." },
      { e: "🥦", t: "Broccoli & leafy greens", w: "Good plant-based source of calcium and vitamin K." },
      { e: "🐟", t: "Fish with bones (sardines)", w: "Edible bones provide a concentrated calcium source." },
      { e: "🥜", t: "Nuts & seeds", w: "Provide magnesium which supports bone structure." },
      { e: "🍳", t: "Eggs (vitamin D)", w: "Vitamin D helps the body absorb calcium properly." },
    ],
    avoid: [
      { e: "☕", t: "Excess caffeine", w: "Very high intake can interfere with calcium absorption." },
      { e: "🧂", t: "Excess salt", w: "High sodium intake increases calcium loss through urine." },
      { e: "🥤", t: "Cola drinks", w: "Phosphoric acid may negatively affect bone density over time." },
      { e: "🍷", t: "Excess alcohol", w: "Interferes with the body's ability to absorb calcium." },
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
      { e: "🐟", t: "Fatty fish (omega-3)", w: "Omega-3s are linked to better mood regulation." },
      { e: "🍫", t: "Dark chocolate (small amt.)", w: "May help boost mood in small amounts." },
      { e: "🥜", t: "Nuts & seeds", w: "Magnesium in nuts is linked to reduced stress response." },
      { e: "🍌", t: "Bananas", w: "Support serotonin production which affects mood." },
      { e: "🥬", t: "Leafy greens (folate)", w: "Folate deficiency has been linked to low mood." },
      { e: "🍵", t: "Herbal tea", w: "The ritual and warmth can have a calming effect." },
    ],
    avoid: [
      { e: "☕", t: "Excess caffeine", w: "Can worsen anxiety and disrupt sleep, adding to stress." },
      { e: "🍬", t: "Excess sugar", w: "Sugar crashes can cause mood swings and irritability." },
      { e: "🍷", t: "Alcohol", w: "Can worsen mood problems and disrupt sleep quality." },
      { e: "🍟", t: "Junk/processed food", w: "Linked in studies to higher rates of low mood." },
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
      { e: "💧", t: "Water, ORS & coconut water", w: "Fever causes fluid loss through sweating, so rehydration is key." },
      { e: "🥣", t: "Warm soups & broths", w: "Easy to digest and helps replace lost fluids and salts." },
      { e: "🍚", t: "Khichdi / plain rice-dal", w: "Light on the stomach when appetite is low." },
      { e: "🍊", t: "Fruits (orange, watermelon)", w: "Provide hydration along with vitamins to support recovery." },
      { e: "🫚", t: "Ginger-turmeric warm water", w: "Traditionally used to soothe the body during fever." },
    ],
    avoid: [
      { e: "🍟", t: "Oily / fried food", w: "Hard to digest when the body is already weak." },
      { e: "🍦", t: "Cold food & ice cream", w: "Can be harsh on a sensitive throat and digestion during fever." },
      { e: "☕", t: "Caffeine & fizzy drinks", w: "Can worsen dehydration." },
      { e: "🥓", t: "Heavy/spicy non-veg food", w: "Difficult to digest when appetite and energy are low." },
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
      { e: "🍯", t: "Honey with warm water", w: "Coats and soothes an irritated throat." },
      { e: "🫚", t: "Ginger tea", w: "Has a warming effect that may ease throat irritation." },
      { e: "🥣", t: "Warm soups", w: "Warmth and moisture help loosen mucus and soothe the throat." },
      { e: "🍊", t: "Vitamin C fruits", w: "Support the immune system while recovering." },
      { e: "🧄", t: "Garlic", w: "Traditionally used to help support respiratory health." },
    ],
    avoid: [
      { e: "🍦", t: "Cold drinks & ice cream", w: "Cold temperatures can worsen throat irritation for some people." },
      { e: "🍟", t: "Fried/oily food", w: "Can irritate an already inflamed throat." },
      { e: "🥤", t: "Carbonated drinks", w: "Can cause throat irritation and coughing." },
      { e: "🌶️", t: "Very spicy food", w: "Can further irritate a sore throat." },
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
      { e: "🫚", t: "Ginger tea/water", w: "Well known for helping settle an upset stomach." },
      { e: "🍚", t: "Plain rice / toast", w: "Bland and easy on a sensitive stomach." },
      { e: "🍌", t: "Bananas", w: "Gentle on the stomach and replenishes lost potassium." },
      { e: "💧", t: "ORS / electrolyte water", w: "Replaces fluids and salts lost through vomiting." },
      { e: "🍵", t: "Mint tea", w: "May help calm nausea for some people." },
    ],
    avoid: [
      { e: "🍟", t: "Oily / fried food", w: "Hard to digest and can worsen nausea." },
      { e: "🥛", t: "Full-fat dairy", w: "Can be difficult to digest when the stomach is upset." },
      { e: "🌶️", t: "Spicy food", w: "Can irritate an already sensitive stomach." },
      { e: "☕", t: "Caffeine", w: "Can further irritate the stomach lining." },
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
      { e: "💧", t: "ORS & coconut water", w: "Critical for replacing fluids and electrolytes lost." },
      { e: "🍌", t: "Bananas", w: "Helps replace potassium and is gentle on digestion." },
      { e: "🍚", t: "Plain rice / khichdi", w: "Bland, low-fibre food that's easy to digest." },
      { e: "🥣", t: "Curd (probiotic)", w: "Good bacteria help restore healthy gut balance." },
      { e: "🍞", t: "Plain toast", w: "Bland and gentle on an irritated digestive system." },
    ],
    avoid: [
      { e: "🍟", t: "Oily / spicy food", w: "Can worsen intestinal irritation." },
      { e: "🥛", t: "Milk (until recovered)", w: "Can be harder to digest during an active stomach upset." },
      { e: "🥤", t: "Carbonated & sugary drinks", w: "Can worsen diarrhea and cause more fluid loss." },
      { e: "☕", t: "Caffeine", w: "Can stimulate the gut further and worsen symptoms." },
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
      { e: "🌾", t: "Oats & whole grains", w: "Soluble fibre binds to cholesterol and helps remove it." },
      { e: "🐟", t: "Fatty fish (omega-3)", w: "Helps lower triglycerides." },
      { e: "🥜", t: "Nuts & seeds", w: "Healthy fats help improve cholesterol balance." },
      { e: "🫒", t: "Olive oil", w: "Replacing saturated fat with this can lower LDL cholesterol." },
      { e: "🍎", t: "Fruits with fibre (apple)", w: "Pectin fibre helps lower cholesterol absorption." },
    ],
    avoid: [
      { e: "🧈", t: "Butter & ghee (excess)", w: "High in saturated fat that raises LDL cholesterol." },
      { e: "🍟", t: "Fried food", w: "Often high in trans fats, the worst type for cholesterol." },
      { e: "🥓", t: "Red & processed meat", w: "High saturated fat content raises bad cholesterol." },
      { e: "🍰", t: "Bakery/pastry items", w: "Often made with trans fats and refined sugar." },
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
      { e: "🌾", t: "Whole grains & bran", w: "High fibre softens stool and eases bowel movements." },
      { e: "🥦", t: "Vegetables & leafy greens", w: "Fibre adds bulk that helps move digestion along smoothly." },
      { e: "🍎", t: "Fruits with skin (apple, pear)", w: "Skin contains fibre that supports regular bowel movements." },
      { e: "💧", t: "Plenty of water", w: "Softens stool and prevents straining." },
      { e: "🥣", t: "Curd / yogurt", w: "Probiotics support healthy, regular digestion." },
    ],
    avoid: [
      { e: "🍚", t: "Excess refined/white rice", w: "Low in fibre, can contribute to constipation." },
      { e: "🧀", t: "Excess dairy/cheese", w: "Can be constipating for some people in excess." },
      { e: "🍟", t: "Fried & processed food", w: "Low fibre and can slow digestion." },
      { e: "🍬", t: "Low-fibre sweets", w: "Offers no fibre to support regular bowel movement." },
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
      { e: "🥛", t: "Milk (cool, in moderation)", w: "May temporarily coat and soothe the stomach lining." },
      { e: "🍌", t: "Bananas", w: "Low acid fruit that's gentle on the stomach." },
      { e: "🥣", t: "Oats", w: "Absorbs stomach acid and is gentle to digest." },
      { e: "🥦", t: "Non-acidic vegetables", w: "Easier on the stomach lining than acidic foods." },
      { e: "🍚", t: "Plain rice", w: "Bland and non-irritating to an inflamed stomach." },
    ],
    avoid: [
      { e: "🌶️", t: "Spicy food", w: "Can directly irritate an already inflamed stomach lining." },
      { e: "☕", t: "Coffee & caffeine", w: "Stimulates extra acid production." },
      { e: "🍷", t: "Alcohol", w: "Irritates and can worsen the stomach lining." },
      { e: "🍅", t: "Excess citrus/tomato", w: "High acidity can worsen ulcer discomfort." },
      { e: "🍟", t: "Fried & oily food", w: "Slows digestion and can worsen acidity." },
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
      { e: "🥬", t: "Leafy greens (folate)", w: "Folate is essential for healthy foetal development." },
      { e: "🥚", t: "Eggs (protein)", w: "Supports the growing baby's tissue development." },
      { e: "🥛", t: "Milk & dairy (calcium)", w: "Calcium supports the baby's developing bones." },
      { e: "🐟", t: "Cooked fish (low-mercury)", w: "Omega-3s support brain development, low-mercury fish are safest." },
      { e: "🍊", t: "Fruits (vitamin C)", w: "Supports immune health and iron absorption." },
      { e: "🫘", t: "Lentils & legumes", w: "Good plant protein and iron source during pregnancy." },
    ],
    avoid: [
      { e: "🍷", t: "Alcohol", w: "Can seriously harm foetal development at any amount." },
      { e: "☕", t: "Excess caffeine", w: "High intake is linked to pregnancy complications." },
      { e: "🍣", t: "Raw/undercooked fish or meat", w: "Risk of infections that can harm the baby." },
      { e: "🧀", t: "Unpasteurized dairy", w: "Risk of harmful bacteria that can affect pregnancy." },
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
      { e: "🥕", t: "Carrots (vitamin A)", w: "Vitamin A is essential for healthy vision." },
      { e: "🥬", t: "Spinach & leafy greens", w: "Lutein supports protection of the retina." },
      { e: "🥚", t: "Eggs", w: "Contain lutein and zeaxanthin that support eye health." },
      { e: "🐟", t: "Fatty fish (omega-3)", w: "Supports healthy tear production and retina function." },
      { e: "🍠", t: "Sweet potato", w: "Rich source of beta-carotene, converted to vitamin A." },
    ],
    avoid: [
      { e: "🍟", t: "Fried & junk food", w: "Offers little nutritional benefit for eye health." },
      { e: "🍬", t: "Excess sugar", w: "High sugar intake is linked to eye health issues over time." },
      { e: "🥤", t: "Sugary drinks", w: "Contributes to blood sugar issues that can affect vision long-term." },
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
      { e: "🥜", t: "Nuts & peanut butter", w: "Calorie-dense with healthy fats to support weight gain." },
      { e: "🥑", t: "Avocado", w: "High in healthy calories in a small serving." },
      { e: "🍌", t: "Bananas", w: "Easy way to add extra calories and energy." },
      { e: "🥛", t: "Full-fat milk", w: "Provides calories, protein, and calcium together." },
      { e: "🍗", t: "Protein-rich food (eggs, chicken/paneer)", w: "Protein helps build muscle mass, not just fat." },
      { e: "🌾", t: "Whole grains", w: "Provide steady calories and energy throughout the day." },
    ],
    avoid: [
      { e: "🍟", t: "Empty-calorie junk food", w: "Adds calories without the nutrients needed for healthy gain." },
      { e: "🥤", t: "Sugary drinks instead of meals", w: "Fills you up without proper nutrition." },
      { e: "🍬", t: "Relying only on sweets", w: "Not a sustainable or healthy way to gain weight." },
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
      { e: "💧", t: "Plenty of water", w: "Helps flush bacteria out of the urinary tract." },
      { e: "🫐", t: "Cranberries/berries", w: "May help prevent bacteria from sticking to the urinary tract." },
      { e: "🥒", t: "Cucumber & watery vegetables", w: "High water content supports flushing out infection." },
      { e: "🥥", t: "Coconut water", w: "Natural hydration that supports kidney and bladder function." },
    ],
    avoid: [
      { e: "☕", t: "Caffeine", w: "Can irritate the bladder further." },
      { e: "🍷", t: "Alcohol", w: "Can irritate the bladder and worsen symptoms." },
      { e: "🌶️", t: "Spicy food", w: "Can irritate the bladder lining." },
      { e: "🍬", t: "Excess sugar", w: "May feed bacteria and worsen infection." },
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
      { e: "🥣", t: "Warm soups", w: "Steam and warmth help loosen mucus and ease breathing." },
      { e: "🫚", t: "Ginger & turmeric tea", w: "Traditionally used to help clear nasal congestion." },
      { e: "🧄", t: "Garlic", w: "May have mild natural decongestant properties." },
      { e: "🍊", t: "Vitamin C fruits", w: "Supports the immune system while sinuses heal." },
      { e: "🌶️", t: "Mild spicy food (helps clear nose)", w: "Capsaicin can help temporarily clear nasal passages." },
    ],
    avoid: [
      { e: "🥛", t: "Excess dairy (can thicken mucus)", w: "Some people notice thicker mucus with dairy." },
      { e: "🍦", t: "Cold food & drinks", w: "Can worsen congestion for some people." },
      { e: "🍟", t: "Fried & processed food", w: "Can contribute to inflammation." },
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
      { e: "🐟", t: "Fatty fish (salmon, sardines)", w: "One of the few natural food sources of vitamin D." },
      { e: "🍳", t: "Egg yolk", w: "Contains a small but useful amount of vitamin D." },
      { e: "🥛", t: "Fortified milk", w: "Often fortified with vitamin D to support daily intake." },
      { e: "🍄", t: "Mushrooms", w: "Some varieties naturally contain vitamin D." },
      { e: "☀️", t: "10-15 min sunlight daily", w: "Sunlight triggers natural vitamin D production in skin." },
    ],
    avoid: [
      { e: "🍟", t: "Junk food replacing nutritious meals", w: "Displaces foods that could contribute to vitamin D intake." },
      { e: "🥤", t: "Sugary drinks", w: "Adds calories without supporting nutrient levels." },
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
      { e: "🥚", t: "Eggs", w: "One of the best vegetarian sources of vitamin B12." },
      { e: "🥛", t: "Milk & dairy", w: "Good regular source of B12 for vegetarians." },
      { e: "🧀", t: "Cheese & paneer", w: "Contains B12, useful for vegetarian diets." },
      { e: "🐟", t: "Fish (if non-veg)", w: "Excellent natural source of vitamin B12." },
      { e: "🥣", t: "Fortified cereals", w: "Often fortified with B12 for those with limited natural sources." },
    ],
    avoid: [
      { e: "🍷", t: "Excess alcohol (affects absorption)", w: "Can interfere with the body's ability to absorb B12." },
      { e: "🍟", t: "Relying on processed food only", w: "Rarely provides meaningful B12 content." },
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
      { e: "🥬", t: "Leafy greens (iron)", w: "Helps replace iron lost during menstrual bleeding." },
      { e: "🍫", t: "Dark chocolate (magnesium)", w: "Magnesium may help ease cramps and mood swings." },
      { e: "🫚", t: "Ginger tea (for cramps)", w: "Traditionally used to help ease period cramps." },
      { e: "🍌", t: "Bananas", w: "Potassium and vitamin B6 may help reduce bloating." },
      { e: "💧", t: "Warm water", w: "Helps relax muscles and can ease cramping." },
    ],
    avoid: [
      { e: "🧂", t: "Excess salt (bloating)", w: "Can worsen water retention and bloating during periods." },
      { e: "☕", t: "Excess caffeine", w: "Can worsen breast tenderness and irritability for some." },
      { e: "🍬", t: "Excess sugar", w: "Can worsen mood swings linked to PMS." },
      { e: "🍷", t: "Alcohol", w: "Can worsen mood and dehydration during the cycle." },
    ],
  },
];

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

// populate dropdown
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

// build one clickable food item (click to expand/collapse its "why" description)
function foodItemHTML(item, type) {
  const mark = type === "eat" ? "✓" : "✕";
  const why = item.w ? item.w : "No additional details available.";
  return `
    <li class="food-item" tabindex="0" role="button" aria-expanded="false">
      <div class="food-item__row">
        <span class="food-item__mark">${mark}</span>
        <span class="food-item__emoji">${item.e}</span>
        <span class="food-item__name">${item.t}</span>
        <span class="food-item__caret">▾</span>
      </div>
      <p class="food-item__desc">${why}</p>
    </li>`;
}

function foodListHTML(items, type) {
  return items.map((i) => foodItemHTML(i, type)).join("");
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

      <p class="rx-slip__tip">💡 Tap any food item below to see why it helps or hurts.</p>

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

  // attach click/keyboard toggle behaviour to each food item
  rxArea.querySelectorAll(".food-item").forEach((li) => {
    const toggle = () => {
      const isOpen = li.classList.toggle("open");
      li.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };
    li.addEventListener("click", toggle);
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
}
