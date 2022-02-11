---
layout: post
title: "Hayallerimin Peşinden Koşmaya Başladım"
comments: false
description: "PHP'de bir dosya include ederken karşılaşılan hatalar ve çözümleri."
keywords: "php, hayaller, programlama, yazılım"
---

Dile kolay, tam 17 sene geçmiş internet sitelerinin kaynak kodlarını kurcalamaya başladığımdan bu yana. 1999 Yılında, nereye gittiğimizi hatırlamadığım bir okul gezisinde, bir şekilde elime geçen Dünyayı Saran Ağ isimli o incecik kitap, bir insanın ömrü boyunca ilgi duyacağı alanı keşfetmesine vesile oldu. İnternet kafaye gidip, masaüstünde boş bir web sayfası oluşturduğum, yanımda getirdiğim malum kitapta yazan kodlara bakarak o web sayfasının arkaplan rengini değiştirdiğim ve bunu yapabildiğim için kendimle gurur duyduğum o günü çok net hatırlıyorum. Henüz 11 yaşında bir çocuktum. Duyduğum o gurur, lise yıllarımda bana sırf bilgisayar mühendisi olabilmem için sayısal bir bölüm okuttu. Olamadım tabii.

Hayatın bize sunduğu imkanlar, ilgi alanlarımızı mesleğimize dönüştürmek için genelde yetersizdir. Kimileri bu yetersizliği bir şekilde aşar. Mühendis olmadığı halde tarihe yön veren icatlar yapan insanlar mesela ya da hiç tasarım dersi almadığı halde mükemmel tasarımlar yapan grafikerler. Peki bilgisayar mühendisi olmadığı halde ne yapar da kendisini bu alanda yetiştirir insan? En azından bir programlama dili öğrenir değil mi?

Ben öğrenmedim. Bu yazının bu sayfada görünmesini sağlayan temel HTML dilini zaten çocukken öğrenmiştim. Daha sonra, uğraştığım siteler üzerinde düzenlediğim kaynak kodlarından göre göre bir şekilde derdimi anlatacak kadar CSS öğrendim. CSS ise bu paragrafın iki yana yaslı görünmesini sağlayan tasarım dili. Bir ara ASP dilinde site kurdum, çat pat bir şeyler yaptım. 2008 yılında Blogspot üzerinden bu blogu kurduğumda şu temayı uzun vadede düzenleyerek şu hale getirdim. Tüm bu site sadece 1 sayfa koddan meydana geliyor. Blogspot’un HTML ile karışık, kendine has bir dili var. Bunu da örneklere baka baka, deneye yanıla öğrendim. Daha sonra 2015 yılında WordPress’e geçtim ve bu gördüğünüz siteyi kurdum. Oturup iki satır kod öğrenmek yerine bunca yıl başkalarının yazdığı kodlar üzerinde oynayarak, yabancıların “Reverse Engineering” yani “Tersine Mühendislik” dediği işi yaptım.

