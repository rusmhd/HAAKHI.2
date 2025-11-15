// hadith-clusters.ts
// Granular clusters + semantic fingerprints for 34k hadiths

export interface Cluster {
  id: string;                 // e.g. "salah-times"
  title: string;              // human label
  keywords: string[];         // same type you already use
  examples: string[];         // 3-5 representative EN hadith snippets
}

// 1️⃣  Aqeedah
export const AQEEDAH_CLUSTERS: Cluster[] = [
  {
    id: "tawheed-essence",
    title: "Oneness of Allah & shirk",
    keywords: ["tawheed", "oneness", "shirk", "associate", "partner", "allah is one"],
    examples: [
      "Whoever says 'La ilaha illallah' sincerely...",
      "The worst sin is to associate partners with Allah..."
    ]
  },
  {
    id: "names-attributes",
    title: "Asma wa Sifaat",
    keywords: ["ar-rahman", "al-hakim", "attribute", "name", "merciful", "all-knowing"],
    examples: [
      "Allah has ninety-nine names...",
      "Allah is merciful to His servants..."
    ]
  },
  {
    id: "qadar",
    title: "Divine decree",
    keywords: ["qadar", "destiny", "decree", "written", "pen", "tablet"],
    examples: [
      "The first thing Allah created was the pen...",
      "Everything is by decree..."
    ]
  },
  {
    id: "prophets-infallible",
    title: "Prophets & their attributes",
    keywords: ["prophet", "messenger", "infallible", "miracle", "nuh", "ibrahim", "isa", "musa"],
    examples: [
      "The prophets are brothers in faith...",
      "I am the closest of people to Jesus son of Mary..."
    ]
  },
  {
    id: "angels",
    title: "Angels & their duties",
    keywords: ["jibril", "mikail", "angel", "malaika", "record", "wing"],
    examples: [
      "Jibril came to me in the form of a man...",
      "The angels lower their wings for the seeker of knowledge..."
    ]
  },
  {
    id: "books-revelation",
    title: "Divine books",
    keywords: ["quran", "injil", "tawrat", "zabur", "book", "revelation", "sent down"],
    examples: [
      "I have been given the Qur'an and something like it...",
      "The Torah was revealed to Moses..."
    ]
  },
  {
    id: "last-day",
    title: "Resurrection & Judgement",
    keywords: ["qiyamah", "resurrection", "scale", "mizan", "bridge", "sirat", "paradise", "hell"],
    examples: [
      "The sun will be brought near on the Day of Judgement...",
      "The bridge over Hell is thinner than a hair..."
    ]
  }
];

// 2️⃣  Ibaadah
export const IBADAH_CLUSTERS: Cluster[] = [
  { id: "salah-times",      title: "Prescribed prayers & times", keywords: ["fajr", "dhuhr", "asr", "maghrib", "isha", "time", "delay"], examples: ["Pray Zuhr when the shade is equal...", "The Prophet never missed the two rak'ahs before Fajr..."] },
  { id: "salah-congregation", title: "Congregation & rows", keywords: ["congregation", "jama'ah", "row", "imam", "mosque"], examples: ["Prayer in congregation is twenty-seven times better...", "Straighten your rows..."] },
  { id: "salah-sunnah",     title: "Voluntary & Sunnah prayers", keywords: ["sunnah prayer", "nafl", "witr", "taraweeh", "duha"], examples: ["Allah will build a house in Paradise for whoever prays twelve rak'ahs...", "The night prayer is two by two..."] },
  { id: "wudu-ghusl",       title: "Ablution & bathing", keywords: ["wudu", "ghusl", "tayammum", "wash", "impurity"], examples: ["When one of you makes wudu let him sniff water...", "Ghusl on Friday is obligatory..."] },
  { id: "ramadan-fasting",  title: "Ramadan & fasting rules", keywords: ["ramadan", "suhur", "iftar", "intention", "moon"], examples: ["Fast when you see the crescent...", "The Prophet broke his fast with dates..."] },
  { id: "zakah-calculation",title: "Zakah calculation & recipients", keywords: ["nisab", "2.5%", "poor", "needy", "collector"], examples: ["No zakah is due on property until a year passes...", "The poor have a right..."] },
  { id: "hajj-rituals",     title: "Hajj & Umrah rites", keywords: ["tawaf", "sa'i", "arafat", "jamarat", "ihram"], examples: ["Hajj is Arafah...", "When he came to the House he performed Tawaf..."] },
  { id: "quran-recitation", title: "Tajweed & recitation", keywords: ["tajweed", "recite", "verse", "surah", "hafiz"], examples: ["The best among you are those who learn the Qur'an and teach it...", "He who recites a letter gets ten rewards..."] },
  { id: "dhikr-adhkar",     title: "Daily remembrances", keywords: ["morning", "evening", "subhanallah", "astaghfirullah"], examples: ["Whoever says in the morning 'Sufficient for us is Allah...'", "One hundred times will have his sins removed..."] },
  { id: "dua-etiquette",    title: "Supplication manners", keywords: ["raise hands", "beg", "ask allah", "humility"], examples: ["The supplication is the essence of worship...", "Your Lord is shy to turn you away empty-handed..."] }
];

