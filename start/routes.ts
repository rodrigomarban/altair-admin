/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('auth/login')
})

Route.get('/dashboard', async ({ view }) => { return view.render('welcome') }).middleware('auth')

Route.get('register', 'AuthController.registerShow').as('auth.register.show').middleware('auth')
Route.post('register', 'AuthController.register').as('auth.register').middleware('auth')
Route.get('login', 'AuthController.loginShow').as('auth.login.show')
Route.post('login', 'AuthController.login').as('auth.login')
Route.get('logout', 'AuthController.logout').as('auth.logout')

Route.get('/homes', 'HomesController.view').as('homes_view').middleware('auth');
Route.get('/homes/:id/edit', 'HomesController.edit').as('homes_edit').middleware('auth');
Route.patch('/homes/:id', 'HomesController.update').as("homes.update").middleware('auth');

Route.get('/nosotros', 'NosotrosController.view').as('nosotros_view').middleware('auth')
Route.get('/nosotros/:id/edit', 'NosotrosController.edit').as('nosotros_edit').middleware('auth')
Route.patch('/nosotros/:id', 'NosotrosController.update').as('nosotros.update').middleware('auth')

Route.get('/estrategias', 'EstrategiasController.view').as('estrategias_view').middleware('auth');
Route.get('/estrategias/:id/edit', 'EstrategiasController.edit').as('estrategias_edit').middleware('auth');
Route.patch('/estrategias/:id', 'EstrategiasController.update').as('estrategias.update').middleware('auth')

Route.get('/contact', 'ContactsController.view').as('contact_view').middleware('auth');
Route.get('/contact/:id/edit', 'ContactsController.edit').as('contact_edit').middleware('auth');
Route.patch('/contact/:id', 'ContactsController.update').as('contact.update').middleware('auth');

Route.get('/footer', 'FootersController.view').as('footer_view').middleware('auth');
Route.get('/footer/:id/edit', 'FootersController.edit').as('footer_edit').middleware('auth');
Route.patch('/footer/:id', 'FootersController.update').as('footer.update').middleware('auth');

Route.get('/numeralia', 'CifrasController.view').as('numeralia_view').middleware('auth');
Route.get('/numeralia/:id/edit', 'CifrasController.edit').as('numeralia_edit').middleware('auth');
Route.patch('/numeralia/:id', 'CifrasController.update').as('numeralia.update').middleware('auth');

Route.get('/testimonial', 'TestimonialsController.view').as('testimonial_view').middleware('auth');
Route.get('/testimonial/new', 'TestimonialsController.new').as('testimonial.new').middleware('auth')
Route.post('/testimonial', 'TestimonialsController.add').as('testimonial.add').middleware('auth')
Route.get('/testimonial/:id/edit', 'TestimonialsController.edit').as('testimonial_edit').middleware('auth');
Route.patch('/testimonial/:id', 'TestimonialsController.update').as('testimonial.update').middleware('auth');
Route.delete('/testimonial/:id',  'TestimonialsController.destroy').as('testimonial.delete').middleware('auth')

Route.get('/brandbook', 'BrandbooksController.view').as('brandbook_view').middleware('auth');
Route.get('/brandbook/:id/edit', 'BrandbooksController.edit').as('brandbook_edit').middleware('auth');
Route.patch('/brandbook/:id', 'BrandbooksController.update').as('brandbook.update').middleware('auth');

Route.get('/privacy', 'PrivaciesController.view').as('privacy_view').middleware('auth');
Route.get('/privacy/:id/edit', 'PrivaciesController.edit').as('privacy_edit').middleware('auth');
Route.patch('/privacy/:id', 'PrivaciesController.update').as('privacy.update').middleware('auth');


Route.group(() => {
  Route.get('/homes/index', 'HomesController.index')
  Route.get('/homes/:id', 'HomesController.id')
  Route.get('/nosotros/index', 'NosotrosController.index')
  Route.get('/nosotros/:id', 'NosotrosController.id')
  Route.get('/estrategias/index', 'EstrategiasController.index')
  Route.get('/estrategias/:id', 'EstrategiasController.id')
  Route.get('/contact/index', 'ContactsController.index')
  Route.get('/contact/:id', 'ContactsController.id')
  Route.get('/footer/index', 'FootersController.index')
  Route.get('/footer/:id', 'FootersController.id')
  Route.get('/numeralia/index', 'CifrasController.index')
  Route.get('/numeralia/:id', 'CifrasController.id')
  Route.get('/testimonials/index', 'TestimonialsController.index')
  Route.get('/testimonials/:id', 'TestimonialsController.id')
  Route.get('/brandbook/index', 'BrandbooksController.index')
  Route.get('/brandbook/:id', 'BrandbooksController.id')
  
  Route.get('/privacy/index', 'PrivaciesController.index')
  Route.get('/privacy/:id', 'PrivaciesController.id')

  Route.get('/todo', 'TodosController.index')
  Route.post('/todo', 'TodosController.store')
  Route.patch('/todo/:id', 'TodosController.update')
}).prefix('api')