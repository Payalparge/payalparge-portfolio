import React from 'react'

const SkillsInfo = ({heading, Skills}) => {
  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>

      <div className='skills-info-content'>
        {Skills.map((item, index)=>(
 <React.Fragment key={`Skills ${index}`}>
    <div className='skills-info'>
        <p>{item.skill}</p>
        <p className='percentage'>{item.percentage}</p>
    </div>
    <div className="Skill-progress-bg">
        <div className='skill-progress' style={{width: item.percentage}}></div>
    </div>
 </React.Fragment>
        ))}
       

      </div>
    </div>
  )
}

export default SkillsInfo
