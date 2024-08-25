import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { useState } from "react";
import { API } from "../../service/api";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
  border-radius: 8px;
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0 ",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 4px;
  &:hover {
    background: #ff8a3c;
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  &:hover {
    background: #f0f0f0;
  }
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;

const Error = styled(Typography)`
  color: #ff6161;
  font-size: 10px;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const signupInitialValues = {
    name: "",
    username: "",
    password: "",
  };

  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState("");
  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    // Handle the response (e.g., display a message or redirect the user)
    if (response.isSuccess) {
      setSignup(signupInitialValues);
      setError("");
      toggleAccount("login");
      console.log("Signup successful", response.data);
    } else {
      setError("something went wrong! please try again later");
      console.log("Signup failed", response.msg);
    }
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              id="username"
              label="Enter Username"
              variant="standard"
              onChange={onInputChange}
              name="username"
            />
            <TextField
              id="password"
              label="Enter Password"
              variant="standard"
              type="password"
              onChange={onInputChange}
              name="password"
            />
            {error && <Error>{error}</Error>}
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton variant="text" onClick={toggleSignup}>
              CREATE AN ACCOUNT
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              id="name"
              onChange={onInputChange}
              name="name"
              label="Enter Name"
              variant="standard"
            />
            <TextField
              id="username"
              onChange={onInputChange}
              name="username"
              label="Enter Username"
              variant="standard"
            />
            <TextField
              id="password"
              onChange={onInputChange}
              name="password"
              label="Enter Password"
              variant="standard"
              type="password"
            />
            {error && <Error>{error}</Error>}
            <SignupButton variant="text" onClick={signupUser}>
              Signup
            </SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={toggleSignup}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
