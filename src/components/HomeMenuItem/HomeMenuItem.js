import { Link } from "react-router-dom";

function HomeMenuItem({ children, to, title = "" }) {
  return (
    <Link to={to} title={title}>
      <span className={cx(styles.block_decoration, styles.menu_block, styles.menu_block__about)}>
        <span className={styles.block_container}>
          <h2 className={styles.block_container_item}>{children}</h2>
        </span>
      </span>
    </Link>
  );
}

export default HomeMenuItem;
