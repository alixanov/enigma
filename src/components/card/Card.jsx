import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import donutchart from '../../assets/ton.webp';
import background from '../../assets/backiee-107146-landscape.jpg';

// Стили
const MainContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: 'calc(100vh - 80px)',
  padding: '80px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  color: '#fff',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '60px 15px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 15px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cinzel", serif',
  fontSize: '5rem',
  fontWeight: 900,
  color: '#fff',
  textShadow: '0 0 25px rgba(255, 0, 0, 0.9), 0 0 40px rgba(139, 0, 0, 0.6)',
  marginBottom: '40px',
  animation: 'pulseGlow 1.8s ease-in-out infinite',
  '@keyframes pulseGlow': {
    '0%, 100%': { textShadow: '0 0 25px rgba(255, 0, 0, 0.9), 0 0 40px rgba(139, 0, 0, 0.6)' },
    '50%': { textShadow: '0 0 40px rgba(255, 0, 0, 1), 0 0 60px rgba(139, 0, 0, 0.8)' },
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem',
    marginBottom: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
}));

const DonutChart = styled(Box)(({ theme }) => ({
  width: '400px',
  height: '400px',
  backgroundImage: `url(${donutchart})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '12px',
  boxShadow: '0 0 15px rgba(255, 0, 0, 0.7), 0 0 25px rgba(139, 0, 0, 0.5)',
  transition: 'all 0.3s ease',
  animation: 'pulseButton 2s ease-in-out infinite',
  '@keyframes pulseButton': {
    '0%, 100%': { boxShadow: '0 0 15px rgba(255, 0, 0, 0.7), 0 0 25px rgba(139, 0, 0, 0.5)' },
    '50%': { boxShadow: '0 0 20px rgba(255, 0, 0, 0.9), 0 0 30px rgba(139, 0, 0, 0.7)' },
  },
  '&:hover': {
    boxShadow: '0 0 25px rgba(255, 0, 0, 0.9), 0 0 35px rgba(139, 0, 0, 0.7)',
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '250px',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.4rem',
  color: '#fff',
  textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
  lineHeight: '1.8',
  fontWeight: 400,
  letterSpacing: '0.2px',
  marginTop: '30px',
  maxWidth: '600px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
    maxWidth: '90%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginTop: '20px',
  },
}));

const Particle = styled(Box)(({ theme, shape }) => ({
  position: 'absolute',
  width: shape === 'star' ? '12px' : '8px',
  height: shape === 'star' ? '12px' : '8px',
  background:
    shape === 'star'
      ? 'radial-gradient(circle, rgba(255, 0, 0, 0.9), rgba(255, 0, 0, 0))'
      : 'radial-gradient(circle, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0))',
  borderRadius: shape === 'star' ? '0' : '50%',
  clipPath:
    shape === 'star'
      ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
      : 'none',
  pointerEvents: 'none',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    width: shape === 'star' ? '8px' : '6px',
    height: shape === 'star' ? '8px' : '6px',
  },
}));

const Card = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const chartRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    // Анимация заголовка
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -80, scale: 0.6, filter: 'blur(5px)' },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.8,
        ease: 'power4.out',
      }
    );

    // Анимация изображения
    gsap.fromTo(
      chartRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2,
      }
    );

    // Анимация текста
    const descWords = descRef.current?.querySelectorAll('.word');
    gsap.fromTo(
      descWords,
      { opacity: 0, y: 20, filter: 'blur(2px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out',
        delay: 0.6,
      }
    );

    // Анимация фоновых частиц
    const particles = containerRef.current?.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: () => Math.random() * 200 - 100,
        y: () => Math.random() * 200 - 100,
        opacity: () => Math.random() * 0.5 + 0.3,
        scale: () => Math.random() * 0.5 + 0.5,
        rotation: () => Math.random() * 360,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.06,
      });
    });
  }, []);

  // Разделение текста на слова для анимации
  const descriptionText = '5% Treasury (Rewards) + Marketing | 95% Supply | Token Fees 0%';
  const descWords = descriptionText.split(' | ').map((phrase, index) => (
    <span key={index} className="word" style={{ display: 'block', margin: '10px 0' }}>
      {phrase}
    </span>
  ));

  return (
    <MainContainer ref={containerRef}>
      {/* Фоновые частицы */}
      {[...Array(30)].map((_, index) => (
        <Particle
          key={index}
          className="particle"
          shape={index % 2 === 0 ? 'circle' : 'star'}
          sx={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <Title ref={titleRef} variant="h1">
        TOKENOMICS
      </Title>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="#ff0000"
        scale={1.1}
        perspective={800}
      >
        <DonutChart ref={chartRef} />
      </Tilt>
      <Description ref={descRef}>{descWords}</Description>
    </MainContainer>
  );
};

export default Card;