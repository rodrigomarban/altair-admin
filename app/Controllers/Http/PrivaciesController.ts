import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Privacy from "App/Models/Privacy";
import CreatePrivacyValidator from "App/Validators/CreatePrivacyValidator";

export default class PrivaciesController {
    public async index(){
        return Privacy.all()
    }

    public async view ({ view }) {
        const privacies = await Privacy.all();
        return view.render('privacy', { privacies });
    }

    public async edit({view, params }) {
        const privacies = await Privacy.findBy('id', params.id)
        return view.render('privacy/edit', { privacies })
    }

    public async update({request, response, params}){
        const payload = await request.validate(CreatePrivacyValidator);
        await Privacy.query().where('id', params.id).update(payload);
        return response.redirect().back();
    }

    public async id({params}: HttpContextContract){
        const privacies = await Privacy.findOrFail(params.id)
        return privacies  
    }
}
