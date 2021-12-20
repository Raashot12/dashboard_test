import React from 'react'
import "./ToogleIcon.css"
const ToogleIcon = ( { isToggle}) => {
    return (
        
            <div className='toggle-switch'>
                <label className="toogle-label">
                <input className="toogle-input" type='checkbox' checked={ isToggle} />
                    <span className='slider'></span>
                </label>
            </div>

    )
}
export default ToogleIcon