![HTML ve CSS İlişkisi](https://kelimelerbenim.com/wp-content/uploads/2016/03/html-css.jpg)
_Bu örnekte HTML ve CSS ilişkisi güzel bir şekilde açıklanmış [[^1]]_

Bundan bir ay kadar önce, kullanmadığımız, boşta duran bir Android telefonu güvenlik kamerası olarak kullanma projemle uğraşırken (Bu konuyu ayrı bir yazıda detaylı olarak paylaşacağım), kamerayı uzaktan izleyebilmem için bana basit bir script lazım oldu. Konu tam olarak şu: Telefon belli aralıklarla kendisinin o anda sahip olduğu dış IP adresini bir web sayfasına gönderecek. Bu IP adresleri bir veritabanında depolanarak bir sayfada listelenecek. Hepsi bu. Olayın basitliğini, kod yazma mantığına olan aşinalığım sebebiyle çok iyi biliyorum fakat eşeklik bende, bu güne kadar bu kadar basit bir scripti yazacak kadar bile PHP öğrenmediğim için başkalarının yardımına ihtiyaç  duyuyorum. Webmaster forumlarına konu açtım ve böyle bir ihtiyacım olduğunu belirttim. Hemen cevaplar geldi ve bu sistemi yazmak için 5 dakika süre ve 50 TL para istediler. İşte o anda cehaletin oldukça maliyetli olduğunu anladım. Neyse ki bir arkadaş script konusunda yardımcı oldu fakat benim için bu olay bir şeylerin başlangıcı olmuştu.

Bu olay sonrasında oturup düşündüm. Aslında, bilgisayar mühendisi olmadan da sevdiğim işi yapabilirdim. Hali hazırda para kazandığım bir iş varken acele etmeme de gerek yoktu. Bir alana yönelmeliydim ve bu alan hayatımda büyük bir yeri olan web siteleri ile ilgili olmalıydı. HTML biliyordum, CSS ise kısa zamanda tamamlanabilecek kadar az eksiğim olan bir konuydu. Web sitelerini bir araba olarak düşünürsek, arabanın iskeletini yapabilecek bilgim vardı. Kaportasını boyayıp, görüntüsünü iyileştirecek CSS bilgisine de az çok sahiptim. Bu durumda en önemli parça eksikti: Arabanın motoru. İşte o motor Ocak 2013 itibariyle 244 milyondan fazla web sitesinin kullandığı PHP programlama diliydi.

![A'dan Z'ye PHP](https://kelimelerbenim.com/wp-content/uploads/2016/03/adan_zye_php.jpg)
_A’dan Z’ye PHP Kitabını D&R üzerinden 09.02.2016 tarihinde sipariş ettim.
Kitap şu anda aynı sitede 45,52 TL’ye satılıyor._

Önce PHP-TR isimli Facebook grubuna katılıp, grup üyelerinden PHP öğrenmeye nereden başlamam gerektiği ile ilgili fikirler aldım. İlk birkaç cevap aynı olunca bu kadar insan yanılıyor olamaz deyip Rıza Çelik’in A’dan Z’ye PHP isimli kitabını sipariş ettim. Kitabın gelmesini zor bekledim. Şimdi bitmek bilmeyen bir hevesle PHP öğreniyorum. Gerek bu kitaptan olsun, gerek farklı video eğitim setlerinden olsun, PHP’ye çapraz ataklarla her gün biraz daha yakınlaşıyorum. Konuları bir bir öğrenirken “Ben bunu bugüne kadar nasıl öğrenmemişim” diye içimden geçirmiyor değilim. Çünkü programlama, sizin hayal dünyanızda yarattığınız bir dünyanın içinde yine sizin hayal gücünüzle çalışan makineler yaratmak demek ve bu çok eğlenceli bir iş. PHP benim için ilk adım olacak, onunla beraber CSS, HTML5, REGEX, CURL, mySQL, mySQLi, PDO, MongoDB, XML, SOAP, GD, OOP, IMAP, POP3, SQLITE, AJAX, MVC, CODEIGNITER, LARAVEL 4, SEO, REST konularını da öğrenmeyi istiyorum.

![A'dan Z'ye PHP](https://kelimelerbenim.com/wp-content/uploads/2016/03/IMG_3637.jpg)

Kendime koskoca 4 sene veriyorum. 2020 yılına kadar kendimi ne kadar geliştirebileceğimi, o gün geldiğinde, bu işi meslek değişikliği yapacak kadar ilerletip ilerletemeyeceğimi çok merak ediyorum. Bu işi seviyorum. PHP çalışırken oyun oynuyormuş gibi hissediyorum. Bu hevesin avantajını kullanarak bu işte en iyilerden biri olmak istiyorum. Eğer Allah ömür verirse, 2020 yılında bu yazının altına bir şeyler karalamak üzere. Hayallerinizin peşini bırakmayın.

---
[^1]: 1: Kaynak: [http://tutorial.techaltum.com/css.html](http://tutorial.techaltum.com/css.html)