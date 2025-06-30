import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'brandbooks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title');
      table.text('desc');
      table.string('about');
      table.text('about_desc');
      table.string('about_img');
      table.string('mision');
      table.text('mision_txt');
      table.string('vision');
      table.text('vision_txt');
      table.text('valores');
      table.string('valores_img');
      table.string('slogan');
      table.text('slogan_txt');
      table.string('branding_title');
      table.text('branding_subtitle');
      table.text('branding_text');
      table.string('branding_img');
      table.text('branding_text_2');
      table.text('branding_subtitle_3');
      table.text('branding_text_3');
      table.string('lnf_title');
      table.string('lnf_img');
      table.string('lnf_logo');
      table.text('lnf_logo_txt');
      table.string('lnf_logo_img');
      table.string('lnf_simbolo');
      table.text('lnf_simbolo_txt');
      table.string('lnf_simbolo_img');
      table.string('lnf_reticula');
      table.text('lnf_reticula_txt');
      table.string('lnf_reticula_img');
      table.string('lnf_proteccion');
      table.text('lnf_proteccion_txt');
      table.string('lnf_proteccion_img');
      table.string('lnf_minimos');
      table.text('lnf_minimos_txt');
      table.string('lnf_minimos_img');
      table.string('lnf_incorrectos');
      table.text('lnf_incorrectos_txt');
      table.string('lnf_incorrectos_desc_a');
      table.string('lnf_incorrectos_desc_b');
      table.string('lnf_incorrectos_desc_c');
      table.string('lnf_incorrectos_desc_d');
      table.string('lnf_incorrectos_desc_e');
      table.string('lnf_incorrectos_desc_f');
      table.string('lnf_incorrectos_desc_g');
      table.string('lnf_incorrectos_desc_h');
      table.string('lnf_incorrectos_desc_i');
      table.string('lnf_incorrectos_img_a');
      table.string('lnf_incorrectos_img_b');
      table.string('lnf_incorrectos_img_c');
      table.string('lnf_incorrectos_img_d');
      table.string('lnf_incorrectos_img_e');
      table.string('lnf_incorrectos_img_f');
      table.string('lnf_incorrectos_img_g');
      table.string('lnf_incorrectos_img_h');
      table.string('lnf_incorrectos_img_i');
      table.string('color_title');
      table.text('color_txt');
      table.string('color_img_a');
      table.string('color_img_b');
      table.string('color_usos_title');
      table.text('color_usos_txt');
      table.string('color_usos_img_a');
      table.string('color_usos_img_b');
      table.string('color_simbolo_title');
      table.text('color_simbolo_txt');
      table.string('color_simbolo_img');
      table.string('color_positiven_title');
      table.text('color_positiven_txt');
      table.string('color_positiven_img_a');
      table.string('color_positiven_img_b');
      table.string('color_app_title');
      table.text('color_app_txt');
      table.string('color_app_img_a');
      table.string('color_app_img_b');
      table.string('color_app_img_c');
      table.string('color_app_img_d');
      table.string('color_app_img_e');
      table.string('color_app_img_f');
      table.string('type_title');
      table.text('type_txt');
      table.string('type_subtitle');
      table.string('type_img_a');
      table.string('type_img_b');
      table.string('type_img_c');
      table.string('resources_title');
      table.text('resources_txt');
      table.string('resources_img_a');
      table.string('resources_img_b');
      table.string('resources_img_c');
      table.string('resources_img_d');
      table.string('resources_img_e');
      table.string('resources_img_f');
      table.string('icons_title');
      table.text('icons_txt');
      table.string('icons_img_a');

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
