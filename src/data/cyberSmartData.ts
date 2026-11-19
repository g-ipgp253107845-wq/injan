export interface GuideItem {
  id: number;
  numberLabel: string;
  title: string;
  iconKey: 'smartphone' | 'copyright' | 'bot' | 'shield' | 'message' | 'laptop';
  points: string[];
  scenarioTitle: string;
  scenarioText: string;
  heroAction: string;
}

export interface ThreatItem {
  id: string;
  numberLabel: string;
  name: string;
  iconKey: 'copy' | 'newspaper' | 'shieldAlert' | 'fish' | 'lockOpen';
  severityLabel: string;
  definition: string;
  exampleSituation: string;
  howToAvoid: string[];
}

export interface GoldenRuleItem {
  number: number;
  title: string;
  shortNote: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: 'A' | 'B' | 'C';
    text: string;
  }[];
  correctLabel: 'A' | 'B' | 'C';
  explanation: string;
}

export interface ReferenceItem {
  id: number;
  name: string;
  shortOrg: string;
  description: string;
  url: string;
}

export const HERO_IMAGE_PATH = '/src/assets/images/hero_cybersmart_kids_1795101240587.jpg';
export const NETIKET_IMAGE_PATH = '/src/assets/images/card_netiket_etiquette_1795101243329.jpg';
export const SAFETY_IMAGE_PATH = '/src/assets/images/card_keselamatan_siber_1795101242286.jpg';
export const POSTER_IMAGE_PATH = '/src/assets/images/poster_wira_digital_1795101241750.jpg';

export const CONCEPT_CARDS = [
  {
    id: 'netiket' as const,
    numberLabel: '01. Netiket',
    title: 'Netiket',
    subtitle: 'Adab dan Etika di Dunia Maya',
    image: NETIKET_IMAGE_PATH,
    imageAlt: 'Ilustrasi murid sekolah rendah berkomunikasi secara sopan menggunakan tablet dan komputer riba',
    definition:
      'Amalan dan peraturan tingkah laku yang sopan serta beretika ketika berkomunikasi dan berinteraksi di internet.',
    examples: [
      'Mengucapkan salam atau kata sapaan yang sopan dalam kumpulan kelas.',
      'Menghormati pendapat rakan walaupun berbeza pandangan.',
      'Tidak menghantar mesej yang menyakitkan hati atau memalukan orang lain.',
    ],
    whyImportant:
      'Netiket memastikan suasana pembelajaran dan perbualan dalam talian kekal mesra, harmoni dan saling menghormati.',
  },
  {
    id: 'keselamatan' as const,
    numberLabel: '02. Keselamatan Siber',
    title: 'Keselamatan Siber',
    subtitle: 'Perlindungan Diri, Peranti dan Data',
    image: SAFETY_IMAGE_PATH,
    imageAlt: 'Ilustrasi perisai biru elektrik dan kunci emas melindungi komputer serta telefon pintar daripada ancaman siber',
    definition:
      'Langkah melindungi maklumat peribadi, peranti dan akaun digital daripada ancaman serta penyalahgunaan dalam talian.',
    examples: [
      'Menggunakan kata laluan yang kukuh dan tidak berkongsi dengan orang lain.',
      'Tidak mengklik pautan pelik atau memuat turun fail daripada sumber tidak dikenali.',
      'Mengunci skrin telefon pintar dan log keluar selepas menggunakan komputer sekolah.',
    ],
    whyImportant:
      'Keselamatan siber melindungi diri kita, keluarga serta maklumat penting daripada penipuan dan pencerobohan digital.',
  },
];

