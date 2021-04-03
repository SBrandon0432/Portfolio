import React from 'react';
import './ResumeS.scss';

const Resume = () => {
  return (
    <div className="resumeFrame">
      <iframe
        src="https://resumesambrandon.s3-us-west-1.amazonaws.com/SamBrandonResume.pdf"
        className="resume"
        />
    </div>
  )
}

export default Resume;