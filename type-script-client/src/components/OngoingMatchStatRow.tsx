type OngoingMatchStatRowProps = {
  team1Stat: string;
  statTitle: string;
  team2Stat: string
}

const OngoingMatchStatRow = ({team1Stat, statTitle, team2Stat}: OngoingMatchStatRowProps) => {
  return (
        <div className="OngoingMatchStatRow">
            <h4>{team1Stat}</h4>
            <h5>{statTitle}</h5>
            <h4>{team2Stat}</h4>
        </div>
  );
};
export default OngoingMatchStatRow;
