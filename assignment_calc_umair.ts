//Calculator Assigned to batch 48 By sir UsmanAshraf
// addition
function add (a:number,b:number): number { 
    return a+b;
}
function subtract (a:number,b:number): number { 
    return a-b;
}
function multiply (a:number,b:number): number { 
    return a*b;
}
function divide (a:number,b:number): number|string { 
   if (b !==0) {return a/b;
} else { return" Error:Division by zero is not Possible.";
}