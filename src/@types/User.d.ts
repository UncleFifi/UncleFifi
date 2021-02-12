/// <reference path="immutable" />
/// <reference path="redux" />

/**
 * Basic User Properties
 */
interface IUser {
    first:      string
    last:       string
    email:      string
    userName:   string    
    password:   string
}

// keys of the Model
/**
 * StringKeys from IUser
 */
type UserKeys = keyof IUser
/**
 * IUser as a Record
 */
type UserRecord = Record<IUser>

// Action MSG Types
type UPDATE = "UPDATE"
type RESET  = "RESET"
type LOGIN  = "LOGIN"

// Actions Defined
/**
 * Interface for return of Updating the IUserRecord
 */
interface IUpdateStateAction {
    type: UPDATE
    value: string
    prop: UserKeys
}


/**
 * Interface for return of the reset of the IUserRecord
 */
interface IResetStateAction {
    type: "RESET"
}

/**
 * Interface for return of the login of the IUserRecord
 */
interface ILoginAction {
    type: "LOGIN"
    user: IUser
}

/**
 * Combination of all IUserActions
 */
type IUserActions = IUpdateStateAction 
    | IResetStateAction 
    | ILoginAction