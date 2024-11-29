function convert() {
    let num1 = Number(prompt("number to convert kilometer,meterm,centimeter: "));
    let tp1 = prompt("unit for the input (KM/M/CM) : ");
    let tp2 = prompt("unit for the output (KM/M/CM) : ");

    if (tp1 == "KM" && tp2 == "M") {
        alert(`converted: ${num1*1000}M`)
    } else if (tp1 == "KM" && tp2 == "CM") {
        alert(`converted: ${num1*100000}CM`)
    } else if (tp1 == "M" && tp2 == "KM") {
        alert(`converted: ${num1/1000}KM`)
    } else if (tp1 == "M" && tp2 == "CM") {
        alert(`converted: ${num1*100}CM`)
    } else if (tp1 == "CM" && tp2 == "KM") {
        alert(`converted: ${num1/100000}KM`)
    } else if (tp1 == "CM" && tp2 == "M") {
        alert(`converted: ${num1/100}M`)
    } else {
        alert("only H,M,S ; first input should not be same as second input")

    }
}