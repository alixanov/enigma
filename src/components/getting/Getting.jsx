import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Card, CardContent as MuiCardContent, Grid, Button } from '@mui/material';
import { gsap } from 'gsap';
import gettingBackground from '../../assets/backiee-121554-landscape.jpg';
import map from '../../assets/assets_task_01jqytf21ze7f87jy9njb3nh3c_img_0.webp';
import { Fireplace, PersonAdd, Explore, Group } from '@mui/icons-material';

// Styled Components
const GettingContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: `url(${gettingBackground}) no-repeat center center`,
  backgroundSize: 'cover',
  minHeight: '100vh',
  padding: '60px 20px',
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
    backgroundColor: 'rgba(10, 10, 20, 0.35)', // Тёмный оверлей
    zIndex: 1,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 10px',
  },
}));

const Particle = styled(Box)({
  position: 'absolute',
  width: '8px',
  height: '8px',
  background: 'radial-gradient(circle, #ffd700, #ff4500, transparent)',
  borderRadius: '50%',
  zIndex: 2,
  boxShadow: '0 0 20px #ffd700, 0 0 15px #ff4500', // Усиленное свечение
});

const GlowRay = styled(Box)({
  position: 'absolute',
  width: '3px',
  height: '120px', // Более длинные лучи
  background: 'linear-gradient(to top, #ffd700, transparent)',
  borderRadius: '2px',
  zIndex: 2,
  transformOrigin: 'bottom',
  boxShadow: '0 0 25px #ffd700', // Усиленное свечение
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  width: '100%',
  maxWidth: '1400px', // Увеличено для левого края картинки
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const MapImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '450px', // Увеличен размер
  borderRadius: '20px',
  border: '3px solid rgba(255, 215, 0, 0.6)', // Золотая рамка
  boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), 0 0 50px rgba(255, 69, 0, 0.4)', // Усиленное свечение
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    marginBottom: '20px',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '4.5rem', // Увеличен размер
  fontWeight: 900,
  color: '#fff',
  textAlign: 'center',
  marginBottom: '40px',
  background: 'linear-gradient(45deg, #ff4500, #ffd700)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 30px rgba(255, 69, 0, 0.9), 0 0 60px rgba(255, 215, 0, 0.6)', // Усиленное свечение
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.8rem',
    marginBottom: '30px',
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.3rem',
  color: '#e0e0e0',
  textAlign: 'center',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const GoldText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.3rem',
  color: '#ffd700',
  textAlign: 'center',
  marginBottom: '30px',
  textShadow: '0 0 15px rgba(255, 215, 0, 0.6)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  display: 'block',
  margin: '0 auto 40px',
  padding: '14px 28px',
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '1.1rem',
  fontWeight: 700,
  color: '#fff',
  background: 'linear-gradient(45deg, #ff4500, #ffd700)',
  borderRadius: '30px',
  textTransform: 'none',
  boxShadow: '0 0 25px rgba(255, 69, 0, 0.7), 0 0 35px rgba(255, 215, 0, 0.5)', // Усиленное свечение
  '&:hover': {
    background: 'linear-gradient(45deg, #ffd700, #ff4500)',
    boxShadow: '0 0 35px rgba(255, 69, 0, 0.9), 0 0 50px rgba(255, 215, 0, 0.7)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 24px',
    fontSize: '0.9rem',
  },
}));

const StepCard = styled(Card)(({ theme }) => ({
  background: 'rgba(20, 20, 30, 0.7)', // Glassmorphism
  backdropFilter: 'blur(14px)', // Усиленное размытие
  borderRadius: '20px',
  border: '1px solid rgba(255, 215, 0, 0.4)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 215, 0, 0.4)', // Усиленное свечение
  transition: 'all 0.3s ease',
  transform: 'translateZ(0)',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.03)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 215, 0, 0.6)',
    borderColor: 'rgba(255, 215, 0, 0.7)',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px auto',
  },
}));

