import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string;

  @column()
  public title_eng: string;

  @column()
  public telephone: string;

  @column()
  public email: string;

  @column()
  public address: string;

  @column()
  public time: string;

  @column()
  public time_eng: string;

  @column()
  public instagram: string;

  @column()
  public facebook: string;

  @column()
  public linkedin: string;

  @column()
  public latitude: string;

  @column()
  public longitude: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
