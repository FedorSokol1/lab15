import { Link } from 'react-router-dom';

function Head() {
  return (
    <header>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/news">Новости</Link>
        <Link to="/about">О проекте</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
}

export default Head;