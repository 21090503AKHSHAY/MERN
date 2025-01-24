import seceLogo from '../assets/sece_logo.png';

const Gallery = (props) => {
    return (
        <div>
            <h3>Welcome to {props.page} page!!</h3>
            <img src={seceLogo} alt="pro college" />
            <p>The image is {props.image}</p>
        </div>
    );
};
export default Gallery;
