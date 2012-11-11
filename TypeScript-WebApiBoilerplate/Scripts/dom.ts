import common = module("common");

declare var $: any;

export class DOMService implements common.IDOMService { 
    public elementById(id: string) { 
        return $("#" + id);
    }
}
