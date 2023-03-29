import {DataTableDefinition} from "../../generic-data-lang";

export const MELEEWEAPONS_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Type',
  label: 'Type'
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
}]

export const MELEEWEAPONS_LOOT_DATA_FR = [
  {
    Name: 'Attaque à Mains Nues',
    Type: 'Mains nues',
    Damage: '2 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: '0',
    Cost: '0',
    Rarity: '0',
    id: 'm-1'
  },
  {
    Name: 'Pierre',
    Type: 'Mains nues',
    Damage: '2 $CD$',
    Effect: 'Brutal',
    DamageType: 'Balistiques',
    Quality: 'Lancer ( C )',
    Weight: '0,5',
    Cost: '0',
    Rarity: '0',
    id: 'm-2'
  },
  {
    Name: 'Coup de Crosse (1 main)',
    Type: 'Armes de corps à corps',
    Damage: '2 $CD$',
    Effect: 'Etourdissant',
    DamageType: 'Balistiques',
    Quality: "Même que l'arme",
    Weight: "Même que l'arme",
    Cost: "Même que l'arme",
    Rarity: "Même que l'arme",
    id: 'm-3'
  },
  {
    Name: 'Coup de Crosse',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: 'Etourdissant',
    DamageType: 'Balistiques',
    Quality: "Même que l'arme à distance à Deux mains",
    Weight: "Même que l'arme à distance à Deux mains",
    Cost: "Même que l'arme à distance à Deux mains",
    Rarity: "Même que l'arme à distance à Deux mains",
    id: 'm-4'
  },
  {
    Name: 'Epée',
    Type: 'Armes de corps à corps',
    Damage: '4 $CD$',
    Effect: 'Perforant 1',
    DamageType: 'Balistiques',
    Quality: 'Parade',
    Weight: '1,5',
    Cost: 50,
    Rarity: 2,
    id: 'm-5'
  },
  {
    Name: 'Couteau de Combat',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: 'Perforant 1',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: '0,5',
    Cost: 25,
    Rarity: 1,
    id: 'm-6'
  },
  {
    Name: 'Machette',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: 'Perforant 1',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: 1,
    Cost: 25,
    Rarity: 1,
    id: 'm-7'
  },
  {
    Name: 'Eventreur',
    Type: 'Armes de corps à corps',
    Damage: '4 $CD$',
    Effect: 'Brutal',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: 3,
    Cost: 50,
    Rarity: 2,
    id: 'm-8'
  },
  {
    Name: 'Flambeur',
    Type: 'Armes de corps à corps',
    Damage: '5 $CD$',
    Effect: 'Perforant 1',
    DamageType: 'Energétiques',
    Quality: 'Parade',
    Weight: '1,5',
    Cost: 200,
    Rarity: 3,
    id: 'm-9'
  },
  {
    Name: "Cran d'Arrêt",
    Type: 'Armes de corps à corps',
    Damage: '2 $CD$',
    Effect: 'Perforant 1',
    DamageType: 'Balistiques',
    Quality: 'Dissimulé',
    Weight: '0,5',
    Cost: 20,
    Rarity: '0',
    id: 'm-10'
  },
  {
    Name: 'Batte de baseball',
    Type: 'Armes de corps à corps',
    Damage: '4 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: 'Deux mains',
    Weight: '1,5',
    Cost: 25,
    Rarity: 1,
    id: 'm-11'
  },
  {
    Name: 'Batte de baseball en aluminium',
    Type: 'Armes de corps à corps',
    Damage: '5 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: 'Deux mains',
    Weight: 1,
    Cost: 32,
    Rarity: 2,
    id: 'm-12'
  },
  {
    Name: 'Planche',
    Type: 'Armes de corps à corps',
    Damage: '4 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: 'Deux mains',
    Weight: '1,5',
    Cost: 20,
    Rarity: '0',
    id: 'm-13'
  },
  {
    Name: 'Tuyau de plomb',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: '1,5',
    Cost: 15,
    Rarity: '0',
    id: 'm-14'
  },
  {
    Name: 'Clé Serre-Tube',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: 1,
    Cost: 30,
    Rarity: 1,
    id: 'm-15'
  },
  {
    Name: 'Queue de billard',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: 'Deux mains',
    Weight: '0,5',
    Cost: 10,
    Rarity: '0',
    id: 'm-16'
  },
  {
    Name: 'Rouleau à pâtisserie',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: '0,5',
    Cost: 10,
    Rarity: '0',
    id: 'm-17'
  },
  {
    Name: 'Matraque',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: '0,5',
    Cost: 10,
    Rarity: '0',
    id: 'm-18'
  },
  {
    Name: 'Masse',
    Type: 'Armes de corps à corps',
    Damage: '5 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: 'Deux mains',
    Weight: 6,
    Cost: 40,
    Rarity: 2,
    id: 'm-19'
  },
  {
    Name: 'Super Masse',
    Type: 'Armes de corps à corps',
    Damage: '6 $CD$',
    Effect: 'Destructeur',
    DamageType: 'Balistiques',
    Quality: 'Deux mains',
    Weight: 10,
    Cost: 180,
    Rarity: 3,
    id: 'm-20'
  },
  {
    Name: 'Démonte-pneu',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: 1,
    Cost: 25,
    Rarity: 1,
    id: 'm-21'
  },
  {
    Name: 'Canne',
    Type: 'Armes de corps à corps',
    Damage: '3 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: 1,
    Cost: 10,
    Rarity: '0',
    id: 'm-22'
  },
  {
    Name: 'Gant de boxe',
    Type: 'Mains nues',
    Damage: '3 $CD$',
    Effect: 'Etourdissant',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: '0,5',
    Cost: 10,
    Rarity: 1,
    id: 'm-23'
  },
  {
    Name: "Gantelet d'écorcheur",
    Type: 'Mains nues',
    Damage: '5 $CD$',
    Effect: 'Perforant 1',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: 5,
    Cost: 75,
    Rarity: 3,
    id: 'm-24'
  },
  {
    Name: 'Poing américain',
    Type: 'Mains nues',
    Damage: '3 $CD$',
    Effect: '',
    DamageType: 'Balistiques',
    Quality: 'Dissimulé',
    Weight: '<0,5',
    Cost: 10,
    Rarity: 1,
    id: 'm-25'
  },
  {
    Name: 'Poing assisté',
    Type: 'Mains nues',
    Damage: '4 $CD$',
    Effect: 'Etourdissant',
    DamageType: 'Balistiques',
    Quality: '',
    Weight: 2,
    Cost: 100,
    Rarity: 2,
    id: 'm-26'
  }
]

