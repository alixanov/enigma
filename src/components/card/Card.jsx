import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import eliksir from '../../assets/84284de414497ce2ef363be771e2749c.jpg';
import eliksiir from '../../assets/dd25987b00d9bad3f00bc71fbfef9e7e.jpg';
import elikseeeer1 from '../../assets/a03c2fb66e4883deed4ac955a5d035cc.jpg';
import elikseeeer2 from '../../assets/b57d76972a1be12f721885fab3cd1fdd.jpg';
import eliksr from '../../assets/dcc528346369b649705ee5154b3b4138.jpg';
import eliks from '../../assets/c0f958a44a678fa3f26ea2b33020da55.jpg';
import background from '../../assets/backiee-107146-landscape.jpg';
import right from '../../assets/fb8bb6ad3b64f24b6505df388d240313.png';

// Массив карточек
const cards = [
  {
    image: eliksir,
    title: 'Wallet Connect',
    description: 'Set your wallet to start receiving rewards and manage your tokens.',
    backContent: 'Earn gold by connecting your wallet and engaging in battles or trading on the black market. Gold is your key to premium items and blockchain token exchanges.',
  },
  {
    image: eliksiir,
    title: 'Token Management',
    description: 'Deposit/withdraw tokens and view the current rate for gold.',
    backContent: 'Use gold to manage tokens, exchanging them for real-world value. Conquer dungeons and special events to boost your gold reserves.',
  },
  {
    image: elikseeeer1,
    title: 'Currency Exchange',
    description: 'Exchange your gold for silver and vice versa easily.',
    backContent: 'Gold powers your progression. Exchange it for silver or use it to unlock rare equipment and special abilities in the shop.',
  },
  {
    image: elikseeeer2,
    title: 'Quest Rewards',
    description: 'Every quest, dungeon, and raid offers a chance to earn additional gold rewards!',
    backContent: 'Embark on quests and raids to earn gold. Special events with unique mounts or items grant bonus rewards, enhancing your adventure.',
  },
  {
    image: eliksr,
    title: 'Item Trading',
    description: 'Buy and sell rare items on the marketplace to earn gold from other players.',
    backContent: 'Trade rare items on the black market to grow your gold reserves. Use gold to purchase premium upgrades and stand out in Trenches RPG.',
  },
  {
    image: eliks,
    title: 'Daily Bonuses',
    description: 'Log in daily to claim free gold bonuses and special rewards.',
    backContent: 'Daily logins reward you with gold and special items. Survive ambushes and participate in events to maximize your earnings.',
  },
];

