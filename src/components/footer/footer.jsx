import instagramIcon from '../../Images/instagramIcon.png';
import facebookIcon from '../../Images/facebookIcon.png';
import twitterIcon from '../../Images/twitterIcon.png';

export function Footer() {
  return (
    <footer className='h-32 w-full bg-red-400 flex justify-center items-center'>
        <div className='flex justify-center items-center gap-10'>
          <div className='flex flex-col gap-1'>
            <img src={instagramIcon} alt='Instagram Icon' />
            <img src={facebookIcon} alt='Facebook Icon' />
            <img src={twitterIcon} alt='Twitter Icon' />
          </div>
          <ul className='w-full flex flex-col'>
            <li>About Us</li>
            <li>Press</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
    </footer>
  );
}
