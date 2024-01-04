import WorkCard from './WorkCard';
import './WorkCardStyle.css'
import data from './WorkApiLocal';

const Work = () => {
    return (
        <div className='work-container' >
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                {
                    data.map((val, idx) => {
                        return (
                            <WorkCard key={idx} imgSrc={val.imgSrc} 
                            title = {val.title} 
                            text={val.text}
                            hlink={val.hlink} />
                        )
                    })
                }
            </div>
        </div >
    )
}
export default Work;