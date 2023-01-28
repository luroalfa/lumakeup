import React from "react";
import "./login.css";
import reactLogo from "../../assets/logotipo.svg";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { auth } from "../../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
      console.log(res.user.displayName);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container d-flex flex-column text-center">
      <div>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <h2 className="display-6">MakeupArtist</h2>
      </div>
      <h1 className="display-1">Bienvenida</h1>

      <div className="card">
        <div className="form-outline mb-4">
          <input
            type="email"
            id="typeEmailX-2"
            className="form-control form-control-lg"
            placeholder="Correo Electronico"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="typePasswordX-2"
            className="form-control form-control-lg"
            placeholder="Contraseña"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Ingresar
        </button>
        <hr />
        <h2></h2>
        <button className="btn mb-4 btn-primary" type="submit">
          <FacebookOutlined />
          Facebook
        </button>
        <button
          className="btn btn-danger"
          type="submit"
          onClick={handleOnClick}
        >
          <GoogleOutlined />
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
