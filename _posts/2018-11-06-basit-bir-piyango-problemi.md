---
layout: post
title: "Basit Bir Piyango Problemi"
comments: false
description: "Bir matematik problemini algoritma ile çözmek üzerine bir yazı."
keywords: "php, algoritma, olasılık"
---


İlk bakışta karmaşık gibi görünen bir işlemi bazı matematik formülleriyle çözen insanları seviyorum, onlar gerçekten akıllı insanlar fakat benim gibi, okulda matematikle arası çok fazla iyi olmamış biriyseniz (üzgünüm ama bildiklerini öğretme konusunda yetersiz olan öğretmenlerle ilgili bir problem olduğunu düşünüyorum) karşınıza çok aşamalı bir matematik işlemi çıktığında ikinci bir şansınız olması için yapmanız gereken şey kod yazmak olabilir.

Bir duyuru sitesinde dolaşırken karşıma çıkan şu soruya bir bakalım:

> Bir piyango için 6 rakamlı biletler basılıyor. 0’dan 999.999’a kadar numaralanmış olan bu bir milyon biletin kaçında ilk 3 rakamın toplamı, son 3 rakamın toplamına eşittir?

Soruda belirtmemiş olsa da piyango biletlerinin karakter sayısı hep aynı olacağından ilk bilet numarası tek bir sıfır yerine 6 sıfır olması gerekiyor. Sonraki sayı ise 000001. Bu şekilde 999999’a gelindiğinde sıfır sayısı ile beraber elimizde toplam 1 milyon sayı olacak. Kod yazmayı biliyorsanız öncelikle bu problemi kendiniz çözmeye çalışın. PHP yazanlar için bir tavsiye vereyim: Ben genelde böyle ufak tefek işlerimi phptester.net üzerinde yapıyorum. Ne yapacağınız hakkında bir bilginiz yoksa aşağıdaki kodu inceleyebilirsiniz.

```php
// Öncelikle eşit olan sayıları biriktirmek için boş bir dizi (array) oluşturalım.
$esitolanlar = array();

// For döngüsü ile 0'dan 999999'a kadar giden bir döngü oluşturuyoruz. Bu bizim ana döngümüz. Bu kod art arda tam 1 milyon kez çalışacak.	
for($i = 0; $i <= 999999; $i++){
	// Sayıyı 6 basamağa tamamlamak için PHP'nin str_pad fonksiyonunu kullanıyoruz.
	$sayi = str_pad($i, 6, '0', STR_PAD_LEFT);
	// Sayının ilk 3 ve son 3 basamağını elde etmek için PHP'nin substr fonksiyonunu kullanıyoruz.	
	$ilk3 = substr($sayi, 0, 3);
	$son3 = substr($sayi, -3, 3);
	
	// Döngü içinde yeni bir for döngüsüyle her bir sayı için, o sayının rakamlarını ilk 3 ve son 3 olmak üzere ayrı ayrı topluyoruz.
	$ilktoplam = 0;
	for($s = 0; $s <= 2; $s++){
		$ilktoplam = $ilktoplam + $ilk3[$s];
	}

	$sontoplam = 0;
	for($s = 0; $s <= 2; $s++){
		$sontoplam = $sontoplam + $son3[$s];
	}	
	
	// İlk 3 ve son 3 basamaklarındaki rakamların toplamı aynı olan sayılar için en başta oluşturduğumuz $esitolanlar dizisine bir eleman (sayının kendisi) ekliyoruz.
	if($ilktoplam == $sontoplam){
		$esitolanlar[] = $sayi;
	}
	
}

// Oluşturduğumuz dizide kaç eleman olduğunu saydırıp bunu bir değişkene atıyoruz.
$saybakalim = count($esitolanlar);

// Sonucu okunaklı ve anlamlı bir şekilde ekrana yazdırıyoruz.
echo "000000 ile 999999 arasında, ilk 3 basamağındaki rakamların toplamı ile son 3 basamağındaki rakamların toplamı aynı olan $saybakalim adet sayı vardır. bunlar:";

// İlk 3 ve son 3 basamaklarındaki rakamların toplamı aynı olan sayıları foreach döngüsüyle ekrana yazdırıyoruz.
foreach($esitolanlar as $tekil){
	echo $tekil . ', ';
}
```
### Sonuç:

000000 ile 999999 arasında, ilk 3 basamağındaki rakamların toplamı ile son 3 basamağındaki rakamların toplamı aynı olan <b>55.252</b> adet sayı vardır.
bunlar: 000000, 001001, 001010, 001100, 002002 … diye gidiyor.

Böyle problemlerle uğraşmak benim için son derece zevkli bir aktivite. Kodunuz çalışıp bir milyon işlem saniyeler içinde yapıldığında, bilgisayara neden “computer” denildiğini tam olarak anlamış oluyorsunuz. Sevgiler.