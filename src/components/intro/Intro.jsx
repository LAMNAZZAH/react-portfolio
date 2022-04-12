import React from 'react';
import './intro.scss';

function intro() {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Azul, my name is</h2>
                <h1 className='i-name'>Mohammed LAMNAZZAH</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developper</div>
                        <div className="i-title-item">System administrator</div>
                        <div className="i-title-item">UX/UI designer</div>
                        <div className="i-title-item">3d artist</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="i-right">right</div>
    </div>
  )
}

export default intro