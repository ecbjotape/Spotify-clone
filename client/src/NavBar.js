import ImgIcon from './assets/img/spotify-icon.svg';

const NavBar = () => {
    return (
        <div className="p-3 bg-secondary bg-gradient">
            
              <img src={ImgIcon} alt="Spotify Web" width="50" />
            </div>
    );
}

export default NavBar;