---
layout: post
title:  "Postcode Finder"
date:   2015-11-05
excerpt: "A JavaScript web app coupled with Google API, which will return the postcode of any address in the world"
project: true
tag:
- HTML5
- CSS
- JavaScript
- Bootstrap
- jQuery
- Google Maps API
- XML
- Git
- Github
comments: false
feature: "../assets/img/postcode-finder/screen.png"
heroku: "https://immense-beach-64457.herokuapp.com/"
github: "https://github.com/timrooke1991/postcode-finder"

---

# Postcode Finder

#### Installation and setup

- Download or clone the repo
- Fire up `localhost`
- [GitHub link](https://github.com/timrooke1991/postcode-finder)

This Postcode Finder App is available to view and register [here.](https://immense-beach-64457.herokuapp.com/)

## Project Description

> **Note**: Due to changes in the Google API, the postcodes return are not as details as they originally were when this project was made.

This site uses Google API to return the postcode of any address in the world. The aim of this project was to get more familiar with external APIs, in this case, the Google Maps API, and working with data via this method in a web application.

![Landing Page](../assets/img/postcode-finder/screen.png)   

### [](https://github.com/timrooke1991/postcode-finder#features)Features

The Google Maps API return data in an XML format, which gave me exposure to this data format.  I have worked with JSON in the past, but not XML.

There is some basic validation on the site. If a postcode can’t be found, it prompts the user to check their spelling. Also, if nothing is entered, it prompts the user to enter an address.

The site uses AJAX to load data, so the site does not refresh when fetching and retrieving data from the Google Maps API. `jQuery` is used to display and hide alerts to the user - this done using fadeIn() and fadeOut(). Also, `jQuery` is used sift through the XML response from the Google Maps API and to retrieve the relevant information.

### [](https://github.com/timrooke1991/postcode-finder#technologies-used)Technologies used

The list of the software and languages used in the project, for example:

- HTML5
- CSS
- JavaScript
- Bootstrap
- jQuery
- Google Maps API
- XML
- Git
- Github

### [](https://github.com/timrooke1991/postcode-finder#challenges-faced)What I learned

The main benefit for me of this project was understanding more about data structures such as XML, working with XML with JavaScript and how to incorporate this in web applications.

It was useful to get familiar with more JavaScript libraries and understand how to incorporate external code from libraries into my own sites and applications.

### [](https://github.com/timrooke1991/postcode-finder#rounding-it-off)Rounding it off

Improvements that I would like to make to the project in the future would be:

- Currently, the site returns the first match from the XML payload. It would be better for this app to account for all the matches returned and list these out.  