// 3️⃣  Muamalat
export const MUAMALAT_CLUSTERS: Cluster[] = [
  { id: "sales-contracts",  title: "Buying & selling", keywords: ["price", "goods", "defect", "return", "bargain"], examples: ["The seller and buyer have the option...", "Do not raise prices to outbid others..."] },
  { id: "riba-interest",    title: "Interest & usury", keywords: ["riba", "interest", "doubling", "forbidden"], examples: ["Avoid the seven destructive sins...", "Riba is seventy types..."] },
  { id: "partnership",      title: "Business partnerships", keywords: ["sharikah", "profit-sharing", "capital"], examples: ["Allah has allowed trade and forbidden riba...", "Partners differ, then the partnership is dissolved..."] },
  { id: "loans-debts",      title: "Debts & postponement", keywords: ["loan", "debt", "postpone", "hardship"], examples: ["Whoever gives respite to one in difficulty...", "The best of people is the one who pays his debt..."] },
  { id: "rent-services",    title: "Hiring & wages", keywords: ["wage", "hire", "worker", "salary"], examples: ["Give the worker his wages before his sweat dries...", "The Prophet hired a man as a guide..."] },
  { id: "inheritance",      title: "Faraid & wills", keywords: ["share", "heir", "will", "wasiyyah"], examples: ["Allah has given each heir his fixed share...", "No bequest to an heir..."] }
];

// 4️⃣  Family
export const FAMILY_CLUSTERS: Cluster[] = [
  { id: "marriage-nikah",   title: "Marriage contract", keywords: ["nikah", "bride", "groom", "dowry", "witness"], examples: ["A woman is married for four reasons...", "The marriage most blessed is the one with least expense..."] },
  { id: "spousal-rights",   title: "Husband & wife duties", keywords: ["intimacy", "maintenance", "kindness"], examples: ["The best of you is the one who is best to his wife...", "If I were to order anyone to prostrate..."] },
  { id: "divorce-iddah",    title: "Divorce & waiting period", keywords: ["talaq", "iddah", "khul", "revocable"], examples: ["The most hated lawful thing to Allah is divorce...", "Three then she is unlawful..."] },
  { id: "children-upbringing", title: "Raising children", keywords: ["child", "education", "adab", "discipline"], examples: ["Command your children to pray at seven...", "Be merciful to your children..."] },
  { id: "parents-duty",     title: "Rights of parents", keywords: ["mother", "father", "obey", "kindness"], examples: ["Paradise lies under the feet of mothers...", "The father is the middle gate of Paradise..."] },
  { id: "neighbors-rights", title: "Neighbor etiquette", keywords: ["neighbor", "harm", "gift"], examples: ["Gabriel kept advising me about neighbors...", "He is not a believer whose neighbor is unsafe..."] }
];

// 5️⃣  Akhlaq
export const AKHLAQ_CLUSTERS: Cluster[] = [
  { id: "truthfulness",     title: "Truth & lying", keywords: ["truth", "lie", "trustworthy", "false"], examples: ["Truthfulness leads to righteousness...", "The signs of a hypocrite are three..."] },
  { id: "patience-gratitude", title: "Sabr & shukr", keywords: ["patience", "sabr", "thank", "calamity"], examples: ["Amazing is the affair of the believer...", "If you give thanks I will give you more..."] },
  { id: "humility-pride",   title: "Kibr & humility", keywords: ["proud", "arrogant", "humble", "show-off"], examples: ["No one who has an atom's weight of pride...", "The Prophet was the most humble..."] },
  { id: "anger-forgiveness", title: "Controlling anger", keywords: ["anger", "forgive", "pardon", "restrain"], examples: ["The strong is not the one who overcomes people...", "Allah increases a servant who pardons..."] },
  { id: "backbiting-slander", title: "Ghibah & nameemah", keywords: ["backbite", "slander", "spy", "rumor"], examples: ["Do you know what backbiting is?...", "The worst of people are those pursued by gossip..."] },
  { id: "generosity-greed", title: "Spending & miserliness", keywords: ["generous", "stingy", "spend", "miser"], examples: ["The generous is near to Allah...", "What illness should I fear? The Prophet said: Miserliness..."] }
];

