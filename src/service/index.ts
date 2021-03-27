import axios, { AxiosInstance } from 'axios'

export default class AxiosService {
    static readonly instance: AxiosInstance = axios.create({
        baseURL: 'http://ec2-54-180-150-73.ap-northeast-2.compute.amazonaws.com'
    })
}