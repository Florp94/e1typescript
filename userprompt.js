import inquirer from "inquirer"

export async function promptNuevoGasto() {
    return await inquirer.prompt([
        {
            type: "list",
            name: "categoria del pago",
            message: "Elegí la categoria del consumo",
            choices: [`Casa`, `Auto`, `Colegio`]
        },
        {
            type: "input",
            name: "subcategoria",
            message: "Agregá el nombre del consumo"
        },

        {
            type: "number",
            name: "valor",
            message: "Valor"
        },
        {
            type: "list",
            name: "medio de pago",
            message: "Medio de pago",
            choices: [`Tarjeta`, `Efectivo`]
        },
    ])
};