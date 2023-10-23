import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home-container'>
            <img src="hello.jpg" alt="hello-image" className='hello-img'/>

            <Link to={"/details"} className='details-link'>Details</Link>
        </div>
    );
}
