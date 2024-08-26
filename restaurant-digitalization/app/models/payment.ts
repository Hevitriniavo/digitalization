import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Salary from '#models/salary'
import Employee from '#models/employee'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare amount: number

  @column()
  declare reference: string | null

  @column()
  declare paymentMethod: string

  @column()
  declare status: string

  @column()
  declare senderPhoneNumber: string | null

  @column()
  declare salaryId: number

  @column()
  declare employeeId: number

  @belongsTo(() => Salary)
  declare salary: BelongsTo<typeof Salary>

  @belongsTo(() => Employee)
  declare employee: BelongsTo<typeof Employee>

  @column.dateTime()
  declare effectiveDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
