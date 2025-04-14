import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="m-4 ">
      <div className="divider">OR</div>
<div className="flex justify-center items-center">
<button onClick={handleGoogleSignIn} className="btn">
       


        <span className="text-blue-700">G</span>
        <span className="text-red-700">o</span>
        <span className="text-yellow-400">o</span>
        <span className="text-blue-700">g</span>
        <span className="text-green-700">l</span>
        <span className="text-red-700">e</span>
    
      </button>
</div>
      
    </div>
  );
};

export default SocialLogin;
