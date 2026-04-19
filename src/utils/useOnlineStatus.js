import { useState } from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // check online
  window.addEventListener('offline', () => {
    setOnlineStatus(false);
  });

  window.addEventListener('online', () => {
    setOnlineStatus(true);
  });

  // boolea value
  return onlineStatus;
};

export default useOnlineStatus;
