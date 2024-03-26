import React from "react";
import Button from "./Button";

const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => ( // Ajout de l'argument "index"
                <li key={`${plant}-${index}`}>{ plant }</li> // Utilisation correcte de l'index
            ))}

            <Button />
        </ul>
    )
}

export default ShoppingList;
