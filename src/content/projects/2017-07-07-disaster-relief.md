---
layout: post
title:  "Disaster Relief"
date:   2017-07-07
excerpt: "Disaster Relief is a MEAN stack app, which enables individuals to respond to a tragedy by either posting for help needed or offering aid to those affected."
project: true
tag:
- HTML 5
- SCSS
- JavaScript
- ES6
- jQuery
- Gulp
- Node
- Express
- Mongo
- Mongoose
- Yarn
- NPM
- Git
- Github
comments: false
feature: "./../assets/img/disaster-relief/index.png"
heroku: "https://tjc-app.herokuapp.com/"
github: "https://github.com/obfusticatedcode/wdi27-group-project"
---

## WDI Group Project - Disaster Relief

#### Contributors: Jimbo Harris, Tim Rooke and Chisomo Lungu

<figure>
	<a href="https://tjc-app.herokuapp.com/"><img src="/assets/img/disaster-relief/index.png"></a>
	<figcaption><a href="https://tjc-app.herokuapp.com/" title="Disaster Relief enables individuals to respond to a tragedy by either posting for help needed or offering aid to those affected">Disaster Relief enables individuals to respond to a tragedy by either posting for help needed or offering aid to those affected</a>.</figcaption>
</figure>

### [](https://github.com/obfusticatedcode/wdi27-group-project#setup)Installation & Setup

#### Run Locally

- Download or clone the [Github repo](https://github.com/timrooke1991/wdi27-group-project)
- Run `npm install` or `yarn` in the terminal to download required dependencies
- Run `gulp` in the terminal to compile the source code and open in browser

> **Note**: You'll need to have `gulp-cli` installed globally
> `npm i -g gulp-cli`

#### View Online

- [View on Heroku](https://tjc-app.herokuapp.com/)
- [View on Github](https://github.com/obfusticatedcode/wdi27-group-project)

### Link to wireframes and Trello

- [Wireframes available here](https://generalassembly.mybalsamiq.com/projects/wdi-ldn-27/Jim%20Tim%20Chisomo%20mockup)
- [Trello board available](https://trello.com/b/4iEribek/wdi-27-group-project)

### Description

The site is designed to enable individuals to respond to a tragedy by either posting for help needed or offering aid to those affected. Posts on the site are referred to as "campaigns". Users can view campaigns without having to log in but are required to do so should they wish to respond to or start an individual campaign.The site uses Google Maps API (Geolib and Autocomplete) to calculate distances between users and uses nodemailer to notify nearby users via email. Emails are sent to registered users when a campaign is has been created within 25km of their registered location. You can use filter, search and sort functions enable users to refine the results by location, distance, and keywords on the index page.

<figure>
	<a href="https://tjc-app.herokuapp.com/"><img src="/assets/img/disaster-relief/show.png"></a>
	<figcaption><a href="https://tjc-app.herokuapp.com/" title="The app uses Google Maps through the site to clearly communicate locations and proximity">The app uses Google Maps through the site to clearly communicate locations and proximity</a>.</figcaption>
</figure>

### Technologies used

- HTML5
- AngularJS
- JavaScript (ES6)
- Express
- Mongo
- Mongoose
- SCSS
- jQuery 3.10
- Gulp
- Yarn
- Git
- Github
- Facebook oAuth
- Instagram oAuth
- Google Maps API (Geolib and Autocomplete)
- Amazon Web Services

<figure>
	<a href="https://tjc-app.herokuapp.com/"><img src="/assets/img/disaster-relief/login.png"></a>
	<figcaption><a href="https://tjc-app.herokuapp.com/" title="The app uses Facebook and Instagram oAuthentication">The app uses Facebook and Instagram oAuthentication</a>.</figcaption>
</figure>

### Approach

The team pair coded major tasks but small individual features were completed individually in order to save time. Merges were done daily and bug fixing sessions were pair coded for significant issues. Small bugs were fixed as and when they arose. Trello was used to manage specific tasks being split into backlog (desirable), backlog (essential), in progress, waiting to merge and merged. In addition to the paired coding, I built-out the functionality that sent emails to nearby users when a campaign is posted to the app. Also, I wrote the app’s tests using Mocha and Chai.


### Challenge

A challenge for this project was to incorporate email notifications as part of our app's functionality. This is not something that was covered in our course curriculum. As a result, it required Googling around to find the best way to do this. We used npm package, Nodemailer. This package made it easier. However, we still had write the custom middleware to incorporate this into our app. Also, we used Google's Static Map functionality to send the location of a campaign pinned on a map to visualise the whereabouts of a campaign.

<figure>
	<a href="https://tjc-app.herokuapp.com/"><img src="/assets/img/disaster-relief/email.png"></a>
	<figcaption><a href="https://tjc-app.herokuapp.com/" title="Users would receive an email when a campaign is has been created within 25km of their registered location">Users would receive an email when a campaign is has been created within 25km of their registered location</a>.</figcaption>
</figure>
