import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword
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

  export const signUp = async (email: string, password: string) => {
    const auth = getAuth(app);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signup
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
        console.log('are we true')
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
  