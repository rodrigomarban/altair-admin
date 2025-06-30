import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Estrategia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string;

  @column()
  public title_eng: string;

  @column()
  public content:string;

  @column()
  public content_eng:string;

  @column()
  public hero:string;

  @column()
  public contact_img:string;

  @column()
  public contact_title:string;

  @column()
  public contact_title_eng:string;

  @column()
  public w_title:string;

  @column()
  public w_title_eng:string;

  @column()
  public w_content:string;

  @column()
  public w_content_eng:string;

  @column()
  public w_img:string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
