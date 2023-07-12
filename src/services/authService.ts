import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
  import createFirebaseInstance from '../firebase/firebase';
  
  const app = createFirebaseInstance();
  
  export const signIn = async (email: string, password: string) => {
    const auth = getAuth(app);
  
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user---', user);
        // ...
        return user;
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      });
  };
  
  export const checkUserAuth = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        // user is authenticated and signed in
        return true
    } else {
        return false
    }
  };

  export const logout = async () => {
    const auth = getAuth();
    return await signOut(auth).catch((error: unknown) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    });
  };
  