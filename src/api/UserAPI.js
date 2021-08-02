import { Request } from './Request.js';
var UserAPI = /** @class */ (function () {
    function UserAPI() {
    }
    UserAPI.all = function () {
        return Request.get({
            url: '/users'
        });
    };
    return UserAPI;
}());
export { UserAPI };
