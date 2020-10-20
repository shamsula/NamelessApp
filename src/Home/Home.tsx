import React from 'react';
import styled from 'styled-components/macro';
import { Top, StyledContainer, Header, headerSpringProps } from '../Style/Stuff';
import { Button } from '../Style/Button'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Icon from '../Style/Icon'

import Border from '../Style/Highlighter'

type Props = {

};

export function Home(props: Props): JSX.Element {

    const springProps = useSpring(headerSpringProps)


    return (
        <>
        <Header maxWidth="md">
                    {/* <Icon icon="home" colour="#61DAFB" /> */}
                    <animated.h1 style={springProps}>Home</animated.h1>
                </Header>
            <StyledContainer maxWidth="md">
                

                <Body>
                    {/* <Border> */}
                        <StyledLink to="/bio">
                            <Button
                                label="Auto-Biography"
                            />
                        </StyledLink>
                    {/* </Border> */}
                </Body>
                
            </StyledContainer>
            
        </>
    );
};

export default Home



const Body = styled.div`
    padding: 25px;
    min-height: 75vh;
    background: ${({ theme }) => theme.colours.honeyDew};
    border: 1px solid ${({ theme }) => theme.colours.quickSilver};
    border-radius: 4px;
    margin-top: 12px;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
`

const H1 = styled(animated.h1)`
// color: ${({ theme }) => theme.colours.newBlack};
`
