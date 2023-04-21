import Wrapper from '../assets/wrappers/Stat';

type StatProps = {
  statTitle: string;
  statContent: string;
}

const Stat = ({statTitle, statContent}: StatProps) => {
  return (
    <Wrapper>
        <div className="Stat">
            <h4>{statTitle}</h4>
            <h5>{statContent}</h5>
        </div>
    </Wrapper>
  );
};
export default Stat;
