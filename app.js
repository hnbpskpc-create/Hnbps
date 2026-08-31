// --- HNBPS INITIAL MOCK DATA ---
const initialSchoolInfo = {
  ministry: "ក្រសួងធម្មការនិងសាសនា",
  department: "មន្ទីរធម្មការនិងសាសនា ខេត្តកំពង់ចាម",
  name: "ពុទ្ធិកបឋមសិក្សាកម្រិត ហ៊ុន ណេង",
  nameLevel1: "",
  academicYear: "២០២៦-២០២៧",
  startYear: "២០២៦",
  endYear: "២០២៧",
  principalType: "ព្រះនាយក",
  personInCharge: "ម៉ែន ហាក់",
  lunarDate: "",
  solarDate: "",
  province: "កំពង់ចាម",
  district: "កំពង់ចាម",
  commune: "សំបួរមាស",
  village: "បឹងបាសាក់",
  
  englishName: "Prasat Hun Neng Buddhist Primary School",
  established: "2018",
  phone: "042-505-555 / 089-999-888",
  email: "hnbps.school@gmail.com",
  principal: "ព្រះគ្រូវជិរប្បញ្ញោ នួន ឡូយ",
  vicePrincipal: "ភិក្ខុ សំ អាត",
  vision: "បណ្តុះបណ្តាលចំណេះដឹងទូទៅ និងពុទ្ធោវាទ ដើម្បីធានាបាននូវធនធានមនុស្សប្រកបដោយសីលធម៌ គុណធម៌ និងចំណេះដឹងពិតប្រាកដ។"
};

const initialStaff = [
  {
    id: "ST001",
    name: "ព្រះគ្រូវជិរប្បញ្ញោ នួន ឡូយ",
    role: "principal",
    position: "ព្រះចៅអធិការ / នាយកសាលា",
    phone: "092-111-222",
    email: "nuon.loy@gmail.com",
    photo: "",
    gender: "ព្រះសង្ឃ",
    degree: "បរិញ្ញាបត្រជាន់ខ្ពស់ ផ្នែកពុទ្ធសាសនា",
    joinedDate: "2018-05-10"
  },
  {
    id: "ST002",
    name: "ភិក្ខុ សំ អាត",
    role: "vice-principal",
    position: "គ្រូជំនួយការ / គ្រូបង្រៀន",
    phone: "099-333-444",
    email: "sam.at@gmail.com",
    photo: "",
    gender: "ព្រះសង្ឃ",
    degree: "បរិញ្ញាបត្រ ផ្នែកអក្សរសាស្ត្រខ្មែរ",
    joinedDate: "2019-02-15"
  },
  {
    id: "ST003",
    name: "ភិក្ខុ យូ រ៉ាឌី",
    role: "teacher",
    position: "គ្រូបង្រៀន (ថ្នាក់ទី៣)",
    phone: "088-555-666",
    email: "you.radi@gmail.com",
    photo: "",
    gender: "ព្រះសង្ឃ",
    degree: "បរិញ្ញាបត្រ ផ្នែកទស្សនវិជ្ជា",
    joinedDate: "2020-10-01"
  },
  {
    id: "ST004",
    name: "លោក ស៊ាង ឡាយហៀក",
    role: "teacher",
    position: "គ្រូបង្រៀន (ថ្នាក់ទី២)",
    phone: "015-777-888",
    email: "seang.layhiek@gmail.com",
    photo: "",
    gender: "ប្រុស",
    degree: "បរិញ្ញាបត្រ គណិតវិទ្យា",
    joinedDate: "2021-09-10"
  },
  {
    id: "ST005",
    name: "លោក ស៊ាង ប៊ុនធឿន",
    role: "teacher",
    position: "គ្រូបង្រៀន (ថ្នាក់ទី១)",
    phone: "096-888-999",
    email: "seang.bunthoeun@gmail.com",
    photo: "",
    gender: "ប្រុស",
    degree: "គរុកោសល្យបឋមសិក្សា",
    joinedDate: "2021-09-10"
  },
  {
    id: "ST006",
    name: "លោកស្រី យ៉ង ស្រីលីន",
    role: "teacher",
    position: "គ្រូបង្រៀន (ថ្នាក់មត្តេយ្យ)",
    phone: "012-333-222",
    email: "yong.sreylin@gmail.com",
    photo: "",
    gender: "ស្រី",
    degree: "គរុកោសល្យមត្តេយ្យសិក្សា",
    joinedDate: "2022-03-01"
  },
  {
    id: "ST007",
    name: "លោកស្រី ឌឿន ឡានី",
    role: "staff",
    position: "គណនេយ្យករ និងរដ្ឋបាល",
    phone: "017-444-555",
    email: "duen.lany@gmail.com",
    photo: "",
    gender: "ស្រី",
    degree: "បរិញ្ញាបត្រ គណនេយ្យ",
    joinedDate: "2020-05-15"
  },
  {
    id: "ST008",
    name: "ភិក្ខុ គន្ធ ឡុង",
    role: "teacher",
    position: "គ្រូបង្រៀនវិទ្យាសាស្ត្រ",
    phone: "077-888-111",
    email: "kunth.long@gmail.com",
    photo: "",
    gender: "ព្រះសង្ឃ",
    degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រអប់រំ",
    joinedDate: "2022-11-01"
  },
  {
    id: "ST009",
    name: "ភិក្ខុ ឃុត សុខឿន",
    role: "teacher",
    position: "គ្រូបង្រៀនសិក្សាសង្គម",
    phone: "089-222-333",
    email: "khut.sokhoeun@gmail.com",
    photo: "",
    gender: "ព្រះសង្ឃ",
    degree: "បរិញ្ញាបត្រ ពុទ្ធសាសនវិទ្យា",
    joinedDate: "2023-01-10"
  },
  {
    id: "ST010",
    name: "លោក ម៉ែន ហាក់",
    role: "staff",
    position: "បណ្ណារក្ស និងបច្ចេកទេស",
    phone: "093-444-999",
    email: "men.hak@gmail.com",
    photo: "",
    gender: "ប្រុស",
    degree: "បរិញ្ញាបត្រ ព័ត៌មានវិទ្យា",
    joinedDate: "2022-05-12"
  }
];

const initialStudents = [
  {
    id: "STU001",
    name: "សឿន ម៉ានិត",
    gender: "ប្រុស",
    grade: "kindergarten",
    dob: "2021-05-12",
    pob: "កំពង់ចាម",
    fatherName: "សឿន សុខា",
    motherName: "ចាន់ ធារី",
    fatherPhone: "012-888-111",
    address: "សង្កាត់វាលវង់ ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU002",
    name: "គង់ ស្រីពេជ្រ",
    gender: "ស្រី",
    grade: "kindergarten",
    dob: "2021-08-20",
    pob: "កំពង់ចាម",
    fatherName: "គង់ ណារ៉ុង",
    motherName: "សាន ស្រីនឿន",
    fatherPhone: "096-777-222",
    address: "សង្កាត់បឹងកុក ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU003",
    name: "លី ហាក់សេង",
    gender: "ប្រុស",
    grade: "kindergarten",
    dob: "2021-02-15",
    pob: "កំពង់ចាម",
    fatherName: "លី សុភ័ក្ត្រ",
    motherName: "ហេង ម៉ារីណា",
    fatherPhone: "088-333-444",
    address: "សង្កាត់វាលវង់ ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU010",
    name: "សុខ ហេង",
    gender: "ប្រុស",
    grade: "grade-1",
    dob: "2020-03-05",
    pob: "កំពង់ចាម",
    fatherName: "សុខ វាសនា",
    motherName: "អ៊ុករតនា",
    fatherPhone: "017-999-123",
    address: "សង្កាត់វាលវង់ ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU011",
    name: "អ៊ឹម សោភា",
    gender: "ស្រី",
    grade: "grade-1",
    dob: "2020-11-12",
    pob: "កំពង់ចាម",
    fatherName: "អ៊ឹម សារ៉េត",
    motherName: "មាស សុជាតា",
    fatherPhone: "012-777-666",
    address: "សង្កាត់សំបួរមាស ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU012",
    name: "ជា វិរៈ",
    gender: "ប្រុស",
    grade: "grade-1",
    dob: "2020-07-22",
    pob: "ព្រៃវែង",
    fatherName: "ជា សុជាតិ",
    motherName: "នួន សុភី",
    fatherPhone: "099-222-111",
    address: "សង្កាត់វាលវង់ ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU020",
    name: "រ័ត្ន ដានី",
    gender: "ស្រី",
    grade: "grade-2",
    dob: "2019-01-14",
    pob: "កំពង់ចាម",
    fatherName: "រ័ត្ន ដារា",
    motherName: "ម៉ៅ សុខន",
    fatherPhone: "092-888-777",
    address: "សង្កាត់វាលវង់ ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU021",
    name: "ម៉ៅ សម្បត្តិ",
    gender: "ប្រុស",
    grade: "grade-2",
    dob: "2019-09-30",
    pob: "កំពង់ចាម",
    fatherName: "ម៉ៅ ចាន់ឌី",
    motherName: "ឡាច សំណាង",
    fatherPhone: "015-333-111",
    address: "សង្កាត់បឹងកុក ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU022",
    name: "ផេង ស្រីលីស",
    gender: "ស្រី",
    grade: "grade-2",
    dob: "2019-05-18",
    pob: "ត្បូងឃ្មុំ",
    fatherName: "ផេង សុខឿន",
    motherName: "ទូច ស្រីណាក់",
    fatherPhone: "088-222-999",
    address: "សង្កាត់វាលវង់ ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU030",
    name: "ខៀវ សុវណ្ណារ៉ា",
    gender: "ប្រុស",
    grade: "grade-3",
    dob: "2018-04-10",
    pob: "កំពង់ចាម",
    fatherName: "ខៀវ ចាន់ណា",
    motherName: "លី ស្រីមុំ",
    fatherPhone: "093-555-111",
    address: "សង្កាត់វាលវង់ ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU031",
    name: "សេង ច័ន្ទមករា",
    gender: "ប្រុស",
    grade: "grade-3",
    dob: "2018-01-01",
    pob: "កំពង់ចាម",
    fatherName: "សេង គឹមស៊ន",
    motherName: "កែវ សោភ័ណ",
    fatherPhone: "097-444-222",
    address: "សង្កាត់សំបួរមាស ក្រុងកំពង់ចាម",
    photo: ""
  },
  {
    id: "STU032",
    name: "ឡុង សុជាតា",
    gender: "ស្រី",
    grade: "grade-3",
    dob: "2018-10-15",
    pob: "កំពង់ចាម",
    fatherName: "ឡុង វិបុល",
    motherName: "ហេង សុវណ្ណី",
    fatherPhone: "012-555-888",
    address: "សង្កាត់វាលវង់ ក្រុងកំពង់ចាម",
    photo: ""
  }
];

const initialAttendance = {
  "2026-07": {
    "kindergarten": {
      "STU001": { "1": "P", "2": "P", "3": "P", "6": "A", "7": "P", "8": "P", "9": "P", "10": "P", "13": "P", "14": "P", "15": "P", "16": "P", "17": "P" },
      "STU002": { "1": "P", "2": "P", "3": "P", "6": "P", "7": "P", "8": "P", "9": "P", "10": "P", "13": "P", "14": "P", "15": "P", "16": "P", "17": "P" },
      "STU003": { "1": "P", "2": "P", "3": "P", "6": "P", "7": "P", "8": "P", "9": "P", "10": "A", "13": "P", "14": "P", "15": "P", "16": "P", "17": "P" }
    },
    "grade-1": {
      "STU010": { "1": "P", "2": "P", "3": "P", "6": "P", "7": "P", "8": "P", "9": "P", "10": "P", "13": "P", "14": "P", "15": "P", "16": "P", "17": "P" },
      "STU011": { "1": "P", "2": "P", "3": "P", "6": "P", "7": "P", "8": "A", "9": "P", "10": "P", "13": "P", "14": "P", "15": "P", "16": "P", "17": "P" },
      "STU012": { "1": "P", "2": "P", "3": "P", "6": "P", "7": "P", "8": "P", "9": "P", "10": "P", "13": "P", "14": "P", "15": "P", "16": "P", "17": "P" }
    }
  }
};

const initialScores = {
  "2026-06": {
    "STU030": { khmer: 85, math: 90, science: 80, social: 75, english: 88 },
    "STU031": { khmer: 75, math: 65, science: 70, social: 60, english: 55 },
    "STU032": { khmer: 95, math: 98, science: 90, social: 92, english: 96 },
    "STU020": { khmer: 80, math: 85, science: 75, social: 80, english: 70 },
    "STU021": { khmer: 60, math: 70, science: 65, social: 55, english: 50 },
    "STU022": { khmer: 88, math: 92, science: 85, social: 88, english: 82 },
    "STU010": { khmer: 90, math: 85, science: 80, social: 85, english: 75 },
    "STU011": { khmer: 70, math: 60, science: 65, social: 70, english: 60 },
    "STU012": { khmer: 78, math: 80, science: 72, social: 75, english: 68 }
  },
  "2026-07": {
    "STU030": { khmer: 88, math: 92, science: 82, social: 78, english: 90 },
    "STU031": { khmer: 78, math: 68, science: 72, social: 65, english: 58 },
    "STU032": { khmer: 96, math: 99, science: 92, social: 94, english: 98 },
    "STU020": { khmer: 82, math: 87, science: 78, social: 82, english: 72 },
    "STU021": { khmer: 62, math: 72, science: 68, social: 58, english: 52 },
    "STU022": { khmer: 90, math: 94, science: 87, social: 90, english: 85 },
    "STU010": { khmer: 92, math: 88, science: 82, social: 87, english: 78 },
    "STU011": { khmer: 72, math: 62, science: 68, social: 72, english: 62 },
    "STU012": { khmer: 80, math: 82, science: 75, social: 78, english: 70 }
  }
};

const initialEarlyWork = [
  { id: "EW1", text: "ប្រជុំគ្រូបង្រៀនដើម្បីបែងចែកថ្នាក់រៀន និងភារកិច្ច", checked: true },
  { id: "EW2", text: "រៀបចំការផ្សព្វផ្សាយ និងចុះឈ្មោះសិស្សថ្មីចូលរៀន", checked: true },
  { id: "EW3", text: "បោសសម្អាត រៀបចំតុ កៅអី និងសម្ភារៈក្នុងបន្ទប់រៀន", checked: false },
  { id: "EW4", text: "រៀបចំកាលវិភាគសិក្សាប្រចាំថ្នាក់ និងសៀវភៅបញ្ជីវត្តមាន", checked: false },
  { id: "EW5", text: "ចែកសៀវភៅសិក្សាគោល និងសម្ភារៈសិក្សាជូនសិស្ស", checked: false },
  { id: "EW6", text: "ប្រជុំគណៈកម្មការទ្រទ្រង់សាលារៀន និងអាណាព្យាបាលសិស្ស", checked: false }
];

const initialLateWork = [
  { id: "LW1", text: "រៀបចំការប្រឡងឆមាសទី២ និងបញ្ចប់ឆ្នាំសិក្សា", checked: false },
  { id: "LW2", text: "បូកសរុបលទ្ធផលការសិក្សាប្រចាំឆ្នាំ និងចំណាត់ថ្នាក់", checked: false },
  { id: "LW3", text: "សរសេរសៀវភៅលឿង (ព្រឹត្តិបត្រពិន្ទុ) និងចែកជូនសិស្ស", checked: false },
  { id: "LW4", text: "ប្រជុំបូកសរុបរបាយការណ៍ការងារអប់រំប្រចាំឆ្នាំសិក្សា", checked: false },
  { id: "LW5", text: "រៀបចំពិធីចែករង្វាន់ជ័យលាភី និងបិទឆ្នាំសិក្សា", checked: false },
  { id: "LW6", text: "សម្អាត ជម្រះបញ្ជីសារពើភណ្ឌ និងចាក់សោថែរក្សាបន្ទប់រៀន", checked: false }
];

const initialSchoolTexts = {
  rules1: `បទបញ្ជាផ្ទៃក្នុងសម្រាប់សិស្សានុសិស្ស៖\n\n១. ត្រូវគោរពទង់ជាតិ ព្រះសង្ឃ និងគ្រូបង្រៀនឱ្យបានខ្ជាប់ខ្ជួន។\n២. ត្រូវមកសាលារៀនឱ្យបានទាន់ពេលវេលា (យ៉ាងតិច ១៥នាទីមុនចូលរៀន)។\n៣. ត្រូវស្លៀកពាក់ឯកសណ្ឋានសាលាឱ្យបានត្រឹមត្រូវ និងស្អាតបាត។\n៤. ហាមបង្កជម្លោះ ឬសកម្មភាពអសីលធម៌ផ្សេងៗក្នុងបរិវេណសាលា។\n៥. ត្រូវចូលរួមថែរក្សាបរិស្ថាន សម្ភារៈសាលារៀន និងអនាម័យជាប្រចាំ។`,
  rules2: `បទបញ្ជាផ្ទៃក្នុង និងវិន័យមន្ត្រី-គ្រូបង្រៀន៖\n\n១. ត្រូវមកបង្រៀនឱ្យបានទៀងទាត់ម៉ោង និងរៀបចំកិច្ចតែងការបង្រៀនជាមុន។\n២. ត្រូវរក្សាសីលធម៌វិជ្ជាជីវៈជាគ្រូបង្រៀន និងជាគំរូដ៏ល្អដល់សិស្សានុសិស្ស។\n៣. ហាមប្រើប្រាស់ហិង្សា ឬពាក្យសម្តីអសុរោះទៅកាន់សិស្សានុសិស្ស។\n៤. ត្រូវចូលរួមរាល់កិច្ចប្រជុំ និងសកម្មភាពនានាដែលសាលារៀបចំឡើង។\n៥. ត្រូវសហការគ្នាយ៉ាងជិតស្និទ្ធជាមួយអាណាព្យាបាល ដើម្បីតាមដានការសិក្សារបសិស្ស។`,
  pedagogy1: `គោលការណ៍គរុកោសល្យថ្នាក់រៀន៖\n\n១. ការរៀបចំថ្នាក់រៀន៖ ត្រូវមានផែនទីគំនិត បញ្ជីឈ្មោះសិស្ស និងកាលវិភាគបង្រៀនឱ្យច្បាស់លាស់។\n២. វិធីសាស្ត្របង្រៀន៖ ផ្ដោតលើការយកសិស្សជាមជ្ឈមណ្ឌល (Active Learning) តាមរយៈការធ្វើការងារជាក្រុម និងសួរសំណួរចម្លើយ។\n៣. ការគ្រប់គ្រងថ្នាក់៖ បង្កើតបរិយាកាសសិក្សាប្រកបដោយមេត្តា វិន័យធូរស្រាល និងការលើកទឹកចិត្តជាប្រចាំ។`,
  pedagogy2: `ផែនការគរុកោសល្យ និងគុណភាពអប់រំកម្រិតសាលា៖\n\n១. ការត្រួតពិនិត្យបច្ចេកទេស៖ នាយកសាលា ឬគ្រូជំនួយការត្រូវចុះស្តាប់ការបង្រៀនរបស់គ្រូជាប្រចាំខែ។\n២. ការអភិវឌ្ឍវិជ្ជាជីវៈ៖ រៀបចំសិក្ខាសាលាចែករំលែកបទពិសោធន៍បង្រៀនក្នុងចំណោមលោកគ្រូអ្នកគ្រូ។\n៣. ការវាស់ស្ទង់គុណភាព៖ រៀបចំការប្រឡងរួមប្រចាំខែ ដើម្បីវាយតម្លៃសមត្ថភាពសិស្សស្មើគ្នា។`,
  notes: `កំណត់ត្រា និងទម្រង់ការងារទូទៅរបស់សាលា៖\n\n- កំណត់ហេតុប្រជុំគណៈគ្រប់គ្រងសាលាប្រចាំខែ\n- ទម្រង់លិខិតសុំច្បាប់ឈប់សម្រាករបស់គ្រូ-មន្ត្រី\n- កំណត់ត្រាសប្បុរសជន និងការឧបត្ថម្ភគាំទ្រសាលា\n- របាយការណ៍សកម្មភាពពុទ្ធិកសិក្សា និងការងារសហគមន៍`
};

