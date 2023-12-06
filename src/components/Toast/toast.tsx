import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Toast = (): JSX.Element => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
