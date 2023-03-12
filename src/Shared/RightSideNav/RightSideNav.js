import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import BrandCaarousel from '../BrandCarousel/BrandCaarousel';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignin = () =>{
        providerLogin(googleProvider)
        .then(res => console.log(res.user))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignin} className="mb-2" variant='outline-primary'><FaGoogle></FaGoogle> Log in with google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Log in with github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className="mb-2"><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitch /> Twich</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCaarousel></BrandCaarousel>
            </div>
        </div>
    );
};

export default RightSideNav;