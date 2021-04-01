import React from 'react';
import './ResumeS.scss';

const Resume = () => {
  return (
    <div className="resumeFrame">
      <iframe
        src="/Users/sambrandon/Documents/Personal Website/Portfolio/SamBrandonResume.pdf"
        className="resume"
        width="auto" height="200000000rem"
        />
    </div>
  )
}

export default Resume;