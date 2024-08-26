import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.decimal('amount', 15, 2).notNullable()
      table.string('reference').nullable()
      table.string('payment_method').notNullable()
      table.string('status').notNullable()
      table.string('sender_phone_number').nullable()
      table.timestamp('effective_date').notNullable()
      table.integer('salary_id').unsigned().nullable()
      table.integer('employee_id').unsigned().nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.foreign('salary_id').references('id').inTable('salaries').onDelete('SET NULL')
      table.foreign('employee_id').references('id').inTable('employees').onDelete('SET NULL')
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['salary_id', 'employee_id'])
    })
    this.schema.dropTable(this.tableName)
  }
}