// 6️⃣  Halal & Haram
export const HALAL_HARAM_CLUSTERS: Cluster[] = [
  { id: "food-slaughter",   title: "Halal food & hunting", keywords: ["slaughter", "bismillah", "hunt", "pig"], examples: ["Eat what Allah's name has been mentioned over...", "The game of the sea is lawful..."] },
  { id: "alcohol-drugs",    title: "Intoxicants", keywords: ["wine", "khamr", "intoxicant", "beer"], examples: ["Every intoxicant is wine and every wine is haram...", "He who drinks wine in this world..."] },
  { id: "clothing-adornment", title: "Dress & gold/silk", keywords: ["silk", "gold", "hijab", "awrah"], examples: ["Gold and silk are permitted for women...", "The Prophet wore a silver ring..."] },
  { id: "images-statues",   title: "Pictures & idols", keywords: ["image", "statue", "photograph", "draw"], examples: ["The people who will receive the severest punishment...", "Angels do not enter a house in which there is a dog or images..."] },
  { id: "sexual-boundaries", title: "Zina & related", keywords: ["zina", "adultery", "gaze", "seclusion"], examples: ["The zina of the eyes is the gaze...", "No man should be alone with a woman..."] },
  { id: "gambling-chance",  title: "Maysir & games", keywords: ["dice", "gamble", "lottery", "bet"], examples: ["Wine, gambling, idols and divining arrows...", "He who plays dice is as if he dipped his hand in pork..."] }
];

// 7️⃣  Knowledge
export const KNOWLEDGE_CLUSTERS: Cluster[] = [
  { id: "seeking-knowledge", title: "Obligation & virtue", keywords: ["seek", "student", "study circle", "question"], examples: ["Seeking knowledge is an obligation...", "The excellence of a scholar over a worshipper..."] },
  { id: "teaching-adab",    title: "Teaching manners", keywords: ["teacher", "explain", "gentle", "repeat"], examples: ["The Prophet was sent as a teacher...", "Make things easy and do not make them hard..."] },
  { id: "writing-books",    title: "Writing & preserving", keywords: ["write", "book", "pen", "ink"], examples: ["Write for Abu Shah his share...", "The angels lower their wings for the seeker..."] },
  { id: "scholars-authority", title: "Following scholars", keywords: ["mufti", "fatwa", "imitate", "taqlid"], examples: ["The scholars are the heirs of the prophets...", "Ask the people of remembrance if you do not know..."] }
];

// 8️⃣  Jihad
export const JIHAD_CLUSTERS: Cluster[] = [
  { id: "jihad-nafs",       title: "Struggle against soul", keywords: ["lower gaze", "control desire", "temptation"], examples: ["The mujahid is he who strives against his soul...", "The strong is the one who controls himself..."] },
  { id: "dawah-invite",     title: "Calling to Islam", keywords: ["invite", "wisdom", "good example", "patience"], examples: ["Convey from me even an ayah...", "Call to the way of your Lord with wisdom..."] },
  { id: "defensive-battle", title: "Fighting aggressors", keywords: ["defend", "battle", "badr", "uhud"], examples: ["Fight in the way of Allah those who fight you...", "The Prophet prepared an army at Tabuk..."] },
  { id: "martyrdom",        title: "Shahadah & reward", keywords: ["shaheed", "martyrdom", "green birds"], examples: ["The martyr is forgiven at the first drop of blood...", "No one who enters Paradise wishes to return..."] }
];

// 9️⃣  Eschatology
export const ESCHATOLOGY_CLUSTERS: Cluster[] = [
  { id: "minor-signs",      title: "Minor signs", keywords: ["bare foot", "tall building", "time pass", "knowledge lost"], examples: ["The barefoot naked shepherds will compete...", "You will see the barefoot..."] },
  { id: "major-signs",      title: "Major signs", keywords: ["dajjal", "mahdi", "isa descend", "gog", "magog"], examples: ["There is no trial greater than Dajjal...", "Jesus son of Mary will descend..."] },
  { id: "death-grave",      title: "Death & questioning", keywords: ["death", "grave", "munkar", "nakir", "punishment"], examples: ["The grave is either a garden or a pit...", "When the believer is buried..."] },
  { id: "paradise-hell",    title: "Descriptions", keywords: ["jannah", "jahannam", "river", "fire", "reward"], examples: ["Allah has prepared for His righteous slaves...", "The fire is seventy times hotter..."] },
  { id: "resurrection",     title: "Raising & accounting", keywords: ["scale", "book", "deed", "sirat", "bridge"], examples: ["The scales will be set up...", "The bridge is thinner than a hair..."] }
];

