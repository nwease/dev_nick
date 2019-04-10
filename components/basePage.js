import React from 'react';
import { Container } from 'reactstrap';

const BasePage = (props) => {
    return (
        <div className='base-page'>
            <Container>
                <BasePage>
                    {props.children}
                </BasePage>
            </Container>
        </div>
    );
};

export default BasePage;
