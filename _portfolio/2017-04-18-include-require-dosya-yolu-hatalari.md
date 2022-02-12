---
layout: post
title: "Include ve Require Dosya Yolu Hataları"
comments: false
description: "PHP'de bir dosya include ederken karşılaşılan hatalar ve çözümleri."
keywords: "php, include, require, mobile detect"
---


Dün gece, [sözlük](https://blogsozluk.com) üzerinde bazı geliştirmeler yapmaya çalışırken, sözlüğe mobilden giriş yapıldığını tespit edebilen bir PHP sınıfına ihtiyaç duydum. Bir Google aramasıyla hızlıca ulaştığım [Mobile Detect](http://mobiledetect.net) işimi tam anlamıyla gördü. Bir süre sonra, standart sayfaların aksine bir üst dizinde bulunan sayfalara giriş yapmaya çalıştığımda sözlüğün iç sunucu hatası verdiğini fark ettim. Hata mesajı aşağı yukarı şöyle bir şey:

```
PHP Warning: 
include_once(): Failed opening ‘klasor/Mobile_Detect/Mobile_Detect.php’ for inclusion (include_path=’.:/opt/alt/php46/usr/share/pear:/opt/alt/php46/usr/share/php’) in /home/yoursite/public_html/klasor2/head.php on line 156
```

[Mobile Detect](http://mobiledetect.net) sınıfını kullanmak için `Mobile_Detect.php`’yi bir sayfaya `ìnclude` edip, 2 satır kod ile giriş yapan kullanıcının mobil olup olmadığını, kullandığı cihazın tablet mi yoksa telefon mu olduğunu ve hangi tarayıcıyı kullandığını tespit edebilmek mümkün. Daha detaylı bilgiyi kendi sitesinden alabilirsiniz.

Konumuzla ilgili kısmı şu ki `Mobile_Detect.php`’yi, üst dizindeki sayfalarda çalışabilecek şekilde include edememiştim. Tüm sayfalara include edilen `head.php` sayfasının içine include ettiğim bu dosya yalnızca ana dizindeki sayfalarda doğru çalışıyordu. Hem üst dizinde hem de ana dizindeki dosyalarda sağlıklı bir şekilde çalışmasını sağlamak için manuel olarak yazılmış `../../klasor/Mobile_Detect/Mobile_Detect.php` gibi bir yol kullanmak mantıksızdı. Her zaman, birinde çalışıp diğerinde çalışmayacaktı. Peki dosyanın yolu neresi olursa olsun, bana sabit bir yol verecek olan metod neydi? İşte bu:

```php
include $_SERVER['DOCUMENT_ROOT']."/klasor/Mobile_Detect/Mobile_Detect.php";
```
Bu şekilde `$_SERVER[‘DOCUMENT_ROOT’]` global değişkenini kullandığımızda, hangi dizinde olursa olsun, include edilen dosyanın yolu her zaman ana dizinden başlayarak bulunuyor ve hiçbir şekilde hataya yer vermiyor.