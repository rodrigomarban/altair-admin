 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Brandbook from "App/Models/Brandbook";
import CreateBrandbookValidator from 'App/Validators/CreateBrandbookValidator';

export default class BrandbooksController {
    public async index(){
        return Brandbook.all()
    }

    public async view ({ view }) {
        const brandbooks = await Brandbook.all();
        return view.render('brandbook', { brandbooks });
    }

    public async edit({view, params }) {
        const brandbooks = await Brandbook.findBy('id', params.id)
        return view.render('brandbook/edit', { brandbooks })
    }

    // public async update({request, response, params}){
    //     const payload = await request.validate(CreateBrandbookValidator);
    //     await Brandbook.query().where('id', params.id).update(payload);
    //     return response.redirect().back();
    // }

    public async update({ request, response, params, session }) {
        const brandbook = await Brandbook.find(params.id);
        
        if (!brandbook) {
            return; 
        }
      
        const fileFields = [
            'about_img',
            'valores_img',
            'branding_img',
            'lnf_img',
            'lnf_img_eng',
            'lnf_logo_img',
            'lnf_simbolo_img',
            'lnf_reticula_img',
            'lnf_proteccion_img',
            'lnf_minimos_img',
            'lnf_minimos_img_eng',
            'lnf_incorrectos_img_a',
            'lnf_incorrectos_img_b',
            'lnf_incorrectos_img_c',
            'lnf_incorrectos_img_d',
            'lnf_incorrectos_img_e',
            'lnf_incorrectos_img_f',
            'lnf_incorrectos_img_g',
            'lnf_incorrectos_img_h',
            'lnf_incorrectos_img_i',
            'color_img_a',
            'color_img_b',
            'color_usos_img_a',
            'color_usos_img_b',
            'color_simbolo_img',
            'color_positiven_img_a',
            'color_positiven_img_b',
            'color_app_img_a',
            'color_app_img_b',
            'color_app_img_c',
            'color_app_img_d',
            'color_app_img_e',
            'color_app_img_f',
            'type_img_a',
            'type_img_b',
            'type_img_c',
            'resources_img_a',
            'resources_img_b',
            'resources_img_c',
            'resources_img_d',
            'resources_img_e',
            'resources_img_f',
            'icons_img_a'
        ];
      
        const payload = await request.validate(CreateBrandbookValidator);
      
        for (const field of fileFields) {
            const heroImage = request.file(field);
            let fileName = brandbook[field];
      
            if (heroImage) {
                try {
                    await heroImage.moveToDisk('brandbook', { contentType: heroImage.headers['content-type'] }, 's3');
                    fileName = heroImage.fileName;
                } catch (error) {
                    console.error('Error moving file to disk:', error);
                    // Handle the error appropriately, perhaps by logging or informing the user
                }
            }
      
            payload[field] = fileName;
        }
      
        try {
            await brandbook.merge(payload).save();
        } catch (error) {
            console.error('Error updating:', error);
        }
      
        session.flash('success', 'Se ha actualizado correctamente.');
        return response.redirect().back();
      }

    public async id({params}: HttpContextContract){
        const brandbooks = await Brandbook.findOrFail(params.id)
        return brandbooks
    }
}
