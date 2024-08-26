import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Department from '#models/department'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Status from '#models/status'
import Payment from '#models/payment'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string | null

  @column()
  declare email: string

  @column()
  declare phoneNumber: string

  @column.dateTime()
  declare hireDate: DateTime

  @column()
  declare positionEmp: string

  @column()
  declare departmentId: number

  @hasMany(() => Status, {
    foreignKey: 'employeeId',
  })
  declare statuses: HasMany<typeof Status>

  @belongsTo(() => Department)
  declare department: BelongsTo<typeof Department>

  @hasMany(() => Payment, {
    foreignKey: 'employeeId',
  })
  declare payments: HasMany<typeof Payment>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
