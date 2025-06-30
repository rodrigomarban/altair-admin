import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateHomeValidator {
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
    content:schema.string(),
    content_eng:schema.string(),
    hero: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    intro_heading:schema.string(),
    intro_heading_eng:schema.string(),
    intro_image: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}), 
    intro_content: schema.string(),
    intro_content_eng: schema.string(),
    mision:schema.string(),
    mision_eng:schema.string(),
    vision:schema.string(),
    vision_eng:schema.string(),
    values:schema.string(),
    values_eng:schema.string(),
    estrategias_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    estrategias_heading:schema.string(),
    estrategias_heading_eng:schema.string(),
    estrategias_subheading:schema.string(),
    estrategias_subheading_eng:schema.string(),
    estrategias_content:schema.string(),
    estrategias_content_eng:schema.string(),
    quote_content:schema.string(),
    quote_content_eng:schema.string(),
    quote_author:schema.string(),
    quote_author_eng:schema.string(),
    hero_2: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    contact_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    contact_heading:schema.string(),
    contact_heading_eng:schema.string(),
    contact_text:schema.string(),
    contact_text_eng:schema.string()
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
