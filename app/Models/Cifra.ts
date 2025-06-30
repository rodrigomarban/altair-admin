import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cifra extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public content: string;

  @column()
  public content_eng: string;

  @column()
  public numberuno: string;

  @column()
  public descuno: string;

  @column()
  public descuno_eng: string;

  @column()
  public numberdos: string;

  @column()
  public descdos: string;

  @column()
  public descdos_eng: string;

  @column()
  public numbertres: string;

  @column()
  public desctres: string;

  @column()
  public desctres_eng: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
