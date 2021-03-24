# My Developer's Resume as a Website

## Description

When I needed to make a resume to start applying to internships, I decided to make one as a website to
show employers a practical demonstration of my skills. That is why I decided to cram as many
web technologies that I could into one website. This project is a proof-of-concept of fast front-end
development using things like PUG, front-end frameworks, bundlers, and more. This project takes inspiration from
and reuses parts of the [Start Bootstrap - Resume](https://github.com/StartBootstrap/startbootstrap-resume) project.

## Status

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Midlight25/website-resume/main/LICENSE)
[![Build Status](https://github.com/Midlight25/website-resume/actions/workflows/build-status.yml/badge.svg?branch=main&event=push)](https://github.com/Midlight25/website-resume/actions/workflows/build-status.yml)
[![Website Deployment](https://github.com/Midlight25/website-resume/actions/workflows/continuous-deployment.yml/badge.svg?branch=main&event=push)](https://github.com/Midlight25/website-resume/actions/workflows/continuous-deployment.yml)

## NPM Scripts

- `npm run start` Starts the development server and serves the content to a localhost. Hot Reloading is enabled.
- `npm run build` builds the project for deployment. Files are minified, tree-shaken, and bundled for deployment.

## Technologies used

This project involves a number of technologies aimed around reducing active development time and effort. They are listed bellow with the reasons they were chosen.

- Pug: A template engine for Node.js that produces HTML. Pug was chosen for this project because Pug is easier to write and read instead of normal HTML. Pug significantly reduces the amount of code that needs to be typed.
- Sass: A CSS pre-processor. Sass was needed to customize the Bootstrap front-end framework to suit my needs. Sass also includes quality-of-life features for CSS, such as nesting, easy-to-use variables, and mixins.
- Bootstrap 5 Beta: A front-end framework. Bootstrap was chosen because it allows me to worry less about common CSS elements and removes the burden on me to make my website interactive and responsive. By building my website with Bootstrap, my website is already designed for mobile devices. The sizing utilities also made it easy to define a radically different experience for larger screen sizes.
- Parcel: The no-configuration bundler. Because a lot of my files are pre-processor files, I would need to build them all first and make sure that they link together correctly before I can see the results of my work. Parcel builds my files for me whenever it detects changes to my work and makes sure that they're all connected together correctly. Parcel build my work in real-time so that I can see how changes look in the browser immediately after I make them. I also don't have to worry about predicting where my files will be built to so that I can link them correctly, Parcel does all of the linking for me. Parcel also handles the building of the actual production code. It does tree-shaking, post-processing, and minifying so that I don't have to.
- Github Actions: A DevOps platform provided by Github. I decided to implement Continuous Integration and Continuous Deployment into my project. Using Github Actions, my code is automatically built and tested every single time new code is pushed to my repository. If the build process fails, I am notified so that I can go back and fix my mistakes. Pull-requests are also built and tested so that I don't push incomplete or non-functional code into my repository by accident. Because my website is hosted on Github Pages, I can also use Github Actions to automatically deploy the latest version of my website without my intervention. When new code is pushed to the main branch, that code is tested again. If that code passes the test, the production files are built with Parcel and that code is immediately deployed to the Github Page. Github Actions removes the responsibility from me to test the full code base and to publish new releases of my website.

## Awknowledgement

This project is licensed under the [MIT License](https://github.com/Midlight25/website-resume/LICENSE). Parts of this project are used from the [Start Bootstrap - Resume](https://github.com/StartBootstrap/startbootstrap-resume) project, which is also licensed under MIT. This project was inspired by the Start Bootstrap Resume project. It is re-written from the ground up to use Bootstrap 5 and to be bundled with Parcel.
