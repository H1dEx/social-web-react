import {instance} from "./api";

export const secureAPI = {
    getCaptchaURL() {
        return instance.get('/security/get-captcha-url').then(response => response.data)
    }
}