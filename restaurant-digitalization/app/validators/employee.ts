import vine from '@vinejs/vine'

export const createEmployeeValidator = vine.compile(
  vine.object({
    firstName: vine.string(),
    lastName: vine.string(),
    email: vine.string(),
    phoneNumber: vine.string(),
    hireDate: vine.string(),
    positionEmp: vine.string(),
    departmentId: vine.string(),
  })
)
