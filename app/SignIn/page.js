
"use client";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";
import './styles.css';
 

export default function SignIn() {
  const [isClient, setIsClient] = useState(false);
  const { user,gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
      setIsClient(true);
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // Here you can handle the user's data, redirect, etc.
    } catch (error) {
      // Handle errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // You can use these to provide feedback to the user.
    }
  };

  

  const handleLogin = async () => {
      try {
          await gitHubSignIn();
          return(<div>hello</div>)
      } catch (error) {
          console.error('Error during login:', error);
      }
  };

  const handleLogout = async () => {
      try {
          await firebaseSignOut();
      } catch (error) {
          console.error('Error during logout:', error);
      }
  };

  if (!isClient) {
      return <div className="loading-screen">
              <div>Loading...</div>
              </div>;
  }
  const getFirstFiveLetters = email => email?.substring(0, 5);

    return (
      <div className="signin-container bg-cover bg-no-repeat" style={{ backgroundImage: "url('./images/SignIn.jpeg')" 
        }}>
        <div className="signin-box">
          <h1 className="signin-title">Welcome Back!</h1>
          <p className="signin-subtitle">Sign in to continue</p>
          {user ? (
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-800">Welcome back, {getFirstFiveLetters(user.email)}</h2>
                  <p className="text-gray-600 mt-2">Ready to shop? Let's get started!</p>
                  <div className="mt-4">
                      <Link href="./hero" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                          Go to Main Page
                      </Link>
                      <button onClick={handleLogout} className="ml-4 inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                          Logout
                      </button>
                  </div>
              </div>
              
                ) : (
                  <div>
          
            <button className="github-btn" onClick={handleLogin}>
            <img src="./images/GitHub.png" alt="GitHub" className="github-icon" />
            Sign in with GitHub
          </button>

          <button className="github-btn" onClick={handleGoogleLogin}>
            <img src="./images/google.svg" alt="GitHub" className="github-icon" />
            Sign in with Google
          </button>

          
  
          <div className="divider">
            <hr className="line" />
            <span className="or">OR</span>
            <hr className="line" />
          </div>
  
          <input type="email" placeholder="Email" className="signin-input" />
          <input type="password" placeholder="Password" className="signin-input" />
          <button className="signin-btn">Sign In</button>
  
          <p className="signup-prompt">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
          </div>
           )}
        </div> 
      </div>
     
    );
  }
  