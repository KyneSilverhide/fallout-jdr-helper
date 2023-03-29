import {DataTableDefinition} from "../../generic-data-lang";

export const HEAVYWEAPONS_LOOT_DEF_FR: DataTableDefinition[] = [
  {
    column: 'Name',
    label: 'Nom'
  }, {
    column: 'Damage',
    label: 'Degâts'
  }, {
    column: 'Effect',
    label: 'Effet'
  }, {
    column: 'DamageType',
    label: 'Type Degâts'
  }, {
    column: 'Rate',
    label: 'Cadence'
  },
  {
    column: 'Range',
    label: 'Portée'
  },
  {
    column: 'Quality',
    label: 'Qualités'
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

export const HEAVYWEAPONS_LOOT_DATA_FR = [
  {
    Name: 'Fat Man',
    Damage: '21 $CD$',
    Effect: 'Brutal, Destructeur, Radioactif',
    DamageType: 'Balistiques',
    Rate: 0,
    Range: 'M',
    Quality: "Deux mains, Imprécis, Zone d'Impact",
    Weight: '15,5',
    Cost: 512,
    Rarity: 4,
    Munitions: 'Mini-bombes nucléaires',
    id: 'h-1'
  },
  {
    Name: 'Incinérateur Lourd',
    Damage: '5 $CD$',
    Effect: 'De Zone, En Rafale, Persistant',
    DamageType: 'Energétiques',
    Rate: 3,
    Range: 'M',
    Quality: 'Deux mains, Invalidant',
    Weight: 10,
    Cost: 350,
    Rarity: 4,
    Munitions: 'Carburant de lance-flammes',
    id: 'h-2'
  },
  {
    Name: 'Junk Jet',
    Damage: '6 $CD$',
    Effect: "Quand vous tirez avec le Junk Jet, choisissez un objet que vous transportez actuellement sur vous ; cet objet est tiré par l'arme. \n" +
      "Choisissez un objet supplémentaire pour chaque tir de munitions supplémentaire dépensé par l'attaque. Les objets doivent être assez petits pour être tenus dans une main et chargés dans le réservoir. À la fin de la scène, vous pouvez lancer 1 $CD$ par\n" +
      "objet tiré avec le Junk Jet ; si vous obtenez un Effet, l'objet a survécu à l'attaque et peut être récupéré.",
    DamageType: 'Balistiques',
    Rate: 1,
    Range: 'M',
    Quality: 'Deux mains',
    Weight: 15,
    Cost: 285,
    Rarity: 3,
    Munitions: "N'importe quoi",
    id: 'h-3'
  },
  {
    Name: 'Lance Flammes',
    Damage: '3 $CD$',
    Effect: 'De Zone, En Rafale, Persistant',
    DamageType: 'Energétiques',
    Rate: 4,
    Range: 'C',
    Quality: 'Deux mains ,Imprécis, Invalidant',
    Weight: '8,5',
    Cost: 137,
    Rarity: 3,
    Munitions: 'Carburant de lance-flammes',
    id: 'h-4'
  },
  {
    Name: 'Lance Missile',
    Damage: '11 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Rate: 0,
    Range: 'L',
    Quality: "Deux mains, Zone d'Impact",
    Weight: '10,5',
    Cost: 314,
    Rarity: 4,
    Munitions: 'Missiles',
    id: 'h-5'
  },
  {
    Name: 'Gatling Laser',
    Damage: '3 $CD$',
    Effect: 'En Rafale, Perforant 1',
    DamageType: 'Energétiques',
    Rate: 6,
    Range: 'M',
    Quality: 'Deux mains, Gatling, Imprécis',
    Weight: '9,5',
    Cost: 804,
    Rarity: 3,
    Munitions: 'Cellules à fusion ou Réacteur à fusion',
    id: 'h-6'
  },
  {
    Name: 'Minigun',
    Damage: '3 $CD$',
    Effect: 'De Zone, En Rafale',
    DamageType: 'Balistiques',
    Rate: 5,
    Range: 'M',
    Quality: 'Deux mains, Gatling, Imprécis',
    Weight: '13,5',
    Cost: 382,
    Rarity: 2,
    Munitions: 'Cartouches 5 mm',
    id: 'h-7'
  }
]