const initialTimetables = {
  "kindergarten": [
    { day: "ចន្ទ", m1: "សីលធម៌", m2: "ភាសាខ្មែរ", a1: "គូររូប", a2: "ល្បែងសិក្សា" },
    { day: "អង្គារ", m1: "ភាសាខ្មែរ", m2: "គណិតវិទ្យា", a1: "ចម្រៀង", a2: "ល្បែងសិក្សា" },
    { day: "ពុធ", m1: "សីលធម៌", m2: "ភាសាខ្មែរ", a1: "រឿងនិទាន", a2: "អនាម័យ" },
    { day: "ព្រហស្បតិ៍", m1: "គណិតវិទ្យា", m2: "ភាសាខ្មែរ", a1: "គូររូប", a2: "ល្បែងសិក្សា" },
    { day: "សុក្រ", m1: "ភាសាខ្មែរ", m2: "ហាត់ប្រាណ", a1: "ចម្រៀង", a2: "សម្អាតថ្នាក់" }
  ],
  "grade-1": [
    { day: "ចន្ទ", m1: "ភាសាខ្មែរ", m2: "គណិតវិទ្យា", a1: "សិក្សាសង្គម", a2: "ភាសាអង់គ្លេស" },
    { day: "អង្គារ", m1: "គណិតវិទ្យា", m2: "ភាសាខ្មែរ", a1: "វិទ្យាសាស្ត្រ", a2: "ភាសាអង់គ្លេស" },
    { day: "ពុធ", m1: "ភាសាខ្មែរ", m2: "គណិតវិទ្យា", a1: "សិក្សាសង្គម", a2: "ពុទ្ធប្រវត្តិ" },
    { day: "ព្រហស្បតិ៍", m1: "វិទ្យាសាស្ត្រ", m2: "ភាសាខ្មែរ", a1: "គណិតវិទ្យា", a2: "ភាសាអង់គ្លេស" },
    { day: "សុក្រ", m1: "ភាសាខ្មែរ", m2: "គណិតវិទ្យា", a1: "កីឡា/សិល្បៈ", a2: "អនាម័យសាលា" }
  ],
  "grade-2": [
    { day: "ចន្ទ", m1: "គណិតវិទ្យា", m2: "ភាសាខ្មែរ", a1: "វិទ្យាសាស្ត្រ", a2: "ភាសាអង់គ្លេស" },
    { day: "អង្គារ", m1: "ភាសាខ្មែរ", m2: "គណិតវិទ្យា", a1: "សិក្សាសង្គម", a2: "ភាសាអង់គ្លេស" },
    { day: "ពុធ", m1: "គណិតវិទ្យា", m2: "ភាសាខ្មែរ", a1: "វិទ្យាសាស្ត្រ", a2: "ពុទ្ធសាសនា" },
    { day: "ព្រហស្បតិ៍", m1: "ភាសាខ្មែរ", m2: "សិក្សាសង្គម", a1: "គណិតវិទ្យា", a2: "ភាសាអង់គ្លេស" },
    { day: "សុក្រ", m1: "ភាសាខ្មែរ", m2: "គណិតវិទ្យា", a1: "សិល្បៈ", a2: "ពលកម្មសាលា" }
  ],
  "grade-3": [
    { day: "ចន្ទ", m1: "ភាសាខ្មែរ (តែងសេចក្តី)", m2: "គណិតវិទ្យា (ប្រភាគ)", a1: "រូបវិទ្យាស្ទង់", a2: "ភាសាអង់គ្លេស" },
    { day: "អង្គារ", m1: "គណិតវិទ្យា", m2: "ភាសាខ្មែរ (អាន)", a1: "ភូមិវិទ្យា", a2: "ភាសាអង់គ្លេស" },
    { day: "ពុធ", m1: "ភាសាខ្មែរ (អក្ខរាវិរុទ្ធ)", m2: "គណិតវិទ្យា", a1: "ប្រវត្តិវិទ្យា", a2: "ពុទ្ធសាសនា/ធម៌វិន័យ" },
    { day: "ព្រហស្បតិ៍", m1: "វិទ្យាសាស្ត្រផែនដី", m2: "ភាសាខ្មែរ (អក្សរសាស្ត្រ)", a1: "គណិតវិទ្យា", a2: "ភាសាអង់គ្លេស" },
    { day: "សុក្រ", m1: "ភាសាខ្មែរ", m2: "គណិតវិទ្យា", a1: "កីឡា/គូររូប", a2: "សម្អាតសាលា" }
  ]
};

// --- NEW MOCK STRINGS FOR EARLY YEAR SUBMENU ---
const initialEarlySyllabus = `សម្រង់អត្ថបទគំរូ និងសេចក្តីណែនាំបង្រៀន៖\n\n១. មុខវិជ្ជាភាសាខ្មែរ៖ ផ្តោតលើការប្រកបព្យញ្ជនៈ ស្រៈ និងការអានពាក្យគន្លឹះងាយៗ។\n២. មុខវិជ្ជាគណិតវិទ្យា៖ ការស្គាល់លេខខ្មែរ លេខអារ៉ាប់ និងការគណនាបូកដកលេខខ្ទង់ទោល។\n៣. ការអប់រំសីលធម៌៖ ការបណ្តុះវិន័យ សីលធម៌សង្គម និងការយល់ដឹងពីសាសនាសមរម្យ។`;

const initialEarlyFramework1 = `ក្របខណ្ឌអត្ថបទទី១ (ការងារអប់រំ និងផែនការការងារ)៖\n\n- គោលនយោបាយកែលម្អគុណភាពអប់រំពុទ្ធិកសិក្សាជាតិ\n- បទដ្ឋានអភិវឌ្ឍសមត្ថភាពគរុកោសល្យគ្រូបង្រៀនប្រចាំឆ្នាំ\n- កិច្ចសហការរៀបចំសម្ភារឧបទេសសិក្សាជាមួយសហគមន៍`;

const initialEarlyFramework2 = `ក្របខណ្ឌអត្ថបទទី២ (ការគ្រប់គ្រងថ្នាក់ និងការវាស់ស្ទង់)៖\n\n- សេចក្តីណែនាំស្តីពីការវាយតម្លៃពិន្ទុ និងអាកប្បកិរិយាសិស្ស\n- ផែនការគ្រប់គ្រងបរិស្ថានសិក្សា និងអនាម័យក្នុងថ្នាក់\n- កំណត់ត្រាសិស្សពិសេស ឬសិស្សត្រូវការជំនួយបន្ថែម`;

const initialEarlyCurriculumText = `កម្មវិធីសិក្សាលម្អិត៖\n\n- ថ្នាក់មត្តេយ្យ៖ សិក្សារយៈពេល ៣ម៉ោងក្នុងមួយថ្ងៃ (សីលធម៌, ភាសាខ្មែរ, គូររូប, ល្បែងសិក្សា)\n- ថ្នាក់បឋម (ទី១-ទី៣)៖ សិក្សារយៈពេល ៤ម៉ោងក្នុងមួយថ្ងៃ (ភាសាខ្មែរ, គណិត, វិទ្យាសាស្ត្រ, សិក្សាសង្គម, អង់គ្លេស និងពុទ្ធសាសនា)`;

const initialEarlyOtherText = `ឯកសារ និងកំណត់ត្រាផ្សេងៗការងារដើមឆ្នាំ៖\n\n- បញ្ជីរាយនាមសៀវភៅជំនួយ និងសៀវភៅអានបន្ថែមក្នុងបណ្ណាល័យ\n- របាយការណ៍បម្រុងទុកសម្ភារសិក្សាចែកជូនសិស្សក្រីក្រ\n- កំណត់ហេតុប្រជុំបង្កើតគណៈកម្មការថ្នាក់រៀន`;

// --- APPLICATION STATE ---
let state = {
  schoolInfo: {},
  staff: [],
  students: [],
  attendance: {},
  scores: {},
  
  earlyWork: [],
  lateWork: [],
  schoolTexts: {},
  timetables: {},

  // New Early Year Texts State
  earlySyllabusText: "",
  earlyFramework1Text: "",
  earlyFramework2Text: "",
  earlyCurriculumText: "",
  earlyOtherText: "",

  // Class-specific documents state
  classTexts: {},
  customOrgCharts: [],

  currentView: 'dashboard',
  selectedGradeFilter: 'all',
  selectedStaffFilter: 'all',
  searchQuery: '',
  selectedMonth: '2026-07',
  selectedAttendanceGrade: 'kindergarten',
  selectedScoreGrade: 'grade-3',
  
  selectedTimetableGrade: 'kindergarten',
  selectedClassDashboardGrade: 'grade-1'
};

const defaultClassTexts = {
  "kindergarten": { registry: "", grids: "", plans: "", biographies: "", applications: "", monitoring: "", curriculum: "", pedagogy: "" },
  "grade-1": { registry: "", grids: "", plans: "", biographies: "", applications: "", monitoring: "", curriculum: "", pedagogy: "" },
  "grade-2": { registry: "", grids: "", plans: "", biographies: "", applications: "", monitoring: "", curriculum: "", pedagogy: "" },
  "grade-3": { registry: "", grids: "", plans: "", biographies: "", applications: "", monitoring: "", curriculum: "", pedagogy: "" }
};

// Initialize State
function initApp() {
  state.schoolInfo = JSON.parse(localStorage.getItem('hnbps_schoolInfo')) || initialSchoolInfo;
  state.staff = JSON.parse(localStorage.getItem('hnbps_staff')) || initialStaff;
  state.students = JSON.parse(localStorage.getItem('hnbps_students')) || initialStudents;
  state.attendance = JSON.parse(localStorage.getItem('hnbps_attendance')) || initialAttendance;
  state.scores = JSON.parse(localStorage.getItem('hnbps_scores')) || initialScores;

  state.earlyWork = JSON.parse(localStorage.getItem('hnbps_earlyWork')) || initialEarlyWork;
  state.lateWork = JSON.parse(localStorage.getItem('hnbps_lateWork')) || initialLateWork;
  state.schoolTexts = JSON.parse(localStorage.getItem('hnbps_schoolTexts')) || initialSchoolTexts;
  state.timetables = JSON.parse(localStorage.getItem('hnbps_timetables')) || initialTimetables;

  // New Early Year Submenu text loading
  state.earlySyllabusText = localStorage.getItem('hnbps_earlySyllabusText') || initialEarlySyllabus;
  state.earlyFramework1Text = localStorage.getItem('hnbps_earlyFramework1Text') || initialEarlyFramework1;
  state.earlyFramework2Text = localStorage.getItem('hnbps_earlyFramework2Text') || initialEarlyFramework2;
  state.earlyCurriculumText = localStorage.getItem('hnbps_earlyCurriculumText') || initialEarlyCurriculumText;
  state.earlyOtherText = localStorage.getItem('hnbps_earlyOtherText') || initialEarlyOtherText;

  // Class-specific text document loading
  state.classTexts = JSON.parse(localStorage.getItem('hnbps_classTexts')) || defaultClassTexts;
  state.customOrgCharts = JSON.parse(localStorage.getItem('hnbps_customOrgCharts')) || [];

  saveStateToStorage();
  
  setupNavigation();
  setupStaffHandlers();
  setupStudentHandlers();
  setupSchoolHandlers();
  setupAttendanceHandlers();
  setupScoreboardHandlers();
  setupBackupHandlers();
  setupClassDashboardHandlers();
  setupBatchCardsHandlers();

  setupSchoolSubMenuNavigation();
  setupSchoolSubMenuLogic();

  setupEarlyYearSubMenuNavigation();
  setupEarlyYearSubMenuLogic();
  setupCustomOrgChartHandlers();

  renderAll();
  showToast('កម្មវិធីបានដំណើរការដោយជោគជ័យ!', 'success');
}

function saveStateToStorage() {
  localStorage.setItem('hnbps_schoolInfo', JSON.stringify(state.schoolInfo));
  localStorage.setItem('hnbps_staff', JSON.stringify(state.staff));
  localStorage.setItem('hnbps_students', JSON.stringify(state.students));
  localStorage.setItem('hnbps_attendance', JSON.stringify(state.attendance));
  localStorage.setItem('hnbps_scores', JSON.stringify(state.scores));
  
  localStorage.setItem('hnbps_earlyWork', JSON.stringify(state.earlyWork));
  localStorage.setItem('hnbps_lateWork', JSON.stringify(state.lateWork));
  localStorage.setItem('hnbps_schoolTexts', JSON.stringify(state.schoolTexts));
  localStorage.setItem('hnbps_timetables', JSON.stringify(state.timetables));

  // Save new early year text values
  localStorage.setItem('hnbps_earlySyllabusText', state.earlySyllabusText);
  localStorage.setItem('hnbps_earlyFramework1Text', state.earlyFramework1Text);
  localStorage.setItem('hnbps_earlyFramework2Text', state.earlyFramework2Text);
  localStorage.setItem('hnbps_earlyCurriculumText', state.earlyCurriculumText);
  localStorage.setItem('hnbps_earlyOtherText', state.earlyOtherText);

  // Save class texts & custom org charts
  localStorage.setItem('hnbps_classTexts', JSON.stringify(state.classTexts));
  localStorage.setItem('hnbps_customOrgCharts', JSON.stringify(state.customOrgCharts));
}

// --- NAVIGATION / ROUTING (SPA) ---
function setupNavigation() {
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.getAttribute('data-view');
      switchView(view);
    });
  });

  document.querySelectorAll('.grade-card').forEach(card => {
    card.addEventListener('click', () => {
      const grade = card.getAttribute('data-grade');
      state.selectedClassDashboardGrade = grade;
      switchView('class-dashboard');
    });
  });
}