export const SIX_GUIDES: GuideItem[] = [
  {
    id: 1,
    numberLabel: '01',
    title: 'FIKIR SEBELUM BERKONGSI',
    iconKey: 'smartphone',
    points: [
      'Semak kesahihan maklumat sebelum berkongsi.',
      'Jangan sebarkan berita palsu atau maklumat yang belum disahkan.',
      'Pastikan perkongsian tidak menyakiti atau memalukan orang lain.',
    ],
    scenarioTitle: 'Contoh Situasi: Mesej Tular Sekolah',
    scenarioText:
      'Kamu menerima mesej di aplikasi sembang mengatakan sekolah akan cuti esok, tetapi tiada pengumuman daripada guru atau pihak sekolah.',
    heroAction:
      'Jangan terus majukan mesej tersebut! Semak dengan ibu bapa atau guru kelas terlebih dahulu.',
  },
  {
    id: 2,
    numberLabel: '02',
    title: 'HORMATI HAK CIPTA DAN HASIL KARYA',
    iconKey: 'copyright',
    points: [
      'Jangan menyalin hasil kerja orang lain tanpa kebenaran.',
      'Nyatakan sumber rujukan apabila menggunakan maklumat atau gambar.',
      'Elakkan plagiarisme dalam tugasan sekolah.',
    ],
    scenarioTitle: 'Contoh Situasi: Folio Sains',
    scenarioText:
      'Kamu mencari gambar planet di internet untuk dimasukkan ke dalam buku skrap Sains sekolah.',
    heroAction:
      'Catatkan nama laman web atau pemilik asal gambar tersebut sebagai tanda penghargaan.',
  },
  {
    id: 3,
    numberLabel: '03',
    title: 'GUNAKAN AI SECARA BERETIKA',
    iconKey: 'bot',
    points: [
      'Gunakan AI sebagai alat bantuan pembelajaran.',
      'Jangan mengaku hasil AI sebagai hasil kerja sendiri sepenuhnya.',
      'Semak ketepatan maklumat yang diberikan oleh AI.',
      'Jangan masukkan maklumat peribadi ke dalam aplikasi AI.',
    ],
    scenarioTitle: 'Contoh Situasi: Menulis Karangan',
    scenarioText:
      'Kamu menggunakan aplikasi AI untuk mendapatkan idea isi penting karangan Bahasa Melayu.',
    heroAction:
      'Gunakan idea itu sebagai panduan, olah ayat dengan usaha sendiri, dan semak fakta daripada buku teks.',
  },
  {
    id: 4,
    numberLabel: '04',
    title: 'LINDUNGI MAKLUMAT PERIBADI',
    iconKey: 'shield',
    points: [
      'Jangan berkongsi alamat rumah, nombor telefon, kata laluan atau maklumat keluarga.',
      'Gunakan kata laluan yang kukuh dan berbeza bagi akaun penting.',
      'Jangan berkongsi kata laluan dengan orang lain.',
    ],
    scenarioTitle: 'Contoh Situasi: Permainan Dalam Talian',
    scenarioText:
      'Pemain yang tidak dikenali meminta alamat rumah dan kata laluan akaun permainan kamu untuk menghantar hadiah.',
    heroAction:
      'Tolak permintaan tersebut, jangan kongsi maklumat peribadi dan laporkan kepada ibu bapa.',
  },
  {
    id: 5,
    numberLabel: '05',
    title: 'BERKOMUNIKASI DENGAN SOPAN',
    iconKey: 'message',
    points: [
      'Gunakan bahasa yang sopan ketika menghantar mesej.',
      'Hormati pendapat dan perbezaan orang lain.',
      'Jangan melakukan buli siber atau menghantar komen yang menyakitkan hati.',
    ],
    scenarioTitle: 'Contoh Situasi: Komen Video Rakan',
    scenarioText:
      'Rakan sekelas berkongsi lukisan hasil tangannya di ruangan pembelajaran kelas.',
    heroAction:
      'Berikan kata-kata semangat yang membina atau cadangan secara berhemah tanpa mengejek.',
  },
  {
    id: 6,
    numberLabel: '06',
    title: 'JAUHI ANCAMAN SIBER',
    iconKey: 'laptop',
    points: [
      'Jangan klik pautan atau muat turun fail yang mencurigakan.',
      'Jangan berkongsi akaun dengan individu tidak dikenali.',
      'Laporkan mesej, pautan atau aktiviti mencurigakan kepada guru dan ibu bapa.',
      'Jangan cuba menggodam akaun atau peranti orang lain.',
    ],
    scenarioTitle: 'Contoh Situasi: Pautan Hadiah Misteri',
    scenarioText:
      'Muncul tetingkap pop-up di skrin komputer menyatakan kamu memenangi tablet percuma jika klik pautan segera.',
    heroAction:
      'Tutup tetingkap tersebut dengan segera tanpa menekan sebarang pautan dan maklumkan kepada guru atau ibu bapa.',
  },
];

