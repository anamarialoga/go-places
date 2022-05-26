import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '../components/Typography';
import AppFooter from '../views/AppFooter';
import AppAppBar from '../views/AppAppBar';
import AppForm from '../views/AppForm';
import withRoot from '../withRoot';
import { AppContext } from '../context/appContext';
import TextField from '../components/TextField';
import  Button  from '@mui/material/Button';
import visibilityIcon from '../common/svg/visibilityIcon.svg'

function SignIn() {

  const {onLogin} = React.useContext(AppContext)
  const [sent, setSent] = React.useState(false);

  const [showPass, setShowPass] = React.useState(false);
  const [formData, setFormData] = React.useState({
      email: "",
      password: "",
  })

  console.log(formData);

  const onChange=(e)=>{
      e.preventDefault();
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.id]: e.target.value
      })) 
   }


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
    setSent(true);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not having an account yet? '}
            <Link
              href="/signup"
              align="center"
              underline="always"
            >
              Sign Up
            </Link>
          </Typography>
        </React.Fragment>
        <form
          onSubmit={handleSubmit}
          noValidate={false}
        >
              <TextField
                id={'email'}
                autoComplete="email"
                autoFocus
                disabled={ sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
                value={formData.email }
                onChange={onChange}
              />
              <div className='passwordInputDiv'>
                <TextField
                  style={{background: "url()"}}
                  id={"password"}
                  fullWidth
                  size="large"
                  disabled={ sent}
                  required
                  name="password"
                  label="Password"
                  type={showPass?"text" : "password"}
                  margin="normal"
                  value={formData.password}
                  onChange={onChange}
                />
                <img src = {visibilityIcon} alt="visibility" className="showPassword" onClick={() => setShowPass(!showPass)}/>
              </div>
              <Button
                variant={"contained"}
                color={"secondary"}
                sx={{ mt: 3, mb: 2 }}
                disabled={sent}
                size="large"
                fullWidth
                type={'submit'} 
              >
                { sent ? 'In progress…' : 'Sign In'}
              </Button>
        </form>
        <Typography align="center">
          <Link underline="always" >
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
