import { Request, Response } from 'express'

export interface Action {
  (req: Request, res: Response): void
}
