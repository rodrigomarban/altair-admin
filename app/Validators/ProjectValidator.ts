import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProjectValidator {
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
    overview: schema.string(),
    address: schema.string(),
    status: schema.string(),
    product: schema.string(),
    insignia: schema.string(),
    category: schema.string(),
    latitude: schema.string(),
    longitude: schema.string(),
    ftimage: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    images: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    imagetwo: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    imagethree: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    imagefour: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    imagefive: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    imagesix: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    imageseven: schema.file.optional({size: '2mb', extnames: ['jpg', 'gif', 'png'],}),
    type: schema.string.optional(),
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
