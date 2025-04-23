import React, { useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import { gsap } from 'gsap';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

// Styled Components
const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: '20px 0',
  background: 'rgba(0, 0, 0, 0.4)',
  borderTop: '2px solid',
  borderImage: 'linear-gradient(90deg, #FF0000, #FFD700, #FF0000) 1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  color: '#fff',
  fontFamily: '"Exo 2", sans-serif',
  zIndex: 10,
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, #FF0000, #FFD700, #FF0000)',
    animation: 'gradientLine 3s linear infinite',
    '@keyframes gradientLine': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: '15px 0',
    gap: '10px',
    flexWrap: 'wrap',
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  color: '#fff',
  textShadow: '0 0 5px rgba(255, 0, 0, 0.4)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const FooterLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  background: 'linear-gradient(45deg, #FFD700, #FFAA00)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    textShadow: '0 0 10px rgba(255, 215, 0, 0.8)',
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const FooterIconButton = styled(IconButton)(({ theme }) => ({
  color: '#FFD700',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
    filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.7))',
  },
  '& svg': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.down('sm')]: {
    '& svg': {
      fontSize: '1.2rem',
    },
  },
}));

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    const elements = footerRef.current?.querySelectorAll('a, p');
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, filter: 'blur(3px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <FooterContainer ref={footerRef}>
      <FooterText>© 2025 Enigma RPG</FooterText>
    </FooterContainer>
  );
};

export default Footer;