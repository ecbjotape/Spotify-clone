import React from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=c5c17a06714d475b8b60c308e5af1d0a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <>
            <NavBar />
            <div className="container ">
                <div className="jumbotron">
                    <h1 className="display-4">Spotify</h1>
                    <p className="lead">Utilizando a API do Spotify</p>
                    <hr />
                    <p>Este website consiste em um desafio técnico proposto pela <a href="https://www.horizonci.com.br/">
                    Horizon
            </a></p>
                    <a className="btn btn-success btn-lg" href={AUTH_URL}>
                        Logar com spotify
                    </a>
                </div>
            </div>
            <Footer />
            
        </>
  )
}
