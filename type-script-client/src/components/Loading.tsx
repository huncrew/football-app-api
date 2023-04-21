type LoadingCenterProp = {
  center: boolean
}

const Loading = ({ center } : LoadingCenterProp) => {
  return <div className={center ? 'loading loading-center' : 'loading'}></div>;
};
export default Loading;
