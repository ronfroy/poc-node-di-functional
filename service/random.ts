import { Request, Response } from 'express'
import { Service } from './Interface'

export default (service1: Service, service2: Service) => (): string => {
  if (Math.random() >= 0.5) {
    return service1()
  }

  return service2()
}
