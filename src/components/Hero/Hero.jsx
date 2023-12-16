import { Col, Row, } from 'react-bootstrap'
import './Hero.css'
import { useEffect, useState } from 'react';
const Hero = ({ language }) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);



    }, []);

    return (
        <>
            <div className='hero-background'>
                <Row className={`hero justify-content-center align-items-center ${loaded ? 'fade-in' : ''}`} role="banner" aria-label={language === 'ENG' ? 'Hero Section' : 'Sección del héroe'}>
                    <Col xs='8' lg='7' className='d-flex flex-column align-items-center text-center'>
                        <h1 role="heading" aria-level="1">
                            {language === 'ENG' ? 'Hey! I am' : '¡Hola! Soy'}
                        </h1>
                        <div>
                            <h3 role="heading" aria-level="2">
                                Rodrigo López
                            </h3>
                        </div>
                        <h4 role="heading" aria-level="3">
                            {language === 'ENG' ? "I'm a Full Stack Web Developer specializing in DevOps" : "Soy Desarrollador Web Full Stack especializado en DevOps"}
                        </h4>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero