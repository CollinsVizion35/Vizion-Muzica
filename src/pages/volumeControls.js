import React from 'react'
import { FaVolumeUp} from 'react-icons/fa/index'

function VolumeControls() {
  return (
    <div className='flex flex-row items-center'>
            <FaVolumeUp className='mr-2'/>
            <input type='range' id='sondTime'/>
        </div>
  )
}

export default VolumeControls