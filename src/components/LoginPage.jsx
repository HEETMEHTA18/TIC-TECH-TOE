import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { lightTheme, darkTheme } from '../themes';

const LoginPage = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </ThemeToggle>

        <LogoContainer>
          <h1>🌳 Trackify</h1>
          <p>Take control of your finances</p>
        </LogoContainer>

        <FormContainer>
          <InputField>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </InputField>

          <InputField>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </InputField>

          <LoginButton>Login</LoginButton>

          <Divider>OR</Divider>

          <GoogleButton>
            <span>🌐</span>
            Continue with Google
          </GoogleButton>

          <SignupLink>
            Don't have an account? <a href="#">Sign up</a>
          </SignupLink>
        </FormContainer>
      </Container>
    </ThemeProvider>
  );
};

// Styled components (same as previous answer)
// ... [Include all the styled components from previous answer]

export default LoginPage;