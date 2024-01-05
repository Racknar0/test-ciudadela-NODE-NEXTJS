import React from 'react';
import variables from '../styles/components/footer.module.scss';

const Footer = () => {
    return (
        <div className={variables.footer}>
            <h4>
                Desing by{' '}
                <a href="https://www.linkedin.com/in/camilotorresz/">
                    Camilo Torres
                </a>
            </h4>
        </div>
    );
};

export default Footer;
