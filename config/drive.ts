import Env from '@ioc:Adonis/Core/Env'
import { driveConfig } from '@adonisjs/core/build/config'
import Application from '@ioc:Adonis/Core/Application'

// config/drive.ts
export default driveConfig({
  disk: Env.get('DRIVE_DISK', 'local') as 'local',

  disks: {
    local: {
      driver: 'local',
      visibility: 'public',
      root: Application.publicPath('uploads'),
      serveFiles: true,
      basePath: '/uploads',
    },
  },
})

