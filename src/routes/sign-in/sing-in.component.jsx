import {
  signInWithGooglepopup,
  createUserDocumentFromAuth,
} from "../../utills/firebase/firebase.utills";

const SignIn = () => {
  const logGooleUser = async () => {
    const { user } = await signInWithGooglepopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>This is the signin page </h1>
      <button onClick={logGooleUser}>Sign in with Google popup</button>
    </div>
  );
};

export default SignIn;
