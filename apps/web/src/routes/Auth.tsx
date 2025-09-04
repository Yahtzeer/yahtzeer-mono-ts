import { Button, Container } from '@mui/material';
import Login from '../components/Login';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Register from '../components/Register';

const Auth = () => {
  const navigate = useNavigate();
  const [visibleForm, setVisibleForm] = useState<'login' | 'register'>('login');

  const changeForm = () =>
    setVisibleForm((prev) => (prev === 'login' ? 'register' : 'login'));

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {visibleForm === 'login' ? (
        <Login changeForm={changeForm} />
      ) : (
        <Register changeForm={changeForm} />
      )}
      <Button onClick={() => navigate('/scorecard')}>
        I just need a scorecard
      </Button>
    </Container>
  );
};

export default Auth;
