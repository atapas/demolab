---
title: "Clipboard API(Async)"
emoji: "clipboard"
date: "2020-08-26"
category:
  name: Web Apis
  desc: "When writing code for the Web, there are a large number of Web APIs available. Web APIs are typically used with JavaScript, although this doesn't always have to be the case."
  image: /assets/need_prep.gif
  color: rgb(232, 146, 16)
tags:
  - "#clipboard"
fileName: "clipboard-api"
links:
  - "10 lesser-known Web APIs you may want to use $#$#$#https://blog.greenroots.info/10-lesser-known-web-apis-you-may-want-to-use-ckejv75cr012y70s158n85yhn"
  - "MDN$#$#$#https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API"
  - "Google Developer Blog$#$#$#https://developers.google.com/web/updates/2018/03/clipboardapi"
---
The `Clipboard API` provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard. 

Access to the contents of the clipboard is gated behind the Permissions API: The clipboard-write permission is granted automatically to pages when they are in the active tab. The clipboard-read permission must be requested, which you can do by trying to read data from the clipboard.

This API is designed to supersede accessing the clipboard using `document.execCommand()`.