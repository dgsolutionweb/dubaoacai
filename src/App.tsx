import { ThemeProvider } from '@mui/material/styles';
import { Card, Typography, Box, Button, Chip } from '@mui/material';
import { WhatsApp, Instagram, AccessTime, DeliveryDining, Star, SaveAlt, Share, Code } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { theme } from './theme';
import acaiLogo from './assets/acai.png';

const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionChip = motion(Chip);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      type: "tween"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      mass: 0.5
    }
  }
};

const BackgroundLogo = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background-image: url(${acaiLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
  filter: blur(1px);
  transition: all 0.5s ease-in-out;
`;

// Styles
const cardStyles = {
  maxWidth: 400,
  m: 2,
  p: 4,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(74, 0, 114, 0.9), rgba(44, 0, 69, 0.95))',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease-in-out',
    background: 'linear-gradient(135deg, rgba(74, 0, 114, 0.95), rgba(44, 0, 69, 0.98))',
    '& .background-logo': {
      opacity: 0.04,
      filter: 'blur(0.5px)',
    }
  }
};

const whatsappButtonStyles = {
  borderRadius: 2,
  px: 2,
  py: 1,
  textTransform: 'none',
  fontWeight: 500,
  background: 'linear-gradient(45deg, #25D366, #128C7E)',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'linear-gradient(45deg, #128C7E, #075E54)',
    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.3)',
    transform: 'translateY(-2px)',
  },
  '&:active': {
    transform: 'translateY(1px)',
  }
};

const instagramButtonStyles = {
  borderRadius: 2,
  px: 2,
  py: 1,
  textTransform: 'none',
  fontWeight: 500,
  background: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 4px 15px rgba(131, 58, 180, 0.2)',
  '&:hover': {
    background: 'linear-gradient(45deg, #C13584, #E1306C, #F56040)',
    boxShadow: '0 6px 20px rgba(131, 58, 180, 0.3)',
  }
};

const developerButtonContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  mt: 4,
  opacity: 0.7,
  gap: 1,
  alignItems: 'center',
  background: 'rgba(48, 0, 73, 0.3)',
  backdropFilter: 'blur(5px)',
  borderRadius: 2,
  p: 0.5,
  width: 'fit-content',
  mx: 'auto'
};

const developerButtonStyles = {
  textTransform: 'none',
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.9)',
  display: 'flex',
  alignItems: 'center',
  py: 0.5,
  px: 1,
  minWidth: 'unset',
  letterSpacing: '0.3px',
  '&:hover': {
    color: '#fff',
    backgroundColor: 'transparent'
  }
};

function App() {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:DuBom Açaí
TEL:+5517992314750
URL:https://instagram.com/dubomacai10
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dubom-acai.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'DuBom Açaí',
      text: '🍇 Um sabor de açaí, difícil de esquecer! Conheça o DuBom Açaí - O delivery mais seguro da cidade! 🛵✨',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Erro ao compartilhar:', error);
          navigator.clipboard.writeText(shareData.text + '\n' + shareData.url);
          alert('Link e mensagem copiados para a área de transferência!');
        }
      }
    } else {
      navigator.clipboard.writeText(shareData.text + '\n' + shareData.url);
      alert('Link e mensagem copiados para a área de transferência!');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={cardStyles}
        >
          <BackgroundLogo
            className="background-logo"
            animate={{ 
              scale: [1, 1.02, 1] 
            }}
            transition={{ 
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Elementos decorativos */}
            <Box sx={{ position: 'absolute', top: -20, right: -20 }}>
              <MotionChip
                icon={<Star />}
                label="Premium"
                color="secondary"
                sx={{ transform: 'rotate(15deg)' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              />
            </Box>

            <MotionBox
              component="img"
              src={acaiLogo}
              alt="DuBom Açaí Logo"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8
              }}
              sx={{
                width: 150,
                height: 150,
                margin: '0 auto',
                display: 'block',
                borderRadius: '50%',
                border: 4,
                borderColor: 'secondary.main',
                boxShadow: '0 0 20px rgba(255, 20, 147, 0.3)',
              }}
            />

            <MotionTypography
              variant="h1"
              align="center"
              sx={{ mt: 2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              DuBom Açaí
            </MotionTypography>

            <MotionTypography
              variant="body1"
              align="center"
              sx={{ 
                mt: 1,
                fontStyle: 'italic',
                background: 'linear-gradient(45deg, #FF69B4, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Um sabor de açaí, difícil de esquecer
            </MotionTypography>

            <MotionBox
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{ mt: 4 }}
            >
              <MotionBox
                variants={itemVariants}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <AccessTime sx={{ color: 'secondary.light', mr: 2 }} />
                <MotionTypography>Horário de Funcionamento: das 15:00h às 23:00H</MotionTypography>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <DeliveryDining sx={{ color: 'secondary.light', mr: 2 }} />
                <MotionTypography>O delivery mais seguro da cidade!</MotionTypography>
              </MotionBox>
            </MotionBox>

            <MotionBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 4,
                mb: 2
              }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Button
                component={motion.a}
                href="https://wa.me/5517992314750"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                startIcon={<WhatsApp />}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Fazer pedido pelo WhatsApp"
                sx={whatsappButtonStyles}
              >
                Faça já seu pedido!
              </Button>

              <Button
                component={motion.a}
                href="https://instagram.com/dubomacai10"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                startIcon={<Instagram />}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Seguir no Instagram"
                sx={instagramButtonStyles}
              >
                Siga a gente no Instagram!
              </Button>
            </MotionBox>

            <MotionBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 3
              }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Button
                component={motion.button}
                variant="text"
                startIcon={<SaveAlt />}
                onClick={handleSaveContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }
                }}
              >
                Salvar Contato
              </Button>

              <Button
                component={motion.button}
                variant="text"
                startIcon={<Share />}
                onClick={handleShare}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    color: 'rgba(255, 255, 255, 1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }
                }}
              >
                Compartilhar
              </Button>
            </MotionBox>

            {/* Botão do Desenvolvedor */}
            <MotionBox
              sx={developerButtonContainerStyles}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.5 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
            >
              <Button
                component={motion.a}
                href="https://wa.me/5517999754390"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                size="small"
                startIcon={
                  <Code sx={{ 
                    fontSize: 18, 
                    color: '#9c27b0',
                    mr: 0.5 
                  }} />
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={developerButtonStyles}
              >
                Junte-se à DGSolution WEB
              </Button>
            </MotionBox>
          </Box>
        </MotionCard>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
