class Settings {

    get baseUrl(): string {
        return process.env.SERVER_HOST
    }
    
}


export default new Settings()