function switchView(viewName) {
  state.currentView = viewName;
  
  document.querySelectorAll('.menu-item').forEach(item => {
    // If we're on class-dashboard, set students menu item as active for UI correctness
    const targetView = (viewName === 'class-dashboard') ? 'students' : viewName;
    if (item.getAttribute('data-view') === targetView) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  document.querySelectorAll('.view-container').forEach(view => {
    if (view.id === `${viewName}-view`) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  if (viewName === 'school') {
    showSchoolSubview('school-menu-dashboard');
  }

  if (viewName === 'dashboard') {
    renderDashboardStats();
  } else if (viewName === 'school') {
    renderSchoolProfile();
    renderOrgChart();
  } else if (viewName === 'staff') {
    renderStaffList();
  } else if (viewName === 'students') {
    renderStudentList();
  } else if (viewName === 'attendance') {
    renderAttendanceGrid();
  } else if (viewName === 'scores') {
    renderScoreboard();
  } else if (viewName === 'reports') {
    renderReports();
  } else if (viewName === 'class-dashboard') {
    renderClassDashboard(state.selectedClassDashboardGrade);
  } else if (viewName === 'batch-cards') {
    renderBatchCardsView();
  }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.className = `toast toast-${type} show`;
  document.getElementById('toast-message').innerText = message;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// --- RENDER ALL ---
function renderAll() {
  renderDashboardStats();
  renderSchoolProfile();
  renderOrgChart();
  renderStaffList();
  renderStudentList();
  renderAttendanceGrid();
  renderScoreboard();
  renderReports();
}

// --- SCHOOL SUB-MENU ROUTING ---
function setupSchoolSubMenuNavigation() {
  const subviews = [
    { btnId: 'btn-school-early-work', viewId: 'subview-early-work', loadFn: () => showEarlyYearSubview('early-menu-dashboard') },
    { btnId: 'btn-school-late-work', viewId: 'subview-late-work', loadFn: renderLateWorkChecklist },
    { btnId: 'btn-school-rules1', viewId: 'subview-rules1', loadFn: () => loadSchoolTextEditor('rules1', 'editor-rules1') },
    { btnId: 'btn-school-rules2', viewId: 'subview-rules2', loadFn: () => loadSchoolTextEditor('rules2', 'editor-rules2') },
    { btnId: 'btn-school-pedagogy1', viewId: 'subview-pedagogy1', loadFn: () => loadSchoolTextEditor('pedagogy1', 'editor-pedagogy1') },
    { btnId: 'btn-school-pedagogy2', viewId: 'subview-pedagogy2', loadFn: () => loadSchoolTextEditor('pedagogy2', 'editor-pedagogy2') },
    { btnId: 'btn-school-curriculum', viewId: 'subview-curriculum', loadFn: renderTimetableEditor },
    { btnId: 'btn-school-profile', viewId: 'subview-profile', loadFn: () => { renderSchoolProfile(); renderOrgChart(); } },
    { btnId: 'btn-school-notes', viewId: 'subview-notes', loadFn: () => loadSchoolTextEditor('notes', 'editor-notes') }
  ];

  subviews.forEach(sv => {
    document.getElementById(sv.btnId).addEventListener('click', () => {
      showSchoolSubview(sv.viewId);
      if (sv.loadFn) sv.loadFn();
    });
  });

  document.querySelectorAll('.btn-back-menu').forEach(btn => {
    // Only back buttons that don't have .btn-back-early
    if (!btn.classList.contains('btn-back-early')) {
      btn.addEventListener('click', () => {
        showSchoolSubview('school-menu-dashboard');
      });
    }
  });
}

function showSchoolSubview(activeId) {
  document.getElementById('school-menu-dashboard').style.display = 'none';
  document.getElementById('subview-early-work').style.display = 'none';
  document.getElementById('subview-late-work').style.display = 'none';
  document.getElementById('subview-rules1').style.display = 'none';
  document.getElementById('subview-rules2').style.display = 'none';
  document.getElementById('subview-pedagogy1').style.display = 'none';
  document.getElementById('subview-pedagogy2').style.display = 'none';
  document.getElementById('subview-curriculum').style.display = 'none';
  document.getElementById('subview-profile').style.display = 'none';
  document.getElementById('subview-notes').style.display = 'none';

  document.getElementById(activeId).style.display = 'block';
}

// --- NEW EARLY YEAR 8-BUTTON SUB-MENU NAVIGATION & LOGIC ---
function setupEarlyYearSubMenuNavigation() {
  const earlySubviews = [
    { btnId: 'btn-early-syllabus', subId: 'subview-early-syllabus', valKey: 'earlySyllabusText', editorId: 'editor-early-syllabus' },
    { btnId: 'btn-early-framework1', subId: 'subview-early-framework1', valKey: 'earlyFramework1Text', editorId: 'editor-early-framework1' },
    { btnId: 'btn-early-framework2', subId: 'subview-early-framework2', valKey: 'earlyFramework2Text', editorId: 'editor-early-framework2' },
    { btnId: 'btn-early-curriculum', subId: 'subview-early-curriculum', valKey: 'earlyCurriculumText', editorId: 'editor-early-curriculum' },
    { btnId: 'btn-early-other', subId: 'subview-early-other', valKey: 'earlyOtherText', editorId: 'editor-early-other' }
  ];

  // Text editor sub-pages navigation
  earlySubviews.forEach(sv => {
    document.getElementById(sv.btnId).addEventListener('click', () => {
      showEarlyYearSubview(sv.subId);
      if (sv.btnId === 'btn-early-syllabus') {
        loadSyllabusTableEditor();
      } else {
        document.getElementById(sv.editorId).value = state[sv.valKey];
      }
    });
  });

  // Short-cuts navigation keys
  document.getElementById('btn-early-attendance').addEventListener('click', () => {
    switchView('attendance');
  });

  document.getElementById('btn-early-scores').addEventListener('click', () => {
    switchView('scores');
  });

  document.getElementById('btn-early-timetable').addEventListener('click', () => {
    showSchoolSubview('subview-curriculum');
    renderTimetableEditor();
  });

  // Main back button (blue curved arrow)
  document.getElementById('btn-back-early-main').addEventListener('click', () => {
    showSchoolSubview('school-menu-dashboard');
  });

  // Editor back buttons (.btn-back-early)
  document.querySelectorAll('.btn-back-early').forEach(btn => {
    btn.addEventListener('click', () => {
      showEarlyYearSubview('early-menu-dashboard');
    });
  });
}

function showEarlyYearSubview(subId) {
  document.getElementById('early-menu-dashboard').style.display = 'none';
  document.getElementById('subview-early-syllabus').style.display = 'none';
  document.getElementById('subview-early-framework1').style.display = 'none';
  document.getElementById('subview-early-framework2').style.display = 'none';
  document.getElementById('subview-early-curriculum').style.display = 'none';
  document.getElementById('subview-early-other').style.display = 'none';

  document.getElementById(subId).style.display = 'block';
}

function setupEarlyYearSubMenuLogic() {
  document.getElementById('btn-save-early-syllabus').addEventListener('click', () => {
    saveSyllabusTableData();
    showToast('បានរក្សាទុកសម្រង់អត្ថបទរួចរាល់!', 'success');
  });

  document.getElementById('btn-syllabus-add-row').addEventListener('click', () => {
    addSyllabusRowToDOM();
  });

  document.getElementById('btn-print-early-syllabus').addEventListener('click', () => {
    printSyllabusTable(false);
  });

  document.getElementById('btn-print-blank-syllabus').addEventListener('click', () => {
    printSyllabusTable(true);
  });

  document.getElementById('btn-save-early-framework1').addEventListener('click', () => {
    state.earlyFramework1Text = document.getElementById('editor-early-framework1').value;
    saveStateToStorage();
    showToast('បានរក្សាទុកក្របខណ្ឌអត្ថបទ១រួចរាល់!', 'success');
  });

  document.getElementById('btn-save-early-framework2').addEventListener('click', () => {
    state.earlyFramework2Text = document.getElementById('editor-early-framework2').value;
    saveStateToStorage();
    showToast('បានរក្សាទុកក្របខណ្ឌអត្ថបទ២រួចរាល់!', 'success');
  });

  document.getElementById('btn-save-early-curriculum').addEventListener('click', () => {
    state.earlyCurriculumText = document.getElementById('editor-early-curriculum').value;
    saveStateToStorage();
    showToast('បានរក្សាទុកកម្មវិធីសិក្សារួចរាល់!', 'success');
  });

  document.getElementById('btn-save-early-other').addEventListener('click', () => {
    state.earlyOtherText = document.getElementById('editor-early-other').value;
    saveStateToStorage();
    showToast('បានរក្សាទុកឯកសាររួចរាល់!', 'success');
  });
}

// --- SYLLABUS TABLE EDITOR HELPER FUNCTIONS ---
function getSyllabusData() {
  let raw = state.earlySyllabusText;
  if (!raw) {
    raw = localStorage.getItem('hnbps_earlySyllabusText') || initialEarlySyllabus;
  }
  
  try {
    const data = JSON.parse(raw);
    if (data && data.rows && Array.isArray(data.rows)) {
      return data;
    }
  } catch (e) {
    // raw plain text mock string parser
  }
  
  const defaultSyllabus = {
    month: "កក្កដា",
    semester: "ទី១",
    rows: []
  };
  
  const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  lines.forEach((line, index) => {
    const match = line.match(/^([០-៩\d]+)\.\s*(.*)$/);
    if (match) {
      defaultSyllabus.rows.push({
        date: match[1],
        content: match[2],
        classHours: "៤",
        selfHours: "២",
        notes: ""
      });
    } else if (line !== "សម្រង់អត្ថបទគំរូ និងសេចក្ដីណែនាំបង្រៀន") {
      defaultSyllabus.rows.push({
        date: (index + 1).toString(),
        content: line,
        classHours: "៤",
        selfHours: "២",
        notes: ""
      });
    }
  });
  
  if (defaultSyllabus.rows.length === 0) {
    defaultSyllabus.rows = [
      { date: "១", content: "មុនវិជ្ជាភាសាខ្មែរ៖ ស្គាល់តួអក្សរស្រៈព្យញ្ជនៈ ស្រៈ និងការអានពាក្យខ្លីៗងាយៗ។", classHours: "៤", selfHours: "២", notes: "" },
      { date: "២", content: "មុនវិជ្ជាគណិតវិទ្យា៖ ការស្គាល់លេខខ្មែរ លេខអារ៉ាប់ និងការគណនាបូកដកលេខខ្ទង់ទាប។", classHours: "៤", selfHours: "២", notes: "" },
      { date: "៣", content: "ការអប់រំសីលធម៌៖ ការបណ្តុះវិន័យ សីលធម៌សមរម្យ និងការយល់ដឹងពីសាសនាផ្សេងៗ។", classHours: "២", selfHours: "១", notes: "" }
    ];
  }
  
  return defaultSyllabus;
}

function loadSyllabusTableEditor() {
  const data = getSyllabusData();
  
  document.getElementById('syllabus-month-input').value = data.month || "";
  document.getElementById('syllabus-semester-select').value = data.semester || "ទី១";
  
  const tbody = document.getElementById('syllabus-table-body');
  tbody.innerHTML = "";
  
  data.rows.forEach(row => {
    addSyllabusRowToDOM(row);
  });
}

function addSyllabusRowToDOM(row = { date: "", content: "", classHours: "", selfHours: "", notes: "" }) {
  const tbody = document.getElementById('syllabus-table-body');
  const tr = document.createElement('tr');
  tr.style.borderBottom = '1px solid var(--border-color)';
  tr.innerHTML = `
    <td style="padding: 8px 10px; text-align: center;">
      <input type="text" class="syllabus-row-date" value="${row.date}" style="width: 100%; text-align: center; border: 1px solid var(--border-color); background: var(--primary-light); color: white; padding: 4px; border-radius: 4px;">
    </td>
    <td style="padding: 8px 10px;">
      <textarea class="syllabus-row-content" style="width: 100%; border: 1px solid var(--border-color); background: var(--primary-light); color: white; padding: 4px; border-radius: 4px; resize: vertical; min-height: 40px; font-family: var(--font-khmer);">${row.content}</textarea>
    </td>
    <td style="padding: 8px 10px; text-align: center;">
      <input type="text" class="syllabus-row-class-hours" value="${row.classHours}" style="width: 100%; text-align: center; border: 1px solid var(--border-color); background: var(--primary-light); color: white; padding: 4px; border-radius: 4px;">
    </td>
    <td style="padding: 8px 10px; text-align: center;">
      <input type="text" class="syllabus-row-self-hours" value="${row.selfHours}" style="width: 100%; text-align: center; border: 1px solid var(--border-color); background: var(--primary-light); color: white; padding: 4px; border-radius: 4px;">
    </td>
    <td style="padding: 8px 10px;">
      <input type="text" class="syllabus-row-notes" value="${row.notes}" style="width: 100%; border: 1px solid var(--border-color); background: var(--primary-light); color: white; padding: 4px; border-radius: 4px;">
    </td>
    <td style="padding: 8px 10px; text-align: center;">
      <button type="button" class="btn btn-secondary btn-sm btn-delete-syllabus-row" style="padding: 3px 8px !important; color: red;">&times;</button>
    </td>
  `;
  
  tr.querySelector('.btn-delete-syllabus-row').addEventListener('click', () => {
    tr.remove();
  });
  
  tbody.appendChild(tr);
}

function saveSyllabusTableData() {
  const month = document.getElementById('syllabus-month-input').value;
  const semester = document.getElementById('syllabus-semester-select').value;
  
  const rows = [];
  const tbody = document.getElementById('syllabus-table-body');
  const trs = tbody.querySelectorAll('tr');
  
  trs.forEach(tr => {
    const date = tr.querySelector('.syllabus-row-date').value;
    const content = tr.querySelector('.syllabus-row-content').value;
    const classHours = tr.querySelector('.syllabus-row-class-hours').value;
    const selfHours = tr.querySelector('.syllabus-row-self-hours').value;
    const notes = tr.querySelector('.syllabus-row-notes').value;
    
    if (content.trim()) {
      rows.push({ date, content, classHours, selfHours, notes });
    }
  });
  
  const data = { month, semester, rows };
  state.earlySyllabusText = JSON.stringify(data);
  saveStateToStorage();
}

function printSyllabusTable(isBlank = false) {
  const data = getSyllabusData();
  const schoolName = state.schoolInfo.name || "សាលារៀន";
  const principalType = state.schoolInfo.principalType || "នាយក";

  const printWindowDiv = document.createElement('div');
  printWindowDiv.id = 'syllabus-print-view';
  
  const style = document.createElement('style');
  style.innerHTML = `
    /* Hide from screen display */
    #syllabus-print-view {
      display: none !important;
    }
    
    @media print {
      body * {
        visibility: hidden;
      }
      #syllabus-print-view, #syllabus-print-view * {
        visibility: visible;
      }
      #syllabus-print-view {
        display: block !important;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        color: black !important;
        background: white !important;
        font-family: "Khmer OS Battambang", "Arial", sans-serif;
        padding: 5mm 5mm;
        box-sizing: border-box;
      }
      @page {
        size: A4 portrait;
        margin: 15mm 10mm;
      }
    }
    
    .print-header {
      text-align: center;
      margin-bottom: 25px;
    }
    .print-title-main {
      font-family: "Khmer OS Muol Light", "Khmer OS Muol", sans-serif;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .print-title-sub {
      font-size: 13px;
      font-weight: normal;
    }
    .print-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }
    .print-table th, .print-table td {
      border: 1px solid black !important;
      padding: 6px 4px !important;
      font-size: 12px;
      color: black;
      line-height: 1.3 !important;
    }
    .print-table td {
      height: 28px; /* Give it a nice height for hand-writing */
    }
    .print-table th {
      font-family: "Khmer OS Muol Light", sans-serif;
      font-weight: normal;
      background-color: #f2f2f2 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      text-align: center;
    }
    .print-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      padding: 0 20px;
    }
    .print-footer-column {
      text-align: center;
      width: 200px;
      font-size: 12px;
    }
    .print-footer-title {
      font-family: "Khmer OS Muol Light", sans-serif;
      font-size: 12px;
      margin-bottom: 70px;
    }
  `;
  document.head.appendChild(style);

  let rowsHtml = '';
  
  if (isBlank) {
    // Render 15 empty rows for writing by hand
    for (let i = 0; i < 15; i++) {
      rowsHtml += `
        <tr>
          <td style="text-align: center; width: 10%;"></td>
          <td style="width: 56%; text-align: left; padding-left: 8px;"></td>
          <td style="text-align: center; width: 11%;"></td>
          <td style="text-align: center; width: 11%;"></td>
          <td style="width: 12%;"></td>
        </tr>
      `;
    }
  } else {
    // Render exactly the rows filled by the user
    const maxRows = data.rows.length;
    for (let i = 0; i < maxRows; i++) {
      const row = data.rows[i] || { date: "", content: "", classHours: "", selfHours: "", notes: "" };
      rowsHtml += `
        <tr>
          <td style="text-align: center; width: 10%;">${row.date || ""}</td>
          <td style="width: 56%; text-align: left; padding-left: 8px;">${row.content || ""}</td>
          <td style="text-align: center; width: 11%;">${row.classHours || ""}</td>
          <td style="text-align: center; width: 11%;">${row.selfHours || ""}</td>
          <td style="width: 12%;">${row.notes || ""}</td>
        </tr>
      `;
    }
  }

  printWindowDiv.innerHTML = `
    <div class="print-header">
      <div class="print-title-main">សម្រង់អត្ថបទបង្រៀន</div>
      <div class="print-title-sub" style="font-family: 'Khmer OS Battambang', sans-serif;">ប្រចាំខែ <span style="border-bottom: 1px dotted black; padding: 0 15px; font-weight: bold;">${data.month || "............."}</span> ឆមាសទី <span style="border-bottom: 1px dotted black; padding: 0 15px; font-weight: bold;">${data.semester || "............."}</span></div>
    </div>
    
    <table class="print-table">
      <thead>
        <tr>
          <th rowspan="2" style="width: 10%;">ថ្ងៃខែ / ល.រ</th>
          <th rowspan="2" style="width: 56%;">ខ្លឹមសារមេរៀន / សកម្មភាព</th>
          <th colspan="2" style="width: 22%;">ម៉ោងសិក្សា</th>
          <th rowspan="2" style="width: 12%;">ផ្សេងៗ / ចំណាំ</th>
        </tr>
        <tr>
          <th style="font-size: 10px; font-family: 'Khmer OS Battambang', sans-serif; padding: 4px 2px !important; font-weight: bold;">ក្នុងថ្នាក់</th>
          <th style="font-size: 10px; font-family: 'Khmer OS Battambang', sans-serif; padding: 4px 2px !important; font-weight: bold;">ស្វ័យសិក្សា</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
    
    <div style="text-align: right; font-size: 12px; margin-right: 40px; margin-bottom: 5px; font-family: 'Khmer OS Battambang', sans-serif;">
      ថ្ងៃទី........ ខែ........ ឆ្នាំ២០២...
    </div>
    
    <div class="print-footer" style="font-family: 'Khmer OS Battambang', sans-serif;">
      <div class="print-footer-column">
        <div class="print-footer-title" style="font-family: 'Khmer OS Muol Light', sans-serif;">${principalType}សាលា</div>
        <div style="font-size: 11px; color: #888;">(ហត្ថលេខា និងត្រា)</div>
      </div>
      <div class="print-footer-column">
        <div class="print-footer-title" style="font-family: 'Khmer OS Muol Light', sans-serif;">គ្រូបង្រៀន</div>
        <div style="font-size: 11px; color: #888;">(ហត្ថលេខា និងឈ្មោះ)</div>
      </div>
    </div>
  `;

  document.body.appendChild(printWindowDiv);
  window.print();
  
  setTimeout(() => {
    printWindowDiv.remove();
    style.remove();
  }, 1000);
}


// --- SCHOOL SUB-MENU LOGIC ---
function setupSchoolSubMenuLogic() {
  document.getElementById('btn-save-rules1').addEventListener('click', () => saveSchoolTextEditor('rules1', 'editor-rules1'));
  document.getElementById('btn-save-rules2').addEventListener('click', () => saveSchoolTextEditor('rules2', 'editor-rules2'));
  document.getElementById('btn-save-pedagogy1').addEventListener('click', () => saveSchoolTextEditor('pedagogy1', 'editor-pedagogy1'));
  document.getElementById('btn-save-pedagogy2').addEventListener('click', () => saveSchoolTextEditor('pedagogy2', 'editor-pedagogy2'));
  document.getElementById('btn-save-notes').addEventListener('click', () => saveSchoolTextEditor('notes', 'editor-notes'));

  document.getElementById('timetable-grade-select').addEventListener('change', (e) => {
    state.selectedTimetableGrade = e.target.value;
    renderTimetableEditor();
  });

  document.getElementById('btn-save-timetable').addEventListener('click', () => {
    const grade = state.selectedTimetableGrade;
    const list = [];
    
    document.querySelectorAll('.timetable-row-data').forEach(row => {
      const day = row.getAttribute('data-day');
      const m1 = row.querySelector('.tt-m1').value;
      const m2 = row.querySelector('.tt-m2').value;
      const a1 = row.querySelector('.tt-a1').value;
      const a2 = row.querySelector('.tt-a2').value;
      list.push({ day, m1, m2, a1, a2 });
    });

    state.timetables[grade] = list;
    saveStateToStorage();
    showToast('បានរក្សាទុកកាលវិភាគដោយជោគជ័យ!', 'success');
  });
}

function renderLateWorkChecklist() {
  const container = document.getElementById('late-checklist-container');
  container.innerHTML = '';
  
  state.lateWork.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `checklist-item ${item.checked ? 'checked' : ''}`;
    itemDiv.innerHTML = `
      <input type="checkbox" class="checklist-checkbox" ${item.checked ? 'checked' : ''}>
      <span class="checklist-text">${item.text}</span>
      <button class="btn-remove-item" title="លុបចោល">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;

    itemDiv.querySelector('.checklist-checkbox').addEventListener('change', (e) => {
      item.checked = e.target.checked;
      itemDiv.className = `checklist-item ${item.checked ? 'checked' : ''}`;
      saveStateToStorage();
    });

    itemDiv.querySelector('.btn-remove-item').addEventListener('click', () => {
      state.lateWork = state.lateWork.filter(i => i.id !== item.id);
      saveStateToStorage();
      renderLateWorkChecklist();
    });

    container.appendChild(itemDiv);
  });
}

function loadSchoolTextEditor(key, editorId) {
  const text = state.schoolTexts[key] || '';
  document.getElementById(editorId).value = text;
}

function saveSchoolTextEditor(key, editorId) {
  const text = document.getElementById(editorId).value;
  state.schoolTexts[key] = text;
  saveStateToStorage();
  showToast('បានរក្សាទុកឯកសារដោយជោគជ័យ!', 'success');
}

function renderTimetableEditor() {
  const container = document.getElementById('timetable-editor-grid');
  container.innerHTML = '';

  const grade = state.selectedTimetableGrade;
  const list = state.timetables[grade] || [];

  let html = `
    <div class="timetable-header-cell">ថ្ងៃសិក្សា</div>
    <div class="timetable-header-cell">ព្រឹក ម៉ោងទី១</div>
    <div class="timetable-header-cell">ព្រឹក ម៉ោងទី២</div>
    <div class="timetable-header-cell">រសៀល ម៉ោងទី១</div>
    <div class="timetable-header-cell">រសៀល ម៉ោងទី២</div>
  `;

  const days = ["ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ"];

  days.forEach(day => {
    const record = list.find(r => r.day === day) || { m1: "", m2: "", a1: "", a2: "" };
    html += `
      <div class="timetable-day-cell">${day}</div>
      <div class="timetable-input-cell timetable-row-data" data-day="${day}">
        <input type="text" class="tt-m1" value="${record.m1}" placeholder="ទំនេរ">
      </div>
      <div class="timetable-input-cell">
        <input type="text" class="tt-m2" value="${record.m2}" placeholder="ទំនេរ">
      </div>
      <div class="timetable-input-cell">
        <input type="text" class="tt-a1" value="${record.a1}" placeholder="ទំនេរ">
      </div>
      <div class="timetable-input-cell">
        <input type="text" class="tt-a2" value="${record.a2}" placeholder="ទំនេរ">
      </div>
    `;
  });

  container.innerHTML = html;
  
  container.querySelectorAll('.timetable-row-data').forEach(rowCell => {
    const parentRow = rowCell;
    const m2Cell = parentRow.nextElementSibling;
    const a1Cell = m2Cell.nextElementSibling;
    const a2Cell = a1Cell.nextElementSibling;

    m2Cell.querySelector('input').className = 'tt-m2';
    a1Cell.querySelector('input').className = 'tt-a1';
    a2Cell.querySelector('input').className = 'tt-a2';
    
    m2Cell.setAttribute('data-day', parentRow.getAttribute('data-day'));
    a1Cell.setAttribute('data-day', parentRow.getAttribute('data-day'));
    a2Cell.setAttribute('data-day', parentRow.getAttribute('data-day'));
  });
}

// --- DASHBOARD VIEW ---
function renderDashboardStats() {
  const totalStudents = state.students.length;
  const femaleStudents = state.students.filter(s => s.gender === 'ស្រី').length;
  const maleStudents = totalStudents - femaleStudents;
  const totalStaff = state.staff.length;
  const totalTeachers = state.staff.filter(s => s.role === 'teacher' || s.role === 'vice-principal').length;
  const totalOfficers = totalStaff - totalTeachers;

  document.getElementById('stat-total-students').innerText = totalStudents;
  document.getElementById('stat-student-genders').innerText = `ប្រុស: ${maleStudents} | ស្រី: ${femaleStudents}`;
  document.getElementById('stat-total-teachers').innerText = totalTeachers;
  document.getElementById('stat-total-officers').innerText = totalOfficers;

  const currentMonthData = state.attendance[state.selectedMonth];
  let markedToday = 0;
  let presentToday = 0;

  if (currentMonthData) {
    Object.keys(currentMonthData).forEach(grade => {
      Object.keys(currentMonthData[grade]).forEach(stuId => {
        const records = currentMonthData[grade][stuId];
        const days = Object.keys(records);
        if (days.length > 0) {
          const lastDay = days[days.length - 1];
          markedToday++;
          if (records[lastDay] === 'P') presentToday++;
        }
      });
    });
  }

  const attendanceRate = markedToday > 0 ? Math.round((presentToday / markedToday) * 100) : 98;
  document.getElementById('stat-attendance-rate').innerText = `${attendanceRate}%`;
}

// --- SCHOOL PROFILE & ORG CHART ---
function renderSchoolProfile() {
  const info = state.schoolInfo;
  
  // Excel panel labels/values
  document.getElementById('school-val-ministry').innerText = info.ministry || '-';
  document.getElementById('school-val-department').innerText = info.department || '-';
  document.getElementById('school-val-name').innerText = info.name || '-';
  document.getElementById('school-val-nameLevel1').innerText = info.nameLevel1 || '-';
  document.getElementById('school-val-academicYear').innerText = info.academicYear || '-';
  document.getElementById('school-val-principalType').innerText = info.principalType || '-';
  document.getElementById('school-val-personInCharge').innerText = info.personInCharge || '-';
  document.getElementById('school-val-lunarDate').innerText = info.lunarDate || '-';
  document.getElementById('school-val-solarDate').innerText = info.solarDate || '-';
  
  document.getElementById('school-val-province').innerText = info.province || '-';
  document.getElementById('school-val-district').innerText = info.district || '-';
  document.getElementById('school-val-commune').innerText = info.commune || '-';
  document.getElementById('school-val-village').innerText = info.village || '-';
  
  // Extra fields
  document.getElementById('school-name-en').innerText = info.englishName || '-';
  document.getElementById('profile-established').innerText = info.established || '-';
  document.getElementById('profile-phone').innerText = info.phone || '-';
  document.getElementById('profile-email').innerText = info.email || '-';
  document.getElementById('profile-vision').innerText = info.vision || '-';
  
  // Populate form inputs
  document.getElementById('edit-school-ministry').value = info.ministry || '';
  document.getElementById('edit-school-department').value = info.department || '';
  document.getElementById('edit-school-name').value = info.name || '';
  document.getElementById('edit-school-nameLevel1').value = info.nameLevel1 || '';
  document.getElementById('edit-school-startYear').value = info.startYear || '';
  document.getElementById('edit-school-endYear').value = info.endYear || '';
  document.getElementById('edit-school-principalType').value = info.principalType || 'ព្រះនាយក';
  document.getElementById('edit-school-personInCharge').value = info.personInCharge || '';
  document.getElementById('edit-school-lunarDate').value = info.lunarDate || '';
  document.getElementById('edit-school-solarDate').value = info.solarDate || '';
  
  document.getElementById('edit-school-province').value = info.province || '';
  document.getElementById('edit-school-district').value = info.district || '';
  document.getElementById('edit-school-commune').value = info.commune || '';
  document.getElementById('edit-school-village').value = info.village || '';
  
  document.getElementById('edit-school-eng').value = info.englishName || '';
  document.getElementById('edit-school-established').value = info.established || '';
  document.getElementById('edit-school-phone').value = info.phone || '';
  document.getElementById('edit-school-email').value = info.email || '';
  document.getElementById('edit-school-vision').value = info.vision || '';
}

function setupSchoolHandlers() {
  document.getElementById('btn-edit-school').addEventListener('click', () => {
    openModal('school-modal');
  });

  document.getElementById('school-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const startYear = document.getElementById('edit-school-startYear').value;
    const endYear = document.getElementById('edit-school-endYear').value;
    
    state.schoolInfo = {
      ministry: document.getElementById('edit-school-ministry').value,
      department: document.getElementById('edit-school-department').value,
      name: document.getElementById('edit-school-name').value,
      nameLevel1: document.getElementById('edit-school-nameLevel1').value,
      startYear: startYear,
      endYear: endYear,
      academicYear: `${startYear}-${endYear}`,
      principalType: document.getElementById('edit-school-principalType').value,
      personInCharge: document.getElementById('edit-school-personInCharge').value,
      lunarDate: document.getElementById('edit-school-lunarDate').value,
      solarDate: document.getElementById('edit-school-solarDate').value,
      
      province: document.getElementById('edit-school-province').value,
      district: document.getElementById('edit-school-district').value,
      commune: document.getElementById('edit-school-commune').value,
      village: document.getElementById('edit-school-village').value,
      
      englishName: document.getElementById('edit-school-eng').value,
      established: document.getElementById('edit-school-established').value,
      phone: document.getElementById('edit-school-phone').value,
      email: document.getElementById('edit-school-email').value,
      vision: document.getElementById('edit-school-vision').value
    };
    
    saveStateToStorage();
    renderSchoolProfile();
    closeModal('school-modal');
    showToast('បានកែប្រែព័ត៌មានសាលាដោយជោគជ័យ!', 'success');
  });
}

let currentEditingNodeRef = null;
let tempNodePhoto = '';

function renderOrgChart() {
  const container = document.getElementById('org-chart-container');
  if (!container) return;
  container.innerHTML = '';

  // 1. RENDER DEFAULT MAIN LEADERSHIP CHART
  const defaultChartWrapper = document.createElement('div');
  defaultChartWrapper.className = 'custom-orgchart-box';
  
  const principal = state.staff.find(s => s.role === 'principal');
  let viceLeft = state.staff.find(s => s.role === 'vice-principal-left');
  let viceRight = state.staff.find(s => s.role === 'vice-principal-right');
  
  const legacyVps = state.staff.filter(s => s.role === 'vice-principal');
  if (!viceLeft && legacyVps[0]) viceLeft = legacyVps[0];
  if (!viceRight && legacyVps[1]) viceRight = legacyVps[1];

  const teachers = state.staff.filter(s => s.role === 'teacher');
  const staffMembers = state.staff.filter(s => s.role === 'staff');

  const createNodeHTML = (member, fallbackRole, defaultPosLabel) => {
    if (!member) {
      return `
        <div class="chart-node empty-node" data-role="${fallbackRole}">
          <div class="node-photo empty-photo">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
          <div class="node-title" style="color: var(--text-muted); font-size: 13px;">+ បន្ថែមព័ត៌មាន</div>
          <div class="node-position">${defaultPosLabel}</div>
          <span class="node-role-badge role-${fallbackRole}">${getRoleNameKhmer(fallbackRole)}</span>
        </div>
      `;
    }

    const photoHTML = member.photo 
      ? `<img src="${member.photo}" class="node-photo" alt="${member.name}">` 
      : `<div class="node-photo"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>`;
    
    const phoneHTML = member.phone ? `
      <div class="node-phone">
        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span>${member.phone}</span>
      </div>
    ` : `<div class="node-phone" style="opacity: 0.5;"><span>-</span></div>`;

    return `
      <div class="chart-node clickable-node" data-id="${member.id}">
        ${photoHTML}
        <div class="node-title">${member.name}</div>
        <div class="node-position">${member.position || getRoleNameKhmer(member.role)}</div>
        <span class="node-role-badge role-${member.role}">${getRoleNameKhmer(member.role)}</span>
        ${phoneHTML}
      </div>
    `;
  };

  let mainHtml = `
    <div class="custom-orgchart-header">
      <div class="custom-orgchart-title">
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        រចនាសម្ព័ន្ធដឹកនាំសាលារៀន (ទូទៅ)
      </div>
    </div>
    <div class="org-chart-wrapper">
      <div class="chart-row level-1">${createNodeHTML(principal, 'principal', 'នាយក / ព្រះចៅអធិការ')}</div>
      <div class="chart-connector-vertical"></div>
      <div class="chart-row level-2 vice-principals-row">
        <div class="vice-col">
          <div class="vice-header-tag">នាយករង ទី១ (ខាងឆ្វេង)</div>
          ${createNodeHTML(viceLeft, 'vice-principal-left', 'នាយករង (ខាងឆ្វេង)')}
        </div>
        <div class="vice-col">
          <div class="vice-header-tag">នាយករង ទី២ (ខាងស្តាំ)</div>
          ${createNodeHTML(viceRight, 'vice-principal-right', 'នាយករង (ខាងស្តាំ)')}
        </div>
      </div>
      <div class="chart-connector-vertical"></div>
      <div class="chart-row level-3 teachers-row">
  `;

  teachers.forEach(t => mainHtml += createNodeHTML(t, 'teacher', 'គ្រូបង្រៀន'));
  staffMembers.forEach(s => mainHtml += createNodeHTML(s, 'staff', 'មន្ត្រីរដ្ឋបាល'));
  if (teachers.length === 0 && staffMembers.length === 0) {
    mainHtml += `<div class="empty-teacher-notice" style="color: var(--text-muted); font-size: 13px;">គ្មានទិន្នន័យគ្រូបង្រៀននៅឡើយ</div>`;
  }
  mainHtml += `</div></div>`;

  defaultChartWrapper.innerHTML = mainHtml;
  container.appendChild(defaultChartWrapper);

  // Click handlers for default chart
  defaultChartWrapper.querySelectorAll('.clickable-node').forEach(node => {
    node.addEventListener('click', () => {
      const id = node.getAttribute('data-id');
      const member = state.staff.find(s => s.id === id);
      if (member) openStaffModal(member);
    });
  });

  defaultChartWrapper.querySelectorAll('.empty-node').forEach(node => {
    node.addEventListener('click', () => {
      const role = node.getAttribute('data-role');
      openStaffModal(null);
      if (role) document.getElementById('staff-role').value = role;
    });
  });

  // 2. RENDER CUSTOM ORG CHARTS
  if (state.customOrgCharts && state.customOrgCharts.length > 0) {
    state.customOrgCharts.forEach(chart => {
      const customWrapper = document.createElement('div');
      customWrapper.className = 'custom-orgchart-box';
      customWrapper.setAttribute('data-chart-id', chart.id);

      const createCustomNodeHTML = (nodeData, slotType, index = null, defaultLabel = 'សមាជិក') => {
        if (!nodeData) {
          return `
            <div class="chart-node empty-node custom-node-btn" data-chart-id="${chart.id}" data-slot-type="${slotType}" ${index !== null ? `data-index="${index}"` : ''}>
              <div class="node-photo empty-photo">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div class="node-title" style="color: var(--text-muted); font-size: 13px;">+ បន្ថែមព័ត៌មាន</div>
              <div class="node-position">${defaultLabel}</div>
            </div>
          `;
        }

        const photoHTML = nodeData.photo 
          ? `<img src="${nodeData.photo}" class="node-photo" alt="${nodeData.name}">` 
          : `<div class="node-photo"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>`;
        
        const phoneHTML = nodeData.phone ? `
          <div class="node-phone">
            <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>${nodeData.phone}</span>
          </div>
        ` : `<div class="node-phone" style="opacity: 0.5;"><span>-</span></div>`;

        return `
          <div class="chart-node clickable-node custom-node-btn" data-chart-id="${chart.id}" data-slot-type="${slotType}" ${index !== null ? `data-index="${index}"` : ''}>
            ${photoHTML}
            <div class="node-title">${nodeData.name}</div>
            <div class="node-position">${nodeData.position || defaultLabel}</div>
            ${phoneHTML}
          </div>
        `;
      };

      const nodes = chart.nodes || {};
      let membersHTML = '';
      if (nodes.members && nodes.members.length > 0) {
        nodes.members.forEach((m, idx) => {
          membersHTML += createCustomNodeHTML(m, 'members', idx, 'សមាជិក');
        });
      }

      customWrapper.innerHTML = `
        <div class="custom-orgchart-header">
          <div class="custom-orgchart-title">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            ${chart.title}
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-edit-chart-title" data-chart-id="${chart.id}" style="font-size: 11px; padding: 4px 10px;">✏️ កែប្រែឈ្មោះ</button>
            <button class="btn btn-danger btn-delete-chart" data-chart-id="${chart.id}" style="font-size: 11px; padding: 4px 10px;">🗑️ លុប</button>
          </div>
        </div>
        <div class="org-chart-wrapper">
          <div class="chart-row level-1">
            ${createCustomNodeHTML(nodes.head, 'head', null, 'ប្រធាន')}
          </div>
          <div class="chart-connector-vertical"></div>
          <div class="chart-row level-2 vice-principals-row">
            <div class="vice-col">
              <div class="vice-header-tag">អនុប្រធាន ទី១ (ខាងឆ្វេង)</div>
              ${createCustomNodeHTML(nodes.viceLeft, 'viceLeft', null, 'អនុប្រធាន (ខាងឆ្វេង)')}
            </div>
            <div class="vice-col">
              <div class="vice-header-tag">អនុប្រធាន ទី២ (ខាងស្តាំ)</div>
              ${createCustomNodeHTML(nodes.viceRight, 'viceRight', null, 'អនុប្រធាន (ខាងស្តាំ)')}
            </div>
          </div>
          <div class="chart-connector-vertical"></div>
          <div class="chart-row level-3 teachers-row">
            ${membersHTML}
          </div>
          <div class="add-member-btn-container">
            <button class="btn btn-secondary btn-add-chart-member" data-chart-id="${chart.id}" style="font-size: 12px; display: inline-flex; align-items: center; gap: 6px;">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              + បន្ថែមសមាជិក
            </button>
          </div>
        </div>
      `;

      container.appendChild(customWrapper);

      // Event handlers for custom chart
      customWrapper.querySelectorAll('.custom-node-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const cId = btn.getAttribute('data-chart-id');
          const slotType = btn.getAttribute('data-slot-type');
          const idxAttr = btn.getAttribute('data-index');
          const index = idxAttr !== null ? parseInt(idxAttr, 10) : null;
          
          openCustomNodeModal(cId, slotType, index);
        });
      });

      customWrapper.querySelector('.btn-edit-chart-title').addEventListener('click', () => {
        const newTitle = prompt('កែប្រែឈ្មោះរចនាសម្ព័ន្ធ៖', chart.title);
        if (newTitle && newTitle.trim()) {
          chart.title = newTitle.trim();
          saveStateToStorage();
          renderOrgChart();
          showToast('បានកែប្រែឈ្មោះរចនាសម្ព័ន្ធរួចរាល់!', 'success');
        }
      });

      customWrapper.querySelector('.btn-delete-chart').addEventListener('click', () => {
        if (confirm(`តើអ្នកពិតជាចង់លុបរចនាសម្ព័ន្ធ «${chart.title}» នេះមែនទេ?`)) {
          state.customOrgCharts = state.customOrgCharts.filter(c => c.id !== chart.id);
          saveStateToStorage();
          renderOrgChart();
          showToast('បានលុបរចនាសម្ព័ន្ធរួចរាល់!', 'success');
        }
      });

      customWrapper.querySelector('.btn-add-chart-member').addEventListener('click', () => {
        openCustomNodeModal(chart.id, 'members', null);
      });
    });
  }
}

function setupCustomOrgChartHandlers() {
  const addBtn = document.getElementById('btn-add-custom-orgchart');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      document.getElementById('new-orgchart-title').value = '';
      openModal('orgchart-create-modal');
    });
  }

  const createForm = document.getElementById('orgchart-create-form');
  if (createForm) {
    createForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('new-orgchart-title').value.trim();
      if (!title) return;

      const newChart = {
        id: 'chart_' + Date.now(),
        title,
        nodes: {
          head: null,
          viceLeft: null,
          viceRight: null,
          members: []
        }
      };

      if (!state.customOrgCharts) state.customOrgCharts = [];
      state.customOrgCharts.push(newChart);
      saveStateToStorage();
      renderOrgChart();
      closeModal('orgchart-create-modal');
      showToast('បានបង្កើតរចនាសម្ព័ន្ធថ្មីរួចរាល់!', 'success');
    });
  }

  const photoInput = document.getElementById('node-photo-input');
  if (photoInput) {
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          tempNodePhoto = evt.target.result;
          document.getElementById('node-photo-preview').src = tempNodePhoto;
          document.getElementById('node-photo-preview').style.display = 'block';
          document.getElementById('node-photo-placeholder').style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const picker = document.getElementById('node-staff-picker');
  if (picker) {
    picker.addEventListener('change', (e) => {
      const staffId = e.target.value;
      if (!staffId) return;
      const member = state.staff.find(s => s.id === staffId);
      if (member) {
        document.getElementById('node-name').value = member.name;
        document.getElementById('node-position').value = member.position || getRoleNameKhmer(member.role);
        document.getElementById('node-phone').value = member.phone || '';
        if (member.photo) {
          tempNodePhoto = member.photo;
          document.getElementById('node-photo-preview').src = tempNodePhoto;
          document.getElementById('node-photo-preview').style.display = 'block';
          document.getElementById('node-photo-placeholder').style.display = 'none';
        }
      }
    });
  }

  const editForm = document.getElementById('orgnode-edit-form');
  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!currentEditingNodeRef) return;

      const { chartId, slotType, index } = currentEditingNodeRef;
      const chart = state.customOrgCharts.find(c => c.id === chartId);
      if (!chart) return;

      const nodeData = {
        name: document.getElementById('node-name').value.trim(),
        position: document.getElementById('node-position').value.trim(),
        phone: document.getElementById('node-phone').value.trim(),
        photo: tempNodePhoto
      };

      if (!chart.nodes) {
        chart.nodes = { head: null, viceLeft: null, viceRight: null, members: [] };
      }

      if (slotType === 'members') {
        if (!chart.nodes.members) chart.nodes.members = [];
        if (index !== null && index >= 0 && chart.nodes.members[index]) {
          chart.nodes.members[index] = nodeData;
        } else {
          chart.nodes.members.push(nodeData);
        }
      } else {
        chart.nodes[slotType] = nodeData;
      }

      saveStateToStorage();
      renderOrgChart();
      closeModal('orgnode-edit-modal');
      showToast('បានកែប្រែព័ត៌មានសមាជិករចនាសម្ព័ន្ធរួចរាល់!', 'success');
    });
  }
}

function openCustomNodeModal(chartId, slotType, index = null) {
  currentEditingNodeRef = { chartId, slotType, index };
  tempNodePhoto = '';

  const picker = document.getElementById('node-staff-picker');
  if (picker) {
    picker.innerHTML = '<option value="">-- ជ្រើសរើសដើម្បីបំពេញស្វ័យប្រវត្ត --</option>';
    state.staff.forEach(s => {
      picker.innerHTML += `<option value="${s.id}">${s.name} (${s.position || getRoleNameKhmer(s.role)})</option>`;
    });
  }

  const chart = state.customOrgCharts.find(c => c.id === chartId);
  let existingNode = null;
  if (chart && chart.nodes) {
    if (slotType === 'members') {
      if (index !== null && chart.nodes.members && chart.nodes.members[index]) {
        existingNode = chart.nodes.members[index];
      }
    } else {
      existingNode = chart.nodes[slotType];
    }
  }

  if (existingNode) {
    document.getElementById('node-name').value = existingNode.name || '';
    document.getElementById('node-position').value = existingNode.position || '';
    document.getElementById('node-phone').value = existingNode.phone || '';
    if (existingNode.photo) {
      tempNodePhoto = existingNode.photo;
      document.getElementById('node-photo-preview').src = tempNodePhoto;
      document.getElementById('node-photo-preview').style.display = 'block';
      document.getElementById('node-photo-placeholder').style.display = 'none';
    } else {
      document.getElementById('node-photo-preview').style.display = 'none';
      document.getElementById('node-photo-placeholder').style.display = 'flex';
    }
  } else {
    document.getElementById('node-name').value = '';
    let defaultPos = 'សមាជិក';
    if (slotType === 'head') defaultPos = 'ប្រធាន';
    else if (slotType === 'viceLeft') defaultPos = 'អនុប្រធាន (ខាងឆ្វេង)';
    else if (slotType === 'viceRight') defaultPos = 'អនុប្រធាន (ខាងស្តាំ)';
    
    document.getElementById('node-position').value = defaultPos;
    document.getElementById('node-phone').value = '';
    document.getElementById('node-photo-preview').style.display = 'none';
    document.getElementById('node-photo-placeholder').style.display = 'flex';
  }

  openModal('orgnode-edit-modal');
}

function getRoleNameKhmer(role) {
  switch (role) {
    case 'principal': return 'នាយក / ព្រះចៅអធិការ';
    case 'vice-principal': return 'នាយករង';
    case 'vice-principal-left': return 'នាយករង ទី១ (ខាងឆ្វេង)';
    case 'vice-principal-right': return 'នាយករង ទី២ (ខាងស្តាំ)';
    case 'teacher': return 'គ្រូបង្រៀន';
    case 'staff': return 'មន្ត្រីរដ្ឋបាល';
    default: return role;
  }
}

// --- STAFF VIEW ---
function renderStaffList() {
  const tbody = document.getElementById('staff-table-body');
  tbody.innerHTML = '';

  let filteredStaff = state.staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          member.id.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          member.position.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesFilter = state.selectedStaffFilter === 'all' || member.role === state.selectedStaffFilter;
    return matchesSearch && matchesFilter;
  });

  filteredStaff.forEach(member => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${member.id}</td>
      <td><strong>${member.name}</strong></td>
      <td>${member.gender}</td>
      <td>${member.position}</td>
      <td>${member.phone}</td>
      <td>${member.email}</td>
      <td>
        <button class="btn-icon view-card" data-id="${member.id}" title="កាតសម្គាល់ខ្លួន" style="color: #a855f7;">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="4"></line><line x1="8" y1="2" x2="8" y2="4"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </button>
        <button class="btn-icon edit" data-id="${member.id}" title="កែប្រែ">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
        </button>
        <button class="btn-icon delete" data-id="${member.id}" title="លុប">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.view-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const member = state.staff.find(s => s.id === btn.getAttribute('data-id'));
      openStaffCardModal(member);
    });
  });

  tbody.querySelectorAll('.edit').forEach(btn => {
    btn.addEventListener('click', () => {
      const member = state.staff.find(s => s.id === btn.getAttribute('data-id'));
      openStaffModal(member);
    });
  });

  tbody.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('តើអ្នកពិតជាចង់លុបមន្ត្រី/គ្រូនេះមែនទេ?')) {
        state.staff = state.staff.filter(s => s.id !== btn.getAttribute('data-id'));
        saveStateToStorage();
        renderStaffList();
        renderOrgChart();
        showToast('បានលុបព័ត៌មានរួចរាល់!', 'success');
      }
    });
  });
}

function setupStaffHandlers() {
  document.getElementById('staff-search').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderStaffList();
  });

  document.getElementById('staff-role-filter').addEventListener('change', (e) => {
    state.selectedStaffFilter = e.target.value;
    renderStaffList();
  });

  document.getElementById('btn-add-staff').addEventListener('click', () => {
    openStaffModal(null);
  });

  document.getElementById('staff-photo-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById('staff-photo-preview').src = event.target.result;
        document.getElementById('staff-photo-preview').style.display = 'block';
        document.getElementById('staff-photo-placeholder').style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('staff-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('staff-id').value;
    const name = document.getElementById('staff-name').value;
    const gender = document.getElementById('staff-gender').value;
    const role = document.getElementById('staff-role').value;
    const position = document.getElementById('staff-position').value;
    const phone = document.getElementById('staff-phone').value;
    const email = document.getElementById('staff-email').value;
    const degree = document.getElementById('staff-degree').value;
    const joinedDate = document.getElementById('staff-joined-date').value;
    const photo = document.getElementById('staff-photo-preview').style.display === 'block' 
      ? document.getElementById('staff-photo-preview').src 
      : '';

    const newStaff = { id, name, gender, role, position, phone, email, degree, joinedDate, photo };

    const index = state.staff.findIndex(s => s.id === id);
    if (index > -1) {
      state.staff[index] = newStaff;
      showToast('បានកែប្រែព័ត៌មានដោយជោគជ័យ!', 'success');
    } else {
      state.staff.push(newStaff);
      showToast('បានបន្ថែមមន្ត្រី/គ្រូថ្មីដោយជោគជ័យ!', 'success');
    }

    saveStateToStorage();
    renderStaffList();
    renderOrgChart();
    closeModal('staff-modal');
  });

  document.getElementById('btn-print-staff-card').addEventListener('click', () => {
    const cardContent = document.getElementById('staff-card-preview').outerHTML;
    const printDiv = document.createElement('div');
    printDiv.id = 'print-view';
    printDiv.innerHTML = cardContent;
    document.body.appendChild(printDiv);
    
    window.print();
    document.getElementById('print-view').remove();
  });

  // --- IMPORT STAFF FROM EXCEL / GOOGLE SHEETS ---
  let tempParsedStaff = [];

  // Toggle Tab: Paste
  document.getElementById('btn-import-staff-tab-paste').addEventListener('click', () => {
    document.getElementById('btn-import-staff-tab-paste').style.color = 'var(--text-yellow)';
    document.getElementById('btn-import-staff-tab-paste').style.borderBottom = '3px solid var(--accent)';
    document.getElementById('btn-import-staff-tab-file').style.color = 'var(--text-muted)';
    document.getElementById('btn-import-staff-tab-file').style.borderBottom = 'none';
    
    document.getElementById('import-staff-tab-content-paste').style.display = 'block';
    document.getElementById('import-staff-tab-content-file').style.display = 'none';
  });

  // Toggle Tab: File
  document.getElementById('btn-import-staff-tab-file').addEventListener('click', () => {
    document.getElementById('btn-import-staff-tab-file').style.color = 'var(--text-yellow)';
    document.getElementById('btn-import-staff-tab-file').style.borderBottom = '3px solid var(--accent)';
    document.getElementById('btn-import-staff-tab-paste').style.color = 'var(--text-muted)';
    document.getElementById('btn-import-staff-tab-paste').style.borderBottom = 'none';
    
    document.getElementById('import-staff-tab-content-file').style.display = 'block';
    document.getElementById('import-staff-tab-content-paste').style.display = 'none';
  });

  // Open Modal
  document.getElementById('btn-import-staff').addEventListener('click', () => {
    tempParsedStaff = [];
    document.getElementById('import-staff-paste-area').value = '';
    document.getElementById('import-staff-file-input').value = '';
    document.getElementById('import-staff-file-name').style.display = 'none';
    document.getElementById('import-staff-preview-section').style.display = 'none';
    document.getElementById('btn-submit-import-staff').disabled = true;
    openModal('import-staff-modal');
  });

  // Process pasted content on input
  document.getElementById('import-staff-paste-area').addEventListener('input', (e) => {
    const text = e.target.value;
    processPastedStaffData(text);
  });

  function processPastedStaffData(text) {
    if (!text.trim()) {
      document.getElementById('import-staff-preview-section').style.display = 'none';
      document.getElementById('btn-submit-import-staff').disabled = true;
      return;
    }
    
    tempParsedStaff = parseImportStaffData(text);
    renderImportStaffPreview();
  }

  // File drag & drop / select
  const dragStaffArea = document.getElementById('import-staff-drag-area');
  const fileStaffInput = document.getElementById('import-staff-file-input');

  dragStaffArea.addEventListener('click', () => fileStaffInput.click());

  dragStaffArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragStaffArea.style.borderColor = 'var(--accent)';
    dragStaffArea.style.background = 'rgba(212, 175, 55, 0.05)';
  });

  dragStaffArea.addEventListener('dragleave', () => {
    dragStaffArea.style.borderColor = 'var(--border-color)';
    dragStaffArea.style.background = 'rgba(255,255,255,0.02)';
  });

  dragStaffArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dragStaffArea.style.borderColor = 'var(--border-color)';
    dragStaffArea.style.background = 'rgba(255,255,255,0.02)';
    
    if (e.dataTransfer.files.length > 0) {
      handleImportStaffFile(e.dataTransfer.files[0]);
    }
  });

  fileStaffInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleImportStaffFile(e.target.files[0]);
    }
  });

  function handleImportStaffFile(file) {
    const fileNameDiv = document.getElementById('import-staff-file-name');
    fileNameDiv.innerText = `ឯកសារ៖ ${file.name}`;
    fileNameDiv.style.display = 'block';

    const fileExt = file.name.split('.').pop().toLowerCase();
    
    if (fileExt === 'csv') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const tsvText = csvToTsv(text);
        tempParsedStaff = parseImportStaffData(tsvText);
        renderImportStaffPreview();
      };
      reader.readAsText(file, 'UTF-8');
    } else if (fileExt === 'xlsx' || fileExt === 'xls') {
      if (typeof XLSX === 'undefined') {
        showToast('កំពុងទាញយកបណ្ណាល័យជំនួយសម្រាប់ Excel...', 'info');
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
        script.onload = () => {
          readExcelStaffFile(file);
        };
        script.onerror = () => {
          showToast('មិនអាចទាញយកបណ្ណាល័យបានទេ! សូមពិនិត្យការភ្ជាប់អ៊ីនធឺណិត ឬប្រើវិធី ចម្លងនិងបិទភ្ជាប់ ជំនួសវិញ!', 'error');
        };
        document.head.appendChild(script);
      } else {
        readExcelStaffFile(file);
      }
    } else {
      showToast('ប្រភេទឯកសារមិនត្រឹមត្រូវ! គាំទ្រតែ Excel និង CSV ប៉ុណ្ណោះ។', 'error');
    }
  }

  function readExcelStaffFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        const csv = XLSX.utils.sheet_to_txt(worksheet);
        tempParsedStaff = parseImportStaffData(csv);
        renderImportStaffPreview();
      } catch (err) {
        showToast('ការអានឯកសារ Excel មានបញ្ហា! សូមព្យាយាមម្តងទៀត។', 'error');
        console.error(err);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  function parseImportStaffData(rowsText) {
    const lines = rowsText.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
    if (lines.length === 0) return [];
    
    const firstLineCells = lines[0].split('\t');
    let mappings = {
      id: 0,
      name: 1,
      gender: 2,
      position: 3,
      phone: 4,
      email: 5,
      degree: 6,
      joinedDate: 7
    };
    
    const headerTerms = {
      id: ['លេខសម្គាល់', 'អត្តលេខ', 'id', 'staff id', 'number', 'លេខ'],
      name: ['ឈ្មោះ', 'នាម', 'គោត្តនាម', 'name', 'staff name', 'full name'],
      gender: ['ភេទ', 'gender', 'sex'],
      position: ['តួនាទី', 'position', 'role name', 'ងារ'],
      phone: ['ទូរស័ព្ទ', 'លេខទូរស័ព្ទ', 'phone', 'contact', 'telephone', 'phone number'],
      email: ['អ៊ីមែល', 'email', 'e-mail', 'mail'],
      degree: ['កម្រិតវប្បធម៌', 'សញ្ញាបត្រ', 'degree', 'qualification', 'វប្បធម៌'],
      joinedDate: ['ថ្ងៃចូលបម្រើការ', 'ថ្ងៃចូលធ្វើការ', 'joined date', 'joineddate', 'entry date']
    };
    
    let matchCount = 0;
    firstLineCells.forEach((cell, index) => {
      const cleanCell = cell.toLowerCase().trim();
      for (const [field, terms] of Object.entries(headerTerms)) {
        if (terms.some(term => cleanCell.includes(term.toLowerCase()))) {
          mappings[field] = index;
          matchCount++;
          break;
        }
      }
    });
    
    let dataLines = lines;
    if (matchCount >= 3) {
      dataLines = lines.slice(1);
    } else {
      mappings = {
        id: 0,
        name: 1,
        gender: 2,
        position: 3,
        phone: 4,
        email: 5,
        degree: 6,
        joinedDate: 7
      };
    }
    
    const parsedStaff = [];
    let tempIdCounter = state.staff.length + 1;

    dataLines.forEach(line => {
      const cells = line.split('\t');
      if (cells.length < 2) return;
      
      let id = cells[mappings.id] ? cells[mappings.id].trim() : '';
      const name = cells[mappings.name] ? cells[mappings.name].trim() : '';
      let gender = cells[mappings.gender] ? cells[mappings.gender].trim() : '';
      let position = cells[mappings.position] ? cells[mappings.position].trim() : '';
      let phone = cells[mappings.phone] ? cells[mappings.phone].trim() : '-';
      let email = cells[mappings.email] ? cells[mappings.email].trim() : '-';
      const degree = cells[mappings.degree] ? cells[mappings.degree].trim() : '-';
      let joinedDate = cells[mappings.joinedDate] ? cells[mappings.joinedDate].trim() : '';
      
      if (!name) return;

      if (!id) {
        id = 'ST' + String(tempIdCounter++).padStart(3, '0');
      }

      if (gender) {
        gender = gender.replace(/m|male|ប្រុស/i, 'ប្រុស');
        gender = gender.replace(/f|female|ស្រី/i, 'ស្រី');
      } else {
        gender = 'ប្រុស';
      }

      if (joinedDate && /^\d+$/.test(joinedDate)) {
        const excelDate = parseInt(joinedDate, 10);
        const dateObj = new Date((excelDate - 25569) * 86400 * 1000);
        joinedDate = dateObj.toISOString().split('T')[0];
      } else if (!joinedDate) {
        joinedDate = '-';
      }

      let role = 'teacher';
      const cleanPos = position.toLowerCase();
      if (cleanPos.includes('នាយករង') || cleanPos.includes('vice principal') || cleanPos.includes('vice-principal') || cleanPos.includes('deputy')) {
        if (cleanPos.includes('ឆ្វេង') || cleanPos.includes('១') || cleanPos.includes('1')) {
          role = 'vice-principal-left';
        } else if (cleanPos.includes('ស្តាំ') || cleanPos.includes('២') || cleanPos.includes('2')) {
          role = 'vice-principal-right';
        } else {
          role = 'vice-principal-left';
        }
      } else if (cleanPos.includes('នាយក') || cleanPos.includes('principal') || cleanPos.includes('director') || cleanPos.includes('អធិការ')) {
        role = 'principal';
      } else if (cleanPos.includes('បណ្ណារក្ស') || cleanPos.includes('គណនេយ្យ') || cleanPos.includes('អនាម័យ') || cleanPos.includes('យាម') || cleanPos.includes('support')) {
        role = 'staff';
      }
      
      parsedStaff.push({
        id,
        name,
        gender,
        role,
        position: position || 'គ្រូបង្រៀន',
        phone,
        email,
        degree,
        joinedDate,
        photo: ''
      });
    });
    
    return parsedStaff;
  }

  function renderImportStaffPreview() {
    const previewTbody = document.getElementById('import-staff-preview-tbody');
    const previewSection = document.getElementById('import-staff-preview-section');
    const importBtn = document.getElementById('btn-submit-import-staff');
    const countSpan = document.getElementById('import-staff-count');

    previewTbody.innerHTML = '';
    
    if (tempParsedStaff.length === 0) {
      previewSection.style.display = 'none';
      importBtn.disabled = true;
      return;
    }

    countSpan.innerText = tempParsedStaff.length;

    tempParsedStaff.forEach(member => {
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid var(--border-color)';
      tr.innerHTML = `
        <td style="padding: 8px 10px; font-weight: bold; color: var(--text-yellow);">${member.id}</td>
        <td style="padding: 8px 10px; font-weight: bold;">${member.name}</td>
        <td style="padding: 8px 10px;">${member.gender}</td>
        <td style="padding: 8px 10px;">${member.position}</td>
        <td style="padding: 8px 10px;">${member.phone}</td>
        <td style="padding: 8px 10px;">${member.email}</td>
        <td style="padding: 8px 10px;">${member.degree}</td>
        <td style="padding: 8px 10px;">${member.joinedDate}</td>
      `;
      previewTbody.appendChild(tr);
    });

    previewSection.style.display = 'block';
    importBtn.disabled = false;
  }

  // Handle Save Import Data
  document.getElementById('btn-submit-import-staff').addEventListener('click', () => {
    if (tempParsedStaff.length === 0) return;

    let addedCount = 0;
    let updatedCount = 0;

    tempParsedStaff.forEach(newStaff => {
      const idx = state.staff.findIndex(s => s.id === newStaff.id);
      if (idx > -1) {
        newStaff.photo = state.staff[idx].photo || '';
        state.staff[idx] = newStaff;
        updatedCount++;
      } else {
        state.staff.push(newStaff);
        addedCount++;
      }
    });

    saveStateToStorage();
    renderStaffList();
    renderOrgChart();
    closeModal('import-staff-modal');
    
    showToast(`នាំចូលដោយជោគជ័យ! បន្ថែមថ្មី: ${addedCount} នាក់, កែប្រែ: ${updatedCount} នាក់`, 'success');
  });
}

function openStaffModal(member) {
  const isEdit = !!member;
  document.getElementById('staff-modal-title').innerText = isEdit ? 'កែប្រែព័ត៌មានមន្ត្រី/គ្រូ' : 'បន្ថែមមន្ត្រី/គ្រូថ្មី';
  
  if (isEdit) {
    document.getElementById('staff-id').value = member.id;
    document.getElementById('staff-id').readOnly = true;
    document.getElementById('staff-name').value = member.name;
    document.getElementById('staff-gender').value = member.gender;
    document.getElementById('staff-role').value = member.role;
    document.getElementById('staff-position').value = member.position;
    document.getElementById('staff-phone').value = member.phone;
    document.getElementById('staff-email').value = member.email;
    document.getElementById('staff-degree').value = member.degree;
    document.getElementById('staff-joined-date').value = member.joinedDate;
    
    if (member.photo) {
      document.getElementById('staff-photo-preview').src = member.photo;
      document.getElementById('staff-photo-preview').style.display = 'block';
      document.getElementById('staff-photo-placeholder').style.display = 'none';
    } else {
      document.getElementById('staff-photo-preview').style.display = 'none';
      document.getElementById('staff-photo-placeholder').style.display = 'block';
    }
  } else {
    document.getElementById('staff-id').value = 'ST' + String(state.staff.length + 1).padStart(3, '0');
    document.getElementById('staff-id').readOnly = false;
    document.getElementById('staff-name').value = '';
    document.getElementById('staff-gender').value = 'ប្រុស';
    document.getElementById('staff-role').value = 'teacher';
    document.getElementById('staff-position').value = '';
    document.getElementById('staff-phone').value = '';
    document.getElementById('staff-email').value = '';
    document.getElementById('staff-degree').value = '';
    document.getElementById('staff-joined-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('staff-photo-preview').style.display = 'none';
    document.getElementById('staff-photo-placeholder').style.display = 'block';
    document.getElementById('staff-photo-input').value = '';
  }

  openModal('staff-modal');
}

// --- STUDENTS VIEW ---
function renderStudentList() {
  const tbody = document.getElementById('student-table-body');
  tbody.innerHTML = '';

  let filteredStudents = state.students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          student.id.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          student.fatherName.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesFilter = state.selectedGradeFilter === 'all' || student.grade === state.selectedGradeFilter;
    return matchesSearch && matchesFilter;
  });

  filteredStudents.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.id}</td>
      <td><strong>${student.name}</strong></td>
      <td>${student.gender}</td>
      <td>${getGradeNameKhmer(student.grade)}</td>
      <td>${student.dob}</td>
      <td>${student.fatherPhone}</td>
      <td>
        <button class="btn-icon card-gen" data-id="${student.id}" title="បង្កើតកាតសិស្ស">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect><line x1="7" y1="8" x2="17" y2="8"></line><line x1="7" y1="12" x2="17" y2="12"></line><line x1="7" y1="16" x2="13" y2="16"></line></svg>
        </button>
        <button class="btn-icon edit" data-id="${student.id}" title="កែប្រែ">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
        </button>
        <button class="btn-icon delete" data-id="${student.id}" title="លុប">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.card-gen').forEach(btn => {
    btn.addEventListener('click', () => {
      const student = state.students.find(s => s.id === btn.getAttribute('data-id'));
      openStudentCardModal(student);
    });
  });

  tbody.querySelectorAll('.edit').forEach(btn => {
    btn.addEventListener('click', () => {
      const student = state.students.find(s => s.id === btn.getAttribute('data-id'));
      openStudentModal(student);
    });
  });

  tbody.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('តើអ្នកពិតជាចង់លុបឈ្មោះសិស្សនេះមែនទេ?')) {
        state.students = state.students.filter(s => s.id !== btn.getAttribute('data-id'));
        saveStateToStorage();
        renderStudentList();
        showToast('បានលុបព័ត៌មានសិស្សរួចរាល់!', 'success');
      }
    });
  });
}

function setupStudentHandlers() {
  document.getElementById('student-search').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderStudentList();
  });

  document.getElementById('student-grade-filter').addEventListener('change', (e) => {
    state.selectedGradeFilter = e.target.value;
    renderStudentList();
  });

  document.getElementById('btn-add-student').addEventListener('click', () => {
    openStudentModal(null);
  });

  document.getElementById('student-photo-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById('student-photo-preview').src = event.target.result;
        document.getElementById('student-photo-preview').style.display = 'block';
        document.getElementById('student-photo-placeholder').style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('student-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('student-id').value;
    const name = document.getElementById('student-name').value;
    const gender = document.getElementById('student-gender').value;
    const grade = document.getElementById('student-grade').value;
    const dob = document.getElementById('student-dob').value;
    const pob = document.getElementById('student-pob').value;
    const fatherName = document.getElementById('student-father-name').value;
    const motherName = document.getElementById('student-mother-name').value;
    const fatherPhone = document.getElementById('student-father-phone').value;
    const address = document.getElementById('student-address').value;
    const photo = document.getElementById('student-photo-preview').style.display === 'block' 
      ? document.getElementById('student-photo-preview').src 
      : '';

    const newStudent = { id, name, gender, grade, dob, pob, fatherName, motherName, fatherPhone, address, photo };

    const index = state.students.findIndex(s => s.id === id);
    if (index > -1) {
      state.students[index] = newStudent;
      showToast('បានកែប្រែព័ត៌មានសិស្សដោយជោគជ័យ!', 'success');
    } else {
      state.students.push(newStudent);
      showToast('បានបន្ថែមសិស្សថ្មីដោយជោគជ័យ!', 'success');
    }

    saveStateToStorage();
    renderStudentList();
    closeModal('student-modal');
  });

  document.getElementById('btn-print-card').addEventListener('click', () => {
    const cardContent = document.getElementById('student-card-preview').outerHTML;
    const printDiv = document.createElement('div');
    printDiv.id = 'print-view';
    printDiv.innerHTML = cardContent;
    document.body.appendChild(printDiv);
    
    window.print();
    document.getElementById('print-view').remove();
  });

  // --- IMPORT STUDENTS FROM EXCEL / GOOGLE SHEETS ---
  let tempParsedStudents = [];

  // Toggle Tab: Paste
  document.getElementById('btn-import-tab-paste').addEventListener('click', () => {
    document.getElementById('btn-import-tab-paste').style.color = 'var(--text-yellow)';
    document.getElementById('btn-import-tab-paste').style.borderBottom = '3px solid var(--accent)';
    document.getElementById('btn-import-tab-file').style.color = 'var(--text-muted)';
    document.getElementById('btn-import-tab-file').style.borderBottom = 'none';
    
    document.getElementById('import-tab-content-paste').style.display = 'block';
    document.getElementById('import-tab-content-file').style.display = 'none';
  });

  // Toggle Tab: File
  document.getElementById('btn-import-tab-file').addEventListener('click', () => {
    document.getElementById('btn-import-tab-file').style.color = 'var(--text-yellow)';
    document.getElementById('btn-import-tab-file').style.borderBottom = '3px solid var(--accent)';
    document.getElementById('btn-import-tab-paste').style.color = 'var(--text-muted)';
    document.getElementById('btn-import-tab-paste').style.borderBottom = 'none';
    
    document.getElementById('import-tab-content-file').style.display = 'block';
    document.getElementById('import-tab-content-paste').style.display = 'none';
  });

  // Open Modal
  document.getElementById('btn-import-students').addEventListener('click', () => {
    tempParsedStudents = [];
    document.getElementById('import-paste-area').value = '';
    document.getElementById('import-file-input').value = '';
    document.getElementById('import-file-name').style.display = 'none';
    document.getElementById('import-preview-section').style.display = 'none';
    document.getElementById('btn-submit-import').disabled = true;
    openModal('import-students-modal');
  });

  // Process pasted content on input
  document.getElementById('import-paste-area').addEventListener('input', (e) => {
    const text = e.target.value;
    processPastedData(text);
  });

  function processPastedData(text) {
    if (!text.trim()) {
      document.getElementById('import-preview-section').style.display = 'none';
      document.getElementById('btn-submit-import').disabled = true;
      return;
    }
    
    tempParsedStudents = parseImportData(text);
    renderImportPreview();
  }

  // File drag & drop / select
  const dragArea = document.getElementById('import-drag-area');
  const fileInput = document.getElementById('import-file-input');

  dragArea.addEventListener('click', () => fileInput.click());

  dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragArea.style.borderColor = 'var(--accent)';
    dragArea.style.background = 'rgba(212, 175, 55, 0.05)';
  });

  dragArea.addEventListener('dragleave', () => {
    dragArea.style.borderColor = 'var(--border-color)';
    dragArea.style.background = 'rgba(255,255,255,0.02)';
  });

  dragArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dragArea.style.borderColor = 'var(--border-color)';
    dragArea.style.background = 'rgba(255,255,255,0.02)';
    
    if (e.dataTransfer.files.length > 0) {
      handleImportFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleImportFile(e.target.files[0]);
    }
  });

  function handleImportFile(file) {
    const fileNameDiv = document.getElementById('import-file-name');
    fileNameDiv.innerText = `ឯកសារ៖ ${file.name}`;
    fileNameDiv.style.display = 'block';

    const fileExt = file.name.split('.').pop().toLowerCase();
    
    if (fileExt === 'csv') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const tsvText = csvToTsv(text);
        tempParsedStudents = parseImportData(tsvText);
        renderImportPreview();
      };
      reader.readAsText(file, 'UTF-8');
    } else if (fileExt === 'xlsx' || fileExt === 'xls') {
      if (typeof XLSX === 'undefined') {
        showToast('កំពុងទាញយកបណ្ណាល័យជំនួយសម្រាប់ Excel...', 'info');
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
        script.onload = () => {
          readExcelFile(file);
        };
        script.onerror = () => {
          showToast('មិនអាចទាញយកបណ្ណាល័យបានទេ! សូមពិនិត្យការភ្ជាប់អ៊ីនធឺណិត ឬប្រើវិធី ចម្លងនិងបិទភ្ជាប់ ជំនួសវិញ!', 'error');
        };
        document.head.appendChild(script);
      } else {
        readExcelFile(file);
      }
    } else {
      showToast('ប្រភេទឯកសារមិនត្រឹមត្រូវ! គាំទ្រតែ Excel និង CSV ប៉ុណ្ណោះ។', 'error');
    }
  }

  function readExcelFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        const csv = XLSX.utils.sheet_to_txt(worksheet);
        tempParsedStudents = parseImportData(csv);
        renderImportPreview();
      } catch (err) {
        showToast('ការអានឯកសារ Excel មានបញ្ហា! សូមព្យាយាមម្តងទៀត។', 'error');
        console.error(err);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  function csvToTsv(csvText) {
    const lines = [];
    let row = [];
    let inQuotes = false;
    let current = '';
    
    for (let i = 0; i < csvText.length; i++) {
      const char = csvText[i];
      const nextChar = csvText[i + 1];
      
      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        row.push(current);
        current = '';
      } else if ((char === '\n' || char === '\r') && !inQuotes) {
        if (char === '\r' && nextChar === '\n') i++;
        row.push(current);
        lines.push(row.join('\t'));
        row = [];
        current = '';
      } else {
        current += char;
      }
    }
    if (current || row.length > 0) {
      row.push(current);
      lines.push(row.join('\t'));
    }
    return lines.join('\n');
  }

  function parseImportData(rowsText) {
    const lines = rowsText.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
    if (lines.length === 0) return [];
    
    const firstLineCells = lines[0].split('\t');
    let mappings = {
      id: 0,
      name: 1,
      gender: 2,
      grade: 3,
      dob: 4,
      fatherPhone: 5,
      pob: 6,
      fatherName: 7,
      motherName: 8,
      address: 9
    };
    
    const headerTerms = {
      id: ['អត្តលេខ', 'លេខសម្គាល់', 'id', 'student id', 'number', 'លេខ'],
      name: ['ឈ្មោះ', 'នាម', 'គោត្តនាម', 'name', 'student name', 'full name'],
      gender: ['ភេទ', 'gender', 'sex'],
      grade: ['ថ្នាក់', 'ថ្នាក់ទី', 'grade', 'class'],
      dob: ['ថ្ងៃខែឆ្នាំកំណើត', 'ថ្ងៃកំណើត', 'dob', 'date of birth', 'birthdate'],
      fatherPhone: ['ទូរស័ព្ទ', 'លេខទូរស័ព្ទ', 'phone', 'contact', 'telephone', 'phone number', 'guardian phone'],
      pob: ['ទីកន្លែងកំណើត', 'pob', 'place of birth', 'កំណើត'],
      fatherName: ['ឈ្មោះឪពុក', 'ឪពុក', 'father', 'father name'],
      motherName: ['ឈ្មោះម្តាយ', 'ម្តាយ', 'mother', 'mother name'],
      address: ['អាសយដ្ឋាន', 'address', 'ទីលំនៅ']
    };
    
    let matchCount = 0;
    firstLineCells.forEach((cell, index) => {
      const cleanCell = cell.toLowerCase().trim();
      for (const [field, terms] of Object.entries(headerTerms)) {
        if (terms.some(term => cleanCell.includes(term.toLowerCase()))) {
          mappings[field] = index;
          matchCount++;
          break;
        }
      }
    });
    
    let dataLines = lines;
    if (matchCount >= 3) {
      dataLines = lines.slice(1);
    } else {
      mappings = {
        id: 0,
        name: 1,
        gender: 2,
        grade: 3,
        dob: 4,
        fatherPhone: 5,
        pob: 6,
        fatherName: 7,
        motherName: 8,
        address: 9
      };
    }
    
    const parsedStudents = [];
    let tempIdCounter = state.students.length + 1;

    dataLines.forEach(line => {
      const cells = line.split('\t');
      if (cells.length < 2) return;
      
      let id = cells[mappings.id] ? cells[mappings.id].trim() : '';
      const name = cells[mappings.name] ? cells[mappings.name].trim() : '';
      let gender = cells[mappings.gender] ? cells[mappings.gender].trim() : '';
      let grade = cells[mappings.grade] ? cells[mappings.grade].trim() : '';
      let dob = cells[mappings.dob] ? cells[mappings.dob].trim() : '';
      let fatherPhone = cells[mappings.fatherPhone] ? cells[mappings.fatherPhone].trim() : '';
      const pob = cells[mappings.pob] ? cells[mappings.pob].trim() : '-';
      const fatherName = cells[mappings.fatherName] ? cells[mappings.fatherName].trim() : '-';
      const motherName = cells[mappings.motherName] ? cells[mappings.motherName].trim() : '-';
      const address = cells[mappings.address] ? cells[mappings.address].trim() : '-';
      
      if (!name) return;

      if (!id) {
        id = 'STU' + String(tempIdCounter++).padStart(3, '0');
      }

      if (gender) {
        gender = gender.replace(/m|male|ប្រុស/i, 'ប្រុស');
        gender = gender.replace(/f|female|ស្រី/i, 'ស្រី');
      } else {
        gender = 'ប្រុស';
      }

      if (dob && /^\d+$/.test(dob)) {
        const excelDate = parseInt(dob, 10);
        const dateObj = new Date((excelDate - 25569) * 86400 * 1000);
        dob = dateObj.toISOString().split('T')[0];
      }

      let gradeKey = 'grade-1';
      const cleanGrade = grade.toLowerCase();
      if (cleanGrade.includes('មត្តេយ្យ') || cleanGrade.includes('kinder')) {
        gradeKey = 'kindergarten';
      } else if (cleanGrade.includes('១') || cleanGrade.includes('1') || cleanGrade.includes('g1') || cleanGrade.includes('ទី១') || cleanGrade.includes('ទី 1')) {
        gradeKey = 'grade-1';
      } else if (cleanGrade.includes('២') || cleanGrade.includes('2') || cleanGrade.includes('g2') || cleanGrade.includes('ទី២') || cleanGrade.includes('ទី 2')) {
        gradeKey = 'grade-2';
      } else if (cleanGrade.includes('៣') || cleanGrade.includes('3') || cleanGrade.includes('g3') || cleanGrade.includes('ទី៣') || cleanGrade.includes('ទី 3')) {
        gradeKey = 'grade-3';
      }
      
      parsedStudents.push({
        id,
        name,
        gender,
        grade: gradeKey,
        dob: dob || '-',
        pob,
        fatherName,
        motherName,
        fatherPhone: fatherPhone || '-',
        address,
        photo: ''
      });
    });
    
    return parsedStudents;
  }

  function renderImportPreview() {
    const previewTbody = document.getElementById('import-preview-tbody');
    const previewSection = document.getElementById('import-preview-section');
    const importBtn = document.getElementById('btn-submit-import');
    const countSpan = document.getElementById('import-count');

    previewTbody.innerHTML = '';
    
    if (tempParsedStudents.length === 0) {
      previewSection.style.display = 'none';
      importBtn.disabled = true;
      return;
    }

    countSpan.innerText = tempParsedStudents.length;

    tempParsedStudents.forEach(student => {
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid var(--border-color)';
      tr.innerHTML = `
        <td style="padding: 8px 10px; font-weight: bold; color: var(--text-yellow);">${student.id}</td>
        <td style="padding: 8px 10px; font-weight: bold;">${student.name}</td>
        <td style="padding: 8px 10px;">${student.gender}</td>
        <td style="padding: 8px 10px;">${getGradeNameKhmer(student.grade)}</td>
        <td style="padding: 8px 10px;">${student.dob}</td>
        <td style="padding: 8px 10px;">${student.fatherPhone}</td>
        <td style="padding: 8px 10px;">${student.pob}</td>
        <td style="padding: 8px 10px;">${student.fatherName}</td>
        <td style="padding: 8px 10px;">${student.motherName}</td>
        <td style="padding: 8px 10px;">${student.address}</td>
      `;
      previewTbody.appendChild(tr);
    });

    previewSection.style.display = 'block';
    importBtn.disabled = false;
  }

  // Handle Save Import Data
  document.getElementById('btn-submit-import').addEventListener('click', () => {
    if (tempParsedStudents.length === 0) return;

    let addedCount = 0;
    let updatedCount = 0;

    tempParsedStudents.forEach(newStudent => {
      const idx = state.students.findIndex(s => s.id === newStudent.id);
      if (idx > -1) {
        newStudent.photo = state.students[idx].photo || '';
        state.students[idx] = newStudent;
        updatedCount++;
      } else {
        state.students.push(newStudent);
        addedCount++;
      }
    });

    saveStateToStorage();
    renderStudentList();
    closeModal('import-students-modal');
    
    showToast(`នាំចូលដោយជោគជ័យ! បន្ថែមថ្មី: ${addedCount} នាក់, កែប្រែ: ${updatedCount} នាក់`, 'success');
  });
}

function openStudentModal(student) {
  const isEdit = !!student;
  document.getElementById('student-modal-title').innerText = isEdit ? 'កែប្រែព័ត៌មានសិស្ស' : 'បន្ថែមសិស្សថ្មី';
  
  if (isEdit) {
    document.getElementById('student-id').value = student.id;
    document.getElementById('student-id').readOnly = true;
    document.getElementById('student-name').value = student.name;
    document.getElementById('student-gender').value = student.gender;
    document.getElementById('student-grade').value = student.grade;
    document.getElementById('student-dob').value = student.dob;
    document.getElementById('student-pob').value = student.pob;
    document.getElementById('student-father-name').value = student.fatherName;
    document.getElementById('student-mother-name').value = student.motherName;
    document.getElementById('student-father-phone').value = student.fatherPhone;
    document.getElementById('student-address').value = student.address;
    
    if (student.photo) {
      document.getElementById('student-photo-preview').src = student.photo;
      document.getElementById('student-photo-preview').style.display = 'block';
      document.getElementById('student-photo-placeholder').style.display = 'none';
    } else {
      document.getElementById('student-photo-preview').style.display = 'none';
      document.getElementById('student-photo-placeholder').style.display = 'block';
    }
  } else {
    document.getElementById('student-id').value = 'STU' + String(state.students.length + 1).padStart(3, '0');
    document.getElementById('student-id').readOnly = false;
    document.getElementById('student-name').value = '';
    document.getElementById('student-gender').value = 'ប្រុស';
    document.getElementById('student-grade').value = 'kindergarten';
    document.getElementById('student-dob').value = '';
    document.getElementById('student-pob').value = '';
    document.getElementById('student-father-name').value = '';
    document.getElementById('student-mother-name').value = '';
    document.getElementById('student-father-phone').value = '';
    document.getElementById('student-address').value = '';
    document.getElementById('student-photo-preview').style.display = 'none';
    document.getElementById('student-photo-placeholder').style.display = 'block';
    document.getElementById('student-photo-input').value = '';
  }

  openModal('student-modal');
}

function openStudentCardModal(student) {
  document.getElementById('card-id').innerText = student.id;
  document.getElementById('card-name').innerText = student.name;
  document.getElementById('card-gender').innerText = student.gender;
  document.getElementById('card-grade').innerText = getGradeNameKhmer(student.grade);
  document.getElementById('card-dob').innerText = student.dob;
  document.getElementById('card-phone').innerText = student.fatherPhone;

  const photoContainer = document.getElementById('card-photo-container');
  if (student.photo) {
    photoContainer.innerHTML = `<img src="${student.photo}" alt="${student.name}">`;
  } else {
    photoContainer.innerHTML = `<svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
  }

  const barcodeContainer = document.getElementById('card-barcode');
  barcodeContainer.innerHTML = '';
  
  const barcodeCanvas = document.createElement('canvas');
  barcodeCanvas.width = 150;
  barcodeCanvas.height = 30;
  const ctx = barcodeCanvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.clearRect(0,0,150,30);
  
  let seed = 0;
  for(let i=0; i<student.id.length; i++) seed += student.id.charCodeAt(i);
  
  let x = 5;
  while(x < 145) {
    const width = 1 + (seed % 3);
    const spacing = 1 + ((seed + 7) % 4);
    ctx.fillRect(x, 0, width, 30);
    x += width + spacing;
    seed = (seed * 9301 + 49297) % 233280;
  }
  barcodeContainer.appendChild(barcodeCanvas);

  const qrContainer = document.getElementById('card-qrcode');
  qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(student.id)}" alt="QR Code" width="60" height="60">`;

  openModal('student-card-modal');
}

// --- ATTENDANCE VIEW ---
function renderAttendanceGrid() {
  const container = document.getElementById('attendance-grid-container');
  container.innerHTML = '';

  const grade = state.selectedAttendanceGrade;
  const month = state.selectedMonth;

  const gradeStudents = state.students.filter(s => s.grade === grade);

  if (gradeStudents.length === 0) {
    container.innerHTML = '<div class="card" style="text-align:center; padding:30px; color:var(--text-muted);">មិនទាន់មានសិស្សនៅក្នុងថ្នាក់នេះនៅឡើយទេ។</div>';
    return;
  }

  const [year, mon] = month.split('-').map(Number);
  const totalDays = new Date(year, mon, 0).getDate();

  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th style="min-width: 150px; position: sticky; left: 0; background: var(--primary-dark); z-index: 10;">ឈ្មោះសិស្ស</th>
  `;

  for (let d = 1; d <= totalDays; d++) {
    tableHTML += `<th style="text-align: center; font-size: 11px;">${d}</th>`;
  }
  tableHTML += `
        </tr>
      </thead>
      <tbody>
  `;

  gradeStudents.forEach(student => {
    tableHTML += `
      <tr>
        <td style="position: sticky; left: 0; background: var(--primary-light); z-index: 5; font-weight: bold; border-right: 1px solid var(--border-color);">
          ${student.name}
        </td>
    `;

    for (let d = 1; d <= totalDays; d++) {
      const status = getAttendanceStatus(month, grade, student.id, d);
      const displayStatus = status === 'P' ? 'វត្តមាន' : (status === 'A' ? 'ច្បាប់' : (status === 'L' ? 'អវត្តមាន' : '-'));
      const statusClass = status ? `status-${status}` : '';

      tableHTML += `
        <td class="cell-clickable status-cell" data-student-id="${student.id}" data-day="${d}" style="text-align: center;">
          <span class="status-badge ${statusClass}">${status || '-'}</span>
        </td>
      `;
    }

    tableHTML += `</tr>`;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  container.innerHTML = tableHTML;

  container.querySelectorAll('.cell-clickable').forEach(cell => {
    cell.addEventListener('click', () => {
      const studentId = cell.getAttribute('data-student-id');
      const day = cell.getAttribute('data-day');
      toggleAttendance(month, grade, studentId, day, cell);
    });
  });
}

function getAttendanceStatus(month, grade, studentId, day) {
  if (state.attendance[month] && 
      state.attendance[month][grade] && 
      state.attendance[month][grade][studentId]) {
    return state.attendance[month][grade][studentId][day] || '';
  }
  return '';
}

function toggleAttendance(month, grade, studentId, day, cellElement) {
  if (!state.attendance[month]) state.attendance[month] = {};
  if (!state.attendance[month][grade]) state.attendance[month][grade] = {};
  if (!state.attendance[month][grade][studentId]) state.attendance[month][grade][studentId] = {};

  const currentStatus = state.attendance[month][grade][studentId][day] || '';
  let nextStatus = '';

  if (currentStatus === '') nextStatus = 'P';
  else if (currentStatus === 'P') nextStatus = 'A';
  else if (currentStatus === 'A') nextStatus = 'L';
  else nextStatus = '';

  state.attendance[month][grade][studentId][day] = nextStatus;
  saveStateToStorage();

  const badge = cellElement.querySelector('.status-badge');
  badge.className = `status-badge ${nextStatus ? `status-${nextStatus}` : ''}`;
  badge.innerText = nextStatus || '-';
  
  renderDashboardStats();
}

function setupAttendanceHandlers() {
  document.getElementById('att-grade-select').addEventListener('change', (e) => {
    state.selectedAttendanceGrade = e.target.value;
    renderAttendanceGrid();
  });

  document.getElementById('att-month-select').addEventListener('change', (e) => {
    state.selectedMonth = e.target.value;
    renderAttendanceGrid();
  });
}

// --- SCOREBOARD VIEW ---
function renderScoreboard() {
  const container = document.getElementById('scoreboard-container');
  container.innerHTML = '';

  const grade = state.selectedScoreGrade;
  const month = state.selectedMonth;

  const gradeStudents = state.students.filter(s => s.grade === grade);

  if (gradeStudents.length === 0) {
    container.innerHTML = '<div class="card" style="text-align:center; padding:30px; color:var(--text-muted);">មិនទាន់មានសិស្សនៅក្នុងថ្នាក់នេះនៅឡើយទេ។</div>';
    return;
  }

  const studentScores = gradeStudents.map(student => {
    const scores = (state.scores[month] && state.scores[month][student.id]) || { khmer: 0, math: 0, science: 0, social: 0, english: 0 };
    const total = scores.khmer + scores.math + scores.science + scores.social + scores.english;
    const average = Math.round((total / 5) * 10) / 10;
    
    return {
      student,
      scores,
      total,
      average
    };
  });

  studentScores.sort((a, b) => b.average - a.average);
  studentScores.forEach((item, index) => {
    item.rank = item.total > 0 ? (index + 1) : '-';
  });

  let tableHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
      <h3 style="color:var(--text-yellow); font-size:16px;">លទ្ធផលការសិក្សា - ${getGradeNameKhmer(grade)}</h3>
      <button class="btn btn-secondary btn-icon" id="btn-edit-scores" style="font-size:13px; padding:6px 12px;">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
        បញ្ចូល/កែពិន្ទុថ្នាក់នេះ
      </button>
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ល.រ</th>
            <th>ឈ្មោះសិស្ស</th>
            <th style="text-align:center;">អក្សរសាស្ត្រខ្មែរ</th>
            <th style="text-align:center;">គណិតវិទ្យា</th>
            <th style="text-align:center;">វិទ្យាសាស្ត្រ</th>
            <th style="text-align:center;">សិក្សាសង្គម</th>
            <th style="text-align:center;">ភាសាអង់គ្លេស</th>
            <th style="text-align:center; color:var(--text-yellow);">ពិន្ទុសរុប</th>
            <th style="text-align:center; color:var(--text-yellow);">មធ្យមភាគ</th>
            <th style="text-align:center; color:var(--accent);">ចំណាត់ថ្នាក់</th>
          </tr>
        </thead>
        <tbody>
  `;

  studentScores.forEach((item, index) => {
    tableHTML += `
      <tr>
        <td>${index + 1}</td>
        <td><strong>${item.student.name}</strong></td>
        <td style="text-align:center; font-family:var(--font-eng);">${item.scores.khmer || '-'}</td>
        <td style="text-align:center; font-family:var(--font-eng);">${item.scores.math || '-'}</td>
        <td style="text-align:center; font-family:var(--font-eng);">${item.scores.science || '-'}</td>
        <td style="text-align:center; font-family:var(--font-eng);">${item.scores.social || '-'}</td>
        <td style="text-align:center; font-family:var(--font-eng);">${item.scores.english || '-'}</td>
        <td style="text-align:center; font-weight:bold; font-family:var(--font-eng);">${item.total || '-'}</td>
        <td style="text-align:center; font-weight:bold; font-family:var(--font-eng); color:var(--text-yellow);">${item.average || '-'}</td>
        <td style="text-align:center; font-weight:bold; color:var(--accent); font-family:var(--font-eng);">${item.rank}</td>
      </tr>
    `;
  });

  tableHTML += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = tableHTML;

  document.getElementById('btn-edit-scores').addEventListener('click', () => {
    openScoreEntryModal(grade, month, studentScores);
  });
}

function openScoreEntryModal(grade, month, studentScores) {
  document.getElementById('score-modal-title').innerText = `បញ្ចូលពិន្ទុ៖ ${getGradeNameKhmer(grade)} - ${month}`;
  
  const container = document.getElementById('score-entry-container');
  container.innerHTML = '';

  let formsHTML = `
    <div class="score-student-row header">
      <div>ឈ្មោះសិស្ស</div>
      <div style="text-align:center;">ខ្មែរ</div>
      <div style="text-align:center;">គណិត</div>
      <div style="text-align:center;">វិទ្យា</div>
      <div style="text-align:center;">សង្គម</div>
      <div style="text-align:center;">អង់គ្លេស</div>
    </div>
  `;

  studentScores.forEach(item => {
    formsHTML += `
      <div class="score-student-row" data-student-id="${item.student.id}">
        <div style="font-weight:bold;">${item.student.name}</div>
        <input type="number" min="0" max="100" class="score-khmer" value="${item.scores.khmer || ''}" placeholder="-">
        <input type="number" min="0" max="100" class="score-math" value="${item.scores.math || ''}" placeholder="-">
        <input type="number" min="0" max="100" class="score-science" value="${item.scores.science || ''}" placeholder="-">
        <input type="number" min="0" max="100" class="score-social" value="${item.scores.social || ''}" placeholder="-">
        <input type="number" min="0" max="100" class="score-english" value="${item.scores.english || ''}" placeholder="-">
      </div>
    `;
  });

  container.innerHTML = formsHTML;
  openModal('score-modal');
}

function setupScoreboardHandlers() {
  document.getElementById('score-grade-select').addEventListener('change', (e) => {
    state.selectedScoreGrade = e.target.value;
    renderScoreboard();
  });

  document.getElementById('score-month-select').addEventListener('change', (e) => {
    state.selectedMonth = e.target.value;
    renderScoreboard();
  });

  document.getElementById('score-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const month = state.selectedMonth;
    if (!state.scores[month]) state.scores[month] = {};

    document.querySelectorAll('#score-entry-container .score-student-row:not(.header)').forEach(row => {
      const studentId = row.getAttribute('data-student-id');
      const khmer = Number(row.querySelector('.score-khmer').value) || 0;
      const math = Number(row.querySelector('.score-math').value) || 0;
      const science = Number(row.querySelector('.score-science').value) || 0;
      const social = Number(row.querySelector('.score-social').value) || 0;
      const english = Number(row.querySelector('.score-english').value) || 0;

      state.scores[month][studentId] = { khmer, math, science, social, english };
    });

    saveStateToStorage();
    renderScoreboard();
    closeModal('score-modal');
    showToast('បានរក្សាទុកពិន្ទុដោយជោគជ័យ!', 'success');
  });
}

// --- REPORTS / CHARTS VIEW ---
let chartInstance1 = null;
let chartInstance2 = null;

function renderReports() {
  setTimeout(() => {
    const canvas1 = document.getElementById('chart-students-dist');
    const canvas2 = document.getElementById('chart-gender-dist');
    if (!canvas1 || !canvas2) return;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');

    const grades = ['kindergarten', 'grade-1', 'grade-2', 'grade-3'];
    const gradeLabels = ['មត្តេយ្យ', 'ថ្នាក់ទី១', 'ថ្នាក់ទី២', 'ថ្នាក់ទី៣'];
    const gradeCounts = grades.map(g => state.students.filter(s => s.grade === g).length);

    const maleCount = state.students.filter(s => s.gender === 'ប្រុស').length;
    const femaleCount = state.students.filter(s => s.gender === 'ស្រី').length;

    if (chartInstance1) chartInstance1.destroy();
    if (chartInstance2) chartInstance2.destroy();

    chartInstance1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: gradeLabels,
        datasets: [{
          label: 'ចំនួនសិស្ស',
          data: gradeCounts,
          backgroundColor: '#d4af37',
          borderColor: '#ffd700',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#a0aec0', stepSize: 1 },
            grid: { color: 'rgba(255, 255, 255, 0.05)' }
          },
          x: {
            ticks: { color: '#a0aec0' },
            grid: { display: false }
          }
        }
      }
    });

    chartInstance2 = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['ប្រុស', 'ស្រី'],
        datasets: [{
          data: [maleCount, femaleCount],
          backgroundColor: ['#1e40af', '#ec4899'],
          borderColor: '#162a45',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#a0aec0', padding: 20 }
          }
        }
      }
    });
  }, 100);
}

// --- DATABASE BACKUP / IMPORT ---
function setupBackupHandlers() {
  document.getElementById('btn-export-backup').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href",     dataStr);
    downloadAnchor.setAttribute("download", `hnbps_database_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('បានទាញយកឯកសារបម្រុងទុកដោយជោគជ័យ!', 'success');
  });

  document.getElementById('btn-import-backup').addEventListener('click', () => {
    document.getElementById('backup-file-input').click();
  });

  document.getElementById('backup-file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedState = JSON.parse(event.target.result);
          if (importedState.schoolInfo && importedState.staff && importedState.students) {
            state = importedState;
            saveStateToStorage();
            renderAll();
            showToast('បានស្ដារទិន្នន័យឡើងវិញដោយជោគជ័យ!', 'success');
          } else {
            showToast('ឯកសារពុំត្រឹមត្រូវឡើយ!', 'error');
          }
        } catch (err) {
          showToast('ឯកសារខូច ឬមិនត្រឹមត្រូវ!', 'error');
        }
      };
      reader.readAsText(file);
    }
  });
}

// --- GENERIC MODAL CONTROLS ---
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('active');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('active');
}

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.closest('.modal-backdrop').id;
    closeModal(modalId);
  });
});

function getGradeNameKhmer(grade) {
  switch (grade) {
    case 'kindergarten': return 'ថ្នាក់មត្តេយ្យ';
    case 'grade-1': return 'ថ្នាក់ទី១';
    case 'grade-2': return 'ថ្នាក់ទី២';
    case 'grade-3': return 'ថ្នាក់ទី៣';
    default: return grade;
  }
}

// --- CLASS DASHBOARD & FOLDERS LOGIC ---
const folderNamesKhmer = {
  registry: "សៀវភៅបញ្ជីសិស្ស",
  grids: "តារាងផែនការសិក្សា",
  plans: "ផែនការសកម្មភាពប្រចាំថ្នាក់",
  biographies: "ជីវប្រវត្តសង្ខេបរបស់សិស្ស",
  applications: "ពាក្យសុំផ្សេងៗរបស់សិស្ស",
  monitoring: "សៀវភៅតាមដានអាកប្បកិរិយា និងការសិក្សា",
  curriculum: "កម្មវិធីសិក្សាប្រចាំថ្នាក់",
  pedagogy: "វិធីសាស្ត្រគរុកោសល្យប្រចាំថ្នាក់"
};

function renderClassDashboard(grade) {
  const gradeName = getGradeNameKhmer(grade);
  document.getElementById('class-dashboard-title').innerText = `ព័ត៌មានលម្អិតសិស្ស ${gradeName} - ឆ្នាំសិក្សា ${state.schoolInfo.academicYear || '២០២៦-២០២៧'}`;
  
  // Hide editor subview initially
  document.getElementById('class-text-editor-container').style.display = 'none';
  document.querySelector('.class-dashboard-panel-body').style.display = 'block';
}

function openClassTextEditor(grade, folder) {
  state.activeEditingClassFolder = folder;
  const gradeName = getGradeNameKhmer(grade);
  const folderName = folderNamesKhmer[folder] || "កត់ត្រាឯកសារ";
  
  document.getElementById('class-text-editor-title').innerText = `${folderName} - ${gradeName}`;
  
  const content = (state.classTexts[grade] && state.classTexts[grade][folder]) || "";
  document.getElementById('editor-class-text').value = content;
  
  // Hide folders grid, show editor
  document.querySelector('.class-dashboard-panel-body').style.display = 'none';
  document.getElementById('class-text-editor-container').style.display = 'block';
}

function setupClassDashboardHandlers() {
  // Home button
  document.getElementById('btn-class-dashboard-home').addEventListener('click', () => {
    switchView('dashboard');
  });

  // Folder buttons
  document.querySelectorAll('.folder-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const folder = btn.getAttribute('data-folder');
      const grade = state.selectedClassDashboardGrade;
      
      if (folder === 'profiles' || folder === 'list') {
        state.selectedGradeFilter = grade;
        document.getElementById('student-grade-filter').value = grade;
        renderStudentList();
        switchView('students');
      } else if (folder === 'scores') {
        state.selectedScoreGrade = grade;
        document.getElementById('score-grade-select').value = grade;
        renderScoreboard();
        switchView('scores');
      } else if (folder === 'attendance') {
        state.selectedAttendanceGrade = grade;
        document.getElementById('att-grade-select').value = grade;
        renderAttendanceGrid();
        switchView('attendance');
      } else if (folder === 'timetable') {
        document.getElementById('timetable-grade-select').value = grade;
        state.selectedTimetableGrade = grade;
        renderTimetableEditor();
        
        switchView('school');
        showSchoolSubview('subview-curriculum');
      } else if (folder === 'cards') {
        state.selectedGradeFilter = grade;
        document.getElementById('student-grade-filter').value = grade;
        renderStudentList();
        switchView('students');
        showToast('សូមចុច «កាតសិស្ស» លើសិស្សណាម្នាក់ ដើម្បីបោះពុម្ពកាត!', 'info');
      } else {
        // Text editing folders
        openClassTextEditor(grade, folder);
      }
    });
  });

  // Editor back button
  document.getElementById('btn-back-class-dashboard').addEventListener('click', () => {
    document.getElementById('class-text-editor-container').style.display = 'none';
    document.querySelector('.class-dashboard-panel-body').style.display = 'block';
  });

  // Editor save button
  document.getElementById('btn-save-class-text').addEventListener('click', () => {
    const grade = state.selectedClassDashboardGrade;
    const folder = state.activeEditingClassFolder;
    const content = document.getElementById('editor-class-text').value;
    
    if (!state.classTexts[grade]) {
      state.classTexts[grade] = {};
    }
    state.classTexts[grade][folder] = content;
    saveStateToStorage();
    showToast('រក្សាទុកឯកសារប្រចាំថ្នាក់ដោយជោគជ័យ!', 'success');
  });
}

// --- BATCH UNIFIED CARDS PRINTING ---
function getCardMarkup(person, slotIndex) {
  if (!person) {
    return `
      <div class="student-card-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
        <span>ប្រអប់ទី ${slotIndex} (ទទេ)</span>
      </div>
    `;
  }

  const barcodeCanvasId = `batch-barcode-canvas-${slotIndex}`;
  const qrImageSrc = `https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(person.id)}`;
  const photoHTML = person.photo 
    ? `<img src="${person.photo}" alt="${person.name}">`
    : `<svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;

  if (person.type === 'student') {
    return `
      <div class="student-card-layout" style="margin: 0;">
        <div class="card-inner-content">
          <div class="card-school-header">
            <svg class="card-school-logo" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <div class="card-school-name">ពុទ្ធិកបឋមសិក្សាកម្រិត ហ៊ុន ណេង</div>
            <div class="card-school-eng">HUN NENG BUDDHIST PRIMARY SCHOOL</div>
          </div>
          <div class="card-body-section">
            <div class="card-photo-box">
              ${photoHTML}
            </div>
            <div class="card-details-box">
              <div class="card-detail-item">
                <span class="label">ឈ្មោះសិស្ស៖</span>
                <span class="value" style="font-size: 11px;">${person.name}</span>
              </div>
              <div class="card-detail-item">
                <span class="label">ភេទ៖</span>
                <span class="value">${person.gender}</span>
              </div>
              <div class="card-detail-item">
                <span class="label">ថ្នាក់សិក្សា៖</span>
                <span class="value">${getGradeNameKhmer(person.grade)}</span>
              </div>
              <div class="card-detail-item">
                <span class="label">ថ្ងៃកំណើត៖</span>
                <span class="value">${person.dob}</span>
              </div>
              <div class="card-detail-item">
                <span class="label">ទូរស័ព្ទ៖</span>
                <span class="value">${person.fatherPhone}</span>
              </div>
            </div>
            <div class="card-right-section">
              <div class="card-qr-container">
                <img src="${qrImageSrc}" alt="QR Code">
              </div>
              <div class="card-id-text">${person.id}</div>
            </div>
          </div>
          <div class="card-footer-section">
            <div class="card-barcode-container">
              <canvas id="${barcodeCanvasId}" width="150" height="30"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    // Staff Member
    return `
      <div class="staff-card-layout" style="margin: 0;">
        <div class="card-inner-content">
          <div class="card-school-header">
            <svg class="card-school-logo" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <div class="card-school-name">ពុទ្ធិកបឋមសិក្សាកម្រិត ហ៊ុន ណេង</div>
            <div class="card-school-eng">HUN NENG BUDDHIST PRIMARY SCHOOL</div>
          </div>
          <div class="card-body-section">
            <div class="card-photo-box">
              ${photoHTML}
            </div>
            <div class="card-details-box">
              <div class="card-detail-item">
                <span class="label">ឈ្មោះមន្ត្រី៖</span>
                <span class="value" style="font-size: 11px;">${person.name}</span>
              </div>
              <div class="card-detail-item">
                <span class="label">ភេទ៖</span>
                <span class="value">${person.gender}</span>
              </div>
              <div class="card-detail-item">
                <span class="label">តួនាទី៖</span>
                <span class="value">${person.position}</span>
              </div>
              <div class="card-detail-item">
                <span class="label">លេខសម្គាល់៖</span>
                <span class="value">${person.id}</span>
              </div>
              <div class="card-detail-item">
                <span class="label">ទូរស័ព្ទ៖</span>
                <span class="value">${person.phone}</span>
              </div>
            </div>
            <div class="card-right-section">
              <div class="card-qr-container">
                <img src="${qrImageSrc}" alt="QR Code">
              </div>
              <div class="card-id-text">${person.id}</div>
            </div>
          </div>
          <div class="card-footer-section">
            <div class="card-barcode-container">
              <canvas id="${barcodeCanvasId}" width="150" height="30"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function drawBatchBarcode(personId, slotIndex) {
  const canvas = document.getElementById(`batch-barcode-canvas-${slotIndex}`);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.clearRect(0, 0, 150, 30);
  
  let seed = 0;
  for(let i=0; i<personId.length; i++) seed += personId.charCodeAt(i);
  
  let x = 5;
  while(x < 145) {
    const width = 1 + (seed % 3);
    const spacing = 1 + ((seed + 7) % 4);
    ctx.fillRect(x, 0, width, 30);
    x += width + spacing;
    seed = (seed * 9301 + 49297) % 233280;
  }
}

// Tracks current filter: 'all', 'student', 'staff'
let batchFilter = 'all';

function updateBatchCardsGrid() {
  const container = document.getElementById('batch-cards-grid-container');
  container.innerHTML = '';
  
  const selects = document.querySelectorAll('.batch-unified-select');
  selects.forEach((select, index) => {
    const val = select.value;
    let person = null;
    if (val) {
      const [type, id] = val.split(':');
      if (type === 'student') {
        const student = state.students.find(s => s.id === id);
        if (student) person = { ...student, type: 'student' };
      } else if (type === 'staff') {
        const member = state.staff.find(s => s.id === id);
        if (member) person = { ...member, type: 'staff' };
      }
    }
    
    const cardWrapper = document.createElement('div');
    cardWrapper.innerHTML = getCardMarkup(person, index + 1);
    container.appendChild(cardWrapper.firstElementChild);
    
    if (person) {
      drawBatchBarcode(person.id, index + 1);
    }
  });
}

function renderBatchCardsView() {
  const selects = document.querySelectorAll('.batch-unified-select');
  
  const sortedStudents = [...state.students].sort((a,b) => a.name.localeCompare(b.name, 'kh'));
  const sortedStaff = [...state.staff].sort((a,b) => a.name.localeCompare(b.name, 'kh'));

  selects.forEach(select => {
    const currentValue = select.value;
    select.innerHTML = '<option value="">-- ជ្រើសរើសសិស្ស ឬមន្ត្រី/គ្រូ --</option>';
    
    // Only show students if filter is 'all' or 'student'
    if (batchFilter !== 'staff') {
      const studentGroup = document.createElement('optgroup');
      studentGroup.label = 'សិស្ស (Students)';
      sortedStudents.forEach(student => {
        const option = document.createElement('option');
        option.value = `student:${student.id}`;
        option.innerText = `សិស្ស៖ ${student.name} (អត្តលេខ: ${student.id}, ${getGradeNameKhmer(student.grade)})`;
        studentGroup.appendChild(option);
      });
      select.appendChild(studentGroup);
    }

    // Only show staff if filter is 'all' or 'staff'
    if (batchFilter !== 'student') {
      const staffGroup = document.createElement('optgroup');
      staffGroup.label = 'មន្ត្រី និងគ្រូ (Staff/Teachers)';
      sortedStaff.forEach(member => {
        const option = document.createElement('option');
        option.value = `staff:${member.id}`;
        option.innerText = `គ្រូ/មន្ត្រី៖ ${member.name} (${member.id}, ${member.position})`;
        staffGroup.appendChild(option);
      });
      select.appendChild(staffGroup);
    }
    
    if (currentValue) {
      select.value = currentValue;
    }
  });

  updateBatchCardsGrid();

  // Refresh autofill group dropdown to match current filter
  initBatchAutoFill();
}


function setupBatchCardsHandlers() {
  document.querySelectorAll('.batch-unified-select').forEach(select => {
    select.addEventListener('change', () => {
      updateBatchCardsGrid();
    });
  });

  document.getElementById('btn-print-batch-cards').addEventListener('click', () => {
    const selects = document.querySelectorAll('.batch-unified-select');
    const hasSelection = Array.from(selects).some(select => select.value !== '');
    if (!hasSelection) {
      showToast('សូមជ្រើសរើសសិស្ស ឬបុគ្គលិកយ៉ាងហោចណាស់ម្នាក់មុននឹងបោះពុម្ព!', 'error');
      return;
    }
    window.print();
  });

  // --- Quick Filter Buttons ---
  document.querySelectorAll('.batch-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.batch-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      batchFilter = btn.dataset.filter;
      // Re-render dropdowns with new filter, keep grid updated
      renderBatchCardsView();
      // Also refresh autofill group list
      initBatchAutoFill();
    });
  });

  // --- Auto-Fill: Group Select ---
  document.getElementById('batch-autofill-group-select').addEventListener('change', function() {
    const pageSelect = document.getElementById('batch-autofill-page-select');
    if (!this.value) {
      pageSelect.innerHTML = '<option value="">-- ជ្រើសទំព័រ --</option>';
      pageSelect.disabled = true;
      return;
    }
    buildPageOptions(this.value);
    pageSelect.disabled = false;
  });

  // --- Auto-Fill: Page Select ---
  document.getElementById('batch-autofill-page-select').addEventListener('change', function() {
    const groupVal = document.getElementById('batch-autofill-group-select').value;
    if (!this.value || !groupVal) return;
    const pageIndex = parseInt(this.value, 10);
    autoFillSlots(groupVal, pageIndex);
  });

  // --- Clear Button ---
  document.getElementById('btn-autofill-clear').addEventListener('click', () => {
    document.querySelectorAll('.batch-unified-select').forEach(select => {
      select.value = '';
    });
    document.getElementById('batch-autofill-group-select').value = '';
    const pageSelect = document.getElementById('batch-autofill-page-select');
    pageSelect.innerHTML = '<option value="">-- ជ្រើសទំព័រ --</option>';
    pageSelect.disabled = true;
    updateBatchCardsGrid();
    showToast('បានសម្អាតកាតទាំងអស់!', 'success');
  });
}

