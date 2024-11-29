function convert() {
    let num1 = Number(prompt("number to convert kilogram,gram,miligram: "));
    let tp1 = prompt("unit for the input (KG/G/MG) : ");
    let tp2 = prompt("unit for the output (KG/G/MG) : ");

    if (tp1 == "KG" && tp2 == "G") {
        alert(`converted: ${num1*1000}G`)
    } else if (tp1 == "KG" && tp2 == "MG") {
        alert(`converted: ${num1*1000000}MG`)
    } else if (tp1 == "G" && tp2 == "KG") {
        alert(`converted: ${num1/1000}KG`)
    } else if (tp1 == "G" && tp2 == "MG") {
        alert(`converted: ${num1*1000}MG`)
    } else if (tp1 == "MG" && tp2 == "KG") {
        alert(`converted: ${num1/1000000}`)
    } else if (tp1 == "MG" && tp2 == "G") {
        alert(`converted: ${num1/1000}G`)
    } else {
        alert("only H,M,S ; first input should not be same as second input")

    }
}