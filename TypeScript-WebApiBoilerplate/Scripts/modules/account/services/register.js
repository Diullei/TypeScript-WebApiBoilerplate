define(["require", "exports"], function(require, exports) {
    
    var RegisterService = (function () {
        function RegisterService() { }
        RegisterService.prototype.doPost = function (arg, asyncCallback) {
            $.ajax({
                url: "/account/register",
                type: "POST",
                data: {
                    user: arg.user,
                    password: arg.password,
                    confirmPassword: arg.confirmPassword
                }
            }).done(function (data) {
                if(data.HasError) {
                    asyncCallback.onFailure({
                        message: data.Data,
                        status: 500
                    });
                } else {
                    asyncCallback.onSuccess(data.Data);
                }
            }).fail(function (jqXHR, textStatus) {
                asyncCallback.onFailure({
                    message: jqXHR.statusText,
                    status: jqXHR.status
                });
            });
        };
        return RegisterService;
    })();
    exports.RegisterService = RegisterService;    
})
//@ sourceMappingURL=register.js.map
