import { Button, Container } from '@mui/material';
import Login from '../components/Login';
import { useNavigate } from 'react-router';

const Auth = () => {
  const navigate = useNavigate();

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
      }}
    >
      <Login />
      <Button onClick={() => navigate('/scorecard')}>
        I just need a scorecard
      </Button>
    </Container>
  );
};

export default Auth;
