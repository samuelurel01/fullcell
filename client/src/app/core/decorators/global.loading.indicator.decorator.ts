
import {Observable} from "rxjs";
import {RootInjectorFacade} from "../root.injector.facade";
import {AppStateService} from "../app.state.service";
import {Stack} from "../stack";

const stack = new Stack();

export function GlobalLoadingIndicator(target: any, key: string, value: any) {

    function setLoad(state: any, flag: boolean) {
        setTimeout(() => {
            if (flag) {
                stack.push(flag);
                state.setGlobalLoadPanelVisible(flag);
            } else {
                stack.pop();
                if (stack.empty()) {
                    state.setGlobalLoadPanelVisible(flag);
                }
            }
        });
    }

    return {
        value: function (...args: any[]) {
            const appStateService: AppStateService = AppStateService.get();
            setLoad(appStateService, true);

            const result: Observable<any> = value.value.apply(this, args);

            if (result) {
                result.subscribe(
                    (data) => {},
                    (err) => setLoad(appStateService, false),
                    () => setLoad(appStateService, false));
            } else {
                setLoad(appStateService, false);
            }

            return result;
        }
    };
}
