import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Card, CardContent as MuiCardContent, Grid, Button } from '@mui/material';
import { gsap } from 'gsap';
import gettingBackground from '../../assets/backiee-121554-landscape.jpg';
import map from '../../assets/map.png';
import { Fireplace, PersonAdd, Explore, Group } from '@mui/icons-material';

// Styled Components
const GettingContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: `url(${gettingBackground}) no-repeat center center`,
  backgroundSize: 'cover',
  minHeight: '100vh',
  padding: '4vw 2vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 10, 20, 0.35)',
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    padding: '3vw 1.5vw',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2.5vw 1vw',
  },
  '@media (min-width: 1920px)': {
    padding: '80px 40px',
  },
}));

const Particle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '0.5vw',
  height: '0.5vw',
  background: 'radial-gradient(circle, #ffd700, #ff4500, transparent)',
  borderRadius: '50%',
  zIndex: 2,
  boxShadow: '0 0 1.5vw #ffd700, 0 0 1vw #ff4500',
  [theme.breakpoints.down('sm')]: {
    width: '4px',
    height: '4px',
    boxShadow: '0 0 10px #ffd700, 0 0 8px #ff4500',
  },
  '@media (min-width: 1920px)': {
    width: '10px',
    height: '10px',
    boxShadow: '0 0 25px #ffd700, 0 0 20px #ff4500',
  },
}));

const GlowRay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '0.2vw',
  height: '8vw',
  background: 'linear-gradient(to top, #ffd700, transparent)',
  borderRadius: '2px',
  zIndex: 2,
  transformOrigin: 'bottom',
  boxShadow: '0 0 1.5vw #ffd700',
  [theme.breakpoints.down('sm')]: {
    width: '2px',
    height: '80px',
    boxShadow: '0 0 15px #ffd700',
  },
  '@media (min-width: 1920px)': {
    width: '4px',
    height: '150px',
    boxShadow: '0 0 30px #ffd700',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  width: '100%',
  maxWidth: '1920px',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '90vw',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '95vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const MapImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '25vw',
  marginLeft:"100px",
  borderRadius: '1.5vw',
  border: '3px solid rgba(255, 215, 0, 0.6)',
  boxShadow: '0 0 2vw rgba(255, 215, 0, 0.6), 0 0 3vw rgba(255, 69, 0, 0.4)',
  [theme.breakpoints.down('md')]: {
    maxWidth: '40vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    marginBottom: '2vw',
  },
  '@media (min-width: 1920px)': {
    maxWidth: '600px',
    borderRadius: '25px',
    boxShadow: '0 0 40px rgba(255, 215, 0, 0.7), 0 0 60px rgba(255, 69, 0, 0.5)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '4vw',
  fontWeight: 900,
  color: '#fff',
  textAlign: 'center',
  marginBottom: '2.5vw',
  background: 'linear-gradient(45deg, #ff4500, #ffd700)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 2vw rgba(255, 69, 0, 0.9), 0 0 4vw rgba(255, 215, 0, 0.6)',
  [theme.breakpoints.down('lg')]: {
    fontSize: '3.5vw',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '5vw',
    marginBottom: '2vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '6vw',
    marginBottom: '1.5vw',
  },
  '@media (min-width: 1920px)': {
    fontSize: '5.5rem',
    marginBottom: '50px',
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.2vw',
  color: '#e0e0e0',
  textAlign: 'center',
  marginBottom: '1.5vw',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2vw',
  },
  '@media (min-width: 1920px)': {
    fontSize: '1.5rem',
    marginBottom: '25px',
  },
}));

const GoldText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.2vw',
  color: '#ffd700',
  textAlign: 'center',
  marginBottom: '2vw',
  textShadow: '0 0 1vw rgba(255, 215, 0, 0.6)',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2vw',
  },
  '@media (min-width: 1920px)': {
    fontSize: '1.5rem',
    marginBottom: '40px',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  display: 'block',
  margin: '0 auto 2.5vw',
  padding: '1vw 2vw',
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '1vw',
  fontWeight: 700,
  color: '#fff',
  background: 'linear-gradient(45deg, #ff4500, #ffd700)',
  borderRadius: '2vw',
  textTransform: 'none',
  boxShadow: '0 0 1.5vw rgba(255, 69, 0, 0.7), 0 0 2vw rgba(255, 215, 0, 0.5)',
  '&:hover': {
    background: 'linear-gradient(45deg, #ffd700, #ff4500)',
    boxShadow: '0 0 2vw rgba(255, 69, 0, 0.9), 0 0 3vw rgba(255, 215, 0, 0.7)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '1.2vw 2.4vw',
    fontSize: '1.2vw',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5vw 3vw',
    fontSize: '2vw',
  },
  '@media (min-width: 1920px)': {
    padding: '16px 32px',
    fontSize: '1.2rem',
    borderRadius: '35px',
    marginBottom: '50px',
  },
}));

