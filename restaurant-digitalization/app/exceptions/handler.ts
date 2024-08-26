import app from '@adonisjs/core/services/app'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import { errors } from '@vinejs/vine'

export default class HttpExceptionHandler extends ExceptionHandler {
  protected debug = !app.inProduction

  async handle(error: unknown, ctx: HttpContext) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      ctx.response.status(422).send({
        status: 422,
        message: error.messages,
        date: new Date().toUTCString(),
      })
      return
    }

    if (error instanceof Error) {
      ctx.response.status(500).send({
        status: 500,
        message: error.message,
        date: new Date().toUTCString(),
      })
      return
    }

    return super.handle(error, ctx)
  }

  async report(error: unknown, ctx: HttpContext) {
    if (error instanceof Error) {
      ctx.logger.error({ err: error }, error.message)
    }
    return super.report(error, ctx)
  }
}
