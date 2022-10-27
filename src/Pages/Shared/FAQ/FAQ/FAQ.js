import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div style={{ width: '700px', marginLeft: '25%' }}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>FAQ#1</Accordion.Header>
                    <Accordion.Body>
                        Its a fully responsive website. build with react, nodejs, express js. i  created few api and use those data in my website. 
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>FAQ#2</Accordion.Header>
                    <Accordion.Body>
                        Firstly, i identify the main aspects of this assignment. and i start one by one.  
                        here is lots of tiny issue. i have tried to solve every issue and hopefully i succeed.
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    );
};

export default FAQ;