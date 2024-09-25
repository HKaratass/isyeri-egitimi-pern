# GAZI UNIVERSITESI ISYERI EGITIMI URUNU
## Proje: Etkinlik Yönetim Sistemi (Full Stack PERN + Docker)
## webapp-basedon-pern-stack-technology-demo

### Proje Hakkında
Bu proje, 20/10/23 - 08/12/23 tarihleri arasında Gazi Üniversitesi 2023-2024 Güz Dönemi (02/10/23 - 12/01/24) Zorunlu İş Yeri Eğitimi kapsamında gerçekleştirilen projelerden biridir. Kurum bilgileri sansürlenmiş ve değiştirilmiştir. Ayrıca, bu proje benim için bir teknoloji demosu niteliğindedir. Proje kapsamında kullanabileceğim her teknolojiyi deneyimlemeye çalıştım.

Projenin amacı, kurumun bir departmanının düzenlediği sempozyum, panel, çalıştay gibi etkinliklerin tek bir platform üzerinden duyurulmasını, yönetilmesini ve etkileşimin sağlanmasını mümkün kılmaktır. Proje kapsamında, etkinlikler için özet ve tam metin bildirilerinin site üzerinden gönderilmesi sağlanmıştır.

[***Ekran Görüntüleri Sayfa Sonundadır***](#screen-shots-list)

### Karşılaşılan Problemler
- **Proje İsterlerinin Sonradan Değişmesi:** Proje başlangıçta, belirli bir tarihte (2 gün sonra) sunulması gereken, statik verilerle çalışan ve verilen [mockup](zsalt_public_files/Contents/Events/25/0.pdf)'a (arayüz prototipi) uygun bir ön-uç (front-end) projesi olarak tanımlandı. Ancak ilerleyen süreçte, arka-uç (back-end), günlük kaydı (log), X-SRF güvenlik önlemleri ve diğer ek işlevsellikler talep edildi. Bu değişikliklerle birlikte, proje bir sunum projesinden canlıya çıkacak bir ürün haline dönüştü. Bu süreç, geliştirme aşamasında önemli revizyonlara neden oldu.
- **Geri Bildirim ve Test Verilerinin Gecikmesi:** Projeyi talep eden kurum departmanın geri bildirim ve test verileri geciktirmesi, proje ilerleyişini olumsuz etkiledi. Ayrıca, sunum yapılacak departmanın başkanının genellikle şehir dışında olması, iletişim kopukluklarına ve projenin gidişatında aksamalara yol açtı. Bu durum, hem geliştirme sürecinde zorluklara neden oldu.

### Proje İsterleri

1. **Mockup'a Uygun Ön Uç Tasarımı:**  
   Verilen [mockup](zsalt_public_files/Contents/Events/25/0.pdf)'a göre, sunuma yetişecek şekilde web ön uç tasarımı iki gün içinde tamamlanacaktır.
   
2. **Revizeler ve Test Verileri ile Sunum Hazırlığı:**  
   Mockup dışında yapılan revizeler ve test verileri ile projeye son şeklinin verilmesi.
   
3. **(Ek) Arka Uç Geliştirilmesi:**  
   Başarılı bir sunumun ardından, projenin arka uç geliştirilmesi tarafıma verilmiştir. (PostgreSQL, Express.js, Node.js)

4. **(Ek) Yönetim Paneli Geliştirilmesi:**  
   Proje için bir yönetim paneli geliştirilmesi.

5. **(Ek) Ön Uç Tasarıma Yeni Revizeler:**  
   Tema yapısının değiştirilmesi ve ek özelliklerin tasarıma entegre edilmesi.

6. **(Ek) Responsive Mobil Tasarım:**  
   Mobil cihazlara uyumlu, adaptive ve responsive tasarım geliştirilmesi (mobil tasarım benim tarafımdan yapıldı).

7. **(Ek) Yayına Hazırlık (Docker):**  
   Projenin Docker ile Nginx kullanılarak yayınlanması için hazırlanması, CORS ve limitasyon ayarlarının yapılması.

8. **(Ek) Bildirim Gönderi Paneli:**  
   Bir adrese doğrudan mail gönderecek bir bildirim gönderi panelinin geliştirilmesi.

9. **(Ek) Docker ile Test Sunucusunda Yayına Alma:**  
   Test sunucusunda Docker ile projenin ayağa kaldırılması.

10. **(Ek) Captcha Entegrasyonu:**  
   Güvenlik için projeye Captcha eklenmesi.

11. **(Ek) Loglama:**  
   Projenin son aşamalarında günlük kaydı (log) sistemi eklenmesi (bu, optimizasyonlar üzerinde etkili oldu).

12. **(Ek) README.md Yazımı:**  
   Projenin nasıl kurulacağı ve çalıştırılacağına dair bir README.md dosyası yazıldı.

13. **(Ek) X-SRF (CSRF) Güvenliği:**  
   Projeye Cross-Site Request Forgery (X-SRF/CSRF) koruması eklendi.

14. **(Ek) SMTP Entegrasyonu:**  
   Bildiri gönderme sisteminin kurumun SMTP altyapısına entegrasyonu yapıldı.

15. **(Ek) GitLab Yüklemesi:**  
   Proje firmanın GitLab sunucusuna yüklendi.

16. **(Ek) LDAP Konfigürasyonu:**  
   LDAP konfigürasyonu yapılması planlandı ancak kurumun mevcut LDAP güncelleme sürecinde olması nedeniyle iptal edildi.

---

#### İsterler Dışında Ek İyileştirmeler ve Optimizasyonlar

- Web tasarımı verilen [mockup](zsalt_public_files/Contents/Events/25/0.pdf)'a uygun şekilde geliştirildi, ancak mobil tasarım tamamen bana ait olup, **Styled Components** ile adaptive/responsive şekilde optimize edilmiştir.
- **Nginx** konfigürasyonu CORS destekli. (Eğer cors'a takılacaksa nodejs'e erişmeden nginx üzerinden red ediliyor)
- **Redis** ile cacheleme ve Captcha kullanımı.
- **Docker** ile containerization.
- Yetkilendirme sisteminin Redis ile entegre edilmesi (access ve refresh token ile).
- Proje için özel **component skeleton** eklenmesi.
- Proje klasör yapısı global folder structure uygun tasarlanması.
- Diğer ek optimizasyonlar.


### Kullanılan Teknolojiler
Bu proje, modern web geliştirme araçlarını kullanarak geliştirilmiştir:
- **Containerization:** Docker
- **Nginx**
- **Redis** (Int: `redis-cli`)
- **Full Stack PERN:**
  - **Database:** PostgreSQL (Int: `psql`, pgAdmin4)
  - **Backend:** NodeJS/Express Server
  - **Frontend:** ReactJS
- **IDE:** VSCode, Vim (Nginx ve Docker konfigürasyonu için)
- **Batch ve Shell Script yazımı**
- **Python Flask** (Captcha server)
- **Versiyon Kontrol:** Git

#### Kullanılan Önemli Kütüphaneler
- **<span style="font-size: 16px;">Front-End</span>**
   - **Styled Components:** Tüm tasarımlar custom olarak oluşturulmuştur; hazır template kullanılmamıştır. Ayrıca, her çözünürlüğe uygun (mobile dahil) adaptive/responsive tasarım styled components ile gerçekleştirilmiştir.
   - **Tanstack React Query:** Redux yerine kullanıldı; state management için daha modern bir çözüm.
   - **React-Router-Dom:** React ile varsayılan yönlendirme işlemleri için.
   - **js-cookie:** Tarayıcı çerezlerini yönetmek için kullanıldı.
   - **Tasarım Kütüphaneleri:** FontAwesome Icons, React Spinners gibi çeşitli tasarım ve ikon kütüphaneleri kullanıldı.

- **<span style="font-size: 16px;">Back-End</span>**
   - **Express.js:** Backend uygulamasının temelini oluşturdu, REST API'yi sağladı.
   - **JSON Web Token (JWT):** Kimlik doğrulama ve oturum yönetimi için kullanıldı.
   - **Axios:** API çağrıları ve veri alışverişi için kullanıldı.
   - **Knex.js:** PostgreSQL veritabanı için migration ve seed işlemlerinde kullanıldı.
   - **bcrypt.js:** Kullanıcı şifrelerini güvenli bir şekilde hashlemek için kullanıldı.
   - **cookie-parser:** Çerez yönetimi ve çerez tabanlı işlemler için kullanıldı.
   - **dotenv:** Çevre değişkenlerini yönetmek için kullanıldı.
   - **Nodemailer:** E-posta gönderimi için kullanıldı.
   - **pg:** PostgreSQL ile bağlantı ve veritabanı işlemleri için kullanıldı.
   - **multer:** Dosya yüklemelerini yönetmek için kullanıldı.
   - **redis:** Redis ile cache işlemleri ve session yönetimi gerçekleştirildi.
   - **fs & fs-extra:** Dosya sistemi işlemleri için kullanıldı.
   - **cors:** Geliştirme aşamasında CORS politikalarını yönetmek için kullanıldı; yayında Nginx'e devredildi.
   - **nodemon:** Geliştirme sürecinde hot-reload sağlamak için kullanıldı.

----
## Docker Compose Kurulum
- **Gerekenler:**
   - Docker kurulu olmalı.
   - Host kaydı yapılmalı.
- **Kullanılan Portlar:** 
   - **80** &nbsp;&nbsp;&nbsp; \> Nginx 
   - **6379** \> Redis
   - **5431** \> PostgreSQL (local PostgreSQL ile çakışmaması için)
- **Docker Network Portları:**<br>
Docker ağı içinde kullanılan portlar, bilgisayarın yerel portları ile çakışmaz:
   - **1072** \> Python Captcha Server
   - **1071** \> NodeJS/ExpressJS

### Kurulum
#### Docker Run
1. Proje dizinine gidin:
   ```bash
   $> cd zdocker-compose
   ```
2. Docker Compose ile konteynerleri ayağa kaldırın:
   ```bash
   $> docker-compose up
   ```
#### Database Fill
PostgreSQL Docker container'ı ayağa kalktıktan sonra tabloların oluşturulması ve test verilerinin yüklenmesi gereklidir:
   - Windows için `zdocker-compose/docker-database-fill.bat` dosyasını çalıştırın.
   
      veya
   - Terminalden docker komutunu çalıştırın (Windows yazımı problemleri gidermek için dos2unix)
      ```bash
      $> docker exec -it node_server_hk dos2unix /app/database.sh
      $> docker exec -it node_server_hk sh /app/database.sh
      ```
tablo ve test verileri oluşturma bash-script'i çalışacaktır.

#### Host Ekleme
Sistemin hosts dosyasına aşağıdaki satırları ekleyin:
```sh
	127.0.0.1       proje.isyeriegitimi.com
	127.0.0.1       api.proje.isyeriegitimi.com
	127.0.0.1       captcha.proje.isyeriegitimi.com
```
veya

Windows için [Host Ekleme Batch-Script](bin/addHosts.bat)'i çalıştırabilirsiniz. (***Kişisel bilgisayarınızda hazır script çalıştırmadan önce içeriğini kontrol etmenizi öneririm.***)
#### Siteye Giriş
- Tarayıcı üzerinden [http://proje.isyeriegitimi.com](http://proje.isyeriegitimi.com) adresine giderek siteye ulaşabilirsiniz.
- Yönetici paneline erişmek için [http://proje.isyeriegitimi.com/admin/dashboard](http://proje.isyeriegitimi.com/admin/dashboard) adresine gidin ve aşağıdaki kimlik bilgilerini kullanın:
   - `test:12345` yada
   - [Users](server/models/seeds/01_users_seed.js) dosyasındaki hesaplardan biriyle (username:şifre, email:şifre, phone_number:şifre kombinasyonları) giriş yapabilirsiniz.

---
## Local Hot-Reload Kurulum
### Windows için otomatik kurulum
- **Gerekenler:**
   - Docker kurulu olmalıdır.
   - Node.js ve npm kurulu olmalıdır.
   - WSL/Ubuntu kurulu olmalıdır (Python, Windows Subsystem for Linux üzerinden kullanılmaktadır; lokal Python kullananlar Python scriptlerini lokalde çalıştırmalıdır).
   - VSCode kurulu olmalıdır. (ZORUNLU değil; sadece VSCode ile projeye girme kısayoludur.)
- **Kullanılan Portlar:** 
   - **6379** \> Redis
   - **5431** \> PostgreSQL (local PostgreSQL ile çakışmaması için)
   - **1453** \> React-Client Server
   - **1072** \> Python Captcha Server
   - **1071** \> NodeJS/ExpressJS

***Kişisel bilgisayarınızda hazır script çalıştırmadan önce içeriğini kontrol etmenizi öneririm.***

1. Docker Desktop'ı çalıştırın.
2. [/setup.bat](setup.bat)'i çalıştırın. (Bu, masaüstüne gerekli batch dosyalarını "Project Events" adlı bir klasörde toplayacaktır.)
3. Masaüstündeki "Project Events" klasörüne girin.

Sırasıyla:
1. **Docker Setup**: Docker, Redis ve Postgres'i hub'dan çeker ve gerekli environmentlarla çalıştırır. 
   - Docker konteynırlarını durdurmak için **"Docker Stop"** ı kullanabilirsiniz.
   - Bilgisayar yeniden başlatıldıktan sonra veya Docker servisini kapatıp açtıktan sonra mevcut konteynırları tekrar başlatmak için **"Docker Dependecies Start"** ı kullanabilirsiniz.
2. **Install Dependencies**: Client (react) ve server (nodejs/expressjs) klasörlerinin gerekli bağımlılıklarını kurmak için bu batch dosyasını çalıştırın.
3. **Fill Database**: Postgres konteynırı çalışırken bu dosyayı çalıştırarak database tablolarını ve test verilerini kurun.
4. **Format + Fill Public**: Server public verilerini salt klasörden yüklemek için bu scripti çalıştırın.
5. **Start Captcha Server**: Captcha server'ını başlatın.
6. **Start Server**: RestAPI server'ını başlatın.
7. **Start Client**: Client uygulamasını başlatın.

#### Siteye Giriş
- Tarayıcı üzerinden [http://localhost:1453](http://localhost:1453/) adresine giderek siteye ulaşabilirsiniz.
- Yönetici paneline erişmek için [http://localhost:1453/admin/dashboard](http://localhost:1453/admin/dashboard) adresine gidin ve aşağıdaki kimlik bilgilerini kullanın:
   - `test:12345` yada
   - [Users](server/models/seeds/01_users_seed.js) dosyasındaki hesaplardan biriyle (username:şifre, email:şifre, phone_number:şifre kombinasyonları) giriş yapabilirsiniz.
   
#### Verilerin Sıfırlanması
- Site üzerinden verilerde değişiklik yaptıktan sonra salt verilere geri dönmek için **"Format + Fill Database"** ve **"Format + Fill Public"** batch dosyalarını çalıştırabilirsiniz.

#### Diğer Kullanışlı Scriptler
- **Open Code With VS**: Proje dizininde Visual Studio Code'u doğrudan açmak için bu batch dosyasını kısayol olarak kullanabilirsiniz.
- ***Add URL to Hosts***: Local Hot-Reload Kurulumunda **gerekli değildir**. Nginx üzerinden reverse proxy ile 3 serverın da URL üzerinden erişilebilmesi için gerekli IP-URL'leri `hosts` dosyasına ekleyen bir batch-script'tir.





### Manuel
- **Gerekenler:**
   - Docker kurulmuş olmalıdır.
   - Node.js ve npm kurulmuş olmalıdır.
   - Python ortamı (lokal veya WSL fark etmez) kurulmuş olmalıdır.
- **Kullanılan Portlar:** 
   - **6379** \> Redis
   - **5431** \> PostgreSQL (local PostgreSQL ile çakışmaması için)
   - **1453** \> React-Client Server
   - **1072** \> Python Captcha Server
   - **1071** \> NodeJS/ExpressJS

- **SIRASIYLA**
   1. **Docker İmajlarını İndirin:**
      ```bash
      $ docker pull redis
      $ docker pull postgres
      ```
   2. **Docker Konteynerlerini Çalıştırın:**
      ```bash
      $ docker run -p 6379:6379 --name redis-hk -d redis
      $ docker run -p 5431:5432 --name postgre-hk -e POSTGRES_DB=proje -e POSTGRES_USER=adminhk -e POSTGRES_PASSWORD=12345 -d postgres
      ```
   3. **Çalışan Konteynerları Kontrol Edin:**
      ```bash
      $ docker ps
      ```
   4. **Gerekli Bağımlılıkları Kurun:**
      - **Captcha Python Bağımlılıkları:**
         - **For Local Python**
            ```bash
                      $ cd captcha
            ./captcha $ pip install --no-cache-dir -r requirements.txt
            ```
         **veya**
         - **For WSL Python**
            ```cmd
                     > cd captcha
            .\captcha> wsl pip install --no-cache-dir -r requirements.txt
            ```
      - **Server  Bağımlılıkları:**
         ```bash
                  $ cd server
         ./server $ npm install
         ```
      - **Client Bağımlılıkları:**
         ```bash
                  $ cd client
         ./client $ npm install
         ```
   5. **Veritabanı Seed İşlemleri:**
      ```bash
               $ cd server
      ./server $ npm run knex migrate:latest
      ./server $ npm run knex seed:run
      ```
   6. **Salt Verileri Server'a Yükleyin:**
      - **Windows için:**
         ```cmd
                          > cd server/public
         ...\server\public> rmdir /s /q Contents
         ...\server\public> rmdir /s /q Images
         ...\server\public> xcopy /s /e /y "..\..\zsalt_public_files\" ".\"
         ```
      - **Bash için:**
         ```bash
                         $ cd server/public
         ./server/public $ rm -r *
         ./server/public $ cp -r ../../zsalt_public_files/* ./
         ```
   7. **Captcha Server'ı Başlatın:**
      - **For Local Python**
         ```bash
                   $ cd captcha
         ./captcha $ python3 app.py
         ```
      **veya**
      - **For WSL Python**
         ```cmd
                  > cd captcha
         .\captcha> wsl python3 app.py
         ```
   8. **(YENİ TERMİNAL) Server'ı Başlatın**
         ```bash
                  $ cd server
         ./server $ npm start
         ```
   8. **(YENİ TERMİNAL) Client'ı Başlatın**
         ```bash
                  $ cd client
         ./client $ npm start
         ```
#### Siteye Giriş
- Tarayıcı üzerinden [http://localhost:1453](http://localhost:1453) adresine giderek siteye ulaşabilirsiniz.
- Yönetici paneline erişmek için [http://localhost:1453/admin/dashboard](http://localhost:1453/admin/dashboard) adresine gidin ve aşağıdaki kimlik bilgilerini kullanın:
   - `test:12345` yada
   - [Users](server/models/seeds/01_users_seed.js) dosyasındaki hesaplardan biriyle (username:şifre, email:şifre, phone_number:şifre kombinasyonları) giriş yapabilirsiniz.

---
## Termux (Deploy on Android)
 - Termuxda çalıştırılmıştır.
 - Termuxda hızlı ayağa kaldırmak için [zbash-for-termux/setup.sh](zbash-for-termux/setup.sh) yazılmıştır (captcha server dahil edilmemiştir).
 - Gereklilikler sağlandıktan sonra termuxda full stack olarak ayağa kaldırılabilir.

<br>
<br>

<details>
    <summary style="user-select: none; cursor: pointer; font-size: 24px; font-weight: bold; color: #fff;" id="screen-shots-list">Ekran Görüntüleri</summary>

## Ekran Görüntüleri

*Logolar, slaytlar, etkinlikler, yorumlar, kurum başlıkları değiştirilmiştir.*<br>
*Tasarım için verilen [mockup](zsalt_public_files/Contents/Events/25/0.pdf)'a (arayüz prototipi) linkten ulaşabilirsiniz. (Mockup içerisindeki kurum verileride gizlenmiştir.)*

> Anasayfa <br>
_\> Kurumun logosu navbarda solda, departmanın logosu ise navbarda sağda yer almaktaydı. Bu yüzden navbarda **iki logo** var._ <br>
<img width="1028" src="zscreenshots\0mainpage.png"><br>

> Anasayfa - Duyuru (Açık)<br>
<img width="1028" src="zscreenshots\0mainpage-announcement.png"><br>

> Tüm Etkinlikler <br>
<img width="1028" src="zscreenshots\1eventspage.png"><br>

> Hakkında <br>
<img width="1028" src="zscreenshots\3aboutpage.png"><br>

> İletişim <br>
<img width="1028" src="zscreenshots\4contactpage.png"><br>

> **<span style="font-size: 18px;">Mobil</span>** (Anasayfa - Navigasyon - Duyuru - Tüm Etkinlikler - Hakkında - İletişim)<br>
<img width="1028" src="zscreenshots\mobil-main.png"><br>

> Etkinlik Detayı - Hakkında <br>
<img width="1028" src="zscreenshots\5detailpage-about.png"><br>

> Etkinlik Detayı - Tarihler <br>
<img width="1028" src="zscreenshots\6detailpage-dates.png"><br>

> Etkinlik Detayı - Kurullar <br>
<img width="1028" src="zscreenshots\7detailpage-commitee.png"><br>

> Etkinlik Detayı - Yazım Kuralları<br>
<img width="1028" src="zscreenshots\8detailpage-tm.png"><br>

> Etkinlik Detayı - Bildiri Gönder (Özet-Tam-Kapalı)<br>
<img width="1028" src="zscreenshots\9sendpaper.png"><br>

> Etkinlik Detayı - Bildiri Gönder (Kullanıcı Deneyimi)<br>
<img width="1028" src="zscreenshots\9sendpaper-panel.png"><br>

> Etkinlik Detayı - Oturum Takvimi<br>
<img width="1028" src="zscreenshots\10detailpage-schedule.png"><br>

> Etkinlik Detayı - Galeri<br>
<img width="1028" src="zscreenshots\11detailpage-gallery.png"><br>

> Etkinlik Detayı - Galeri (Açılmış Görsel)<br>
<img width="1028" src="zscreenshots\11detailpage-gallery-open.png"><br>

> Etkinlik Detayı - İçerik<br>
<img width="1028" src="zscreenshots\12detailpage-content.png"><br>

> **<span style="font-size: 18px;">Mobil</span>** Etkinlik Detayı(Hakkında - Tarihler - Komite Üyeleri - Yazım Kuralları - Bildiri Gönder (Boş) - Bildiri Gönder (Dolu) - Oturum Takvimi - Galeri - Galeri (Açılmış Görsel) - İçerik)<br>
<img width="1028" src="zscreenshots\mobil-detail.png"><br>

> Yönetici Paneli Giriş<br>
<img width="1028" src="zscreenshots\13loginpage1.png"><br>

> Yönetici Paneli Giriş (Hatalı Captcha)<br>
<img width="1028" src="zscreenshots\13loginpage2.png"><br>

> Yönetici Paneli Giriş (Kullanıcı Deneyimi) <br>
<img width="1028" src="zscreenshots\13loginpage3.png"><br>

> Yönetici Paneli - Yazım Kuralları<br>
<img width="1028" src="zscreenshots\14admin-tm.png"><br>

> Yönetici Paneli - Yazım Kuralları - Ekle <br>
<img width="1028" src="zscreenshots\14admin-tm-add.png"><br>

> Yönetici Paneli - Yazım Kuralları - Güncelle <br>
<img width="1028" src="zscreenshots\14admin-tm-update.png"><br>

> Yönetici Paneli - Yazım Kuralları - Sil <br>
\>*Silme Uyarı Modalı Tüm Yönetici Panelinde Aynıdır* <br>
<img width="1028" src="zscreenshots\14admin-tm-delete.png"><br>

> Yönetici Paneli - Komite Üyeleri - Ekle <br>
<img width="1028" src="zscreenshots\15admin-commitee-add.png"><br>

> Yönetici Paneli - Komite Üyeleri - Güncelle <br>
<img width="1028" src="zscreenshots\15admin-commitee-update.png"><br>

> Yönetici Paneli - Komite Üyeleri - Sil <br>
\> Silme uyarı modalı aynı olduğu için gösterilmedi. <br>
<img width="1028" src="zscreenshots\15admin-commitee-delete.png"><br>

> Yönetici Paneli - Etkinlikler - Ekle (Boş) <br>
<img width="1028" src="zscreenshots\15admin-event-add1.png"><br>

> Yönetici Paneli - Etkinlikler - Ekle (Doldurma) <br>
<img width="1028" src="zscreenshots\15admin-event-add2.png"><br>

> Etkinlik Detayı - Yeni Etkinlik <br>
<img width="1028" src="zscreenshots\15admin-event-control.png"><br>

> Yönetici Paneli - Etkinlikler - Güncelle <br>
<img width="1028" src="zscreenshots\15event-update.png"><br>

> Yönetici Paneli - Etkinlikler - Sil <br>
\> Silme uyarı modalı aynı olduğu için gösterilmedi. <br>
<img width="1028" src="zscreenshots\15admin-event-delete.png"><br>

> Yönetici Paneli - Duyurular - Ekle <br>
<img width="1028" src="zscreenshots\16admin-announcement-add.png"><br> <br>
\> Güncelle ve Sil benzer olduğu için gösterilmedi.


> Yönetici Paneli - Slayt - Ekle <br>
<img width="1028" src="zscreenshots\17admin-slide-add.png"><br>


> Yönetici Paneli - Slayt - Güncelle ve Sil <br>
<img width="1028" src="zscreenshots\17admin-slide-delupdate.png"><br>


> Anasayfa - Yeni Slayt ve Duyuru <br>
<img width="1028" src="zscreenshots\17admin-slide-control.png"><br>

> Yönetici Paneli - Kullanıcı <br>
<img width="1028" src="zscreenshots\18admin-users-panel.png"><br>

> Yönetici Paneli - Yeni Kullanıcı <br>
<img width="1028" src="zscreenshots\18admin-newuser.png"><br>

> Yönetici Paneli - Kullanıcı Yönetimi <br>
<img width="1028" src="zscreenshots\18admin-usermanage.png"><br>

> Yönetici Paneli - Ayarlar <br>
<img width="1028" src="zscreenshots\19admin-settings.png"><br>

> Yönetici Paneli - Ayarlar - Tema <br>
<img width="1028" src="zscreenshots\19admin-settings-theme.png"><br>

> Yönetici Paneli (Değişmiş Tema) <br>
<img width="1028" src="zscreenshots\19theme control.png"><br>

> Etkinlik Detayı (Değişmiş Tema) <br>
<img width="1028" src="zscreenshots\19themecontrol.png"><br>

> Ana Sayfa (Yeni Etkinlik ve Duyuru) <br>
<img width="1028" src="zscreenshots\22eventveannounce test.png"><br>

> **<span style="font-size: 18px;">Mobil</span>** Yönetici Paneli(Kullanıcı Girişi (Boş) - Kullanıcı Girişi (Dolu) - Yazım Kuralları - Komite Üyeleri - Etkinlikler - Etkinlik Ekle - Slaytlar - Slayt Güncelle Sil - Duyurular - Kullanıcı Yönet - Ayarlar - Tema)<br>
<img width="1028" src="zscreenshots\mobil-admin.png"><br>

> Cookies ve Local Storage Data <br>
<img width="1028" src="zscreenshots\99cookies.png"><br>

> Çalışan Mail Gönderi Sistemi Mail-Template (kurumun kullandığı zimbraya uygun) ile Gönderi Oluşturur <br>
<img width="1028" src="zscreenshots\99zmail_output.png"><br>


</details>
