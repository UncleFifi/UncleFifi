import React, { FC, useEffect, useState } from 'react'
import Finance from 'tvm-financejs'

class SliderOptions {
  constructor(public min: number, public max: number, public step: number, public onChange: slideFunction) {}
}

type slideFunction =  (e: React.ChangeEvent<HTMLInputElement>) => void

export const Amortization:FC = () => {

  const _finance = new Finance()

  const compounding = 12
  const [rate, setRate] = useState(4)
  const [mortgage, setMortgage] = useState(300000)
  const [term, setTerm] = useState(30)
  const [pmt, setPmt] = useState(0)
  const roundCcy = (unrounded: number) => Math.round((unrounded*100))/100


  const calculatePMT = () => {
    // should probably validate some stuff first...
    // is rate a number between 0 and 1
    // is term a number in range
    // is morgage a positive number...
    const pmt = _finance.PMT((rate*0.01)/compounding, compounding*term, -mortgage)
    setPmt(pmt)
  }

  useEffect(function load() {
    calculatePMT()
  }, [])

  const changeMortgageSlider = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const value = parseInt(e.target.value)
    setMortgage(value)
  }

  const changeRateSlider = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const value = parseFloat(e.target.value)
    setRate(value)
  }

  // const createRow = (label: string, value: number, onChange?:slideFunction, isSlider?: boolean) => {
  const createRow = (label: string, value: number, sliderOptions?: SliderOptions) => {
    const className = "stretched center"
    let JSXvalue = <div className={className}>{value}</div>

    // if(isSlider) {
    if(sliderOptions instanceof SliderOptions && sliderOptions !== null && typeof sliderOptions === 'object') {
      JSXvalue = <div className={className}>
        <input 
          onChange={sliderOptions.onChange}
          type="range" 
          id="test5" 
          value={value} 
          min={sliderOptions.min} 
          max={sliderOptions.max} 
          step={sliderOptions.step}
        />
        <div className="center">{value}</div>
      </div>
    }

    return <div className="full-width flexed">
      <div className={`${className} flexed flex-center`}>{label}</div>
      {JSXvalue}
    </div>
  }


  const MortgageSlider = new SliderOptions(100000, 1000000, 1000, changeMortgageSlider)
  const RateSlider = new SliderOptions(0,10,0.1, changeRateSlider)



  return (<div style={{justifyContent: 'space-evenly'}} className="col flexed full-dim">
    {createRow("Mortgage", mortgage, MortgageSlider)}
    {createRow("Rate", rate, RateSlider)}
    {createRow("Years", term)}
    {createRow("Payment", roundCcy(pmt))}
  </div>)
}