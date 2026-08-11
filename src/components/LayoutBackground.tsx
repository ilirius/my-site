import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

const rootBackground = document.getElementById('bg-root') as Element;

const LayoutBackground: React.FC<{ children: ReactNode }> = ({ children }): React.ReactPortal => createPortal(children, rootBackground) as React.ReactPortal;

export default LayoutBackground;
