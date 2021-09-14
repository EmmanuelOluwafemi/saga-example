import * as types from "../types";

export function getUser(users) {
    return {
        type: types.GET_USERS_REQUESTED,
        payload: users,
    }
}