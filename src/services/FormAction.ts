import Http from './http'

interface ITestAPI {
    isGood: boolean
    message: string
    errors: Array<string>
}

class FormActions {
    async test() {
        return Http.get<ITestAPI>("contact")
    }
}

export default new FormActions()