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

## Development Dependencies

This project uses Node.js and npm extensively for development. Pug is used as the HTML pre-processor, Sass is used as the CSS pre-processor, Typescript is the scripting language of choice for this project. The project also uses Parcel to build and serve the content during development. This project also uses Bootstrap 5 as the front-end framework.

There are two scripts in package.json to be used for development. Pug

```npm
npm run dev
```

This command is used to start the development environment and serve the content.

```npm
npm run build
```

This command is used to build the project for deployment.
