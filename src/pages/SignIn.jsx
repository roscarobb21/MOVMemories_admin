import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Navigator from "../elements/Navbar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/logo.png";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn({ setUser }) {
    const navigate = useNavigate();
  const [authError, setAuthError] = useState("");
  const [waitLogin, setWaitLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        startLogin(); // Submit form on Enter key press
    }
  };

  const authErrReset = ()=>{
    setTimeout(()=>{
        setAuthError("")
    }, 10000)
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update state on input change
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update state on input change
  };

  const startLogin = () => {
    if (email.length === 0 || password.length === 0) {
        setAuthError("Please fill out email and password")
        authErrReset()
        return
    }
    setWaitLogin(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setAuthError("Email or password incorrect");
        authErrReset()
        setWaitLogin(false)
      });
     
  };

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="background-dark-color min-height"
    >
      <div className="background-dark-color min-height">
        <Container
          className="d-flex justify-content-center align-items-center"
          fluid
          style={{ width: "100%", padding: 0, minHeight: "100vh" }}
        >
          <Row
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100% !important", height: "100% !important" }}
          >
            <Col className="d-flex justify-content-center align-items-center">
              <div
                style={{
                  backgroundColor: "#EEEEEE",
                  width: "336px",
                  height: "auto",
                  padding: "50px",
                  borderRadius: "9px",
                }}
              >
                <div>
                  <img
                    style={{
                      width: "84px",
                      backgroundColor: "black",
                      padding: "10px",
                    }}
                    src={logo}
                  ></img>
                </div>
                <br></br>
                <div className="space-grotesk-1 ">
                  <span>Welcome to MOV</span>
                  <br></br>
                  <span> Sign in here:</span>
                </div>
                <Box component="form" noValidate autoComplete="off">
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <TextField
                      id="email-text"
                      label="Email"
                      variant="outlined"
                      type="email"
                      color="primary"
                      onChange={handleEmailChange}
                      value={email}
                      onKeyDown={handleKeyDown}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password ">
                      <span className="">Password</span>
                    </InputLabel>
                    <OutlinedInput
                      onChange={handlePasswordChange}
                      onKeyDown={handleKeyDown}
                      value={password}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPassword
                                ? "hide the password"
                                : "display the password"
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                    />
                  </FormGroup>
                  <FormControl>
                    {waitLogin ? (
                      <CircularProgress />
                    ) : (
                      <Button variant="outlined" onClick={startLogin}>
                        Sign in
                      </Button>
                    )}
                  </FormControl>
                </Box>
              </div>
            </Col>
          </Row>

          <Stack
            sx={{
              width: "33%",
              position: "absolute",
              bottom: 0,
              padding: "40px",
            }}
            spacing={2}
          >
            {authError.length != 0 && (
              <Alert
                onClick={() => {
                  setAuthError("");
                }}
                style={{ cursor: "pointer" }}
                severity="error"
              >
                {authError}
              </Alert>
            )}
          </Stack>
        </Container>
      </div>
    </div>
  );
}

export default SignIn;
