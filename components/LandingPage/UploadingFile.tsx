"use client"
import React from 'react'
import { FileUpload } from '../ui/file-upload'

const UploadingFile = ({show}:{show:boolean}) => {
  return (
    <div className=" flex  items-center justify-center">
    <FileUpload show={show} />
  </div>
  )
}

export default UploadingFile
