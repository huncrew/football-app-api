import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: hidden;
  width: 95%;
  margin: 0 auto 1rem auto;

  border-radius: 0 0 0.3rem 0.3rem;
  transition: all 0.3s;

  &: hover{
    
  }

  .match-score{
    
    text-align: center;
    display: grid;
    grid-template-columns: 35% 30% 35%;
    justify-content: space-around;
    margin: 0;
    background: linear-gradient(90deg, var(--primary-300)45%, var(--primary-100) 55%);
    border-radius: 0.55rem 0.55rem 0 0;

    overflow: hidden;
    border: 5px ridge hsl(0, 53%, 52%);
  }
  .match-score div:first-of-type,
  .match-score div:last-of-type{
    align-self: center;
  }

  .match-score div:first-of-type{
    background: var(--primary-300); 
  }
  .match-score div:nth-child(2){
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
    color: var(--white);
    background: linear-gradient( 
      hsl(0,49%,30%), 
      hsl(0, 53%, 52%)
      );
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .match-score div:last-of-type{
    background: var(--primary-100);
  }
  .match-stats{
    padding: 0.5rem;
    width: 100%;
    background: linear-gradient(90deg, 
      var(--primary-300)40.9%,
 
      var(--primary-100) 59.1%
      );
  }

  .match-stats .OngoingMatchStatRow{
    display: flex;
    align-items: center;
    justify-content: space-around;

  }
  .match-stats .OngoingMatchStatRow h4:first-of-type,
  .match-score div:first-of-type{
    color: hsl(0, 53%, 52%)
  }

  .match-stats .OngoingMatchStatRow h4:last-of-type,
  .match-score div:last-of-type{
    color: hsl(0,49%,30%)
  }

  .match-stats .OngoingMatchStatRow h5{
    text-align: center;
    background: linear-gradient(90deg,
      hsl(0, 53%, 52%),
      hsl(0,49%,30%)
      );
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

  }
`

export default Wrapper