// 🔟  Seerah
export const SEERAH_CLUSTERS: Cluster[] = [
  { id: "makki-revelation", title: "Early Meccan period", keywords: ["cave hira", "first revelation", "khadijah"], examples: ["Read in the name of your Lord...", "Wrap yourself up, O Muhammad..."] },
  { id: "hijrah-madinah",   title: "Migration & constitution", keywords: ["hijrah", "ansar", "muhajir", "constitution"], examples: ["If you aid Allah He will aid you...", "The Prophet built his mosque..."] },
  { id: "battles-expeditions", title: "Military campaigns", keywords: ["badr", "uhud", "khandaq", "khaybar"], examples: ["The angels helped at Badr...", "The trench took us thirty nights..."] },
  { id: "companions",       title: "Stories of Sahaba", keywords: ["abu bakr", "umar", "ali", "bilal"], examples: ["If Abu Bakr is weighed against the Ummah...", "Umar said: We are a people Allah honored..."] },
  { id: "miracles",         title: "Mu'jizaat", keywords: ["split moon", "water spring", "multiply food"], examples: ["The moon was split for the Prophet...", "A small amount of food fed many..."] },
  { id: "prophet-character", title: "His manners", keywords: ["smile", "gentle", "mercy", "forgive"], examples: ["The Prophet was the most generous...", "He never retaliated for himself..."] }
];

// 1️⃣1️⃣  Health
export const HEALTH_CLUSTERS: Cluster[] = [
  { id: "prophetic-medicine", title: "Natural remedies", keywords: ["black seed", "honey", "cupping", "hijama"], examples: ["In black seed is a cure for every disease...", "The best medicine is cupping..."] },
  { id: "hygiene-cleanliness", title: "Personal hygiene", keywords: ["miswak", "trim nail", "wash hand", "gargle"], examples: ["Were it not hard on my ummah I would order... miswak...", "Cleanliness is half of faith..."] },
  { id: "diet-moderation",  title: "Eating habits", keywords: ["third food", "third water", "third air", "moderation"], examples: ["The son of Adam fills no vessel worse...", "Eat and drink but be not excessive..."] },
  { id: "mental-wellbeing", title: "Anxiety & grief", keywords: ["worry", "anxiety", "grief", "sadness"], examples: ["If Allah loves a people He tries them...", "O Allah I seek refuge in You from anxiety..."] },
  { id: "plague-epidemic",  title: "Contagion & etiquette", keywords: ["plague", "contagion", "stay home", "infect"], examples: ["If you hear of a plague in a land do not enter...", "The plague is a mercy for the believer..."] }
];

// 1️⃣2️⃣  Governance
export const GOVERNANCE_CLUSTERS: Cluster[] = [
  { id: "rulers-justice",   title: "Just leadership", keywords: ["just ruler", "fair", "shepherd", "account"], examples: ["The just ruler will be on a pulpit of light...", "Each of you is a shepherd..."] },
  { id: "obedience-limits", title: "When to obey/disobey", keywords: ["obey ruler", "no obedience in sin"], examples: ["Hear and obey even if an Abyssinian slave...", "There is no obedience to the created..."] },
  { id: "shura-consultation", title: "Consultative decision", keywords: ["shura", "consult", "counsel", "advice"], examples: ["The matter is consultation...", "Whoever consults does not regret..."] },
  { id: "judges-witnesses", title: "Court & testimony", keywords: ["judge", "qadi", "witness", "testimony", "oath"], examples: ["Judges are three... two in Hell...", "The best witness is the one who testifies..."] }
];

// MASTER MAP --------------------------------------------------
export const CLUSTER_MAP: Record<string, Cluster[]> = {
  aqeedah: AQEEDAH_CLUSTERS,
  ibaadah: IBADAH_CLUSTERS,
  muamalat: MUAMALAT_CLUSTERS,
  family: FAMILY_CLUSTERS,
  akhlaq: AKHLAQ_CLUSTERS,
  "halal-haram": HALAL_HARAM_CLUSTERS,
  knowledge: KNOWLEDGE_CLUSTERS,
  jihad: JIHAD_CLUSTERS,
  eschatology: ESCHATOLOGY_CLUSTERS,
  seerah: SEERAH_CLUSTERS,
  health: HEALTH_CLUSTERS,
  governance: GOVERNANCE_CLUSTERS
};

// Flatten all clusters for easy access
export const ALL_CLUSTERS: Cluster[] = Object.values(CLUSTER_MAP).flat();

// Add the missing function that your script expects
export function bestClusterForHadith(text: string, _topK: number = 1): string | null {
  if (!text) return null;
  
  const lowerText = text.toLowerCase();
  let bestMatch: { id: string; score: number } | null = null;
  
  for (const cluster of ALL_CLUSTERS) {
    let score = 0;
    for (const keyword of cluster.keywords) {
      if (lowerText.includes(keyword.toLowerCase())) {
        score++;
      }
    }
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { id: cluster.id, score };
    }
  }
  
  return bestMatch?.id || null;
}