import React from 'react'
import { CgFacebook } from 'react-icons/cg'
import { FacebookShareButton, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon } from 'react-share'
const SocialContact = () => {
const FacebookIcon = () => (
  <div className='facebook-share'>
    <CgFacebook className="facebook-icon mr-2"/>
    <span>Share</span>
  </div>
)
  return (
    <nav className="social-contact-menu">
      <ul className="d-flex">
        <li className="social-contact-item">
          <FacebookShareButton url={window.location.href} className="facebook-share-wrap">
            <FacebookIcon className="share-icon"/>
          </FacebookShareButton>
        </li>
        <li className="social-contact-item">
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={48} round={true} className="share-icon"/>
          </TwitterShareButton>
        </li>
        <li className="social-contact-item">
          <PinterestShareButton url={window.location.href}>
            <PinterestIcon size={48} round={true} className="share-icon"/>
          </PinterestShareButton>
        </li>
        <li className="social-contact-item">
          <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon size={48} round={true} className="share-icon"/>
          </WhatsappShareButton>
        </li>
        <li className="social-contact-item">
          <EmailShareButton url={window.location.href}>
            <EmailIcon size={48} round={true} className="share-icon"/>
          </EmailShareButton>
        </li>
      </ul>
    </nav>
  )
}

export default SocialContact
