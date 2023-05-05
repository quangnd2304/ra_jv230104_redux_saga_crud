import { call, put } from 'redux-saga/effects';
import { ACT_USER_SUCCESS } from '../redux/actions';
import * as userService from '../api/user_service';
export const USER_SAGA_GET = function* () {
    console.log("3. Thực hiện USER_SAGA_GET - gọi sang axios");
    let listUser = yield call(userService.USER_GET);
    console.log("3. Kết quả bước 3 là: ", listUser);
    // put action
    yield put(ACT_USER_SUCCESS(listUser));
}