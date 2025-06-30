import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateBrandbookValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({

    title: schema.string(),
    title_eng: schema.string(),
    desc: schema.string(),
    desc_eng: schema.string(),
    about: schema.string(),
    about_eng: schema.string(),
    about_desc: schema.string(),
    about_desc_eng: schema.string(),
    about_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    mision: schema.string(),
    mision_eng: schema.string(),
    mision_txt: schema.string(),
    mision_txt_eng: schema.string(),
    vision: schema.string(),
    vision_eng: schema.string(),
    vision_txt: schema.string(),
    vision_txt_eng: schema.string(),
    valores: schema.string(),
    valores_eng: schema.string(),
    valores_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    slogan: schema.string(),
    slogan_eng: schema.string(),
    slogan_txt: schema.string(),
    slogan_txt_eng: schema.string(),
    branding_title: schema.string(),
    branding_title_eng: schema.string(),
    branding_subtitle: schema.string(),
    branding_subtitle_eng: schema.string(),
    branding_text: schema.string(),
    branding_text_eng: schema.string(),
    branding_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    branding_text_2: schema.string(),
    branding_text_2_eng: schema.string(),
    branding_subtitle_3: schema.string(),
    branding_subtitle_3_eng: schema.string(),
    branding_text_3: schema.string(),
    branding_text_3_eng: schema.string(),
    lnf_title: schema.string(),
    lnf_title_eng: schema.string(),
    lnf_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_img_eng: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_logo: schema.string(),
    lnf_logo_eng: schema.string(),
    lnf_logo_txt: schema.string.optional(),
    lnf_logo_txt_eng: schema.string.optional(),
    lnf_logo_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_simbolo: schema.string(),
    lnf_simbolo_eng: schema.string(),
    lnf_simbolo_txt: schema.string(),
    lnf_simbolo_txt_eng: schema.string(),
    lnf_simbolo_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_reticula: schema.string(),
    lnf_reticula_eng: schema.string(),
    lnf_reticula_txt: schema.string(),
    lnf_reticula_txt_eng: schema.string(),
    lnf_reticula_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_proteccion: schema.string(),
    lnf_proteccion_eng: schema.string(),
    lnf_proteccion_txt: schema.string(),
    lnf_proteccion_txt_eng: schema.string(),
    lnf_proteccion_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_minimos: schema.string(),
    lnf_minimos_eng: schema.string(),
    lnf_minimos_txt: schema.string.optional(),
    lnf_minimos_txt_eng: schema.string.optional(),
    lnf_minimos_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_minimos_img_eng: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos: schema.string(),
    lnf_incorrectos_eng: schema.string(),
    lnf_incorrectos_txt: schema.string(),
    lnf_incorrectos_txt_eng: schema.string(),
    lnf_incorrectos_desc_a: schema.string(),
    lnf_incorrectos_desc_a_eng: schema.string(),
    lnf_incorrectos_desc_b: schema.string(),
    lnf_incorrectos_desc_b_eng: schema.string(),
    lnf_incorrectos_desc_c: schema.string(),
    lnf_incorrectos_desc_c_eng: schema.string(),
    lnf_incorrectos_desc_d: schema.string(),
    lnf_incorrectos_desc_d_eng: schema.string(),
    lnf_incorrectos_desc_e: schema.string(),
    lnf_incorrectos_desc_e_eng: schema.string(),
    lnf_incorrectos_desc_f: schema.string(),
    lnf_incorrectos_desc_f_eng: schema.string(),
    lnf_incorrectos_desc_g: schema.string(),
    lnf_incorrectos_desc_g_eng: schema.string(),
    lnf_incorrectos_desc_h: schema.string(),
    lnf_incorrectos_desc_h_eng: schema.string(),
    lnf_incorrectos_desc_i: schema.string(),
    lnf_incorrectos_desc_i_eng: schema.string(),
    lnf_incorrectos_img_a: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos_img_b: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos_img_c: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos_img_d: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos_img_e: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos_img_f: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos_img_g: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos_img_h: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    lnf_incorrectos_img_i: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_title: schema.string(),
    color_title_eng: schema.string(),
    color_txt: schema.string(),
    color_txt_eng: schema.string(),
    color_img_a: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_img_b: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_usos_title: schema.string(),
    color_usos_title_eng: schema.string(),
    color_usos_txt: schema.string(),
    color_usos_txt_eng: schema.string(),
    color_usos_img_a: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_usos_img_b: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_simbolo_title: schema.string(),
    color_simbolo_title_eng: schema.string(),
    color_simbolo_txt: schema.string(),
    color_simbolo_txt_eng: schema.string(),
    color_simbolo_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_positiven_title: schema.string(),
    color_positiven_title_eng: schema.string(),
    color_positiven_txt: schema.string(),
    color_positiven_txt_eng: schema.string(),
    color_positiven_img_a: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_positiven_img_b: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_app_title: schema.string(),
    color_app_title_eng: schema.string(),
    color_app_txt: schema.string(),
    color_app_txt_eng: schema.string(),
    color_app_img_a: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_app_img_b: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_app_img_c: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_app_img_d: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_app_img_e: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    color_app_img_f: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    type_title: schema.string(),
    type_title_eng: schema.string(),
    type_txt: schema.string(),
    type_txt_eng: schema.string(),
    type_subtitle: schema.string(),
    type_subtitle_eng: schema.string(),
    type_img_a: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    type_img_b: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    type_img_c: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    resources_title: schema.string(),
    resources_title_eng: schema.string(),
    resources_txt: schema.string(),
    resources_txt_eng: schema.string(),
    resources_img_a: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    resources_img_b: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    resources_img_c: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    resources_img_d: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    resources_img_e: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    resources_img_f: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    icons_title: schema.string(),
    icons_title_eng: schema.string(),
    icons_txt: schema.string(),
    icons_txt_eng: schema.string(),
    icons_img_a: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
