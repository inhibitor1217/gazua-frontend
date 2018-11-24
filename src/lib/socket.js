import open from 'socket.io-client';

const { REACT_APP_DEV_SOCKET_URL: socketURL } = process.env;

export const openConnection = () => {
    return open(socketURL);
};