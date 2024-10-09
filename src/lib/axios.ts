import axios from "axios";

export const api = axios.create({
    baseURL: "http://gemini-server-lb-1572911728.us-east-1.elb.amazonaws.com/"
})