export const CYBER_THREATS: ThreatItem[] = [
  {
    id: 'plagiarisme',
    numberLabel: '01',
    name: 'Plagiarisme',
    iconKey: 'copy',
    severityLabel: 'Pelanggaran Etika Karya',
    definition: 'Mengambil hasil kerja orang lain tanpa memberikan pengiktirafan.',
    exampleSituation:
      'Menyalin karangan atau lukisan rakan dari internet lalu menampal nama sendiri sebagai pemilik karya tersebut.',
    howToAvoid: [
      'Tulis tugasan menggunakan ayat dan idea kamu sendiri.',
      'Sentiasa nyatakan nama penulis atau pautan sumber asal jika memetik maklumat.',
      'Minta kebenaran pemilik sebelum menggunakan gambar atau karya mereka.',
    ],
  },
  {
    id: 'berita-palsu',
    numberLabel: '02',
    name: 'Berita Palsu',
    iconKey: 'newspaper',
    severityLabel: 'Maklumat Mengelirukan',
    definition: 'Maklumat tidak benar yang disebarkan sehingga mengelirukan orang lain.',
    exampleSituation:
      'Menyebarkan poster atau mesej tular tentang penutupan sekolah tanpa menyemak pengumuman rasmi Kementerian Pendidikan atau pihak sekolah.',
    howToAvoid: [
      'Semak sumber berita daripada saluran rasmi seperti laman web sekolah atau agensi kerajaan.',
      'Jangan terus percaya kepada tajuk yang keterlaluan atau mengejutkan.',
      'Tanya guru atau ibu bapa sebelum berkongsi sebarang berita kepada rakan.',
    ],
  },
  {
    id: 'buli-siber',
    numberLabel: '03',
    name: 'Buli Siber',
    iconKey: 'shieldAlert',
    severityLabel: 'Gangguan Emosi Digital',
    definition: 'Menggunakan teknologi untuk mengganggu, menghina atau menyakiti orang lain.',
    exampleSituation:
      'Menghantar komen ejekan tentang rupa rakan dalam kumpulan sembang kelas atau menyebarkan gambar memalukan tanpa izin.',
    howToAvoid: [
      'Amalkan budi bahasa dan fikir perasaan orang lain sebelum menaip komen.',
      'Jangan menyertai ejekan atau menyebarkan gambar rakan yang memalukan.',
      'Simpan bukti tangkap layar jika dibuli dan segera laporkan kepada guru atau ibu bapa.',
    ],
  },
  {
    id: 'phishing',
    numberLabel: '04',
    name: 'Phishing',
    iconKey: 'fish',
    severityLabel: 'Penipuan Maklumat Sulit',
    definition:
      'Cubaan memperdaya pengguna supaya memberikan maklumat sulit melalui mesej atau laman web palsu.',
    exampleSituation:
      'Menerima e-mel atau mesej palsu yang menyamar sebagai pihak permainan video meminta kata laluan akaun untuk menebus hadiah percuma.',
    howToAvoid: [
      'Jangan klik pautan daripada penghantar yang tidak dikenali atau alamat laman web yang pelik.',
      'Jangan sekali-kali memasukkan kata laluan atau nombor telefon ibu bapa pada borang yang meragukan.',
      'Tunjukkan mesej mencurigakan kepada orang dewasa yang dipercayai.',
    ],
  },
  {
    id: 'penggodaman',
    numberLabel: '05',
    name: 'Penggodaman',
    iconKey: 'lockOpen',
    severityLabel: 'Pencerobohan Akaun',
    definition: 'Pencerobohan akaun atau sistem tanpa kebenaran.',
    exampleSituation:
      'Seseorang menceroboh masuk ke dalam akaun pembelajaran rakan kerana kata laluan yang terlalu mudah diteka seperti “123456”.',
    howToAvoid: [
      'Cipta kata laluan yang panjang dengan gabungan huruf besar, huruf kecil dan nombor.',
      'Jangan gunakan tarikh lahir atau nama sendiri sebagai kata laluan.',
      'Sentiasa log keluar akaun selepas menggunakan komputer kongsi di makmal komputer.',
    ],
  },
];

