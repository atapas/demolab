---
title: "ResizeObserver"
emoji: "face-with-monocle"
date: "2020-08-28"
category:
  name: Web Apis
  desc: "When writing code for the Web, there are a large number of Web APIs available. Web APIs are typically used with JavaScript, although this doesn't always have to be the case."
  image: /assets/need_prep.gif
  color: rgb(232, 146, 16)
tags:
  - "#resize"
  - "#screen"
  - "#timing"
fileName: "resizeobserver"
links: 
  - "MDN$#$#$#https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"
---
The `ResizeObserver` interface reports changes to the dimensions of an Element's content or border box, or the bounding box of an SVGElement.

ResizeObserver avoids infinite callback loops and cyclic dependencies that are often created when resizing via a callback function. It does this by only processing elements deeper in the DOM in subsequent frames. Implementations should, if they follow the specification, invoke resize events before paint and after layout.