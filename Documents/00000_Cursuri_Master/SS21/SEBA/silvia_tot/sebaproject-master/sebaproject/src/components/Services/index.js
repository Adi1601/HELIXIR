import React from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, ServicesCard} from './serviceElements'; 
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>

            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Something Something</ServicesH2>
                    <ServicesP>We do blah blah</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Something Something 2</ServicesH2>
                    <ServicesP>We do blah blah</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Something Something 3</ServicesH2>
                    <ServicesP>We do blah blah</ServicesP>
                </ServicesCard>

            </ServicesWrapper>

        </ServicesContainer>
        
    )
}

export default Services