// Стили
const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100vh',
  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  padding: '40px 20px',
  gap: '30px',
  alignItems: 'flex-start',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '20px 10px',
    alignItems: 'center',
  },
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '30px',
  width: '100%',
  flex: '0 0 75%',
  [theme.breakpoints.down('md')]: {
    flex: '0 0 100%',
    maxWidth: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const RightImage = styled(Box)(({ theme }) => ({
  flex: '0 0 25%',
  maxWidth: '400px',
  height: '830px', // Высота двух карточек (400px + 400px + gap 20px)
  backgroundImage: `url(${right})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '16px',
  // backgroundColor:"rgba(0, 0, 0, 0.7)",
  boxShadow: '0 0 25px rgba(255, 0, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 35px rgba(255, 0, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)',
  },
  [theme.breakpoints.down('md')]: {
    flex: '0 0 100%',
    maxWidth: '350px',
    height: '600px', // Адаптировано для средних экранов
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '250px',
    height: '400px', // Уменьшено для мобильных
    display: 'block',
  },
}));

const CardWrapper = styled(Box)(({ theme }) => ({
  perspective: '100%',
  width: '100%',
  height: '400px',
  position: 'relative',
  cursor: 'pointer',
  '&:hover .card-inner': {
    transform: 'rotateY(180deg) scale(1.05)',
    boxShadow: '0 0 30px rgba(255, 0, 0, 0.8), 0 0 50px rgba(255, 215, 0, 0.4)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '350px',
  },
}));

const CardInner = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s ease, box-shadow 0.3s ease',
  borderRadius: '16px',
  boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)',
}));

const CardFace = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  background: 'linear-gradient(135deg, rgba(20, 0, 0, 0.8), rgba(50, 0, 0, 0.6))',
  border: '2px solid transparent',
  borderImage: 'linear-gradient(45deg, #FF0000, #FFD700) 1',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
  },
}));

const CardFront = styled(CardFace)(({ theme }) => ({
  background: `linear-gradient(135deg, rgba(20, 0, 0, 0.8), rgba(50, 0, 0, 0.6)), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M50 10L61 35L90 35L65 50L75 80L50 65L25 80L35 50L10 35L39 35Z" fill="rgba(255,215,0,0.2)"/></svg>') repeat`,
}));

const CardBack = styled(CardFace)(({ theme }) => ({
  transform: 'rotateY(180deg)',
  background: `linear-gradient(135deg, rgba(30, 0, 0, 0.9), rgba(60, 0, 0, 0.7)), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="none" stroke="rgba(255,215,0,0.3)" stroke-width="2"/></svg>') repeat`,
}));




const CardImage = styled(Box)(({ theme, image }) => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '12px',
  marginBottom: '10px',
  boxShadow: '0 0 15px rgba(255, 0, 0, 0.4)',
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Exo 2", sans-serif',
  fontSize: '1.8rem',
  fontWeight: 700,
  background: 'linear-gradient(45deg, #FFD700, #FFAA00)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 10px rgba(255, 215, 0, 0.7)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Condensed", sans-serif',
  fontSize: '1.2rem',
  color: '#FFFFFF',
  textShadow: '0 0 8px rgba(255, 0, 0, 0.4)',
  lineHeight: '1.5',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const CardBackContent = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Condensed", sans-serif',
  fontSize: '1.1rem',
  color: '#FFFFFF',
  textShadow: '0 0 8px rgba(255, 0, 0, 0.4)',
  lineHeight: '1.6',
  textAlign: 'left',
  padding: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const Particle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '8px',
  height: '8px',
  background: 'radial-gradient(circle, rgba(255, 215, 0, 0.9), rgba(255, 215, 0, 0))',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 10,
  [theme.breakpoints.down('sm')]: {
    width: '6px',
    height: '6px',
  },
}));

const Card = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseEnter = (index) => {
    // Анимация частиц при наведении
    const card = containerRef.current.querySelectorAll('.card-wrapper')[index];
    const rect = card.getBoundingClientRect();
    const particles = [];
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${rect.width / 2}px`;
      particle.style.top = `${rect.height / 2}px`;
      card.appendChild(particle);
      particles.push(particle);
    }

    gsap.to(particles, {
      x: () => Math.random() * 100 - 50,
      y: () => Math.random() * 100 - 50,
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: 'power3.out',
      onComplete: () => particles.forEach((p) => p.remove()),
    });
  };

  useEffect(() => {
    // Анимация появления карточек
    const cardElements = containerRef.current.querySelectorAll('.card-wrapper');
    gsap.fromTo(
      cardElements,
      { opacity: 0, y: 50, scale: 0.8, filter: 'blur(5px)' },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      }
    );

    // Анимация появления правого изображения
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100, filter: 'blur(5px)' },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <MainContainer>
      <CardsContainer ref={containerRef}>
        {cards.map((card, index) => (
          <CardWrapper
            key={index}
            className="card-wrapper"
            onMouseEnter={() => handleMouseEnter(index)
              
            }
          >
            <CardInner className="card-inner"
     
            >
              <CardFront>
                <CardImage image={card.image} />
                <CardTitle variant="h3">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardFront>
              <CardBack>
                <CardTitle variant="h3">{card.title}</CardTitle>
                <CardBackContent>{card.backContent}</CardBackContent>
              </CardBack>
            </CardInner>
          </CardWrapper>
        ))}
      </CardsContainer>
      <RightImage ref={imageRef} />
      <style>
        {`
          .particle {
            position: absolute;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.9), rgba(255, 215, 0, 0));
            border-radius: 50%;
            pointer-events: none;
            z-index: 10;
          }
          @media (max-width: 600px) {
            .particle {
              width: 6px;
              height: 6px;
            }
          }
        `}
      </style>
    </MainContainer>
  );
};

export default Card;