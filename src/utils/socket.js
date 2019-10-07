import io from "socket.io-client";

const HOST = "https://radiant-fortress-48459.herokuapp.com/";
// const HOST = "localhost:8080";
// const HOST = "10.213.195.66:8080"

const socket = io(HOST);

export default socket;