const StepNumber = styled(Typography)(({ theme }) => ({
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '2.2rem',
  fontWeight: 800,
  color: '#ffd700',
  marginBottom: '10px',
  textShadow: '0 0 15px rgba(255, 215, 0, 0.7)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '1.4rem',
  fontWeight: 700,
  color: '#fff',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.95rem',
  color: '#e0e0e0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const StepIcon = styled(Box)(({ theme }) => ({
  color: '#ffd700',
  marginBottom: '12px',
  '& svg': {
    fontSize: '2.2rem',
    filter: 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.6))',
  },
  [theme.breakpoints.down('sm')]: {
    '& svg': {
      fontSize: '1.8rem',
    },
  },
}));

const CustomCardContent = styled(MuiCardContent)({
  padding: '20px',
  textAlign: 'center',
});

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

  // Разбиваем текст на слова
  const descriptionText = "Embark on an epic journey with our Discord bot!";
  const goldText = "Collect gold, XP, and legendary loot to rise to glory!";
  const descWords = descriptionText.split(' ').map((word, index) => (
    <span key={index} className="word" style={{ display: 'inline-block', marginRight: '6px' }}>
      {word}
    </span>
  ));
  const goldWords = goldText.split(' ').map((word, index) => (
    <span key={index} className="word" style={{ display: 'inline-block', marginRight: '6px' }}>
      {word}
    </span>
  ));

  useEffect(() => {
    const particleCount = 50; // Увеличено для роскоши
    const rayCount = 10; // Больше лучей
    const particles = [];

    // Создание частиц (искр)
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    // Интерактивное свечение и параллакс для картинки
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      gsap.to(mapRef.current, {
        x: x * 0.5, // Лёгкий параллакс
        y: y * 0.5,
        rotation: x * 0.05,
        duration: 0.5,
        ease: 'power2.out',
      });
      rayRefs.current.forEach((ray) => {
        gsap.to(ray, {
          x,
          y,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Анимация лучей
    rayRefs.current.forEach((ray, index) => {
      gsap.to(ray, {
        rotation: index % 2 === 0 ? 360 : -360,
        opacity: 0.5 + Math.random() * 0.3,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        ease: 'none',
        delay: index * 0.4,
      });
    });

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

    // Анимация описания
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

    // Анимация секции про золото
    const goldWords = goldRef.current?.querySelectorAll('.word');
    gsap.fromTo(
      goldWords,
      { opacity: 0, y: 20, filter: 'blur(2px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out',
        delay: 0.9,
      }
    );

    // Анимация кнопки
    gsap.fromTo(
      buttonRef.current,
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

    // Анимация частиц
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

    // Анимация картинки
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, x: -150, scale: 0.8, filter: 'blur(10px)' },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power4.out',
        delay: 1.5,
      }
    );

    // Анимация карточек
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 150,
          scale: 0.9,
          rotation: index % 2 === 0 ? 15 : -15,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.2 + 2,
        }
      );
    });

    // Cleanup
    return () => {
      particles.forEach((particle) => particle.remove());
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.killTweensOf([titleRef.current, descWords, goldWords, buttonRef.current, particles, mapRef.current, cardRefs.current, rayRefs.current]);
    };
  }, []);

  return (
    <GettingContainer className="getting__container" ref={containerRef}>
      {[...Array(10)].map((_, index) => (
        <GlowRay
          key={`ray-${index}`}
          ref={(el) => (rayRefs.current[index] = el)}
          sx={{ left: `${(index * 10 + 5)}%`, bottom: 0 }}
        />
      ))}
      <ContentWrapper>
        <SectionTitle variant="h2" ref={titleRef}>
          Getting Started
        </SectionTitle>
        <DescriptionText ref={descRef}>{descWords}</DescriptionText>
        <GoldText ref={goldRef}>{goldWords}</GoldText>
        <ActionButton ref={buttonRef}>Join the Adventure</ActionButton>
        <Grid container spacing={3} justifyContent="flex-start">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <MapImage src={map} alt="Map" ref={mapRef} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {steps.slice(0, 2).map((step, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <StepCard
                    ref={(el) => (cardRefs.current[index] = el)}
                    sx={{ maxWidth: 400, margin: '0 auto' }}
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
            <Grid container spacing={3} sx={{ mt: 3, justifyContent: 'flex-end' }}>
              {steps.slice(2, 4).map((step, index) => (
                <Grid item xs={12} sm={6} key={index + 2}>
                  <StepCard
                    ref={(el) => (cardRefs.current[index + 2] = el)}
                    sx={{ maxWidth: 400, margin: '0 auto' }}
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