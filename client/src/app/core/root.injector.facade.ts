import {Injectable, Injector} from "@angular/core";

@Injectable()
export class RootInjectorFacade {
    private static injector: Injector;

    public static get(token: any) {
        if (RootInjectorFacade.injector) {
            return RootInjectorFacade.injector.get(token);
        }
    }

    constructor(public injector: Injector) {
        RootInjectorFacade.injector = injector;
    }
}
