import React, { FC, useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
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
        console.log(pdfjs.version)
    }, 
    [])

    function displayError(error: any) {
        console.error(error)
    }


    return <Document file="./src/Assets/ResumePDF.pdf" options={options} onLoadError={displayError}>
        <Page pageNumber={pageNumber} />
    </Document>
}