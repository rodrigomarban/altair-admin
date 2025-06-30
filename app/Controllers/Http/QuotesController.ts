// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CreateQuoteValidator from "App/Validators/CreateQuoteValidator"
import Quote from "App/Models/Quote"

export default class QuotesController {

    public async index(){
        return Quote.all()
    }
    
    public async view({view}){
        const quotes = await Quote.all();
        return view.render('quotes/quotes', {quotes})
    }

    public async new({view}){
        return view.render('quotes/new')
    }

    public async add({response, request,session}){
            const payload = await request.validate(CreateQuoteValidator)
            await Quote.create(payload)

            session.flash('success', 'Se ha creado la nueva cita.')
            return response.redirect().back()
    }

    public async edit({view, params}){
        const quote = await Quote.findBy('id', params.id)
        return view.render('quotes/edit', {quote})
    }

    public async update({request, response, params, session}){
        const payload = await request.validate(CreateQuoteValidator);
        await Quote.query().where('id', params.id).update(payload)

        session.flash('success', 'Se ha actualizado la cita.')
        return response.redirect().back();
    }

    public async destroy({params,response}){
        const quote = await Quote.findBy('id', params.id)
        if (quote){
            quote.delete();
        }
        return response.redirect().back();
    }

}
