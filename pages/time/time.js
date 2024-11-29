function convert() {
    let num1 = Number(prompt("number to convert hours,minuts,seconds: "));
    let tp1 = prompt("unit for the input (H/M/S) : ");
    let tp2 = prompt("unit for the output (H/M/S) : ");

    if (tp1 == "H" && tp2 == "M") {
        alert(`converted: ${num1*60}M`)
    } else if (tp1 == "H" && tp2 == "S") {
        alert(`converted: ${num1*3600}S`)
    } else if (tp1 == "M" && tp2 == "H") {
        alert(`converted: ${num1/60}H`)
    } else if (tp1 == "M" && tp2 == "S") {
        alert(`converted: ${num1*60}S`)
    } else if (tp1 == "S" && tp2 == "H") {
        alert(`converted: ${num1/3600}H`)
    } else if (tp1 == "S" && tp2 == "M") {
        alert(`converted: ${num1/60}M`)
    } else {
        alert("only H,M,S ; first input should not be same as second input")

    }
}