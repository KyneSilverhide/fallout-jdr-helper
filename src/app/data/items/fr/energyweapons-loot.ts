import {DataTableDefinition} from "../../generic-data-lang";

export const ENERGYWEAPONS_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Damage',
  label: 'Degâts'
}, {
  column: 'Effect',
  label: 'Effet'
}, {
  column: 'Type',
  label: 'Type'
}, {
  column: 'Rate',
  label: 'Cadence'
}, {
  column: 'Range',
  label: 'Portée'
}, {
  column: 'Bonus',
  label: 'Bonus'
}, {
  column: 'Weight',
  label: 'Poids'
}, {
  column: 'Cost',
  label: 'Prix'
}, {
  column: 'Rarity',
  label: 'Rareté'
}, {
  column: 'Munitions',
  label: 'Munitions'
}]

export const ENERGYWEAPONS_LOOT_DATA_FR = [
  {
    Name: "Laser de l'Institut",
    Damage: '3 $CD$',
    Effect: 'En rafale',
    Type: 'Énergétiques',
    Rate: 3,
    Range: 'C',
    Bonus: 'Combat rapproché, Imprécis',
    Weight: 2,
    Cost: 50,
    Rarity: 2,
    Munitions: 'Cellules à fusion',
    id: 'e-1'
  },
  {
    Name: 'Mousquet laser',
    Damage: '5 $CD$',
    Effect: 'Perforant 1',
    Type: 'Énergétiques',
    Rate: 0,
    Range: 'M',
    Bonus: 'Deux mains',
    Weight: '6,5',
    Cost: 57,
    Rarity: 1,
    Munitions: 'Cellules à fusion',
    id: 'e-2'
  },
  {
    Name: 'Arme laser',
    Damage: '4 $CD$',
    Effect: 'Perforant 1',
    Type: 'Énergétiques',
    Rate: 2,
    Range: 'C',
    Bonus: 'Combat rapproché',
    Weight: 2,
    Cost: 69,
    Rarity: 2,
    Munitions: 'Cellules à fusion',
    id: 'e-3'
  },
  {
    Name: 'Arme plasma',
    Damage: '6 $CD$',
    Effect: '–',
    Type: 'Balistiques/Énergétiques',
    Rate: 1,
    Range: 'C',
    Bonus: 'Combat rapproché',
    Weight: 2,
    Cost: 123,
    Rarity: 3,
    Munitions: 'Cartouches au plasma',
    id: 'e-4'
  },
  {
    Name: 'Pistolet Gamma',
    Damage: '3 $CD$',
    Effect: 'Étourdissant,Perforant 1',
    Type: 'De radiation',
    Rate: 1,
    Range: 'M',
    Bonus: "Imprécis, Zone d'impact",
    Weight: '1,5',
    Cost: 156,
    Rarity: 5,
    Munitions: 'Cartouche Gamma',
    id: 'e-5'
  }
]


