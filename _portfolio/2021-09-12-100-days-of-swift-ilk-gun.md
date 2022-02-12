---
layout: post
title: "100 Days Of Swift - İlk Gün"
comments: false
description: "100 Days Of Swift Programına başladım."
keywords: "swift, 100DaysOfCode, UIKit"
---

Covid-19 döneminde bilgisayar başında geçirdiğim zamanın çoğunu (Kapanmalardan dolayı insanlar bir araya gelemediği için) çevrimiçi etkinlik web siteleri oluşturmaya harcadım. Bu süreçte bir etkinlik şirketi adına Türkiye’nin en büyük şirketlerinin de aralarında bulunduğu şirketlerin çevrimiçi etkinlikleri için 50’ye yakın proje çıkardım ve hala devam ediyorum.

Bu web sitelerini sıfırdan kodlarken backend için %95 PHP programlama dilini kullandım. Ayrıca ihtiyaç sonucu `Socket.IO` öğrendim ve bir chat modülü ile bir online kullanıcı takip modülü yazdım. Böylece %5 gibi NodeJS kullandım diyebilirim. Tabii sadece backend değil, frontend, sunucu yönetimi ve hatta domain DNS ayarlarına kadar bu işlerin tamamı benim elime bakıyordu. Bu yüzden uzun zamandır mobil programlama dünyasına giriş yapmak için doğru zamanı bekledim.

Aslında yılın başında mobil uygulama geliştirme macerasına React Native ile girmeye [karar vermiştim](https://twitter.com/kelimelerbenim/status/1352638073469857793). Sonradan, Superpeer üzerinden iOS Developerlar [Ahmet Sina Üstem](https://superpeer.com/as), [Yusuf Demirci](https://superpeer.com/demirciy), [Oğulcan Orhan](https://superpeer.com/ogulcanor) ve Flutter Developer [Ümit Duran](https://superpeer.com/flutterist)‘la birer görüşme gerçekleştirdim. Her biri çok sıcak kanlı, mütevazı ve zeki insanlar. Kendileriyle yaptığım görüşmelerde Android/iOS/Multiplatform kararsızlığımdan ve yeni bir kariyere başlama hedefim olduğundan bahsettim. Bu dört arkadaşla yaptığım görüşmelerin sonucunda kariyer hedefimi keskin bir şekilde iOS Developer olarak değiştirdim. Çoğu zaman önemli olan ilk adımı atmaktır. Ben bugün o adımı attım.

Kendisini Swift diline adamış gibi görünen [Paul Hudson](https://twitter.com/twostraws), web sitesinde [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) diye bir eğitim seti yayınlamış. Bu dili sindire sindire 100 günde öğrenmenin benim için en iyisi olacağına karar verdim ve bu eğitime bugün başladım. İlk gün değişkenler (variables), sabitler (constants) ve veri tipleri gibi temel bilgileri öğrendim.

Daha önceden başka bir programlama dilini kullanıyorsanız, yeni bir dil öğrenmek keyifli bir süreç. Her konuda bir fikriniz oluyor. Önceki dille kıyaslayıp bu daha kolaymış, bu daha zormuş diyebiliyorsunuz. İşte ben de ilkini yazdığım bu yazı serisinde hem PHP ile Swift arasındaki bazı farkları hem de kişisel gelişim sürecimi sizinle paylaşacağım.

```swift
// Benim ilk Swift kodlarım bunlar
// Sezer İltekin
// 12 Eylül 2021 Pazar Saat 10:15

import UIKit

var greeting = "Hello, playground"
greeting = "Selam, playground"
// Bir değişkeni atamak için "var" ile başlıyoruz. Bu yeni değişken oluşturuyoruz anlamına geliyor. Değiştirmek içinse değişken adının başına bir şey yazmıyoruz. Değişken string olarak oluşturulduysa yenisi yine string olmak zorunda.

var sayi = 13
// Integer türünde değişken

var uzunSayi = 80_000_000
// Uzun sayılarda sadece görsel olarak rahatlık sağlasın diye alt tire kullanabiliriz. Sonuç olarak sayı değerinde hiçbir değişikliğe sebep olmaz
uzunSayi = 15_000_000
// Burada integer türündeki değişkeni yine integer türünde başka bir değerle değiştirdik (string olamazdı)

var uzunCumle = """
    Selamlar
    benim adım Sezer.
    Sizin adınız nedir?
    """

var tekSatirUzunCumle = """
    Selamlar \
    Bu satırları kolay olsun diye alt alta yazıyorum \
    Fakat sondaki ters slash sayesinde yeni satır olarak \
    Görünmeyecek
    """

var pi = 3.141
pi = 3
// Double türünde değişken oluşturuyoruz
// Integer ile karıştırılamaz (Toplama çıkartma yapılamaz)

var toplam = sayi + uzunSayi // (sayi + pi hata verdi)

var durum = true
durum = false
// Boolean türünde değişken oluşturuyoruz

var eklemeOzelligi = "Biraz önce yazdığımız string'de \(greeting) demiştik :)"
// Bu özelliğe String Interpolation deniliyor
// Ters slash sonrası parantez içine değişken yazılabiliyor

let sabit = "Bu sabit bir değer"
// var yerine let kullandığımızda bu bir sabit (constant) oluyor ve değeri değiştirilemiyor. değişmesini istemeyeceğimiz önemli datalar için kullanışlı

let album: String = "Islak Islak"
let sene: Int = 1999
let yukseklik: Double = 1.69
let onay: Bool = false

// Swift yazdığımız değişkenlerin türünü tespit edebiliyor fakat istersek bu şekilde kesin tür tayini yapabiliriz. Peki neden kullanılır? Değişkene karşılık gelecek veriyi kontrol edebilmemiz için. Her zaman elle yazmıyoruz. Veya double olmasını istediğimiz bir değişkene ilk atamada integer verebiliriz. Bu da sonraki aşamalarda double değişiminde soruna sebep olur. Son olarak, değişken olarak atamak istediğimiz ama değerini henüz belirlemediğimiz zaman şöyle yaparız:
var sonraYazarim: String
```

**Not:** Bu yazıyı yazdıktan yaklaşık 10 gün sonra `SwiftUI` yerine `UIKit` öğrenmem gerektiğine karar verdim ve `100 Days Of SwiftUI` programından `100 Days Of Swift` programına geçiş yaptım.