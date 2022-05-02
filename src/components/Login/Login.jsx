import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import style from "./login.module.css";

const Login = () => {
  //falto la implementacion con auth0
  return (
    <div id={style.port}>
      <div className={style.big_wrapper}>
        {/* <img src={shape} alt="" className={style.shape} /> */}
        <br />

        <div className={style.showcase_area}>
          <div className={style.container}>
            <div className={style.left}>
              <div className={style.big_title}>
                <h1>Sunburst</h1>
                <h1>"Explora La Grafica"</h1>
              </div>
              <p className={style.text}>
                Sitio web con el fin de mostrar una grafia sunburst con
                diferentes estados, dinamica y que muestra diferentes
                automoviles de las marcas mas conocidas en Mexico
              </p>
              <div className={style.cta}>
                <Link to={"/home"} className={style.btn}>
                  ENTRAR
                </Link>
              </div>
            </div>

            <div className={style.right}>
              {/* <img src={person} alt="Person Image" className={style.person}/> */}
            </div>
          </div>
        </div>

        <div className={style.bottom_area}>
          <div className={style.container}>
            <button className={style.toggle_btn}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
