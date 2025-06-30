import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estrategia from "App/Models/Estrategia";
import CreateEstrategiaValidator from "App/Validators/CreateEstrategiaValidator";

export default class EstrategiasController {
    public async index(){
        return Estrategia.all()
    }

    public async view ({ view }) {
        const estrategias = await Estrategia.all();
        return view.render('estrategias', { estrategias });
    }

    public async edit({view, params }) {
        const estrategias = await Estrategia.findBy('id', params.id)
        return view.render('estrategias/edit', { estrategias })
    }

    // public async update({request, response, params}){
    //     const payload = await request.validate(CreateEstrategiaValidator);
    //     await Estrategia.query().where('id', params.id).update(payload);
    //     return response.redirect().back();
    // }

    public async update({ request, response, params, session }) {
        const estrategia = await Estrategia.find(params.id);
        
        if (!estrategia) {
            return; 
        }
      
        const fileFields = [
            'hero',
            'contact_img',
            'w_img'
        ];
      
        const payload = await request.validate(CreateEstrategiaValidator);
      
        for (const field of fileFields) {
            const heroImage = request.file(field);
            let fileName = estrategia[field];
      
            if (heroImage) {
                try {
                    await heroImage.moveToDisk('estrategia', { contentType: heroImage.headers['content-type'] }, 's3');
                    fileName = heroImage.fileName;
                } catch (error) {
                    console.error('Error moving file to disk:', error);
                    // Handle the error appropriately, perhaps by logging or informing the user
                }
            }
      
            payload[field] = fileName;
        }
      
        try {
            await estrategia.merge(payload).save();
        } catch (error) {
            console.error('Error updating:', error);
        }
      
        session.flash('success', 'Se ha actualizado correctamente.');
        return response.redirect().back();
      }

    public async id({params}: HttpContextContract){
        const estrategia = await Estrategia.findOrFail(params.id)
        return estrategia   
    }
}
