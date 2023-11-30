import './styles.css';

import { useUserAuth } from "./_utils/auth-context";
 
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
await gitHubSignIn();
 
await firebaseSignOut();
 
<p>
  Welcome, {user.displayName} ({user.email})
</p>;

export default function SignIn() {
    return (
      <div className="signin-container bg-cover bg-no-repeat" style={{ backgroundImage: "url('./images/SignIn.jpeg')" 
        }}>
        <div className="signin-box">
          <h1 className="signin-title">Welcome Back!</h1>
          <p className="signin-subtitle">Sign in to continue</p>
          
          <button className="github-btn">
            <img src="./images/GitHub.png" alt="GitHub" className="github-icon" />
            Sign in with GitHub
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
      </div>
    );
  }
  