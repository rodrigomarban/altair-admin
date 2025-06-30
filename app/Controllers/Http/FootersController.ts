import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Footer from "App/Models/Footer";
import CreateFooterValidator from "App/Validators/CreateFooterValidator";

export default class FootersController {
    public async index(){
        return Footer.all()
    }

    public async view ({ view }) {
        const footers = await Footer.all();
        return view.render('footer', { footers });
    }

    public async edit({view, params }) {
        const footers = await Footer.findBy('id', params.id)
        return view.render('footer/edit', { footers })
    }

    // public async update({request, response, params}){
    //     const payload = await request.validate(CreateFooterValidator);
    //     await Footer.query().where('id', params.id).update(payload);
    //     return response.redirect().back();
    // }


    public async update({ request, response, params, session }) {
        const footer = await Footer.find(params.id);
        
        if (!footer) {
            return; 
        }
      
        const fileFields = [
            'privacy',
            'privacy_eng',
        ];
      
        const payload = await request.validate(CreateFooterValidator);
      
        for (const field of fileFields) {
            const heroImage = request.file(field);
            let fileName = footer[field];
      
            if (heroImage) {
                try {
                    await heroImage.moveToDisk('footer', { contentType: heroImage.headers['content-type'] }, 's3');
                    fileName = heroImage.fileName;
                } catch (error) {
                    console.error('Error moving file to disk:', error);
                    // Handle the error appropriately, perhaps by logging or informing the user
                }
            }
      
            payload[field] = fileName;
        }
      
        try {
            await footer.merge(payload).save();
        } catch (error) {
            console.error('Error updating:', error);
        }
      
        session.flash('success', 'Se ha actualizado correctamente.');
        return response.redirect().back();
      }

    public async id({params}: HttpContextContract){
        const footer = await Footer.findOrFail(params.id)
        return footer  
    }
}
