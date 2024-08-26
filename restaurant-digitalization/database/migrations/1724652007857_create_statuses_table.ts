import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'statuses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('status').notNullable()
      table.date('start_date').notNullable()
      table.date('end_date').nullable()
      table.integer('employee_id')
      table.foreign('employee_id').references('id').inTable('employees').onDelete('SET NULL')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['employee_id'])
    })
    this.schema.dropTable(this.tableName)
  }
}
