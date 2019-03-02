---
slug: codenewbie-and-github
date: 2019-02-27T22:27:34.174Z
title: "CodeNewbie and Github"
template: "post"
draft: false
description: "I listened to the CodeNewbie podcast this morning, which was good. I’ve tried a few programming podcasts that are widely recommended and I’d say they were a mixed bag. I am sure they are all useful…"
category: ""
tags: [Git]
---

### CodeNewbie and Github

I listened to the [CodeNewbie podcast](http://www.codenewbie.org/podcast/ep-1-bootcamps-water-coolers-and-hiring-devs) this morning, which was good. I’ve tried a few programming podcasts that are widely recommended and I’d say they were a mixed bag. I am sure they are all useful and good in their own right. However, as a newcomer, some were just way over my head and discussed topics that required a level of understanding that I didn’t have.

CodeNewbie was good as it is aimed at newcomers to code. I listened to Episode 1, which was recorded 2 years ago, but it was still useful. It was appropriate as it talked about Coding Bootcamps and getting into a career in development from this perspective. This was obviously relevant as I have just started at General Assembly.

The interview was with Carlos Lazo. He attended Flatiron coding bootcamp and was working at Time Inc. as a developer when the podcast was recorded. Also, he had some previous experience hiring for tech roles as well.

An interesting point he made was about frustration. He said frustration was a good thing and would mean whatever was causing your frustration will stick with you, and that you’ll remember it. Frustration means you’ll learn. This is probably true. I have not really thought of things in this light before. It offers a silver-lining whenever you do get frustrated as a developer. Carlos said in the interview: “Developers are paid to be frustrated” — a neat turn of phrase.

He has some practical advice on employability too, which was useful. From his experience recruiting developers, he isolated passion and personality as two things he’d immediately look for in prospective candidates. He wanted people that had a passion and enthusiasm for what they were doing, the technologies they were using and the contribution they were making. However, personality was also key for him. He looked for developers who were opinionated. As a new developer, I guess this could be problematic as it might be difficult to be opinionated about something, i.e. JavaScript or Ruby, which you have relatively little experience or knowledge. Something to work on. That said, opinions do not need to be your own ideas, so you can piggyback on some ongoing development debates. Also, the podcast mentioned ThoughtBot’s Style Guide as list dos and don’ts in various languages and frameworks — this is a good starting point for ideas. It has some points on HTML and CSS, so I’ll read those over in the coming days.

The podcast touched on interviewing. Carlos was staunchly in favour of being honest when asked something you don’t know about — don’t try and blag it! It can lead you down a garden path and make you look worse. He was of the view that it isn’t a developers job to know every single library and framework. Instead of trying to blag it, you should ask “I don’t know about that technology/framework/library, could you tell me more about it? I’d love to learn more”, which was a useful practical tip. Finally, his advice was to ask questions about the company, technology stack, development practices. The interview is as much for you to understand the conversation as it is for the employer to learn about you. He recommended the question to ask your prospective employer: “What are your expectations of you as a developer?”. Worth bearing in mind.

### Git and GitHub

I have often had trouble with Github. I usually always get this error:

`Updates were rejected because the remote contains work that you do not have locally. This is usually caused by another repository pushing to the same ref. You may want to first integrate the remote changes`

Thankfully, I found out why this was today. Normally, I would set up a repository on Github. I would then commit and push my local files to Github. However, I would then update my `ReadMe.md` file in the Github UI in the browser. I would then commit these new changes, which would put my Github files ahead of the files local files. The remote, Github, contained “work that I did not have locally”, i.e. my `ReadMe.md` had been updated on Github, rather than in my local files. Therefore, my remote (Github) has a more recent version of the `ReadMe.md` than my local (Git) files.

Ultimately, I resolved the conflict by using `git push —-force`. However, the major win was more understand why problem regularly occurred, rather than the command itself.

One issue I also discovered is that Macs create `.DS_Store` files with directories, so having already pushed a few directories to Github I have also unnecessarily pushed the `.DS_Store` file along with the project files to Github. This is generally avoided. Therefore, I’ll attempt to remove these files from Github in the near future so that everything is in keeping with best practice.
