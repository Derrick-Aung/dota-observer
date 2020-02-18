import { GET_TEAMS, GET_ALL_PRO_MATCHES, GET_LEAGUES, GET_PREMIUM_MATCHES } from '../actions/types'

const initState = {
    posts: [
        {id: 1, title: 'asdfjkllhahahadsf', content: 'Lorem ipsum dolor sit amet.'},
        {id: 2, title: 'dddd', content: 'Lorem ipsum dolor sit amet.'},
        {id: 3, title: 'ffff', content: 'Lorem ipsum dolor sit amet.'}
    ],
    heroes_list: {
        "1": "/apps/dota2/images/heroes/antimage_full.png?",
        "2": "/apps/dota2/images/heroes/axe_full.png?",
        "3": "/apps/dota2/images/heroes/bane_full.png?",
        "4": "/apps/dota2/images/heroes/bloodseeker_full.png?",
        "5": "/apps/dota2/images/heroes/crystal_maiden_full.png?",
        "6": "/apps/dota2/images/heroes/drow_ranger_full.png?",
        "7": "/apps/dota2/images/heroes/earthshaker_full.png?",
        "8": "/apps/dota2/images/heroes/juggernaut_full.png?",
        "9": "/apps/dota2/images/heroes/mirana_full.png?",
        "10": "/apps/dota2/images/heroes/morphling_full.png?",
        "11": "/apps/dota2/images/heroes/nevermore_full.png?",
        "12": "/apps/dota2/images/heroes/phantom_lancer_full.png?",
        "13": "/apps/dota2/images/heroes/puck_full.png?",
        "14": "/apps/dota2/images/heroes/pudge_full.png?",
        "15": "/apps/dota2/images/heroes/razor_full.png?",
        "16": "/apps/dota2/images/heroes/sand_king_full.png?",
        "17": "/apps/dota2/images/heroes/storm_spirit_full.png?",
        "18": "/apps/dota2/images/heroes/sven_full.png?",
        "19": "/apps/dota2/images/heroes/tiny_full.png?",
        "20": "/apps/dota2/images/heroes/vengefulspirit_full.png?",
        "21": "/apps/dota2/images/heroes/windrunner_full.png?",
        "22": "/apps/dota2/images/heroes/zuus_full.png?",
        "23": "/apps/dota2/images/heroes/kunkka_full.png?",
        "25": "/apps/dota2/images/heroes/lina_full.png?",
        "26": "/apps/dota2/images/heroes/lion_full.png?",
        "27": "/apps/dota2/images/heroes/shadow_shaman_full.png?",
        "28": "/apps/dota2/images/heroes/slardar_full.png?",
        "29": "/apps/dota2/images/heroes/tidehunter_full.png?",
        "30": "/apps/dota2/images/heroes/witch_doctor_full.png?",
        "31": "/apps/dota2/images/heroes/lich_full.png?",
        "32": "/apps/dota2/images/heroes/riki_full.png?",
        "33": "/apps/dota2/images/heroes/enigma_full.png?",
        "34": "/apps/dota2/images/heroes/tinker_full.png?",
        "35": "/apps/dota2/images/heroes/sniper_full.png?",
        "36": "/apps/dota2/images/heroes/necrolyte_full.png?",
        "37": "/apps/dota2/images/heroes/warlock_full.png?",
        "38": "/apps/dota2/images/heroes/beastmaster_full.png?",
        "39": "/apps/dota2/images/heroes/queenofpain_full.png?",
        "40": "/apps/dota2/images/heroes/venomancer_full.png?",
        "41": "/apps/dota2/images/heroes/faceless_void_full.png?",
        "42": "/apps/dota2/images/heroes/skeleton_king_full.png?",
        "43": "/apps/dota2/images/heroes/death_prophet_full.png?",
        "44": "/apps/dota2/images/heroes/phantom_assassin_full.png?",
        "45": "/apps/dota2/images/heroes/pugna_full.png?",
        "46": "/apps/dota2/images/heroes/templar_assassin_full.png?",
        "47": "/apps/dota2/images/heroes/viper_full.png?",
        "48": "/apps/dota2/images/heroes/luna_full.png?",
        "49": "/apps/dota2/images/heroes/dragon_knight_full.png?",
        "50": "/apps/dota2/images/heroes/dazzle_full.png?",
        "51": "/apps/dota2/images/heroes/rattletrap_full.png?",
        "52": "/apps/dota2/images/heroes/leshrac_full.png?",
        "53": "/apps/dota2/images/heroes/furion_full.png?",
        "54": "/apps/dota2/images/heroes/life_stealer_full.png?",
        "55": "/apps/dota2/images/heroes/dark_seer_full.png?",
        "56": "/apps/dota2/images/heroes/clinkz_full.png?",
        "57": "/apps/dota2/images/heroes/omniknight_full.png?",
        "58": "/apps/dota2/images/heroes/enchantress_full.png?",
        "59": "/apps/dota2/images/heroes/huskar_full.png?",
        "60": "/apps/dota2/images/heroes/night_stalker_full.png?",
        "61": "/apps/dota2/images/heroes/broodmother_full.png?",
        "62": "/apps/dota2/images/heroes/bounty_hunter_full.png?",
        "63": "/apps/dota2/images/heroes/weaver_full.png?",
        "64": "/apps/dota2/images/heroes/jakiro_full.png?",
        "65": "/apps/dota2/images/heroes/batrider_full.png?",
        "66": "/apps/dota2/images/heroes/chen_full.png?",
        "67": "/apps/dota2/images/heroes/spectre_full.png?",
        "68": "/apps/dota2/images/heroes/ancient_apparition_full.png?",
        "69": "/apps/dota2/images/heroes/doom_bringer_full.png?",
        "70": "/apps/dota2/images/heroes/ursa_full.png?",
        "71": "/apps/dota2/images/heroes/spirit_breaker_full.png?",
        "72": "/apps/dota2/images/heroes/gyrocopter_full.png?",
        "73": "/apps/dota2/images/heroes/alchemist_full.png?",
        "74": "/apps/dota2/images/heroes/invoker_full.png?",
        "75": "/apps/dota2/images/heroes/silencer_full.png?",
        "76": "/apps/dota2/images/heroes/obsidian_destroyer_full.png?",
        "77": "/apps/dota2/images/heroes/lycan_full.png?",
        "78": "/apps/dota2/images/heroes/brewmaster_full.png?",
        "79": "/apps/dota2/images/heroes/shadow_demon_full.png?",
        "80": "/apps/dota2/images/heroes/lone_druid_full.png?",
        "81": "/apps/dota2/images/heroes/chaos_knight_full.png?",
        "82": "/apps/dota2/images/heroes/meepo_full.png?",
        "83": "/apps/dota2/images/heroes/treant_full.png?",
        "84": "/apps/dota2/images/heroes/ogre_magi_full.png?",
        "85": "/apps/dota2/images/heroes/undying_full.png?",
        "86": "/apps/dota2/images/heroes/rubick_full.png?",
        "87": "/apps/dota2/images/heroes/disruptor_full.png?",
        "88": "/apps/dota2/images/heroes/nyx_assassin_full.png?",
        "89": "/apps/dota2/images/heroes/naga_siren_full.png?",
        "90": "/apps/dota2/images/heroes/keeper_of_the_light_full.png?",
        "91": "/apps/dota2/images/heroes/wisp_full.png?",
        "92": "/apps/dota2/images/heroes/visage_full.png?",
        "93": "/apps/dota2/images/heroes/slark_full.png?",
        "94": "/apps/dota2/images/heroes/medusa_full.png?",
        "95": "/apps/dota2/images/heroes/troll_warlord_full.png?",
        "96": "/apps/dota2/images/heroes/centaur_full.png?",
        "97": "/apps/dota2/images/heroes/magnataur_full.png?",
        "98": "/apps/dota2/images/heroes/shredder_full.png?",
        "99": "/apps/dota2/images/heroes/bristleback_full.png?",
        "100": "/apps/dota2/images/heroes/tusk_full.png?",
        "101": "/apps/dota2/images/heroes/skywrath_mage_full.png?",
        "102": "/apps/dota2/images/heroes/abaddon_full.png?",
        "103": "/apps/dota2/images/heroes/elder_titan_full.png?",
        "104": "/apps/dota2/images/heroes/legion_commander_full.png?",
        "105": "/apps/dota2/images/heroes/techies_full.png?",
        "106": "/apps/dota2/images/heroes/ember_spirit_full.png?",
        "107": "/apps/dota2/images/heroes/earth_spirit_full.png?",
        "108": "/apps/dota2/images/heroes/abyssal_underlord_full.png?",
        "109": "/apps/dota2/images/heroes/terrorblade_full.png?",
        "110": "/apps/dota2/images/heroes/phoenix_full.png?",
        "111": "/apps/dota2/images/heroes/oracle_full.png?",
        "112": "/apps/dota2/images/heroes/winter_wyvern_full.png?",
        "113": "/apps/dota2/images/heroes/arc_warden_full.png?",
        "114": "/apps/dota2/images/heroes/monkey_king_full.png?",
        "119": "/apps/dota2/images/heroes/dark_willow_full.png?",
        "120": "/apps/dota2/images/heroes/pangolier_full.png?",
        "121": "/apps/dota2/images/heroes/grimstroke_full.png?",
        "126": "/apps/dota2/images/heroes/void_spirit_full.png?",
        "128": "/apps/dota2/images/heroes/snapfire_full.png?",
        "129": "/apps/dota2/images/heroes/mars_full.png?"
    },
    items_list: {
        "blink": {
          "active": [
            {
              "name": "Blink",
              "desc": "Teleport to a target point up to 1200 units away. \n\nBlink Dagger cannot be used for 3 seconds after taking damage from an enemy hero or Roshan."
            }
          ],
          "id": 1,
          "img": "/apps/dota2/images/items/blink_lg.png?t=1580114426351",
          "dname": "Blink Dagger",
          "qual": "component",
          "cost": 2250,
          "notes": "Self-casting will cause you to teleport in the direction of your team's fountain.\nIf you used Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
          "attrib": [],
          "mc": false,
          "cd": 15,
          "lore": "The fabled dagger used by the fastest assassin ever to walk the lands.",
          "components": null,
          "created": false,
          "charges": false
        },
        "blades_of_attack": {
          "id": 2,
          "img": "/apps/dota2/images/items/blades_of_attack_lg.png?t=1580114426351",
          "dname": "Blades of Attack",
          "qual": "component",
          "cost": 430,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "9",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "The damage of these small, concealable blades should not be underestimated.",
          "components": null,
          "created": false,
          "charges": false
        },
        "broadsword": {
          "id": 3,
          "img": "/apps/dota2/images/items/broadsword_lg.png?t=1580114426351",
          "dname": "Broadsword",
          "qual": "component",
          "cost": 1200,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "18",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "The classic weapon of choice for knights, this blade is sturdy and reliable for slaying enemies.",
          "components": null,
          "created": false,
          "charges": false
        },
        "chainmail": {
          "id": 4,
          "img": "/apps/dota2/images/items/chainmail_lg.png?t=1580114426351",
          "dname": "Chainmail",
          "qual": "component",
          "cost": 550,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "4",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A medium weave of metal chains.",
          "components": null,
          "created": false,
          "charges": false
        },
        "claymore": {
          "id": 5,
          "img": "/apps/dota2/images/items/claymore_lg.png?t=1580114426351",
          "dname": "Claymore",
          "qual": "component",
          "cost": 1400,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "21",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A sword that can cut through armor, it's a commonly chosen first weapon for budding swordsmen.",
          "components": null,
          "created": false,
          "charges": false
        },
        "helm_of_iron_will": {
          "id": 6,
          "img": "/apps/dota2/images/items/helm_of_iron_will_lg.png?t=1580114426351",
          "dname": "Helm of Iron Will",
          "qual": "component",
          "cost": 900,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "5",
              "footer": "Armor"
            },
            {
              "key": "bonus_regen",
              "header": "+",
              "value": "3.5",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "The helmet of a legendary warrior who fell in battle.",
          "components": null,
          "created": false,
          "charges": false
        },
        "javelin": {
          "passive": [
            {
              "name": "Pierce",
              "desc": "Grants each attack a 25% chance to pierce through evasion and deal 100 bonus magical damage."
            }
          ],
          "id": 7,
          "img": "/apps/dota2/images/items/javelin_lg.png?t=1580114426351",
          "dname": "Javelin",
          "qual": "component",
          "cost": 1100,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "A rather typical spear that can sometimes pierce through an enemy's armor when used to attack.",
          "components": null,
          "created": false,
          "charges": false
        },
        "mithril_hammer": {
          "id": 8,
          "img": "/apps/dota2/images/items/mithril_hammer_lg.png?t=1580114426351",
          "dname": "Mithril Hammer",
          "qual": "component",
          "cost": 1600,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "24",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A hammer forged of pure mithril.",
          "components": null,
          "created": false,
          "charges": false
        },
        "platemail": {
          "id": 9,
          "img": "/apps/dota2/images/items/platemail_lg.png?t=1580114426351",
          "dname": "Platemail",
          "qual": "secret_shop",
          "cost": 1400,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "10",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Thick metal plates that protect the entire upper body. Avoid dropping on feet.",
          "components": null,
          "created": false,
          "charges": false
        },
        "quarterstaff": {
          "id": 10,
          "img": "/apps/dota2/images/items/quarterstaff_lg.png?t=1580114426351",
          "dname": "Quarterstaff",
          "qual": "component",
          "cost": 875,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "10",
              "footer": "Damage"
            },
            {
              "key": "bonus_speed",
              "header": "+",
              "value": "10",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A basic staff that allows you to strike quickly.",
          "components": null,
          "created": false,
          "charges": false
        },
        "quelling_blade": {
          "active": [
            {
              "name": "Chop Tree",
              "desc": "Destroy a target tree. \n\nCast Range: 350"
            }
          ],
          "passive": [
            {
              "name": "Quell",
              "desc": "Increases attack damage against non-hero units by 18 for melee heroes, and 5 for ranged."
            }
          ],
          "id": 11,
          "img": "/apps/dota2/images/items/quelling_blade_lg.png?t=1580114426351",
          "dname": "Quelling Blade",
          "qual": "component",
          "cost": 150,
          "notes": "Effects of multiple quelling blades do not stack.",
          "attrib": [],
          "mc": false,
          "cd": 4,
          "lore": "The axe of a fallen gnome, it allows you to effectively maneuver the forest.",
          "components": null,
          "created": false,
          "charges": false
        },
        "faerie_fire": {
          "use": [
            {
              "name": "Imbue",
              "desc": "Instantly restores 85 health."
            }
          ],
          "id": 237,
          "img": "/apps/dota2/images/items/faerie_fire_lg.png?t=1580114426351",
          "dname": "Faerie Fire",
          "qual": "consumable",
          "cost": 70,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "2",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": 5,
          "lore": "The ethereal flames from the ever-burning ruins of Kindertree ignite across realities.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "infused_raindrop": {
          "passive": [
            {
              "name": "Magical Damage Block",
              "desc": "Consumes a charge to block 120 magic damage from damage instances over 50 damage. \n\nComes with 6 charges. When the charges are gone, the item disappears."
            }
          ],
          "id": 265,
          "img": "/apps/dota2/images/items/infused_raindrop_lg.png?t=1580114426351",
          "dname": "Infused Raindrops",
          "qual": "component",
          "cost": 225,
          "notes": "Uses at most one charge per damage instance.",
          "attrib": [
            {
              "key": "mana_regen",
              "header": "+",
              "value": "0.75",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": 7,
          "lore": "Elemental protection from magical assaults.",
          "components": null,
          "created": false,
          "charges": 6
        },
        "wind_lace": {
          "hint": [
            "Bonuses from multiple Wind Laces do not stack."
          ],
          "id": 244,
          "img": "/apps/dota2/images/items/wind_lace_lg.png?t=1580114426351",
          "dname": "Wind Lace",
          "qual": "component",
          "cost": 250,
          "notes": "",
          "attrib": [
            {
              "key": "movement_speed",
              "header": "+",
              "value": "20",
              "footer": "Movement Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Hasten to battle on wind-touched heels.",
          "components": null,
          "created": false,
          "charges": false
        },
        "ring_of_protection": {
          "id": 12,
          "img": "/apps/dota2/images/items/ring_of_protection_lg.png?t=1580114426351",
          "dname": "Ring of Protection",
          "qual": "component",
          "cost": 150,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "2",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A glimmering ring that defends its bearer.",
          "components": null,
          "created": false,
          "charges": false
        },
        "stout_shield": {
          "passive": [
            {
              "name": "Damage Block",
              "desc": "Grants a 50% chance to block 20 damage from incoming attacks on melee heroes, and 8 damage on ranged."
            }
          ],
          "id": 182,
          "img": "/apps/dota2/images/items/stout_shield_lg.png?t=1580114426351",
          "dname": "Stout Shield",
          "qual": "component",
          "cost": 100,
          "notes": "Multiple sources of damage block do not stack.",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "One man's wine barrel bottom is another man's shield.",
          "components": null,
          "created": false,
          "charges": false
        },
        "moon_shard": {
          "use": [
            {
              "name": "Consume",
              "desc": "Consume the Moon Shard to permanently gain 60 attack speed and 200 bonus night vision. Max 1 use."
            }
          ],
          "passive": [
            {
              "name": "Shade Sight",
              "desc": "Grants 400 bonus night vision."
            }
          ],
          "id": 247,
          "img": "/apps/dota2/images/items/moon_shard_lg.png?t=1580114426351",
          "dname": "Moon Shard",
          "qual": "consumable",
          "cost": 4000,
          "notes": "The bonus night vision works during Night Stalker's Darkness ability.",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "140",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Said to be a tear from the lunar goddess Selemene.",
          "components": [
            "hyperstone",
            "hyperstone"
          ],
          "created": true,
          "charges": false
        },
        "gauntlets": {
          "id": 13,
          "img": "/apps/dota2/images/items/gauntlets_lg.png?t=1580114426351",
          "dname": "Gauntlets of Strength",
          "qual": "component",
          "cost": 145,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "3",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Studded leather gloves that add brute strength.",
          "components": null,
          "created": false,
          "charges": false
        },
        "slippers": {
          "id": 14,
          "img": "/apps/dota2/images/items/slippers_lg.png?t=1580114426351",
          "dname": "Slippers of Agility",
          "qual": "component",
          "cost": 145,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "3",
              "footer": "Agility"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Light boots made from spider skin that tingles your senses.",
          "components": null,
          "created": false,
          "charges": false
        },
        "mantle": {
          "id": 15,
          "img": "/apps/dota2/images/items/mantle_lg.png?t=1580114426351",
          "dname": "Mantle of Intelligence",
          "qual": "component",
          "cost": 145,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "3",
              "footer": "Intelligence"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A beautiful sapphire mantle worn by generations of queens.",
          "components": null,
          "created": false,
          "charges": false
        },
        "branches": {
          "use": [
            {
              "name": "Plant Tree",
              "desc": "Targets the ground to plant a happy little tree that lasts for 20 seconds.\n\nRange: 400"
            }
          ],
          "id": 16,
          "img": "/apps/dota2/images/items/branches_lg.png?t=1580114426351",
          "dname": "Iron Branch",
          "qual": "consumable",
          "cost": 50,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "1",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A seemingly ordinary branch, its ironlike qualities are bestowed upon the bearer.",
          "components": null,
          "created": false,
          "charges": false
        },
        "belt_of_strength": {
          "id": 17,
          "img": "/apps/dota2/images/items/belt_of_strength_lg.png?t=1580114426351",
          "dname": "Belt of Strength",
          "qual": "component",
          "cost": 450,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "6",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A valued accessory for improving vitality.",
          "components": null,
          "created": false,
          "charges": false
        },
        "boots_of_elves": {
          "id": 18,
          "img": "/apps/dota2/images/items/boots_of_elves_lg.png?t=1580114426351",
          "dname": "Band of Elvenskin",
          "qual": "component",
          "cost": 450,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "6",
              "footer": "Agility"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A tensile fabric often used for its light weight and ease of movement.",
          "components": null,
          "created": false,
          "charges": false
        },
        "robe": {
          "id": 19,
          "img": "/apps/dota2/images/items/robe_lg.png?t=1580114426351",
          "dname": "Robe of the Magi",
          "qual": "component",
          "cost": 450,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "6",
              "footer": "Intelligence"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "This robe corrupts the soul of the user, but provides wisdom in return.",
          "components": null,
          "created": false,
          "charges": false
        },
        "circlet": {
          "id": 20,
          "img": "/apps/dota2/images/items/circlet_lg.png?t=1580114426351",
          "dname": "Circlet",
          "qual": "component",
          "cost": 155,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "2",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "An elegant circlet designed for human princesses.",
          "components": null,
          "created": false,
          "charges": false
        },
        "crown": {
          "id": 261,
          "img": "/apps/dota2/images/items/crown_lg.png?t=1580114426351",
          "dname": "Crown",
          "qual": "component",
          "cost": 450,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "4",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "ogre_axe": {
          "id": 21,
          "img": "/apps/dota2/images/items/ogre_axe_lg.png?t=1580114426351",
          "dname": "Ogre Axe",
          "qual": "component",
          "cost": 1000,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "10",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "You grow stronger just by holding it.",
          "components": null,
          "created": false,
          "charges": false
        },
        "blade_of_alacrity": {
          "id": 22,
          "img": "/apps/dota2/images/items/blade_of_alacrity_lg.png?t=1580114426351",
          "dname": "Blade of Alacrity",
          "qual": "component",
          "cost": 1000,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "10",
              "footer": "Agility"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A long blade imbued with time magic.",
          "components": null,
          "created": false,
          "charges": false
        },
        "staff_of_wizardry": {
          "id": 23,
          "img": "/apps/dota2/images/items/staff_of_wizardry_lg.png?t=1580114426351",
          "dname": "Staff of Wizardry",
          "qual": "component",
          "cost": 1000,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A staff of magical powers passed down from the eldest mages.",
          "components": null,
          "created": false,
          "charges": false
        },
        "ultimate_orb": {
          "id": 24,
          "img": "/apps/dota2/images/items/ultimate_orb_lg.png?t=1580114426351",
          "dname": "Ultimate Orb",
          "qual": "secret_shop",
          "cost": 2150,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "10",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A mystical orb containing the essence of life.",
          "components": null,
          "created": false,
          "charges": false
        },
        "gloves": {
          "id": 25,
          "img": "/apps/dota2/images/items/gloves_lg.png?t=1580114426351",
          "dname": "Gloves of Haste",
          "qual": "component",
          "cost": 400,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "20",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A pair of magical gloves that seems to render weapons weightless.",
          "components": null,
          "created": false,
          "charges": false
        },
        "lifesteal": {
          "passive": [
            {
              "name": "Lifesteal",
              "desc": "Heals the attacker for 15% of attack damage dealt."
            }
          ],
          "id": 26,
          "img": "/apps/dota2/images/items/lifesteal_lg.png?t=1580114426351",
          "dname": "Morbid Mask",
          "qual": "component",
          "cost": 900,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "A mask that drains the energy of those caught in its gaze.",
          "components": null,
          "created": false,
          "charges": false
        },
        "ring_of_regen": {
          "id": 27,
          "img": "/apps/dota2/images/items/ring_of_regen_lg.png?t=1580114426351",
          "dname": "Ring of Regen",
          "qual": "component",
          "cost": 250,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "2",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "This ring is considered a good luck charm among the Gnomes.",
          "components": null,
          "created": false,
          "charges": false
        },
        "ring_of_tarrasque": {
          "id": 279,
          "img": "/apps/dota2/images/items/ring_of_tarrasque_lg.png?t=1580114426351",
          "dname": "Ring of Tarrasque",
          "qual": "component",
          "cost": 700,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "150",
              "footer": "Health"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "3.75",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "sobi_mask": {
          "id": 28,
          "img": "/apps/dota2/images/items/sobi_mask_lg.png?t=1580114426351",
          "dname": "Sage's Mask",
          "qual": "component",
          "cost": 250,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "0.75",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A mask commonly used by mages and warlocks for various rituals.",
          "components": null,
          "created": false,
          "charges": false
        },
        "boots": {
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 29,
          "img": "/apps/dota2/images/items/boots_lg.png?t=1580114426351",
          "dname": "Boots of Speed",
          "qual": "component",
          "cost": 500,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "15%",
              "footer": "Movement Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Fleet footwear, increasing movement.",
          "components": null,
          "created": false,
          "charges": false
        },
        "gem": {
          "passive": [
            {
              "name": "True Sight",
              "desc": "Grants the ability to see invisible units and wards to any allied vision within 900 range of its carrier. "
            },
            {
              "name": "Everlasting",
              "desc": "Dropped on death, and cannot be destroyed."
            }
          ],
          "id": 30,
          "img": "/apps/dota2/images/items/gem_lg.png?t=1580114426351",
          "dname": "Gem of True Sight",
          "qual": "component",
          "cost": 900,
          "notes": "Disabled while on a courier.",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "Not one thrall creature of the depths,\r\nNor spirit bound in drowning's keep,\r\nNor Maelrawn the Tentacular,\r\nShall rest till seas, gem comes to sleep.",
          "components": null,
          "created": false,
          "charges": false
        },
        "cloak": {
          "id": 31,
          "img": "/apps/dota2/images/items/cloak_lg.png?t=1580114426351",
          "dname": "Cloak",
          "qual": "component",
          "cost": 550,
          "notes": "Stacks multiplicatively with other sources of spell resistance.",
          "attrib": [
            {
              "key": "tooltip_resist",
              "header": "+",
              "value": "15%",
              "footer": "Magic Resistance"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A cloak made of a magical material that works to dispel any magic cast on it.",
          "components": null,
          "created": false,
          "charges": false
        },
        "talisman_of_evasion": {
          "id": 32,
          "img": "/apps/dota2/images/items/talisman_of_evasion_lg.png?t=1580114426351",
          "dname": "Talisman of Evasion",
          "qual": "secret_shop",
          "cost": 1400,
          "notes": "Stacks diminishingly with other sources of Evasion.",
          "attrib": [
            {
              "key": "bonus_evasion",
              "header": "+",
              "value": "15%",
              "footer": "Evasion"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A necklace that allows you to anticipate enemy attacks.",
          "components": null,
          "created": false,
          "charges": false
        },
        "cheese": {
          "use": [
            {
              "name": "Fondue",
              "desc": "Instantly restores 2500 health and 1500 mana."
            }
          ],
          "id": 33,
          "img": "/apps/dota2/images/items/cheese_lg.png?t=1580114426351",
          "dname": "Cheese",
          "qual": "consumable",
          "cost": 1000,
          "notes": "Cheese is shareable.",
          "attrib": [],
          "mc": false,
          "cd": 40,
          "lore": "Made from the milk of a long lost Furbolg vendor, it restores the vitality of those who taste it.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "magic_stick": {
          "active": [
            {
              "name": "Energy Charge",
              "desc": "Instantly restores 15 health and mana per charge stored.\n\n Max 10 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability."
            }
          ],
          "id": 34,
          "img": "/apps/dota2/images/items/magic_stick_lg.png?t=1580114426351",
          "dname": "Magic Stick",
          "qual": "component",
          "cost": 200,
          "notes": "Gains charges for spells cast by visible enemies in 1200 range.\nCertain abilities and item abilities will not add charges.",
          "attrib": [],
          "mc": false,
          "cd": 13,
          "lore": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
          "components": null,
          "created": false,
          "charges": false
        },
        "recipe_magic_wand": {
          "id": 35,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Magic Wand Recipe",
          "cost": 150,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "magic_wand": {
          "active": [
            {
              "name": "Energy Charge",
              "desc": "Instantly restores 15 health and mana per charge stored. \n\nMax 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability."
            }
          ],
          "id": 36,
          "img": "/apps/dota2/images/items/magic_wand_lg.png?t=1580114426351",
          "dname": "Magic Wand",
          "qual": "common",
          "cost": 450,
          "notes": "Gains charges for spells cast by visible enemies in 1200 range.\nCertain abilities and item abilities will not add charges.",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "3",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": 13,
          "lore": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
          "components": [
            "magic_stick",
            "branches",
            "branches"
          ],
          "created": true,
          "charges": false
        },
        "ghost": {
          "active": [
            {
              "name": "Ghost Form",
              "desc": "You enter ghost form for 4 seconds, becoming immune to physical damage, but are unable to attack and -40% more vulnerable to magic damage."
            }
          ],
          "id": 37,
          "img": "/apps/dota2/images/items/ghost_lg.png?t=1580114426351",
          "dname": "Ghost Scepter",
          "qual": "component",
          "cost": 1500,
          "notes": "Ends if you become Spell Immune, and will have no effect if you are already Spell Immune.\nShares cooldown with Ethereal Blade.",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": 20,
          "lore": "Imbues the wielder with a ghostly presence, allowing them to evade physical damage.",
          "components": null,
          "created": false,
          "charges": false
        },
        "clarity": {
          "use": [
            {
              "name": "Replenish",
              "desc": "Grants 4.5 mana regeneration to the target for 50 seconds.\n\nIf the unit is attacked by an enemy hero or Roshan, the effect is lost.\n\nRange: 250"
            }
          ],
          "id": 38,
          "img": "/apps/dota2/images/items/clarity_lg.png?t=1580114426351",
          "dname": "Clarity",
          "qual": "consumable",
          "cost": 50,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "Clear water that enhances the ability to meditate.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "enchanted_mango": {
          "use": [
            {
              "name": "Eat Mango",
              "desc": "Instantly restores 110 mana.\n\nRange: 400"
            }
          ],
          "id": 216,
          "img": "/apps/dota2/images/items/enchanted_mango_lg.png?t=1580114426351",
          "dname": "Enchanted Mango",
          "qual": "consumable",
          "cost": 70,
          "notes": "Hold Control to use on a nearby allied hero.",
          "attrib": [
            {
              "key": "hp_regen",
              "header": "+",
              "value": "0.6",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "The bittersweet flavors of Jidi Isle are irresistible to amphibians.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "flask": {
          "use": [
            {
              "name": "Salve",
              "desc": "Grants 50 health regeneration to the target for 8 seconds.\n\nIf the unit is attacked by an enemy hero or Roshan, the effect is lost.\n\nRange: 250"
            }
          ],
          "id": 39,
          "img": "/apps/dota2/images/items/flask_lg.png?t=1580114426351",
          "dname": "Healing Salve",
          "qual": "consumable",
          "cost": 110,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "A magical salve that can quickly mend even the deepest of wounds.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "dust": {
          "use": [
            {
              "name": "Reveal",
              "desc": "Reveals and slows invisible heroes by -20% in a 1050 radius around the caster for 12 seconds."
            }
          ],
          "id": 40,
          "img": "/apps/dota2/images/items/dust_lg.png?t=1580114426351",
          "dname": "Dust of Appearance",
          "qual": "consumable",
          "cost": 90,
          "notes": "Places a debuff on enemy units in the area that reveals them when they are invisible.",
          "attrib": [],
          "mc": false,
          "cd": 30,
          "lore": "One may hide visage, but never volume.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "bottle": {
          "active": [
            {
              "name": "Regenerate",
              "desc": "Consumes a charge to restore 125 health and 75 mana over 2.5 seconds. If the hero is attacked by an enemy hero or Roshan, the effect is lost.\n\nThe Bottle automatically refills at the fountain.\n\nHold Control to use on an allied hero.\n\nRange: 350"
            }
          ],
          "passive": [
            {
              "name": "Store Rune",
              "desc": "Runes can be stored in the bottle for later use by right-clicking them. Unused runes will automatically activate after 2 minutes.\n\nUsing a stored rune fully refills the Bottle."
            }
          ],
          "id": 41,
          "img": "/apps/dota2/images/items/bottle_lg.png?t=1580114426351",
          "dname": "Bottle",
          "qual": "common",
          "cost": 650,
          "notes": "Bottle is shareable. Stored runes cannot be shared.\nIf Bottle does not have full charges and is placed on a courier, the courier's movement speed will be slowed by 30%.",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "An old bottle that survived the ages, the contents placed inside become enchanted.",
          "components": null,
          "created": false,
          "charges": 3
        },
        "ward_observer": {
          "use": [
            {
              "name": "Plant",
              "desc": "Plants an Observer Ward, an invisible watcher that gives ground vision in a 1600 radius to your team. Lasts 6 minutes.\n\nHold Control to give one Observer Ward to an allied hero.\n\nRange: 500"
            }
          ],
          "id": 42,
          "img": "/apps/dota2/images/items/ward_observer_lg.png?t=1580114426351",
          "dname": "Observer Ward",
          "qual": "consumable",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "lifetime",
              "header": "LIFETIME:",
              "value": "360",
              "generated": true
            }
          ],
          "mc": false,
          "cd": 1,
          "lore": "A form of half-sentient plant, often cultivated by apprentice wizards.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "ward_sentry": {
          "use": [
            {
              "name": "Plant",
              "desc": "Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a 1000 radius.\nLasts 8 minutes.\n\nDoes not grant ground vision.\nHold Control to give one Sentry Ward to an allied hero.\n\nRange: 500"
            }
          ],
          "id": 43,
          "img": "/apps/dota2/images/items/ward_sentry_lg.png?t=1580114426351",
          "dname": "Sentry Ward",
          "qual": "consumable",
          "cost": 75,
          "notes": "",
          "attrib": [
            {
              "key": "lifetime",
              "header": "LIFETIME:",
              "value": "480",
              "generated": true
            }
          ],
          "mc": false,
          "cd": 1,
          "lore": "A form of plant originally grown in the garden of a fearful king.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "ward_dispenser": {
          "use": [
            {
              "name": "Plant",
              "desc": "Plant the currently active ward.  Double-Click to switch the currently active ward.\n\nRange: 500"
            }
          ],
          "id": 218,
          "img": "/apps/dota2/images/items/ward_dispenser_lg.png?t=1580114426351",
          "dname": "Observer and Sentry Wards",
          "qual": "common",
          "cost": 75,
          "notes": "Hold Control to give one ward to an allied hero.",
          "attrib": [
            {
              "key": "observer_vision_range_tooltip",
              "header": "OBSERVER VISION RANGE:",
              "value": "1600"
            },
            {
              "key": "observer_duration_minutes_tooltip",
              "header": "OBSERVER DURATION (MINUTES):",
              "value": "6"
            },
            {
              "key": "true_sight_range",
              "header": "SENTRY TRUE SIGHT RANGE:",
              "value": "1000"
            },
            {
              "key": "sentry_duration_minutes_tooltip",
              "header": "SENTRY DURATION (MINUTES):",
              "value": "8"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Advancements in stacking efficiency have made wards easier to carry than ever.",
          "components": [
            "ward_sentry",
            "ward_observer"
          ],
          "created": true,
          "charges": false
        },
        "tango": {
          "use": [
            {
              "name": "Devour",
              "desc": "Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming an Ironwood Tree doubles the heal amount.\n\nComes with 3 charges.  Can be used on an allied hero to give them one Tango.\n\nTree Range: 165"
            }
          ],
          "id": 44,
          "img": "/apps/dota2/images/items/tango_lg.png?t=1580114426351",
          "dname": "Tango",
          "qual": "consumable",
          "cost": 90,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "Forage to survive on the battlefield.",
          "components": null,
          "created": false,
          "charges": 3
        },
        "tango_single": {
          "use": [
            {
              "name": "Devour",
              "desc": "Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming an Ironwood Tree doubles the heal amount.\n\nTree Range: 165"
            }
          ],
          "id": 241,
          "img": "/apps/dota2/images/items/tango_single_lg.png?t=1580114426351",
          "dname": "Tango (Shared)",
          "qual": "consumable",
          "cost": 30,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 60,
          "lore": "Om nom nom.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "courier": {
          "use": [
            {
              "name": "Deploy Courier",
              "desc": "Deploys a creature to carry items to and from your team's base."
            }
          ],
          "id": 45,
          "img": "/apps/dota2/images/items/courier_lg.png?t=1580114426351",
          "dname": "Animal Courier",
          "qual": "consumable",
          "cost": 50,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "Losing the courier is punishable by death.",
          "components": null,
          "created": false,
          "charges": false
        },
        "flying_courier": {
          "use": [
            {
              "name": "Upgrade Courier",
              "desc": "Upgrades your team's Animal Courier to a Flying Courier, granting it swift, unobstructed movement to carry items to and from your team's base. \n\nRequires a deployed Animal Courier."
            }
          ],
          "id": 286,
          "img": "/apps/dota2/images/items/flying_courier_lg.png?t=1580114426351",
          "dname": "Flying Courier",
          "qual": "consumable",
          "cost": 100,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "The faithful mount upon which soar the fortunes of battle.",
          "components": null,
          "created": false,
          "charges": false
        },
        "tpscroll": {
          "use": [
            {
              "name": "Teleport",
              "desc": "After channeling for 3 seconds, teleports you to a target friendly building. \n\nDouble-click to teleport to your team's base fountain."
            }
          ],
          "id": 46,
          "img": "/apps/dota2/images/items/tpscroll_lg.png?t=1580114426351",
          "dname": "Town Portal Scroll",
          "qual": "consumable",
          "cost": 50,
          "notes": "If multiple heroes teleport to the same location in succession, the channeling time will be increased for each successive hero.\nTeleport can be prevented or canceled by Root abilities.",
          "attrib": [],
          "mc": 75,
          "cd": 80,
          "lore": "What a hero truly needs.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "recipe_travel_boots": {
          "id": 47,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Boots of Travel Recipe",
          "cost": 2000,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "travel_boots": {
          "active": [
            {
              "name": "Teleport",
              "desc": "Teleports you to an allied non-hero unit or structure. Teleporting to a unit is interrupted if the target unit dies.\n\nAdds 10 seconds to the cooldown of Town Portal Scroll."
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 48,
          "img": "/apps/dota2/images/items/travel_boots_lg.png?t=1580114426351",
          "dname": "Boots of Travel",
          "qual": "common",
          "cost": 2500,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "32%",
              "footer": "Movement Speed"
            }
          ],
          "mc": 75,
          "cd": 45,
          "lore": "Winged boots that grant omnipresence.",
          "components": [
            "boots"
          ],
          "created": true,
          "charges": false
        },
        "travel_boots_2": {
          "active": [
            {
              "name": "Teleport",
              "desc": "Teleports you to any allied structure or unit, including heroes. Teleporting to a unit is interrupted if the target unit dies.\n\nAdds 10 seconds to the cooldown of Town Portal Scroll."
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 220,
          "img": "/apps/dota2/images/items/travel_boots_2_lg.png?t=1580114426351",
          "dname": "Boots of Travel",
          "qual": "common",
          "cost": 4500,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "35%",
              "footer": "Movement Speed"
            }
          ],
          "mc": 75,
          "cd": 45,
          "lore": "Winged boots that grant omnipresence.",
          "components": [
            "travel_boots",
            "recipe_travel_boots"
          ],
          "created": true,
          "charges": false
        },
        "phase_boots": {
          "active": [
            {
              "name": "Phase",
              "desc": "Gives 22% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly for 3 seconds."
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 50,
          "img": "/apps/dota2/images/items/phase_boots_lg.png?t=1580114426351",
          "dname": "Phase Boots",
          "qual": "common",
          "cost": 1480,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "15%",
              "footer": "Movement Speed"
            },
            {
              "key": "bonus_damage_melee",
              "header": "+Damage (MELEE)",
              "value": "18"
            },
            {
              "key": "bonus_damage_range",
              "header": "+Damage (RANGED)",
              "value": "12"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "4",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": 8,
          "lore": "Boots that allow the wearer to travel between the ether.",
          "components": [
            "boots",
            "chainmail",
            "blades_of_attack"
          ],
          "created": true,
          "charges": false
        },
        "demon_edge": {
          "id": 51,
          "img": "/apps/dota2/images/items/demon_edge_lg.png?t=1580114426351",
          "dname": "Demon Edge",
          "qual": "secret_shop",
          "cost": 2200,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "42",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "One of the oldest weapons forged by the Demon-Smith Abzidian, it killed its maker when he tested its edge.",
          "components": null,
          "created": false,
          "charges": false
        },
        "eagle": {
          "id": 52,
          "img": "/apps/dota2/images/items/eagle_lg.png?t=1580114426351",
          "dname": "Eaglesong",
          "qual": "secret_shop",
          "cost": 3200,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "25",
              "footer": "Agility"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Capturing the majestic call of an eagle, this mystical horn brings limitless dexterity to those who hear it.",
          "components": null,
          "created": false,
          "charges": false
        },
        "reaver": {
          "id": 53,
          "img": "/apps/dota2/images/items/reaver_lg.png?t=1580114426351",
          "dname": "Reaver",
          "qual": "secret_shop",
          "cost": 3000,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "25",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A massive axe capable of tearing whole mountains down.",
          "components": null,
          "created": false,
          "charges": false
        },
        "relic": {
          "id": 54,
          "img": "/apps/dota2/images/items/relic_lg.png?t=1580114426351",
          "dname": "Sacred Relic",
          "qual": "secret_shop",
          "cost": 3800,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "60",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "An ancient weapon that often turns the tides of war.",
          "components": null,
          "created": false,
          "charges": false
        },
        "hyperstone": {
          "id": 55,
          "img": "/apps/dota2/images/items/hyperstone_lg.png?t=1580114426351",
          "dname": "Hyperstone",
          "qual": "secret_shop",
          "cost": 2000,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "55",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A mystical, carved stone that boosts the fervor of the holder.",
          "components": null,
          "created": false,
          "charges": false
        },
        "ring_of_health": {
          "id": 56,
          "img": "/apps/dota2/images/items/ring_of_health_lg.png?t=1580114426351",
          "dname": "Ring of Health",
          "qual": "component",
          "cost": 850,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "6",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A shiny ring found beneath a fat halfling's corpse.",
          "components": null,
          "created": false,
          "charges": false
        },
        "void_stone": {
          "id": 57,
          "img": "/apps/dota2/images/items/void_stone_lg.png?t=1580114426351",
          "dname": "Void Stone",
          "qual": "component",
          "cost": 850,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "2.25",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Jewelry that was once used to channel nether realm magic, this ring pulses with energy.",
          "components": null,
          "created": false,
          "charges": false
        },
        "mystic_staff": {
          "id": 58,
          "img": "/apps/dota2/images/items/mystic_staff_lg.png?t=1580114426351",
          "dname": "Mystic Staff",
          "qual": "secret_shop",
          "cost": 2700,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "25",
              "footer": "Intelligence"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Enigmatic staff made of only the most expensive crystals.",
          "components": null,
          "created": false,
          "charges": false
        },
        "energy_booster": {
          "id": 59,
          "img": "/apps/dota2/images/items/energy_booster_lg.png?t=1580114426351",
          "dname": "Energy Booster",
          "qual": "secret_shop",
          "cost": 900,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "250",
              "footer": "Mana"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "This lapis gemstone is commonly added to the collection of wizards seeking to improve their presence in combat.",
          "components": null,
          "created": false,
          "charges": false
        },
        "point_booster": {
          "id": 60,
          "img": "/apps/dota2/images/items/point_booster_lg.png?t=1580114426351",
          "dname": "Point Booster",
          "qual": "secret_shop",
          "cost": 1200,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "175",
              "footer": "Mana"
            },
            {
              "key": "bonus_health",
              "header": "+",
              "value": "175",
              "footer": "Health"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A perfectly formed amethyst that nourishes body and mind when held.",
          "components": null,
          "created": false,
          "charges": false
        },
        "vitality_booster": {
          "id": 61,
          "img": "/apps/dota2/images/items/vitality_booster_lg.png?t=1580114426351",
          "dname": "Vitality Booster",
          "qual": "secret_shop",
          "cost": 1100,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "250",
              "footer": "Health"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A ruby gemstone that has been passed down through generations of warrior kin.",
          "components": null,
          "created": false,
          "charges": false
        },
        "power_treads": {
          "active": [
            {
              "name": "Switch Attribute",
              "desc": "Switches between +10 Strength, +10 Agility, or +10 Intelligence."
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 63,
          "img": "/apps/dota2/images/items/power_treads_lg.png?t=1580114426351",
          "dname": "Power Treads",
          "qual": "common",
          "cost": 1350,
          "notes": "Power Treads can be built using a Belt of Strength, Band of Elvenskin, or a Robe of the Magi.",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "15%",
              "footer": "Movement Speed"
            },
            {
              "key": "bonus_stat",
              "header": "+",
              "value": "10",
              "footer": "Selected Attribute"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "25",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A pair of tough-skinned boots that change to meet the demands of the wearer.",
          "components": [
            "boots",
            "gloves",
            "belt_of_strength"
          ],
          "created": true,
          "charges": false
        },
        "recipe_hand_of_midas": {
          "id": 64,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Hand of Midas Recipe",
          "cost": 1850,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "hand_of_midas": {
          "active": [
            {
              "name": "Transmute",
              "desc": "Kills a non-hero target for 160 gold and 1.85x experience. \n\n Cannot be used on Ancient Creeps.\n\nRange: 600"
            }
          ],
          "id": 65,
          "img": "/apps/dota2/images/items/hand_of_midas_lg.png?t=1580114426351",
          "dname": "Hand of Midas",
          "qual": "common",
          "cost": 2250,
          "notes": "The gold given is reliable gold (you do not get the normal creep bounty).\nExperience gained by using Transmute is not shared.",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "40",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": 90,
          "lore": "Preserved through unknown magical means, the Hand of Midas is a weapon of greed, sacrificing animals to line the owner's pockets.",
          "components": [
            "gloves"
          ],
          "created": true,
          "charges": false
        },
        "oblivion_staff": {
          "id": 67,
          "img": "/apps/dota2/images/items/oblivion_staff_lg.png?t=1580114426351",
          "dname": "Oblivion Staff",
          "qual": "common",
          "cost": 1575,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "10",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "10",
              "footer": "Damage"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "1.25",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Deceptively hidden as an ordinary quarterstaff, it is actually very powerful, much like the Eldritch who originally possessed it.",
          "components": [
            "quarterstaff",
            "sobi_mask",
            "robe"
          ],
          "created": true,
          "charges": false
        },
        "pers": {
          "id": 69,
          "img": "/apps/dota2/images/items/pers_lg.png?t=1580114426351",
          "dname": "Perseverance",
          "qual": "common",
          "cost": 1700,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "6",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "2.25",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A gem that grants heart to the bearer.",
          "components": [
            "ring_of_health",
            "void_stone"
          ],
          "created": true,
          "charges": false
        },
        "poor_mans_shield": {
          "passive": [
            {
              "name": "Damage Block",
              "desc": "Gives a 100% chance to block 30 damage from incoming attacks on melee heroes, and 20 damage on ranged.\n\nHas a 50% chance to block damage from creeps."
            }
          ],
          "id": 71,
          "img": "/apps/dota2/images/items/poor_mans_shield_lg.png?t=1580114426351",
          "dname": "Poor Man's Shield",
          "qual": "common",
          "cost": 0,
          "notes": "Multiple sources of damage block do not stack.",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "7",
              "footer": "Agility"
            }
          ],
          "mc": false,
          "cd": 6,
          "lore": "A busted old shield that seems to block more than it should.",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 1
        },
        "recipe_bracer": {
          "id": 72,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Bracer Recipe",
          "cost": 210,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "bracer": {
          "id": 73,
          "img": "/apps/dota2/images/items/bracer_lg.png?t=1580114426351",
          "dname": "Bracer",
          "qual": "common",
          "cost": 510,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "6",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "3",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "3",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_magic_resistance",
              "header": "+",
              "value": "5%",
              "footer": "Magic Resistance"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "The bracer is a common choice to toughen up defenses and increase longevity.",
          "components": [
            "circlet",
            "gauntlets"
          ],
          "created": true,
          "charges": false
        },
        "recipe_wraith_band": {
          "id": 74,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Wraith Band Recipe",
          "cost": 210,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "wraith_band": {
          "id": 75,
          "img": "/apps/dota2/images/items/wraith_band_lg.png?t=1580114426351",
          "dname": "Wraith Band",
          "qual": "common",
          "cost": 510,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "3",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "6",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "3",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "5",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A circlet with faint whispers echoing about it.",
          "components": [
            "circlet",
            "slippers"
          ],
          "created": true,
          "charges": false
        },
        "recipe_null_talisman": {
          "id": 76,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Null Talisman Recipe",
          "cost": 210,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "null_talisman": {
          "id": 77,
          "img": "/apps/dota2/images/items/null_talisman_lg.png?t=1580114426351",
          "dname": "Null Talisman",
          "qual": "common",
          "cost": 510,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "3",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "3",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "6",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_spell_amp",
              "header": "+Spell Amplification",
              "value": "3%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A small gemstone attached to several chains.",
          "components": [
            "circlet",
            "mantle"
          ],
          "created": true,
          "charges": false
        },
        "recipe_mekansm": {
          "id": 78,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Mekansm Recipe",
          "cost": 950,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "mekansm": {
          "active": [
            {
              "name": "Restore",
              "desc": "Heals 275 health to allied units in a 1200 radius."
            }
          ],
          "passive": [
            {
              "name": "Mekansm Aura",
              "desc": "Grants 2.5 health regeneration to allied units in a 1200 radius."
            }
          ],
          "id": 79,
          "img": "/apps/dota2/images/items/mekansm_lg.png?t=1580114426351",
          "dname": "Mekansm",
          "qual": "rare",
          "cost": 1950,
          "notes": "Restore does not affect units that have been affected by Restore in the last 25 seconds.\nMultiple instances of Mekansm Aura do not stack.",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "4",
              "footer": "All Attributes"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "6",
              "footer": "Armor"
            }
          ],
          "mc": 225,
          "cd": 65,
          "lore": "A glowing jewel formed out of assorted parts that somehow fit together perfectly.",
          "components": [
            "headdress",
            "chainmail"
          ],
          "created": true,
          "charges": false
        },
        "recipe_vladmir": {
          "id": 80,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Vladmir's Offering Recipe",
          "cost": 450,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "vladmir": {
          "passive": [
            {
              "name": "Vladmir's Aura",
              "desc": "Grants 25% lifesteal, 1.25 mana regeneration, and 3 armor to nearby allies. \n\nRadius: 1200"
            }
          ],
          "id": 81,
          "img": "/apps/dota2/images/items/vladmir_lg.png?t=1580114426351",
          "dname": "Vladmir's Offering",
          "qual": "rare",
          "cost": 2300,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "6",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "An eerie mask that is haunted with the malice of a fallen vampire.",
          "components": [
            "ring_of_basilius",
            "buckler",
            "lifesteal"
          ],
          "created": true,
          "charges": false
        },
        "recipe_buckler": {
          "id": 85,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Buckler Recipe",
          "cost": 300,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "buckler": {
          "passive": [
            {
              "name": "Buckler Aura",
              "desc": "Grants 2 armor to allies."
            }
          ],
          "toggle": [
            {
              "name": "Aura",
              "desc": "Deactivate to stop affecting non-hero units. \n\nRadius: 1200"
            }
          ],
          "id": 86,
          "img": "/apps/dota2/images/items/buckler_lg.png?t=1580114426351",
          "dname": "Buckler",
          "qual": "rare",
          "cost": 500,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "3",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A powerful shield that imbues the bearer with the strength of heroes past, it is capable of protecting entire armies in battle.",
          "components": [
            "ring_of_protection",
            "branches"
          ],
          "created": true,
          "charges": false
        },
        "recipe_ring_of_basilius": {
          "id": 87,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "cost": 150,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "ring_of_basilius": {
          "passive": [
            {
              "name": "Basilius Aura",
              "desc": "Grants 1.25 mana regeneration to allies.  \n\nRadius: 1200"
            }
          ],
          "id": 88,
          "img": "/apps/dota2/images/items/ring_of_basilius_lg.png?t=1580114426351",
          "dname": "Ring of Basilius",
          "qual": "rare",
          "cost": 450,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "3",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Ring given as a reward to the greatest mages.",
          "components": [
            "sobi_mask",
            "branches"
          ],
          "created": true,
          "charges": false
        },
        "recipe_holy_locket": {
          "id": 268,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Holy Locket Recipe",
          "cost": 850,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "holy_locket": {
          "active": [
            {
              "name": "Energy Charge",
              "desc": "Instantly restores 15 health and mana per charge stored. \n\nMax 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.  "
            }
          ],
          "hint": [
            ""
          ],
          "passive": [
            {
              "name": "Holy Blessing",
              "desc": "Amplifies heals you provide by 35%."
            }
          ],
          "id": 269,
          "img": "/apps/dota2/images/items/holy_locket_lg.png?t=1580114426351",
          "dname": "Holy Locket",
          "qual": "rare",
          "cost": 2900,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "250",
              "footer": "Health"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "325",
              "footer": "Mana"
            },
            {
              "key": "health_regen",
              "header": "+",
              "value": "4",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "3",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": 13,
          "lore": "",
          "components": [
            "ring_of_tarrasque",
            "energy_booster",
            "magic_wand"
          ],
          "created": true,
          "charges": false
        },
        "recipe_pipe": {
          "id": 89,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Pipe of Insight Recipe",
          "cost": 800,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "pipe": {
          "active": [
            {
              "name": "Barrier",
              "desc": "Gives a shield that blocks 400 magic damage to all nearby allies. Lasts 12 seconds.\n\nRadius: 1200"
            }
          ],
          "passive": [
            {
              "name": "Insight Aura",
              "desc": "Gives allied units 2 health regeneration and 10% magic resistance.\n\nRadius: 1200"
            }
          ],
          "id": 90,
          "img": "/apps/dota2/images/items/pipe_lg.png?t=1580114426351",
          "dname": "Pipe of Insight",
          "qual": "rare",
          "cost": 2900,
          "notes": "Multiple instances of Barrier do not stack.\nStacks multiplicatively with other sources of magic resistance.",
          "attrib": [
            {
              "key": "health_regen",
              "header": "+",
              "value": "8",
              "footer": "HP Regeneration"
            },
            {
              "key": "magic_resistance",
              "header": "+",
              "value": "30%",
              "footer": "Magic Resistance"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "3",
              "footer": "All Attributes"
            }
          ],
          "mc": 100,
          "cd": 60,
          "lore": "A powerful artifact of mysterious origin, it creates barriers against magical forces.",
          "components": [
            "hood_of_defiance",
            "headdress"
          ],
          "created": true,
          "charges": false
        },
        "recipe_urn_of_shadows": {
          "id": 91,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Urn of Shadows Recipe",
          "cost": 310,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "urn_of_shadows": {
          "active": [
            {
              "name": "Soul Release",
              "desc": "Provides 30 health regeneration when cast on allies, and deals 25 damage per second when cast on enemies. \n\nLasts 8 seconds.  \n\nGains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.\n\nCast Range: 950"
            }
          ],
          "id": 92,
          "img": "/apps/dota2/images/items/urn_of_shadows_lg.png?t=1580114426351",
          "dname": "Urn of Shadows",
          "qual": "rare",
          "cost": 865,
          "notes": "Empty urns gain 2 charges.\nIf used on a hero with Soul Release already active on them, it will refresh its duration.",
          "attrib": [
            {
              "key": "mana_regen",
              "header": "+",
              "value": "1.5",
              "footer": "Mana Regeneration"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "2",
              "footer": "All Attributes"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "2",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": 7,
          "lore": "Contains the ashes of powerful demons.",
          "components": [
            "sobi_mask",
            "circlet",
            "ring_of_protection"
          ],
          "created": true,
          "charges": false
        },
        "recipe_headdress": {
          "id": 93,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Headdress Recipe",
          "cost": 150,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "headdress": {
          "passive": [
            {
              "name": "Regeneration Aura",
              "desc": "Grants 2 health regeneration to allies.\n\nRadius: 1200"
            }
          ],
          "id": 94,
          "img": "/apps/dota2/images/items/headdress_lg.png?t=1580114426351",
          "dname": "Headdress",
          "qual": "rare",
          "cost": 450,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "3",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Creates a soothing aura that restores allies in battle.",
          "components": [
            "ring_of_regen",
            "branches"
          ],
          "created": true,
          "charges": false
        },
        "sheepstick": {
          "active": [
            {
              "name": "Hex",
              "desc": "Turns a target unit into a harmless critter for 3.5 seconds. The target has a base movement speed of 140 and will be silenced, muted, and disarmed.\nInstantly destroys illusions.\n\nRange: 800"
            }
          ],
          "id": 96,
          "img": "/apps/dota2/images/items/sheepstick_lg.png?t=1580114426351",
          "dname": "Scythe of Vyse",
          "qual": "rare",
          "cost": 5700,
          "notes": "The target will have a base movement speed of %sheep_movement_speed%, but buffs granting maximum movement speed won't be disabled.",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "10",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "10",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "35",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "9",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 250,
          "cd": 22,
          "lore": "The most guarded relic among the cult of Vyse, it is the most coveted weapon among magi.",
          "components": [
            "mystic_staff",
            "ultimate_orb",
            "void_stone"
          ],
          "created": true,
          "charges": false
        },
        "recipe_orchid": {
          "id": 97,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Orchid Malevolence Recipe",
          "cost": 775,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "orchid": {
          "active": [
            {
              "name": "Soul Burn",
              "desc": "Silences the target unit for 5 seconds. At the end of the silence, 30% of the damage received while silenced is inflicted as bonus magical damage.\n\nRange: 900"
            }
          ],
          "id": 98,
          "img": "/apps/dota2/images/items/orchid_lg.png?t=1580114426351",
          "dname": "Orchid Malevolence",
          "qual": "rare",
          "cost": 3925,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "25",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "30",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "30",
              "footer": "Damage"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "5.5",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 100,
          "cd": 18,
          "lore": "A garnet rod constructed from the essence of a fire demon.",
          "components": [
            "oblivion_staff",
            "oblivion_staff"
          ],
          "created": true,
          "charges": false
        },
        "recipe_bloodthorn": {
          "id": 245,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Bloodthorn Recipe",
          "cost": 1000,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "bloodthorn": {
          "active": [
            {
              "name": "Soul Rend",
              "desc": "Silences a target for 5 seconds. At the end of the silence, an additional 30% of all damage taken during the silence will be dealt to the target as magical damage.\n\nAll attacks on the silenced target will have True Strike and 100% chance to crit for 130% damage.\n\nRange: 900"
            }
          ],
          "passive": [
            {
              "name": "Critical Strike",
              "desc": "Grants a 20% chance for attacks to inflict 160% damage."
            }
          ],
          "id": 250,
          "img": "/apps/dota2/images/items/bloodthorn_lg.png?t=1580114426351",
          "dname": "Bloodthorn",
          "qual": "epic",
          "cost": 7055,
          "notes": "Critical Strike does not work against buildings.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "25",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "30",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "75",
              "footer": "Damage"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "5.5",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 100,
          "cd": 15,
          "lore": "A reviled blade that bites deeper with each wriggle of its victim's final throes.",
          "components": [
            "orchid",
            "lesser_crit"
          ],
          "created": true,
          "charges": false
        },
        "echo_sabre": {
          "passive": [
            {
              "name": "Echo Strike",
              "desc": "Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike."
            }
          ],
          "id": 252,
          "img": "/apps/dota2/images/items/echo_sabre_lg.png?t=1580114426351",
          "dname": "Echo Sabre",
          "qual": "artifact",
          "cost": 2575,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "12",
              "footer": "Strength"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "10",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "15",
              "footer": "Damage"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "1.25",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": 5,
          "lore": "A deceptively swift blade imbued with resonant magic.",
          "components": [
            "ogre_axe",
            "oblivion_staff"
          ],
          "created": true,
          "charges": false
        },
        "recipe_cyclone": {
          "id": 99,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Eul's Scepter Recipe",
          "cost": 650,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "cyclone": {
          "active": [
            {
              "name": "Cyclone",
              "desc": "Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can only be cast on enemy units or yourself.\n\nEnemy units take 50 magical damage upon landing.\n\nRange: 575\nDispel Type: Basic Dispel"
            }
          ],
          "id": 100,
          "img": "/apps/dota2/images/items/cyclone_lg.png?t=1580114426351",
          "dname": "Eul's Scepter of Divinity",
          "qual": "rare",
          "cost": 2750,
          "notes": "You cannot cyclone allies.\nCyclones cast on yourself go through spell immunity.\nCyclone can purge some buffs and debuffs.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "5",
              "footer": "Mana Regeneration"
            },
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "20",
              "footer": "Movement Speed"
            }
          ],
          "mc": 175,
          "cd": 23,
          "lore": "A mysterious scepter passed down through the ages, its disruptive winds can be used for good or evil.",
          "components": [
            "staff_of_wizardry",
            "void_stone",
            "wind_lace"
          ],
          "created": true,
          "charges": false
        },
        "recipe_aether_lens": {
          "id": 233,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Aether Lens Recipe",
          "cost": 600,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "aether_lens": {
          "passive": [
            {
              "name": "Aethereal Focus",
              "desc": "Increases targeted spell and item cast range by 250."
            }
          ],
          "id": 232,
          "img": "/apps/dota2/images/items/aether_lens_lg.png?t=1580114426351",
          "dname": "Aether Lens",
          "qual": "rare",
          "cost": 2350,
          "notes": "Passive does not stack.",
          "attrib": [
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "450",
              "footer": "Mana"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "3",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Polished with the incantation of his final breath, the gift of a dying mage to his sickly son.",
          "components": [
            "energy_booster",
            "void_stone"
          ],
          "created": true,
          "charges": false
        },
        "recipe_force_staff": {
          "id": 101,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Force Staff Recipe",
          "cost": 1000,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "force_staff": {
          "active": [
            {
              "name": "Force",
              "desc": "Pushes any target unit 600 units in the direction it is facing.\n\nRange: 750"
            }
          ],
          "id": 102,
          "img": "/apps/dota2/images/items/force_staff_lg.png?t=1580114426351",
          "dname": "Force Staff",
          "qual": "rare",
          "cost": 2250,
          "notes": "Self-cast will cause you to use Force on yourself.\nForce Staff doesn't interrupt the target's actions.\nWill not work on a unit inside Chronosphere, Duel, or Black Hole.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "2.5",
              "footer": "HP Regeneration"
            }
          ],
          "mc": 100,
          "cd": 23,
          "lore": "Allows you to manipulate others, for good or evil.",
          "components": [
            "staff_of_wizardry",
            "ring_of_regen"
          ],
          "created": true,
          "charges": false
        },
        "recipe_hurricane_pike": {
          "id": 262,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Hurricane Pike Recipe",
          "cost": 450,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "hurricane_pike": {
          "active": [
            {
              "name": "Hurricane Thrust",
              "desc": "Pushes you and target enemy 450 units away from each other, and for 5 seconds, allows you to make 4 attacks against the target without range restrictions and with +100 attack speed.\n\nWorks like Force Staff when used on self or allies.\n\nAllied Range: 800\nEnemy Range: 400"
            }
          ],
          "passive": [
            {
              "name": "Dragon's Reach",
              "desc": "Increases attack range of ranged heroes by 140."
            }
          ],
          "id": 263,
          "img": "/apps/dota2/images/items/hurricane_pike_lg.png?t=1580114426351",
          "dname": "Hurricane Pike",
          "qual": "epic",
          "cost": 4600,
          "notes": "Self-cast will use Hurricane Pike on yourself.\nHurricane Pike doesn't interrupt the target's actions.\nWill not work on a unit inside Chronosphere, Duel, or Black Hole.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "13",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "2.5",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "20",
              "footer": "Agility"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "15",
              "footer": "Strength"
            }
          ],
          "mc": 100,
          "cd": 23,
          "lore": "A legendary pike once held as royal sigil of the ancient wyvern riders.",
          "components": [
            "force_staff",
            "dragon_lance"
          ],
          "created": true,
          "charges": false
        },
        "recipe_dagon": {
          "id": 103,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Dagon Recipe",
          "cost": 1250,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "dagon": {
          "active": [
            {
              "name": "Energy Burst",
              "desc": "Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.\n\nDamage: 400,500,600,700,800\nRange: 600 650 700 750 800\nMana Cost: 120,140,160,180,200"
            }
          ],
          "id": 104,
          "img": "/apps/dota2/images/items/dagon_lg.png?t=1580114426351",
          "dname": "Dagon",
          "qual": "rare",
          "cost": 2700,
          "notes": "Instantly kills illusions.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": [
                "13",
                "16",
                "19",
                "22",
                "25"
              ],
              "footer": "Intelligence"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            }
          ],
          "mc": 120,
          "cd": 35,
          "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
          "components": [
            "staff_of_wizardry",
            "crown"
          ],
          "created": true,
          "charges": false
        },
        "dagon_2": {
          "active": [
            {
              "name": "Energy Burst",
              "desc": "Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.\n\nDamage: 400,500,600,700,800\nRange: 600 650 700 750 800\nMana Cost: 120,140,160,180,200"
            }
          ],
          "id": 201,
          "img": "/apps/dota2/images/items/dagon_2_lg.png?t=1580114426351",
          "dname": "Dagon",
          "qual": "rare",
          "cost": 3950,
          "notes": "Instantly kills illusions.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": [
                "13",
                "16",
                "19",
                "22",
                "25"
              ],
              "footer": "Intelligence"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            }
          ],
          "mc": 120,
          "cd": 35,
          "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
          "components": [
            "dagon",
            "recipe_dagon"
          ],
          "created": true,
          "charges": false
        },
        "dagon_3": {
          "active": [
            {
              "name": "Energy Burst",
              "desc": "Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.\n\nDamage: 400,500,600,700,800\nRange: 600 650 700 750 800\nMana Cost: 120,140,160,180,200"
            }
          ],
          "id": 202,
          "img": "/apps/dota2/images/items/dagon_3_lg.png?t=1580114426351",
          "dname": "Dagon",
          "qual": "rare",
          "cost": 5200,
          "notes": "Instantly kills illusions.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": [
                "13",
                "16",
                "19",
                "22",
                "25"
              ],
              "footer": "Intelligence"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            }
          ],
          "mc": 120,
          "cd": 35,
          "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
          "components": [
            "dagon_2",
            "recipe_dagon"
          ],
          "created": true,
          "charges": false
        },
        "dagon_4": {
          "active": [
            {
              "name": "Energy Burst",
              "desc": "Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.\n\nDamage: 400,500,600,700,800\nRange: 600 650 700 750 800\nMana Cost: 120,140,160,180,200"
            }
          ],
          "id": 203,
          "img": "/apps/dota2/images/items/dagon_4_lg.png?t=1580114426351",
          "dname": "Dagon",
          "qual": "rare",
          "cost": 6450,
          "notes": "Instantly kills illusions.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": [
                "13",
                "16",
                "19",
                "22",
                "25"
              ],
              "footer": "Intelligence"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            }
          ],
          "mc": 120,
          "cd": 35,
          "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
          "components": [
            "dagon_3",
            "recipe_dagon"
          ],
          "created": true,
          "charges": false
        },
        "dagon_5": {
          "active": [
            {
              "name": "Energy Burst",
              "desc": "Emits a powerful burst of magical damage upon a targeted enemy unit.\n\nDamage: 400,500,600,700,800\nRange: 600 650 700 750 800\nMana Cost: 120,140,160,180,200"
            }
          ],
          "id": 204,
          "img": "/apps/dota2/images/items/dagon_5_lg.png?t=1580114426351",
          "dname": "Dagon",
          "qual": "rare",
          "cost": 7700,
          "notes": "Instantly kills illusions.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": [
                "13",
                "16",
                "19",
                "22",
                "25"
              ],
              "footer": "Intelligence"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            }
          ],
          "mc": 120,
          "cd": 35,
          "lore": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
          "components": [
            "dagon_4",
            "recipe_dagon"
          ],
          "created": true,
          "charges": false
        },
        "recipe_necronomicon": {
          "id": 105,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Necronomicon Recipe",
          "cost": 1300,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "necronomicon": {
          "active": [
            {
              "name": "Demonic Summoning",
              "desc": "Summons a Warrior and an Archer to fight for you for 60 seconds.\n\n<h1>Warrior:</h1>Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.\nHealth: 700,800,900\nDamage: 75,100,125\nMana Break Damage: 30,40,50\nLast Will Damage: 600,700,800\n\n<h1>Archer:</h1>Has a passive movement and attack speed aura. Gains Purge at Level 3.\nHealth: 700,800,900\nDamage: 60,90,120\nAura Move Speed: 5,7,9\nAura Attack Speed: 5,7,9\nAura Radius: 1200"
            }
          ],
          "id": 106,
          "img": "/apps/dota2/images/items/necronomicon_lg.png?t=1580114426351",
          "dname": "Necronomicon",
          "qual": "rare",
          "cost": 2250,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": [
                "10",
                "15",
                "20"
              ],
              "footer": "Strength"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": [
                "3",
                "3.5",
                "4"
              ],
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 50,
          "cd": 90,
          "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
          "components": [
            "sobi_mask",
            "sobi_mask",
            "belt_of_strength"
          ],
          "created": true,
          "charges": false
        },
        "necronomicon_2": {
          "active": [
            {
              "name": "Demonic Summoning",
              "desc": "Summons a Warrior and an Archer to fight for you for 60 seconds.\n\n<h1>Warrior:</h1>Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.\nHealth: 700,800,900\nDamage: 75,100,125\nMana Break Damage: 30,40,50\nLast Will Damage: 600,700,800\n\n<h1>Archer:</h1>Has a passive movement and attack speed aura. Gains Purge at Level 3.\nHealth: 700,800,900\nDamage: 60,90,120\nAura Move Speed: 5,7,9\nAura Attack Speed: 5,10,15\nAura Radius: 1200"
            }
          ],
          "id": 193,
          "img": "/apps/dota2/images/items/necronomicon_2_lg.png?t=1580114426351",
          "dname": "Necronomicon",
          "qual": "rare",
          "cost": 3550,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": [
                "10",
                "15",
                "20"
              ],
              "footer": "Strength"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": [
                "3",
                "3.5",
                "4"
              ],
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 50,
          "cd": 90,
          "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
          "components": [
            "necronomicon",
            "recipe_necronomicon"
          ],
          "created": true,
          "charges": false
        },
        "necronomicon_3": {
          "active": [
            {
              "name": "Demonic Summoning",
              "desc": "Summons a Warrior and an Archer to fight for you for 60 seconds.\n\n<h1>Warrior:</h1>Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.\nHealth: 700,800,900\nDamage: 75,100,125\nMana Break Damage: 30,40,50\nLast Will Damage: 600,700,800\n\n<h1>Archer:</h1>Has a passive movement and attack speed aura. Gains Purge at Level 3.\nHealth: 700,800,900\nDamage: 60,90,120\nAura Move Speed: 5,7,9\nAura Attack Speed: 5,10,15\nAura Radius: 1200"
            }
          ],
          "id": 194,
          "img": "/apps/dota2/images/items/necronomicon_3_lg.png?t=1580114426351",
          "dname": "Necronomicon",
          "qual": "rare",
          "cost": 4850,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": [
                "10",
                "15",
                "20"
              ],
              "footer": "Strength"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": [
                "3",
                "3.5",
                "4"
              ],
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 50,
          "cd": 90,
          "lore": "Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.",
          "components": [
            "necronomicon_2",
            "recipe_necronomicon"
          ],
          "created": true,
          "charges": false
        },
        "ultimate_scepter": {
          "passive": [
            {
              "name": "Ability Upgrade",
              "desc": "Upgrades the ultimate, and some abilities, of all heroes."
            }
          ],
          "id": 108,
          "img": "/apps/dota2/images/items/ultimate_scepter_lg.png?t=1580114426351",
          "dname": "Aghanim's Scepter",
          "qual": "rare",
          "cost": 4200,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "10",
              "footer": "All Attributes"
            },
            {
              "key": "bonus_health",
              "header": "+",
              "value": "175",
              "footer": "Health"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "175",
              "footer": "Mana"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "The scepter of a wizard with demigod-like powers.",
          "components": [
            "point_booster",
            "staff_of_wizardry",
            "ogre_axe",
            "blade_of_alacrity"
          ],
          "created": true,
          "charges": false
        },
        "recipe_ultimate_scepter_2": {
          "id": 270,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Aghanim's Blessing Recipe",
          "cost": 1800,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "ultimate_scepter_2": {
          "passive": [
            {
              "name": "Ability Upgrade",
              "desc": "Upgrades the ultimate, and some abilities, of all heroes."
            }
          ],
          "id": 271,
          "img": "/apps/dota2/images/items/ultimate_scepter_2_lg.png?t=1580114426351",
          "dname": "Aghanim's Blessing",
          "qual": "rare",
          "cost": 6000,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "The scepter of a wizard with demigod-like powers.",
          "components": [
            "ultimate_scepter"
          ],
          "created": true,
          "charges": false
        },
        "recipe_refresher": {
          "id": 109,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Refresher Orb Recipe",
          "cost": 1700,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "refresher": {
          "active": [
            {
              "name": "Reset Cooldowns",
              "desc": "Resets the cooldowns of all your items and abilities."
            }
          ],
          "id": 110,
          "img": "/apps/dota2/images/items/refresher_lg.png?t=1580114426351",
          "dname": "Refresher Orb",
          "qual": "rare",
          "cost": 5100,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "13",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "12",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 375,
          "cd": 195,
          "lore": "A powerful artifact created for wizards.",
          "components": [
            "pers",
            "pers"
          ],
          "created": true,
          "charges": false
        },
        "recipe_assault": {
          "id": 111,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Assault Cuirass Recipe",
          "cost": 1300,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "assault": {
          "passive": [
            {
              "name": "Assault Aura",
              "desc": "Grants 25 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by -5.\n\nRadius: 1200"
            }
          ],
          "id": 112,
          "img": "/apps/dota2/images/items/assault_lg.png?t=1580114426351",
          "dname": "Assault Cuirass",
          "qual": "epic",
          "cost": 5200,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "30",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "10",
              "footer": "Armor"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Forged in the depths of the nether reaches, this hellish mail provides an army with increased armor and attack speed.",
          "components": [
            "platemail",
            "hyperstone",
            "buckler"
          ],
          "created": true,
          "charges": false
        },
        "recipe_heart": {
          "id": 113,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Heart of Tarrasque Recipe",
          "cost": 400,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "heart": {
          "passive": [
            {
              "name": "Health Regeneration",
              "desc": "Restores 5% of max health per second. \n\nIf damage is taken from an enemy hero or Roshan, this ability is disabled for 5 seconds for melee heroes, or 7 seconds for ranged heroes."
            }
          ],
          "id": 114,
          "img": "/apps/dota2/images/items/heart_lg.png?t=1580114426351",
          "dname": "Heart of Tarrasque",
          "qual": "epic",
          "cost": 5200,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "45",
              "footer": "Strength"
            },
            {
              "key": "bonus_health",
              "header": "+",
              "value": "400",
              "footer": "Health"
            },
            {
              "key": "hp_regen_amp",
              "header": "+Health Regen Amplification",
              "value": "50%"
            },
            {
              "key": "fixed_health_regen",
              "header": "+",
              "value": "10",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": 7,
          "lore": "Preserved heart of an extinct monster, it bolsters the bearer's fortitude.",
          "components": [
            "ring_of_tarrasque",
            "vitality_booster",
            "reaver"
          ],
          "created": true,
          "charges": false
        },
        "recipe_black_king_bar": {
          "id": 115,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Black King Bar Recipe",
          "cost": 1450,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "black_king_bar": {
          "active": [
            {
              "name": "Avatar",
              "desc": "Grants Spell Immunity.  Duration decreases with each use. \n\nDuration: 10,9,8,7,6,5 \nDispel Type: Basic Dispel"
            }
          ],
          "id": 116,
          "img": "/apps/dota2/images/items/black_king_bar_lg.png?t=1580114426351",
          "dname": "Black King Bar",
          "qual": "epic",
          "cost": 4050,
          "notes": "Purchasing another Black King Bar will not reset its immunity duration.\nUsing Black King Bar may remove some positive buffs.",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "10",
              "footer": "Strength"
            },
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "24",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": 70,
          "lore": "A powerful staff imbued with the strength of giants.",
          "components": [
            "ogre_axe",
            "mithril_hammer"
          ],
          "created": true,
          "charges": false
        },
        "aegis": {
          "passive": [
            {
              "name": "Reincarnation",
              "desc": "Brings you to life with full health and mana 5 seconds after you die, at the location where you died. \n\nReincarnation must be used within 5 minutes or Aegis of the Immortal disappears. If it expires, it will heal you over 5 seconds (dispels on damage)."
            }
          ],
          "id": 117,
          "img": "/apps/dota2/images/items/aegis_lg.png?t=1580114426351",
          "dname": "Aegis of the Immortal",
          "qual": "artifact",
          "cost": 0,
          "notes": "Pronounced as ayy jis.",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "The Immortal was said to own a shield that protected him from death itself.",
          "components": null,
          "created": false,
          "charges": false
        },
        "recipe_shivas_guard": {
          "id": 118,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Shiva's Guard Recipe",
          "cost": 650,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "shivas_guard": {
          "active": [
            {
              "name": "Arctic Blast",
              "desc": "Emits a freezing wave that deals 200 magical damage to enemies and slows their movement by -40% for 4 seconds.\n\nRadius: 900"
            }
          ],
          "passive": [
            {
              "name": "Freezing Aura",
              "desc": "Reduces the attack speed of all enemies by -45. \n\nRadius: 1200"
            }
          ],
          "id": 119,
          "img": "/apps/dota2/images/items/shivas_guard_lg.png?t=1580114426351",
          "dname": "Shiva's Guard",
          "qual": "epic",
          "cost": 4750,
          "notes": "The wave extends at a speed of %blast_speed% to a max size of %blast_radius%.\nThe Arctic Blast follows its caster.\nMultiple instances of Freezing Aura do not stack.",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "30",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "15",
              "footer": "Armor"
            }
          ],
          "mc": 100,
          "cd": 30,
          "lore": "Said to have belonged to a goddess, today it retains much of its former power.",
          "components": [
            "platemail",
            "mystic_staff"
          ],
          "created": true,
          "charges": false
        },
        "bloodstone": {
          "active": [
            {
              "name": "Bloodpact",
              "desc": "Converts 30% of your max mana to health regeneration over 2 seconds."
            }
          ],
          "passive": [
            {
              "name": "Mana Battery",
              "desc": "Each charge provides 0.2 MP regen and 0.35% Spell Amp. Nearby kills provide 1 charges. Dying causes you to lose 3 charges. Starts with 14 charges. Provides +100% Mana Regen Amplification."
            }
          ],
          "id": 121,
          "img": "/apps/dota2/images/items/bloodstone_lg.png?t=1580114426351",
          "dname": "Bloodstone",
          "qual": "epic",
          "cost": 5250,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "425",
              "footer": "Health"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "425",
              "footer": "Mana"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "16",
              "footer": "Intelligence"
            },
            {
              "key": "manacost_reduction",
              "header": "+Manacost and Manaloss Reduction",
              "value": "12%"
            },
            {
              "key": "spell_amp",
              "header": "+Base Spell Amplification",
              "value": "8%"
            }
          ],
          "mc": false,
          "cd": 250,
          "lore": "The Bloodstone's bright ruby color is unmistakable on the battlefield, as the owner seems to have infinite vitality and spirit.",
          "components": [
            "kaya",
            "soul_booster"
          ],
          "created": true,
          "charges": 14
        },
        "recipe_sphere": {
          "id": 122,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Linken's Sphere Recipe",
          "cost": 1200,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "sphere": {
          "passive": [
            {
              "name": "Spellblock",
              "desc": "Blocks most targeted spells once every 12 seconds."
            }
          ],
          "active": [
            {
              "name": "Transfer Spellblock",
              "desc": "Temporarily removes Spellblock from the item's owner and transfers it to an allied unit for 12 seconds.\n\nRange: 700"
            }
          ],
          "id": 123,
          "img": "/apps/dota2/images/items/sphere_lg.png?t=1580114426351",
          "dname": "Linken's Sphere",
          "qual": "epic",
          "cost": 5050,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "14",
              "footer": "All Attributes"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "7",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "5",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": 12,
          "lore": "This magical sphere once protected one of the most famous heroes in history.",
          "components": [
            "ultimate_orb",
            "pers"
          ],
          "created": true,
          "charges": false
        },
        "lotus_orb": {
          "active": [
            {
              "name": "Echo Shell",
              "desc": "Applies a shield to the target unit for 6 seconds which re-casts most targeted spells back to their caster.\n\nThe shielded unit will still take damage from the spell. \n\nRange: 900\nDispel Type: Basic Dispel"
            }
          ],
          "id": 226,
          "img": "/apps/dota2/images/items/lotus_orb_lg.png?t=1580114426351",
          "dname": "Lotus Orb",
          "qual": "epic",
          "cost": 4000,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "10",
              "footer": "Armor"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "6.5",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "4",
              "footer": "Mana Regeneration"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "250",
              "footer": "Mana"
            }
          ],
          "mc": 75,
          "cd": 15,
          "lore": "The jewel at its center still reflects a pale image of its creator.",
          "components": [
            "pers",
            "platemail",
            "energy_booster"
          ],
          "created": true,
          "charges": false
        },
        "meteor_hammer": {
          "active": [
            {
              "name": "Meteor Hammer",
              "desc": "CHANNELED - After a successful channel, summons a meteor that strikes a 315 AoE, stunning enemies for 2 seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for 6 seconds.\n\nBuilding Impact Damage: 75 \nBuilding Over Time Damage: 50 \n\nNon-Building Impact Damage: 150 \nNon-Building Over Time Damage: 90 \n\nChannel Duration: 2.5 seconds.\nLanding Time: 0.5 seconds."
            }
          ],
          "id": 223,
          "img": "/apps/dota2/images/items/meteor_hammer_lg.png?t=1580114426351",
          "dname": "Meteor Hammer",
          "qual": "epic",
          "cost": 2500,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "12",
              "footer": "Strength"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "12",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "5",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "3",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 125,
          "cd": 28,
          "lore": "",
          "components": [
            "ogre_axe",
            "staff_of_wizardry",
            "ring_of_regen",
            "sobi_mask"
          ],
          "created": true,
          "charges": false
        },
        "nullifier": {
          "active": [
            {
              "name": "Nullify",
              "desc": "Dispels the target and mutes them for 6 seconds. Anytime the muted target is attacked, it will be slowed by 100% for 0.4 seconds.\n\nDispel Type: Basic Dispel"
            }
          ],
          "id": 225,
          "img": "/apps/dota2/images/items/nullifier_lg.png?t=1580114426351",
          "dname": "Nullifier",
          "qual": "epic",
          "cost": 4700,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "65",
              "footer": "Damage"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "5",
              "footer": "Armor"
            },
            {
              "key": "bonus_regen",
              "header": "+",
              "value": "6",
              "footer": "HP Regeneration"
            }
          ],
          "mc": 75,
          "cd": 13,
          "lore": "",
          "components": [
            "relic",
            "helm_of_iron_will"
          ],
          "created": true,
          "charges": false
        },
        "recipe_aeon_disk": {
          "id": 255,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Aeon Disk Recipe",
          "cost": 1100,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "aeon_disk": {
          "passive": [
            {
              "name": "Combo Breaker",
              "desc": "When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage."
            }
          ],
          "id": 256,
          "img": "/apps/dota2/images/items/aeon_disk_lg.png?t=1580114426351",
          "dname": "Aeon Disk",
          "qual": "epic",
          "cost": 3100,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "300",
              "footer": "Health"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "300",
              "footer": "Mana"
            }
          ],
          "mc": false,
          "cd": 115,
          "lore": "",
          "components": [
            "vitality_booster",
            "energy_booster"
          ],
          "created": true,
          "charges": false
        },
        "recipe_kaya": {
          "id": 258,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Kaya Recipe",
          "cost": 600,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "kaya": {
          "id": 259,
          "img": "/apps/dota2/images/items/kaya_lg.png?t=1580114426351",
          "dname": "Kaya",
          "qual": "epic",
          "cost": 2050,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "16",
              "footer": "Intelligence"
            },
            {
              "key": "manacost_reduction",
              "header": "+Manacost and Manaloss Reduction",
              "value": "12%"
            },
            {
              "key": "spell_amp",
              "header": "+Spell Amplification",
              "value": "8%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": [
            "staff_of_wizardry",
            "robe"
          ],
          "created": true,
          "charges": false
        },
        "trident": {
          "hint": [
            "Combines Sange, Yasha and Kaya together."
          ],
          "id": 369,
          "img": "/apps/dota2/images/items/trident_lg.png?t=1580114426351",
          "dname": "Trident",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "30",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "30",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "30",
              "footer": "Intelligence"
            },
            {
              "key": "status_resistance",
              "header": "+Status Resistance",
              "value": "30%"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "30",
              "footer": "Attack Speed"
            },
            {
              "key": "movement_speed_percent_bonus",
              "header": "+",
              "value": "30",
              "footer": "Movement Speed"
            },
            {
              "key": "hp_regen_amp",
              "header": "+Self HP Regen and Lifesteal Amp",
              "value": "30%"
            },
            {
              "key": "manacost_reduction",
              "header": "+Manacost and Manaloss Reduction",
              "value": "30%"
            },
            {
              "key": "spell_amp",
              "header": "+Spell Amplification",
              "value": "30%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": [
            "kaya",
            "sange",
            "yasha",
            ""
          ],
          "created": true,
          "charges": false,
          "tier": 5
        },
        "combo_breaker": {
          "id": 276,
          "img": "/apps/dota2/images/items/combo_breaker_lg.png?t=1580114426351",
          "cost": null,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "refresher_shard": {
          "use": [
            {
              "name": "Reset Cooldowns",
              "desc": "Resets the cooldowns of all your items and abilities."
            }
          ],
          "id": 260,
          "img": "/apps/dota2/images/items/refresher_shard_lg.png?t=1580114426351",
          "dname": "Refresher Shard",
          "qual": "consumable",
          "cost": 1000,
          "notes": "Refresher Shard is shareable.",
          "attrib": [],
          "mc": false,
          "cd": 200,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 1
        },
        "recipe_spirit_vessel": {
          "id": 266,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Spirit Vessel Recipe",
          "cost": 750,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "spirit_vessel": {
          "active": [
            {
              "name": "Soul Release",
              "desc": "When used against enemies, it reduces health by 4% of current health per second, and reduces HP regeneration and healing by 60%. Deals 25 damage per second. \n\nWhen used on allies, it provides 30 health regeneration per second. \n\nLasts 8 seconds.  \n\nGains charges every time an enemy hero dies within 1400 units.  Only the closest Spirit Vessel to the dying hero will gain a charge.\n\nCast Range: 950 "
            }
          ],
          "id": 267,
          "img": "/apps/dota2/images/items/spirit_vessel_lg.png?t=1580114426351",
          "dname": "Spirit Vessel",
          "qual": "rare",
          "cost": 2965,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "250",
              "footer": "Health"
            },
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "20",
              "footer": "Movement Speed"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "1.5",
              "footer": "Mana Regeneration"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "2",
              "footer": "All Attributes"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "2",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": 7,
          "lore": "",
          "components": [
            "urn_of_shadows",
            "vitality_booster",
            "wind_lace"
          ],
          "created": true,
          "charges": false
        },
        "recipe_vanguard": {
          "id": 124,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "cost": 200,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "vanguard": {
          "passive": [
            {
              "name": "Damage Block",
              "desc": "Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged."
            }
          ],
          "id": 125,
          "img": "/apps/dota2/images/items/vanguard_lg.png?t=1580114426351",
          "dname": "Vanguard",
          "qual": "epic",
          "cost": 2150,
          "notes": "Multiple sources of damage block do not stack.",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "250",
              "footer": "Health"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "7",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A powerful shield that defends its wielder from even the most vicious of attacks.",
          "components": [
            "ring_of_health",
            "vitality_booster"
          ],
          "created": true,
          "charges": false
        },
        "recipe_crimson_guard": {
          "id": 243,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Crimson Guard Recipe",
          "cost": 750,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "crimson_guard": {
          "active": [
            {
              "name": "Guard",
              "desc": "For 12 seconds, grant nearby allied heroes and buildings a 100% chance to block 60 damage from each incoming attack.\n\nUnits may only be affected by Guard once every 46 seconds.\n\nRadius: 1200"
            }
          ],
          "passive": [
            {
              "name": "Damage Block",
              "desc": "Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged."
            }
          ],
          "id": 242,
          "img": "/apps/dota2/images/items/crimson_guard_lg.png?t=1580114426351",
          "dname": "Crimson Guard",
          "qual": "epic",
          "cost": 3800,
          "notes": "Multiple sources of damage block do not stack.",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "250",
              "footer": "Health"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "10.5",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "6",
              "footer": "Armor"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "3",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": 46,
          "lore": "A cuirass originally built to protect against the dreaded Year Beast.",
          "components": [
            "vanguard",
            "helm_of_iron_will"
          ],
          "created": true,
          "charges": false
        },
        "blade_mail": {
          "active": [
            {
              "name": "Damage Return",
              "desc": "For 4.5 seconds, duplicates any damage taken back to the unit that dealt the damage."
            }
          ],
          "id": 127,
          "img": "/apps/dota2/images/items/blade_mail_lg.png?t=1580114426351",
          "dname": "Blade Mail",
          "qual": "epic",
          "cost": 2200,
          "notes": "Damage Return is calculated before any kind of reduction.\nDamage Return doesn't reflect damage from other forms of Blade Mail.\nReturned damage type is the same as it was received.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "28",
              "footer": "Damage"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "6",
              "footer": "Armor"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            }
          ],
          "mc": 25,
          "cd": 25,
          "lore": "A razor-sharp coat of mail, it is the choice of selfless martyrs in combat.",
          "components": [
            "broadsword",
            "chainmail",
            "robe"
          ],
          "created": true,
          "charges": false
        },
        "soul_booster": {
          "id": 129,
          "img": "/apps/dota2/images/items/soul_booster_lg.png?t=1580114426351",
          "dname": "Soul Booster",
          "qual": "epic",
          "cost": 3200,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "425",
              "footer": "Health"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "425",
              "footer": "Mana"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Regain lost courage.",
          "components": [
            "vitality_booster",
            "energy_booster",
            "point_booster"
          ],
          "created": true,
          "charges": false
        },
        "hood_of_defiance": {
          "active": [
            {
              "name": "Barrier",
              "desc": "Creates a spell shield that absorbs up to 325 magical damage.  Lasts 12 seconds."
            }
          ],
          "id": 131,
          "img": "/apps/dota2/images/items/hood_of_defiance_lg.png?t=1580114426351",
          "dname": "Hood of Defiance",
          "qual": "epic",
          "cost": 1650,
          "notes": "Stacks multiplicatively with other sources of spell resistance.",
          "attrib": [
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "8",
              "footer": "HP Regeneration"
            },
            {
              "key": "tooltip_resist",
              "header": "+",
              "value": "25%",
              "footer": "Magic Resistance"
            }
          ],
          "mc": 75,
          "cd": 60,
          "lore": "A furred, magic resistant headpiece that is feared by wizards.",
          "components": [
            "ring_of_health",
            "cloak",
            "ring_of_regen"
          ],
          "created": true,
          "charges": false
        },
        "rapier": {
          "passive": [
            {
              "name": "Everlasting",
              "desc": "Dropped on death, and cannot be destroyed. \n\nBecomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier. "
            },
            {
              "name": "True Strike",
              "desc": "Your attacks cannot miss."
            }
          ],
          "hint": [
            ""
          ],
          "id": 133,
          "img": "/apps/dota2/images/items/rapier_lg.png?t=1580114426351",
          "dname": "Divine Rapier",
          "qual": "epic",
          "cost": 6000,
          "notes": "If Divine Rapier is dropped and picked up by an enemy of its original owner, it cannot be dropped again except by death.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "330",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "So powerful, it cannot have a single owner.",
          "components": [
            "relic",
            "demon_edge"
          ],
          "created": true,
          "charges": false
        },
        "monkey_king_bar": {
          "passive": [
            {
              "name": "Pierce",
              "desc": "Grants each attack a 75% chance to pierce through evasion and deal 100 bonus magical damage."
            }
          ],
          "id": 135,
          "img": "/apps/dota2/images/items/monkey_king_bar_lg.png?t=1580114426351",
          "dname": "Monkey King Bar",
          "qual": "epic",
          "cost": 4175,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "52",
              "footer": "Damage"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "10",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A powerful staff used by a master warrior.",
          "components": [
            "demon_edge",
            "javelin",
            "quarterstaff"
          ],
          "created": true,
          "charges": false
        },
        "recipe_radiance": {
          "id": 136,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Radiance Recipe",
          "cost": 1350,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "radiance": {
          "toggle": [
            {
              "name": "Burn",
              "desc": "When active, scorches enemies for 60 magical damage per second, and causes them to miss 17% of their attacks. Illusions deal 35 magical damage per second.\n\nRadius: 700"
            }
          ],
          "id": 137,
          "img": "/apps/dota2/images/items/radiance_lg.png?t=1580114426351",
          "dname": "Radiance",
          "qual": "epic",
          "cost": 5150,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "60",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A divine weapon that causes damage and a bright burning effect that lays waste to nearby enemies.",
          "components": [
            "relic"
          ],
          "created": true,
          "charges": false
        },
        "butterfly": {
          "id": 139,
          "img": "/apps/dota2/images/items/butterfly_lg.png?t=1580114426351",
          "dname": "Butterfly",
          "qual": "epic",
          "cost": 5475,
          "notes": "Stacks diminishingly with other sources of Evasion.",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "35",
              "footer": "Agility"
            },
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "25",
              "footer": "Damage"
            },
            {
              "key": "bonus_evasion",
              "header": "+",
              "value": "35%",
              "footer": "Evasion"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "30",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Only the mightiest and most experienced of warriors can wield the Butterfly, but it provides incredible dexterity in combat.",
          "components": [
            "eagle",
            "talisman_of_evasion",
            "quarterstaff"
          ],
          "created": true,
          "charges": false
        },
        "recipe_greater_crit": {
          "id": 140,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Daedalus Recipe",
          "cost": 1000,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "greater_crit": {
          "passive": [
            {
              "name": "Critical Strike",
              "desc": "Grants each attack a 30% chance to deal 225% damage."
            }
          ],
          "id": 141,
          "img": "/apps/dota2/images/items/greater_crit_lg.png?t=1580114426351",
          "dname": "Daedalus",
          "qual": "epic",
          "cost": 5330,
          "notes": "Critical Strike does not work against buildings.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "88",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A weapon of incredible power that is difficult for even the strongest of warriors to control.",
          "components": [
            "lesser_crit",
            "demon_edge"
          ],
          "created": true,
          "charges": false
        },
        "recipe_basher": {
          "id": 142,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Skull Basher Recipe",
          "cost": 900,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "basher": {
          "passive": [
            {
              "name": "Bash",
              "desc": "Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%."
            }
          ],
          "id": 143,
          "img": "/apps/dota2/images/items/basher_lg.png?t=1580114426351",
          "dname": "Skull Basher",
          "qual": "epic",
          "cost": 2950,
          "notes": "Does not stack with other sources of Bash, however it will stack with Mini-Bash.\nThe following heroes cannot trigger Bash on this item: Spirit Breaker, Faceless Void, and Slardar.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "25",
              "footer": "Damage"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "10",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": 2,
          "lore": "A feared weapon in the right hands, this maul's ability to shatter the defenses of its opponents should not be underestimated.",
          "components": [
            "mithril_hammer",
            "belt_of_strength"
          ],
          "created": true,
          "charges": false
        },
        "recipe_bfury": {
          "id": 144,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Battle Fury Recipe",
          "cost": 300,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "bfury": {
          "active": [
            {
              "name": "Chop Tree",
              "desc": "Destroy a target tree.\n\nCast Range: 350"
            }
          ],
          "passive": [
            {
              "name": "Quell",
              "desc": "Increases attack damage against non-hero units by 18 for melee heroes, and 5 for ranged. "
            },
            {
              "name": "Cleave",
              "desc": "Deals 70% of attack damage as physical damage in a cone up to 650 around the target. Deals 50% against creeps. (Melee Only)"
            }
          ],
          "id": 145,
          "img": "/apps/dota2/images/items/bfury_lg.png?t=1580114426351",
          "dname": "Battle Fury",
          "qual": "epic",
          "cost": 4350,
          "notes": "Cleave damage is reduced by armor type but not by armor value.\nCleave damage goes through spell immunity.\nIf multiple sources of Cleave are present, each Cleave's damage is applied separately.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "60",
              "footer": "Damage"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "7.5",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "3.75",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": 4,
          "lore": "The bearer of this mighty axe gains the ability to cut down swaths of enemies at once.",
          "components": [
            "demon_edge",
            "pers",
            "quelling_blade"
          ],
          "created": true,
          "charges": false
        },
        "recipe_manta": {
          "id": 146,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Manta Style Recipe",
          "cost": 500,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "manta": {
          "active": [
            {
              "name": "Mirror Image",
              "desc": "Creates 2 images of your hero that last 20 seconds. \n\nMelee images deal 33% damage and take 350% damage, while Ranged images deal 28% and take 400% damage. \n\nCooldown increased by 15 seconds on ranged heroes.\n\nDispel Type: Basic Dispel"
            }
          ],
          "id": 147,
          "img": "/apps/dota2/images/items/manta_lg.png?t=1580114426351",
          "dname": "Manta Style",
          "qual": "epic",
          "cost": 4700,
          "notes": "Has a %invuln_duration% second cast time during which you are invulnerable.\nMany effects are removed upon using Manta.\nYasha based movement speed bonuses from multiple items do not stack.",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "10",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "26",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "12",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "20",
              "footer": "Movement Speed"
            }
          ],
          "mc": 125,
          "cd": 45,
          "lore": "An axe made of reflective materials that causes confusion amongst enemy ranks.",
          "components": [
            "yasha",
            "ultimate_orb"
          ],
          "created": true,
          "charges": false
        },
        "recipe_lesser_crit": {
          "id": 148,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Crystalys Recipe",
          "cost": 500,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "lesser_crit": {
          "passive": [
            {
              "name": "Critical Strike",
              "desc": "Grants each attack a 20% chance to deal 160% damage."
            }
          ],
          "id": 149,
          "img": "/apps/dota2/images/items/lesser_crit_lg.png?t=1580114426351",
          "dname": "Crystalys",
          "qual": "epic",
          "cost": 2130,
          "notes": "Critical Strike does not work against buildings.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "45",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A blade forged from rare crystals, it seeks weak points in enemy armor.",
          "components": [
            "broadsword",
            "blades_of_attack"
          ],
          "created": true,
          "charges": false
        },
        "dragon_lance": {
          "passive": [
            {
              "name": "Dragon's Reach",
              "desc": "Increases attack range of ranged heroes by 140."
            }
          ],
          "id": 236,
          "img": "/apps/dota2/images/items/dragon_lance_lg.png?t=1580114426351",
          "dname": "Dragon Lance",
          "qual": "artifact",
          "cost": 1900,
          "notes": "Passive does not stack.",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "12",
              "footer": "Agility"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "12",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "The forward charge of the wyvern host grants no quarter.",
          "components": [
            "ogre_axe",
            "boots_of_elves",
            "boots_of_elves"
          ],
          "created": true,
          "charges": false
        },
        "recipe_armlet": {
          "id": 150,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Armlet of Mordiggian Recipe",
          "cost": 650,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "armlet": {
          "toggle": [
            {
              "name": "Unholy Strength",
              "desc": "When active, Unholy Strength grants +31 damage, +25 strength and +4 armor, but drains 54 health per second.\n\n You cannot die from the health drain when Unholy Strength is activated, nor from the strength loss when Unholy Strength is deactivated."
            }
          ],
          "id": 151,
          "img": "/apps/dota2/images/items/armlet_lg.png?t=1580114426351",
          "dname": "Armlet of Mordiggian",
          "qual": "epic",
          "cost": 2380,
          "notes": "The strength change will affect both maximum and current HP, but you cannot die from the change.\nThe strength change occurs over 0.6 seconds.\nActivating or deactivating Unholy Strength does not interrupt channeling.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "15",
              "footer": "Damage"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "25",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "5",
              "footer": "Armor"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "5",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Weapon of choice among brutes, the bearer sacrifices his life energy to gain immense strength and power.",
          "components": [
            "helm_of_iron_will",
            "gloves",
            "blades_of_attack"
          ],
          "created": true,
          "charges": false
        },
        "invis_sword": {
          "active": [
            {
              "name": "Shadow Walk",
              "desc": "Makes you invisible for 14 seconds, or until you attack or cast a spell.  While Shadow Walk is active, you move 20% faster and can move through units.  \n\nIf attacking to end the invisibility, you gain 175 bonus physical damage on that attack."
            }
          ],
          "id": 152,
          "img": "/apps/dota2/images/items/invis_sword_lg.png?t=1580114426351",
          "dname": "Shadow Blade",
          "qual": "epic",
          "cost": 2800,
          "notes": "Has a %windwalk_fade_time% second fade time.\nIf the invisibility ends without attacking, the bonus damage is lost.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "27",
              "footer": "Damage"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "30",
              "footer": "Attack Speed"
            }
          ],
          "mc": 75,
          "cd": 28,
          "lore": "The blade of a fallen king, it allows you to move unseen and strike from the shadows.",
          "components": [
            "shadow_amulet",
            "claymore"
          ],
          "created": true,
          "charges": false
        },
        "recipe_silver_edge": {
          "id": 248,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Silver Edge Recipe",
          "cost": 600,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "silver_edge": {
          "active": [
            {
              "name": "Shadow Walk",
              "desc": "Makes you invisible for 14 seconds, or until you attack or cast a spell.  While invisible, you move 25% faster and can move through units.  \n\nAttacking to end the invisibility will deal 175 bonus physical damage to the target, and for 4 seconds, disable their passive abilities."
            }
          ],
          "id": 249,
          "img": "/apps/dota2/images/items/silver_edge_lg.png?t=1580114426351",
          "dname": "Silver Edge",
          "qual": "epic",
          "cost": 5550,
          "notes": "Backstab cannot miss.\nBackstab does not pierce spell immunity.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "45",
              "footer": "Damage"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "30",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "15",
              "footer": "All Attributes"
            }
          ],
          "mc": 75,
          "cd": 22,
          "lore": "Once used to slay an unjust king, only to have the kingdom erupt into civil war in the aftermath.",
          "components": [
            "invis_sword",
            "ultimate_orb"
          ],
          "created": true,
          "charges": false
        },
        "sange_and_yasha": {
          "id": 154,
          "img": "/apps/dota2/images/items/sange_and_yasha_lg.png?t=1580114426351",
          "dname": "Sange and Yasha",
          "qual": "artifact",
          "cost": 4100,
          "notes": "Yasha-based movement speed bonuses from multiple items do not stack.",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "16",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "16",
              "footer": "Agility"
            },
            {
              "key": "status_resistance",
              "header": "+Status Resistance",
              "value": "20%"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "16",
              "footer": "Attack Speed"
            },
            {
              "key": "movement_speed_percent_bonus",
              "header": "+",
              "value": "30",
              "footer": "Movement Speed"
            },
            {
              "key": "hp_regen_amp",
              "header": "+Self HP Regen and Lifesteal Amp",
              "value": "30%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Sange and Yasha, when attuned by the moonlight and used together, become a very powerful combination.",
          "components": [
            "yasha",
            "sange"
          ],
          "created": true,
          "charges": false
        },
        "kaya_and_sange": {
          "id": 273,
          "img": "/apps/dota2/images/items/kaya_and_sange_lg.png?t=1580114426351",
          "dname": "Kaya and Sange",
          "qual": "artifact",
          "cost": 4100,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "16",
              "footer": "Strength"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "16",
              "footer": "Intelligence"
            },
            {
              "key": "status_resistance",
              "header": "+Status Resistance",
              "value": "20%"
            },
            {
              "key": "manacost_reduction",
              "header": "+Manacost and Manaloss Reduction",
              "value": "16%"
            },
            {
              "key": "spell_amp",
              "header": "+Spell Amplification",
              "value": "12%"
            },
            {
              "key": "hp_regen_amp",
              "header": "+Self HP Regen and Lifesteal Amp",
              "value": "30%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": [
            "sange",
            "kaya"
          ],
          "created": true,
          "charges": false
        },
        "yasha_and_kaya": {
          "id": 277,
          "img": "/apps/dota2/images/items/yasha_and_kaya_lg.png?t=1580114426351",
          "dname": "Yasha and Kaya",
          "qual": "artifact",
          "cost": 4100,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "16",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "16",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "16",
              "footer": "Attack Speed"
            },
            {
              "key": "manacost_reduction",
              "header": "+Manacost and Manaloss Reduction",
              "value": "16%"
            },
            {
              "key": "movement_speed_percent_bonus",
              "header": "+",
              "value": "30",
              "footer": "Movement Speed"
            },
            {
              "key": "spell_amp",
              "header": "+Spell Amplification",
              "value": "12%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": [
            "kaya",
            "yasha"
          ],
          "created": true,
          "charges": false
        },
        "satanic": {
          "active": [
            {
              "name": "Unholy Rage",
              "desc": "Increases Lifesteal percentage to 200% for 5 seconds. "
            }
          ],
          "passive": [
            {
              "name": "Lifesteal",
              "desc": "Heals the attacker for 25% of attack damage dealt."
            }
          ],
          "id": 156,
          "img": "/apps/dota2/images/items/satanic_lg.png?t=1580114426351",
          "dname": "Satanic",
          "qual": "artifact",
          "cost": 5300,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "25",
              "footer": "Strength"
            },
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "25",
              "footer": "Damage"
            },
            {
              "key": "status_resistance",
              "header": "+Status Resistance",
              "value": "30%"
            }
          ],
          "mc": false,
          "cd": 35,
          "lore": "Immense power at the cost of your soul.",
          "components": [
            "lifesteal",
            "claymore",
            "reaver"
          ],
          "created": true,
          "charges": false
        },
        "recipe_mjollnir": {
          "id": 157,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Mjollnir Recipe",
          "cost": 900,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "mjollnir": {
          "active": [
            {
              "name": "Static Charge",
              "desc": "Places a charged shield on a target unit for 15 seconds which has a 20% chance to release a 200 magical damage shocking bolt at a nearby attacker and 4 additional enemies.\n\nRange: 800"
            }
          ],
          "passive": [
            {
              "name": "Chain Lightning",
              "desc": "Grants a 25% chance on attack to release a bolt of electricity that leaps between 12 targets within a 900 radius, dealing 170 magical damage to each. Lightning proc pierces evasion."
            }
          ],
          "id": 158,
          "img": "/apps/dota2/images/items/mjollnir_lg.png?t=1580114426351",
          "dname": "Mjollnir",
          "qual": "artifact",
          "cost": 5600,
          "notes": "Static Charge cannot trigger more than once per second.\nStatic Charge's shock deals magical damage centered on hero with the Static Charge. Static Charge's targets cannot be more than %static_seconary_radius% range away.\nStatic Charge procs will not bounce to heroes that are invisible or hidden by Fog of War.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "24",
              "footer": "Damage"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "75",
              "footer": "Attack Speed"
            }
          ],
          "mc": 50,
          "cd": 35,
          "lore": "Thor's magical hammer, made for him by the dwarves Brok and Eitri.",
          "components": [
            "maelstrom",
            "hyperstone"
          ],
          "created": true,
          "charges": false
        },
        "skadi": {
          "passive": [
            {
              "name": "Cold Attack",
              "desc": "Attacks lower enemy movement and attack speed for 3 seconds. Slows enemy ranged units by -45% movement speed and by -45 attack speed. Slows enemy melee units by -20% movement speed and by -20 attack speed. "
            }
          ],
          "id": 160,
          "img": "/apps/dota2/images/items/skadi_lg.png?t=1580114426351",
          "dname": "Eye of Skadi",
          "qual": "artifact",
          "cost": 5500,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "25",
              "footer": "All Attributes"
            },
            {
              "key": "bonus_health",
              "header": "+",
              "value": "225",
              "footer": "Health"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "250",
              "footer": "Mana"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Extremely rare artifact, guarded by the azure dragons.",
          "components": [
            "ultimate_orb",
            "ultimate_orb",
            "point_booster"
          ],
          "created": true,
          "charges": false
        },
        "recipe_sange": {
          "id": 161,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Sange Recipe",
          "cost": 600,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "sange": {
          "id": 162,
          "img": "/apps/dota2/images/items/sange_lg.png?t=1580114426351",
          "dname": "Sange",
          "qual": "artifact",
          "cost": 2050,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "16",
              "footer": "Strength"
            },
            {
              "key": "status_resistance",
              "header": "+Status Resistance",
              "value": "16%"
            },
            {
              "key": "hp_regen_amp",
              "header": "+Self HP Regen and Lifesteal Amp",
              "value": "24%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Sange is an unusually accurate weapon, seeking weak points automatically.",
          "components": [
            "ogre_axe",
            "belt_of_strength"
          ],
          "created": true,
          "charges": false
        },
        "recipe_helm_of_the_dominator": {
          "id": 163,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Helm of the Dominator Recipe",
          "cost": 300,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "helm_of_the_dominator": {
          "active": [
            {
              "name": "Dominate",
              "desc": "Takes control of one neutral, non-ancient target unit and sets its movement speed to 425 and max health to a minimum of 1500.\n\nDominated units with a max health of greater than 1500 retain their original max health.  Dominated unit's bounty is set to 200 gold.\n\nRange: 700"
            }
          ],
          "passive": [
            {
              "name": "Dominator Aura",
              "desc": "Increases nearby allied hero and player units base damage by 20%  and health regen by 5. Has a 50%  bigger effect on player units.\n\nRadius: 1200"
            }
          ],
          "id": 164,
          "img": "/apps/dota2/images/items/helm_of_the_dominator_lg.png?t=1580114426351",
          "dname": "Helm of the Dominator",
          "qual": "artifact",
          "cost": 2400,
          "notes": "Cannot dominate more than one unit at a time.  If a new unit is dominated, the old one will die.\nCan also Dominate enemy lane creeps and summoned units.\nSelling Helm of the Dominator will cause dominated units to die.",
          "attrib": [
            {
              "key": "bonus_stats",
              "header": "+",
              "value": "7",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": 60,
          "lore": "The powerful headpiece of a dead necromancer.",
          "components": [
            "broadsword",
            "headdress",
            "crown"
          ],
          "created": true,
          "charges": false
        },
        "maelstrom": {
          "passive": [
            {
              "name": "Chain Lightning",
              "desc": "Grants a 25% chance on attack to release a bolt of electricity that leaps between 4 targets within a 900 radius, dealing 140 magical damage to each. Lightning proc pierces evasion."
            }
          ],
          "id": 166,
          "img": "/apps/dota2/images/items/maelstrom_lg.png?t=1580114426351",
          "dname": "Maelstrom",
          "qual": "artifact",
          "cost": 2700,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "24",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A hammer forged for the gods themselves, Maelstrom allows its user to harness the power of lightning.",
          "components": [
            "mithril_hammer",
            "javelin"
          ],
          "created": true,
          "charges": false
        },
        "desolator": {
          "passive": [
            {
              "name": "Corruption",
              "desc": "Your attacks reduce the target's armor by -7 for 7 seconds."
            }
          ],
          "id": 168,
          "img": "/apps/dota2/images/items/desolator_lg.png?t=1580114426351",
          "dname": "Desolator",
          "qual": "artifact",
          "cost": 3500,
          "notes": "Armor reduction works on buildings.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "50",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "A wicked weapon, used in torturing political criminals.",
          "components": [
            "mithril_hammer",
            "mithril_hammer",
            "blight_stone"
          ],
          "created": true,
          "charges": false
        },
        "recipe_yasha": {
          "id": 169,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Yasha Recipe",
          "cost": 600,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "yasha": {
          "id": 170,
          "img": "/apps/dota2/images/items/yasha_lg.png?t=1580114426351",
          "dname": "Yasha",
          "qual": "artifact",
          "cost": 2050,
          "notes": "Yasha-based movement speed bonuses from multiple items do not stack.",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "16",
              "footer": "Agility"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "12",
              "footer": "Attack Speed"
            },
            {
              "key": "movement_speed_percent_bonus",
              "header": "+",
              "value": "20",
              "footer": "Movement Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "Yasha is regarded as the swiftest weapon ever created.",
          "components": [
            "blade_of_alacrity",
            "boots_of_elves"
          ],
          "created": true,
          "charges": false
        },
        "mask_of_madness": {
          "active": [
            {
              "name": "Berserk",
              "desc": "Gives 110 attack speed and 30 movement speed, but reduces your armor by 8 and silences you.  Lasts 6 seconds."
            }
          ],
          "passive": [
            {
              "name": "Lifesteal",
              "desc": "Heals the attacker for 20% of attack damage dealt."
            }
          ],
          "id": 172,
          "img": "/apps/dota2/images/items/mask_of_madness_lg.png?t=1580114426351",
          "dname": "Mask of Madness",
          "qual": "artifact",
          "cost": 1775,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "15",
              "footer": "Damage"
            },
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "10",
              "footer": "Attack Speed"
            }
          ],
          "mc": 25,
          "cd": 16,
          "lore": "Once this mask is worn, its bearer becomes an uncontrollable aggressive force.",
          "components": [
            "lifesteal",
            "quarterstaff"
          ],
          "created": true,
          "charges": false
        },
        "recipe_diffusal_blade": {
          "id": 173,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Diffusal Blade Recipe",
          "cost": 700,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "diffusal_blade": {
          "active": [
            {
              "name": "Inhibit",
              "desc": "Targets an enemy, slowing it for 4 seconds.\n\nRange: 600"
            }
          ],
          "passive": [
            {
              "name": "Manabreak",
              "desc": "Each attack burns 50 mana from the target, and deals 0.8 physical damage per burned mana. \n\nBurns 16 mana per attack from melee illusions and 8 mana per attack from ranged illusions."
            }
          ],
          "id": 174,
          "img": "/apps/dota2/images/items/diffusal_blade_lg.png?t=1580114426351",
          "dname": "Diffusal Blade",
          "qual": "artifact",
          "cost": 3150,
          "notes": "Does not stack with other manabreak abilities.",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "20",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            }
          ],
          "mc": false,
          "cd": 15,
          "lore": "An enchanted blade that allows the user to cut straight into the enemy's soul.",
          "components": [
            "blade_of_alacrity",
            "blade_of_alacrity",
            "robe"
          ],
          "created": true,
          "charges": false
        },
        "ethereal_blade": {
          "active": [
            {
              "name": "Ether Blast",
              "desc": "Converts the target unit to ethereal form, rendering them immune to physical damage, but unable to attack and -40% more vulnerable to magic damage.  Lasts for 4 seconds on allies and 4 seconds on enemies.\n\n  Enemy targets are also slowed by -80%, and take 2x your primary attribute + 75 as magical damage.\n\nRange: 800"
            }
          ],
          "id": 176,
          "img": "/apps/dota2/images/items/ethereal_blade_lg.png?t=1580114426351",
          "dname": "Ethereal Blade",
          "qual": "epic",
          "cost": 4700,
          "notes": "Shares cooldown with Ghost Scepter.\nEthereal units take 40% bonus magic damage.\nLasts an extra second on Self or Allied cast.\nUsing a Town Portal Scroll or Boots of Travel will not dispel Ethereal Form.",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "40",
              "footer": "Agility"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "10",
              "footer": "Strength"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            }
          ],
          "mc": 100,
          "cd": 20,
          "lore": "A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.",
          "components": [
            "eagle",
            "ghost"
          ],
          "created": true,
          "charges": false
        },
        "recipe_soul_ring": {
          "id": 177,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Soul Ring Recipe",
          "cost": 250,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "soul_ring": {
          "active": [
            {
              "name": "Sacrifice",
              "desc": "Consume 170 health to temporarily gain 150 mana.  Lasts 10 seconds.\n\nIf the mana gained cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool."
            }
          ],
          "id": 178,
          "img": "/apps/dota2/images/items/soul_ring_lg.png?t=1580114426351",
          "dname": "Soul Ring",
          "qual": "common",
          "cost": 790,
          "notes": "If this mana is not used before the duration ends, the extra mana is lost.",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "6",
              "footer": "Strength"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "2.5",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": 25,
          "lore": "A ring that feeds on the souls of those who wear it.",
          "components": [
            "ring_of_regen",
            "gauntlets",
            "gauntlets"
          ],
          "created": true,
          "charges": false
        },
        "arcane_boots": {
          "active": [
            {
              "name": "Replenish Mana",
              "desc": "Restores 160 mana to all nearby allies.\n\nRadius: 1200"
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 180,
          "img": "/apps/dota2/images/items/arcane_boots_lg.png?t=1580114426351",
          "dname": "Arcane Boots",
          "qual": "rare",
          "cost": 1400,
          "notes": "Does not work on Meepo clones.",
          "attrib": [
            {
              "key": "bonus_movement",
              "header": "+",
              "value": "15%",
              "footer": "Movement Speed"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "250",
              "footer": "Mana"
            }
          ],
          "mc": false,
          "cd": 55,
          "lore": "Magi equipped with these boots are valued in battle.",
          "components": [
            "boots",
            "energy_booster"
          ],
          "created": true,
          "charges": false
        },
        "octarine_core": {
          "passive": [
            {
              "name": "Cooldown Reduction",
              "desc": "Reduces the cooldown time of all spells and items by 25%."
            },
            {
              "name": "Spell Lifesteal",
              "desc": "25% of spell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type.  \n\nLifesteal reduced to 5% against creeps."
            }
          ],
          "id": 235,
          "img": "/apps/dota2/images/items/octarine_core_lg.png?t=1580114426351",
          "dname": "Octarine Core",
          "qual": "rare",
          "cost": 5900,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intelligence",
              "header": "+",
              "value": "25",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_health",
              "header": "+",
              "value": "425",
              "footer": "Health"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "425",
              "footer": "Mana"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "At the core of spellcraft are spectrums only the very gifted can sense.",
          "components": [
            "mystic_staff",
            "soul_booster"
          ],
          "created": true,
          "charges": false
        },
        "orb_of_venom": {
          "passive": [
            {
              "name": "Poison Attack",
              "desc": "Poisons the target, dealing 5 magical damage per second and slowing movement by -12% if the equipped hero is melee, or 3 magical damage per second and slowing movement by -4% if they are ranged. Lasts for 3 seconds."
            }
          ],
          "id": 181,
          "img": "/apps/dota2/images/items/orb_of_venom_lg.png?t=1580114426351",
          "dname": "Orb of Venom",
          "qual": "component",
          "cost": 300,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "Envenoms your veapon with the venom of a venomous viper.",
          "components": null,
          "created": false,
          "charges": false
        },
        "blight_stone": {
          "passive": [
            {
              "name": "Lesser Corruption",
              "desc": "Your attacks reduce the target's armor by -2 for 8 seconds."
            }
          ],
          "id": 240,
          "img": "/apps/dota2/images/items/blight_stone_lg.png?t=1580114426351",
          "dname": "Blight Stone",
          "qual": "component",
          "cost": 300,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "An unnerving stone unearthed beneath the Fields of Endless Carnage.",
          "components": null,
          "created": false,
          "charges": false
        },
        "recipe_ancient_janggo": {
          "id": 184,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Drum of Endurance Recipe",
          "cost": 800,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "ancient_janggo": {
          "active": [
            {
              "name": "Endurance",
              "desc": "Gives +35 attack speed and +13% movement speed to nearby allies for 6 seconds. \n\nRadius: 1200 "
            }
          ],
          "hint": [
            ""
          ],
          "passive": [
            {
              "name": "Speed Aura",
              "desc": "Increases nearby allies' attack speed by 20.\n\nRadius: 1200"
            }
          ],
          "id": 185,
          "img": "/apps/dota2/images/items/ancient_janggo_lg.png?t=1580114426351",
          "dname": "Drum of Endurance",
          "qual": "rare",
          "cost": 1900,
          "notes": "Re-purchasing the Drum of Endurance recipe will refresh its charges.\nMultiple instances of Swiftness Aura do not stack.",
          "attrib": [
            {
              "key": "bonus_int",
              "header": "+",
              "value": "4",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_str",
              "header": "+",
              "value": "4",
              "footer": "Strength"
            },
            {
              "key": "bonus_agi",
              "header": "+",
              "value": "4",
              "footer": "Agility"
            },
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "20",
              "footer": "Movement Speed"
            }
          ],
          "mc": false,
          "cd": 30,
          "lore": "A relic that enchants the bodies of those around it for swifter movement in times of crisis.",
          "components": [
            "gloves",
            "crown",
            "wind_lace"
          ],
          "created": true,
          "charges": 6
        },
        "medallion_of_courage": {
          "active": [
            {
              "name": "Valor",
              "desc": "If cast on an ally, grants them the 5 armor, and removing it from the caster. \n\nIf cast on an enemy, reduces 5 armor on both the enemy and the caster. \n\nCannot target spell immune enemies.\n\nRange: 1000"
            }
          ],
          "id": 187,
          "img": "/apps/dota2/images/items/medallion_of_courage_lg.png?t=1580114426351",
          "dname": "Medallion of Courage",
          "qual": "rare",
          "cost": 1100,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "5",
              "footer": "Armor"
            },
            {
              "key": "bonus_mana_regen_pct",
              "header": "+",
              "value": "0.75",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": 7,
          "lore": "The bearer has no fear of combat.",
          "components": [
            "chainmail",
            "sobi_mask",
            "blight_stone"
          ],
          "created": true,
          "charges": false
        },
        "recipe_solar_crest": {
          "id": 227,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "cost": 400,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "solar_crest": {
          "active": [
            {
              "name": "Shine",
              "desc": "When cast on an ally, grants them 8 armor, 80 attack speed, and 10% movement speed. When cast on an enemy, removes 8 armor, 80 attack speed, and 10% movement speed.\n\nRemoves the armor from the caster when used. \n\n Cannot target spell immune enemies.\n\nRange: 1000"
            }
          ],
          "id": 229,
          "img": "/apps/dota2/images/items/solar_crest_lg.png?t=1580114426351",
          "dname": "Solar Crest",
          "qual": "rare",
          "cost": 3900,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "8",
              "footer": "Armor"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "10",
              "footer": "All Attributes"
            },
            {
              "key": "self_movement_speed",
              "header": "+",
              "value": "20",
              "footer": "Movement Speed"
            },
            {
              "key": "bonus_mana_regen_pct",
              "header": "+",
              "value": "1.5",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": 7,
          "lore": "A talisman forged to honor the daytime sky.",
          "components": [
            "medallion_of_courage",
            "ultimate_orb",
            "wind_lace"
          ],
          "created": true,
          "charges": false
        },
        "smoke_of_deceit": {
          "use": [
            {
              "name": "Disguise",
              "desc": "Turns the caster and all allied player-controlled units in a 1200 radius invisible, and grants 15% bonus movement speed for 35 seconds. \n\nAttacking, or moving within 1025 range of an enemy hero or tower, will break the invisibility. \n\nDisguise grants invisibility that is immune to True Sight."
            }
          ],
          "id": 188,
          "img": "/apps/dota2/images/items/smoke_of_deceit_lg.png?t=1580114426351",
          "dname": "Smoke of Deceit",
          "qual": "consumable",
          "cost": 80,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 1,
          "lore": "The charlatan wizard Myrddin's only true contribution to the arcane arts.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "tome_of_knowledge": {
          "use": [
            {
              "name": "Enlighten",
              "desc": "Grants you 700 experience plus 135 per tome consumed by your team after the first two.\n\nTomes Used By Team: %customval_team_tomes_used%"
            }
          ],
          "id": 257,
          "img": "/apps/dota2/images/items/tome_of_knowledge_lg.png?t=1580114426351",
          "dname": "Tome of Knowledge",
          "qual": "consumable",
          "cost": 150,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "That which raises beast to man and man to god.",
          "components": null,
          "created": false,
          "charges": 1
        },
        "recipe_veil_of_discord": {
          "id": 189,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Veil of Discord Recipe",
          "cost": 1150,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "veil_of_discord": {
          "active": [
            {
              "name": "Magic Weakness",
              "desc": "Cast a 600 radius blast that causes enemies to take 20% increased damage from spells.\n\nRange: 1000\nDuration: 16 seconds. "
            }
          ],
          "hint": [
            ""
          ],
          "passive": [
            {
              "name": "Basilius Aura",
              "desc": "Grants 1.25 mana regeneration to allies.  \n\nRadius: 1200"
            }
          ],
          "id": 190,
          "img": "/apps/dota2/images/items/veil_of_discord_lg.png?t=1580114426351",
          "dname": "Veil of Discord",
          "qual": "rare",
          "cost": 2050,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "9",
              "footer": "All Attributes"
            }
          ],
          "mc": 50,
          "cd": 20,
          "lore": "The headwear of corrupt magi.",
          "components": [
            "ring_of_basilius",
            "crown"
          ],
          "created": true,
          "charges": false
        },
        "recipe_guardian_greaves": {
          "id": 230,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Guardian Greaves Recipe",
          "cost": 1600,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "guardian_greaves": {
          "active": [
            {
              "name": "Mend",
              "desc": "Restores 300 health and 200 mana to nearby allies, and removes most negative effects from the caster.\n\nRadius: 1200\nDispel Type: Basic Dispel"
            }
          ],
          "passive": [
            {
              "name": "Guardian Aura",
              "desc": "Provides 2.5 health regeneration to allied units. If an allied hero's health falls below 20%, they receive 16 health regeneration and 10 armor. \n\nRadius: 1200 "
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 231,
          "img": "/apps/dota2/images/items/guardian_greaves_lg.png?t=1580114426351",
          "dname": "Guardian Greaves",
          "qual": "rare",
          "cost": 4950,
          "notes": "The aura boost only applies to heroes.",
          "attrib": [
            {
              "key": "bonus_movement",
              "header": "+",
              "value": "17%",
              "footer": "Movement Speed"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "250",
              "footer": "Mana"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "6",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": 40,
          "lore": "One of many holy instruments constructed to honor the Omniscience.",
          "components": [
            "mekansm",
            "arcane_boots"
          ],
          "created": true,
          "charges": false
        },
        "recipe_rod_of_atos": {
          "id": 205,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Rod of Atos Recipe",
          "cost": 850,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "rod_of_atos": {
          "active": [
            {
              "name": "Cripple",
              "desc": "Roots the target for 2 seconds.\n\nRange: 1100"
            }
          ],
          "id": 206,
          "img": "/apps/dota2/images/items/rod_of_atos_lg.png?t=1580114426351",
          "dname": "Rod of Atos",
          "qual": "rare",
          "cost": 2750,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "20",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "10",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "10",
              "footer": "Agility"
            }
          ],
          "mc": 50,
          "cd": 18,
          "lore": "Atos, the Lord of Blight, has his essence stored in this deceptively simple wand.",
          "components": [
            "staff_of_wizardry",
            "crown",
            "crown"
          ],
          "created": true,
          "charges": false
        },
        "recipe_iron_talon": {
          "id": 238,
          "img": "/apps/dota2/images/items/recipe_lg.png?3",
          "dname": "Iron Talon Recipe",
          "cost": 125,
          "desc": "",
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false
        },
        "iron_talon": {
          "active": [
            {
              "name": "Chop",
              "desc": "Targets a non-player enemy unit to remove 50% of its current HP.\n\nIf cast on a tree, instantly destroys it.\n\nUnit Range: 350\nTree Range: %abilitycastrange%"
            }
          ],
          "id": 239,
          "img": "/apps/dota2/images/items/iron_talon_lg.png?t=1580114426351",
          "dname": "Iron Talon",
          "qual": "common",
          "cost": 301,
          "notes": "Has a 4 second cooldown on Trees.\nCannot target ancients.",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "15",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "2",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": 25,
          "lore": "A simple but effective weapon devised to quell a great Hellbear uprising.",
          "components": [
            "quelling_blade",
            "ring_of_protection"
          ],
          "created": true,
          "charges": false,
          "tier": 1
        },
        "recipe_abyssal_blade": {
          "id": 207,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Abyssal Blade Recipe",
          "cost": 1550,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "abyssal_blade": {
          "active": [
            {
              "name": "Overwhelm",
              "desc": "Blinks to and stuns a target enemy unit for 2 seconds. \n\nPierces Spell Immunity.\n\nRange: 600"
            }
          ],
          "passive": [
            {
              "name": "Bash",
              "desc": "Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%."
            },
            {
              "name": "Damage Block",
              "desc": "Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged."
            }
          ],
          "id": 208,
          "img": "/apps/dota2/images/items/abyssal_blade_lg.png?t=1580114426351",
          "dname": "Abyssal Blade",
          "qual": "epic",
          "cost": 6650,
          "notes": "The stun is melee range.\nDoes not stack with other bashes.\nMultiple sources of damage block do not stack.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "25",
              "footer": "Damage"
            },
            {
              "key": "bonus_health",
              "header": "+",
              "value": "250",
              "footer": "Health"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "10",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "10",
              "footer": "Strength"
            }
          ],
          "mc": 75,
          "cd": 35,
          "lore": "The lost blade of the Commander of the Abyss, this edge cuts into an enemy's soul.",
          "components": [
            "basher",
            "vanguard"
          ],
          "created": true,
          "charges": false
        },
        "heavens_halberd": {
          "active": [
            {
              "name": "Disarm",
              "desc": "Prevents a target from attacking for 3 seconds on melee targets, and 5 seconds on ranged targets.\n\nRange: 600"
            }
          ],
          "id": 210,
          "img": "/apps/dota2/images/items/heavens_halberd_lg.png?t=1580114426351",
          "dname": "Heaven's Halberd",
          "qual": "artifact",
          "cost": 3450,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_evasion",
              "header": "+",
              "value": "25%",
              "footer": "Evasion"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "20",
              "footer": "Strength"
            },
            {
              "key": "status_resistance",
              "header": "+Status Resistance",
              "value": "20%"
            },
            {
              "key": "hp_regen_amp",
              "header": "+Self HP Regen and Lifesteal Amp",
              "value": "30%"
            }
          ],
          "mc": 100,
          "cd": 18,
          "lore": "This halberd moves with the speed of a smaller weapon, allowing the bearer to win duels that a heavy edge would not.",
          "components": [
            "sange",
            "talisman_of_evasion"
          ],
          "created": true,
          "charges": false
        },
        "ring_of_aquila": {
          "passive": [
            {
              "name": "Aquila Aura",
              "desc": "Grants 1.25 mana regeneration and 2 armor to nearby allies.\n\nRadius: 1200"
            }
          ],
          "toggle": [
            {
              "name": "Aura",
              "desc": "Deactivate to stop affecting non-hero units."
            }
          ],
          "id": 212,
          "img": "/apps/dota2/images/items/ring_of_aquila_lg.png?t=1580114426351",
          "dname": "Ring of Aquila",
          "qual": "rare",
          "cost": 0,
          "notes": "Does not stack with armor auras from Ring of Basilius or Ring of Aquila.\nMultiple instances of Aquila Aura do not stack.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "7",
              "footer": "Damage"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "3",
              "footer": "Strength"
            },
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "9",
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "3",
              "footer": "Intelligence"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "The ring of the fallen Warlord Aquila continues to support armies in battle.",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "tranquil_boots": {
          "passive": [
            {
              "name": "Break",
              "desc": "Whenever you attack a hero or are attacked by any unit, the bonus 16 HP regen is lost and the movement speed bonus is reduced to 18% for 13 seconds."
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 214,
          "img": "/apps/dota2/images/items/tranquil_boots_lg.png?t=1580114426351",
          "dname": "Tranquil Boots",
          "qual": "rare",
          "cost": 1000,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "26%",
              "footer": "Movement Speed"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "16",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": 13,
          "lore": "While they increase the longevity of the wearer, this boot is not particularly reliable.",
          "components": [
            "boots",
            "wind_lace",
            "ring_of_regen"
          ],
          "created": true,
          "charges": false
        },
        "shadow_amulet": {
          "active": [
            {
              "name": "Fade",
              "desc": "Grants invisibility to you or a target allied hero as long as the target unit remains still.  \n\nHas a 1.25 second fade time, and breaks instantly upon moving. \n\nThere is no cooldown when using this item on yourself.\n\nRange: 600"
            }
          ],
          "id": 215,
          "img": "/apps/dota2/images/items/shadow_amulet_lg.png?t=1580114426351",
          "dname": "Shadow Amulet",
          "cost": 1400,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "20",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": 7,
          "lore": "A small talisman that clouds the senses of one's enemies when held perfectly still.",
          "components": null,
          "created": false,
          "charges": false
        },
        "glimmer_cape": {
          "active": [
            {
              "name": "Glimmer",
              "desc": "After a 0.6 second delay, grants invisibility and 45% magic resistance to you or a target allied unit for 5 seconds.\n\nRange: 800\n\nCan be cast while channelling."
            }
          ],
          "id": 254,
          "img": "/apps/dota2/images/items/glimmer_cape_lg.png?t=1580114426351",
          "dname": "Glimmer Cape",
          "qual": "rare",
          "cost": 1950,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "20",
              "footer": "Attack Speed"
            },
            {
              "key": "bonus_magical_armor",
              "header": "+",
              "value": "15%",
              "footer": "Magic Resistance"
            }
          ],
          "mc": 90,
          "cd": 14,
          "lore": "The stolen cape of a master illusionist.",
          "components": [
            "shadow_amulet",
            "cloak"
          ],
          "created": true,
          "charges": false
        },
        "river_painter": {
          "hint": [
            "Pour this serum into the river to transform the water into liquid chrome for 900 seconds. <font color='#FF5555'>Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration.</font> Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
          ],
          "id": 1021,
          "img": "/apps/dota2/images/items/river_painter_lg.png?t=1580114426351",
          "dname": "River Vial: Chrome",
          "qual": "component",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "river_painter2": {
          "hint": [
            "Pour this serum into the river to dry up the water for 900 seconds. <font color='#FF5555'>Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect . Charges do not get consumed if the effect is replaced by a stronger vial before expiration.</font> Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
          ],
          "id": 1022,
          "img": "/apps/dota2/images/items/river_painter2_lg.png?t=1580114426351",
          "dname": "River Vial: Dry",
          "qual": "component",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "river_painter3": {
          "hint": [
            "Pour this serum into the river to transform the water into a green slime for 900 seconds. <font color='#FF5555'>Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration.</font> Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
          ],
          "id": 1023,
          "img": "/apps/dota2/images/items/river_painter3_lg.png?t=1580114426351",
          "dname": "River Vial: Slime",
          "qual": "component",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "river_painter4": {
          "hint": [
            "Pour this serum into the river to make the water oily for 900 seconds. <font color='#FF5555'>Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration.</font> Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
          ],
          "id": 1024,
          "img": "/apps/dota2/images/items/river_painter4_lg.png?t=1580114426351",
          "dname": "River Vial: Oil",
          "qual": "component",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "river_painter5": {
          "hint": [
            "Pour this serum into the river to make the water electric for 900 seconds. <font color='#FF5555'>Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration.</font> Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
          ],
          "id": 1025,
          "img": "/apps/dota2/images/items/river_painter5_lg.png?t=1580114426351",
          "dname": "River Vial: Electrified",
          "qual": "component",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "river_painter6": {
          "hint": [
            "Pour this serum into the river to transform the water into a purple bubbling potion for 900 seconds. <font color='#FF5555'>Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration.</font> Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
          ],
          "id": 1026,
          "img": "/apps/dota2/images/items/river_painter6_lg.png?t=1580114426351",
          "dname": "River Vial: Potion",
          "qual": "component",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "river_painter7": {
          "hint": [
            "Pour this serum into the river to transform the water into blood for 900 seconds. <font color='#FF5555'>Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration.</font> Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect."
          ],
          "id": 1027,
          "img": "/apps/dota2/images/items/river_painter7_lg.png?t=1580114426351",
          "dname": "River Vial: Blood",
          "qual": "component",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "mutation_tombstone": {
          "id": 1028,
          "img": "/apps/dota2/images/items/mutation_tombstone_lg.png?t=1580114426351",
          "dname": "Tombstone",
          "qual": "consumable",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 1
        },
        "super_blink": {
          "active": [
            {
              "name": "Blink",
              "desc": "Teleport to a target point up to 1200 units away."
            }
          ],
          "id": 1029,
          "img": "/apps/dota2/images/items/super_blink_lg.png?t=1580114426351",
          "dname": "Super Blink Dagger",
          "cost": null,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 15,
          "lore": "The fabled dagger used by the fastest assassin ever to walk the lands.",
          "components": null,
          "created": false,
          "charges": false
        },
        "pocket_tower": {
          "id": 1030,
          "img": "/apps/dota2/images/items/pocket_tower_lg.png?t=1580114426351",
          "dname": "Pocket Tower",
          "cost": null,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 15,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "pocket_roshan": {
          "id": 1032,
          "img": "/apps/dota2/images/items/pocket_roshan_lg.png?t=1580114426351",
          "dname": "Pocket Roshan",
          "qual": "rare",
          "cost": 1000,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 60,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "keen_optic": {
          "id": 287,
          "img": "/apps/dota2/images/items/keen_optic_lg.png?t=1580114426351",
          "dname": "Keen Optic",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "cast_range_bonus",
              "header": "+",
              "value": "75",
              "footer": "Cast Range"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "1.25",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 1
        },
        "grove_bow": {
          "passive": [
            {
              "name": "Magic Amp",
              "desc": "Reduces magic resistance of the attacked enemy by 12%."
            }
          ],
          "id": 288,
          "img": "/apps/dota2/images/items/grove_bow_lg.png?t=1580114426351",
          "dname": "Grove Bow",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "attack_range_bonus",
              "header": "+",
              "value": "100",
              "footer": "Attack Range (Ranged Only)"
            },
            {
              "key": "attack_speed_bonus",
              "header": "+",
              "value": "10",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "quickening_charm": {
          "passive": [
            {
              "name": "Cooldown Reduction",
              "desc": "Reduces the cooldown time of all spells and items by 13%"
            }
          ],
          "id": 289,
          "img": "/apps/dota2/images/items/quickening_charm_lg.png?t=1580114426351",
          "dname": "Quickening Charm",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "9",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "philosophers_stone": {
          "hint": [
            "Increases gold income and mana, while reducing outgoing attack damage."
          ],
          "id": 290,
          "img": "/apps/dota2/images/items/philosophers_stone_lg.png?t=1580114426351",
          "dname": "Philosopher's Stone",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_gpm",
              "header": "+GPM BONUS",
              "value": "60"
            },
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "200",
              "footer": "Mana"
            },
            {
              "key": "bonus_damage",
              "header": "-Attack Damage",
              "value": "-35"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "force_boots": {
          "active": [
            {
              "name": "Force",
              "desc": "Dispels the user and pushes them 600 units in the direction they are facing."
            }
          ],
          "passive": [
            {
              "name": "Speed Unlock",
              "desc": "Completely removes the speed limit for the wearer "
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 291,
          "img": "/apps/dota2/images/items/force_boots_lg.png?t=1580114426351",
          "dname": "Force Boots",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "40%",
              "footer": "Movement Speed"
            }
          ],
          "mc": 75,
          "cd": 9,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "desolator_2": {
          "passive": [
            {
              "name": "Greater Corruption",
              "desc": "Your attacks reduce the target's armor by -10 for 7 seconds."
            }
          ],
          "id": 292,
          "img": "/apps/dota2/images/items/desolator_2_lg.png?t=1580114426351",
          "dname": "Stygian Desolator",
          "cost": 0,
          "notes": "Armor reduction works on buildings.",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "75",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "phoenix_ash": {
          "passive": [
            {
              "name": "Rebirth",
              "desc": "Lethal damage is prevented and instead the wearer is healed to half health and non-ultimate ability cooldowns reset. Gets consumed on trigger."
            }
          ],
          "id": 293,
          "img": "/apps/dota2/images/items/phoenix_ash_lg.png?t=1580114426351",
          "dname": "Phoenix Ash",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 1
        },
        "seer_stone": {
          "hint": [
            "Increases cast range as well as daytime and night time vision."
          ],
          "id": 294,
          "img": "/apps/dota2/images/items/seer_stone_lg.png?t=1580114426351",
          "dname": "Seer Stone",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "cast_range_bonus",
              "header": "+",
              "value": "350",
              "footer": "Cast Range"
            },
            {
              "key": "vision_bonus",
              "header": "+Vision Bonus",
              "value": "350"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "greater_mango": {
          "id": 295,
          "img": "/apps/dota2/images/items/greater_mango_lg.png?t=1580114426351",
          "dname": "Greater Mango",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "elixer": {
          "use": [
            {
              "name": "Consume",
              "desc": "Restores 500 health and 250 mana to the target over 6 seconds.\n\nIf the unit is attacked by an enemy hero or Roshan, the effect is lost.\n\nRange: 250"
            }
          ],
          "id": 302,
          "img": "/apps/dota2/images/items/elixer_lg.png?t=1580114426351",
          "dname": "Elixir",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 3
        },
        "vampire_fangs": {
          "id": 297,
          "img": "/apps/dota2/images/items/vampire_fangs_lg.png?t=1580114426351",
          "dname": "Vampire Fangs",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "attack_lifesteal",
              "header": "+Lifesteal",
              "value": "15%"
            },
            {
              "key": "spell_lifesteal",
              "header": "+Spell Lifesteal",
              "value": "6%"
            },
            {
              "key": "night_vision",
              "header": "+Night Vision",
              "value": "250"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "craggy_coat": {
          "hint": [
            "Increases the wearer's armor, while reducing their attack speed."
          ],
          "id": 298,
          "img": "/apps/dota2/images/items/craggy_coat_lg.png?t=1580114426351",
          "dname": "Craggy Coat",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "armor_bonus",
              "header": "+ARMOR",
              "value": "12"
            },
            {
              "key": "attack_speed",
              "header": "-Attack Speed",
              "value": "-35"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "greater_faerie_fire": {
          "use": [
            {
              "name": "Imbue",
              "desc": "Instantly restores 450 health."
            }
          ],
          "id": 299,
          "img": "/apps/dota2/images/items/greater_faerie_fire_lg.png?t=1580114426351",
          "dname": "Greater Faerie Fire",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "35",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": 10,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 3,
          "tier": 3
        },
        "timeless_relic": {
          "hint": [
            "Increases all outgoing spell damage and debuff duration."
          ],
          "id": 300,
          "img": "/apps/dota2/images/items/timeless_relic_lg.png?t=1580114426351",
          "dname": "Timeless Relic",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "debuff_amp",
              "header": "+Debuff Duration",
              "value": "25%"
            },
            {
              "key": "spell_amp",
              "header": "+",
              "value": "15%",
              "footer": "Spell Damage"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "mirror_shield": {
          "passive": [
            {
              "name": "Echo Shield",
              "desc": "Block and reflect most targeted spells back to their caster once every 8 seconds."
            }
          ],
          "id": 301,
          "img": "/apps/dota2/images/items/mirror_shield_lg.png?t=1580114426351",
          "dname": "Mirror Shield",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "all_stats",
              "header": "+",
              "value": "20",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "recipe_ironwood_tree": {
          "id": 303,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Ironwood Tree Recipe",
          "cost": 1,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "ironwood_tree": {
          "use": [
            {
              "name": "Plant Tree",
              "desc": "Targets the ground to plant a happy little tree that lasts for 20 seconds.\n\nRange: 800"
            }
          ],
          "id": 304,
          "img": "/apps/dota2/images/items/ironwood_tree_lg.png?t=1580114426351",
          "dname": "Ironwood Tree",
          "cost": 151,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "6",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": 4,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 1
        },
        "mango_tree": {
          "use": [
            {
              "name": "Plant a Mango Tree",
              "desc": "Targets the ground to plant a mango tree that provides unlimited mango power. The tree generates Enchanted Mangoes every 60 seconds, and provides unobstructed vision in the area \n\nRange: 200"
            }
          ],
          "id": 328,
          "img": "/apps/dota2/images/items/mango_tree_lg.png?t=1580114426351",
          "dname": "Mango Tree",
          "cost": null,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 1,
          "tier": 1
        },
        "royal_jelly": {
          "use": [
            {
              "name": "Consume",
              "desc": "Grants a target allied unit a permanent buff that provides +2.5 Health Regen and +1.25 Mana Regen.\n\nDoes not stack on the same unit."
            }
          ],
          "id": 305,
          "img": "/apps/dota2/images/items/royal_jelly_lg.png?t=1580114426351",
          "dname": "Royal Jelly",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 2,
          "tier": 1
        },
        "pupils_gift": {
          "hint": [
            "Increases both non-primary attributes."
          ],
          "id": 306,
          "img": "/apps/dota2/images/items/pupils_gift_lg.png?t=1580114426351",
          "dname": "Pupil's Gift",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "secondary_stats",
              "header": "+SECONDARY STATS",
              "value": "13"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "tome_of_aghanim": {
          "use": [
            {
              "name": "Consume",
              "desc": "Temporarily grants an allied target the Aghanim's Scepter buff for 3 minutes."
            }
          ],
          "id": 307,
          "img": "/apps/dota2/images/items/tome_of_aghanim_lg.png?t=1580114426351",
          "dname": "Tome of Aghanim",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 1
        },
        "repair_kit": {
          "use": [
            {
              "name": "Building Repair",
              "desc": "Targets a building, restoring 40% of it's health over 30 seconds. Also grants +10 armor during this period.\n\n Range: 600"
            }
          ],
          "id": 308,
          "img": "/apps/dota2/images/items/repair_kit_lg.png?t=1580114426351",
          "dname": "Repair Kit",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "hp_regen",
              "header": "+",
              "value": "17",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 3,
          "tier": 3
        },
        "mind_breaker": {
          "passive": [
            {
              "name": "Silence Strike",
              "desc": "The next attack silences the hit enemy for 1.5 seconds."
            }
          ],
          "id": 309,
          "img": "/apps/dota2/images/items/mind_breaker_lg.png?t=1580114426351",
          "dname": "Mind Breaker",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "magic_damage",
              "header": "MAGIC ATTACK BONUS DAMAGE:",
              "value": "25"
            },
            {
              "key": "attack_speed",
              "header": "ATTACK SPEED:",
              "value": "25"
            }
          ],
          "mc": false,
          "cd": 20,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "third_eye": {
          "passive": [
            {
              "name": "True Sight",
              "desc": "Grants the ability to see invisible units and wards to any allied vision within 500 range of its carrier. "
            },
            {
              "name": "Charge Loss",
              "desc": "Loses a charge on death. After all charges are lost, the item disappears."
            }
          ],
          "id": 310,
          "img": "/apps/dota2/images/items/third_eye_lg.png?t=1580114426351",
          "dname": "Third Eye",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_vision",
              "header": "+BONUS VISION",
              "value": "300"
            },
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "7",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 3
        },
        "spell_prism": {
          "passive": [
            {
              "name": "Cooldown Reduction",
              "desc": "Reduces the cooldown time of all spells and items by 20%."
            }
          ],
          "id": 311,
          "img": "/apps/dota2/images/items/spell_prism_lg.png?t=1580114426351",
          "dname": "Spell Prism",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_all_stats",
              "header": "+",
              "value": "12",
              "footer": "All Attributes"
            },
            {
              "key": "mana_regen",
              "header": "+",
              "value": "4",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "princes_knife": {
          "passive": [
            {
              "name": "Hex Strike",
              "desc": "The next attack hexes the hit enemy into a frog for 1.5 seconds."
            }
          ],
          "id": 325,
          "img": "/apps/dota2/images/items/princes_knife_lg.png?t=1580114426351",
          "dname": "Prince's Knife",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "projectile_bonus",
              "header": "+Attack Projectile Speed",
              "value": "60%"
            }
          ],
          "mc": false,
          "cd": 12,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "witless_shako": {
          "hint": [
            "Increases the wearer's max health, while reducing their max mana."
          ],
          "id": 330,
          "img": "/apps/dota2/images/items/witless_shako_lg.png?t=1580114426351",
          "dname": "Witless Shako",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "max_health",
              "header": "+Max Health Increase",
              "value": "1000"
            },
            {
              "key": "max_mana",
              "header": "-Max Mana",
              "value": "400"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "imp_claw": {
          "passive": [
            {
              "name": "Critical Strike",
              "desc": "Empowers your next attack, causing it to be a critical strike dealing 130% damage."
            }
          ],
          "id": 334,
          "img": "/apps/dota2/images/items/imp_claw_lg.png?t=1580114426351",
          "dname": "Imp Claw",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "24",
              "footer": "Damage"
            }
          ],
          "mc": false,
          "cd": 8,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "flicker": {
          "active": [
            {
              "name": "Flicker",
              "desc": "Dispells debuffs and blinks you to a random spot within 600 range. Does not get disabled on incoming damage."
            }
          ],
          "id": 335,
          "img": "/apps/dota2/images/items/flicker_lg.png?t=1580114426351",
          "dname": "Flicker",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "40",
              "footer": "Movement Speed"
            }
          ],
          "mc": 25,
          "cd": 5,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "spy_gadget": {
          "passive": [
            {
              "name": "Prescient Aura",
              "desc": "Lowers Scan cooldown by 50% . Increases attack and cast range of allies in a 1200 unit radius."
            }
          ],
          "id": 336,
          "img": "/apps/dota2/images/items/spy_gadget_lg.png?t=1580114426351",
          "dname": "Telescope",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "scan_cooldown_reduction",
              "header": "SCAN COOLDOWN REDUCTION:",
              "value": "50%"
            },
            {
              "key": "attack_range",
              "header": "AURA BONUS ATTACK RANGE:",
              "value": "125"
            },
            {
              "key": "cast_range",
              "header": "AURA BONUS CAST RANGE:",
              "value": "125"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "spider_legs": {
          "active": [
            {
              "name": "Scurry",
              "desc": "Grants you 24% bonus movement speed and free pathing for 3 seconds. Walking over trees causes them to be destroyed."
            }
          ],
          "hint": [
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "id": 326,
          "img": "/apps/dota2/images/items/spider_legs_lg.png?t=1580114426351",
          "dname": "Spider Legs",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "24%",
              "footer": "Movement Speed"
            },
            {
              "key": "turn_rate",
              "header": "+Turn Rate",
              "value": "30%"
            }
          ],
          "mc": false,
          "cd": 10,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "helm_of_the_undying": {
          "passive": [
            {
              "name": "Death Delay",
              "desc": "Survive for an extra 5 seconds after receiving a killing blow."
            }
          ],
          "id": 327,
          "img": "/apps/dota2/images/items/helm_of_the_undying_lg.png?t=1580114426351",
          "dname": "Helm of the Undying",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "6",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "vambrace": {
          "hint": [
            "Also provides one of the following, based on the Vambrace's main attribute:",
            " <font color='#ec3d06'>Strength:</font> +10% Magic Resistance ",
            " <font color='#3ed038'>Agility:</font> +10 Attack Speed ",
            " <font color='#00d9ec'>Intelligence:</font> +6% Spell Amp"
          ],
          "id": 331,
          "img": "/apps/dota2/images/items/vambrace_lg.png?t=1580114426351",
          "dname": "Vambrace",
          "qual": "common",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_primary_stat",
              "header": "+Main Vambrace Attribute",
              "value": "10"
            },
            {
              "key": "bonus_secondary_stat",
              "header": "+Other Attributes",
              "value": "5"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "horizon": {
          "active": [
            {
              "name": "Blink Strike",
              "desc": "Targets a unit to teleport to them. Knocks enemies back 250 distance and disables them for 1 second. \n\nRange: 1600"
            }
          ],
          "id": 312,
          "img": "/apps/dota2/images/items/horizon_lg.png?t=1580114426351",
          "dname": "Horizon",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 10,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "fusion_rune": {
          "use": [
            {
              "name": "Consume",
              "desc": "Grants the target the bonuses of every Power Rune for 50 seconds. Each use consumes a charge."
            }
          ],
          "id": 313,
          "img": "/apps/dota2/images/items/fusion_rune_lg.png?t=1580114426351",
          "dname": "Fusion Rune",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 120,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 3
        },
        "ocean_heart": {
          "passive": [
            {
              "name": "Water Regen",
              "desc": "Provides you with 8 HP regen and 4 mana regen while in the river."
            }
          ],
          "id": 354,
          "img": "/apps/dota2/images/items/ocean_heart_lg.png?t=1580114426351",
          "dname": "Ocean Heart",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "all_stats",
              "header": "+",
              "value": "5",
              "footer": "All Attributes"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 1
        },
        "broom_handle": {
          "id": 355,
          "img": "/apps/dota2/images/items/broom_handle_lg.png?t=1580114426351",
          "dname": "Broom Handle",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "melee_attack_range",
              "header": "+",
              "value": "35",
              "footer": "Attack Range <font color='#7d7d7d'>(Melee Only)</font>"
            },
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "12",
              "footer": "Damage"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "3",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 1
        },
        "trusty_shovel": {
          "active": [
            {
              "name": "Dig",
              "desc": "Channel for %abilitychanneltime% second. \nCan find a Bounty Rune, a Flask, a 2 charged TP Scroll bundle, or an enemy Kobold."
            }
          ],
          "id": 356,
          "img": "/apps/dota2/images/items/trusty_shovel_lg.png?t=1580114426351",
          "dname": "Trusty Shovel",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "100",
              "footer": "Health"
            }
          ],
          "mc": false,
          "cd": 55,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 1
        },
        "nether_shawl": {
          "hint": [
            "Increases the wearer's magic resistance and magic damage, while decreasing their armor."
          ],
          "id": 357,
          "img": "/apps/dota2/images/items/nether_shawl_lg.png?t=1580114426351",
          "dname": "Nether Shawl",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_magic_resistance",
              "header": "+",
              "value": "20%",
              "footer": "Magic Resistance"
            },
            {
              "key": "bonus_spell_amp",
              "header": "+",
              "value": "8%",
              "footer": "Spell Damage"
            },
            {
              "key": "bonus_armor",
              "header": "-Armor",
              "value": "3"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "dragon_scale": {
          "passive": [
            {
              "name": "Afterburn",
              "desc": "Causes attacks to burn the enemy, dealing 18 damage per second for 3 seconds. Affects buildings."
            }
          ],
          "id": 358,
          "img": "/apps/dota2/images/items/dragon_scale_lg.png?t=1580114426351",
          "dname": "Dragon Scale",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "5",
              "footer": "Armor"
            },
            {
              "key": "bonus_hp_regen",
              "header": "+",
              "value": "5",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "essence_ring": {
          "active": [
            {
              "name": "Life Essence",
              "desc": "Increases your current and max health by 425 for 15 seconds."
            }
          ],
          "id": 359,
          "img": "/apps/dota2/images/items/essence_ring_lg.png?t=1580114426351",
          "dname": "Essence Ring",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_int",
              "header": "+",
              "value": "6",
              "footer": "Intelligence"
            },
            {
              "key": "mp_regen",
              "header": "+",
              "value": "2.5",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": 200,
          "cd": 20,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "clumsy_net": {
          "active": [
            {
              "name": "Ensnare",
              "desc": "Ensnares the target enemy and yourself for 1.75 seconds.\n\n Range: 650"
            }
          ],
          "id": 360,
          "img": "/apps/dota2/images/items/clumsy_net_lg.png?t=1580114426351",
          "dname": "Clumsy Net",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "all_stats",
              "header": "+",
              "value": "6",
              "footer": "All Attributes"
            },
            {
              "key": "mana_regen",
              "header": "+",
              "value": "2",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": 25,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 2
        },
        "enchanted_quiver": {
          "passive": [
            {
              "name": "Certain Strike",
              "desc": "Empowers your next attack with 300 bonus magical damage and True Strike. Ranged Attackers have +400 bonus range for the attack."
            }
          ],
          "id": 361,
          "img": "/apps/dota2/images/items/enchanted_quiver_lg.png?t=1580114426351",
          "dname": "Enchanted Quiver",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 8,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "ninja_gear": {
          "active": [
            {
              "name": "Solitary Disguise",
              "desc": "Casts Smoke of Deceit on yourself only."
            }
          ],
          "id": 362,
          "img": "/apps/dota2/images/items/ninja_gear_lg.png?t=1580114426351",
          "dname": "Ninja Gear",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "+",
              "value": "20",
              "footer": "Agility"
            },
            {
              "key": "passive_movement_bonus",
              "header": "+",
              "value": "30",
              "footer": "Movement Speed"
            }
          ],
          "mc": false,
          "cd": 45,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "illusionsts_cape": {
          "active": [
            {
              "name": "Create Illusion",
              "desc": "Creates an image under your control. "
            }
          ],
          "passive": [
            {
              "name": "Illusion Mastery",
              "desc": "Increases outgoing damage of all units and illusions controlled by the hero by 10%."
            }
          ],
          "id": 363,
          "img": "/apps/dota2/images/items/illusionsts_cape_lg.png?t=1580114426351",
          "dname": "Illusionist's Cape",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "illusion_duration",
              "header": "IMAGE DURATION:",
              "value": "30"
            },
            {
              "key": "outgoing_damage_tooltip",
              "header": "IMAGE DAMAGE:",
              "value": "50%"
            },
            {
              "key": "tooltip_incoming_damage_total_pct",
              "header": "IMAGE DAMAGE TAKEN:",
              "value": "150%"
            },
            {
              "key": "bonus_agi",
              "header": "+",
              "value": "14",
              "footer": "Agility"
            },
            {
              "key": "bonus_str",
              "header": "+",
              "value": "14",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": 30,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "havoc_hammer": {
          "active": [
            {
              "name": "Havoc",
              "desc": "Knocks back enemies in 300 range around you, slowing them by 50% for 3 seconds and dealing 225 + 1x your str as magical damage."
            }
          ],
          "id": 364,
          "img": "/apps/dota2/images/items/havoc_hammer_lg.png?t=1580114426351",
          "dname": "Havoc Hammer",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "30",
              "footer": "Damage"
            },
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "18",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": 10,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "panic_button": {
          "passive": [
            {
              "name": "Rejuvenate ",
              "desc": "When the wearer's health falls below 20%, they will receive a hard dispel and be healed for 300 health."
            }
          ],
          "id": 365,
          "img": "/apps/dota2/images/items/panic_button_lg.png?t=1580114426351",
          "dname": "Magic Lamp",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_health",
              "header": "+",
              "value": "400",
              "footer": "Health"
            }
          ],
          "mc": false,
          "cd": 75,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "apex": {
          "hint": [
            "Increases your primary attribute by 75."
          ],
          "id": 366,
          "img": "/apps/dota2/images/items/apex_lg.png?t=1580114426351",
          "dname": "Apex",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "ballista": {
          "passive": [
            {
              "name": "Knockback",
              "desc": "Knocks back enemies 50 distance and deals 30 pure damage with every attack."
            }
          ],
          "id": 367,
          "img": "/apps/dota2/images/items/ballista_lg.png?t=1580114426351",
          "dname": "Ballista",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "attack_range_bonus",
              "header": "+",
              "value": "250",
              "footer": "Attack Range (Ranged Only)"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "woodland_striders": {
          "hint": [
            "",
            " ",
            "Movement speed bonuses from multiple pairs of boots do not stack."
          ],
          "active": [
            {
              "name": "Woodland Stride",
              "desc": "Create a path of trees behind you for 3 seconds. Trees last up to 15 seconds. "
            }
          ],
          "passive": [
            {
              "name": "Tree Walking",
              "desc": "Removes movement speed limit and allows free pathing through trees."
            }
          ],
          "id": 368,
          "img": "/apps/dota2/images/items/woodland_striders_lg.png?t=1580114426351",
          "dname": "Woodland Striders",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "50%",
              "footer": "Movement Speed"
            },
            {
              "key": "bonus_hp_regen",
              "header": "+",
              "value": "50",
              "footer": "HP Regeneration"
            }
          ],
          "mc": false,
          "cd": 20,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "recipe_trident": {
          "id": 275,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Trident Recipe",
          "cost": 1,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "demonicon": {
          "active": [
            {
              "name": "Greater Demonic Summoning",
              "desc": "Summon 2 sets of Level 3 Necronomicon Units that last 75 seconds. Units have 50% more health and damage."
            }
          ],
          "id": 370,
          "img": "/apps/dota2/images/items/demonicon_lg.png?t=1580114426351",
          "dname": "Book of the Dead",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "30",
              "footer": "Strength"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "30",
              "footer": "Intelligence"
            }
          ],
          "mc": false,
          "cd": 90,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "recipe_fallen_sky": {
          "id": 317,
          "img": "/apps/dota2/images/items/recipe_lg.png?t=1580114426351",
          "dname": "Recipe: Fallen Sky",
          "cost": 1,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false
        },
        "fallen_sky": {
          "active": [
            {
              "name": "Fallen Sky",
              "desc": "Transform into a meteor that strikes down at the target area after 0.5 seconds in a 315 AoE, stunning enemies for 2 seconds and dealing impact damage. Continues to deal damage every 1 seconds to enemy units and buildings for 6 seconds.\n\nBuilding Impact Damage: 75 \nBuilding Over Time Damage: 50 \n\nNon-Building Impact Damage: 150 \nNon-Building Over Time Damage: 90\n\n Range: 1600"
            }
          ],
          "id": 371,
          "img": "/apps/dota2/images/items/fallen_sky_lg.png?t=1580114426351",
          "dname": "Fallen Sky",
          "cost": 4751,
          "notes": "Does not get disabled by incoming damage.",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "20",
              "footer": "Strength"
            },
            {
              "key": "bonus_intellect",
              "header": "+",
              "value": "20",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_health_regen",
              "header": "+",
              "value": "15",
              "footer": "HP Regeneration"
            },
            {
              "key": "bonus_mana_regen",
              "header": "+",
              "value": "10",
              "footer": "Mana Regeneration"
            }
          ],
          "mc": false,
          "cd": 15,
          "lore": "",
          "components": [
            "blink",
            "meteor_hammer",
            ""
          ],
          "created": true,
          "charges": false,
          "tier": 5
        },
        "pirate_hat": {
          "passive": [
            {
              "name": "Kill Bounty",
              "desc": "Steals 300 gold when you kill an enemy hero."
            }
          ],
          "id": 372,
          "img": "/apps/dota2/images/items/pirate_hat_lg.png?t=1580114426351",
          "dname": "Pirate Hat",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "150",
              "footer": "Attack Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "dimensional_doorway": {
          "id": 373,
          "img": "/apps/dota2/images/items/dimensional_doorway_lg.png?t=1580114426351",
          "dname": "Dimensional Doorway",
          "cost": 0,
          "notes": "",
          "attrib": [],
          "mc": false,
          "cd": 90,
          "lore": "",
          "components": null,
          "created": false,
          "charges": 3
        },
        "ex_machina": {
          "active": [
            {
              "name": "Reset Item Cooldowns",
              "desc": "Reset the cooldown on all items (except Refresher Orb)."
            }
          ],
          "id": 374,
          "img": "/apps/dota2/images/items/ex_machina_lg.png?t=1580114426351",
          "dname": "Ex Machina",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "20",
              "footer": "Armor"
            }
          ],
          "mc": 100,
          "cd": 45,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 5
        },
        "faded_broach": {
          "id": 375,
          "img": "/apps/dota2/images/items/faded_broach_lg.png?t=1580114426351",
          "dname": "Faded Broach",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_mana",
              "header": "+",
              "value": "225",
              "footer": "Mana"
            },
            {
              "key": "bonus_movement_speed",
              "header": "+",
              "value": "25",
              "footer": "Movement Speed"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 1
        },
        "paladin_sword": {
          "passive": [
            {
              "name": "Greater Healing",
              "desc": "Amplifies the wearer's Regeneration, Healing and Lifesteal by 17%."
            }
          ],
          "id": 376,
          "img": "/apps/dota2/images/items/paladin_sword_lg.png?t=1580114426351",
          "dname": "Paladin Sword",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_damage",
              "header": "+",
              "value": "17",
              "footer": "Damage"
            },
            {
              "key": "bonus_lifesteal",
              "header": "+Lifesteal",
              "value": "17%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "minotaur_horn": {
          "active": [
            {
              "name": "Lesser Avatar",
              "desc": "Grants Spell Immunity for 1.75 seconds."
            }
          ],
          "id": 377,
          "img": "/apps/dota2/images/items/minotaur_horn_lg.png?t=1580114426351",
          "dname": "Minotaur Horn",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_strength",
              "header": "+",
              "value": "20",
              "footer": "Strength"
            }
          ],
          "mc": false,
          "cd": 40,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "orb_of_destruction": {
          "passive": [
            {
              "name": "Impeding Corruption",
              "desc": "Attacks reduce the target's armor and movement speed. Slow amount varies based on whether the wearer is melee or ranged."
            }
          ],
          "id": 378,
          "img": "/apps/dota2/images/items/orb_of_destruction_lg.png?t=1580114426351",
          "dname": "Orb of Destruction",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "armor_reduction",
              "header": "ARMOR REDUCTION:",
              "value": "5"
            },
            {
              "key": "slow_melee",
              "header": "SLOW (MELEE):",
              "value": "20%"
            },
            {
              "key": "slow_range",
              "header": "SLOW (RANGE):",
              "value": "10%"
            },
            {
              "key": "duration",
              "header": "DURATION:",
              "value": "4"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "the_leveller": {
          "id": 379,
          "img": "/apps/dota2/images/items/the_leveller_lg.png?t=1580114426351",
          "dname": "The Leveller",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_attack_speed",
              "header": "+",
              "value": "50",
              "footer": "Attack Speed"
            },
            {
              "key": "demolish",
              "header": "BONUS BUILDING DAMAGE:",
              "value": "25%"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 4
        },
        "arcane_ring": {
          "active": [
            {
              "name": "Replenish Mana",
              "desc": "Restores 75 mana to all nearby allies. \n\n Radius: 1200"
            }
          ],
          "id": 349,
          "img": "/apps/dota2/images/items/arcane_ring_lg.png?t=1580114426351",
          "dname": "Arcane Ring",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "bonus_intelligence",
              "header": "+",
              "value": "10",
              "footer": "Intelligence"
            },
            {
              "key": "bonus_armor",
              "header": "+",
              "value": "3",
              "footer": "Armor"
            }
          ],
          "mc": false,
          "cd": 40,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 1
        },
        "titan_sliver": {
          "hint": [
            "Increases the wearer's attack damage, magic and status resistance."
          ],
          "id": 381,
          "img": "/apps/dota2/images/items/titan_sliver_lg.png?t=1580114426351",
          "dname": "Titan Sliver",
          "cost": 0,
          "notes": "",
          "attrib": [
            {
              "key": "base_attack_damage",
              "header": "+Base Attack Damage",
              "value": "16%"
            },
            {
              "key": "magic_resistance",
              "header": "+",
              "value": "16%",
              "footer": "Magic Resistance"
            },
            {
              "key": "status_resistance",
              "header": "+",
              "value": "16%",
              "footer": "Status Resistance"
            }
          ],
          "mc": false,
          "cd": false,
          "lore": "",
          "components": null,
          "created": false,
          "charges": false,
          "tier": 3
        },
        "diffusal_blade_2": {
          "id": 196,
          "img": "/apps/dota2/images/items/diffusal_blade_2_lg.png?3",
          "dname": "Diffusal Blade",
          "qual": "artifact",
          "cost": 3850,
          "desc": "Active: Purge Targets an enemy, removing buffs from the target and slowing it for 4 seconds.Range: 600\nPassive: ManabreakEach attack burns 50 mana from the target, and deals 0.8 physical damage per burned mana. Burns 16 mana per attack from melee illusions and 8 mana per attack from ranged illusions. Dispel Type: Basic Dispel",
          "notes": "Does not stack with other manabreak abilities.",
          "attrib": [
            {
              "key": "bonus_agility",
              "header": "",
              "value": [
                "25",
                "35"
              ],
              "footer": "Agility"
            },
            {
              "key": "bonus_intellect",
              "header": "",
              "value": [
                "10",
                "15"
              ],
              "footer": "Intelligence"
            },
            {
              "key": "initial_charges",
              "header": "INITIAL CHARGES:",
              "value": "8",
              "generated": true
            },
            {
              "key": "feedback_mana_burn",
              "header": "FEEDBACK MANA BURN:",
              "value": "50",
              "generated": true
            },
            {
              "key": "feedback_mana_burn_illusion_melee",
              "header": "FEEDBACK MANA BURN ILLUSION MELEE:",
              "value": "16",
              "generated": true
            },
            {
              "key": "feedback_mana_burn_illusion_ranged",
              "header": "FEEDBACK MANA BURN ILLUSION RANGED:",
              "value": "8",
              "generated": true
            },
            {
              "key": "purge_summoned_damage",
              "header": "PURGE SUMMONED DAMAGE:",
              "value": "99999",
              "generated": true
            },
            {
              "key": "purge_rate",
              "header": "PURGE RATE:",
              "value": "5",
              "generated": true
            },
            {
              "key": "purge_root_duration",
              "header": "PURGE ROOT DURATION:",
              "value": "3",
              "generated": true
            },
            {
              "key": "purge_slow_duration",
              "header": "PURGE SLOW DURATION:",
              "value": "4",
              "generated": true
            },
            {
              "key": "damage_per_burn",
              "header": "DAMAGE PER BURN:",
              "value": "0.8",
              "generated": true
            },
            {
              "key": "cast_range_tooltip",
              "header": "CAST RANGE TOOLTIP:",
              "value": "600",
              "generated": true
            }
          ],
          "mc": false,
          "cd": 4,
          "lore": "An enchanted blade that allows the user to cut straight into the enemy's soul.",
          "components": [
            "diffusal_blade",
            "recipe_diffusal_blade"
          ],
          "created": true
        }
    },
    game_mode_list:{
      "0": "No Game Mode",
      "1": "All Pick",
      "2": "Captains Mode",
      "3": "Random Draft",
      "4": "Single Draft",
      "5": "All Random",
      "6": "?? INTRO/DEATH ??",
      "7": "Diretide",
      "8": "Reverse Captains Mode",
      "9": "Greeviling",
      "10": "Tutorial",
      "11": "Mid Only",
      "12": "Least Played",
      "13": "Limited Hero",
      "14": "Compendium Matchmaking",
      "15": "Custom",
      "16": "Captains Draft",
      "17": "New Bloom",
      "18": "Ability Draft",
      "19": "Ability Draft",
      "20": "All Random Deathmatch",
      "21": "Solo Mid 1v1",
      "22": "Ranked All Pick"
    },
    teams: null,
    leagues: null,
    allProMatches: null
}

const rootReducer = (state=initState, action) => {
    switch(action.type){
        case GET_TEAMS: 
            return {
                ...state,
                teams: action.payload
            }
        case GET_ALL_PRO_MATCHES: 
            return {
                ...state,
                allProMatches: action.payload
            }
        case GET_LEAGUES: 
            return {
                ...state,
                leagues: action.payload
            }
        case GET_PREMIUM_MATCHES: 
            return {
                ...state,
                premiumMatches: action.payload
            }
        default:
            return state
    }
}

export default rootReducer