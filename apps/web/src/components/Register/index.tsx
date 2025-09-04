import * as yup from 'yup';
import { useFormik } from 'formik';
import { Paper, TextField, Divider, Button } from '@mui/material';
import AuthForm from '../common/AuthForm';
import Center from '../common/Center';
import { useTranslation } from 'react-i18next';
import {
  useLoginMutation,
  useRegisterMutation,
} from '../../redux/serivces/authService';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')]),
});

type Props = {
  changeForm: () => void;
};

const Register = ({ changeForm }: Props) => {
  const { t } = useTranslation();
  const [register, { isLoading: registering }] = useRegisterMutation();
  const [login, { isLoading: signingIn }] = useLoginMutation();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (vals) => {
        await register(vals);
        await login(vals);
      },
    });

  const isLoading = registering || signingIn;

  return (
    <Paper elevation={2} sx={{ width: '100%', p: 4 }}>
      <Center sx={{ flexDirection: 'column', gap: 2 }}>
        <AuthForm onSubmit={handleSubmit}>
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
            type="password"
          />
          <TextField
            name="confirmPassword"
            label={t('components.auth.common.confirmPassword')}
            margin="normal"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
            fullWidth
            type="password"
          />
          <Button variant="contained" loading={isLoading} type="submit">
            {t('components.auth.common.register')}
          </Button>
        </AuthForm>
        <Divider>{t('common.or')}</Divider>
        <Button onClick={changeForm}>
          {t('components.auth.register.haveAccount')}
        </Button>
      </Center>
    </Paper>
  );
};

export default Register;
