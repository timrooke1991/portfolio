---
slug: javascript-stack-overflow-and-destructuring
date: 2019-02-27T22:17:29.032Z
title: "JavaScript, Stack Overflow and Destructuring"
template: "post"
draft: false
description: "I listened to another episode of CodeNewbie this morning. This episode was with Brian Douglas. Again, it was focused on getting into code and how to find your first role in development. Brian went…"
category: ""
tags: [JavaScript]
---

### JavaScript, Stack Overflow and Destructuring

I listened to another episode of CodeNewbie this morning. This episode was with Brian Douglas. Again, it was focused on getting into code and how to find your first role in development. Brian went through Bloc, which is an online coding bootcamp for developers. The key to Bloc is the idea of pairing students with a mentor. Therefore, a portion of the podcast was dedicated to the value of having a mentor when beginning to code. This makes sense. It is something I have heard before. Brian’s work ethic was pretty impressive. He used to wake up at 4am, code until 7am, go to work for 9 hours, spent some time with his wife and kids, code from 9pm through to midnight and then go to bed. He said he did this for 6 months — serious commitment.

He spoke about blogging also, which was interesting. He thought blogging was really useful to think about coding problems in a different way. I agree with this. Not only that, it can help you cement the knowledge that you have. By writing it down, it makes you think literally in words what is happening. Brian mentioned that he mainly wrote about stuff he had to Google and problems he had to overcome. Also, he mentioned that his blogs primary purpose was as a repository information for himself. I plan to use my blog in the same way. I already write a finance blog on stocks and shares, which has been running just over a year now. I use this in exactly that way. I can’t remember what opinions I have on certain companies, so I look back through the blog and read what I wrote. I hope this blog will serve a similar purpose.

### JavaScript

We have started JavaScript on our General Assembly course now. We covered off the basics — data types, control flow, functions, objects and much more. A busy couple of days.

The homework has been enjoyable. Each homework has basic requirements, but then bonus tasks on top. It gives you a lot of scope to take your applications further if you would like to.

I spent a lot of time on a Calculator homework this week. My girlfriend was out for the evening, which meant that had plenty of free time to go through all the bonus tasks. The concept was fairly simple: we had to build a simple calculator using prompts and alerts. It wasn’t super stylish, but the main objective was to understand control flow that we had learnt about during that day.

I managed to get the basic calculator working fairly quickly. The additional tasks were to add the ability to calculator mortgages, journeys and body mass index. This layered on more complexity and more code. You had lots of if statements all over the place. My code was hectic and messy. Luckily, I had plenty of time to refactor it properly. I split relevant chunks into functions. I was really happy with the solution I came up with — I think it was readable and well structured.

I must admit, I had one bit of help. I had to venture on to Stack Overflow for the first time, which was a slightly nerve-wracking experience. Every time my calculator returned a result, it would alert the output, e.g. “Your answer is …”, twice consecutively. I spent about 2 hours trying to find why this was happening. I knew I must have been calling the function, which returned the message, twice, but just couldn’t see where this was happening. I posted on the Stack Overflow and within 3 minutes someone kindly pointed me to the root of the problem. I was calling a function within a function, which was where the second call was coming from. This made it slightly more disguised — but I still should have spotted this problem myself! Nevertheless, I fixed this code and worked like a charm.

In addition to the first response, some other developers commented on how I could structure the code better. For example, they mentioned I could structure the program better. Initially, I was calling a function called `mathSetup()`, which had a `mathCalculate()` function within. It was suggested this was a little deceiving, you’d expect a `mathSetup()` function to do the setup and nothing more. However, as it was calling `mathCalculate()`, the `mathSetup()` function was also triggering the calculating. This wasn’t very modular. Functions should do what they say. He suggested using the below solution, which uses destructuring, would be a better approach. Basically, return the arguments required by `mathCalculated()` function from the `mathSetup()` function and store these in a variable `const [operator, firstNumber, secondNumber]`. Then, these arguments can be passed into `mathCalculate(operator, firstNumber, secondNumber)`. As a result, the `mathSetup()` functions does the setup and `mathCalculate()` does the calculating. All nice and intuitive. Destuctured assignment is a new feature of ECMAScript 6.

```
undefined
```
