const fourSubjectRequirement = "Physics + Chemistry + Mathematics + English (4 subjects) total marks";

const fourSubjectEngineeringMajors = (requiredMarks, durationYears = 5, degreePrefix = "B.E.") => [
  { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: `${degreePrefix}(Civil)`, subjectCombination: "4-subjects", requiredMarks, durationYears },
  { nameMy: "အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Electronic Engineering", code: `${degreePrefix}(Electronics)`, subjectCombination: "4-subjects", requiredMarks, durationYears },
  { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: `${degreePrefix}(Electrical Power)`, subjectCombination: "4-subjects", requiredMarks, durationYears },
  { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: `${degreePrefix}(Mechanical)`, subjectCombination: "4-subjects", requiredMarks, durationYears }
];

const createFourSubjectUniversity = ({
  id,
  nameMy,
  nameEn,
  locationMy,
  locationEn,
  type = "technology",
  icon = "👨🏼‍💻",
  requiredMarks = 240,
  majors = fourSubjectEngineeringMajors(requiredMarks),
  specialRequirements = `${fourSubjectRequirement} ${requiredMarks}+`
}) => ({
  id,
  nameMy,
  nameEn,
  requiredMarks,
  subjectCombination: "4-subjects",
  locationMy,
  locationEn,
  type,
  icon,
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements,
  majors
});

const additionalTechnologicalUniversities = [
  ["tu-monywa", "နည်းပညာတက္ကသိုလ် (မုံရွာ)", "Technological University (Monywa)", "မုံရွာမြို့", "Monywa"],
  ["tu-kalay", "နည်းပညာတက္ကသိုလ် (ကလေး)", "Technological University (Kalay)", "ကလေးမြို့", "Kalay"],
  ["tu-sagaing", "နည်းပညာတက္ကသိုလ် (စစ်ကိုင်း)", "Technological University (Sagaing)", "စစ်ကိုင်းမြို့", "Sagaing"],
  ["tu-kyaukse", "နည်းပညာတက္ကသိုလ် (ကျောက်ဆည်)", "Technological University (Kyaukse)", "ကျောက်ဆည်မြို့", "Kyaukse"],
  ["tu-meiktila", "နည်းပညာတက္ကသိုလ် (မိတ္ထီလာ)", "Technological University (Meiktila)", "မိတ္ထီလာမြို့", "Meiktila"],
  ["tu-yamethin", "နည်းပညာတက္ကသိုလ် (ရမည်းသင်း)", "Technological University (Yamethin)", "ရမည်းသင်းမြို့", "Yamethin"],
  ["tu-magway", "နည်းပညာတက္ကသိုလ် (မကွေး)", "Technological University (Magway)", "မကွေးမြို့", "Magway"],
  ["tu-pakokku", "နည်းပညာတက္ကသိုလ် (ပခုက္ကူ)", "Technological University (Pakokku)", "ပခုက္ကူမြို့", "Pakokku"],
  ["tu-taunggyi", "နည်းပညာတက္ကသိုလ် (တောင်ကြီး)", "Technological University (Taunggyi)", "တောင်ကြီးမြို့", "Taunggyi"],
  ["tu-loikaw", "နည်းပညာတက္ကသိုလ် (လွိုင်ကော်)", "Technological University (Loikaw)", "လွိုင်ကော်မြို့", "Loikaw"],
  ["tu-taungoo", "နည်းပညာတက္ကသိုလ် (တောင်ငူ)", "Technological University (Taungoo)", "တောင်ငူမြို့", "Taungoo"],
  ["tu-pyay", "ပြည်နည်းပညာတက္ကသိုလ်", "Pyay Technological University", "ပြည်မြို့", "Pyay"],
  ["tu-sittwe", "နည်းပညာတက္ကသိုလ် (စစ်တွေ)", "Technological University (Sittwe)", "စစ်တွေမြို့", "Sittwe"],
  ["tu-yangon-west", "ရန်ကုန်အနောက်ပိုင်းနည်းပညာတက္ကသိုလ်", "West Yangon Technological University", "ရန်ကုန်မြို့", "Yangon"],
  ["tu-hmawbi", "နည်းပညာတက္ကသိုလ် (မှော်ဘီ)", "Technological University (Hmawbi)", "မှော်ဘီမြို့", "Hmawbi"],
  ["tu-thanlyin", "နည်းပညာတက္ကသိုလ် (သန်လျင်)", "Technological University (Thanlyin)", "သန်လျင်မြို့", "Thanlyin"],
  ["tu-pathein", "နည်းပညာတက္ကသိုလ် (ပုသိမ်)", "Technological University (Pathein)", "ပုသိမ်မြို့", "Pathein"],
  ["tu-hinthada", "နည်းပညာတက္ကသိုလ် (ဟင်္သာတ)", "Technological University (Hinthada)", "ဟင်္သာတမြို့", "Hinthada"],
  ["tu-hpa-an", "နည်းပညာတက္ကသိုလ် (ဘားအံ)", "Technological University (Hpa-an)", "ဘားအံမြို့", "Hpa-an"],
  ["tu-mawlamyine", "နည်းပညာတက္ကသိုလ် (မော်လမြိုင်)", "Technological University (Mawlamyine)", "မော်လမြိုင်မြို့", "Mawlamyine"]
].map(([id, nameMy, nameEn, locationMy, locationEn]) =>
  createFourSubjectUniversity({ id, nameMy, nameEn, locationMy, locationEn })
);

