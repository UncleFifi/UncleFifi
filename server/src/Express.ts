import ExpressLib, { Express } from 'express'
import ContactRoute from './Routes/Contact'
const _ExpressApp: Express = ExpressLib()


function SetApplicationMiddleware(App: Express):Express
{
    console.log('Setting up application middleware')
    // using the CORS lib to avoid the stupid CORS issues
    // App.use(Cors())

    // no more need to bodyParser with this
    App.use(ExpressLib.urlencoded({ extended: true }))// Parse URL-encoded bodies
    App.use(ExpressLib.json())

    App.use(ExpressLib.static('public'))

    // MIDDLEWARE USED FOR LOGGING REQUESTS
    // App.use(Morgan('tiny'))

    // ADDING MIDDLEWARE TO DEAL WITH CORS
    App.use(( req: ExpressLib.Request, res: ExpressLib.Response, next: ExpressLib.NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if(req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
            return res.status(200).json({})
        }
        next();
    })

    const allDetails = new Array<string>()
    new ContactRoute(allDetails).bindRoute(App)

    /*
    App.get('/', (req: any, res: any) => {
        res
            .status(200)
            .send(allDetails)
    })
    */

    return App

}





export function startExpressServer(Port: number, next: Function)
{
    SetApplicationMiddleware(_ExpressApp).listen(Port, () => { 
        console.log( `server is now running on PORT:${ Port }`)
        // next()
    })
}