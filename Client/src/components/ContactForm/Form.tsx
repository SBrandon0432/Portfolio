import React from 'react';
import './FromS.scss';

const From = () => {


  return (
    <div className="contactFrom">
      <form>
        <label>
          name:
          <input type='text'/>
        </label>

        <label>
          Email:
          <input type='text'/>
        </label>

      </form>
    </div>


  )


}

export default From;