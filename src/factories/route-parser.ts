export default {
  routeParser(pathRoute:string) {
    const arrRoute = pathRoute.split("/")
    let baseRoute = ""
    for (let i = 1; i < (arrRoute.length - 1); i++) {
      baseRoute += `/${arrRoute[i]}`
    }
    return baseRoute
  },
}