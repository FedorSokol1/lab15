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
              <p>Здесь будет текст в зависимости от выбранного пункта меню.</p>
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <h1>Новости</h1>
              <p>Здесь может быть любой текст с новостями.</p>
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
              <p>Телефон: +7-999-000-00-00</p>
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