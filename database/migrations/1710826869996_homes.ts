import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'homes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title');
      table.text('content');
      table.string('hero');
      table.string('intro_heading');
      table.string('intro_image');
      table.text('intro_content');
      table.text('mision');
      table.text('vision');
      table.string('values');
      table.string('estrategias_img');
      table.string('estrategias_heading');
      table.string('estrategias_subheading');
      table.text('estrategias_content');
      table.text('quote_content');
      table.string('quote_author');
      table.string('hero_2');
      table.string('contact_img');
      table.string('contact_heading');
      table.text('contact_text');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
