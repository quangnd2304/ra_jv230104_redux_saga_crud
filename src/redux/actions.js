import * as actionTypes from "./constants/actionType"
export const ACT_USER_GET = () => {
    console.log("2. Thực hiện action ACT_USER_GET");
    return {
        type: actionTypes.TYPE_USER_GET
    }
};
export const ACT_USER_POST = (user) => {
    return {
        type: actionTypes.TYPE_USER_POST,
        payload: user
    }
};
export const ACT_USER_PUT = (user) => {
    return {
        type: actionTypes.TYPE_USER_PUT,
        payload: user
    }
};
export const ACT_USER_PATCH = (user) => {
    return {
        type: actionTypes.TYPE_USER_PATCH,
        payload: user
    }
};
export const ACT_USER_DELTE = (id) => {
    return {
        type: actionTypes.TYPE_USER_DELTE,
        payload: id
    }
};
export const ACT_USER_SUCCESS = (data) => {
    console.log("5. Dữ liệu nhận được từ USER_SAGA:", data);
    return {
        type: actionTypes.TYPE_USER_SUCEES,
        payload: data
    }
}