express-sequelize-postgres template

requirement:

- node, npm, npx (use node version from .nvmrc)
- docker
- nvm

instalation

- ensure that `env` exist and configure same as `.env.example`
- `nvm use`
- `npm install`
- for create migration

  - `npx sequelize-cli migration:generate --name test-schema`
- for migration up (automatically generate models too)

  - `./migrate -m up`
- for migrate down

  - `./migrate -m down`
