// 如何写接口
import { options } from 'less';
import axios from 'axios';
export default {
    // 注册2：写接口
    register(options = {}) {
        return axios.post('./user/register',options)
    }
};