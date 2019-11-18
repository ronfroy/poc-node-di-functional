import { Request, Response } from 'express'
import { Action } from './Interface'

export default (action1: Action, action2: Action) => (
  req: Request,
  res: Response
): void => {
  if (Math.random() >= 0.5) {
    action1(req, res)
    return
  }

  action2(req, res)
}
