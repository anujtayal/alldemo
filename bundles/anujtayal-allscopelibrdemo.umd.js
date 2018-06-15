(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@anujtayal/allscopelibrdemo', ['exports', '@angular/core'], factory) :
    (factory((global.anujtayal = global.anujtayal || {}, global.anujtayal.allscopelibrdemo = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AllscopelibrdemoService = (function () {
        function AllscopelibrdemoService() {
        }
        AllscopelibrdemoService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        AllscopelibrdemoService.ctorParameters = function () { return []; };
        /** @nocollapse */ AllscopelibrdemoService.ngInjectableDef = i0.defineInjectable({ factory: function AllscopelibrdemoService_Factory() { return new AllscopelibrdemoService(); }, token: AllscopelibrdemoService, providedIn: "root" });
        return AllscopelibrdemoService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AllscopelibrdemoComponent = (function () {
        function AllscopelibrdemoComponent() {
        }
        /**
         * @return {?}
         */
        AllscopelibrdemoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AllscopelibrdemoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-allscopelibrdemo',
                        template: "\n    <p>\n      allscopelibrdemo works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        AllscopelibrdemoComponent.ctorParameters = function () { return []; };
        return AllscopelibrdemoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AllscopelibrdemoModule = (function () {
        function AllscopelibrdemoModule() {
        }
        AllscopelibrdemoModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [AllscopelibrdemoComponent],
                        exports: [AllscopelibrdemoComponent]
                    },] },
        ];
        return AllscopelibrdemoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.AllscopelibrdemoService = AllscopelibrdemoService;
    exports.AllscopelibrdemoComponent = AllscopelibrdemoComponent;
    exports.AllscopelibrdemoModule = AllscopelibrdemoModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW51anRheWFsLWFsbHNjb3BlbGlicmRlbW8udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYW51anRheWFsL2FsbHNjb3BlbGlicmRlbW8vbGliL2FsbHNjb3BlbGlicmRlbW8uc2VydmljZS50cyIsIm5nOi8vQGFudWp0YXlhbC9hbGxzY29wZWxpYnJkZW1vL2xpYi9hbGxzY29wZWxpYnJkZW1vLmNvbXBvbmVudC50cyIsIm5nOi8vQGFudWp0YXlhbC9hbGxzY29wZWxpYnJkZW1vL2xpYi9hbGxzY29wZWxpYnJkZW1vLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFsbHNjb3BlbGlicmRlbW9TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFsbHNjb3BlbGlicmRlbW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgYWxsc2NvcGVsaWJyZGVtbyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQWxsc2NvcGVsaWJyZGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxsc2NvcGVsaWJyZGVtb0NvbXBvbmVudCB9IGZyb20gJy4vYWxsc2NvcGVsaWJyZGVtby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FsbHNjb3BlbGlicmRlbW9Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQWxsc2NvcGVsaWJyZGVtb0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQWxsc2NvcGVsaWJyZGVtb01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3NDQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQiw0Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxRQUFRLEVBQUUsd0RBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7d0NBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDckM7O3FDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9