// Build group options for the auto-fill group dropdown based on current filter
function initBatchAutoFill() {
  const groupSelect = document.getElementById('batch-autofill-group-select');
  const prevGroup = groupSelect.value;
  groupSelect.innerHTML = '<option value="">-- ជ្រើសសិស្ស/ក្រុមមន្ត្រី --</option>';

  const grades = [...new Set(state.students.map(s => s.grade))].sort();

  if (batchFilter !== 'staff') {
    // Add student grade groups
    const gradeGroup = document.createElement('optgroup');
    gradeGroup.label = 'ថ្នាក់សិស្ស (Student Classes)';
    grades.forEach(grade => {
      const count = state.students.filter(s => s.grade === grade).length;
      const opt = document.createElement('option');
      opt.value = `student_grade:${grade}`;
      opt.innerText = `${getGradeNameKhmer(grade)} (${count} នាក់)`;
      gradeGroup.appendChild(opt);
    });
    if (gradeGroup.children.length > 0) groupSelect.appendChild(gradeGroup);
  }

  if (batchFilter !== 'student') {
    // Add staff as a group
    const staffCount = state.staff.length;
    if (staffCount > 0) {
      const staffGroup = document.createElement('optgroup');
      staffGroup.label = 'មន្ត្រី និងគ្រូ (Staff/Teachers)';
      const opt = document.createElement('option');
      opt.value = 'staff_all';
      opt.innerText = `មន្ត្រី/គ្រូទាំងអស់ (${staffCount} នាក់)`;
      staffGroup.appendChild(opt);
      groupSelect.appendChild(staffGroup);
    }
  }

  // Restore previous value if still valid
  if (prevGroup) {
    const stillExists = Array.from(groupSelect.options).some(o => o.value === prevGroup);
    if (stillExists) {
      groupSelect.value = prevGroup;
      buildPageOptions(prevGroup);
    }
  }
}

