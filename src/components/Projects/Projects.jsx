import { Col, Row, } from 'react-bootstrap'
import './Projects.css'

const Projects = ({ language }) => {

    return (
        <>
            <Row className='justify-content-center' role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
                <Col xs='12' lg='12' className='projects-card'>
                    <Row className='justify-content-center mt-2'>
                        <Col xs='12' lg='10' className=' text-center'>
                            <h3 role="heading" aria-level="1">
                                {language === 'ENG' ? 'My ' : 'Mis '}
                                <span>{language === 'ENG' ? 'Projects' : 'Proyectos'}</span>
                            </h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-evenly mt-2 mb-4' role="list">

                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className="git-icon">
                                <h4>GREENLET </h4>
                                <a href="https://github.com/RodrigoLSoria/Greenlet-Client" target='_blank'> <img src="./github-mark.png" alt="github icon" className='github-icon' /></a>
                            </div>
                            <a href="https://greenlet.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/depxadgb3/image/upload/v1702501244/Captura_de_pantalla_2023-12-10_224905_mfnpoy.png" alt="Greenlet Project screenshot" role="img" aria-label="Greenlet Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className="git-icon">
                                <h4>DEVOPS PROJECT </h4>
                                <a href="https://github.com/RodrigoLSoria/Final-Project-DevOps" target='_blank'> <img src="./github-mark.png" alt="github icon" className='github-icon' /></a>
                            </div>
                            <a href="https://www.canva.com/design/DAF3DCpOgtU/-xcOieWDswhzVyGNLfIEqg/view?utm_content=DAF3DCpOgtU&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
                                <img src="https://res.cloudinary.com/depxadgb3/image/upload/v1704831327/Captura_de_pantalla_2024-01-09_211344_jhu2o7.png" alt="DevOps Project screenshot" role="img" aria-label="DevOps Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>Docker - Kubernetes</h5>
                            <h5>Terraform - Ansible</h5>
                            <h5>Prometheus - Grafana</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3 happycode-container' role="listitem">
                            <div className="git-icon">
                                <h4>HAPPYCODE </h4>
                                <a href="https://github.com/RodrigoLSoria/Happy-Code" target='_blank'> <img src="./github-mark.png" alt="github icon" className='github-icon' /></a>
                            </div>
                            <a href="https://happycodev.com" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/syptbzlmriyzea0osmad" alt="HAPPYCODE Project screenshot" role="img" aria-label="HAPPYCODE Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ReactJS - SASS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className="git-icon">
                                <h4>Q+ CREATIVES </h4>
                                <a href="https://github.com/samuelemarino04/Q-support-client" target='_blank'> <img src="./github-mark.png" alt="github icon" className='github-icon' /></a>
                            </div>
                            <a href="https://creativesqplus.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/depxadgb3/image/upload/v1702501244/Captura_de_pantalla_2023-12-13_213208_buczlc.png" alt="Q+ Creatives Project screenshot" role="img" aria-label="Q+ Creatives Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className="git-icon">
                                <h4>COMPI ROOMS</h4>
                                <a href="https://github.com/RodrigoLSoria/Compis-client" target='_blank'> <img src="./github-mark.png" alt="github icon" className='github-icon' /></a>
                            </div>
                            <a href="https://compirooms.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/t_mini3/czuemis1mfinxmuhgpbs.jpg" alt="COMPI ROOMS Project screenshot" role="img" aria-label="COMPI ROOMS Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className="git-icon">
                                <h4>CLASES PIANO MADRID</h4>
                                <a href="https://github.com/recheitor/clases-piano-app" target='_blank'> <img src="./github-mark.png" alt="github icon" className='github-icon' /></a>
                            </div>
                            <a href="https://clasespianomadrid.com" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/cx2khtovhcdsdmcbcns8" alt="CLASES PIANO MADRID Project screenshot" role="img" aria-label="CLASES PIANO MADRID Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>VueJS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className="git-icon">
                                <h4>ONLY PIZZAS</h4>
                                <a href="https://github.com/RodrigoLSoria/only-pizzas" target='_blank'> <img src="./github-mark.png" alt="github icon" className='github-icon' /></a>
                            </div>
                            <a href="https://onlypizzas.fly.dev/" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/t_mini5/uiriutfupwqjhlgwejf7.jpg" alt="ONLY PIZZAS Project screenshot" role="img" aria-label="ONLY PIZZAS Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>NodeJS - Bootstrap</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className="git-icon">
                                <h4>RODEBRUJAS PORTFOLIO</h4>
                                <a href="https://github.com/RodrigoLSoria/RodeBrujas-Portfolio" target='_blank'> <img src="./github-mark.png" alt="github icon" className='github-icon' /></a>
                            </div>
                            <a href="https://rodebrujas.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/depxadgb3/image/upload/v1703243958/Captura_de_pantalla_2023-12-22_121859_fcebcw.png" alt="RODEBRUJAS Project screenshot" role="img" aria-label="RODEBRUJAS Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ReactJS - Bootstrap</h5>
                        </Col>
                        {/* <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <h4>GHIBLIPEDIA</h4>
                            <a href="https://onlypizzas.fly.dev/" target="_blank">
                                <img src="https://res.cloudinary.com/depxadgb3/image/upload/v1702504659/Captura_de_pantalla_2023-12-13_225646_nenpcq.png" alt="GHIBLIPEDIA Project screenshot" role="img" aria-label="GHIBLIPEDIA Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>NodeJS - Bootstrap</h5>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Projects