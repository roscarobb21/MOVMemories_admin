import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import logo from "../assets/logo.png"
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
// preview-start
const providers = [{ id: 'credentials', name: 'Email and Password' }];
// preview-end

const BRANDING = {
    logo: (
      <img
        src={logo}
        alt="MOV"
        style={{ height: 48 }}
      />
    ),
    title: 'MOV',
  };

const signIn = async (provider, formData, setUser) => {
  const promise = new Promise((resolve) => {
    signInWithEmailAndPassword(auth, formData.get('email'), formData.get('password'))
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log("SING ", setUser)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            resolve()
        });
  });
  return promise;
};

export default function CredentialsSignInPage({setUser}) {
  const theme = useTheme();
  return (
    // preview-start
    <AppProvider branding={BRANDING}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false } }}
      />
    </AppProvider>
    // preview-end
  );
}
