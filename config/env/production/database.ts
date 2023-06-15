
const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password
    },
      debug: false,
  },
});
