import Wrapper from '../assets/wrappers/JobInfo';

//this component was pre-existing, but currently not in use - set up to have some base/not give errors
type JobInfoProps = {
  icon?: any;
  text?: any;
}

const JobInfo = ({ icon, text }: JobInfoProps) => {
  return (
    <Wrapper>
      <span className='icon'>{icon} </span>
      <span className='text'>{text} </span>
    </Wrapper>
  );
};
export default JobInfo;