export const GOLDEN_RULES: GoldenRuleItem[] = [
  {
    number: 1,
    title: 'Fikir sebelum klik.',
    shortNote: 'Pastikan pautan selamat dan tidak mencurigakan sebelum menekan sebarang butang.',
  },
  {
    number: 2,
    title: 'Semak sebelum kongsi.',
    shortNote: 'Sahkan kebenaran berita atau gambar supaya tidak menyebarkan maklumat palsu.',
  },
  {
    number: 3,
    title: 'Rahsiakan maklumat peribadi.',
    shortNote: 'Simpan kata laluan, alamat rumah dan nombor telefon hanya untuk diri dan keluarga.',
  },
  {
    number: 4,
    title: 'Hormati orang lain di alam maya.',
    shortNote: 'Gunakan bahasa yang baik, hargai karya orang lain dan jauhi buli siber.',
  },
  {
    number: 5,
    title: 'Laporkan perkara mencurigakan kepada orang dewasa yang dipercayai.',
    shortNote: 'Beritahu guru, ibu bapa atau penjaga dengan segera jika berasa tidak selamat.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Apakah tindakan yang betul apabila menerima pautan yang mencurigakan?',
    options: [
      { label: 'A', text: 'Terus klik pautan tersebut.' },
      { label: 'B', text: 'Kongsi kepada semua rakan.' },
      { label: 'C', text: 'Jangan klik dan laporkan kepada guru.' },
    ],
    correctLabel: 'C',
    explanation:
      'Pautan yang mencurigakan mungkin cubaan phishing atau mengandungi perisian berbahaya. Jangan klik dan laporkan segera kepada guru atau ibu bapa.',
  },
  {
    id: 2,
    question: 'Apakah maksud plagiarisme?',
    options: [
      { label: 'A', text: 'Menghasilkan karya sendiri.' },
      { label: 'B', text: 'Mengambil hasil kerja orang lain tanpa pengiktirafan.' },
      { label: 'C', text: 'Memberikan kredit kepada penulis asal.' },
    ],
    correctLabel: 'B',
    explanation:
      'Plagiarisme bermaksud menyalin atau mengambil karya orang lain tanpa kebenaran dan tanpa menyatakan sumber rujukan asal.',
  },
  {
    id: 3,
    question: 'Apakah maklumat yang tidak boleh dikongsi secara terbuka?',
    options: [
      { label: 'A', text: 'Hobi.' },
      { label: 'B', text: 'Warna kegemaran.' },
      { label: 'C', text: 'Kata laluan akaun.' },
    ],
    correctLabel: 'C',
    explanation:
      'Kata laluan akaun ialah maklumat sulit peribadi. Berkongsi kata laluan boleh menyebabkan akaun diceroboh atau digodam.',
  },
  {
    id: 4,
    question: 'Bagaimanakah cara menggunakan AI dengan beretika?',
    options: [
      { label: 'A', text: 'Menyalin semua jawapan AI tanpa menyemak.' },
      { label: 'B', text: 'Menggunakan AI sebagai alat bantuan dan menyemak maklumat.' },
      { label: 'C', text: 'Menghantar maklumat peribadi kepada AI.' },
    ],
    correctLabel: 'B',
    explanation:
      'AI sepatutnya membantu kita belajar, bukan menggantikan usaha sendiri. Sentiasa semak ketepatan fakta AI dan lindungi data peribadi.',
  },
  {
    id: 5,
    question: 'Apakah tindakan apabila melihat rakan menjadi mangsa buli siber?',
    options: [
      { label: 'A', text: 'Turut mengejek.' },
      { label: 'B', text: 'Menyebarkan tangkap layar.' },
      { label: 'C', text: 'Memberitahu guru atau orang dewasa yang dipercayai.' },
    ],
    correctLabel: 'C',
    explanation:
      'Wira digital sentiasa melindungi rakan yang dibuli dengan tidak menyebarkan bahan ejekan dan segera melaporkan kejadian kepada guru atau ibu bapa.',
  },
];

export const REFERENCES: ReferenceItem[] = [
  {
    id: 1,
    name: 'CyberSecurity Malaysia',
    shortOrg: 'Agensi Keselamatan Siber Negara',
    description: 'Portal rasmi panduan keselamatan siber, kesedaran digital dan pusat bantuan insiden siber Malaysia.',
    url: 'https://www.cybersecurity.my/',
  },
  {
    id: 2,
    name: 'Suruhanjaya Komunikasi dan Multimedia Malaysia (MCMC)',
    shortOrg: 'Pengawal Selia Digital Malaysia',
    description: 'Maklumat rasmi berkaitan penggunaan internet secara berhemah dan kempen Klik Dengan Bijak.',
    url: 'https://www.mcmc.gov.my/',
  },
  {
    id: 3,
    name: 'UNICEF – Keselamatan Dalam Talian Kanak-kanak',
    shortOrg: 'Pertubuhan Bangsa-Bangsa Bersatu',
    description: 'Panduan antarabangsa untuk murid, ibu bapa dan guru mengenai keselamatan kanak-kanak di dunia digital.',
    url: 'https://www.unicef.org/parenting/child-care/online-safety',
  },
  {
    id: 4,
    name: 'Google Be Internet Awesome',
    shortOrg: 'Program Pendidikan Literasi Digital',
    description: 'Sumber pembelajaran interaktif bagi melatih kanak-kanak menjadi warga digital yang bijak, berwaspada dan baik hati.',
    url: 'https://beinternetawesome.withgoogle.com/',
  },
];
