/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // <b> bold geçici olarak kondu yeni 21/09/24
  await knex('thesis_manuals').del()
  await knex('thesis_manuals').insert([
    {
      indicator: 'Genel Türkçe Kural',
      thesis_manual: `
        Tebliğ metni aşağıdaki temel kurallara uygun hazırlanmalıdır:
         • Tebliğ başlığı kalın ve büyük harflerle, 12 punto, Times New Roman ile yazılarak, sayfada ortalanmış olarak yer almalıdır. Tebliğ başlığından sonra yazar(ların) adı, soyadı ve unvanına yer verilmelidir.
         • Tebliğlere Türkçe-İngilizce özet, İngilizce özetin üstüne İngilizce başlık, en az beş en fazla sekiz kelime olmak üzere Türkçe-İngilizce anahtar kelimeler ve sonuna yararlanılan eserleri gösteren “Kaynakça” eklenmelidir.
         • Sayfa düzeni A4 boyutunda olmalı, kenar boşlukları ise her dörtkenardan 2,5 cm olacak şekilde ayarlanmalıdır.
         • Ana metin Times New Roman yazı tipinde, 12 punto olacak şekilde ve 1,15 satır aralığıyla yazılmalıdır. Ana metinde kullanılacak başlıklar ise aynı yazı tipi ile 12 punto büyülüğünde kalın (bold) olmalıdır.
        <b>1. Başlık
         • Kısa, açık ve anlaşılır olmalıdır.
         • Tüm başlık büyük harflerle yazılmalı ve gerekirse kalın yapılmalıdır.
         • Örnek: TÜRK EDEBİYATINDA MODERNİZMİN İZLERİ
        <b>2. Yazar Bilgileri
         • Yazarın adı ve soyadı, başlığın altına ad küçük, soyad büyük olacak şekilde yazılır.
         • Yazarın unvanı ve bağlı bulunduğu kurum, ismin altına eklenir.
         • Örnek: Prof. Dr. Ayşe DEMİR, Ankara Üniversitesi
        <b>3. Özet
         • Her tebliğin başında 150-250 kelimelik bir özet bulunmalıdır.
         • Özet, tebliğin amacını ve ana bulgularını özetlemelidir.
         • Özetin altında 3-5 anahtar kelime eklenmelidir.
        <b>4. Ana Metin
         • Metin, Giriş, Gelişme ve Sonuç bölümlerinden oluşmalıdır.
         • Alt başlıklar gerekirse numaralandırılabilir veya italik kullanılabilir.
         • Dil sade, açık ve akademik olmalıdır.
        <b>5. Kaynaklar
         • Kaynakça ayrı bir başlık altında yer almalı ve APA, MLA ya da ilgili alanın belirlediği atıf stili kullanılmalıdır.
         • Kaynaklar alfabetik sırayla dizilmeli ve metin içindeki atıflar uygun bir şekilde yapılmalıdır.
        <b>6. Dipnot ve Alıntılar
         • Alıntılar italik yazılmalı veya tırnak içinde verilmelidir.
         • Dipnotlar gerekirse sayfa sonunda veya metin sonunda toplu olarak gösterilmelidir.
      `,
    },
  ]).then(console.log(" - - - THESIS MANUALS: Seed Run Successful - - -"));
};