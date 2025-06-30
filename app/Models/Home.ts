import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Home extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

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
  public intro_heading:string;

  @column()
  public intro_heading_eng:string;

  @column()
  public intro_image: string; 

  @column()
  public intro_content: string;

  @column()
  public intro_content_eng: string;

  @column()
  public mision:string;

  @column()
  public mision_eng:string;

  @column()
  public vision:string;

  @column()
  public vision_eng:string;

  @column()
  public values:string;

  @column()
  public values_eng:string;

  @column()
  public estrategias_img:string;

  @column()
  public estrategias_heading:string;

  @column()
  public estrategias_heading_eng:string;

  @column()
  public estrategias_subheading:string;

  @column()
  public estrategias_subheading_eng:string;

  @column()
  public estrategias_content:string;

  @column()
  public estrategias_content_eng:string;

  @column()
  public quote_content:string;

  @column()
  public quote_content_eng:string;

  @column()
  public quote_author:string;

  @column()
  public quote_author_eng:string;

  @column()
  public hero_2:string;

  @column()
  public contact_img:string;

  @column()
  public contact_heading:string;

  @column()
  public contact_heading_eng:string;
  
  @column()
  public contact_text:string;

  @column()
  public contact_text_eng:string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
