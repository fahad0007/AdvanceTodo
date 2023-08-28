import React from 'react'
import './DummyCategory.scss'

function DummyCategory({selectedOption}) {
  return (
    <div className='dummy_category'>
        <div className="container">
          {selectedOption}
        </div>
      
    </div>
  )
}

export default DummyCategory
