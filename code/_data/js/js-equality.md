---
title: "JavaScript Equality"
emoji: "handshake"
date: "2020-08-10"
category:
  name: JavaScript
  desc: All about JavaScript
  image: /assets/need_prep.gif
  color: rgb(227, 227, 18)
tags:
  - "#js"
  - "#JavaScript"
  - "objects"
  - "equals"
fileName: "js-equality"
code_embed_link: "js-equality"
links: 
  - "GreenRoots Blog(JavaScript: Equality comparison with ==, === and Object.is)$#$#$#https://blog.greenroots.info/javascript-equality-comparison-with-and-objectis-ckdpt2ryk01vel9s186ft8cwl"
---
Traditionally JavaScript provides 2 special operators for equality comparison:
- `==` is for Abstract Equality Comparison which performs a loose equality between the operands.
- `===` is for Strict Equality Comparison which performs a strict equality between the operands.

With ES6, we have one more way to perform the Same-value equality using Object.is method. In this article, we will get deeper in understanding the usage, impact and use-cases of all of them.