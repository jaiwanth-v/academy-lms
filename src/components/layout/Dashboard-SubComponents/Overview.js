import React from 'react'
import './css/Dashboard-Sub.css'

const Overview = () => {
    return (
        <div className='db-tab-overview'>
            <div className='db-overview-cards'>
            <div className='db-overview-card'>
                <span className='db-overview-card-icon'><span className='material-icons-outlined db-card-icon'>inbox</span></span>
                <span className='db-overview-card-data'>
                    <span className='db-card-data-score'>45 <span className='data-score-small'>/ 70</span></span>
                    <span className='db-card-data-title'>Homework Done</span>
                </span>
            </div>
            <div className='db-overview-card'>
                <span className='db-overview-card-icon'><span className='material-icons-outlined db-card-icon'>local_library</span></span>
                <span className='db-overview-card-data'>
                    <span className='db-card-data-score'>45 <span className='data-score-small'>/ 70</span></span>
                    <span className='db-card-data-title'>Lessons Done</span>
                </span>
            </div>
            <div className='db-overview-card'>
                <span className='db-overview-card-icon'><span className='material-icons-outlined db-card-icon'>insert_drive_file</span></span>
                <span className='db-overview-card-data'>
                    <span className='db-card-data-score'>45</span>
                    <span className='db-card-data-title'>Notes Taken</span>
                </span>
            </div>
                </div>          
        </div>
    )
}

export default Overview
