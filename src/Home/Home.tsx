import React from 'react';
import styled from 'styled-components/macro';
import { Top, StyledContainer, Header, Footer } from '../Style/Stuff';
import { Button } from '../Style/Button'
import { Link } from 'react-router-dom'
import { useSpring } from 'react-spring'
import Icon from '../Style/Icon'

import Border from '../Style/Highlighter'

type Props = {

};

export function Home(props: Props): JSX.Element {

    const springProps = useSpring({
        to: {
            transform: 'translate3d(0,0,0)',
            scale: '1',
            opacity: 1,
        },

        from: {
            transform: 'translate3d(1.8%,0,0)',
            scale: '1.05',
            opacity: 0.8,
        },
        config: {
            duration: 1000,
        },
    })


    return (
        <>
            <StyledContainer maxWidth="md">
                <Header style={springProps}>
                    <Icon icon="home" colour="#61DAFB" />
                    <h1>This is, home.</h1>
                </Header>

                <Body>
                    <Border>
                        <StyledLink to="/bio">
                            <Button
                                label="biography"
                            />
                        </StyledLink>
                    </Border>
                </Body>
                
            </StyledContainer>
            
        </>
    );
};

export default Home



const Body = styled.div`
    padding: 25px;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
`
