import React from 'react'
import resumeFile from '../Database/KLS_Resume.pdf'
function Resume() {
  return (
    <div className='content_section'>
        <h2>Resume</h2>
        
        <iframe 
                src={resumeFile} 
                width="100%" 
                height="600px" 
                title="Resume"
            >
                This browser does not support PDFs. 
                <a href={resumeFile}>Download the PDF</a>.
            </iframe>
            <p>
                {/* Additional information about your resume can go here */}
            </p>
    </div>
  )
}

export default Resume