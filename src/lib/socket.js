import open from 'socket.io-client';
import { socketURL } from 'lib/constants';

export const openConnection = () => {
    return open(socketURL);
};