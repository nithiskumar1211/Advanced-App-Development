import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const[email,setEmail]=useState(' ');
  const[password,setPassword]=useState(' ');
  const[errorMessage,setErrorMessage]=useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (email === 'nithis@gmail.com' && password === 'admin') {
      navigate ("/register")
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className=" w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                padding: ".8rem 0",
                bgcolor: "red",

                "&:hover": {
                  bgcolor: "blue",
                },
                "&:active": {
                  bgcolor: "#eb247b",
                },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>if you have don&apos;t have account ?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5 "
            size="small"
            sx={{
              color: "blue",
              "&:hover": {
                color: "#18c0d1",
              },
              "&:active": {
                color: "#18c0d1",
              },
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
