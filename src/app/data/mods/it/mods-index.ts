import {MOD_LIGHT_WEAPON_DATA_IT} from "./mod-light-weapon";
import {MOD_HEAVY_WEAPON_DATA_IT} from "./mod-heavy-weapon";
import {MOD_ITERGY_WEAPON_DATA_IT} from "./mod-energy-weapon";
import {MOD_MELEE_WEAPON_DATA_IT} from "./mod-melee-weapon";
import {MOD_ROBOT_ARMOR_DATA_IT} from "./mod-robot-armor";
import {MOD_OUTFITS_IT} from "./mod-outfit";
import {MOD_RAIDER_ARMOR_IT} from "./mod-raider-armor";
import {MOD_LEATHER_ARMOR_IT} from "./mod-leather-armor";
import {MOD_METAL_ARMOR_IT} from "./mod-metal-armor";
import {MOD_COMBAT_ARMOR_IT} from "./mod-combat-armor";
import {MOD_SYNTH_ARMOR_IT} from "./mod-synth-armor";
import {DataTableDefinition} from "../../generic-data-lang";
import {MOD_POWER_ARMOR_IT} from "./mod-power-armor";

export const MOD_DEF_IT: DataTableDefinition[] = [
  {
    column: 'Name',
    label: 'Name'
  },
  {
    column: 'Type',
    label: 'Type'
  },
  {
    column: 'Localisation',
    label: 'Localisation'
  },
  {
    column: 'PhysicalRes',
    label: 'Phys. Resistance'
  },
  {
    column: 'EnergyRes',
    label: 'Energy Resistance'
  },
  {
    column: 'BodyParts',
    label: 'Body parts'
  },
  {
    column: 'Effect1',
    label: 'Effect 1'
  },
  {
    column: 'Effect2',
    label: 'Effect 2'
  },
  {
    column: 'Effect3',
    label: 'Effect 3'
  },
  {
    column: 'Effect4',
    label: 'Effect 4'
  },
  {
    column: 'Effect4',
    label: 'Effect 5'
  },
  {
    column: 'MaxCarry',
    label: 'Max Carry'
  },
  {
    column: 'Weight',
    label: 'Weight'
  },
  {
    column: 'Cost',
    label: 'Cost'
  },
  {
    column: 'Skills',
    label: 'Skills'
  },
  {
    column: 'Special',
    label: 'Special'
  },
]

export const MODS_TABLE_DATA_IT = {
  'light-weapons': {
    label: "Light weapon mods",
    mods: MOD_LIGHT_WEAPON_DATA_IT
  },
  'heavy-weapons': {
    label: "Heavy weapon mods",
    mods: MOD_HEAVY_WEAPON_DATA_IT
  },
  'energy-weapons': {
    label: "Energy weapon mods",
    mods: MOD_ITERGY_WEAPON_DATA_IT
  },
  'melee-weapons': {
    label: "Melee weapon mods",
    mods: MOD_MELEE_WEAPON_DATA_IT
  },
  'robot-armor': {
    label: "Robot armor mods",
    mods: MOD_ROBOT_ARMOR_DATA_IT
  },
  'outfits': {
    label: "Clothe and outfit mods",
    mods: MOD_OUTFITS_IT
  },
  'raider-armor': {
    label: "Raider armor mods",
    mods: MOD_RAIDER_ARMOR_IT
  },
  'leather-armor': {
    label: "Leather armor mods",
    mods: MOD_LEATHER_ARMOR_IT
  },
  'metal-armor': {
    label: "Metal armor mods",
    mods: MOD_METAL_ARMOR_IT
  },
  'combat-armor': {
    label: "Combat armor mods",
    mods: MOD_COMBAT_ARMOR_IT
  },
  'synth-armor': {
    label: "Synth armor mods",
    mods: MOD_SYNTH_ARMOR_IT
  },
  'power-armor': {
    label: "Power armor mods",
    mods: MOD_POWER_ARMOR_IT
  }
}
