import Wrapper from '../assets/wrappers/Stat';

const Stat = (props) => {
  return (
    <Wrapper>
        <div className="Stat">
            <h4>{props.statTitle}</h4>
            <h5>{props.statContent}</h5>
        </div>
    </Wrapper>
  );
};
export default Stat;
