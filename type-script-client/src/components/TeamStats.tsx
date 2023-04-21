// import Wrapper from '../assets/wrappers/MyTeamSectionTeamStatsRow';
import TeamStatsRow from './TeamStatsRow';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { RootState } from '../store';
import { Player } from '../features/myTeam/myTeamSlice';


const TeamStats = () => {

    interface PlayerStats {
        statTitle: string;
        statInfo: string;
        statId: number;
      }
      
      type PlayersState = PlayerStats[];

    const rawTeamStats = useSelector((store: RootState) => store.myTeam)
    
    const [ players, setPlayers ] = useState<PlayersState>([])

    useEffect(()=>{
        if(!rawTeamStats.isLoading){
            setPlayers(rawTeamStats.players.map( (player: Player) => ({
                statTitle: player.name,
                statInfo: player.position,
                statId: player.id
            })) as PlayersState)
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
                    height='5rem'
                />
          </section>
    );
  };
  export default TeamStats;
  