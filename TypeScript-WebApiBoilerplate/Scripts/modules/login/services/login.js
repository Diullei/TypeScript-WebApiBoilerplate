define(["require", "exports"], function(require, exports) {
    
    var LoginService = (function () {
        function LoginService() { }
        LoginService.prototype.doPost = function (arg, asyncCallback) {
            $.ajax({
                url: "/account/login",
                type: "POST",
                data: {
                    user: arg.user,
                    password: arg.password
                }
            }).done(asyncCallback.onSuccess).fail(function (jqXHR, textStatus) {
                asyncCallback.onFailure({
                    message: jqXHR.statusText,
                    status: jqXHR.status
                });
            });
        };
        return LoginService;
    })();
    exports.LoginService = LoginService;    
})

