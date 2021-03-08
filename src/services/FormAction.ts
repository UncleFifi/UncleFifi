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

    async submitForm<T>(formData: T) {
        return Http.formPost("contact/send", formData)
    }
    
}

export default new FormActions()