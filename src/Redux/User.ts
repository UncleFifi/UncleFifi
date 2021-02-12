import { Record } from 'immutable'
import { Reducer } from 'redux'

// this is what the dispatcher calls
export const updateUserCallback = (value: string, prop: UserKeys):IUpdateStateAction => {
    return {
        type: "UPDATE",
        value: value,
        prop: prop
    }
}


// this is what the dispatcher calls
export const resetUserStateCallback = ():IResetStateAction => {
    return {
        type: "RESET"
    }
}

export const loginUserStateCallback = (user: IUser):ILoginAction => {
    return {
        type: "LOGIN",
        user: user
    }
}



const defaultUser: IUser = { first: '', last: '', userName: '', password: '', email: '' }
export class User extends Record(defaultUser) implements IUser, UserRecord {
    constructor() {
        super()
    }
    public get fullName() {
        const _usr = this.toJS()
        return `${_usr.first} ${_usr.last}`
    }
}


export const UserReducer:Reducer<User,IUserActions> = (previousState:User = new User(), action: IUserActions): User => {
    switch (action.type) {
        case "UPDATE":
            return previousState.set(action.prop, action.value);
        case "RESET":
            return previousState.merge(defaultUser)
        case "LOGIN":
            return previousState.merge(action.user)
        default:
            return previousState
    }
}