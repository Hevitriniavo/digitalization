import type { HttpContext } from '@adonisjs/core/http'
import Department from '#models/department'
import { createDepartmentValidator } from '#validators/department'

export default class DepartmentsController {
  async getAllDepartments({ response }: HttpContext) {
    const departments = await Department.all()
    return response.ok(departments.map((department) => department.serialize()))
  }

  async createDepartment({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createDepartmentValidator)
    const savedDepartment = await Department.create(payload)
    return response.created(savedDepartment.serialize())
  }
}
