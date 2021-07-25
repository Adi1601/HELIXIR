import React, {useState, useEffect} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {Container, Bg, VideoBg, WelcomeContent, WelcomeH1, WelcomeP, ButtonWrapper, ArrowForward, ArrowRight} from './WelcomeElements';


const WelcomeSection = () => {
    const[hover, setHover] = useState(false)
    const [isLogged, setIsLogged] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    useEffect(() => {
        if (localStorage.getItem("jwtToken") !== null) {
            setIsLogged(true);
        }
    })
    
    return (
        <>
        <Container>
            <Bg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </Bg>
            <WelcomeContent>
                <WelcomeH1>Consulting Doctors Made Easy</WelcomeH1>
                    <div>{
                        isLogged == false ?
                        <div>
                            <WelcomeP>Sign Up for a new account today and experience the power of HELIXIR.</WelcomeP>
                            <ButtonWrapper>
                                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                                    Become a part of HELIXIR {hover ? <ArrowForward/> : <ArrowRight/>}
                                </Button>
                            </ButtonWrapper>
                        </div>:
                        <div/>
                    }
                    </div>
            </WelcomeContent>
        </Container>
        </>
    )
}

export default WelcomeSection;
