import inquirer from "inquirer";
import { promptNuevoGasto } from "./userprompt.js";
import { save, get } from "./filedata.js";


const main = async () => {
    let run = true;
    while(run){
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "chossen", 
                message: "Actions",
                choices: [
                    {
                        value: 1, name: "Agregar nuevo Consumo"
                    },
                    {
                        value: 2 , name: "Lista de Consumos"
                    },
                    {
                        value: 3, name: "Exit"
                    }
        
                ]
            }
        ]);

        switch (action.chossen) {
            case 1:
                await crearNuevoGasto()
                break;
            case 2:
                await todosLosGastos()
            case 3:
                run = false
            default:
                run = false
                break;
        }
    }
};


main();

async function crearNuevoGasto(){
    console.log("Agregar");

    const newGasto = await promptNuevoGasto();

    console.log("Información del Consumo", newGasto);
 
    const currentGasto = await get("datosgasto.json");

    currentGasto.push(newGasto);

    await save("datosgasto.json", currentGasto);
}

async function todosLosGastos(){
    const currentGasto = await get("datosgasto.json")

    console.log(currentGasto);
}