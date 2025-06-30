import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column ()
  public title: string

  @column ()
  public overview: string

  @column ()
  public address: string

  @column ()
  public status: string

  @column ()
  public category: string

  @column ()
  public product: string

  @column ()
  public insignia: string

  @column ()
  public latitude: string

  @column ()
  public longitude: string

  @column ()
  public ftimage: string

  @column ()
  public images: string

  @column ()
  public imagetwo: string

  @column ()
  public imagethree: string

  @column ()
  public imagefour: string

  @column ()
  public imagefive: string

  @column ()
  public imagesix: string

  @column ()
  public imageseven: string

  @column ()
  public type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
