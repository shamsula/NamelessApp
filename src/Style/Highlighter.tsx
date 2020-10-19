import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { useSpring, animated } from 'react-spring'


type Props = {
    children: React.ReactNode;
};

const shine = keyframes`
from {
    background-position: 0% center;
  }
  50%{
      tranform: scale(1.2);
      overflow: none;
  }
to {
    background-position: 200% center;
  }
`
function Highlighter(props: Props): JSX.Element {

    const borderProps = useSpring({
        opacity: 1,
        from: {
            opacity: 0.1,
        },
        config: {
            duration: 1500
        }
    })

    return (
        <>
            {
                React.Children.map(props.children, (child => (
                    <Border style={borderProps}>
                        <InnerBorder>
                            {child}
                        </InnerBorder>
                    </Border>
                )))}

        </>
    );
};

Highlighter.displayName = 'Highlighter';

export default Highlighter

const Border = styled(animated.div)`
padding: 2px 5px;

margin: 20px 5px;
  &:hover {
    //border: none;
    border-left: solid 3px ${({ theme }) => theme.colours.corn};
border-right: solid 4px ${({ theme }) => theme.colours.corn};
    // background: linear-gradient(to right, #fff 20%, #fff 40%, #ECD08C 50%, #ECD08C 55%, #fff 70%, #fff 100%);
    
    background: linear-gradient(to right, #f3faf1 20%, #f3faf1 40%, #f7ef64 50%, #f7ef64 55%, #f3faf1 70%, #f3faf1 100%);
    background: -moz-linear-gradient( to right, #f3faf1 20%, #f3faf1 40%, #f7ef64 50%, #f7ef64 55%, #f3faf1 70%, #f3faf1 100%);

  background-size: 200% auto;
  
  animation: ${shine} 1.5s linear infinite;
  animation-direction: reverse;
  }
`

const InnerBorder = styled.div`
padding: 5px 10px;
  marging: 10px;
background: ${({ theme }) => theme.colours.honedew};


`