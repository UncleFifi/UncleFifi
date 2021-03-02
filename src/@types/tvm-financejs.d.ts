declare module "tvm-financejs" {

    class Finance {
        
        PMT(rate: number, nper: number, pv: number, fv?: number, type?: 0 | 1):number

        PV(rate: number, nper: number, pmt: number, fv?: number, type?: 0 | 1):number

        FV(rate: number, nper: number, pmt: number, pv: number, type?: 0 | 1): number

        RATE(nper: number, pmt: number, pv: number, fv?: number, type?: 0 | 1, guess?: boolean)

    }

    export default Finance

}