// Build page options (e.g. ទំព័រទី១, ទំព័រទី២...) for the selected group
function buildPageOptions(groupVal) {
  const pageSelect = document.getElementById('batch-autofill-page-select');
  const members = getMembersForGroup(groupVal);
  const totalPages = Math.ceil(members.length / 6);
  
  pageSelect.innerHTML = '<option value="">-- ជ្រើសទំព័រ --</option>';
  
  const pageNames = ['១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩', '១០', '១១', '១២', '១៣', '១៤', '១៥'];
  
  for (let i = 0; i < totalPages; i++) {
    const start = i * 6 + 1;
    const end = Math.min((i + 1) * 6, members.length);
    const opt = document.createElement('option');
    opt.value = i;
    const pageName = pageNames[i] || (i + 1).toString();
    opt.innerText = `ទំព័រទី${pageName} (លេខ ${start}–${end})`;
    pageSelect.appendChild(opt);
  }
}

// Get the ordered member list for a group key
function getMembersForGroup(groupVal) {
  if (groupVal === 'staff_all') {
    return [...state.staff].sort((a, b) => a.name.localeCompare(b.name, 'kh'))
      .map(m => ({ ...m, type: 'staff' }));
  }
  if (groupVal.startsWith('student_grade:')) {
    const grade = groupVal.replace('student_grade:', '');
    return [...state.students].filter(s => s.grade === grade)
      .sort((a, b) => a.name.localeCompare(b.name, 'kh'))
      .map(s => ({ ...s, type: 'student' }));
  }
  return [];
}

