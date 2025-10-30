
import * as file from '../assets/dades/dades.json' with { type: "json" };
const dades = file.default.equips;//dades és un array d'equips, ara

// A partir d'un nom d'un equip ('Valencia', 'Levante', 'Barcelona', ... ), 
// obtinc l'objecte d'eixe equip amb totes seues dades.
const getObjEquip = (nomEquip) => {
 return dades.filter((elem) => elem.strTeam === nomEquip)[0];
}

//a partir d'un obj amb les dades d'un equip, obtinc la imatge (strTeamShort+"png")
const getUrlImatgeEscut = (unEquipObj)=>{
    return unEquipObj.strLogo;
}

//obtinc l'any de fundació (intFormedYear)
const getAnyFundacio = (unEquipObj)=>{
    return unEquipObj.intFormedYear;
}

//obtinc l'any de fundació (intFormedYear)
const getNomEstadi = (unEquipObj)=>{
    return unEquipObj.strStadium;
}

//obtinc el nom de l'equip (strTeam)
const getNomEquip = (unEquipObj)=>{
   return unEquipObj.strTeam;
}

//obtinc la fitxa de l'equip.
//La fitxa consisteix en un objecte amb els atributs: nom,imatgeEscut,anyFundacio,estadi
const getFitxaEquip = (unEquipObj)=>{
   let objDevuelto = { nombre: unEquipObj.strTeam, imagenLogo: unEquipObj.strLogo, anyFundacion: unEquipObj.intFormedYear, estadio: unEquipObj.strStadium};
   return objDevuelto;
}

const equipACercar = 'Girona';
let objetoEquipo = (getObjEquip(equipACercar));
console.log(getObjEquip(equipACercar));
console.log(getUrlImatgeEscut(objetoEquipo));
console.log(getAnyFundacio(objetoEquipo));
console.log(getNomEstadi(objetoEquipo));
console.log(getNomEquip(objetoEquipo));
console.log(getFitxaEquip(objetoEquipo));

