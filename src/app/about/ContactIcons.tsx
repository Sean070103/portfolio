import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';

export const ContactIcons = [
  {
    icon: <FaFacebook size={28} className="text-muted-foreground hover:text-primary transition-colors" title="Facebook" />,
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100008903117894',
  },
  {
    icon: <FaLinkedin size={28} className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sean-michael-andrew-mendoza-213223324/',
  },
  {
    icon: <FaInstagram size={28} className="text-muted-foreground hover:text-primary transition-colors" title="Instagram" />,
    label: 'Instagram',
    href: 'https://www.instagram.com/mndz_sn/',
  },
];
