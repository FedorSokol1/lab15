import { Routes, Route } from 'react-router-dom';

function Article() {
  return (
    <article>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Добро пожаловать</h1>
              <p>Главная страница сайта.</p>
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <h1>Новости</h1>
              <p>На сайте будут размещены новости, информация о проекте и контакты.</p>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <h1>Южный федеральный университет</h1>
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <h1>Контакты</h1>
              <p>Телефон: 8 863 218 40 00</p>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>404</h1>
              <p>Страница не найдена</p>
            </>
          }
        />
      </Routes>
    </article>
  );
}

export default Article;