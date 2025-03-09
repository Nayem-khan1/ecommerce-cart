
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1E3A8A",
          color: "#fff",
        },
        success: {
          style: {
            background: "#26a6fb",
          },
        },
        error: {
          style: {
            background: "#F1C40F",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
