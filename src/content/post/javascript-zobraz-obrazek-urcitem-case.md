---
publishDate: 2016-11-27T19:07:38+01:00
title: Javascript - zobraz obrázek v určitém čase
excerpt: Zobrazení obrázku javascriptem v určitém dni, hodině a minutě. Jednoduchý javascript, ve kterém si můžete pohodlně měnit, kdy se má co zobrazit.
description: Zobrazení obrázku javascriptem v určitém dni, hodině a minutě. Jednoduchý javascript, ve kterém si můžete pohodlně měnit, kdy se má co zobrazit.
image: ~/assets/images/javascript-zobraz-obrazek.png
category: koderstvi
readingTime: 10
tags:
  - programovani
---
Úkol byl v takovém znění, že klient potřeboval měnit obrázek na základě dne a hodiny. Takže se muselo šáhnout už na Javascript. Přesně se jednalo o tohle rozmezí:

Po 00:00-16:59  
Po 17:00-18:59  
Po 19:00-23:59  
Út 00:00-23:59  
St 00:00-16:59  
St 17:00-18:59  
St 19:00-19:59  
St 20:00-23:59  
Čt 00:00-23:59  
Pá 00:00-19:59  
Pá 20:00-21:59  
Pá 22:00-23:59  
So 00:00-19:59  
So 20:00-23:59  
Ne 00:00-18:59  
Ne 19:00-20:59  
Ne 21:00-23:59

Asi to šlo napsat méně prasácky, ale if else zná každý, a pokud si to má sám klient editovat (src), tak tohle je to nejjednodušší, jak se vyznat v kódu. Celé zadání je hotové pomocí JavaScriptu.

Celý kód včetně testových obrázků můžete **[stahovat zde](https://jaroslavhuss.cz/wp-content/uploads/2016/11/script_zmena.zip)**.

Skript jsem naprogramoval zdarma, protože se JSkem bavím (opravdu je to pro mě zábava), takže jestli chcete napsat nějaký další script, určitě mi napište – <jaroslav.huss@gmail.com>. Pokud se mi úkol bude líbit, udělám ho a pochopitelně zdarma.