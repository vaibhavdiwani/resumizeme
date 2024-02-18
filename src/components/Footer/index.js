import './Footer.css';
import { FOOTER_MENUS } from './FooterConfig';

function Footer() {
  return (
    <div className="mt-4 flex items-center gap-8 border-t pt-4">
      {FOOTER_MENUS.map((menu) => {
        return (
          <div key={menu.id}>
            <a className="footerLink" href={menu.href}>
              {menu.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
