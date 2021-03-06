import React, { FC, useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
// import ResumePDF from './../../Assets/ResumePDF.pdf'
// onLoadSuccess={onDocumentLoadSuccess}
// options={options}
const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

interface IPDFDocumentProxy {
    numPages:number
}

export const ResumeSection:FC = () => {

    const [numPages, setNumPages] = useState<number>(null)
    const [pageNumber, setPageNumber] = useState(1)
    const onDocumentLoadSuccess = (settings: IPDFDocumentProxy) => {
        setNumPages(settings.numPages);
    }

    useEffect(() => {
        debugger
        console.log(pdfjs.version)
    }, 
    [])
    // http://www.africau.edu/images/default/sample.pdf
    // https://s3-ap-southeast-1.amazonaws.com/happay-local/HVP/BILL20198261213473719445688HP.pdf
    // file="./ResumePDF.pdf"
    return <div>
        <Document file="http://localhost:3000/ResumePDF.pdf">
            <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
    </div>
}