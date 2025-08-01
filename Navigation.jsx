import { useState } from 'react';

export default function Navigation() {
  const [active, setActive] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navigation">
      <ul>
        {navItems.map(item => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              className={active === item.id ? 'active' : ''}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}