// Auto-fill 6 card slots with members from the given group's page
function autoFillSlots(groupVal, pageIndex) {
  const members = getMembersForGroup(groupVal);
  const start = pageIndex * 6;
  const page = members.slice(start, start + 6);

  const selects = document.querySelectorAll('.batch-unified-select');
  selects.forEach((select, i) => {
    const person = page[i];
    if (person) {
      const prefix = person.type === 'student' ? 'student' : 'staff';
      select.value = `${prefix}:${person.id}`;
    } else {
      select.value = '';
    }
  });

  updateBatchCardsGrid();
  showToast(`បានបំពេញកាតទំព័រទី${pageIndex + 1} ដោយស្វ័យប្រវត្ត!`, 'success');
}


// --- INDIVIDUAL CARD MODAL OPENERS ---
function openStudentCardModal(student) {
  document.getElementById('card-id').innerText = student.id;
  document.getElementById('card-name').innerText = student.name;
  document.getElementById('card-gender').innerText = student.gender;
  document.getElementById('card-grade').innerText = getGradeNameKhmer(student.grade);
  document.getElementById('card-dob').innerText = student.dob;
  document.getElementById('card-phone').innerText = student.fatherPhone;

  const photoContainer = document.getElementById('card-photo-container');
  if (student.photo) {
    photoContainer.innerHTML = `<img src="${student.photo}" alt="${student.name}">`;
  } else {
    photoContainer.innerHTML = `<svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
  }

  const barcodeContainer = document.getElementById('card-barcode');
  barcodeContainer.innerHTML = '';
  
  const barcodeCanvas = document.createElement('canvas');
  barcodeCanvas.width = 150;
  barcodeCanvas.height = 30;
  const ctx = barcodeCanvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.clearRect(0,0,150,30);
  
  let seed = 0;
  for(let i=0; i<student.id.length; i++) seed += student.id.charCodeAt(i);
  
  let x = 5;
  while(x < 145) {
    const width = 1 + (seed % 3);
    const spacing = 1 + ((seed + 7) % 4);
    ctx.fillRect(x, 0, width, 30);
    x += width + spacing;
    seed = (seed * 9301 + 49297) % 233280;
  }
  barcodeContainer.appendChild(barcodeCanvas);

  const qrContainer = document.getElementById('card-qrcode');
  qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(student.id)}" alt="QR Code" width="40" height="40">`;

  openModal('student-card-modal');
}

function openStaffCardModal(member) {
  document.getElementById('staff-card-id').innerText = member.id;
  document.getElementById('staff-card-name').innerText = member.name;
  document.getElementById('staff-card-gender').innerText = member.gender;
  document.getElementById('staff-card-role').innerText = member.position;
  document.getElementById('staff-card-memberId').innerText = member.id;
  document.getElementById('staff-card-phone').innerText = member.phone;

  const photoContainer = document.getElementById('staff-card-photo-container');
  if (member.photo) {
    photoContainer.innerHTML = `<img src="${member.photo}" alt="${member.name}">`;
  } else {
    photoContainer.innerHTML = `<svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
  }

  const barcodeContainer = document.getElementById('staff-card-barcode');
  barcodeContainer.innerHTML = '';
  
  const barcodeCanvas = document.createElement('canvas');
  barcodeCanvas.width = 150;
  barcodeCanvas.height = 30;
  const ctx = barcodeCanvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.clearRect(0,0,150,30);
  
  let seed = 0;
  for(let i=0; i<member.id.length; i++) seed += member.id.charCodeAt(i);
  
  let x = 5;
  while(x < 145) {
    const width = 1 + (seed % 3);
    const spacing = 1 + ((seed + 7) % 4);
    ctx.fillRect(x, 0, width, 30);
    x += width + spacing;
    seed = (seed * 9301 + 49297) % 233280;
  }
  barcodeContainer.appendChild(barcodeCanvas);

  const qrContainer = document.getElementById('staff-card-qrcode');
  qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(member.id)}" alt="QR Code" width="40" height="40">`;

  openModal('staff-card-modal');
}

// Start the app!
initApp();
