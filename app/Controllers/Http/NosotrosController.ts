import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nosotro from "App/Models/Nosotro";
import CreateNosotrosValidator from "App/Validators/CreateNosotrosValidator";

export default class NosotrosController {
  public async index(){
    return Nosotro.all()
  }
  
  public async view ({ view }) {
    const nosotros = await Nosotro.all();
    return view.render('nosotros', { nosotros });
  }

  public async edit({view, params }) {
    const nosotros = await Nosotro.findBy('id', params.id)
    return view.render('nosotros/edit', { nosotros })
  }

  // public async update({request, response, params}){
  //   const payload = await request.validate(CreateNosotrosValidator);
  //   await Nosotro.query().where('id', params.id).update(payload);
  //   return response.redirect().back();
  // }

  public async update({ request, response, params, session }) {
    const nosotros = await Nosotro.find(params.id);
    
    if (!nosotros) {
        return; 
    }
  
    const fileFields = [
        'hero',
        'hero_2',
    ];
  
    const payload = await request.validate(CreateNosotrosValidator);
  
    for (const field of fileFields) {
        const heroImage = request.file(field);
        let fileName = nosotros[field];
  
        if (heroImage) {
            try {
                await heroImage.moveToDisk('nosotros', { contentType: heroImage.headers['content-type'] }, 's3');
                fileName = heroImage.fileName;
            } catch (error) {
                console.error('Error moving file to disk:', error);
                // Handle the error appropriately, perhaps by logging or informing the user
            }
        }
  
        payload[field] = fileName;
    }
  
    try {
        await nosotros.merge(payload).save();
    } catch (error) {
        console.error('Error updating:', error);
    }
  
    session.flash('success', 'Se ha actualizado correctamente.');
    return response.redirect().back();
  }

  public async id({params}: HttpContextContract){
    const nosotros = await Nosotro.findOrFail(params.id)
    return nosotros    
  }
}
