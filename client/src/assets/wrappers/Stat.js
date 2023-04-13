import styled from 'styled-components'

const Wrapper = styled.div`
  .Stat{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    margin: 0.5rem 0;
    border: 3px solid var(--green-light);
    border-radius: 1rem;
    background: var(--primary-50);
    overflow: hidden;
    h4,h5{
        margin: 0;
        
    }
    h4{
        
        background: var(--green-light);
        justify-self: start;
        border-right: solid 3px var(--green-light);
        padding: 0.7rem 1.4rem;
    }
    
    

  }
`

export default Wrapper
