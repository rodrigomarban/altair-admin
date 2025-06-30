import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cifra from "App/Models/Cifra";
import CreateCifraValidator from "App/Validators/CreateCifraValidator";

export default class CifrasController {
    public async index(){
        return Cifra.all()
    }

    public async view ({ view }) {
        const cifras = await Cifra.all();
        return view.render('numeralia', { cifras });
    }
    
    public async edit({view, params }) {
        const cifras = await Cifra.findBy('id', params.id)
        return view.render('numeralia/edit', { cifras })
    }

    public async update({request, response, params}){
        const payload = await request.validate(CreateCifraValidator);
        await Cifra.query().where('id', params.id).update(payload);
        return response.redirect().back();
    }

    public async id({params}: HttpContextContract){
        const cifras = await Cifra.findOrFail(params.id)
        return cifras   
    }
}
