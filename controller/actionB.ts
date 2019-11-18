import { Request, Response } from 'express'
import { Service } from '../service'

export default (service: Service) => (req: Request, res: Response): void => {
  res.json({
    message: 'Action B + ' + service()
  })
}
