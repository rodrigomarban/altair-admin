// start/config/database.ts

import Env from '@ioc:Adonis/Core/Env'
import type { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Primary connection name
  |--------------------------------------------------------------------------
  */
  connection: Env.get('DB_CONNECTION', 'pg'),  // Pon 'pg' como fallback

  connections: {
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL
    |--------------------------------------------------------------------------
    */
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST'),
        port: Env.get('PG_PORT'),
        user: Env.get('PG_USER'),
        password: Env.get('PG_PASSWORD', ''),
        database: Env.get('PG_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },

    /*
    |--------------------------------------------------------------------------
    | MySQL (opcional)
    |--------------------------------------------------------------------------
    | Puedes comentar todo este bloque si no lo vas a usar.
    */
    // mysql: {
    //   client: 'mysql',
    //   connection: {
    //     host: Env.get('MYSQL_HOST'),
    //     port: Env.get('MYSQL_PORT'),
    //     user: Env.get('MYSQL_USER'),
    //     password: Env.get('MYSQL_PASSWORD', ''),
    //     database: Env.get('MYSQL_DB_NAME'),
    //   },
    //   migrations: { naturalSort: true },
    //   healthCheck: false,
    //   debug: false,
    // },
  },
}

export default databaseConfig
