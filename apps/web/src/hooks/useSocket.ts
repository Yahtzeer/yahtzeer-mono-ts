import { API_URL } from '@web/utils/config';
import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const socket = io(API_URL, {
      auth: { token },
    });

    socketRef.current = socket;

    return () => {
      socket.disconnect();
    };
  }, []);

  return socketRef.current;
};

export default useSocket;
