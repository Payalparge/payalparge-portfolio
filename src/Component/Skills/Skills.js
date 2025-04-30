import React, { useState } from 'react'
import SkillsCard from './SkillsCard/SkillsCard'
import { SKILLS } from '../../Utli/data'
import SkillsInfo from './SkillsInfo/SkillsInfo'
const Skills = () => {

    const [selectSkills, setSelectSkills]=useState(SKILLS[0])

    const handleSelectSkill=(data)=>{
        setSelectSkills(data);  
    }
  return (
    <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className='skills_content'>
            <div className='skills'>
                {SKILLS.map((item)=>(
                    <SkillsCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectSkills.title === item.title}
                    onClick={()=>{
                        handleSelectSkill(item)
                    }}
                    />
                ))}
            </div>
            <div className='skills-info'>
                <SkillsInfo
                heading={selectSkills.title}
                Skills={selectSkills.Skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills
