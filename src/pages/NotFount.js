import { Link } from "react-router-dom";

import "styles/not-fount.scss";

function NotFount() {
  return (
    <>
      <div className="board">
        <p id="error">error</p>
        <p id="p404">404</p>
      </div>
      <div>
        <Link to="/">&#8666; go back</Link>
      </div>
    </>
  );
}

export default NotFount;
