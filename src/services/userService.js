import httpService from "./httpService";

const endPoint = "/user";

function registerUser(user) {
    return httpService.post(endPoint, { user });
}

function getUser(user) {
    httpService.get(endPoint, {
        params: {
            user,
        },
    });
}

function deleteUser(user) {
    httpService.delete(endPoint, { user });
}

export default {
    registerUser,
    getUser,
    deleteUser,
};
