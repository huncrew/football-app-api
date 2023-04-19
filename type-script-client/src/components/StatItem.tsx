import Wrapper from '../assets/wrappers/StatItem';

//review types later... set them up for now to be able to create a build and link BE and FE
// remember to also review the list witht he map below

type statItemProps = {
  count: any;
  title: string;
  icon: any;
  color: any;
  bcg: any
}

const StatItem = ({ count, title, icon, color, bcg }: statItemProps) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
};
export default StatItem;
