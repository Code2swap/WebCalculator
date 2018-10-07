"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.output = "0";
        this.result = "0";
    }
    AppComponent.prototype.doSomething = function ($event) {
        debugger;
        switch ($event.key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "+":
            case "-":
            case "*":
            case "/":
                this.updateOutput($event.key);
                break;
            case "=":
            case "Enter":
                this.calculate();
                break;
            case "c":
            case "C":
                this.clear();
                break;
            case "Backspace":
                if (this.output == "")
                    this.output = "0";
                else
                    this.output = this.output.slice(0, -1);
                this.result = this.output;
                break;
            default:
                break;
        }
    };
    AppComponent.prototype.updateOutput = function (btn) {
        this.output = this.result;
        if (this.output == "0") {
            this.output = String(btn);
        }
        else {
            this.output += btn;
        }
        this.result = this.output;
        return false;
    };
    AppComponent.prototype.devide = function () {
        this.output = this.result;
        this.output += " / ";
        this.result = this.output;
        return false;
    };
    AppComponent.prototype.add = function () {
        this.output = this.result;
        this.output += " + ";
        this.result = this.output;
        return false;
    };
    AppComponent.prototype.subtract = function () {
        this.output = this.result;
        this.output += " - ";
        this.result = this.output;
        return false;
    };
    AppComponent.prototype.multiply = function () {
        this.output = this.result;
        this.output += " * ";
        this.result = this.output;
        return false;
    };
    AppComponent.prototype.clear = function () {
        this.output = "0";
        this.result = "0";
        return false;
    };
    AppComponent.prototype.calculate = function () {
        this.output = this.result;
        this.result = String(eval(this.output));
        this.output = this.output + " = " + this.result;
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.calculator.html',
        styleUrls: ['./app.style.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
