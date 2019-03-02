---
slug: css-and-box-sizing
date: 2019-02-27T22:19:02.515Z
title: "CSS and Box Sizing"
template: "post"
draft: false
description: "Over the last two days, we’ve been learning HTML and CSS. We spent a day on HTML. We talked about semantic HTML and best practice. For our homework, we were given a site and we had to replicate what…"
category: ""
tags: [CSS]
---

### CSS and Box Sizing

Over the last two days, we’ve been learning HTML and CSS. We spent a day on HTML. We talked about semantic HTML and best practice. For our homework, we were given a site and we had to replicate what we thought the HTML structure should be. It was a bit weird as we were only doing HTML, no CSS or JavaScript, It was weird to add HTML mark up to the text provided and not see any visible change. Also, with semantic HTML elements, I find myself perhaps overthinking things a little. I worry about should this be a section or a div, should this be in the be a section be a div, and so on, but it doesn’t make a visible difference.

A cool resource we were shown was [HTML5 Doctor](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf). Basically, it’s a flowchart documenting which HTML elements should be used and when they should be used. Also, another cool resource we were shown was this [evolution of the web graphic](http://www.evolutionoftheweb.com/?hl=en-gb), which is pretty cool.

### CSS

Following HTML, we spent a day on CSS, which was full on. Covering CSS in just a day meant that there was a lot crammed into the day. Therefore, it took some time to get my head around everything we had learnt.

I am very appreciative of the job CSS does in styling the web. I’m not sure that I can say that I love CSS, but I certainly appreciate it. One of my favourite sites is [CSS Zen Garden](http://www.csszengarden.com/), which has a bunch of sites that share the exact same HTML but has different CSS styling. It really shows off the power of CSS and how much flexibility it has.

We covered the topic of responsive design. Every site — more or less — needs to be responsive in the modern day. People view sites on so many different devices now that a site without responsive design is likely neglectful. Moreover, websites increasingly need to be completely fluid nowadays. Previously, the industry would talk about breakpoints — the point at which site would switch to a mobile layout and vice-versa. However, with tablets and larger monitors break points — an arbitrary resolution at which a website will change its style to fit the intended device — are becoming obsolete. We now scour the web on devices of all shapes and sizes, so sites and applications have to be beautiful and functional at any dimension.

### Box Sizing

Box-sizing is a property that I have used, which haven’t fully understood. In the past, I have copied CSS from another site or been told box-sizing will solve my problem. What does it actually do?

It’s actually really useful. The box-sizing property is used to tell the browser what sizing properties it should consider. The Box Model is made up of margin, border, padding around an element. Box-sizing is useful for widths, which are important for creating responsive sites. If you want an element to be 100% width and have 20px padding on the left and the right, you’ll have an element which is 100% + 20px (right hand-side) + 20px (left hand-side). The element is wider than 100% as padding is added on top of the specified width. This is really frustrating. Without box sizing, you’d need to keep track of all your padding and all of your widths and ensure that they are accounting for one another. Every time that you changed the padding, you have to adjust your widths.

`box-sizing: border-box;` tells the browser to include padding inclusive of the width. Therefore, using our previous example, 100% width with `box-sizing: border-box;` would include 40px padding on either side, rather than in addition to. Essentially, it makes the width inclusive of padding. A neat little trick when dealing with widths and responsive layouts.

The CSS homework was cool — we had to create a replica of the Instagram sign up page. This was good fun and useful for practising the skills we had learnt earlier in the day. Next up, JavaScript.
