import { createBrowserRouter } from 'react-router-dom';
import { IntroSlide } from '../pages/introSlide';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: IntroSlide,
  },
]);