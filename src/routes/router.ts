import { createBrowserRouter } from 'react-router-dom';
import { IntroSlide } from '../pages/IntroSlide';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: IntroSlide,
  },
]);