import vine from '@vinejs/vine'

export const createDepartmentValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
  })
)
