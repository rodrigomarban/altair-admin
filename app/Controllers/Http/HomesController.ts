import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Home from "App/Models/Home";
import CreateHomeValidator from "App/Validators/CreateHomeValidator";

export default class HomesController {
    public async index(){
        return Home.all()
    }

    public async view ( {view} ){
        const homes = await Home.all();
        return view.render('home', {homes});
    }

    public async edit({ view, params }){
        const home = await Home.findBy('id', params.id)
        return view.render('home/edit', { home })
    }

    // public async update({request, response, params }){
    //     const payload = await request.validate (CreateHomeValidator);
    //     await Home.query().where('id', params.id).update(payload);
    //     return response.redirect().back();
    // }

    public async update({ request, response, params, session }) {
        const home = await Home.find(params.id);
        
      
        if (!home) {
            // Handle the case where the team with the given ID is not found
            return; // return or throw an error, or handle the case appropriately
        }
      
        const fileFields = [
            'hero',
            'intro_image',
            'estrategias_img',
            'hero_2',
            'contact_img',
        ];
      
        const payload = await request.validate(CreateHomeValidator);
      
        for (const field of fileFields) {
            const heroImage = request.file(field);
            let fileName = home[field];
      
            if (heroImage) {
                try {
                    // await heroImage.moveToDisk(('./uploads'), {
                    //     name: `${field}_${new Date().getTime()}.${heroImage.extname}`,
                    //     overwrite: true
                    // });
                    await heroImage.moveToDisk('home', { contentType: heroImage.headers['content-type'] }, 's3');
                    fileName = heroImage.fileName;
                } catch (error) {
                    console.error('Error moving file to disk:', error);
                    // Handle the error appropriately, perhaps by logging or informing the user
                }
            }
      
            payload[field] = fileName;
        }
      
        try {
            await home.merge(payload).save();
        } catch (error) {
            console.error('Error updating:', error);
            // Handle the error appropriately, perhaps by logging or informing the user
        }
      
        session.flash('success', 'Se ha actualizado correctamente.');
        return response.redirect().back();
    }
      

    public async id({params}: HttpContextContract){
        const home = await Home.findOrFail(params.id)
        return home    
    }
}
