import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from "App/Models/Contact";
import CreateContactValidator from "App/Validators/CreateContactValidator";

export default class ContactsController {
    public async index(){
        return Contact.all()
    }

    public async view ({ view }) {
        const contacts = await Contact.all();
        return view.render('contact', { contacts });
    }

    public async edit({view, params }) {
        const contacts = await Contact.findBy('id', params.id)
        return view.render('contact/edit', { contacts })
    }

    public async update({request, response, params}){
        const payload = await request.validate(CreateContactValidator);
        await Contact.query().where('id', params.id).update(payload);
        return response.redirect().back();
    }

    public async id({params}: HttpContextContract){
        const contact = await Contact.findOrFail(params.id)
        return contact   
    }
}
