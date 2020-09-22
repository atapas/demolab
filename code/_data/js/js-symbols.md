---
title: "ES6 Symbols"
emoji: "input-symbols"
date: "2020-09-08"
category:
  name: JavaScript
  desc: All about JavaScript
  image: /assets/need_prep.gif
  color: rgb(227, 227, 18)
tags:
  - "#js"
  - "#JavaScript"
  - "symbols"
code_embed_link: "knowing-es6-symbols"
links: 
  - "Symbols in Metaprogramming$#$#$#https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/"
  - "JS Symbols from Exploring JS$#$#$#https://exploringjs.com/es6/ch_symbols.html"
  - "Detailed overview of Well-Known Symbols$#$#$#https://dmitripavlutin.com/detailed-overview-of-well-known-symbols"
  - "Explain Me Like I am Five: What are ES6 Symbols?$#$#$#https://blog.greenroots.info/explain-me-like-i-am-five-what-are-es6-symbols-ckeuz5sb8001qafs14of305dw"
---
`Symbol` is a primitive type(not an object) included in the ECMAScript 2015(aka, ES6). We are already familiar with the existing primitive types like, `Number`, `String` and, `Boolean`. Like these primitive types, Symbols are also created via a factory function.

`Symbol` allows us to create unique identifiers. Every time we invoke `Symbol()`, a new unique symbol is created. Two symbols are not equal(they are unique) even when they have the same name.