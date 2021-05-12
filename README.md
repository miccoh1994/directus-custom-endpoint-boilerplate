# directus-custom-endpoint-boilerplate
A custom endpoint boilerplate for directus headless CMS.

## Features
  - Uses a pre-configured rollup so that you can import and bundle commonjs and ES* modules with your custom endpoint.
  - dev.rollup.config.js uses [rollup-plugin-execute](https://www.npmjs.com/package/rollup-plugin-execute) to restart directus if you are using docker-compose.

## Recommendations
  - User docker-compose to run your directus instance, then you can map the extensions directory to the repos with your extensions.
    e.g.
    `yaml
          volumes:
        - ./modules/upload/dist:/directus/extensions/modules/upload
        - ./endpoints:/directus/extensions/endpoints
    `
  - [Official Directus Docker-Compose File](https://docs.directus.io/guides/installation/docker/#docker-compose)
