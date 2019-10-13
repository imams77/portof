import React from 'react'
import Helmet from 'react-helmet'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

import Breadcrumb from '../common/Breadcrumb'

function Faq() {
    return (
        <div>
            {/* seo content */}
            <Helmet>
                <title>Negan | FAQ</title>
                <meta name="description" content="Negan – Multipurpose eCommerce React Template" />
            </Helmet>
            
            {/* breadcrumb */}
            <Breadcrumb title="FAQ" />

            <div className="faq-area">
                <div className="single-faq-wrap pt-120 pb-100">
                    <div className="container">
                    <div className="section-title text-center mb-70">
                        <h2>General question</h2>
                        <p>Nunc vulputate blandit commodo. Sed odio ex, egestas a ipsum non, commodo rutrum enim.<br /> Nullam luctus eros neque, et ultricies ex aliquet.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Accordion>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="0">
                                            Lorem ipsum dolor sit amet, consectetur adipisc ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="1" >
                                        Vivamus feugiat, eros pretium porta ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="2" >
                                        Donec molestie vitae turpis a efficitur ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="3" >
                                        Maecenas malesuada malesuad ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="4" >
                                        Nullam dignissim lectus diam, vitae elementum ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                            </Accordion>
                        </div>
                        <div className="col-lg-6">
                            <Accordion>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="0">
                                            Lorem ipsum dolor sit amet, consectetur adipisc ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="1">
                                        Vivamus feugiat, eros pretium porta ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="2" >
                                        Donec molestie vitae turpis a efficitur ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="3">
                                        Maecenas malesuada malesuad ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="4">
                                        Nullam dignissim lectus diam, vitae elementum ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                            </Accordion>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single-faq-wrap pt-120 pb-100 bg-gray-2">
                    <div className="container">
                    <div className="section-title text-center mb-70">
                        <h2>Prepuchases question</h2>
                        <p>Nunc vulputate blandit commodo. Sed odio ex, egestas a ipsum non, commodo rutrum enim.<br /> Nullam luctus eros neque, et ultricies ex aliquet.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Accordion>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="0">
                                            Lorem ipsum dolor sit amet, consectetur adipisc ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="1">
                                        Vivamus feugiat, eros pretium porta ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="2">
                                        Donec molestie vitae turpis a efficitur ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="3">
                                        Maecenas malesuada malesuad ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="4">
                                        Nullam dignissim lectus diam, vitae elementum ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                            </Accordion>
                        </div>
                        <div className="col-lg-6">
                            <Accordion>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="0">
                                            Lorem ipsum dolor sit amet, consectetur adipisc ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="1">
                                        Vivamus feugiat, eros pretium porta ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="2">
                                        Donec molestie vitae turpis a efficitur ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="3">
                                        Maecenas malesuada malesuad ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="4">
                                        Nullam dignissim lectus diam, vitae elementum ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single-faq-wrap pt-120 pb-100">
                    <div className="container">
                    <div className="section-title text-center mb-70">
                        <h2>Update Question</h2>
                        <p>Nunc vulputate blandit commodo. Sed odio ex, egestas a ipsum non, commodo rutrum enim.<br /> Nullam luctus eros neque, et ultricies ex aliquet.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Accordion>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="0">
                                            Lorem ipsum dolor sit amet, consectetur adipisc ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="1">
                                        Vivamus feugiat, eros pretium porta ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="2">
                                        Donec molestie vitae turpis a efficitur ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="3">
                                        Maecenas malesuada malesuad ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="4">
                                        Nullam dignissim lectus diam, vitae elementum ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                            </Accordion>
                        </div>
                        <div className="col-lg-6">
                            <Accordion>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="0">
                                            Lorem ipsum dolor sit amet, consectetur adipisc ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="1">
                                        Vivamus feugiat, eros pretium porta ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="2">
                                        Donec molestie vitae turpis a efficitur ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="3">
                                        Maecenas malesuada malesuad ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="faq-accordion mb-20">
                                    <Card.Header className="panel-heading">
                                        <Accordion.Toggle  variant="link" eventKey="4">
                                        Nullam dignissim lectus diam, vitae elementum ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body><p>Vivamus feugiat, eros pretium porta porttitor, tortor ligula venenatis elit, ac porta turpis neque ut neque. In condimentum massa lacus, rutrum sollicitudin ligula lobortis ac. Aenean interdum accumsan leo, quis convallis nisi sagittis ac. Suspendisse malesuada ullamcorper fermentum. Vestibulum viverra interdum mauris.</p></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                            </Accordion>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
    
}

export default Faq