import React, { useEffect, useState } from 'react';
import './App.css';

// @ts-ignore
import sequence from './SequenceEmbeddedWallet'
import ElectronGoogleOAuth2 from '@getstation/electron-google-oauth2';
import { ipcRenderer } from 'electron';

// @ts-ignore
import { useSessionHash } from './useSessionHash'

export default function App() {
  const { sessionHash } = useSessionHash()

  useEffect(() => {
    // Request the JWT token from the main process
    ipcRenderer.send('request-jwt-token');

    // Handle the response from the main process
    ipcRenderer.on('jwt-token', (event, idToken) => {
      console.log('Received JWT Token:', idToken);
    });

    // Cleanup listener on component unmount
    return () => {
      ipcRenderer.removeAllListeners('jwt-token');
    };
  }, []);

  const googleSignIn = () => {
    
  
    myApiOauth.openAuthWindowAndGetTokens()
      .then((token: any) => {
        console.log(token)
        // use your token.access_token
      });
  }

  return (
    <>
      <p>embedded wallet app</p>
      <button onClick={() => googleSignIn()}>sign in</button>
    </>
  );
}
