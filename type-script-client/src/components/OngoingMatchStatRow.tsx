const OngoingMatchStatRow = ({team1Stat, statTitle, team2Stat}) => {
  return (
        <div className="OngoingMatchStatRow">
            <h4>{team1Stat}</h4>
            <h5>{statTitle}</h5>
            <h4>{team2Stat}</h4>
        </div>
  );
};
export default OngoingMatchStatRow;
