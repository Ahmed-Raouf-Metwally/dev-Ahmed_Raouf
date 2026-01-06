import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { KeyboardArrowUp } from '@mui/icons-material';

const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 90%;
  bottom: 80px;
  height: 20px;
  font-size: 3rem;
  z-index: 1000;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  
  @media (max-width: 850px) {
    left: 85%;
  }
`;

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <Button
            onClick={scrollToTop}
            style={{ display: visible ? 'flex' : 'none' }}
        >
            <KeyboardArrowUp style={{ fontSize: '3rem', background: '#854CE6', borderRadius: '50%', color: 'white', padding: '5px' }} />
        </Button>
    );
};

export default ScrollToTop;
