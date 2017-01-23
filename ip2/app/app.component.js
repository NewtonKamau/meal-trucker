"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.mealName = "Burger";
        this.mealDetails = "Cheese burger";
        this.mealCalories = 350;
        this.meals = ["Fries Curly 500", "Banana two 60"];
    }
    AppComponent.prototype.addMeal = function (meal) {
        this.meals.push(meal);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>Track your meal</h1>\n  <p>Name: {{mealName}}</p>\n  <p>Details: {{mealDetails}}</p>\n  <p>Calories: {{mealCalories}}</p>\n  <hr>\n\n  <form (submit)=\"addMeal(meal.value)\">\n    <label>Add meal</label>\n    <input type = \"text\" #meal placeholder=\"(name) (details) (calories)\">\n  </form>\n\n  <ol>\n    <li *ngFor = \"let meal of meals\">\n      {{meal}}\n    </li>\n  </ol>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map