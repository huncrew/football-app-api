// import Wrapper from '../assets/wrappers/MyTeamSectionTeamStatsRow';
import TeamStatsRow from './TeamStatsRow';

import { useSelector } from 'react-redux';


const TeamStats = ({team1Stat, statTitle, team2Stat}) => {

    const rawTeamStats = useSelector(store => store.myTeam)

    const playersArr = rawTeamStats.players

    let idkArr =[];

    console.log(rawTeamStats.players[0])

    

    setTimeout(()=>{
        for (let key in rawTeamStats.players[0]){
            idkArr.push(rawTeamStats[key])
        }
        console.log(idkArr)
    },[5000])
    // const playersStats = playersArr.map(element => ({statTitle: element.name}))

    const teamStats= {
        
    }
    return (
          <section>
              {/* <h4>{team1Stat}</h4>
              <h5>{statTitle}</h5>
              <h4>{team2Stat}</h4> */}

              <TeamStatsRow 
                    title='Full Roster'
                    height='20rem'
                    teamStats={[]}
                />
              <TeamStatsRow 
                    title='Stat2'
                    height='10rem'
                    teamStats={[]}
                />
              <TeamStatsRow 
                    title='Stat3'
                    teamStats={[]}
                />
          </section>
    );
  };
  export default TeamStats;
  