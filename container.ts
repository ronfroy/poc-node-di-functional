let container = []

export enum Service {
  serviceRandom,
  serviceA,
  serviceB,
  actionA,
  actionB,
  actionRandom
}

export function provide (name: Service) {
  if (name in container) {
    return container[name]
  }

  return (container[name] = resolve(name))
}

function resolve (name: Service) {
  if (Service.actionRandom === name) {
    return require('./controller').actionRandom(
      provide(Service.actionA),
      provide(Service.actionB)
    )
  }

  if (Service.serviceRandom === name) {
    return require('./service').serviceRandom(
      provide(Service.serviceA),
      provide(Service.serviceB)
    )
  }

  if (Service.serviceA === name) {
    return require('./service').serviceA()
  }

  if (Service.serviceB === name) {
    return require('./service').serviceB()
  }

  if (Service.actionA === name) {
    return require('./controller').actionA(provide(Service.serviceRandom))
  }

  if (Service.actionB === name) {
    return require('./controller').actionB(provide(Service.serviceRandom))
  }

  throw `the service "${name}" is not defined`
}
