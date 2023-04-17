import { useState } from "react";
import Wrapper from '../assets/wrappers/MyTeamSectionTeamStatsRow';
const TeamStatsRow = ({ title, height, teamStats }) => {

    const [open, setOpen] = useState(false)

    const handleClick = e =>{
        setOpen(prevState => !prevState)
    }

    let statsList = teamStats.map( element => {
        return (            
            <div className='team-stats'>
                <h4>{element.statTitle}</h4>
                <h4>{element.statInfo}</h4>
            </div>
        )

    })

    console.log(teamStats)

    return (
        <Wrapper 
            open={open}
            height={height}
            >
            <hr></hr>
            <div className='row-header'>
                <h3>{title}</h3>
                <button className={open ? 'arrow-open': 'arrow-closed'}
                    type='button' 
                    onClick={handleClick}><p>⮞</p></button>
            </div>
            <hr></hr>
            <div className='stat-content'>
                <div className='stat-content-wrapper'>
                    {statsList}
                </div>
            </div> 
        </Wrapper>
    );
  };
  export default TeamStatsRow;
  