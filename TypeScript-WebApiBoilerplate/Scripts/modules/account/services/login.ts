/// <reference path="../../../d.ts/jquery-1.8.d.ts"/>
/// <reference path="../account.d.ts"/>

import common = module("../../common");

export class LoginService { 

    public doPost(
        arg: { user: string; password: string; rememberMe: bool; }, 
        asyncCallback: common.IAsyncCallback) {

        $.ajax({ 
                url: "/account/login", 
                type: "POST", 
                data: {user: arg.user, password: arg.password, rememberMe: arg.rememberMe} 
            })
            .done(function (data) { 
                if (data.HasError) {
                    asyncCallback.onFailure({
                        message: data.Data,
                        status: 500
                    });
                } else { 
                    asyncCallback.onSuccess(data.Data);
                }
            })
            .fail(function (jqXHR, textStatus) { 
                asyncCallback.onFailure({
                    message: jqXHR.statusText,
                    status: jqXHR.status
                }); 
            });
    }
}
