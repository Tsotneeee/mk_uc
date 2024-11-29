function convert() {
    let num1 = Number(prompt("number to convert kilometer^2,meterm^2,centimeter^2: "));
    let tp1 = prompt("unit for the input (KM/M/CM) : ");
    let tp2 = prompt("unit for the output (KM/M/CM) : ");

    if (tp1 == "KM" && tp2 == "M") {
        alert(`converted: ${num1*1000000}M^2`)
    } else if (tp1 == "KM" && tp2 == "CM") {
        alert(`converted: ${num1*10000000000}CM^2`)
    } else if (tp1 == "M" && tp2 == "KM") {
        alert(`converted: ${num1/1000000}KM^2`)
    } else if (tp1 == "M" && tp2 == "CM") {
        alert(`converted: ${num1*10000}CM^2`)
    } else if (tp1 == "CM" && tp2 == "KM") {
        alert(`converted: ${num1/10000000000}KM^2`)
    } else if (tp1 == "CM" && tp2 == "M") {
        alert(`converted: ${num1/10000}M^2`)
    } else {
        alert("only H,M,S ; first input should not be same as second input")

    }
}