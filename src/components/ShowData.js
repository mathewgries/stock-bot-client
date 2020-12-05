import React, { useState } from 'react'
import { get } from '../api/get'
import './style.css'

const ShowData = () => {
    const [data, loadData] = useState(null)

    const handleShowData = async () => {
        const data = await get()
        loadData(data)
    }

    return (
        <div>
            <div>
                <button className='btn btn-primary'
                onClick={() => handleShowData()}>
                    Show Data
                </button>
            </div>
            <div>
                {
                    data !== null 
                        ? <pre>{JSON.stringify(data, null, 2)}</pre>
                        : null
                }
            </div>
        </div>
    )
}

export default ShowData