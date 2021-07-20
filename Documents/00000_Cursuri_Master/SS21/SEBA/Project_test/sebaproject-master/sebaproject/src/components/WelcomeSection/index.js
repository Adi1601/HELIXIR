import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {Container, Bg, VideoBg, WelcomeContent, WelcomeH1, WelcomeP, ButtonWrapper, ArrowForward, ArrowRight} from './WelcomeElements';

const WelcomeSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
        <Container>
            <Bg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </Bg>
            <WelcomeContent>
                <WelcomeH1>Consulting Doctors Made Easy</WelcomeH1>
                <WelcomeP>Sign Up for a new account today and experience the power of HELIXIR.</WelcomeP>
                <ButtonWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Become a part of HELIXIR {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </ButtonWrapper>
            </WelcomeContent>
        </Container>
        </>
    )
}

export default WelcomeSection;
