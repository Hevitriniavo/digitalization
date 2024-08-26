import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name').notNullable()
      table.string('last_name')
      table.string('email').nullable().unique()
      table.string('phone_number')
      table.integer('department_id').nullable()
      table.foreign('department_id').references('id').inTable('departments').onDelete('SET NULL')
      table.timestamp('hire_date').notNullable()
      table.string('position_emp').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.alterTable('departments', (table) => {
      table.dropForeign('department_id')
    })
    this.schema.dropTable(this.tableName)
  }
}
