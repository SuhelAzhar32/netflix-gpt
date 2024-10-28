import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import { BG_LOGO } from "../utils/constants";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const name = useRef(null);
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // validate the form data
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
      //   fullName.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // sign in/ sign up , create a new user
    if (isSignIn) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_LOGO}
          alt="bg-img"
        />
      </div>
      <form className="absolute p-12 bg-black bg-opacity-80 w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {isSignIn && (
          <input
            type="text"
            placeholder="full name"
            ref={name}
            className="p-3 my-4 w-full bg-gray-600 bg-opacity-70 rounded-md border border-gray-400"
          />
        )}
        <input
          type="text"
          placeholder="email address"
          ref={emailRef}
          className="p-3 my-4 w-full bg-gray-600 bg-opacity-70 rounded-md border border-gray-400"
        />
        <input
          type="password"
          placeholder="password"
          ref={passwordRef}
          className="p-3 my-4 w-full bg-gray-600 bg-opacity-70 rounded-md border border-gray-400"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-3 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleSignIn}
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "Already a User, Login In"
            : "New to Netflix? sign up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
