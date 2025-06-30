// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CreateServiceValidator from "App/Validators/CreateServiceValidator";
import Service from "App/Models/Service";

export default class ServicesController {

    public async index(){
        return Service.all()
    }

    public async view({ view }){
        const services = await Service.all();
        return view.render('services/services', { services });
    }

    public async new({ view }){
        return view.render('services/new');
    }

    public async add({ response, request, session}) {
 
        const payload = await request.validate(CreateServiceValidator)
        await Service.create(payload);

        session.flash('success', 'Se ha creado tu nuevo servicio exitosamente.')
        return response.redirect().back();

    }

    public async edit({view, params}){
        const service = await Service.findBy('id', params.id)
        return view.render('services/edit', { service });
    }

    public async update({request, response, params, session}) {
        const payload = await request.validate(CreateServiceValidator)
        await Service.query().where('id', params.id).update(payload)

        session.flash('success', 'Tu servicio se ha actualizado exitosamente.')
        return response.redirect().back()
    }

    public async destroy({ params, response, session }){
        const service = await Service.findBy('id', params.id);
    
        if(service){
            service.delete()

            session.flash('success', 'Se ha eliminado el servicio exitosamente.')

            return response.redirect().back()
        }    

        // await this.prompt.secure('¿Estás seguro de que quieres eliminarlo? Esta opción no puede deshacerse.', {
        //     validate(answer) {
        //       if (!answer) {
        //         return 'Debes aceptar para eliminar el servicio'
        //       }
          
        //       return true
        //     },
        //   })
    }
}


