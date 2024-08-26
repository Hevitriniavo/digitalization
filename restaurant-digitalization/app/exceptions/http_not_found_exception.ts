import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'

export default class HttpNotFoundException extends Exception {
  static status = 404

  constructor(message: string) {
    super(message, {
      status: HttpNotFoundException.status,
      code: 'E_NOT_FOUND',
    })
  }

  async handle(error: this, ctx: HttpContext) {
    ctx.logger.error({ err: error }, error.message)
    ctx.response.status(error.status).send({
      message: error.message,
      status: error.status,
      date: new Date().toISOString(),
    })
  }
}
