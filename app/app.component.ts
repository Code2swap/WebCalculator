import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/calculator.html'
})
export class AppComponent {
    output: string = "0";
    doSomething($event) {
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
                break
            case "=":
            case "Enter":
                this.calculate();
                break;
            case "c":
            case "C":
                this.clear();
                break;
            default:
                break;
        }
    }

    updateOutput(btn: number) {
        if (this.output == "0") {
            this.output = String(btn);
        }
        else {
            this.output += btn;
        }
        return false;
    }

    devide() {
        this.output += "/";
        return false;
    }

    add() {
        this.output += "+";
        return false;
    }

    subtract() {
        this.output += "-";
        return false;
    }

    multiply() {
        this.output += "*";
        return false;
    }
    

    clear() {
        this.output = "0";
        return false;
    }

    calculate() {
        this.output = String(eval(this.output));
        return false;
    }
}
