export class ResponseService { 
    public redirect(url: string) { 
        window.location = <any>url;
    }
}