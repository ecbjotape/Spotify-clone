import ImgIcon from './assets/img/spotify-icon.svg';
import AUTH_URL from './Login'
const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 bg-secondary bg-gradient">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                        <img src={ImgIcon} alt="Spotify Web" width="120" />
                </nav>
            </div>
        </div>
    );
}

export default NavBar;