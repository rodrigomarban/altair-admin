import Env from '@ioc:Adonis/Core/Env'
import { driveConfig } from '@adonisjs/core/build/config'
import Application from '@ioc:Adonis/Core/Application'

export default driveConfig({
  /*
  |--------------------------------------------------------------------------
  | Default disk
  |--------------------------------------------------------------------------
  |
  | Fuerza el uso de 'local' salvo que quieras cambiarlo por env var.
  */
  disk: Env.get('DRIVE_DISK', 'local'),

  disks: {
    /*
    |--------------------------------------------------------------------------
    | Local
    |--------------------------------------------------------------------------
    */
    local: {
      driver: 'local',
      visibility: 'public',

      // Apunta a public/uploads (no tmp/uploads)
      root: Application.publicPath('uploads'),

      // Sirve los archivos estáticos desde /uploads/*
      serveFiles: true,
      basePath: '/uploads',
    },

    /*
    |--------------------------------------------------------------------------
    | (Elimina o comenta todo lo relacionado a s3)
    |--------------------------------------------------------------------------
    |  s3: {
    |    driver: 's3',
    |    …
    |  },
    */
  },
})
