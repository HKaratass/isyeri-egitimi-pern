/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
      title: "ETKİNLİK LİSTE TESTİ - 1",
      event_type: 2,
      subtitle: "Test Çalıştay Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 2",
      event_type: 1,
      subtitle: "Test Panel Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: false,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 3",
      event_type: 0,
      subtitle: "Test Sempozyum Boş",
      start_date: new Date('2022-12-01'),
      end_date: new Date('2022-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 4",
      event_type: 2,
      subtitle: "Test Çalıştay Boş",
      start_date: new Date('2024-12-01'),
      end_date: new Date('2024-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 5",
      event_type: 1,
      subtitle: "Test Panel Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 6",
      event_type: 0,
      subtitle: "Test Sempozyum Boş",
      start_date: new Date('2021-12-01'),
      end_date: new Date('2021-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 7",
      event_type: 2,
      subtitle: "Test Çalıştay Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 8",
      event_type: 1,
      subtitle: "Test Panel Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 9",
      event_type: 0,
      subtitle: "Test Sempozyum Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 10",
      event_type: 2,
      subtitle: "Test Çalıştay Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 11",
      event_type: 1,
      subtitle: "Test Panel Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 12",
      event_type: 0,
      subtitle: "Test Sempozyum Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 13",
      event_type: 2,
      subtitle: "Test Çalıştay Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 14",
      event_type: 1,
      subtitle: "Test Panel Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 15",
      event_type: 0,
      subtitle: "Test Sempozyum Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 16",
      event_type: 2,
      subtitle: "Test Çalıştay Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 17",
      event_type: 1,
      subtitle: "Test Panel Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 18",
      event_type: 0,
      subtitle: "Test Sempozyum Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 19",
      event_type: 2,
      subtitle: "Test Çalıştay Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 20",
      event_type: 1,
      subtitle: "Test Panel Boş",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 21",
      event_type: 0,
      subtitle: "Test Sempozyum Boş - On Air Test",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: false,
    },
    {
      title: "ETKİNLİK LİSTE TESTİ - 22",
      event_type: 2,
      subtitle: "Test Çalıştay Boş, TEST 21 KAPALI (ulaşılamaz)",
      start_date: new Date('2023-12-01'),
      end_date: new Date('2023-12-12'),
      onAir: true,
    },
    {
      title: "TEST DOLU SEMPOZYUM",
      event_type: 0,
      subtitle: "Kullanım İçin İlk Sempozyum - Gönderim Kapalı",
      start_date: new Date('2023-10-13'),
      end_date: new Date('2023-10-14'),
      sum_first_day_date: new Date('2023-07-21'),
      sum_last_day_date: new Date('2023-10-1'),
      text_first_day_date: new Date('2023-10-3'),
      text_last_day_date: new Date('2023-10-10'),
      thesis_manual_id: 1,
      gallery: [
        JSON.stringify({ image_id: 0, title: "Buraya Görselin Başlığı Gelecek - 1" }),
        JSON.stringify({ image_id: 1, title: "Buraya Görselin Başlığı Gelecek - 2" }),
        JSON.stringify({ image_id: 2, title: "Buraya Görselin Başlığı Gelecek - 3" }),
        JSON.stringify({ image_id: 3, title: "Buraya Görselin Başlığı Gelecek - 4" }),
        JSON.stringify({ image_id: 4, title: "Buraya Görselin Başlığı Gelecek - 5" }),
        JSON.stringify({ image_id: 5, title: "Buraya Görselin Başlığı Gelecek - 6" }),
        JSON.stringify({ image_id: 6, title: "Buraya Görselin Başlığı Gelecek - 7" }),
        JSON.stringify({ image_id: 7, title: "Buraya Görselin Başlığı Gelecek - 8" }),
        JSON.stringify({ image_id: 8, title: "Buraya Görselin Başlığı Gelecek - 9" }),
        JSON.stringify({ image_id: 9, title: "Buraya Görselin Başlığı Gelecek - 10" }),
        JSON.stringify({ image_id: 10, title: "Buraya Görselin Başlığı Gelecek - 11" }),
        JSON.stringify({ image_id: 11, title: "Buraya Görselin Başlığı Gelecek - 12" }),

      ],
      contents: [
        JSON.stringify({ file_name: "0.pdf", title: "PDF Başlığı (Moqup)" }),
        JSON.stringify({ file_name: "1.docx", title: "Word Başlığı" }),
        JSON.stringify({ file_name: "2.pdf", title: "PDF Başlığı" }),
        JSON.stringify({ file_name: "3.zip", title: "ZIP Başlığı" }),
        JSON.stringify({ file_name: "4.pptx", title: "Slayt Başlığı" }),
        JSON.stringify({ file_name: "5.xlsx", title: "Excel Başlığı" }),
        JSON.stringify({ file_name: "6.mp3", title: "Ses Başlığı" }),
        JSON.stringify({ file_name: "7.mkv", title: "Video Başlığı" }),
      ],
      committee_chairman: 1,
      science_committee: [
        2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 26,
        28, 29, 30, 31, 32, 33, 34
      ],
      regulatory_authority: [
        35, 36, 27, 37, 38, 39, 40, 41, 42, 43
      ],
      dates: [
        "Özet Gönderimi İçin Son Tarih: 21 Temmuz - 1 Ekim 2023",
        "Tam Metin Gönderme Tarihi: 3 - 10 Ekim 2023",
        "Sempozyum Tarihi: 13 - 14 Ekim 2023",
        "Kabul Edilen Özetlerin İlanı: 2 Ekim 2023",
      ],
      purpose: `
        Bu sempozyumun amacı, örnek alanındaki en son gelişmeleri, araştırmaları ve yenilikçi yaklaşımları bir araya getirerek bilim insanları, uzmanlar, akademisyenler ve profesyoneller arasında bilgi ve deneyim paylaşımını sağlamaktır. Örnek alanında karşılaşılan sorunlar ve bu sorunların çözümüne yönelik yeni yöntemlerin tartışılacağı sempozyum, aynı zamanda disiplinler arası iş birliği fırsatlarını da keşfetmeyi hedeflemektedir.

        Sempozyumun bir diğer amacı, örnek alanında yapılacak gelecekteki çalışmalar için bir yol haritası oluşturarak, bu alanda sürdürülebilir gelişmelere katkıda bulunmaktır. Katılımcılar, alandaki en yeni teknolojiler, araştırma sonuçları ve uygulamalar hakkında bilgi edinirken, gelecekteki projeler için iş birliği imkanları geliştirme fırsatı bulacaklardır.

        Sonuç olarak, bu sempozyum, örnek alanının bilimsel ve pratik boyutlarını derinlemesine ele alarak, bu alanda çalışan bireyler arasında güçlü bir ağ oluşturmayı ve yeni araştırmaların ve yenilikçi uygulamaların önünü açmayı amaçlamaktadır. (generated by chatgpt)
      `,
      text: `
        Bu sempozyum, örnek alanındaki en son gelişmeleri ve yenilikleri tartışmak, araştırmacılar, akademisyenler, uzmanlar ve profesyoneller arasında bilgi paylaşımını sağlamak amacıyla düzenlenmiştir. Örnek konusu, gerek bilimsel araştırmalar gerekse uygulamalı çalışmalar açısından giderek daha fazla önem kazanmaktadır. Sempozyum, bu alanın mevcut durumunu analiz ederek gelecekteki yönelimleri belirlemeyi ve katılımcıların yeni bakış açıları geliştirmesine katkı sunmayı hedeflemektedir.

        Sempozyumun ilk amacı, örnek alanında yapılan en yeni araştırma sonuçlarını paylaşmak ve bu araştırmaların bilimsel ve pratik açıdan nasıl bir etki yarattığını incelemektir. Farklı disiplinlerden katılımcılar, kendi uzmanlık alanlarında elde ettikleri bulguları sunarak, örnek konusunun çok yönlü bir şekilde ele alınmasını sağlayacaktır. Bu süreç, alandaki bilgi birikiminin genişlemesine katkı sağlayacak ve yeni araştırma fırsatları doğuracaktır.

        İkinci olarak, sempozyumun bir diğer amacı, örnek alanında karşılaşılan güncel sorunlara çözüm üretmektir. Özellikle uygulamada karşılaşılan zorluklar ve bu zorlukların nasıl aşılabileceği üzerine yoğunlaşılacak, çeşitli çözüm önerileri sunulacaktır. Alanında uzman katılımcılar tarafından yapılacak sunumlar ve gerçekleştirilecek tartışmalar, örnek konusunda daha derinlemesine bir anlayış geliştirilmesine ve bu alanda yenilikçi yaklaşımlar geliştirilmesine yardımcı olacaktır.

        Sempozyumun üçüncü hedefi, örnek alanında disiplinler arası iş birliğini teşvik etmektir. Örnek konusu, yalnızca tek bir disiplinin çalışmalarıyla sınırlı kalmamış, farklı alanlarla iç içe geçmiş bir yapıya sahiptir. Bu nedenle, sempozyum süresince farklı disiplinlerden gelen uzmanların bir araya gelmesi ve bilgi alışverişinde bulunması sağlanacaktır. Böylece, disiplinler arası ortak çalışmaların teşvik edilmesi ve yeni iş birliği olanaklarının keşfedilmesi amaçlanmaktadır.

        Sempozyumun son aşamasında, örnek alanındaki gelecekteki çalışmalar için bir yol haritası oluşturulması hedeflenmektedir. Katılımcılar, alandaki mevcut eğilimleri analiz ederek, ilerleyen süreçte hangi konuların daha fazla araştırılması gerektiğini belirleyeceklerdir. Ayrıca, sempozyum sırasında yapılan tartışmalar ve paylaşımlar sonucunda, örnek alanındaki ilerlemelerin sürdürülebilir hale getirilmesi için somut adımlar atılacaktır. Özellikle, sempozyum sonunda katılımcılar arasında oluşturulacak iş birliği ağları, bu alandaki yenilikçi çalışmaların devamlılığını sağlamayı amaçlamaktadır.

        Sonuç olarak, bu sempozyum, örnek alanında çalışan akademisyenler, araştırmacılar, uzmanlar ve profesyoneller için önemli bir platform sunacaktır. Katılımcılar, örnek alanındaki son gelişmeleri ve güncel araştırmaları takip etme fırsatı bulacak, alandaki sorunlara çözüm önerileri geliştirecek ve gelecekteki projeler için iş birliği fırsatlarını keşfedeceklerdir. Bu sempozyumun, örnek alanının hem bilimsel hem de pratik açıdan ilerlemesine katkı sağlayacağına ve katılımcılar arasında kalıcı ilişkiler oluşturacağına inanılmaktadır. (generated by chatgpt)
      `,
      onAir: true,
      schedule: true
    },
    {
      title: "TEST DOLU PANEL",
      event_type: 1,
      subtitle: "Kullanım İçin İlk Panel - Tam Metin Örnek",
      start_date: new Date('2024-01-24'),
      end_date: new Date('2024-02-03'),
      sum_first_day_date: new Date('2023-11-25'),
      sum_last_day_date: new Date('2023-12-30'),
      text_first_day_date: new Date('2024-01-13'),
      text_last_day_date: new Date('2026-01-18'),
      thesis_manual_id: 1,
      gallery: [
        JSON.stringify({ image_id: 0, title: "Buraya Görselin Başlığı Gelecek - 1" }),
        JSON.stringify({ image_id: 1, title: "Buraya Görselin Başlığı Gelecek - 2" }),
        JSON.stringify({ image_id: 2, title: "Buraya Görselin Başlığı Gelecek - 3" }),
        JSON.stringify({ image_id: 3, title: "Buraya Görselin Başlığı Gelecek - 4" }),
        JSON.stringify({ image_id: 4, title: "Buraya Görselin Başlığı Gelecek - 5" }),
        JSON.stringify({ image_id: 5, title: "Buraya Görselin Başlığı Gelecek - 6" }),
        JSON.stringify({ image_id: 6, title: "Buraya Görselin Başlığı Gelecek - 7" }),
        JSON.stringify({ image_id: 7, title: "Buraya Görselin Başlığı Gelecek - 8" }),
        JSON.stringify({ image_id: 8, title: "Buraya Görselin Başlığı Gelecek - 9" }),
        JSON.stringify({ image_id: 9, title: "Buraya Görselin Başlığı Gelecek - 10" }),
        JSON.stringify({ image_id: 10, title: "Buraya Görselin Başlığı Gelecek - 11" }),
        JSON.stringify({ image_id: 11, title: "Buraya Görselin Başlığı Gelecek - 12" }),

      ],
      contents: [
        JSON.stringify({ file_name: "0.pdf", title: "PDF Başlığı (Moqup)" }),
        JSON.stringify({ file_name: "1.docx", title: "Word Başlığı" }),
        JSON.stringify({ file_name: "2.pdf", title: "PDF Başlığı" }),
        JSON.stringify({ file_name: "3.zip", title: "ZIP Başlığı" }),
        JSON.stringify({ file_name: "4.pptx", title: "Slayt Başlığı" }),
        JSON.stringify({ file_name: "5.xlsx", title: "Excel Başlığı" }),
        JSON.stringify({ file_name: "6.mp3", title: "Ses Başlığı" }),
        JSON.stringify({ file_name: "7.mkv", title: "Video Başlığı" }),
      ],
      committee_chairman: 1,
      science_committee: [
        2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 26,
        28, 29, 30, 31, 32, 33, 34
      ],
      regulatory_authority: [
        35, 36, 27, 37, 38, 39, 40, 41, 42, 43
      ],
      dates: [
        "Özet Gönderimi İçin Son Tarih: 21 Temmuz - 1 Ekim 2023",
        "Tam Metin Gönderme Tarihi: 3 - 10 Ekim 2023",
        "Sempozyum Tarihi: 13 - 14 Ekim 2023",
        "Kabul Edilen Özetlerin İlanı: 2 Ekim 2023",
      ],
      purpose: `
        Bu panelin amacı, örnek alanında yaşanan güncel gelişmeleri, sorunları ve fırsatları tartışmak için alanında uzman akademisyenler, profesyoneller ve ilgilileri bir araya getirmektir. Panel, örnek konusuna dair farklı bakış açılarını ele alarak, çeşitli disiplinlerden gelen katılımcıların bilgi ve deneyim paylaşımını teşvik etmeyi hedeflemektedir.

        Ayrıca, panel süresince örnek alanında karşılaşılan zorluklara çözüm yolları geliştirilmesi ve gelecekte atılacak adımların değerlendirilmesi amaçlanmaktadır. Katılımcıların aktif katılımıyla interaktif bir tartışma ortamı oluşturularak, örnek konusunda daha geniş bir perspektif sunulacak ve sektördeki yenilikçi yaklaşımlar hakkında fikir alışverişi sağlanacaktır.

        Son olarak, bu panel, örnek alanında yeni iş birliği imkanları ve gelecekteki projelere yönelik öneriler geliştirilmesine zemin hazırlayacaktır. Panel sonucunda, örnek alanında sürdürülebilir çözümler ve yenilikçi fikirler ortaya çıkarılması hedeflenmektedir. (generated by chatgpt)
      `,
      text: `
        Bu panel, örnek alanında yaşanan güncel gelişmeleri, karşılaşılan sorunları ve gelecekteki fırsatları tartışmak amacıyla düzenlenmiştir. Örnek konusu, günümüzde akademik dünyada ve sektörde büyük önem taşımaktadır. Bu panel, alanında uzman akademisyenler, profesyoneller ve sektörel aktörlerin bir araya gelerek örnek alanındaki mevcut durumları analiz etmelerini, yeni çözümler geliştirmelerini ve gelecekteki stratejilere dair fikir alışverişinde bulunmalarını hedeflemektedir.

        Pane  lin temel amacı, örnek alanına dair farklı bakış açılarını bir araya getirmektir. Örnek alanı, disiplinler arası bir konu olması sebebiyle, farklı uzmanlık alanlarından gelen katılımcıların katkılarına ihtiyaç duymaktadır. Bu panelde, örnek konusuna farklı perspektiflerden yaklaşarak, hem teorik hem de uygulamalı anlamda mevcut durumu derinlemesine incelemek ve ileride karşılaşılabilecek zorlukları öngörmek amaçlanmaktadır. Alanın bilimsel ve teknolojik gelişmeler ışığında hangi yönlere evrildiği ve gelecekteki yeniliklerin nasıl şekilleneceği üzerine kapsamlı bir tartışma yapılması planlanmaktadır.

        Pane  lin ilk oturumunda, örnek konusu üzerine yapılan güncel araştırmalar ve çalışmalar katılımcılara sunulacaktır. Bu sunumlar, örnek alanındaki teorik gelişmeleri ele alacak, alandaki en son teknolojiler ve uygulamalar hakkında bilgilendirme yapacaktır. Sunumlar sırasında, örnek alanındaki yenilikçi yaklaşımlar ve bu yaklaşımların sahaya yansımaları hakkında detaylı bilgi verilmesi amaçlanmaktadır. Bu sayede, katılımcıların mevcut bilgi birikimleri derinleştirilirken, yeni araştırma konuları ve projelere yönelik farkındalık oluşturulacaktır.

        İkin  ci oturum, örnek alanında karşılaşılan sorunlara ve bu sorunların çözümüne yönelik önerilere odaklanacaktır. Örnek konusundaki uygulamalarda karşılaşılan zorluklar, sektördeki değişen ihtiyaçlar ve bu ihtiyaçlara nasıl cevap verilebileceği üzerine detaylı tartışmalar yapılacaktır. Bu oturumun interaktif bir formatta düzenlenmesi ve katılımcıların aktif katılımıyla, daha geniş bir perspektif sunulması planlanmaktadır. Bu bölümdeki tartışmalar, alandaki mevcut sorunlara yeni çözümler üretmeye ve inovatif yaklaşımlar geliştirmeye yönelik olacaktır.

        Pane  lin üçüncü oturumu ise geleceğe yönelik stratejilerin ele alındığı, iş birliği fırsatlarının değerlendirildiği ve alandaki yeni projelerin geliştirilmesine yönelik önerilerin tartışıldığı bir oturum olacaktır. Örnek alanında disiplinler arası iş birliklerinin teşvik edilmesi ve gelecekteki projelere yönelik ortak çalışma imkanlarının araştırılması bu oturumun ana temasıdır. Aynı zamanda, örnek alanının gelecekte hangi yönlere evrileceği, teknolojik ve bilimsel gelişmelerin bu alandaki etkileri üzerine fikir alışverişi yapılacaktır. Bu sayede, katılımcılar, hem akademik hem de endüstriyel açıdan örnek konusuna daha geniş bir çerçeveden bakma fırsatı yakalayacaktır.

        Pane  lin sonunda, örnek alanına yönelik olarak hem akademik hem de sektörel boyutta sürdürülebilir bir gelişme sağlanması amacıyla somut adımlar atılması hedeflenmektedir. Panel süresince yapılan sunumlar ve tartışmalar ışığında, örnek alanında çalışan uzmanlar ve araştırmacılar, gelecekteki projeler ve ortak çalışmalar için bir yol haritası oluşturacaklardır. Katılımcılar, panel sonrasında örnek alanında yeni bakış açıları kazanmış ve disiplinler arası iş birliği fırsatlarını değerlendirmiş olacaklardır.

        Sonuç olarak, bu panel, örnek alanındaki bilgi paylaşımını teşvik ederek, hem bilimsel araştırmaların hem de endüstriyel uygulamaların gelişimine katkıda bulunmayı amaçlamaktadır. Katılımcılar, örnek alanındaki en yeni gelişmeleri takip etme, karşılaşılan sorunlara çözüm üretme ve gelecekteki projeler için yeni iş birliği fırsatları oluşturma imkanı bulacaklardır. Panelin, örnek alanında sürdürülebilir yenilikler yaratma konusunda önemli bir platform sunacağına inanılmaktadır. (generated by chatgpt)
      `,
      onAir: true,
      schedule: true
    },
    {
      title: "TEST DOLU ÇALIŞTAY",
      event_type: 2,
      subtitle: "Kullanım İçin İlk Çalıştay - Özet Örnek",
      start_date: new Date('2024-01-09'),
      end_date: new Date('2024-01-12'),
      sum_first_day_date: new Date('2023-11-20'),
      sum_last_day_date: new Date('2026-11-28'),
      text_first_day_date: new Date('2023-12-1'),
      text_last_day_date: new Date('2023-12-30'),
      thesis_manual_id: 1,
      gallery: [
        JSON.stringify({ image_id: 0, title: "Buraya Görselin Başlığı Gelecek - 1" }),
        JSON.stringify({ image_id: 1, title: "Buraya Görselin Başlığı Gelecek - 2" }),
        JSON.stringify({ image_id: 2, title: "Buraya Görselin Başlığı Gelecek - 3" }),
        JSON.stringify({ image_id: 3, title: "Buraya Görselin Başlığı Gelecek - 4" }),
        JSON.stringify({ image_id: 4, title: "Buraya Görselin Başlığı Gelecek - 5" }),
        JSON.stringify({ image_id: 5, title: "Buraya Görselin Başlığı Gelecek - 6" }),
        JSON.stringify({ image_id: 6, title: "Buraya Görselin Başlığı Gelecek - 7" }),
        JSON.stringify({ image_id: 7, title: "Buraya Görselin Başlığı Gelecek - 8" }),
        JSON.stringify({ image_id: 8, title: "Buraya Görselin Başlığı Gelecek - 9" }),
        JSON.stringify({ image_id: 9, title: "Buraya Görselin Başlığı Gelecek - 10" }),
        JSON.stringify({ image_id: 10, title: "Buraya Görselin Başlığı Gelecek - 11" }),
        JSON.stringify({ image_id: 11, title: "Buraya Görselin Başlığı Gelecek - 12" }),

      ],
      contents: [
        JSON.stringify({ file_name: "0.pdf", title: "PDF Başlığı (Moqup)" }),
        JSON.stringify({ file_name: "1.docx", title: "Word Başlığı" }),
        JSON.stringify({ file_name: "2.pdf", title: "PDF Başlığı" }),
        JSON.stringify({ file_name: "3.zip", title: "ZIP Başlığı" }),
        JSON.stringify({ file_name: "4.pptx", title: "Slayt Başlığı" }),
        JSON.stringify({ file_name: "5.xlsx", title: "Excel Başlığı" }),
        JSON.stringify({ file_name: "6.mp3", title: "Ses Başlığı" }),
        JSON.stringify({ file_name: "7.mkv", title: "Video Başlığı" }),
      ],
      committee_chairman: 1,
      science_committee: [
        2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 26,
        28, 29, 30, 31, 32, 33, 34
      ],
      regulatory_authority: [
        35, 36, 27, 37, 38, 39, 40, 41, 42, 43
      ],
      dates: [
        "Özet Gönderimi İçin Son Tarih: 21 Temmuz - 1 Ekim 2023",
        "Tam Metin Gönderme Tarihi: 3 - 10 Ekim 2023",
        "Sempozyum Tarihi: 13 - 14 Ekim 2023",
        "Kabul Edilen Özetlerin İlanı: 2 Ekim 2023",
      ],
      purpose: `
        Bu çalıştayın amacı, örnek alanında çalışan akademisyenler, uzmanlar ve ilgilileri bir araya getirerek, örnek üzerine bilgi ve deneyim paylaşımını sağlamaktır. Çalıştay, katılımcıların örnek üzerindeki bilgilerini derinleştirirken, alanda karşılaşılan sorunlara yönelik çözüm önerileri geliştirmeyi hedeflemektedir. Aynı zamanda, alanın gelecekteki yönelimlerini tartışmak, iş birliği imkanlarını keşfetmek ve yeni araştırma alanlarını teşvik etmek çalıştayın temel amaçları arasındadır.

        Bu etkinlik, teorik ve uygulamalı çalışmaların birleştiği bir platform sunarak, örnek alanında yenilikçi yaklaşımların geliştirilmesine katkıda bulunacaktır. (generated by chatgpt)
      `,
      text: `
      Bu çalıştay, örnek alanında çalışan akademisyenler, uzmanlar, sektörel liderler ve araştırmacıları bir araya getirerek, örnek üzerine derinlemesine bilgi alışverişi yapmayı ve bu alandaki güncel gelişmeleri tartışmayı hedeflemektedir. Çalıştay, örnek ile ilgili sorunlara çözüm bulma, yeni fikirler geliştirme ve gelecekteki araştırma ve iş birliği imkanlarını keşfetme açısından katılımcılara önemli fırsatlar sunacaktır.

      Çalıştayın ilk bölümünde, örnek konusunun teorik temelleri üzerinde durulacak ve alandaki en son gelişmeler ayrıntılı bir şekilde ele alınacaktır. Bu bölümdeki sunumlar, örnek konusunu geniş bir perspektiften değerlendirerek, mevcut literatüre katkı sağlayan yenilikçi yaklaşımlar üzerinde duracaktır. Ayrıca katılımcılar, örnek alanında yapılan son çalışmalar ve projeler hakkında bilgilendirilecek ve bu projelerin sonuçları detaylı olarak tartışılacaktır.

      İkinci bölümde, örnek alanında karşılaşılan sorunlar ve bu sorunlara yönelik çözüm önerileri ele alınacaktır. Bu bölüm, interaktif bir formatta düzenlenecek ve katılımcıların aktif katılımıyla serbest tartışmalar yapılacaktır. Bu tartışmalar, örnek konusuna ilişkin mevcut bilgi birikiminin derinleştirilmesine ve yeni çözüm yollarının geliştirilmesine olanak sağlayacaktır. Özellikle sektörde ve akademide karşılaşılan uygulamalı sorunlara yönelik çözümler ve stratejiler üzerinde durulacaktır.

      Çalıştayın üçüncü ve son bölümünde, örnek alanında gelecekteki araştırma konuları ve iş birliği fırsatları değerlendirilecektir. Bu bölümde, katılımcılar arasında yeni iş birliği imkanları geliştirilmesi, ortak projeler ve araştırmalar başlatılması teşvik edilecektir. Aynı zamanda, örnek alanındaki akademik ve endüstriyel aktörlerin bir araya gelmesiyle, uzun vadeli bir yol haritası oluşturulması planlanmaktadır. Bu sayede, hem akademik dünyanın hem de sektörün ihtiyaçlarını karşılayan, yenilikçi ve sürdürülebilir çözümler ortaya çıkarılacaktır.

      Çalıştay sonucunda, örnek alanındaki bilgi birikiminin genişletilmesi, karşılaşılan sorunlara çözüm önerilerinin getirilmesi ve gelecekteki projelere yönelik ortak çalışma alanlarının oluşturulması hedeflenmektedir. Katılımcılar, çalıştayın ardından örnek alanında hem teorik hem de uygulamalı anlamda daha donanımlı hale gelecek ve bu alanın gelişimine katkıda bulunacak yeni yaklaşımlar geliştirme fırsatı bulacaklardır.

      (generated by chatgpt)

      Bu çalıştay, örnek alanında çalışan akademisyenler, uzmanlar, sektörel liderler ve araştırmacıları bir araya getirerek, örnek üzerine derinlemesine bilgi alışverişi yapmayı ve bu alandaki güncel gelişmeleri tartışmayı hedeflemektedir. Çalıştay, örnek ile ilgili sorunlara çözüm bulma, yeni fikirler geliştirme ve gelecekteki araştırma ve iş birliği imkanlarını keşfetme açısından katılımcılara önemli fırsatlar sunacaktır.

      Çalıştayın ilk bölümünde, örnek konusunun teorik temelleri üzerinde durulacak ve alandaki en son gelişmeler ayrıntılı bir şekilde ele alınacaktır. Bu bölümdeki sunumlar, örnek konusunu geniş bir perspektiften değerlendirerek, mevcut literatüre katkı sağlayan yenilikçi yaklaşımlar üzerinde duracaktır. Ayrıca katılımcılar, örnek alanında yapılan son çalışmalar ve projeler hakkında bilgilendirilecek ve bu projelerin sonuçları detaylı olarak tartışılacaktır.

      İkinci bölümde, örnek alanında karşılaşılan sorunlar ve bu sorunlara yönelik çözüm önerileri ele alınacaktır. Bu bölüm, interaktif bir formatta düzenlenecek ve katılımcıların aktif katılımıyla serbest tartışmalar yapılacaktır. Bu tartışmalar, örnek konusuna ilişkin mevcut bilgi birikiminin derinleştirilmesine ve yeni çözüm yollarının geliştirilmesine olanak sağlayacaktır. Özellikle sektörde ve akademide karşılaşılan uygulamalı sorunlara yönelik çözümler ve stratejiler üzerinde durulacaktır.

      Çalıştayın üçüncü ve son bölümünde, örnek alanında gelecekteki araştırma konuları ve iş birliği fırsatları değerlendirilecektir. Bu bölümde, katılımcılar arasında yeni iş birliği imkanları geliştirilmesi, ortak projeler ve araştırmalar başlatılması teşvik edilecektir. Aynı zamanda, örnek alanındaki akademik ve endüstriyel aktörlerin bir araya gelmesiyle, uzun vadeli bir yol haritası oluşturulması planlanmaktadır. Bu sayede, hem akademik dünyanın hem de sektörün ihtiyaçlarını karşılayan, yenilikçi ve sürdürülebilir çözümler ortaya çıkarılacaktır.

      Çalıştay sonucunda, örnek alanındaki bilgi birikiminin genişletilmesi, karşılaşılan sorunlara çözüm önerilerinin getirilmesi ve gelecekteki projelere yönelik ortak çalışma alanlarının oluşturulması hedeflenmektedir. Katılımcılar, çalıştayın ardından örnek alanında hem teorik hem de uygulamalı anlamda daha donanımlı hale gelecek ve bu alanın gelişimine katkıda bulunacak yeni yaklaşımlar geliştirme fırsatı bulacaklardır. (generated by chatgpt)
      `,
      onAir: true,
      schedule: true
    },
  ]).then(console.log(" - - - EVENTS: Seed Run Successful - - -"));
};

