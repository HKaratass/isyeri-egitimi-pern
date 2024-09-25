/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // - Names Randomly Generated -
  await knex('committee').del()
  await knex('committee').insert([
    {//1
      name: 'Prof. Dr. Civan ARTUKLU',
      title: "Eğitim Kurulu Başkanı",
      image: true,
    },
    {//2
      name: 'Prof. Dr. Vural ERSİZ',
      title: "Eğitim Kurulu Bilim İşleri Başkanı",
      image: true,
    },
    {//3
      name: 'Prof. Dr. Lara DURGUT',
      title: "Eğitim Kurulu Başkan Yardımcısı",
      image: true,
    },
    {//4
      name: 'Prof. Dr. Onurhan TEKİNALP',
      title: "Eğitim Kurulu Başkan Yardımcısı",
      image: true,
    },
    {//5
      name: 'Doç. Dr. Sarp ATILGAN',
      title: "Eğitim Kurulu Başkan Yardımcısı",
      image: true,
    },
    {//6
      name: 'Doç. Dr. Tamer TANSUK',
      title: "Eğitim Akademisi Başkanı",
      image: true,
    },
    {//7
      name: 'Prof. Dr. Levent AKBOĞA',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//8
      name: 'Prof. Dr. Nurkan ESENER',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//9
      name: 'Prof. Dr. Koral ŞENALP',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//10
      name: 'Prof. Dr. İhsan DENERCİ',
      title: "A Üniversitesi Eğitim Fakültesi Dekanı",
      image: true,
    },
    {//11
      name: 'Prof. Dr. Murathan SABANCIOĞLU',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//12
      name: 'Prof. Dr. Asena ERSÖZLÜ',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//13
      name: 'Prof. Dr. Koral ŞENALP',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//14
      name: 'Prof. Dr. Eylül Serra BAYKAL',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//15
      name: 'Prof. Dr. Berkcan MUTLUOĞLU',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//16
      name: 'Prof. Dr. Doruk TANRISEVER',
      title: "Eğitim Kurulu Üyesi",
      image: true,
    },
    {//17
      name: 'Doç. Dr. Alpkan SERTKAYA',
      title: "C Yayınevi Genel Müdürü",
      image: true,
    },
    {//18
      name: 'Doç. Dr. Yiğitcan GÜNVAR',
      title: "A Sosyal Bilimler Üniversitesi Öğretim Üyesi",
      image: true,
    },
    {//19
      name: 'Prof. Dr. Alper EKİNCİ',
      title: "B Yayınevi Genel Müdürü",
      image: true,
    },
    {//20
      name: 'Prof. Dr. Şimal VARDAR',
      title: "D Üniversitesi Öğretim Üyesi",
      image: true,
    },
    {//21
      name: 'Prof. Dr. Efehan KURUOĞLU',
      title: "E Üniversitesi Öğretim Üyesi",
      image: true,
    },
    {//22
      name: 'Prof. Dr. Kutay DİNDAR',
      title: "F Üniversitesi Öğretim Üyesi",
      image: true,
    },
    {//23
      name: 'Prof. Dr. Toprak ESENDAL',
      title: "F Üniversitesi Öğretim Üyesi",
      image: true,
    },
    {//24
      name: 'Prof. Dr. Lale Nil ŞEN',
      title: "G Üniversitesi Öğretim Üyesi",
      image: true,
    },
    {//25
      name: 'Prof. Dr. Ekin Mavi ARSLAN',
      title: "Eski Eğitim Kurulu Üyesi(2012)",
      image: true,
    },
    {//26
      name: 'Prof. Dr. Kaan TEZEL',
      title: "Eski Eğitim Kurulu Üyesi(2015)",
      image: true,
    },
    {//27
      name: 'Prof. Dr. Derya UĞUR',
      title: "Eski Eğitim Kurulu Üyesi(2015)",
      image: true,
    },
    {//28
      name: 'Prof. Dr. Lukas MÜLLER',
      title: "Z University, Almanya",
      image: true,
    },
    {//29
      name: 'Prof. Dr. Anna SCHMİDT',
      title: "W University, Almanya",
      image: true,
    },
    {//30
      name: 'Prof. Dr. Jonas WEBER',
      title: "Q University, Almanya",
      image: true,
    },
    {//31
      name: 'Doç. Dr. Elvin ALİYEV',
      title: "T Enstitüsü, Azerbaycan",
      image: true,
    },
    {//32
      name: 'Doç. Dr. Leyla HUSEYNOVA',
      title: "Y Enstitüsü, Azerbaycan",
      image: true,
    },
    {//33
      name: 'Doç. Dr. Ozan ARSLAN',
      title: "Eski Eğitim Kurulu Üyesi(2013)",
    },
    {//34
      name: 'Dr. Damir Nehir DOĞAN',
      title: "Eski Eğitim Kurulu Üyesi(2014)",
    },
    {//35
      name: 'Doç. Dr. Ertuğrul BOZOK',
      title: "Eğitim Kurulu Başkan Yardımcısı (Düzenleme Kurul Başkanı)",
      image: true,
    },
    {//36
      name: 'Dr. Baran UĞUR',
      title: "Eski Eğitim Kurulu Üyesi(2005)",
      image: true,
    },
    {//37
      name: 'Hakan Tarık ULAŞ',
      title: "A Gazetesi Editörü",
      image: true,
    },
    {//38
      name: 'Özgür Can ARI',
      title: "Proje Başkanlığı - Eğitim Uzmanı",
    },
    {//39
      name: 'Tülay Meltem YILDIRIM',
      title: "Proje Başkanlığı - Eğitim Uzmanı",
    },
    {//40
      name: 'Şule AKSU',
      title: "Eğitim Uzmanı",
    },
    {//41
      name: 'İsmail TANYILDIZ',
      title: "Eğitim Uzmanı",
    },
    {//42
      name: 'Neva KORKMAZ',
      title: "Eğitim Uzmanı",
    },
    {//43
      name: 'Merve YALÇIN',
      title: "Eğitim Uzmanı",
    }
  ]).then(console.log(" - - - COMMITTEE: Seed Run Successful - - -"));
};
