import React from "react";
import motiv from'../statique/motiv.jpg';
import'./Hgo.css';
import Button from'./Button.jsx'

function Hgo(){
    return(
        <div>
<div className="filo">
<img src={motiv} alt="image de motivation" />
<p> andi des mois ou eni net3alem fi react.js et fi zebi barcha effore barcha t3ab 
    konet najem lahkika na3mel ma5ir mel loul leken ken mon depart 0 apres j'ai personne pour 
    maider el kolha tahchi fih ma talka ken li ijik bech imargek woila yedha fi zebi wahdi ou dimma yemchi
    3alla akal wahdi ou el hamdoulah 
</p>
<Button />
</div>
        </div>
    );
}

export default Hgo;