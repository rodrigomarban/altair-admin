import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Footer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public content: string;

  @column()
  public content_eng: string;

  @column()
  public privacy: string;

  @column()
  public privacy_eng: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
