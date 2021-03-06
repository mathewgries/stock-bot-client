import React, { useState } from 'react'
import { post } from '../api/post'
import './style.css'

const timespanArr = ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']

const getCurrentDate = (date, sub = 0) => {
    var d = date.getDate() - sub;
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
}

const GetData = () => {
    // const [loading, setLoading] = useState(true)
    const [userInput, setUserInput] = useState({
        ticker: 'AAPL',
        multiplier: '1',
        timespan: 'minute',
        startDate: getCurrentDate(new Date(), 1),
        endDate: getCurrentDate(new Date()),
    })

    function handleChange(e) {
        const { name, value } = e.target
        setUserInput({ ...userInput, [name]: value })
    }

    const handleGetData = () => {
        post(userInput)
    }

    return (
        <div>
            <div className='data-fields'>
                <div className='form-group'>
                    <label>Symbol</label>
                    <input
                        className='form-control'
                        type='text'
                        name={'ticker'}
                        value={userInput.ticker}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <label>Start Date</label>
                    <input
                        className='form-control'
                        type='date'
                        name={'startDate'}
                        value={userInput.startDate}
                        onChange={(e) => handleChange(e)}
                        max={getCurrentDate(new Date())}
                    />
                </div>
                <div className='form-group'>
                    <label>End Date</label>
                    <input
                        className='form-control'
                        type='date'
                        name={'endDate'}
                        value={userInput.endDate}
                        onChange={(e) => handleChange(e)}
                        min={userInput.startDate}
                        max={getCurrentDate(new Date())}
                    />
                </div>
                <div className='form-group'>
                    <label>Timespan</label>
                    <select
                        className='form-control'
                        name='timespan'
                        value={userInput.timespan}
                        onChange={(e) => handleChange(e)}
                    >
                        {timespanArr.map((agg) =>
                            <option
                                key={agg}
                                value={agg}
                            >
                                {agg}
                            </option>
                        )}
                    </select>
                </div>
                <div className='form-group'>
                    <label>Aggregate Span</label>
                    <input
                        className='form-control'
                        type='number'
                        name={'multiplier'}
                        value={userInput.multiplier}
                        min={1}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className='form-group'>
                <button
                    className='btn btn-success'
                    type='submit'
                   onClick={() => handleGetData()}
                >
                    Get Data
                </button>
            </div>
        </div >
    )
}

export default GetData