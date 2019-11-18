import { Request, Response } from 'express'
import { provide, Service } from './container'

export default (app): void => {
  app.route('/').get(provide(Service.actionRandom))
}
