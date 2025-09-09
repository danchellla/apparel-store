import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts(t => [...t, { id, message, type }]);
    setTimeout(() => setToasts(t => t.filter(toast => toast.id !== id)), duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-6 right-6 z-[9999] space-y-2">
        {toasts.map(toast => (
          <div key={toast.id} className={`px-6 py-3 rounded-lg shadow-lg font-semibold text-white bg-opacity-90 transition-all animate-fade-in-down ${toast.type === 'success' ? 'bg-green-500' : toast.type === 'error' ? 'bg-red-500' : 'bg-accent'}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
