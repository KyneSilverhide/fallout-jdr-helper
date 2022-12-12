//TODO: Translate me !

import {GLOBAL_ARMOR_MODS_IT, MOD_BALLISTIC_WEAVE_IT} from "./mods-armor-global";

export const MOD_OUTFITS_IT = {
  "Harnais": [...GLOBAL_ARMOR_MODS_IT],
  "Uniforme de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_IT],
  "Vêtements décontractés": [...MOD_BALLISTIC_WEAVE_IT, ...GLOBAL_ARMOR_MODS_IT],
  "Vêtements de cuir": [...GLOBAL_ARMOR_MODS_IT],
  "Vêtements résistants": [...GLOBAL_ARMOR_MODS_IT],
  "Treillis militaire": [...MOD_BALLISTIC_WEAVE_IT, ...GLOBAL_ARMOR_MODS_IT],
  "Combinaison d'abri": [
    {
      "Name": "Revêtement isolant",
      "Type": "Revêtement de protection",
      "Effect1": "+1 résistance aux dégâts énergétiques",
      "Effect2": "",
      "Weight": "",
      "Cost": "+ 10 Caps",
      "Skills": ""
    },
    {
      "Name": "Revêtement traité",
      "Type": "Revêtement de protection",
      "Effect1": "+1 résistance aux dégâts énergétiques",
      "Effect2": "+1 résistance aux dégâts de radiation",
      "Weight": "+ 0,5 kg",
      "Cost": "+ 20 Caps",
      "Skills": "Armurier 2"
    },
    {
      "Name": "Revêtement résistant",
      "Type": "Revêtement de protection",
      "Effect1": "+2 résistance aux dégâts énergétiques",
      "Effect2": "+1 résistance aux dégâts de radiation",
      "Weight": "+ 0,5 kg",
      "Cost": "+ 30 Caps",
      "Skills": "Armurier 3"
    },
    {
      "Name": "Revêtement protecteur",
      "Type": "Revêtement de protection",
      "Effect1": "+2 résistance aux dégâts énergétiques",
      "Effect2": "+2 résistance aux dégâts de radiation",
      "Weight": "+ 0,5 kg",
      "Cost": "+ 40 Caps",
      "Skills": "Armurier 4, Scientifique 2"
    },
    {
      "Name": "Revêtement blindé",
      "Type": "Revêtement de protection",
      "Effect1": "+3 résistance aux dégâts énergétiques",
      "Effect2": "+3 résistance aux dégâts de radiation",
      "Weight": "+ 0,5 kg",
      "Cost": "+ 50 Caps",
      "Skills": "Armurier 4, Scientifique 4"
    }, ...GLOBAL_ARMOR_MODS_IT
  ],
  "Tenue de nomade": [...GLOBAL_ARMOR_MODS_IT],
  "Peaux": [...GLOBAL_ARMOR_MODS_IT],
  "Armure cage": [...GLOBAL_ARMOR_MODS_IT],
  "Armure d'ingénieur": [...GLOBAL_ARMOR_MODS_IT],
  "Manteau lourd": [...MOD_BALLISTIC_WEAVE_IT, ...GLOBAL_ARMOR_MODS_IT],
  "Blouse": [...MOD_BALLISTIC_WEAVE_IT, ...GLOBAL_ARMOR_MODS_IT],
  "Bleu de travail": [...GLOBAL_ARMOR_MODS_IT],
  "Vêtements élégants": [...MOD_BALLISTIC_WEAVE_IT, ...GLOBAL_ARMOR_MODS_IT],
  "Armure de scribe de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_IT],
  "Treillis de la Confrérie de l'Acier": [...GLOBAL_ARMOR_MODS_IT],
  "Combinaison étanche": [...GLOBAL_ARMOR_MODS_IT],
  "Armure à pointes": [...GLOBAL_ARMOR_MODS_IT],
};
