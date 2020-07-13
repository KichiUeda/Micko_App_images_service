# Project Name

> A microservice that includes a carousel of all medias (videos and images). This service has a main media viewer that will render the current selected media.

## Related Projects

  - https://github.com/KichiUeda/Micko_App_images_service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

***IMPORTANT***
Make sure to have env variables ready!
> run `npm install`

> run `npm run seed`

> run `npm run build`

> run `npm start`

 ***Include the following in your proxy html***
  - `<div id='images'></div>` (this will probably in a container with Pricing and Promotion service)
  - `<div id='carousel'></div>`

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

