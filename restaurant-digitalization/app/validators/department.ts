import vine from '@vinejs/vine'

export const createDepartment = vine.compile(
  vine.object({
    name: vine.string().trim(),
  })
)
