import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

function Logo() {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '30px', marginTop: '-100px' }}>
            <Tilt className="Tilt br3 shadow-2 pa2" options={{ max: 25 }} style={{ height: 100, width: 100, background: ' #FF5EDF' }}>
                <div className="Tilt-inner justify-center-ns pa2"><img alt='Logo' src={brain}></img> </div>
            </Tilt>
        </div>

    );

}


export default Logo;