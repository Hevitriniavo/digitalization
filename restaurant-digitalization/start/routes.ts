/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const DepartmentsController = () => import('#controllers/departments_controller')

router
  .group(() => {
    router.get('/', [DepartmentsController, 'getAllDepartments'])
    router.post('/', [DepartmentsController, 'createDepartment'])
  })
  .prefix('/departments')
