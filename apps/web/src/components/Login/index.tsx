import { Button, Divider, Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  useLoginMutation,
  type AuthInput,
} from '../../redux/serivces/authService';
import { useNavigate } from 'react-router';
import Center from '../common/Center';

const initialValues: AuthInput = {
  username: '',
  password: '',
};

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: 2,
  gap: 16,
});

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (vals) => {
        const { data } = await login(vals);

        if (data) {
          navigate('/', { replace: true });
        }
      },
    });

  return (
    <Paper
      elevation={2}
      sx={{
        height: '50%',
        width: '60%',
        p: 4,
      }}
    >
      <Center sx={{ flexDirection: 'column', gap: 2 }}>
        <Form onSubmit={handleSubmit}>
          <TextField
            name="username"
            label={t('components.auth.common.username')}
            margin="normal"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
            fullWidth
          />
          <TextField
            name="password"
            label={t('components.auth.common.password')}
            margin="normal"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            fullWidth
          />
          <Button variant="contained" loading={isLoading} type="submit">
            {t('components.auth.common.login')}
          </Button>
        </Form>
        <Divider>{t('common.or')}</Divider>
        <Button>{t('components.auth.login.noAccount')}</Button>
      </Center>
    </Paper>
  );
};

export default Login;
