module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: 'learnco_blog_test'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'learnco_blog'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  }
};
