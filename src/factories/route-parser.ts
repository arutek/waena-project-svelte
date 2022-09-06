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
  lastPath(pathRoute:string) {
    const arrRoute = pathRoute.split("/")
    return arrRoute[arrRoute.length - 1]
  },
  paramParse(pathRoute:string, routeName:string) {
    let arrRoute = pathRoute.split(routeName)
    arrRoute = arrRoute[arrRoute.length - 1].split("/")
    let baseRoute:string[] = []
    for (let i = 0; i < (arrRoute.length); i++) {
      if (arrRoute[i] === "") continue
      baseRoute.push(arrRoute[i])
    }
    return baseRoute
  },
}