const StepCard = styled(Card)(({ theme }) => ({
  background: 'rgba(20, 20, 30, 0.7)',
  backdropFilter: 'blur(14px)',
  borderRadius: '1.5vw',
  border: '1px solid rgba(255, 215, 0, 0.4)',
  boxShadow: '0 0.5vw 1.5vw rgba(0, 0, 0, 0.5), 0 0 1.5vw rgba(255, 215, 0, 0.4)',
  transition: 'all 0.3s ease',
  transform: 'translateZ(0)',
  '&:hover': {
    transform: 'translateY(-0.6vw) scale(1.03)',
    boxShadow: '0 0.8vw 2vw rgba(0, 0, 0, 0.6), 0 0 2vw rgba(255, 215, 0, 0.6)',
    borderColor: 'rgba(255, 215, 0, 0.7)',
  },
  [theme.breakpoints.down('md')]: {
    margin: '1vw auto',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0.5vw auto',
  },
  '@media (min-width: 1920px)': {
    borderRadius: '25px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.5)',
    '&:hover': {
      transform: 'translateY(-12px) scale(1.05)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 215, 0, 0.7)',
    },
  },
}));

const StepNumber = styled(Typography)(({ theme }) => ({
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '2vw',
  fontWeight: 800,
  color: '#ffd700',
  marginBottom: '0.8vw',
  textShadow: '0 0 1vw rgba(255, 215, 0, 0.7)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3vw',
  },
  '@media (min-width: 1920px)': {
    fontSize: '2.5rem',
    marginBottom: '12px',
    textShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
  },
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '1.3vw',
  fontWeight: 700,
  color: '#fff',
  marginBottom: '0.8vw',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2vw',
  },
  '@media (min-width: 1920px)': {
    fontSize: '1.6rem',
    marginBottom: '12px',
  },
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.9vw',
  color: '#e0e0e0',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5vw',
  },
  '@media (min-width: 1920px)': {
    fontSize: '1.1rem',
  },
}));

const StepIcon = styled(Box)(({ theme }) => ({
  color: '#ffd700',
  marginBottom: '1vw',
  '& svg': {
    fontSize: '2vw',
    filter: 'drop-shadow(0 0 0.8vw rgba(255, 215, 0, 0.6))',
  },
  [theme.breakpoints.down('md')]: {
    '& svg': {
      fontSize: '2.5vw',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '& svg': {
      fontSize: '3vw',
    },
  },
  '@media (min-width: 1920px)': {
    marginBottom: '15px',
    '& svg': {
      fontSize: '2.5rem',
      filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.7))',
    },
  },
}));

const CustomCardContent = styled(MuiCardContent)(({ theme }) => ({
  padding: '1.5vw',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '2vw',
  },
  '@media (min-width: 1920px)': {
    padding: '25px',
  },
}));

