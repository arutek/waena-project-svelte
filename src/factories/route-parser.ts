export default {
  routeNow(pathRoute:string) {
    const arrRoute = pathRoute.split("/")
    let baseRoute = ""
    for (let i = 0; i < (arrRoute.length); i++) {
      if (arrRoute[i] === "") continue
      baseRoute += `/${arrRoute[i]}`
    }
    return baseRoute
  },
  routeBefore(pathRoute:string) {
    const arrRoute = pathRoute.split("/")
    let baseRoute = ""
    for (let i = 0; i < (arrRoute.length - 1); i++) {
      if (arrRoute[i] === "") continue
      baseRoute += `/${arrRoute[i]}`
    }
    return baseRoute
  },
}