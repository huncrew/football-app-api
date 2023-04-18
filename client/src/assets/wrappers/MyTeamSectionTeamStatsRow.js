import styled from 'styled-components'

const Wrapper = styled.div`
hr{
    margin: 0;
    border-width: 2px;
    border-color:  rgb(197, 68, 68);
}
    position: relative;
    overflow: hidden;
    height: ${props => props.open ? props.height : 'calc(4.6rem + 4px)'};
    transition: all 1s;
    margin: 0 1rem ;
    .row-header{
  
        height: 4rem;
        margin: 0.3rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        border-radius: 0.55rem 0.55rem 0 0;
        overflow: hidden;

        h3, p{
            margin: 0;
            font-size: 1.3rem !important;
        }
        .arrow-open,
        .arrow-closed{
            text-align: center;
            padding: 0.2rem 0.4rem;

        }
        .arrow-closed{
            p{
                rotate: 180deg;

            }
        }
        .arrow-open{
            p{
                rotate:90deg;
                transform: translateY(0px);

            }

        }
    }

    .stat-content{
        /*
        the 2nd calc bellow features: the height of the header(4.6rem) + total height-space of the hr(3px) + the bellow margin(5px) 
        */
        height: ${props => `calc(${props.height} - calc(4.6rem + 4px + 4px ))`};
        display: grid;
        align-items: center;
        transition: all 1s;
        transform: translateY(-5px);

        border: 2px solid rgb(197, 68, 68);
        border-top: none;
        border-bottom: none;


        margin-top: 5px;
       h3{
            margin: 0;
       }
    }
    .stat-content-wrapper{
        .team-stats{
            display: flex;
            justify-content: space-around;
            border: 1px solid black;
            align-items: center;
            h4{
                margin:0;
            }
        }
    }


  

`

export default Wrapper
