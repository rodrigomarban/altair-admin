import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateEstrategiaValidator {
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
    content: schema.string(),
    content_eng: schema.string(),
    hero:schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    contact_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),
    contact_title: schema.string(),
    contact_title_eng: schema.string(),
    w_title: schema.string(),
    w_title_eng: schema.string(),
    w_content: schema.string(),
    w_content_eng: schema.string(),
    w_img: schema.file.optional({size: '3mb', extnames: ['jpg', 'gif', 'png'],}),

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
