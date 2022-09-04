import request from '@/utils/request.js';
import { setting } from '@/config/setting';
import axios from 'axios'
const { tokenName } = setting;
export const login = async(data) => {
    return request({
        url: '/adminUser/login',
        method: 'post',
        data,
    });
};

export const getUserInfo = (accessToken) => {
    return request({
        url: 'adminUser/userInfo',
        method: 'get',
        data: {
            [tokenName]: accessToken,
        },
    });
};

export const logout = () => {
    return request({
        url: '/logout',
        method: 'POST',
    });
};

export const register = async() => {
    return request({
        url: '/register',
        method: 'post',
    });
};