import ExpressLibrary, { Express } from 'express'
// import ExpressLib, { Express } from 'express'

export abstract class RouteBase {
    protected Router: ExpressLibrary.Router
    constructor(protected BasePath: string){
        this.Router = ExpressLibrary.Router()
    }

    protected registerRoute(collectionRef: Array<string>, routePath: string) {
        collectionRef.push(routePath)
    }

    public bindRoute(App: Express) {
        App.use(`/${this.BasePath}`, this.Router)
    }

}