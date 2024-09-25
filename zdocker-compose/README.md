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
1. Docker Compose ile konteynerleri ayağa kaldırın:
   ```bash
   zdocker-compose $> docker-compose up
   ```
#### Database Fill
PostgreSQL Docker container'ı ayağa kalktıktan sonra tabloların oluşturulması ve test verilerinin yüklenmesi gereklidir:
   - Windows için `zdocker-compose/docker-database-fill.bat` dosyasını çalıştırın.
   
      veya
   - Terminalden docker komutunu çalıştırın
      ```bash
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