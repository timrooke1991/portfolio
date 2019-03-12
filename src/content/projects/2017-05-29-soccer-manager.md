---
layout: post
title:  "Soccer Manager"
date:   2017-05-29
excerpt: "A basic football management simulation game built with CSS, HTML and JavaScript"
project: true
tag:
- HTML5
- SASS
- JavaScript
- jQuery
- Gulp
- NPM
- Git
- Github
- Heroku
- Front End
- ES6
comments: false
feature: "../assets/img/soccer-manager/match-screen.png"
heroku: "https://dry-garden-10776.herokuapp.com/"
github: "https://github.com/timrooke1991/project-0"
---

# Soccer Manager

<figure>
	<a href="https://dry-garden-10776.herokuapp.com/"><img src="/assets/img/soccer-manager/team-selection.png"></a>
	<figcaption><a href="https://dry-garden-10776.herokuapp.com/" title="Soccer Manager, a basic football management simulation game">My first project at GA: Soccer Manager, a basic football management simulation game</a>.</figcaption>
</figure>

### [](https://github.com/timrooke1991/project-0#setup)Installation & Setup

#### Run Locally

- Download or clone the [Github repo](https://github.com/timrooke1991/project-0)
- Run `gulp` in the terminal to compile the source code and open in browser
> **Note**: You'll need to have `gulp-cli` installed globally
> `npm i -g gulp-cli`

#### View Online

- [View on Heroku](https://dry-garden-10776.herokuapp.com/)
- [View on Github](https://github.com/timrooke1991/project-0)

<figure>
	<a href="https://dry-garden-10776.herokuapp.com/">
    <img src="/assets/img/soccer-manager/match-screen.png">
  </a>
	<figcaption>
    <a href="https://dry-garden-10776.herokuapp.com/" title="Players can watch match events unfold as the time ticks by">
      Players can watch match events unfold as the time ticks by
    </a>.
  </figcaption>
</figure>

### [](https://github.com/timrooke1991/project-0#description)Description

This project was to build a JavaScript browser game, I chose to build a basic football management simulation game. The allows players to chose from a list of teams, select their starting line-ups and watch the game unfold. Players can make substitutions and edit formations mid-match in an effort to change the outcome of the match in their club's favour.

<figure>
	<a href="https://dry-garden-10776.herokuapp.com/"><img src="/assets/img/soccer-manager/tactic-screen.png"></a>
	<figcaption><a href="https://dry-garden-10776.herokuapp.com/" title="Players can change tactics or make substitutions at any point during the game in an effort to change their fortunes">Players can change tactics or make substitutions at any point during the game in an effort to change their fortunes</a>.</figcaption>
</figure>

### [](https://github.com/timrooke1991/project-0#technologies-used)Technologies used

The list of the languages, frameworks, lib used in the project:

- HTML5
- SASS
- JavaScript (ES6)
- jQuery
- Gulp
- NPM
- Git
- Github
- Heroku

### [](https://github.com/timrooke1991/project-0#challenges-faced)Challenges faced

The biggest challenge of the game was the substitution functionality. I used a `player.playing` boolean to keep track of players that were on/off the pitch at any one time. Players who received an injury or red card would have their `player.playing` value set to false. Initially, I tried to use this attribute for substitutions as well. However, this didn't work.

To deal with substitutions effectively and communicate the different states that a player (red card, injured, substituted) could be in, using a reliance on a single boolean wasn't sufficient. Therefore, I added an additional key-value pair to every player, which kept track of their status during the game (red card, injured, subbed-on, subbed-off). The additional data that this key provided allowed the game to handle substitutions, red cards and injuries much more effectively.

### [](https://github.com/timrooke1991/project-0#rounding-it-off)Rounding it off

Improvements that I would like to make to the project in the future would be:

- Adding an extra-time and penalties feature.
- Improvement to the UI, particularly team selection.
- Add additional data attributes to the player objects, e.g. heading, tackling, passing, which could determine a team's likelihood to score from a free kick or create chances.
- Display average overall values (e.g. attack, defence) for a team, so that users can see how teams compare to one another.
- Add namespacing.
