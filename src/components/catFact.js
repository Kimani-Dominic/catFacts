import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  textAlign: 'center',
  paddingTop: 8,
  backgroundImage: 'url("/cat.jpeg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '120vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledTitle = styled(Typography)({
  marginBottom: 4,
  color: 'dark',
});

const StyledSubtitle = styled(Typography)({
  marginBottom: 3,
  color: 'white',
});

const StyledButton = styled(Button)({
  marginTop: 2,
});

const StyledCatFact = styled(Typography)({
  marginTop: 3,
  fontStyle: 'italic',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '1rem',
  borderRadius: '30px',
});

function CatFactPage() {
  const [catFact, setCatFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      console.log('Response:', response);
      setCatFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  console.log('Cat Fact:', catFact);

  return (
    <StyledContainer>
      <StyledTitle variant="h4">
        Welcome to the Cat Fact Page!
      </StyledTitle>
      <StyledSubtitle variant="body1">
        Get ready to learn some interesting cat facts.
      </StyledSubtitle>
      <StyledButton onClick={fetchCatFact} variant="contained" color="primary">
        Get Cat Fact
      </StyledButton>
      {catFact && (
        <StyledCatFact variant="body3">
          Cat Fact: {catFact}
        </StyledCatFact>
      )}
    </StyledContainer>
  );
}

export default CatFactPage;
