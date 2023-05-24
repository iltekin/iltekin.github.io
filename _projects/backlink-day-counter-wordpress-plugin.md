---
layout: project
title: "Backlink Day Counter Wordpress Eklentisi"
comments: false
description: "Eğlenceli bir hafta sonu projesi"
keywords: "wordpress, backlink day counter, plugin"
images: 005
year: 2022
place: 5
---

Creates remaining days number of a sponsored backlink next to it.
By using `[link]` shortcode after backlink, Administrators can see remaining days of a sponsored backlink next to it.

== Features ==

* Option to using only with "end" (dd.mm.yyyy) parameter. Example: [link end="15.07.2023"]
* Option to using with "start" (dd.mm.yyyy) and "duration" (days) parameters. Example: [link start="15.07.2022" duration="30"]
* Option to create whole backlink with it using "url" and "keyword" parameters. Example: [link url="https://www.google.com" keyword="Google" target="_blank" end="15.07.2023"]
* Option to add infinite parameters to it. Example: [link end="15.07.2023" customer="Yilmaz Cakar" email="customer@example.com" price="$20"]
* Option to create a link without detail. Example: [link url="https://www.google.com" keyword="Google" plain="yes"]
* Only Administrator of website can see that created data.
* English (default) and Turkish support (Can be changed in Admin -> Settings -> Backlink Day Counter Settings)

== Parameter Names ==

ENGLISH         TURKISH
start           baslangic
end             bitis
remaining       kalan
duration        sure
days            gun
keyword         kelime
plain           detaysiz