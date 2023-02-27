import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCX5VwOmMkMP0f3gQ0nxmjtwxF_TDtjCFI",
    authDomain: "fir-jwt-al.firebaseapp.com",
    projectId: "fir-jwt-al",
    storageBucket: "fir-jwt-al.appspot.com",
    messagingSenderId: "734785102541",
    appId: "1:734785102541:web:acd2a5a5b1fd1b9a18ff84"
  };

export default function Login ({ setIsLoggedIn }) {
    const handleSignin = () => {
        // connect to firebase project
        const app = initializeApp(firebaseConfig);
        // connect to auth 
        const auth = getAuth(app);
        // create a provider
        const provider = new GoogleAuthProvider();
        // popup signing window
        signInWithPopup(auth, provider)
        // handle .then and .catch
        .then(() => setIsLoggedIn(true))
        .catch(alert)
    }

    return (
        <>
            <h1>login</h1>
            <button onClick={handleSignin}>Sign in with Google</button>
        </>
    )
}