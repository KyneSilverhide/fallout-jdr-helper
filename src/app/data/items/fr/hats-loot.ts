import {DataTableDefinition} from "../../generic-data-lang";

export const HATS_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'PhysicalRes',
  label: 'Résistance ballistique'
}, {
  column: 'EnergyRes',
  label: 'Résistance energétique'
}, {
  column: 'RadiationRes',
  label: 'Résistance radiation'
}, {
  column: 'BodyParts',
  label: 'Parties couvertes'
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
  column: 'Special',
  label: 'Spécial'
}]

export const HATS_LOOT_DATA_FR = [
  {
    Name: 'Chapeau décontracté',
    PhysicalRes: 0,
    EnergyRes: 0,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: '< 0,5',
    Cost: 15,
    Rarity: 1,
    Special: "Permet d'ignorer toute augmentation de difficulté liée causée par une lumière extrèmement vive",
    id: 1
  },
  {
    Name: 'Casque militaire',
    PhysicalRes: 2,
    EnergyRes: 0,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: '1,5',
    Cost: 20,
    Rarity: 1,
    Special: '',
    id: 2
  },
  {
    Name: 'Chapeau de scribe de la Confrérie',
    PhysicalRes: 0,
    EnergyRes: 2,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: '< 0,5',
    Cost: 8,
    Rarity: 2,
    Special: '',
    id: 3
  },
  {
    Name: "Cagoule de la Confrérie de l'Acier",
    PhysicalRes: 0,
    EnergyRes: 1,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: '< 0,5',
    Cost: 12,
    Rarity: 2,
    Special: '',
    id: 4
  },
  {
    Name: 'Sac cagoule',
    PhysicalRes: 0,
    EnergyRes: 0,
    RadiationRes: 2,
    BodyParts: 'Tête',
    Weight: '0,5',
    Cost: 5,
    Rarity: '0',
    Special: '',
    id: 5
  },
  {
    Name: 'Cagoule ou Capuche',
    PhysicalRes: 1,
    EnergyRes: 0,
    RadiationRes: 1,
    BodyParts: 'Tête',
    Weight: 1,
    Cost: 5,
    Rarity: 1,
    Special: '',
    id: 6
  },
  {
    Name: 'Casque de chantier',
    PhysicalRes: 2,
    EnergyRes: 0,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: '< 0,5',
    Cost: 15,
    Rarity: 1,
    Special: '',
    id: 7
  },
  {
    Name: 'Masque de soudure',
    PhysicalRes: 2,
    EnergyRes: 2,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: 2,
    Cost: 20,
    Rarity: 2,
    Special: '',
    id: 8
  },
  {
    Name: 'Chapeau élégant',
    PhysicalRes: 0,
    EnergyRes: 0,
    RadiationRes: 0,
    BodyParts: 'Tête',
    Weight: '< 0,5',
    Cost: 15,
    Rarity: 2,
    Special: 'Permet de relancer une fois par scène un seul D20 sur un test de compétence basé sur le CHR car il aide à faire bonne impression',
    id: 9
  },
  {
    Name: 'Masque à gaz',
    PhysicalRes: 1,
    EnergyRes: 0,
    RadiationRes: 3,
    BodyParts: 'Tête',
    Weight: '1,5',
    Cost: 10,
    Rarity: 2,
    Special: "Fournit +3 résistance dégâts de poison contre tous les poisons présents dans l'atmosphère ou gazeux. Immunise aux effets liés au gaz et à la poussière. Augmente de 1 la difficulté de tous les tests de Discours car le masque étouffe la voix du porteur,",
    id: 10
  }
]

