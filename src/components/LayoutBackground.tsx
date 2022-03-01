import { createPortal } from 'react-dom';

const rootBackground = document.getElementById('bg-root') as Element;

const LayoutBackground: React.FC<{}> = ({ children }): React.ReactPortal => {
  return createPortal(children, rootBackground);
};

export default LayoutBackground;
