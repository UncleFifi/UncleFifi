type NoProps = {}
type NoState = void

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