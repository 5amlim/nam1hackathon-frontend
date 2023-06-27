import { Fbook } from '../assets/svgs/fbook';
import { Insta } from '../assets/svgs/insta';
import { Logo } from '../assets/svgs/logo';
import { Twitter } from '../assets/svgs/twitter';

export const Footer = () => {
	return (
		<>
			<div className="footer-container bg-secondary d-flex flex-column justify-content-around">
				<div className="footer-logo d-flex justify-content-center w-100 my-5">
					<Logo />
				</div>
				<div className="footer-links d-flex flex-column align-items-center">
					<a>
						<p>Contact</p>
					</a>
					<a>
						<p>Terms of Use</p>
					</a>
					<a>
						<p>Privacy Policy</p>
					</a>
					<a>
						<p>FAQ</p>
					</a>
				</div>
				<div className="footer-socials d-flex justify-content-center my-5">
					<a className="mx-3">
						<Insta />
					</a>
					<a className="mx-3">
						{' '}
						<Fbook />
					</a>
					<a className="mx-3">
						<Twitter />
					</a>
				</div>
			</div>
		</>
	);
};
