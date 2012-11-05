/// <reference path="../../../d.ts/jquery-1.8.d.ts"/>
/// <reference path="../login.d.ts"/>

import common = module("../../common");

export class LoginService { 

    public doPost(
        arg: { user: string; password: string; }, 
        asyncCallback: common.IAsyncCallback) {

        $.ajax({ 
                url: "/account/login", 
                type: "POST", 
                data: {user: arg.user, password: arg.password} 
            }).done(asyncCallback.onSuccess)
            .fail(function (jqXHR, textStatus) { 
                asyncCallback.onFailure({
                    message: jqXHR.statusText,
                    status: jqXHR.status
                }); 
            });
    }
}