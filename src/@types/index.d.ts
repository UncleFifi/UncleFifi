type NoProps = {}
type NoState = void

interface PDF {
    default: string
}

// used in both prototypes.ts and also in the /src/**/*.ts
type groupedData<T> = {[key: string]: T}

interface Window {
    particlesJS(domLocation: string, config: any):void
}

// Allowing png imports to work
declare module "*.png" {
    const value: string;
    export default value;
}
declare module "*.pdf" {
    const value: string;
    export default value;
}

declare module 'materialize-css' {

    export interface ISideNavInstance {
        open(): void
        close(): void
        destroy(): void
        el: Element
        options: ISidenavOptions
        isOpen: boolean
        isFixed: boolean
        isDragged: boolean
    }

    interface ISidenavOptions {
        edge?: 'left'
        draggable?: boolean
        inDuration?: number
        outDuration?: number
        onOpenStart?: Function
        onOpenEnd?: Function
        onCloseStart?: Function
        onCloseEnd?: Function
        preventScrolling?: boolean
    }

    interface ISidenav {
        init(elements: NodeListOf<Element>, options?: ISidenavOptions): ISideNavInstance[]
    }


    export default class M {
        public static Sidenav:ISidenav
    }
}