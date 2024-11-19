import React from 'react'
import Link from 'next/link'


type HeaderProps = {
  font: {
    className: string;
  };
};

const Header: React.FC<HeaderProps> = ({ font }) => {
  return (
    <div className={`${font.className} links-parent`}>
      <ul className="links">
        <li><Link href="#">Work</Link></li>
        <li><Link href="#">Blog</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;
