import React from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, ServicesCard} from './serviceElements'; 
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services in Development</ServicesH1>

            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Bridging Healthcare</ServicesH2>
                    <ServicesP>We're striving to remove barriers from access to healthcare with new and innovative ways to assist you.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Medical Essentials</ServicesH2>
                    <ServicesP>We are partnering up with trusted retailers to ease purchases of items, such as face masks, sanitizers, etc.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Digitalized Prescriptions</ServicesH2>
                    <ServicesP>We're working to provide e-prescriptions accessible to pharmacies, simply, after your teleconsultation. </ServicesP>
                </ServicesCard>

            </ServicesWrapper>

        </ServicesContainer>
        
    )
}

export default Services
