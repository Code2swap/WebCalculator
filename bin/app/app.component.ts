import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.calculator.html',
    styleUrls: ['./app.style.css']
})
export class AppComponent {
    
    output: string = "0";
    result: string = "0";

    doSomething($event: any) {
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
            case "Backspace":
                if(this.output == "") this.output = "0";
                else    this.output = this.output.slice(0, -1);
                this.result = this.output;
                break;
            default:
                break;
        }
    }

    updateOutput(btn: number) {
        this.output = this.result;
        if (this.output == "0") {
            this.output = String(btn);
        }
        else {
            this.output += btn;
        }
        this.result = this.output;
        return false;
    }

    devide() {
        this.output = this.result;
        this.output += " / ";
        this.result = this.output;
        return false;
    }

    add() {
        this.output = this.result;
        this.output += " + ";
        this.result = this.output;
        return false;
    }

    subtract() {
        this.output = this.result;
        this.output += " - ";
        this.result = this.output;
        return false;
    }

    multiply() {
        this.output = this.result;
        this.output += " * ";
        this.result = this.output;
        return false;
    }
    

    clear() {
        this.output = "0";
        this.result = "0";
        return false;
    }

    calculate() {
        this.output = this.result;
        this.result = String(eval(this.output));
        this.output = this.output + " = " + this.result;
        return false;
    }
}
