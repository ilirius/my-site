import { Link } from "react-router-dom";

import "styles/not-fount.scss";

// https://ru.stackoverflow.com/questions/1286956/css-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D1%81-%D1%82%D1%80%D0%B5%D0%BC%D1%8F-%D1%82%D0%BE%D1%87%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BD%D0%B0-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B5-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8

function NotFount() {
  return (
    <main className="page_404">
      <div className="board">
        <p id="error">error</p>
        <p id="p404">404</p>
      </div>
      <div>
        <Link to="/">&#8666; go back</Link>
      </div>
      <div>(-_-;)・・・</div>
      <div>(o^^)o</div>
    </main>
  );
}

export default NotFount;
