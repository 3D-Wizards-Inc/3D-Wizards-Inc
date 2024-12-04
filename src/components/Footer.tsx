'use client';

import { Instagram } from 'react-bootstrap-icons';
import Link from 'next/link';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer style={{ backgroundColor: 'purple', color: 'white' }}>
    <div className="container py-4">
      <div className="row">

        <div className="col-md-4 text-center">
          <h5 className="text-uppercase">NAVIGATION</h5>
          <p>
            <Link href="/about" className="text-decoration-none text-reset">About Us</Link>
          </p>
          <p>
            <Link href=" " className="text-decoration-none text-reset">Employment (make page?) </Link>
          </p>
          <p>
            <Link href="/gallery" className="text-decoration-none text-reset">Pictures (same as gallery?)</Link>
          </p>
        </div>

        <div className="col-md-4 text-center">
          <h5 className="text-uppercase">MAIN MENU</h5>
          <p>
            <Link href="/gallery" className="text-decoration-none text-reset">Products</Link>
          </p>
          <p>
            <Link href="/custom" className="text-decoration-none text-reset">Custom Order</Link>
          </p>
          <p>
            <Link href="/buisness" className="text-decoration-none text-reset">Business Inquiry</Link>
          </p>
        </div>

        <div className="col-md-4 text-center">
          <h5 className="text-uppercase">CONNECT</h5>
          <p>Sign up for the latest updates (this needed?)</p>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Address"
                aria-label="Enter Email Address"
              />
              <button className="btn btn-dark" type="submit">Join</button>
            </div>
          </form>
          {/* Instagram Link with Icon */}
          <div className="mt-3">
            <a
              href="https://www.instagram.com/3dwizardsinc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '15px', // Space between the form and Instagram link
              }}
            >
              <Instagram size={24} style={{ marginRight: '10px' }} />
              Follow us on Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
    <div className="text-center py-2">
      <p>Here for all your 3D printing needs!</p>
    </div>
  </footer>
);

export default Footer;
