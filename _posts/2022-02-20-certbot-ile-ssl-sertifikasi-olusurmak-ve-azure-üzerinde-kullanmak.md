---
layout: post
title: "Certbot İle SSL Sertifikası Oluşturmak ve Azure Üzerinde Kullanmak"
comments: false
description: "Certbot İle Oluşturulan SSL Sertifikasını Azure Servislerinde Kullanmak için gereken adımlar"
keywords: "azure, ssl, certbot, letsencrypt"
---

Ücretsiz hizmet veren bir SSL sertifika otoritesi olan [Let's Encrypt](https://letsencrypt.org/) ve açık kaynak kodlu bir komut satırı yazılımı olan [Certbot](https://certbot.eff.org/) sayesinde kişisel bilgisayarımızda ya da sunucularımızda saniyeler içinde SSL sertifikası üretebilir ve istediğimiz projede kullanabiliyoruz. Bu yazımda Cerbot'un genel kullanımını değil, yalnızca manuel olarak SSL sertifikası oluşturmayı ve bu sertifikayı [Azure](https://azure.microsoft.com/) servislerinde kullanmayı anlatacağım.

## Certbot Kurulumu

Bilgisayarımızda [Certbot](https://certbot.eff.org/) yüklü olmalı. Yüklü değilse ve MacOS veya Linux işletim sistemi kullanıyorsanız bilgisayarınıza öncelikle [Homebrew](https://brew.sh/index_tr) yüklemelisiniz. Terminali açın ve Homebrew'i şu komutla  kurun:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Daha sonra `brew install certbot` komutuyla Certbot'u bilgisayarınıza yükleyin. Artık bir SSL sertifikası oluşturmak için hazırsınız. 

### Certbot ile Manuel Olarak Sertifika Oluşturmak

Manuel bir sertifika oluşturmak için kullanacağınız komut:

```
sudo certbot certonly --manual --preferred-challenge=dns -d sizindomaininiz.com
```

Bu aşamada domainin size ait olduğunun doğrulanması için domaininize bir DNS TXT kaydı eklemeniz istenecektir. Bu doğrulama yöntemini `--preferred-challenge=dns` opsiyonuyla biz seçmiş olduk. Ekranda size key/value şeklinde bir TXT kaydı verilecek ve size verilen bu kaydını domaininize ait DNS ayarlarına girdiğinizde `ENTER` tuşuna basmanız istenecektir. **Bu kısımda onay vermek için acele etmeyin.** Örnek ekran çıktısı:

```
Requesting a certificate for sizindomaininiz.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name:

_acme-challenge.sizindomaininiz.com.

with the following value:

_3lxSm8vfmcsZJXtiIrbb3n1Mw_9Rl7NTod2eway-1I

Before continuing, verify the TXT record has been deployed. Depending on the DNS
provider, this may take some time, from a few seconds to multiple minutes. You can
check if it has finished deploying with aid of online tools, such as the Google
Admin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.sizindomaininiz.com.
Look for one or more bolded line(s) below the line ';ANSWER'. It should show the
value(s) you've just added.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue

```

Girdiğiniz DNS kaydının oturması tecrübelerime göre beş dakika civarı sürüyor. Elbette bu kaydın oturup oturmadığını şu komutla **başka bir terminal penceresinden** kontrol edebilirsiniz:

```
dig TXT _acme-challenge.sizindomaininiz.com
```

DNS kaydı oturduğunda `ENTER` tuşuna basın. Bir hatayla karşılaşmadıysanız aşağıdaki mesajı almış olacaksınız:

```
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/sizindomaininiz.com/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/sizindomaininiz.com/privkey.pem
```

Her ne kadar sertifika dosyalarınızın `/etc/letsencrypt/live/` klasöründe olduğu belirtilse de o klasördekilerin sadece bir kısayoldan ibaret olduğunu unutmamak gerekiyor. Asıl dosyalar `/etc/letsencrypt/archive/` dizininde. Dosyaların tamamı şu şekilde:

- chain1.pem
- privkey1.pem
- cert1.pem
- fullchain1.pem

## Azure için PFX dosyası oluşturmak

Bu 4 sertifika dosyasını her şekilde kullanabilirsiniz fakat Azure servisleri PFX formatında tek bir dosya istiyor sizden. Bunun için sistemimize `openssl` kuracağız. Aşağıdaki komutla kurulumu yapabilirsiniz:

```
brew install openssl
```

Daha sonra şu komutu kullanarak mevcut sertifika dosyalarınızdan bir PFX oluşturabilirsiniz:

```
sudo openssl pkcs12 -export -in /etc/letsencrypt/live/sizindomaininiz.com/fullchain.pem -inkey /etc/letsencrypt/live/sizindomaininiz.com/privkey.pem -out sizindomaininiz.com.pfx

```

Bu komutu kullandığınızda sistem sizden bir Export Password isteyecektir. Export Password, PFX dosyalarının kullanılması için gereken şifredir. Herhangi bir şifre belirleyebilirsiniz. Bu şifre, PFX formatındaki sertifikanızı Azure servislerinize yüklerken size sorulacaktır. Bu yüzden unutmamanızda fayda var. Şifreyi belirledikten sonra terminal üzerinde o anda hangi dizindeyseniz orada PFX dosyanız oluşturulmuş olacaktır.

Soru ve önerileriniz için bana [iletişim](https://iltekin.com/contact) sayfasından ulaşabilirsiniz.


