import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Nosotro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string;

  @column()
  public title_eng: string;

  @column()
  public content: string;

  @column()
  public content_eng: string;

  @column()
  public hero: string;

  @column()
  public hero_2: string;

  @column()
  public brandbook: string;

  @column()
  public brandbook_eng: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
