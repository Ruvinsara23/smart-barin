import React from 'react';
import './imagelinkform.css';


function ImageLinkForm({onInputChange ,onButtonSubmit}){
  return (
    <div>
      <p className='f3 washed-blue '>
        {'This Magic Brain will detect faces in your picture . Give it a try'}
      </p>
      <div className="center" >
        <div className='abc center pa4 br3 shadow-5 flex z-index:2 '>
          <input className='f4 pa2 w-70 center br3 b--none ' type='search' placeholder='URL' onChange={onInputChange} />
          <button className='w-30 grow f4 link ph3 pv2 br3 dib white bg-light-purple b--none pointer' onClick={onButtonSubmit}> Detect</button>
        </div>
      </div>
    </div>

  );

}


export default ImageLinkForm;