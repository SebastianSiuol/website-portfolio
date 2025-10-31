import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import App from './App.tsx';

import './index.css';
import './custom.css';
import ProjectDescription from './pages/ProjectDescription.tsx';
import NotFound from './pages/NotFound.tsx';

const router = createBrowserRouter([{
  path:'/',
  element: <App />,
  errorElement: <NotFound />
},
{path:'/project/:projectId',
  element: <ProjectDescription />
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