const Getting = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const goldRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRefs = useRef([]);
  const mapRef = useRef(null);
  const rayRefs = useRef([]);

  const steps = [
    {
      number: '1',
      title: 'Invite the Bot or Join Discord',
      description: 'Easily invite our bot to your own server or join our official Discord to start your journey.',
      icon: <Fireplace />,
    },
    {
      number: '2',
      title: 'Create Your Character',
      description: 'Once you join, your character is automatically created with basic gear plus starting currency and XP.',
      icon: <PersonAdd />,
    },
    {
      number: '3',
      title: 'Begin Your Adventure',
      description: 'Use /adventure to start random quests. Gain XP, silver, gold, lootboxes, and more.',
      icon: <Explore />,
    },
    {
      number: '4',
      title: 'Dungeons, Raids & Duels',
      description: 'Challenge yourself with /dungeon (full health!), team raids, or duels for greater rewards.',
      icon: <Group />,
    },
  ];

  const descriptionText = "Embark on an epic journey with our Discord bot!";
  const goldText = "Collect gold, XP, and legendary loot to rise to glory!";
  const descWords = descriptionText.split(' ').map((word, index) => (
    <span key={index} className="word" style={{ display: 'inline-block', marginRight: '0.5vw' }}>
      {word}
    </span>
  ));
  const goldWords = goldText.split(' ').map((word, index) => (
    <span key={index} className="word" style={{ display: 'inline-block', marginRight: '0.5vw' }}>
      {word}
    </span>
  ));

  useEffect(() => {
    const particleCount = 60;
    const rayCount = 12;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      gsap.to(mapRef.current, {
        x: x * 0.6,
        y: y * 0.6,
        rotation: x * 0.06,
        duration: 0.6,
        ease: 'power2.out',
      });
      rayRefs.current.forEach((ray) => {
        gsap.to(ray, {
          x,
          y,
          duration: 0.6,
          ease: 'power2.out',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    rayRefs.current.forEach((ray, index) => {
      gsap.to(ray, {
        rotation: index % 2 === 0 ? 360 : -360,
        opacity: 0.5 + Math.random() * 0.4,
        duration: 5 + Math.random() * 2,
        repeat: -1,
        ease: 'none',
        delay: index * 0.5,
      });
    });

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -100, scale: 0.5, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 2,
        ease: 'power4.out',
      }
    );

    const descWords = descRef.current?.querySelectorAll('.word');
    gsap.fromTo(
      descWords,
      { opacity: 0, y: 25, filter: 'blur(3px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.04,
        ease: 'power3.out',
        delay: 0.7,
      }
    );

    const goldWords = goldRef.current?.querySelectorAll('.word');
    gsap.fromTo(
      goldWords,
      { opacity: 0, y: 25, filter: 'blur(3px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.04,
        ease: 'power3.out',
        delay: 1,
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 40, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 1.3,
      }
    );

    const vwToPx = (vw) => (vw * window.innerWidth) / 100;
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: () => Math.random() * vwToPx(15) - vwToPx(7.5),
        y: () => Math.random() * vwToPx(15) - vwToPx(7.5),
        opacity: () => Math.random() * 0.6 + 0.4,
        scale: () => Math.random() * 0.6 + 0.6,
        rotation: () => Math.random() * 360,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.07,
      });
    });

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, x: -200, scale: 0.7, filter: 'blur(12px)' },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.7,
        ease: 'power4.out',
        delay: 1.6,
      }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 200,
          scale: 0.85,
          rotation: index % 2 === 0 ? 20 : -20,
          filter: 'blur(12px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
          delay: index * 0.25 + 2.2,
        }
      );
    });

    return () => {
      particles.forEach((particle) => particle.remove());
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.killTweensOf([titleRef.current, descWords, goldWords, buttonRef.current, particles, mapRef.current, cardRefs.current, rayRefs.current]);
    };
  }, []);

  return (
    <GettingContainer className="getting__container" ref={containerRef}>
      {[...Array(12)].map((_, index) => (
        <GlowRay
          key={`ray-${index}`}
          ref={(el) => (rayRefs.current[index] = el)}
          sx={{ left: `${(index * 8 + 4)}%`, bottom: 0 }}
        />
      ))}
      <ContentWrapper>
        <SectionTitle variant="h2" ref={titleRef}>
          Getting Started
        </SectionTitle>
        <DescriptionText ref={descRef}>{descWords}</DescriptionText>
        <GoldText ref={goldRef}>{goldWords}</GoldText>
        <ActionButton ref={buttonRef}>Join the Adventure</ActionButton>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <MapImage src={map} alt="Map" ref={mapRef} />
          </Grid>
          <Grid item xs={12} md={8} lg={9} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Grid container spacing={2} sx={{ maxWidth: '50vw', flexWrap: 'wrap' }}>
              {steps.map((step, index) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                  <StepCard
                    ref={(el) => (cardRefs.current[index] = el)}
                    sx={{ maxWidth: '20vw', margin: '0 auto' }}
                  >
                    <CustomCardContent>
                      <StepIcon>{step.icon}</StepIcon>
                      <StepNumber variant="h3">{step.number}</StepNumber>
                      <StepTitle variant="h4">{step.title}</StepTitle>
                      <StepDescription variant="body1">{step.description}</StepDescription>
                    </CustomCardContent>
                  </StepCard>
                </Grid>
              ))}
            </Grid>


          </Grid>
        </Grid>
      </ContentWrapper>
    </GettingContainer>
  );
};

export default Getting;