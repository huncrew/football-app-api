// import Wrapper from '../assets/wrappers/MyTeamSectionTeamStatsRow';
import TeamStatsRow from './TeamStatsRow';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const TeamStats = ({team1Stat, statTitle, team2Stat}) => {

    const rawTeamStats = useSelector(store => store.myTeam)
    
    const [ players, setPlayers ] = useState([])

    useEffect(()=>{
        if(!rawTeamStats.isLoading){
            setPlayers(rawTeamStats.players.map( player => ({
                statTitle: player.name,
                statInfo: player.position,
                statId: player.id
            })
            ))
            console.log(players)
        }

    },[rawTeamStats])



    const teamStats= {

    }
    return (
          <section>
              {/* <h4>{team1Stat}</h4>
              <h5>{statTitle}</h5>
              <h4>{team2Stat}</h4> */}

              {
                !rawTeamStats.isLoading && 
                <TeamStatsRow 
                    title='Full Roster'
                    height='80.5rem'
                    teamStats={players}
                />
              }
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
  