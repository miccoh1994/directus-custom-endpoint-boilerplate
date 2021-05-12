# directus-custom-endpoint-boilerplate
A custom endpoint boilerplate for directus headless CMS.

## Features
  - Uses a pre-configured rollup so that you can import and bundle commonjs and ES* modules with your custom endpoint.
  - dev.rollup.config.js uses [rollup-plugin-execute](https://www.npmjs.com/package/rollup-plugin-execute) to restart directus to quickly develop and test custom endpoints against a live directus instance.
  - restart is configurable in dev.rollup.config.js, you could use a command like `pm2 restart directus`, if you used pm2 to start directus with `pm2 start --name directus`

## Recommendations
  - User docker-compose to run your local directus instance, then you can map the extensions directory to the repos with your extensions.
    e.g.
    ```yaml
        container_name: directus
          volumes:
            - ./modules/upload/dist:/directus/extensions/modules/upload
            - ./endpoints:/directus/extensions/endpoints
    ```
  - [Official Directus Docker-Compose File](https://docs.directus.io/guides/installation/docker/#docker-compose)

## Usage

### Bundle Endpoint for Production
  `npm run build` or `yarn build`

### Develop with directus
  `npm run dev` or `yarn dev`
