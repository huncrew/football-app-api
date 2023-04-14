import Wrapper from '../assets/wrappers/MyTeamSection';
import OngoingMatchStatRow from './OngoingMatchStatRow';

const OngoingMatch = (props) => {
  return (
    <Wrapper>
        
            <h3 className='match-score'>
                <div>{props.team1}</div>
                <div>{props.score}</div> 
                <div>{props.team2}</div>
            </h3>

            <div className='match-stats'>
                {/* just as before, these will be mapped once the data is ready */}
                <OngoingMatchStatRow statTitle='BALL POSSESION' team1Stat={'40%'} team2Stat={'60%'} />
                <OngoingMatchStatRow statTitle='BALL POSSESION' team1Stat={'40%'} team2Stat={'60%'} />
                <OngoingMatchStatRow statTitle='BALL POSSESION' team1Stat={'40%'} team2Stat={'60%'} />
                <OngoingMatchStatRow statTitle='BALL POSSESION' team1Stat={'40%'} team2Stat={'60%'} />
            </div>
            {/* <div className='form-center'>
            <h4>x% - POSSESSION - x%</h4>
            <h4>x% - SHOTS - x%</h4>
            <h4>x% - SHOTS ON GOAL - x%</h4>
            <h4>x% - YELLOW CARDS - x%</h4>
            <h4>x% - RED CARDS - x%</h4>

            <hr></hr>
            <h3 >Goals</h3>
            <hr style={{width: '50%'}}></hr>
            <h4>Team | player | min'</h4>
            <h4>Team | player | min'</h4>
            <h4>Team | player | min'</h4>
            <hr></hr>
            <h3>Time</h3>
            <hr style={{width: '50%'}}></hr>
            <h4>current minute: X</h4>
            <h4>extra time: X</h4>         
            </div> */}

    </Wrapper>
  );
};
export default OngoingMatch;
