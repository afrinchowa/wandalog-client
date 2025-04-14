import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Lottie from "lottie-react";
import loginAnimationData from "../../assets/lottie/login.json";
import SocialLogin from "../shared/SocialLogin";
const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        axios.patch("http://localhost:5000/users", loginInfo).then((data) => {
          console.log(data.data);
        });

        // update last logged
        // fetch("http://localhost:5000/users", {
        //   method: "PATCH",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(loginInfo),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("sign in ingo updated in db", data);
        //   });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <Lottie animationData={loginAnimationData} loop={true} />
            <p className="py-6"></p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />

                <div>
                  <p>
                    Unable sign In?{" "}
                    <span>
                      <a href="./signUp" className="text-blue-700">
                        SignUp
                      </a>
                    </span>
                  </p>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>
               <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
