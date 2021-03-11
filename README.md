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

This project uses Node.js and NPM for the development environment.

- Pug: The HTML pre-processor
- Sass: The CSS pre-processor, necessary to modify the Bootstrap SCSS filesize
- Typescript: The strong-typed scripting language for catching errors at compile time.
- Parcel: The bundler used to simplify development, allowing me to link to pre-processor sources files directly instead of where the generated files would be in the distribution folder. This bulder also handles building output files for deployment, code splitting, tree shaking, and more. This
- Bootstrap 5 Beta: The front-end CSS framework for building mobile-first web experiences. With this, I don't need to worry about writting CSS specifically for making mobile websites, everything is done for me.

## NPM Scripts

- `npm run dev` Starts the development server and serves the content to a localhost. Hot Reloading is enabled.
- `npm run build` builds the project for deployment.

## Copywrite and license

This project is licensed under the [MIT License](https://github.com/Midlight25/website-resume/LICENSE). Parts of this project also reuse the [Start Bootstrap - Resume](https://github.com/StartBootstrap/startbootstrap-resume) project, which is also licensed under MIT.
