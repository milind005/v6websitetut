import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import { rootloader, rootAction } from './routes/root';

import ErrorPage from './routes/Error-page';
import Contact, { contactLoader, deleteAction, starAction } from './routes/Contact';
import EditContact, { editAction } from './routes/edit';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootloader,
    action: rootAction,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [

          { index: true, element: <Index /> },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: starAction
            // errorElement: <ErrorPage />,
          },
          {
            path: "/contacts/:contactId?/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,

            // errorElement: <ErrorPage />,
          },
          {
            path: "/contacts/:contactId/destroy",
            action: deleteAction,
            // errorElement: <ErrorPage />,
          },
        ]
      }
    ]
  },

])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
