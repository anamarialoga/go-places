import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '../components/Typography.js';
import AppForm from '../views/AppForm';
import withRoot from '../withRoot';
import { AppContext } from '../context/appContext';
import TextField from '../components/TextField';
import  Button  from '@mui/material/Button';
import visibilityIcon from '../common/svg/visibilityIcon.svg'


function SignUp(){

    const [formData, setFormData]=React.useState({firstName: "", lastName: "", email: "", password: "", confirmPassword: ""});
    const [showPass, setShowPass] = React.useState(false);
    const [showPass2, setShowPass2] = React.useState(false);
    const {onSignUp} = React.useContext(AppContext);
    const [sent, setSent] = React.useState(false);

    const onChange = (e) => {
        e.preventDefault();
        setFormData((prevState) => ({
            ...prevState,// - all the other fields from the obj
            [e.target.id]: e.target.value //the current field that is changed
            //name of the field: value of the user input (new value) 
        })) 
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSignUp(formData);
        setSent(true);
    }

    return (
        <React.Fragment>
          <AppForm>
            <React.Fragment>
              <Typography variant="h3" gutterBottom marked="center" align="center">
                Sign Up
              </Typography>
              <Typography variant="body2" align="center">
                {'Already having an account?'}
                <Link
                  href="/signin"
                  align="center"
                  underline="always"
                >
                  Sign In
                </Link>
              </Typography>
            </React.Fragment>
            <form
              onSubmit={handleSubmit}
              noValidate={false}
            >
                  <TextField
                    id={'firstName'}
                    autoComplete="firstname"
                    autoFocus
                    disabled={ sent}
                    fullWidth
                    label="First Name"
                    margin="normal"
                    name="firstName"
                    required
                    size="large"
                    value={formData.firstName }
                    onChange={onChange}
                  />
                  
                  <TextField
                    id={'lastName'}
                    autoComplete="lastname"
                    autoFocus
                    disabled={ sent}
                    fullWidth
                    label="Last Name"
                    margin="normal"
                    name="lastName"
                    required
                    size="large"
                    value={formData.lastName }
                    onChange={onChange}
                  />
                  <TextField
                    style={{marginBottom:"2rem"}}
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
                      style={{marginBottom:"2rem"}}
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
                  <div className='passwordInputDiv'>
                    <TextField
                      style={{background: "url()"}}
                      id={"confirmPassword"}
                      fullWidth
                      size="large"
                      disabled={ sent}
                      required
                      name="confirmPassword"
                      label="Confirm Password"
                      type={showPass2?"text" : "password"}
                      margin="normal"
                      value={formData.confirmPassword}
                      onChange={onChange}
                    />
                    <img src = {visibilityIcon} alt="visibility" className="showPassword" onClick={() => setShowPass2(!showPass2)}/>
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
                    { sent ? 'In progress…' : 'Sign Up'}
                  </Button>
            </form>
          </AppForm>
        </React.Fragment>
      );
}

export default withRoot(SignUp)