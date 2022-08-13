express-sequelize-postgres template

requirement:

- node, npm, npx (use node version from .nvmrc)
- docker
- nvm

instalation

- ensure that `env` exist and configure same as `.env.example`
- `nvm use`
- `npm install`
- to run db on docker `./bootstrap`
- for create migration

  - `npx sequelize-cli migration:generate --name test-schema`
- for migrate up (automatically generate models too)

  - `./migrate -m up`
- for migrate down

  - `./migrate -m down`
- to run server `npm run start`
- to run unit test `npm test`
