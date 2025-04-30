import React, { useRef } from 'react'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import { PROJECTS } from '../../Utli/data'
import Slider from 'react-slick'



const Projects = () => {
const sliderRef=useRef();
    const settings={
        dots:false,
        Infinity:true,
        speed:500,
        slidsToShow:2,
        slideToScroll:1,
        arrows:false,
        DiResponsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slideToScroll:1,
                }
            }
        ]
    }

    const slideRight=()=>{
        sliderRef.current.slickNext();
    }

    const slideLeft=()=>{
        sliderRef.current.slickPrev();
    }
  return (
 <section className='project-container'>
    <h5 className='project-heading'>Work On Projects</h5>
<div className='project-content'>
<div className='arrow-right' onClick={slideRight}>
    <span class="material-symbols-outlined">chevron_right</span>
</div>
<div className='arrow-left' onClick={slideLeft}>
    <span class="material-symbols-outlined">chevron_left</span>
</div>
    <Slider ref={sliderRef}{...settings}>
    {PROJECTS.map((item)=>(
        <ProjectsCard key={item.title} details={item}/>
    ))}
    </Slider>
</div>
 </section>
  )
}

export default Projects
