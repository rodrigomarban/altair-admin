import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Testimonial from "App/Models/Testimonial";
import CreateTestimonialValidator from "App/Validators/CreateTestimonialValidator";

export default class TestimonialsController {
    public async index(){
        return Testimonial.all()
    }

    public async view ({ view }) {
        const testimonials = await Testimonial.all();
        return view.render('testimonial', { testimonials });
    }

    public async new({view}){
        return view.render('testimonials/new')
    }

    public async add({response, request,session}){
            const payload = await request.validate(CreateTestimonialValidator)
            await Testimonial.create(payload)
            session.flash('success', 'Se ha creado la nueva cita.')
            return response.redirect().back()
    }

    public async edit({view, params }) {
        const testimonials = await Testimonial.findBy('id', params.id)
        return view.render('testimonials/edit', { testimonials })
    }

    public async update({request, response, params}){
        const payload = await request.validate(CreateTestimonialValidator);
        await Testimonial.query().where('id', params.id).update(payload);
        return response.redirect().back();
    }

    public async destroy({params,response}){
        const testimonial = await Testimonial.findBy('id', params.id)
        if (testimonial){
            testimonial.delete();
        }
        return response.redirect().back();
    }

    public async id({params}: HttpContextContract){
        const testimonials = await Testimonial.findOrFail(params.id)
        return testimonials   
    }
}
