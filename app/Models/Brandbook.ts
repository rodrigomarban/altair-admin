import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Brandbook extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string; 

  @column()
  public title_eng: string; 

  @column()
  public desc: string;

  @column()
  public desc_eng: string;
  
  @column()
  public about: string; 

  @column()
  public about_eng: string; 

  @column()
  public about_desc: string; 
  

  @column()
  public about_desc_eng: string; 

  @column()
  public about_img: string; 

  @column()
  public mision: string; 

  @column()
  public mision_eng: string; 

  @column()
  public mision_txt: string;

  @column()
  public mision_txt_eng: string;
  
  @column()
  public vision: string; 

  @column()
  public vision_eng: string; 

  @column()
  public vision_txt: string; 

  @column()
  public vision_txt_eng: string; 

  @column()
  public valores: string;

  @column()
  public valores_eng: string;
  
  @column()
  public valores_img: string; 

  @column()
  public slogan: string; 

  @column()
  public slogan_eng: string; 

  @column()
  public slogan_txt: string; 

  @column()
  public slogan_txt_eng: string; 

  @column()
  public branding_title: string;

  @column()
  public branding_title_eng: string;
  
  @column()
  public branding_subtitle: string;
  
  @column()
  public branding_subtitle_eng: string;
  
  @column()
  public branding_text: string; 

  @column()
  public branding_text_eng: string; 

  @column()
  public branding_img: string; 

  @column()
  public branding_text_2: string; 

  @column()
  public branding_text_2_eng: string; 

  @column()
  public branding_subtitle_3: string; 

  @column()
  public branding_subtitle_3_eng: string; 

  @column()
  public branding_text_3: string; 

  @column()
  public branding_text_3_eng: string; 

  @column()
  public lnf_title: string; 

  @column()
  public lnf_title_eng: string; 

  @column()
  public lnf_img: string;

  @column()
  public lnf_img_eng: string;
  
  @column()
  public lnf_logo: string;

  @column()
  public lnf_logo_eng: string;
  
  @column()
  public lnf_logo_txt: string;
  
  @column()
  public lnf_logo_txt_eng: string;
  
  @column()
  public lnf_logo_img: string;
  
  @column()
  public lnf_simbolo: string; 

  @column()
  public lnf_simbolo_eng: string; 

  @column()
  public lnf_simbolo_txt: string; 

  @column()
  public lnf_simbolo_txt_eng: string; 

  @column()
  public lnf_simbolo_img: string; 

  @column()
  public lnf_reticula: string; 

  @column()
  public lnf_reticula_eng: string; 

  @column()
  public lnf_reticula_txt: string; 

  @column()
  public lnf_reticula_txt_eng: string; 

  @column()
  public lnf_reticula_img: string;
  
  @column()
  public lnf_proteccion: string; 

    
  @column()
  public lnf_proteccion_eng: string; 

  @column()
  public lnf_proteccion_txt: string; 

  @column()
  public lnf_proteccion_txt_eng: string; 

  @column()
  public lnf_proteccion_img: string; 

  @column()
  public lnf_minimos: string; 

  @column()
  public lnf_minimos_eng: string; 

  @column()
  public lnf_minimos_txt: string; 

  @column()
  public lnf_minimos_txt_eng: string; 

  @column()
  public lnf_minimos_img: string; 

  @column()
  public lnf_minimos_img_eng: string; 

  @column()
  public lnf_incorrectos: string; 

  @column()
  public lnf_incorrectos_eng: string; 

  @column()
  public lnf_incorrectos_txt: string; 

  @column()
  public lnf_incorrectos_txt_eng: string; 

  @column()
  public lnf_incorrectos_desc_a: string;

  @column()
  public lnf_incorrectos_desc_a_eng: string;
  
  @column()
  public lnf_incorrectos_desc_b: string; 

  @column()
  public lnf_incorrectos_desc_b_eng: string; 

  @column()
  public lnf_incorrectos_desc_c: string; 

  @column()
  public lnf_incorrectos_desc_c_eng: string; 

  @column()
  public lnf_incorrectos_desc_d: string;

  @column()
  public lnf_incorrectos_desc_d_eng: string;
  
  @column()
  public lnf_incorrectos_desc_e: string;

  @column()
  public lnf_incorrectos_desc_e_eng: string;
  
  @column()
  public lnf_incorrectos_desc_f: string; 

  @column()
  public lnf_incorrectos_desc_f_eng: string; 

  @column()
  public lnf_incorrectos_desc_g: string; 

  @column()
  public lnf_incorrectos_desc_g_eng: string; 

  @column()
  public lnf_incorrectos_desc_h: string; 

  @column()
  public lnf_incorrectos_desc_h_eng: string; 

  @column()
  public lnf_incorrectos_desc_i: string; 

  @column()
  public lnf_incorrectos_desc_i_eng: string; 

  @column()
  public lnf_incorrectos_img_a: string;
  
  @column()
  public lnf_incorrectos_img_b: string;

  @column() 
  public lnf_incorrectos_img_c: string; 

  @column()
  public lnf_incorrectos_img_d: string; 

  @column()
  public lnf_incorrectos_img_e: string;
  
  @column()
  public lnf_incorrectos_img_f: string; 

  @column()
  public lnf_incorrectos_img_g: string; 

  @column()
  public lnf_incorrectos_img_h: string; 

  @column()
  public lnf_incorrectos_img_i: string; 

  @column()
  public color_title: string; 

  @column()
  public color_title_eng: string; 

  @column()
  public color_txt: string; 

  @column()
  public color_txt_eng: string; 

  @column()
  public color_img_a: string; 

  @column()
  public color_img_b: string; 

  @column()
  public color_usos_title: string;

  @column()
  public color_usos_title_eng: string;
  
  @column()
  public color_usos_txt: string; 

  @column()
  public color_usos_txt_eng: string; 

  @column()
  public color_usos_img_a: string; 

  @column()
  public color_usos_img_b: string; 

  @column()
  public color_simbolo_title: string; 

  @column()
  public color_simbolo_title_eng: string; 

  @column()
  public color_simbolo_txt: string; 

  @column()
  public color_simbolo_txt_eng: string; 

  @column()
  public color_simbolo_img: string; 

  @column()
  public color_positiven_title: string;

  @column()
  public color_positiven_title_eng: string;
  
  @column()
  public color_positiven_txt: string; 

  @column()
  public color_positiven_txt_eng: string; 

  @column()
  public color_positiven_img_a: string;
  
  @column()
  public color_positiven_img_b: string;
  
  @column()
  public color_app_title: string; 

  @column()
  public color_app_title_eng: string; 

  @column()
  public color_app_txt: string; 

  @column()
  public color_app_txt_eng: string; 

  @column()
  public color_app_img_a: string; 

  @column()
  public color_app_img_b: string; 

  @column()
  public color_app_img_c: string; 

  @column()
  public color_app_img_d: string; 

  @column()
  public color_app_img_e: string; 

  @column()
  public color_app_img_f: string;
  
  @column()
  public type_title: string; 

  @column()
  public type_title_eng: string; 

  @column()
  public type_txt: string; 

  @column()
  public type_txt_eng: string;

  @column()
  public type_subtitle: string; 

  @column()
  public type_subtitle_eng: string; 

  @column()
  public type_img_a: string; 

  @column()
  public type_img_b: string; 

  @column()
  public type_img_c: string; 

  @column()
  public resources_title: string; 

  @column()
  public resources_title_eng: string; 

  @column()
  public resources_txt: string; 

  @column()
  public resources_txt_eng: string; 

  @column()
  public resources_img_a: string; 

  @column()
  public resources_img_b: string;
  
  @column()
  public resources_img_c: string; 

  @column()
  public resources_img_d: string; 

  @column()
  public resources_img_e: string;
  
  @column()
  public resources_img_f: string;
  
  @column()
  public icons_title: string; 

  @column()
  public icons_title_eng: string; 

  @column()
  public icons_txt: string; 

  @column()
  public icons_txt_eng: string; 

  @column()
  public icons_img_a: string; 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
