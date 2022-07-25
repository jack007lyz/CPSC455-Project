import React from 'react'
import './index.scss'
import STCard from './STCard'
import dataForTeam from '../../../utils/dataForTeam'
import { v4 as uuidv4 } from 'uuid'

const OurTeam = () => {
    return (
        <div>
            <div className="section_title">Meet Our Team</div>
            <div className="OurTeam_content">
                We are team - 405 FOUND. <br />
                This website is designed for CPSC 455 2022S project at UBC.
            </div>
            <div className="ourteam_card">
                {dataForTeam.map((img, idx) => (
                    <STCard props={dataForTeam[idx]} key={uuidv4()} />
                ))}
            </div>
        </div>
    )
}

export default OurTeam