const governmentTechnicalColleges = [
  ["gtc-shwebo", "အစိုးရနည်းပညာကောလိပ် (ရွှေဘို)", "Government Technical College (Shwebo)", "ရွှေဘိုမြို့", "Shwebo"],
  ["gtc-mandalay", "အစိုးရနည်းပညာကောလိပ် (မန္တလေး)", "Government Technical College (Mandalay)", "မန္တလေးမြို့", "Mandalay"],
  ["gtc-kyaukpadaung", "အစိုးရနည်းပညာကောလိပ် (ကျောက်ပန်းတောင်း)", "Government Technical College (Kyaukpadaung)", "ကျောက်ပန်းတောင်းမြို့", "Kyaukpadaung"],
  ["gtc-south-dagon", "အစိုးရနည်းပညာကောလိပ် (တောင်ဒဂုံ)", "Government Technical College (South Dagon)", "ရန်ကုန်မြို့", "Yangon"]
].map(([id, nameMy, nameEn, locationMy, locationEn]) =>
  createFourSubjectUniversity({
    id,
    nameMy,
    nameEn,
    locationMy,
    locationEn,
    type: "အစိုးရနည်းပညာကောလိပ်",
    icon: "🔧",
    majors: [
      { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.Tech(Civil)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 4 },
      { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: "B.Tech(Electrical Power)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 4 },
      { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.Tech(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  })
);

// Helper function for regular polytechnic universities (non-Naypyitaw)
const createRegularPolytechnicUniversity = ({ id, nameMy, nameEn, locationMy, locationEn }) => ({
  id,
  nameMy,
  nameEn,
  requiredMarks: 240,  // For engineering programs
  subjectCombination: "multiple",
  locationMy,
  locationEn,
  type: "polytechnic",
  icon: "🏭",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "အင်ဂျင်နီယာသင်တန်းများအတွက် ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၂၄၀)နှင့်အထက်။ ကွန်ပျူတာသိပ္ပံနှင့် နည်းပညာသင်တန်းများအတွက် စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက်။",
  majors: [
    // Engineering Programs - 4 subjects
    { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.E.(Civil)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 5 },
    { nameMy: "အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Electronic Engineering", code: "B.E.(Electronics)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 5 },
    { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: "B.E.(Electrical Power)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 5 },
    { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.E.(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 5 },
    // Computer Programs - 6 subjects
    { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
    { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
  ]
});

// ==================== NAYPYITAW STATE POLYTECHNIC UNIVERSITY ====================
const naypyitawPolytechnic = {
  id: "naypyitaw-polytechnic",
  nameMy: "Naypyitaw State Polytechnic University",
  nameEn: "Naypyitaw State Polytechnic University",
  requiredMarks: 300,
  subjectCombination: "multiple",
  locationMy: "နေပြည်တော်",
  locationEn: "Naypyitaw",
  type: "polytechnic",
  icon: "🏭",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "အင်ဂျင်နီယာနှင့် ဗိသုကာသင်တန်းများအတွက် ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၃၀၀)နှင့်အထက်။ ကွန်ပျူတာသိပ္ပံနှင့် နည်းပညာအတွက် စုစုပေါင်းရမှတ် (၄၅၀)နှင့်အထက် သို့မဟုတ် အင်္ဂလိပ်+သင်္ချာ (၁၄၀)နှင့်အထက်။",
  majors: [
    // ===== ENGINEERING & ARCHITECTURE PROGRAMS (4 subjects) =====
    { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.E.(Civil)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Electronic Engineering", code: "B.E.(Electronics)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: "B.E.(Electrical Power)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.E.(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "ကွန်ပျူတာအင်ဂျင်နီယာနှင့် သတင်းအချက်အလက်နည်းပညာ", nameEn: "Computer Engineering and Information Technology", code: "B.E.(CEIT)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "စိုက်ပျိုးရေးအင်ဂျင်နီယာ", nameEn: "Agricultural Engineering", code: "B.E.(Agricultural Engineering)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "ဗိသုကာပညာ", nameEn: "Architecture", code: "B.Arch.", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    
    // ===== COMPUTER SCIENCE PROGRAMS (6 subjects OR Eng+Math) =====
    { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့ (ပရိုဂရမ်အင်ဂျင်နီယာ)", nameEn: "Computer Science (Software Engineering)", code: "B.C.Sc.", subjectCombination: "6-subjects-or-2", requiredMarks: 450, alternativeRequiredMarks: 140, durationYears: 4 },
    { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့ (ဆက်သွယ်ရေးနှင့်ကွန်ရက်ပညာ)", nameEn: "Computer Technology (Computer Communication and Networks)", code: "B.C.Tech.", subjectCombination: "6-subjects-or-2", requiredMarks: 450, alternativeRequiredMarks: 140, durationYears: 4 }
  ]
};

const polytechnicEngineeringUniversities = [
  naypyitawPolytechnic,  // Add Naypyitaw here
  ...[
    ["polytechnic-myitkyina", "Polytechnic University (မြစ်ကြီးနား)", "Polytechnic University (Myitkyina)", "မြစ်ကြီးနားမြို့", "Myitkyina"],
    ["polytechnic-bhamo", "Polytechnic University (ဗန်းမော်)", "Polytechnic University (Bhamo)", "ဗန်းမော်မြို့", "Bhamo"],
    ["polytechnic-lashio", "Polytechnic University (လားရှိုး)", "Polytechnic University (Lashio)", "လားရှိုးမြို့", "Lashio"],
    ["polytechnic-kyaingtong", "Polytechnic University (ကျိုင်းတုံ)", "Polytechnic University (Kyaingtong)", "ကျိုင်းတုံမြို့", "Kyaingtong"],
    ["polytechnic-pinlon", "Polytechnic University (ပင်လုံ)", "Polytechnic University (Pinlon)", "ပင်လုံမြို့", "Pinlon"],
    ["polytechnic-maubin", "Polytechnic University (မအူပင်)", "Polytechnic University (Maubin)", "မအူပင်မြို့", "Maubin"],
    ["polytechnic-dawei", "Polytechnic University (ထားဝယ်)", "Polytechnic University (Dawei)", "ထားဝယ်မြို့", "Dawei"],
    ["polytechnic-myeik", "Polytechnic University (မြိတ်)", "Polytechnic University (Myeik)", "မြိတ်မြို့", "Myeik"]
  ].map(([id, nameMy, nameEn, locationMy, locationEn]) =>
    createRegularPolytechnicUniversity({ id, nameMy, nameEn, locationMy, locationEn })
  )
];

export const universities = [
  // ==================== 1. MEDICAL & DENTAL UNIVERSITIES ====================
  {
    id: "medicine-1-yangon",
    nameMy: "ဆေးတက္ကသိုလ်(၁)၊ ရန်ကုန်",
    nameEn: "University of Medicine 1, Yangon",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "ဆေး",
    icon: "💊",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ လူတွေ့/နှုတ်မေးစာမေးပွဲ အောင်မြင်ရမည်။",
    majors: [
      { nameMy: "ဆေးပညာ", nameEn: "Medicine", code: "MBBS", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 6 }
    ]
  },
  {
    id: "medicine-mandalay",
    nameMy: "ဆေးတက္ကသိုလ်၊ မန္တလေး",
    nameEn: "University of Medicine, Mandalay",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "ဆေး",
    icon: "💊",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ လူတွေ့/နှုတ်မေးစာမေးပွဲ အောင်မြင်ရမည်။",
    majors: [
      { nameMy: "ဆေးပညာ", nameEn: "Medicine", code: "MBBS", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 6 }
    ]
  },
  {
    id: "medicine-2-yangon",
    nameMy: "ဆေးတက္ကသိုလ်(၂)၊ ရန်ကုန်",
    nameEn: "University of Medicine 2, Yangon",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "ဆေး",
    icon: "💊",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ လူတွေ့/နှုတ်မေးစာမေးပွဲ အောင်မြင်ရမည်။",
    majors: [
      { nameMy: "ဆေးပညာ", nameEn: "Medicine", code: "MBBS", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 6 }
    ]
  },
  {
    id: "medicine-magway",
    nameMy: "ဆေးတက္ကသိုလ်၊ မကွေး",
    nameEn: "University of Medicine, Magway",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "မကွေးမြို့",
    locationEn: "Magway",
    type: "ဆေး",
    icon: "💊",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ လူတွေ့/နှုတ်မေးစာမေးပွဲ အောင်မြင်ရမည်။",
    majors: [
      { nameMy: "ဆေးပညာ", nameEn: "Medicine", code: "MBBS", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 6 }
    ]
  },
  {
    id: "medicine-taunggyi",
    nameMy: "ဆေးတက္ကသိုလ်၊ တောင်ကြီး",
    nameEn: "University of Medicine, Taunggyi",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "တောင်ကြီးမြို့",
    locationEn: "Taunggyi",
    type: "ဆေး",
    icon: "💊",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ လူတွေ့/နှုတ်မေးစာမေးပွဲ အောင်မြင်ရမည်။",
    majors: [
      { nameMy: "ဆေးပညာ", nameEn: "Medicine", code: "MBBS", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 6 }
    ]
  },
  {
    id: "dental-yangon",
    nameMy: "သွားဘက်ဆိုင်ရာဆေးတက္ကသိုလ်၊ ရန်ကုန်",
    nameEn: "University of Dental Medicine, Yangon",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "သွားဘက်ဆိုင်ရာ",
    icon: "🦷",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ အမျိုးသား ၆၀% / အမျိုးသမီး ၄၀%။ လူတွေ့/နှုတ်မေးစာမေးပွဲ အောင်မြင်ရမည်။",
    majors: [
      { nameMy: "သွားဘက်ဆိုင်ရာဆေးပညာ", nameEn: "Dental Medicine", code: "BDS", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 5 }
    ]
  },
  {
    id: "dental-mandalay",
    nameMy: "သွားဘက်ဆိုင်ရာဆေးတက္ကသိုလ်၊ မန္တလေး",
    nameEn: "University of Dental Medicine, Mandalay",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "သွားဘက်ဆိုင်ရာ",
    icon: "🦷",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ အမျိုးသား ၆၀% / အမျိုးသမီး ၄၀%။ လူတွေ့/နှုတ်မေးစာမေးပွဲ အောင်မြင်ရမည်။",
    majors: [
      { nameMy: "သွားဘက်ဆိုင်ရာဆေးပညာ", nameEn: "Dental Medicine", code: "BDS", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 5 }
    ]
  },

  // ==================== 2. PHARMACY & MEDICAL TECH & NURSING ====================
  {
    id: "pharmacy-yangon",
    nameMy: "ဆေးဝါးတက္ကသိုလ်၊ ရန်ကုန်",
    nameEn: "University of Pharmacy, Yangon",
    requiredMarks: 388,
    subjectCombination: "6-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "ဆေးဝါး",
    icon: "💊",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ် (နိုင်) ကိုင်ဆောင်ထားသူဖြစ်ရမည်။တရားဝင်သတ်မှတ်အမှတ်မရှိပါ။ လျှောက်ထားသူများ၏ စုစုပေါင်းအမှတ်အပေါ်မူတည်၍ ယှဉ်ပြိုင်ရွေးချယ်ခြင်းခံရမည်။",
    majors: [
      { nameMy: "ဆေးဝါးသိပ္ပံ", nameEn: "Pharmacy", code: "B.Pharm", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  },
  {
    id: "pharmacy-mandalay",
    nameMy: "ဆေးဝါးတက္ကသိုလ်၊ မန္တလေး",
    nameEn: "University of Pharmacy, Mandalay",
    requiredMarks: 388,
    subjectCombination: "6-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "ဆေးဝါး",
    icon: "💊",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ် (နိုင်) ကိုင်ဆောင်ထားသူဖြစ်ရမည်။ တရားဝင်သတ်မှတ်အမှတ်မရှိပါ။ လျှောက်ထားသူများ၏ စုစုပေါင်းအမှတ်အပေါ်မူတည်၍ ယှဉ်ပြိုင်ရွေးချယ်ခြင်းခံရမည်။",
    majors: [
      { nameMy: "ဆေးဝါးသိပ္ပံ", nameEn: "Pharmacy", code: "B.Pharm", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  },
  {
    id: "medical-tech-yangon",
    nameMy: "ဆေးဘက်ဆိုင်ရာနည်းပညာတက္ကသိုလ်၊ ရန်ကုန်",
    nameEn: "University of Medical Technology, Yangon",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "ဆေးဘက်ဆိုင်ရာနည်းပညာ",
    icon: "🔬",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ် (နိုင်) ကိုင်ဆောင်ထားသူဖြစ်ရမည်။ လျှောက်ထားသူများ၏ စုစုပေါင်းအမှတ်အပေါ်မူတည်၍ ယှဉ်ပြိုင်ရွေးချယ်ခြင်းခံရမည်",
    majors: [
      { nameMy: "ဆေးဘက်ဆိုင်ရာဓာတ်ခွဲနည်းပညာ", nameEn: "Medical Laboratory Technology", code: "B.Med.Tech", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
      { nameMy: "ဆေးဘက်ဆိုင်ရာဓာတ်မှန်နှင့် ပုံရိပ်ဖော်နည်းပညာ", nameEn: "Medical Imaging Technology", code: "B.Med.Tech", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
      { nameMy: "ဆေးဘက်ဆိုင်ရာ ခန္ဓာသန်စွမ်းမှုနည်းပညာ", nameEn: "Physiotherapy", code: "B.Med.Tech", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  },
  {
    id: "medical-tech-mandalay",
    nameMy: "ဆေးဘက်ဆိုင်ရာနည်းပညာတက္ကသိုလ်၊ မန္တလေး",
    nameEn: "University of Medical Technology, Mandalay",
    requiredMarks: 450,
    subjectCombination: "6-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "ဆေးဘက်ဆိုင်ရာနည်းပညာ",
    icon: "🔬",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ် (နိုင်) ကိုင်ဆောင်ထားသူဖြစ်ရမည်။လျှောက်ထားသူများ၏ စုစုပေါင်းအမှတ်အပေါ်မူတည်၍ ယှဉ်ပြိုင်ရွေးချယ်ခြင်းခံရမည်",
    majors: [
      { nameMy: "ဆေးဘက်ဆိုင်ရာနည်းပညာ", nameEn: "Medical Technology", code: "B.Med.Tech", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  },
  {
    id: "nursing-yangon",
    nameMy: "သူနာပြုတက္ကသိုလ်၊ ရန်ကုန်",
    nameEn: "University of Nursing, Yangon",
    requiredMarks: 424,
    subjectCombination: "6-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "သူနာပြု",
    icon: "🏥",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ အမျိုးသား ၁၀% / အမျိုးသမီး ၉၀%။  လျှောက်ထားသူများ၏ စုစုပေါင်းအမှတ်အပေါ်မူတည်၍ ယှဉ်ပြိုင်ရွေးချယ်ခြင်းခံရမည်",
    majors: [
      { nameMy: "သူနာပြုသိပ္ပံဘွဲ့ (ပုံမှန်)", nameEn: "Nursing Science (Generic)", code: "B.N.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  },
  {
    id: "nursing-mandalay",
    nameMy: "သူနာပြုတက္ကသိုလ်၊ မန္တလေး",
    nameEn: "University of Nursing, Mandalay",
    requiredMarks: 424,
    subjectCombination: "6-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "သူနာပြု",
    icon: "🏥",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ အမျိုးသား ၁၀% / အမျိုးသမီး ၉၀%။  လျှောက်ထားသူများ၏ စုစုပေါင်းအမှတ်အပေါ်မူတည်၍ ယှဉ်ပြိုင်ရွေးချယ်ခြင်းခံရမည်",
    majors: [
      { nameMy: "သူနာပြုသိပ္ပံဘွဲ့ (ပုံမှန်)", nameEn: "Nursing Science (Generic)", code: "B.N.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  },
  {
    id: "community-health-magway",
    nameMy: "အခြေခံကျန်းမာရေးတက္ကသိုလ်၊ မကွေး",
    nameEn: "University of Community Health, Magway",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "မကွေးမြို့",
    locationEn: "Magway",
    type: "အခြေခံကျန်းမာရေး",
    icon: "❤️",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "(ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ အမျိုးသား ၈၀% / အမျိုးသမီး ၂၀%။ တရားဝင်သတ်မှတ်အမှတ်မရှိပါ။ လျှောက်ထားသူများ၏ စုစုပေါင်းအမှတ်အပေါ်မူတည်၍ ယှဉ်ပြိုင်ရွေးချယ်ခြင်းခံရမည်။",
    majors: [
      { nameMy: "ကျန်းမာရေးသိပ္ပံဘွဲ့ (အခြေခံကျန်းမာရေး)", nameEn: "Community Health", code: "B.Comm.H", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  },
  {
    id: "traditional-medicine-mandalay",
    nameMy: "တိုင်းရင်းဆေးတက္ကသိုလ်၊ မန္တလေး",
    nameEn: "University of Traditional Medicine, Mandalay",
    requiredMarks: 380,
    subjectCombination: "6-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "တိုင်းရင်းဆေး",
    icon: "🌿",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "STEAMS-1 (ဓာတု၊ ရူပ၊ ဇီဝ) အောင်မြင်ရမည်။ နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ် (နိုင်) ကိုင်ဆောင်ထားသူဖြစ်ရမည်။ လျှောက်ထားသူများ၏ စုစုပေါင်းအမှတ်အပေါ်မူတည်၍ ယှဉ်ပြိုင်ရွေးချယ်ခြင်းခံရမည်။",
    majors: [
      { nameMy: "မြန်မာ့တိုင်းရင်းဆေးပညာဘွဲ့", nameEn: "Myanmar Traditional Medicine", code: "B.M.T.M", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 5 }
    ]
  },

  // ==================== INFORMATION TECHNOLOGY UNIVERSITY ====================
{
  id: "information-technology-university",
  nameMy: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်",
  nameEn: "University of Information Technology",
  requiredMarks: 450,
  subjectCombination: "6-subjects-or-2",
  locationMy: "ရန်ကုန်မြို့",
  locationEn: "Yangon",
  type: "သတင်းအချက်အလက်နည်းပညာ",
  icon: "💻",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "စုစုပေါင်းရမှတ် (၄၅၀)နှင့်အထက် သို့မဟုတ် (သင်္ချာ၊ ဓာတုဗေဒ၊ ရူပဗေဒ) ပါဝင်သော မည်သည့်ဘာသာတွဲကိုမဆို အောင်မြင်ရမည်။",
  alternativePath: { 
    requiredMarks: 450, 
    subjectCombination: "6-subjects", 
    label: "စုစုပေါင်း (၆ဘာသာ)" 
  },
  majors: [
    { 
      nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့ (ပရိုဂရမ်အင်ဂျင်နီယာ)", 
      nameEn: "Computer Science (Software Engineering)", 
      code: "B.C.Sc.(Software Engineering)", 
      subjectCombination: "6-subjects", 
      requiredMarks: 450, 
      durationYears: 4 
    },
    { 
      nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့ (အသိပညာအင်ဂျင်နီယာ)", 
      nameEn: "Computer Science (Knowledge Engineering)", 
      code: "B.C.Sc.(Knowledge Engineering)", 
      subjectCombination: "6-subjects", 
      requiredMarks: 450, 
      durationYears: 4 
    },
    { 
      nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့ (စီးပွားရေးသတင်းအချက်အလက်စနစ်)", 
      nameEn: "Computer Science (Business Information Systems)", 
      code: "B.C.Sc.(Business Information Systems)", 
      subjectCombination: "6-subjects", 
      requiredMarks: 450, 
      durationYears: 4 
    },
    { 
      nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့ (စွမ်းရည်မြင့်တွက်ချက်မှုပညာ)", 
      nameEn: "Computer Science (High Performance Computing)", 
      code: "B.C.Sc.(High Performance Computing)", 
      subjectCombination: "6-subjects", 
      requiredMarks: 450, 
      durationYears: 4 
    },
    { 
      nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့ (မြှပ်နှံထိန်းချုပ်စနစ်)", 
      nameEn: "Computer Technology (Embedded Systems)", 
      code: "B.C.Tech.(Embedded Systems)", 
      subjectCombination: "6-subjects", 
      requiredMarks: 450, 
      durationYears: 4 
    },
    { 
      nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့ (ဆက်သွယ်ရေးနှင့်ကွန်ရက်ပညာ)", 
      nameEn: "Computer Technology (Computer Communication and Networks)", 
      code: "B.C.Tech.(Computer Communication and Networks)", 
      subjectCombination: "6-subjects", 
      requiredMarks: 450, 
      durationYears: 4 
    },
    { 
      nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့ (ဆိုက်ဘာလုံခြုံရေးပညာ)", 
      nameEn: "Computer Technology (Cyber Security)", 
      code: "B.C.Tech.(Cyber Security)", 
      subjectCombination: "6-subjects", 
      requiredMarks: 450, 
      durationYears: 4 
    }
  ]
},

  // ==================== AEROSPACE AND AVIATION UNIVERSITY ====================
{
  id: "myanmar-aerospace-university",
  nameMy: "မြန်မာနိုင်ငံ လေကြောင်းနှင့် အာကာသပညာတက္ကသိုလ်",
  nameEn: "Myanmar Aerospace and Aviation University",
  requiredMarks: 280,
  subjectCombination: "4-subjects",
  locationMy: "မန္တလေးမြို့ (မိတ္ထီလာ)",
  locationEn: "Mandalay (Meiktila)",
  type: "လေကြောင်းနှင့် အာကာသပညာ",
  icon: "✈️",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "အင်္ဂလိပ်၊ သင်္ချာ၊ ရူပဗေဒ၊ ဓာတုဗေဒ (၄)ဘာသာ ပေါင်းရမှတ် (၂၈၀)နှင့်အထက်။ အမျိုးသား ၇၀% / အမျိုးသမီး ၃၀%။ ကျန်းမာရေးစစ်ဆေးမှု၊ လူတွေ့စစ်ဆေးမှု အောင်မြင်ရမည်။",
  genderRatio: "ကျား ၇၀% / မ ၃၀%",
  majors: [
    { 
      nameMy: "စက်နှင့်ပျံသန်းယာဉ်အင်ဂျင်နီယာ", 
      nameEn: "Propulsion and Flight Vehicles Engineering", 
      code: "B.E.(Aerospace-Propulsion and Flight Vehicles)", 
      subjectCombination: "4-subjects", 
      requiredMarks: 280, 
      durationYears: 5 
    },
    { 
      nameMy: "လေကြောင်းအီလက်ထရွန်နစ်အင်ဂျင်နီယာ", 
      nameEn: "Avionics Engineering", 
      code: "B.E.(Aerospace-Avionics)", 
      subjectCombination: "4-subjects", 
      requiredMarks: 280, 
      durationYears: 5 
    },
    { 
      nameMy: "လေကြောင်းလျှပ်စစ်နှင့် တိုင်းတာရေးအင်ဂျင်နီယာ", 
      nameEn: "Electrical Systems and Instrumentation Engineering", 
      code: "B.E.(Aerospace-Electrical Systems and Instrumentation)", 
      subjectCombination: "4-subjects", 
      requiredMarks: 280, 
      durationYears: 5 
    },
    { 
      nameMy: "လောင်စာနှင့်တွန်းကန်ပစ္စည်းအင်ဂျင်နီယာ", 
      nameEn: "Fuel and Propellant Engineering", 
      code: "B.E.(Aerospace-Fuel and Propellant)", 
      subjectCombination: "4-subjects", 
      requiredMarks: 280, 
      durationYears: 5 
    },
    { 
      nameMy: "အာကာသစနစ်အင်ဂျင်နီယာ", 
      nameEn: "Space Systems Engineering", 
      code: "B.E.(Aerospace-Space Systems)", 
      subjectCombination: "4-subjects", 
      requiredMarks: 280, 
      durationYears: 5 
    }
  ]
},

  // ==================== 3. TECHNOLOGICAL UNIVERSITIES ====================
  {
    id: "ytu",
    nameMy: "ရန်ကုန်နည်းပညာတက္ကသိုလ်",
    nameEn: "Yangon Technological University (YTU)",
    requiredMarks: 300,
    subjectCombination: "4-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "နည်းပညာ",
    icon: "👨🏼‍💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၃၀၀)နှင့်အထက်။ အမျိုးသား ၅၅% / အမျိုးသမီး ၄၅%။",
    majors: [
      { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.E.(Civil)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.E.(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: "B.E.(Electrical Power)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Electronic Engineering", code: "B.E.(Electronics)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "ကွန်ပျူတာအင်ဂျင်နီယာနှင့် သတင်းအချက်အလက်နည်းပညာ", nameEn: "Computer Engineering and IT", code: "B.E.(CEIT)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "မက်ချာထရောနစ်အင်ဂျင်နီယာ", nameEn: "Mechatronic Engineering", code: "B.E.(Mechatronics)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "ဗိသုကာပညာ", nameEn: "Architecture", code: "B.Arch.", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 }
    ]
  },
  {
    id: "mtu",
    nameMy: "မန္တလေးနည်းပညာတက္ကသိုလ်",
    nameEn: "Mandalay Technological University (MTU)",
    requiredMarks: 300,
    subjectCombination: "4-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "နည်းပညာ",
    icon: "👨🏼‍💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၃၀၀)နှင့်အထက်။",
    majors: [
      { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.E.(Civil)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.E.(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "ဇီဝနည်းပညာ", nameEn: "Biotechnology", code: "B.S.(Biotechnology)", subjectCombination: "4-subjects", requiredMarks: 260, durationYears: 4 }
    ]
  },
  {
    id: "tu-yadanabon-cyber",
    nameMy: "နည်းပညာတက္ကသိုလ် (ရတနာပုံဆိုက်ဘာစီးတီး)",
    nameEn: "Technological University (Yadanabon Cyber City)",
    requiredMarks: 300,
    subjectCombination: "4-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "နည်းပညာ",
    icon: "👨🏼‍💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၃၀၀)နှင့်အထက်။",
    majors: [
      { nameMy: "သတင်းအချက်အလက်နှင့် ဆက်သွယ်ရေးနည်းပညာ", nameEn: "ICT", code: "B.E.(ICT)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "ကွန်ပျူတာအင်ဂျင်နီယာ", nameEn: "Computer Engineering", code: "B.E.(CE)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 }
    ]
  },

  ...additionalTechnologicalUniversities,
  ...governmentTechnicalColleges,
  ...polytechnicEngineeringUniversities,

  // ==================== 4. COMPUTER UNIVERSITIES ====================
// ==================== 4. COMPUTER UNIVERSITIES ====================
  {
    id: "ucsy",
    nameMy: "ရန်ကုန်ကွန်ပျူတာတက္ကသိုလ်",
    nameEn: "University of Computer Studies, Yangon (UCSY)",
    requiredMarks: 450,
    subjectCombination: "6-subjects-or-2",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၄၅၀)+ သို့မဟုတ် အင်္ဂလိပ်+သင်္ချာ (၁၄၀)+",
    alternativePath: { requiredMarks: 140, subjectCombination: "2-subjects", label: "အင်္ဂလိပ် + သင်္ချာ" },
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 4 }
    ]
  },
  {
    id: "ucsm",
    nameMy: "မန္တလေးကွန်ပျူတာတက္ကသိုလ်",
    nameEn: "University of Computer Studies, Mandalay (UCSM)",
    requiredMarks: 430,
    subjectCombination: "6-subjects-or-2",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၄၃၀)+ သို့မဟုတ် အင်္ဂလိပ်+သင်္ချာ (၁၄၀)+",
    alternativePath: { requiredMarks: 140, subjectCombination: "2-subjects", label: "အင်္ဂလိပ် + သင်္ချာ" },
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 430, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 430, durationYears: 4 }
    ]
  },

  // ==================== 4b. REGIONAL COMPUTER UNIVERSITIES ====================
  // These universities require 320 marks (6-subjects total)
  {
    id: "cu-loikaw",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (လွိုင်ကော်)",
    nameEn: "Computer University (Loikaw)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "လွိုင်ကော်မြို့",
    locationEn: "Loikaw",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-kalay",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (ကလေး)",
    nameEn: "Computer University (Kalay)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "ကလေးမြို့",
    locationEn: "Kalay",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-hpa-an",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (ဘားအံ)",
    nameEn: "Computer University (Hpa-an)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "ဘားအံမြို့",
    locationEn: "Hpa-an",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-thaton",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (သထုံ)",
    nameEn: "Computer University (Thaton)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "သထုံမြို့",
    locationEn: "Thaton",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-sittwe",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (စစ်တွေ)",
    nameEn: "Computer University (Sittwe)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "စစ်တွေမြို့",
    locationEn: "Sittwe",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-taunggyi",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (တောင်ကြီး)",
    nameEn: "Computer University (Taunggyi)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "တောင်ကြီးမြို့",
    locationEn: "Taunggyi",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-mandalay-region",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (မန္တလေး)",
    nameEn: "Computer University (Mandalay Region)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-meiktila",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (မိတ္ထီလာ)",
    nameEn: "Computer University (Meiktila)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "မိတ္ထီလာမြို့",
    locationEn: "Meiktila",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-monywa",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (မုံရွာ)",
    nameEn: "Computer University (Monywa)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "မုံရွာမြို့",
    locationEn: "Monywa",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-magway",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (မကွေး)",
    nameEn: "Computer University (Magway)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "မကွေးမြို့",
    locationEn: "Magway",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-pakokku",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (ပခုက္ကူ)",
    nameEn: "Computer University (Pakokku)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "ပခုက္ကူမြို့",
    locationEn: "Pakokku",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-pyay",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (ပြည်)",
    nameEn: "Computer University (Pyay)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "ပြည်မြို့",
    locationEn: "Pyay",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-taungoo",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (တောင်ငူ)",
    nameEn: "Computer University (Taungoo)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "တောင်ငူမြို့",
    locationEn: "Taungoo",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-pathein",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (ပုသိမ်)",
    nameEn: "Computer University (Pathein)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "ပုသိမ်မြို့",
    locationEn: "Pathein",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  {
    id: "cu-hinthada",
    nameMy: "ကွန်ပျူတာတက္ကသိုလ် (ဟင်္သာတ)",
    nameEn: "Computer University (Hinthada)",
    requiredMarks: 320,
    subjectCombination: "6-subjects",
    locationMy: "ဟင်္သာတမြို့",
    locationEn: "Hinthada",
    type: "ကွန်ပျူတာ",
    icon: "💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက် ရရှိရမည်။",
    majors: [
      { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
      { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
    ]
  },
  

// ==================== 6. NAYPYITAW STATE ACADEMY ====================
{
  id: "naypyitaw-academy",
  nameMy: "Naypyitaw State Academy",
  nameEn: "Naypyitaw State Academy",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "နေပြည်တော်",
  locationEn: "Naypyitaw",
   type: "သိပ္ပံနှင့်ဝိဇ္ဇာ - နေပြည်တော်", 
  icon: "🏛️",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "နေပြည်တော်ရှိ နိုင်ငံ့ဝန်ထမ်းမိသားစုများနှင့် နေပြည်တော်ရှိ မြို့နယ် မှ ကျောင်းသားများကို ဦးစားပေးမည်။",
  majors: [
    // Arts Majors (B.A)
    { nameMy: "မြန်မာစာ", nameEn: "Myanmar", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အင်္ဂလိပ်စာ", nameEn: "English", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပထဝီဝင်", nameEn: "Geography", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သမိုင်း", nameEn: "History", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဒဿနိကေဗဒ", nameEn: "Philosophy", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "နိုင်ငံတကာဆက်ဆံရေးပညာ", nameEn: "International Relations", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စာကြည့်တိုက်နှင့် သုတပညာ", nameEn: "Library and Information Science", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သံတမန်ရေးရာ", nameEn: "Diplomacy", code: "B.A(Diplomacy)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Science Majors (B.Sc)
    { nameMy: "ဓာတုဗေဒ", nameEn: "Chemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရူပဗေဒ", nameEn: "Physics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သင်္ချာ", nameEn: "Mathematics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ကုန်ထုတ်ဓာတုဗေဒ", nameEn: "Industrial Chemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "နျူကလီးယားရူပဗေဒ", nameEn: "Nuclear Physics", code: "B.Sc(Nuclear Physics)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Law Majors
    { nameMy: "ဥပဒေပညာ", nameEn: "Law", code: "LLB", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 5 },
    { nameMy: "ဥပဒေပညာ", nameEn: "Law", code: "B.A(Law)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Economics Majors
    { nameMy: "စီးပွားရေးပညာ", nameEn: "Economics", code: "B.A(Economics)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးပညာ (ဘောဂဗေဒ)", nameEn: "Economics (Economics)", code: "B.Econ(Economics)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးပညာ (စာရင်းအင်းပညာ)", nameEn: "Economics (Statistics)", code: "B.Econ(Statistics)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ကုန်သွယ်ရေးပညာ", nameEn: "Commerce", code: "B.Com", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးလုပ်ငန်းစီမံခန့်ခွဲမှုပညာ", nameEn: "Business Administration", code: "BBA", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Tourism (Note: This may have higher requirement)
    { nameMy: "ခရီးသွားလုပ်ငန်းနှင့် ဧည့်ဝန်ဆောင်မှု စီမံခန့်ခွဲမှုပညာ", nameEn: "Tourism and Hospitality Management", code: "BTHM", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Sports
    { nameMy: "အားကစားပညာ", nameEn: "Sports Science", code: "B.Sc(Sports)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Social Work
    { nameMy: "လူမှုရေးပညာ", nameEn: "Social Work", code: "BSW", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},

// ==================== YANGON UNIVERSITY ====================
{
  id: "yangon-university",
  nameMy: "ရန်ကုန်တက္ကသိုလ်",
  nameEn: "University of Yangon",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့",
  locationEn: "Yangon",
  type: "သိပ္ပံနှင့်ဝိဇ္ဇာ - ရန်ကုန်",
  icon: "🏛️",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "တက္ကသိုလ်ဝင်စာမေးပွဲ အောင်မြင်ရမည်။",
  majors: [
    // Arts Majors (B.A)
    { nameMy: "မြန်မာစာ", nameEn: "Myanmar", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "မြန်မာမှုပညာ", nameEn: "Myanmar Studies", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အင်္ဂလိပ်စာ", nameEn: "English", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပထဝီဝင်", nameEn: "Geography", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပတ်ဝန်းကျင်ဆိုင်ရာ လေ့လာမှုပညာ", nameEn: "Environmental Studies", code: "B.ES", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သမိုင်း", nameEn: "History", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဒဿနိကေဗဒ", nameEn: "Philosophy", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စိတ်ပညာ", nameEn: "Psychology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အရှေ့တိုင်းပညာ", nameEn: "Oriental Studies", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "နိုင်ငံတကာဆက်ဆံရေးပညာ", nameEn: "International Relations", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "နိုင်ငံရေးသိပ္ပံ", nameEn: "Political Science", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "မနုဿဗေဒ", nameEn: "Anthropology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Archaeology
    { nameMy: "ရှေးဟောင်းသုတေသနပညာ", nameEn: "Archaeology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Library Science
    { nameMy: "စာကြည့်တိုက်နှင့် သုတပညာ", nameEn: "Library and Information Science", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Law
    { nameMy: "ဥပဒေပညာ", nameEn: "Law", code: "LLB", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 5 },
    
    // Science Majors (B.Sc)
    { nameMy: "ဓာတုဗေဒ", nameEn: "Chemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဇီဝဓာတုဗေဒ", nameEn: "Biochemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ကုန်ထုတ်ဓာတုဗေဒ", nameEn: "Industrial Chemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရူပဗေဒ", nameEn: "Physics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သင်္ချာ", nameEn: "Mathematics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သတ္တဗေဒ", nameEn: "Zoology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရုက္ခဗေဒ", nameEn: "Botany", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အဏုဇီဝဗေဒ", nameEn: "Microbiology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဘူမိဗေဒ", nameEn: "Geology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ကွန်ပျူတာသိပ္ပံ", nameEn: "Computer Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Fisheries
    { nameMy: "ငါးလုပ်ငန်းနှင့် ရေသတ္တဝါမွေးမြူရေးပညာ", nameEn: "Fisheries Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Environmental
    { nameMy: "ပတ်ဝန်းကျင်နှင့် ရေပညာ", nameEn: "Environmental and Water Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // GIS & Remote Sensing
    { nameMy: "ပထဝီဝင်သတင်းအချက်အလက်စနစ်နှင့် အာရုံခံမှု", nameEn: "Geographic Information Systems and Remote Sensing", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Engineering Physics
    { nameMy: "အင်ဂျင်နီယာပညာရပ်ဆိုင်ရာ ရူပဗေဒ", nameEn: "Engineering Physics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Applied Entomology
    { nameMy: "အသုံးချအင်းဆက်ဗေဒ", nameEn: "Applied Entomology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Environmental Science
    { nameMy: "ပတ်ဝန်းကျင်သိပ္ပံ", nameEn: "Environmental Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Food Science
    { nameMy: "အစားအစာသိပ္ပံ", nameEn: "Food Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},

// ==================== MANDALAY UNIVERSITY ====================
{
  id: "mandalay-university",
  nameMy: "မန္တလေးတက္ကသိုလ်",
  nameEn: "University of Mandalay",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "မန္တလေးမြို့",
  locationEn: "Mandalay",
   type: "သိပ္ပံနှင့်ဝိဇ္ဇာ - မန္တလေး",
  icon: "🏛️",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "တက္ကသိုလ်ဝင်စာမေးပွဲ အောင်မြင်ရမည်။",
  majors: [
    // Arts Majors (B.A)
    { nameMy: "မြန်မာစာ", nameEn: "Myanmar", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "မြန်မာမှုပညာ", nameEn: "Myanmar Studies", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အင်္ဂလိပ်စာ", nameEn: "English", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပထဝီဝင်", nameEn: "Geography", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပတ်ဝန်းကျင်ဆိုင်ရာ လေ့လာမှုပညာ", nameEn: "Environmental Studies", code: "B.ES", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သမိုင်း", nameEn: "History", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဒဿနိကေဗဒ", nameEn: "Philosophy", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စိတ်ပညာ", nameEn: "Psychology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အရှေ့တိုင်းပညာ", nameEn: "Oriental Studies", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "နိုင်ငံတကာဆက်ဆံရေးပညာ", nameEn: "International Relations", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "နိုင်ငံရေးသိပ္ပံ", nameEn: "Political Science", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "မနုဿဗေဒ", nameEn: "Anthropology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Archaeology
    { nameMy: "ရှေးဟောင်းသုတေသနပညာ", nameEn: "Archaeology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Law
    { nameMy: "ဥပဒေပညာ", nameEn: "Law", code: "LLB", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 5 },
    
    // Science Majors (B.Sc)
    { nameMy: "ဓာတုဗေဒ", nameEn: "Chemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဇီဝဓာတုဗေဒ", nameEn: "Biochemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ကုန်ထုတ်ဓာတုဗေဒ", nameEn: "Industrial Chemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရူပဗေဒ", nameEn: "Physics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သင်္ချာ", nameEn: "Mathematics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သတ္တဗေဒ", nameEn: "Zoology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရုက္ခဗေဒ", nameEn: "Botany", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အဏုဇီဝဗေဒ", nameEn: "Microbiology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဘူမိဗေဒ", nameEn: "Geology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ကွန်ပျူတာသိပ္ပံ", nameEn: "Computer Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Food Science
    { nameMy: "အစားအစာသိပ္ပံ", nameEn: "Food Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Cultural Heritage Tourism
    { nameMy: "ယဉ်ကျေးမှုအမွေအနှစ်ဆိုင်ရာ ခရီးသွားပညာ", nameEn: "Cultural Heritage Tourism", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Renewable Energy
    { nameMy: "ပြန်လည်ပြည့်ဖြိုးမြဲစွမ်းအင်", nameEn: "Renewable Energy", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},

 // ==================== 7. ECONOMICS UNIVERSITIES (စီးပွားရေးတက္ကသိုလ်များ) ====================

// Yangon University of Economics (Hlaing Campus)
{
  id: "yueco-hlaing",
  nameMy: "ရန်ကုန်စီးပွားရေးတက္ကသိုလ် (လှိုင်နယ်မြေ)",
  nameEn: "Yangon University of Economics (Hlaing Campus)",
  requiredMarks: 380,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့ (လှိုင်)",
  locationEn: "Yangon (Hlaing)",
  type: "စီးပွားရေး",
  icon: "💰",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "မည်သည့်ဘာသာတွဲကိုမဆို အောင်မြင်နိုင်သည်။ ကရင်ပြည်နယ်၊ တနင်္သာရီတိုင်းဒေသကြီး၊ ပဲခူးတိုင်းဒေသကြီး၊ မွန်ပြည်နယ်၊ ရခိုင်ပြည်နယ်၊ ရန်ကုန်တိုင်းဒေသကြီး၊ ဧရာဝတီတိုင်းဒေသကြီးမှ ကျောင်းသားများကို ဦးစားပေးသည်။",
  majors: [
    { nameMy: "စီးပွားရေးပညာ", nameEn: "Economics", code: "B.Econ(Eco)", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ပြည်သူ့အုပ်ချုပ်ရေးပညာ", nameEn: "Public Administration", code: "BPA", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ဖွံ့ဖြိုးရေးလေ့လာရေးပညာ", nameEn: "Development Studies", code: "B.DevS", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "စီးပွားရေးပညာ (စာရင်းအင်း)", nameEn: "Economics (Statistics)", code: "B.Econ(Stats)", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "လူဦးရေလေ့လာရေးပညာ", nameEn: "Population Studies", code: "BPS", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ကုန်သွယ်ရေးပညာ", nameEn: "Commerce", code: "B.Com", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "စာရင်းကိုင်ပညာ", nameEn: "Accounting", code: "B.Act", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "စီးပွားရေးလုပ်ငန်းစီမံခန့်ခွဲမှုပညာ", nameEn: "Business Administration", code: "BBA", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "အာမခံသိပ္ပံပညာ", nameEn: "Actuarial Science", code: "BAS", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 }
  ]
},

// Yangon University of Economics (Kamayut Campus)
{
  id: "yueco-kamayut",
  nameMy: "ရန်ကုန်စီးပွားရေးတက္ကသိုလ် (ကမာရွတ်နယ်မြေ)",
  nameEn: "Yangon University of Economics (Kamayut Campus)",
  requiredMarks: 380,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့ (ကမာရွတ်)",
  locationEn: "Yangon (Kamayut)",
  type: "စီးပွားရေး",
  icon: "💰",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "မည်သည့်ဘာသာတွဲကိုမဆို အောင်မြင်နိုင်သည်။",
  majors: [
    { nameMy: "စီးပွားရေးပညာ", nameEn: "Economics", code: "B.Econ(Eco)", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ပြည်သူ့အုပ်ချုပ်ရေးပညာ", nameEn: "Public Administration", code: "BPA", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ဖွံ့ဖြိုးရေးလေ့လာရေးပညာ", nameEn: "Development Studies", code: "B.DevS", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "စီးပွားရေးပညာ (စာရင်းအင်း)", nameEn: "Economics (Statistics)", code: "B.Econ(Stats)", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ကုန်သွယ်ရေးပညာ", nameEn: "Commerce", code: "B.Com", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "စာရင်းကိုင်ပညာ", nameEn: "Accounting", code: "B.Act", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "စီးပွားရေးလုပ်ငန်းစီမံခန့်ခွဲမှုပညာ", nameEn: "Business Administration", code: "BBA", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 }
  ]
},

// Monywa University of Economics
{
  id: "monywa-economics",
  nameMy: "မုံရွာစီးပွားရေးတက္ကသိုလ်",
  nameEn: "Monywa University of Economics",
  requiredMarks: 350,
  subjectCombination: "6-subjects",
  locationMy: "မုံရွာမြို့",
  locationEn: "Monywa",
  type: "စီးပွားရေး",
  icon: "💰",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "မည်သည့်ဘာသာတွဲကိုမဆို အောင်မြင်နိုင်သည်။ ကချင်ပြည်နယ်၊ ချင်းပြည်နယ်၊ စစ်ကိုင်းတိုင်းဒေသကြီး၊ ရှမ်းပြည်နယ်(မြောက်ပိုင်း)နှင့် မကွေးတိုင်းဒေသကြီး(ခရိုင်အချို့)မှ ကျောင်းသားများကို ဦးစားပေးသည်။",
  majors: [
    { nameMy: "စီးပွားရေးပညာ", nameEn: "Economics", code: "B.Econ(Economics)", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "ကုန်သွယ်ရေးပညာ", nameEn: "Commerce", code: "B.Com", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "စာရင်းကိုင်ပညာ", nameEn: "Accounting", code: "B.Act", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "စီးပွားရေးလုပ်ငန်းစီမံခန့်ခွဲမှုပညာ", nameEn: "Business Administration", code: "BBA", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "ကုန်သွယ်ရေးနှင့် ထောက်ပို့ဆောင်ရေး", nameEn: "Trade and Logistics", code: "B.Econ(Trade and Logistics)", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 }
  ]
},

// Meiktila University of Economics
{
  id: "meiktila-economics",
  nameMy: "မိတ္ထီလာစီးပွားရေးတက္ကသိုလ်",
  nameEn: "Meiktila University of Economics",
  requiredMarks: 350,
  subjectCombination: "6-subjects",
  locationMy: "မိတ္ထီလာမြို့",
  locationEn: "Meiktila",
  type: "စီးပွားရေး",
  icon: "💰",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "မည်သည့်ဘာသာတွဲကိုမဆို အောင်မြင်နိုင်သည်။ ကယားပြည်နယ်၊ မန္တလေးတိုင်းဒေသကြီး၊ ရှမ်းပြည်နယ်(တောင်ပိုင်း/အရှေ့ပိုင်း)နှင့် မကွေးတိုင်းဒေသကြီး(အချို့ခရိုင်များမှအပ)မှ ကျောင်းသားများကို ဦးစားပေးသည်။",
  majors: [
    { nameMy: "စီးပွားရေးပညာ", nameEn: "Economics", code: "B.Econ(Economics)", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "ကုန်သွယ်ရေးပညာ", nameEn: "Commerce", code: "B.Com", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "စာရင်းကိုင်ပညာ", nameEn: "Accounting", code: "B.Act", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "စီးပွားရေးလုပ်ငန်းစီမံခန့်ခွဲမှုပညာ", nameEn: "Business Administration", code: "BBA", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "ပြည်သူ့အုပ်ချုပ်ရေးပညာ", nameEn: "Public Administration", code: "BPA", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "စီးပွားရေးလုပ်ငန်းရှင်နှင့် စီမံခန့်ခွဲမှုပညာ", nameEn: "Entrepreneurship and Management", code: "BEM", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 }
  ]
},

// ==================== 9. FOREIGN LANGUAGE UNIVERSITIES ====================
{
  id: "yufl",
  nameMy: "ရန်ကုန်နိုင်ငံခြားဘာသာတက္ကသိုလ်",
  nameEn: "Yangon University of Foreign Languages (YUFL)",
  requiredMarks: 380,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့",
  locationEn: "Yangon",
  type: "နိုင်ငံခြားဘာသာ",
  icon: "🌍",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "အင်္ဂလိပ်ဘာသာအတွက် အင်္ဂလိပ်စာ (၆၀)မှတ်နှင့်အထက်။ English for Professional Communication အတွက် အင်္ဂလိပ်စာ (၆၅)မှတ်နှင့်အထက်။",
  majors: [
    { nameMy: "တရုတ်ဘာသာ", nameEn: "Chinese", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "အင်္ဂလိပ်ဘာသာ", nameEn: "English", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ပြင်သစ်ဘာသာ", nameEn: "French", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ဂျာမန်ဘာသာ", nameEn: "German", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ဂျပန်ဘာသာ", nameEn: "Japanese", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ကိုရီးယားဘာသာ", nameEn: "Korean", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ရုရှားဘာသာ", nameEn: "Russian", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "ထိုင်းဘာသာ", nameEn: "Thai", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "အင်္ဂလိပ်ဘာသာ (Professional Communication)", nameEn: "English for Professional Communication", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 },
    { nameMy: "အင်္ဂလိပ်ဘာသာ (Business Purposes)", nameEn: "English for Business Purposes", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 380, durationYears: 4 }
  ]
},

  // ==================== 10. EDUCATION UNIVERSITIES ====================
  {
    id: "yangon-education",
    nameMy: "ရန်ကုန်ပညာရေးတက္ကသိုလ်",
    nameEn: "Yangon University of Education",
    requiredMarks: 370,
    subjectCombination: "6-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "ပညာရေး",
    icon: "📚",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "သင်တန်းကာလ (၅)နှစ်။ ဘွဲ့ရပြီး (၅)နှစ် နိုင်ငံ့ဝန်ထမ်းအဖြစ် တာဝန်ထမ်းဆောင်ရန် ကတိပြုချက် လိုအပ်သည်။",
    majors: [
      { nameMy: "ပညာရေးဘွဲ့ (သိပ္ပံ)", nameEn: "B.Ed (Science)", code: "B.Ed", subjectCombination: "6-subjects", requiredMarks: 370, durationYears: 5 },
      { nameMy: "ပညာရေးဘွဲ့ (ဝိဇ္ဇာ)", nameEn: "B.Ed (Arts)", code: "B.Ed", subjectCombination: "6-subjects", requiredMarks: 370, durationYears: 5 }
    ]
  },
  {
    id: "sagaing-education",
    nameMy: "စစ်ကိုင်းပညာရေးတက္ကသိုလ်",
    nameEn: "Sagaing University of Education",
    requiredMarks: 370,
    subjectCombination: "6-subjects",
    locationMy: "စစ်ကိုင်းမြို့",
    locationEn: "Sagaing",
    type: "ပညာရေး",
    icon: "📚",
    officialWebsite: null,
    lastUpdated: "2025",
    majors: [
      { nameMy: "ပညာရေးဘွဲ့ (သိပ္ပံ)", nameEn: "B.Ed (Science)", code: "B.Ed", subjectCombination: "6-subjects", requiredMarks: 370, durationYears: 5 },
      { nameMy: "ပညာရေးဘွဲ့ (ဝိဇ္ဇာ)", nameEn: "B.Ed (Arts)", code: "B.Ed", subjectCombination: "6-subjects", requiredMarks: 370, durationYears: 5 }
    ]
  },

  // ==================== SPECIAL ADMISSION UNIVERSITIES (သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူသော တက္ကသိုလ်များ) ====================

// 1. National Management Degree College
{
  id: "national-management-degree-college",
  nameMy: "အမျိုးသားစီမံခန့်ခွဲမှုပညာဒီဂရီကောလိပ်",
  nameEn: "National Management Degree College",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့ (ဗိုလ်တထောင်မြို့နယ်)",
  locationEn: "Yangon (Botataung Township)",
  type: "အထူးဝင်ခွင့်",
  icon: "🎓",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ ကောလိပ်သို့ တိုက်ရိုက်လျှောက်ထားရမည်။",
  majors: [
    { nameMy: "စီးပွားရေးလုပ်ငန်းစီမံခန့်ခွဲမှုပညာ", nameEn: "Business Management", code: "BBM", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ခရီးသွားလုပ်ငန်းနှင့် ဧည့်ဝန်ဆောင်မှု စီမံခန့်ခွဲမှုပညာ", nameEn: "Tourism and Hospitality Management", code: "BTHM", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "လုပ်ငန်းခွင်သုံးအင်္ဂလိပ်စာ", nameEn: "English for Professional Purposes", code: "B.A(EPP)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သတင်းအတတ်ပညာ", nameEn: "Journalism", code: "B.A(Journalism)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးနှင့်ဘဏ္ဍာရေး", nameEn: "Economics and Finance", code: "BEF", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},

// 2. Mandalay University BTHM Program
{
  id: "mandalay-university-bthm",
  nameMy: "မန္တလာတက္ကသိုလ် (BTHM ဘွဲ့သင်တန်း)",
  nameEn: "Mandalay University (BTHM Program)",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "မန္တလေးမြို့",
  locationEn: "Mandalay",
  type: "အထူးဝင်ခွင့်",
  icon: "🏨",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် ဩဂုတ်လနှင့် စက်တင်ဘာလများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ တက္ကသိုလ်သို့ တိုက်ရိုက်လျှောက်ထားရမည်။",
  majors: [
    { nameMy: "ခရီးသွားလုပ်ငန်းနှင့် ဧည့်ဝန်ဆောင်မှု စီမံခန့်ခွဲမှုပညာ", nameEn: "Tourism and Hospitality Management", code: "BTHM", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},

// 3. Yezin Agricultural University
{
  id: "yezin-agricultural-university",
  nameMy: "ရေဆင်းစိုက်ပျိုးရေးတက္ကသိုလ်",
  nameEn: "Yezin Agricultural University",
  requiredMarks: 350,
  subjectCombination: "6-subjects",
  locationMy: "ရေဆင်းမြို့၊ နေပြည်တော်",
  locationEn: "Yezin, Naypyitaw",
  type: "အထူးဝင်ခွင့်",
  icon: "🌾",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "STEAMS-1 အောင်မြင်ရမည်။ သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ ကျန်းမာရေး(က)အဆင့်ရှိရမည်။",
  majors: [
    { nameMy: "စိုက်ပျိုးရေးသိပ္ပံဘွဲ့", nameEn: "Agricultural Science", code: "B.Agr.Sc", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 }
  ]
},

// 4. University of Veterinary Science, Yezin
{
  id: "veterinary-science-yezin",
  nameMy: "မွေးမြူရေးဆိုင်ရာဆေးတက္ကသိုလ်၊ ရေဆင်း",
  nameEn: "University of Veterinary Science, Yezin",
  requiredMarks: 400,
  subjectCombination: "6-subjects",
  locationMy: "ရေဆင်းမြို့၊ နေပြည်တော်",
  locationEn: "Yezin, Naypyitaw",
  type: "အထူးဝင်ခွင့်",
  icon: "🐄",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "STEAMS-1 အောင်မြင်ရမည်။ တိရစ္ဆာန်ဆေးပညာဘွဲ့(DVM)အတွက် ၄၀၀+၊ မွေးမြူရေးပညာဘွဲ့(BASc)အတွက် ၃၅၀+ လိုအပ်သည်။",
  majors: [
    { nameMy: "တိရစ္ဆာန်ဆေးပညာဘွဲ့", nameEn: "Veterinary Medicine", code: "DVM", subjectCombination: "6-subjects", requiredMarks: 400, durationYears: 5 },
    { nameMy: "မွေးမြူရေးပညာဘွဲ့", nameEn: "Animal Science", code: "BASc", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 }
  ]
},

// 5. Agriculture and Animal Science University, Maubin
{
  id: "agriculture-animal-science-maubin",
  nameMy: "စိုက်ပျိုးရေးနှင့် မွေးမြူရေးတက္ကသိုလ်၊ မအူပင်",
  nameEn: "University of Agriculture and Animal Science, Maubin",
  requiredMarks: 350,
  subjectCombination: "6-subjects",
  locationMy: "မအူပင်မြို့",
  locationEn: "Maubin",
  type: "အထူးဝင်ခွင့်",
  icon: "🌾",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "STEAMS-1 အောင်မြင်ရမည်။ သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ ဘွဲ့ရပြီးနောက် (၅)နှစ် နိုင်ငံ့ဝန်ထမ်းအဖြစ် တာဝန်ထမ်းဆောင်ရန် ကတိပြုချက်လိုအပ်သည်။",
  majors: [
    { nameMy: "စိုက်ပျိုးရေးသိပ္ပံဘွဲ့", nameEn: "Agricultural Science", code: "B.Agr.Sc", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 },
    { nameMy: "မွေးမြူရေးပညာဘွဲ့", nameEn: "Animal Science", code: "B.A.Sc", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 }
  ]
},

// 6. Forest and Environmental University, Yezin
{
  id: "forest-environmental-yezin",
  nameMy: "သစ်တောနှင့် ပတ်ဝန်းကျင်ဆိုင်ရာတက္ကသိုလ်၊ ရေဆင်း",
  nameEn: "University of Forestry and Environmental Studies, Yezin",
  requiredMarks: 350,
  subjectCombination: "6-subjects",
  locationMy: "ရေဆင်းမြို့၊ နေပြည်တော်",
  locationEn: "Yezin, Naypyitaw",
  type: "အထူးဝင်ခွင့်",
  icon: "🌲",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "STEAMS-1 အောင်မြင်ရမည်။ အမျိုးသား ၈၀% / အမျိုးသမီး ၂၀%။ ကျန်းမာရေးကောင်းမွန်ရမည်။",
  majors: [
    { nameMy: "သစ်တောသိပ္ပံဘွဲ့", nameEn: "Forestry", code: "B.Sc(Forestry)", subjectCombination: "6-subjects", requiredMarks: 350, durationYears: 4 }
  ]
},

// 7. Myanmar Institute of Information Technology (MIIT)
{
  id: "miit",
  nameMy: "မြန်မာသတင်းအချက်အလက်နည်းပညာတက္ကသိုလ် (MIIT)",
  nameEn: "Myanmar Institute of Information Technology (MIIT)",
  requiredMarks: 450,
  subjectCombination: "6-subjects",
  locationMy: "မန္တလေးမြို့",
  locationEn: "Mandalay",
  type: "အထူးဝင်ခွင့်",
  icon: "💻",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "STEAMS-1 သို့မဟုတ် STEAMS-2 အောင်မြင်ရမည်။ ဝင်ခွင့်စာမေးပွဲ (Computer-Based Exam) ဖြေဆိုရမည်။ စုစုပေါင်းရမှတ် ၄၀% + ဝင်ခွင့်စာမေးပွဲ ၆၀% ပေါင်း၍ ရွေးချယ်သည်။",
  majors: [
    { nameMy: "ကွန်ပျူတာသိပ္ပံနှင့် အင်ဂျင်နီယာ", nameEn: "Computer Science and Engineering", code: "B.E.(Hons)", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 5 },
    { nameMy: "အီလက်ထရွန်းနစ်နှင့် ဆက်သွယ်ရေးအင်ဂျင်နီယာ", nameEn: "Electronics and Communications Engineering", code: "B.E.(Hons)", subjectCombination: "6-subjects", requiredMarks: 450, durationYears: 5 }
  ]
},

// 8. Cooperative and Management Universities
{
  id: "cooperative-university-thanlyin",
  nameMy: "သမဝါယမနှင့် စီမံခန့်ခွဲမှုပညာတက္ကသိုလ် (သန်လျင်)",
  nameEn: "Cooperative and Management University (Thanlyin)",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "သန်လျင်မြို့",
  locationEn: "Thanlyin",
  type: "အထူးဝင်ခွင့်",
  icon: "🤝",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ မည်သည့်ဘာသာတွဲကိုမဆို အောင်မြင်နိုင်သည်။",
  majors: [
    { nameMy: "စီးပွားရေးသိပ္ပံဘွဲ့ (ဒေသဆိုင်ရာဖွံ့ဖြိုးမှုပညာ)", nameEn: "Regional Development", code: "B.BSc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးသိပ္ပံဘွဲ့ (စာရင်းကိုင်နှင့်ဘဏ္ဍာရေး)", nameEn: "Accounting and Finance", code: "B.BSc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးသိပ္ပံဘွဲ့ (အသုံးချစာရင်းအင်း)", nameEn: "Applied Statistics", code: "B.BSc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးသိပ္ပံဘွဲ့ (စျေးကွက်ဖော်ဆောင်ရေးစီမံခန့်ခွဲမှု)", nameEn: "Marketing Management", code: "B.BSc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးသိပ္ပံဘွဲ့ (လူမှုစီးပွားရေးလုပ်ငန်းစီမံခန့်ခွဲမှု)", nameEn: "Social Enterprise Management", code: "B.BSc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},
{
  id: "cooperative-university-sagaing",
  nameMy: "သမဝါယမနှင့် စီမံခန့်ခွဲမှုပညာတက္ကသိုလ် (စစ်ကိုင်း)",
  nameEn: "Cooperative and Management University (Sagaing)",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "စစ်ကိုင်းမြို့",
  locationEn: "Sagaing",
  type: "အထူးဝင်ခွင့်",
  icon: "🤝",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။",
  majors: [
    { nameMy: "စီးပွားရေးသိပ္ပံဘွဲ့ (ဒေသဆိုင်ရာဖွံ့ဖြိုးမှုပညာ)", nameEn: "Regional Development", code: "B.BSc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စီးပွားရေးသိပ္ပံဘွဲ့ (စာရင်းကိုင်နှင့်ဘဏ္ဍာရေး)", nameEn: "Accounting and Finance", code: "B.BSc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},

// 9. Cooperative Colleges
{
  id: "cooperative-college-mandalay",
  nameMy: "သမဝါယမကောလိပ် (မန္တလေး)",
  nameEn: "Cooperative College (Mandalay)",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "မန္တလေးမြို့",
  locationEn: "Mandalay",
  type: "အထူးဝင်ခွင့်",
  icon: "📜",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ ဒီပလိုမာသင်တန်း (၂)နှစ်။",
  majors: [
    { nameMy: "လူမှုစီးပွားရေးလုပ်ငန်းစီမံခန့်ခွဲမှုဒီပလိုမာ", nameEn: "Social Enterprise Management", code: "Dip.S.E.M", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 2 },
    { nameMy: "ဒေသဆိုင်ရာဖွံ့ဖြိုးမှုဒီပလိုမာ", nameEn: "Regional Development", code: "Dip.R.D", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 2 },
    { nameMy: "စီးပွားရေးလုပ်ငန်းစာရင်းကိုင်ဒီပလိုမာ", nameEn: "Business Accounting", code: "Dip.B.Acct", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 2 }
  ]
},
{
  id: "cooperative-college-phaunggyi",
  nameMy: "သမဝါယမကောလိပ် (ဖောင်ကြီး)",
  nameEn: "Cooperative College (Phaunggyi)",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "ဖောင်ကြီးမြို့",
  locationEn: "Phaunggyi",
  type: "အထူးဝင်ခွင့်",
  icon: "📜",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ ဒီပလိုမာသင်တန်း (၂)နှစ်။",
  majors: [
    { nameMy: "စီးပွားရေးလုပ်ငန်းစာရင်းကိုင်ဒီပလိုမာ", nameEn: "Business Accounting", code: "Dip.B.Acct", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 2 },
    { nameMy: "စျေးကွက်ဖော်ဆောင်ရေးစီမံခန့်ခွဲမှုဒီပလိုမာ", nameEn: "Marketing Management", code: "Dip.M.M", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 2 }
  ]
},

// 10. Lacquerware College, Bagan
{
  id: "lacquerware-college-bagan",
  nameMy: "ယွန်းပညာကောလိပ်၊ ပုဂံ",
  nameEn: "Lacquerware College, Bagan",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "ပုဂံမြို့",
  locationEn: "Bagan",
  type: "အထူးဝင်ခွင့်",
  icon: "🏺",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ ဒီပလိုမာသင်တန်း (၂)နှစ်။",
  majors: [
    { nameMy: "ယွန်းအတတ်ပညာဒီပလိုမာ", nameEn: "Lacquerware Technology", code: "Dip.L.T", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 2 }
  ]
},

// 11. National University of Arts and Culture (Yangon)
{
  id: "national-arts-culture-yangon",
  nameMy: "အမျိုးသားယဉ်ကျေးမှုနှင့် အနုပညာတက္ကသိုလ် (ရန်ကုန်)",
  nameEn: "National University of Arts and Culture (Yangon)",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့",
  locationEn: "Yangon",
  type: "အထူးဝင်ခွင့်",
  icon: "🎭",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် ဇွန်လနှင့် ဇူလိုင်လများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ လူတွေ့စစ်ဆေးမှုခံယူရမည်။",
  majors: [
    { nameMy: "ဂီတ", nameEn: "Music", code: "B.A(Music)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သဘင်", nameEn: "Dramatic Arts", code: "B.A(Dramatic Arts)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပန်းချီ", nameEn: "Painting", code: "B.A(Painting)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပန်းပု", nameEn: "Sculpture", code: "B.A(Sculpture)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရုပ်ရှင်နှင့် ပြဇာတ်", nameEn: "Cinema and Drama", code: "B.A(Cinema and Drama)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ယဉ်ကျေးမှု အမွေအနှစ် စီမံခန့်ခွဲမှုပညာ", nameEn: "Cultural Heritage Management", code: "B.A(Cultural Heritage Management)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},
{
  id: "national-arts-culture-mandalay",
  nameMy: "အမျိုးသားယဉ်ကျေးမှုနှင့် အနုပညာတက္ကသိုလ် (မန္တလေး)",
  nameEn: "National University of Arts and Culture (Mandalay)",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "မန္တလေးမြို့",
  locationEn: "Mandalay",
  type: "အထူးဝင်ခွင့်",
  icon: "🎭",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် ဇွန်လနှင့် ဇူလိုင်လများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။",
  majors: [
    { nameMy: "ဂီတ", nameEn: "Music", code: "B.A(Music)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သဘင်", nameEn: "Dramatic Arts", code: "B.A(Dramatic Arts)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပန်းချီ", nameEn: "Painting", code: "B.A(Painting)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပန်းပု", nameEn: "Sculpture", code: "B.A(Sculpture)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရုပ်ရှင်နှင့် ပြဇာတ်", nameEn: "Cinema and Drama", code: "B.A(Cinema and Drama)", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},

// 12. Myanmar Maritime University
{
  id: "myanmar-maritime-university",
  nameMy: "မြန်မာနိုင်ငံ ရေကြောင်းပညာတက္ကသိုလ်",
  nameEn: "Myanmar Maritime University",
  requiredMarks: 420,
  subjectCombination: "6-subjects",
  locationMy: "သန်လျင်မြို့",
  locationEn: "Thanlyin",
  type: "ရေကြောင်းပညာ",
  icon: "🚢",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "သတင်းစာများတွင် သီးခြားကြော်ငြာခေါ်ယူပါသည်။ STEAMS-1 သို့မဟုတ် STEAMS-2 အောင်မြင်ရမည်။ အမျိုးသမီး ၂၀% သာ လက်ခံမည်။ ကျန်းမာရေးစစ်ဆေးမှုခံယူရမည်။ သင်တန်းကာလ (၅)နှစ်။",
  majors: [
    { nameMy: "ရေယာဉ်တည်ဆောက်မှုအင်ဂျင်နီယာ", nameEn: "Naval Architecture", code: "B.E(NA)", subjectCombination: "6-subjects", requiredMarks: 420, durationYears: 5 },
    { nameMy: "ရေကြောင်းအင်ဂျင်နီယာ", nameEn: "Marine Engineering", code: "B.E(ME)", subjectCombination: "6-subjects", requiredMarks: 420, durationYears: 5 },
    { nameMy: "ဆိပ်ကမ်းအင်ဂျင်နီယာ", nameEn: "Port and Harbour Engineering", code: "B.E(PH)", subjectCombination: "6-subjects", requiredMarks: 420, durationYears: 5 },
    { nameMy: "မြစ်ချောင်းနှင့်ကမ်းရိုးတန်းအင်ဂျင်နီယာ", nameEn: "River and Coastal Engineering", code: "B.E(RC)", subjectCombination: "6-subjects", requiredMarks: 420, durationYears: 5 },
    { nameMy: "ရေကြောင်းလျှပ်စစ်နှင့် အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Marine Electrical Systems and Electronics Engineering", code: "B.E(MESE)", subjectCombination: "6-subjects", requiredMarks: 420, durationYears: 5 },
    { nameMy: "ရေကြောင်းစက်မှုအင်ဂျင်နီယာ", nameEn: "Marine Mechanical Engineering", code: "B.E(MM)", subjectCombination: "6-subjects", requiredMarks: 420, durationYears: 5 },
    { nameMy: "ရေကြောင်းသိပ္ပံ (ဂုဏ်ထူး)", nameEn: "Nautical Science (Honours)", code: "B.Sc(Hons)(NS)", subjectCombination: "6-subjects", requiredMarks: 420, durationYears: 5 }
  ]
},

// 13. Union Level Indigenous Peoples Development University (Sagaing)
{
  id: "union-indigenous-peoples-development-university",
  nameMy: "ပြည်ထောင်စုတိုင်းရင်းသားလူမျိုးများဖွံ့ဖြိုးရေးတက္ကသိုလ် (စစ်ကိုင်း)",
  nameEn: "Union Level Indigenous Peoples Development University (Sagaing)",
  requiredMarks: 325,
  subjectCombination: "6-subjects",
  locationMy: "စစ်ကိုင်းမြို့",
  locationEn: "Sagaing",
  type: "အထူးဝင်ခွင့်",
  icon: "👥",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "တိုင်းရင်းသားမိဘနှစ်ပါးမှ မွေးဖွားသော နိုင်ငံသားဖြစ်ရမည်။ အိမ်ထောင်မပြုရသေးသူဖြစ်ရမည်။ နယ်စွန်နယ်ဖျားဒေသမှ ဦးစားပေးရွေးချယ်မည်။ မိဘမဲ့/မိမဲ့/ဘမဲ့များ ဦးစားပေးမည်။ ဆင်းရဲနွမ်းပါးသူများ ဦးစားပေးမည်။ နိုင်ငံတော်မှ နေစရိတ်၊ စားစရိတ်၊ အဝတ်အထည်နှင့် ပညာသင်ကြားစရိတ် အခမဲ့ ထောက်ပံ့သည်။ ဘွဲ့ရပြီးနောက် (၅)နှစ် နိုင်ငံ့ဝန်ထမ်းအဖြစ် တာဝန်ထမ်းဆောင်ရန် ကတိပြုချက်လိုအပ်သည်။",
  subjectRequirements: {
    science: { marks: 370, combination: "STEAMS-1" },
    arts: { marks: 325, combination: "STAMS-1 or STAMS-2" }
  },
  majors: [
    { nameMy: "ပညာရေးဘွဲ့ (သိပ္ပံ)", nameEn: "Bachelor of Education (Science)", code: "B.Ed", subjectCombination: "6-subjects", requiredMarks: 370, durationYears: 5 },
    { nameMy: "ပညာရေးဘွဲ့ (ဝိဇ္ဇာ)", nameEn: "Bachelor of Education (Arts)", code: "B.Ed", subjectCombination: "6-subjects", requiredMarks: 325, durationYears: 5 }
  ]
},
// 14. Union Level Indigenous Youth Capacity Development Degree College (Yangon, Sagaing)
{
  id: "union-indigenous-youth-degree-college-yangon",
  nameMy: "ပြည်ထောင်စုတိုင်းရင်းသားလူငယ်များစွမ်းရည်ဖွံ့ဖြိုးရေးဒီဂရီကောလိပ် (ရန်ကုန်)",
  nameEn: "Union Level Indigenous Youth Capacity Development Degree College (Yangon)",
  requiredMarks: 300,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့",
  locationEn: "Yangon",
  type: "အထူးဝင်ခွင့်",
  icon: "👥",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "တိုင်းရင်းသားမိဘနှစ်ပါးမှ မွေးဖွားသော နိုင်ငံသားဖြစ်ရမည်။ အိမ်ထောင်မပြုရသေးသူဖြစ်ရမည်။ နယ်စွန်နယ်ဖျားဒေသမှ ဦးစားပေးရွေးချယ်မည်။ မိဘမဲ့/မိမဲ့/ဘမဲ့များ ဦးစားပေးမည်။ ဆင်းရဲနွမ်းပါးသူများ ဦးစားပေးမည်။ အစိုးရအထက်တန်းကျောင်းတွင် တက်ရောက်သူများကို ဦးစားပေးမည်။ နိုင်ငံတော်မှ နေစရိတ်၊ စားစရိတ်၊ အဝတ်အထည်နှင့် ပညာသင်ကြားစရိတ် အခမဲ့ ထောက်ပံ့သည်။ ဘွဲ့ရပြီးနောက် (၅)နှစ် နိုင်ငံ့ဝန်ထမ်းအဖြစ် တာဝန်ထမ်းဆောင်ရန် ကတိပြုချက်လိုအပ်သည်။",
  majors: [
    { nameMy: "ဝိဇ္ဇာဘွဲ့", nameEn: "Bachelor of Arts", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 300, durationYears: 4 },
    { nameMy: "သိပ္ပံဘွဲ့", nameEn: "Bachelor of Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 321, durationYears: 4 },
    { nameMy: "အင်ဂျင်နီယာအတတ်ပညာဒီပလိုမာ (AGTI)", nameEn: "Diploma in Engineering (AGTI)", code: "AGTI", subjectCombination: "6-subjects", requiredMarks: 351, durationYears: 3 }
  ]
},
{
  id: "union-indigenous-youth-degree-college-sagaing",
  nameMy: "ပြည်ထောင်စုတိုင်းရင်းသားလူငယ်များစွမ်းရည်ဖွံ့ဖြိုးရေးဒီဂရီကောလိပ် (စစ်ကိုင်း)",
  nameEn: "Union Level Indigenous Youth Capacity Development Degree College (Sagaing)",
  requiredMarks: 300,
  subjectCombination: "6-subjects",
  locationMy: "စစ်ကိုင်းမြို့",
  locationEn: "Sagaing",
  type: "အထူးဝင်ခွင့်",
  icon: "👥",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "တိုင်းရင်းသားမိဘနှစ်ပါးမှ မွေးဖွားသော နိုင်ငံသားဖြစ်ရမည်။ အိမ်ထောင်မပြုရသေးသူဖြစ်ရမည်။ နယ်စွန်နယ်ဖျားဒေသမှ ဦးစားပေးရွေးချယ်မည်။ မိဘမဲ့/မိမဲ့/ဘမဲ့များ ဦးစားပေးမည်။ ဆင်းရဲနွမ်းပါးသူများ ဦးစားပေးမည်။ အစိုးရအထက်တန်းကျောင်းတွင် တက်ရောက်သူများကို ဦးစားပေးမည်။ နိုင်ငံတော်မှ နေစရိတ်၊ စားစရိတ်၊ အဝတ်အထည်နှင့် ပညာသင်ကြားစရိတ် အခမဲ့ ထောက်ပံ့သည်။ ဘွဲ့ရပြီးနောက် (၅)နှစ် နိုင်ငံ့ဝန်ထမ်းအဖြစ် တာဝန်ထမ်းဆောင်ရန် ကတိပြုချက်လိုအပ်သည်။",
  majors: [
    { nameMy: "ဝိဇ္ဇာဘွဲ့", nameEn: "Bachelor of Arts", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 300, durationYears: 4 },
    { nameMy: "သိပ္ပံဘွဲ့", nameEn: "Bachelor of Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 321, durationYears: 4 }
  ]
},

];

// Helper function to check if a university has an alternative path
export const hasAlternativePath = (university) => {
  return university.subjectCombination === "6-subjects-or-2" && university.alternativePath;
};

// Helper function to get user's marks for the correct combination
export const getUserMarksForUniversity = (university, userMarks) => {
  if (university.subjectCombination === "4-subjects") {
    return userMarks["4-subjects"] || 0;
  } else if (university.subjectCombination === "6-subjects-or-2") {
    // Return the better of the two paths
    const totalMarks = userMarks["6-subjects"] || 0;
    const twoSubjectsMarks = userMarks["2-subjects"] || 0;
    return {
      primary: totalMarks,
      alternative: twoSubjectsMarks,
      primaryRequired: university.requiredMarks,
      alternativeRequired: university.alternativePath?.requiredMarks || null
    };
  }
  return userMarks["6-subjects"] || 0;
};
