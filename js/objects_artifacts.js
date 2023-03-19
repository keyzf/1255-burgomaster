var BONUS_VALUE_TYPES = {
  INTEGER: 'integer',
  PERCENT: 'percent'
};

Object.freeze(BONUS_VALUE_TYPES);

var artefacts = {
    artid00: {
        id: "artid00",
        img: "scroll_01.png",
        name: {
		  "default":"Towngate scroll",
          "en-US":"Towngate scroll",
          "ru-RU":"Свиток телепорта",
        },
        desc: {
		  "default":"This consumable item allows you to teleport to city from an autocampaign",
          "en-US":"This consumable item allows you to teleport to city from an autocampaign",
          "ru-RU":"Этот одноразовый предмет позволяет вам совершить телепорт к городу в автокампании.",
        },
        attr: [],
        change: [],
        priceBuy: 500,
        chance: 1,
        type: "scrolls",
    },
    artid01: {
        id: "artid01",
        name: {
          "default":"Four-Leaf Clover",
          "en-US":"Four-Leaf Clover",
          "ru-RU":"Четырехлистный клевер",
        },
        desc: {
          "default":"This item increases your hero's luck and superstition by 1",
          "en-US":"This item increases your hero's luck and superstition by 1",
          "ru-RU":"Этот предмет увеличивает удачу и суеверность героя на 1",
        },
        attr: ["luck","superstition"],
        change: [1,1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid02: {
        id: "artid02",
        name: {
          "default": "Medal of Valor",
          "en-US": "Medal of Valor",
          "ru-RU": "Медаль отваги",
        },
        desc: {
          "default": "This item increases your hero's moral by 1",
          "en-US": "This item increases your hero's moral by 1",
          "ru-RU": "Этот предмет увеличивает мораль героя на 1",
        },
        attr: ["moral"],
        change: [1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid03: {
        id: "artid03",
        name: {
          "default": "Medal of Courage",
          "en-US": "Medal of Courage",
          "ru-RU": "Медаль храбрости",
        },
        desc: {
          "default": "This item increases your hero's moral by 1",
          "en-US": "This item increases your hero's moral by 1",
          "ru-RU": "Этот предмет увеличивает мораль героя на 1",
        },
        attr: ["moral"],
        change: [1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid04: {
        id: "artid04",
        name: {
          "default": "Medal of Honor",
          "en-US": "Medal of Honor",
          "ru-RU": "Медаль чести",
        },
        desc: {
          "default": "This item increases your hero's moral by 1",
          "en-US": "This item increases your hero's moral by 1",
          "ru-RU": "Этот предмет увеличивает мораль героя на 1",
        },
        attr: ["moral"],
        change: [1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid05: {
        id: "artid05",
        name: {
          "default": "Medal of Distinction",
          "en-US": "Medal of Distinction",
          "ru-RU": "Медаль за отличия",
        },
        desc: {
          "default": "This item increases your hero's moral by 1",
          "en-US": "This item increases your hero's moral by 1",
          "ru-RU": "Этот предмет увеличивает мораль героя на 1",
        },
        attr: ["moral"],
        change: [1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid06: {
        id: "artid06",
        name: {
          "default": "Rabbit's Foot",
          "en-US": "Rabbit's Foot",
          "ru-RU": "Заячья лапка",
        },
        desc: {
          "default": "This item increases your hero's luck and superstition by 1",
          "en-US": "This item increases your hero's luck and superstition by 1",
          "ru-RU": "Этот предмет увеличивает удачу и суеверность героя на 1",
        },
        attr: ["luck","superstition"],
        change: [1,1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid07: {
        id: "artid07",
        name: {
          "default": "Golden Horseshoe",
          "en-US": "Golden Horseshoe",
          "ru-RU": "Золотая подкова",
        },
        desc: {
          "default": "This item increases your hero's luck and superstition by 1",
          "en-US": "This item increases your hero's luck and superstition by 1",
          "ru-RU": "Этот предмет увеличивает удачу и суеверность героя на 1",
        },
        attr: ["luck","superstition"],
        change: [1,1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid08: {
        id: "artid08",
        name: {
          "default": "Gambler's Lucky Coin",
          "en-US": "Gambler's Lucky Coin",
          "ru-RU": "Удачливая монетка игрока",
        },
        desc: {
          "default": "This item increases your hero's luck and superstition by 1",
          "en-US": "This item increases your hero's luck and superstition by 1",
          "ru-RU": "Этот предмет увеличивает удачу и суеверность героя на 1",
        },
        attr: ["luck","superstition"],
        change: [1,1],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid09: {
        id: "artid09",
        name: {
          "default": "Unlucky hourglass",
          "en-US": "Unlucky hourglass",
          "ru-RU": "Песочные часы неудачи",
        },
        desc: {
          "default": "This item reset any luck bonuses for your hero and opponent's troops",
          "en-US": "This item reset any luck bonuses for your hero and opponent's troops",
          "ru-RU": "Этот предмет отменяет все бонусы удачи и суеверности героя и его врага",
        },
        attr: ["luck","superstition"],
        change: [0,0],
        priceBuy: 1500000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid10: {
        id: "artid10",
        name: {
          "default": "Glass globe",
          "en-US": "Glass globe",
          "ru-RU": "Хрустальный шар",
        },
        desc: {
          "default": "This item alows your hero to guess next battle result",
          "en-US": "This item alows your hero to guess next battle result",
          "ru-RU": "Этот предмет позволяет предсказать результат следующей битвы",
        },
        comment: "may be do this as chance item? 70% of chance?",
        attr: [],
        change: [],
        priceBuy: 5000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid11: {
        id: "artid11",
        img: "glyph_01.png",
        name: {
          "default": "Glyph of Knight's Valor",
          "en-US": "Glyph of Knight's Valor",
          "ru-RU": "Глиф Рыцарской Доблести",
        },
        desc: {
          "default": "Increases the hero's attack by +10, increases hero's defence by +6.",
          "en-US": "Increases the hero's attack by +10, increases hero's defence by +6.",
          "ru-RU": "Увеличивает атаку героя на +10, увеличивает защиту героя на +6",
        },
        attr: [
            { name: "atk", type: BONUS_VALUE_TYPES.INTEGER, val: 10 },
            { name: "def", type: BONUS_VALUE_TYPES.INTEGER, val: 6 }
        ],
        change: [],
        priceBuy: 5000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid12: {
        id: "artid12",
        img: "glyph_02.png",
        name: {
          "default": "Glyph of Monk's Virtue",
          "en-US": "Glyph of Monk's Virtue",
          "ru-RU": "Глиф Монашеской Добродетели",
        },
        desc: {
          "default": "Increases the hero's attack by +4, increases hero's defence by +12.",
          "en-US": "Increases the hero's attack by +4, increases hero's defence by +12.",
          "ru-RU": "Увеличивает атаку героя на +4, увеличивает защиту героя на +12",
        },
        attr: [
            { name: "atk", type: BONUS_VALUE_TYPES.INTEGER, val: 4 },
            { name: "def", type: BONUS_VALUE_TYPES.INTEGER, val: 12 }
        ],
        change: [],
        priceBuy: 5000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1,
    },
    artid13: {
        id: "artid13",
        img: "rune_gold.png",
        name: {
          "default": "Rune of Golden Search",
          "en-US": "Rune of Golden Search",
          "ru-RU": "Руна Золотого Поиска",
        },
        desc: {
          "default": "Increases the hero's gold reward after battle by 7%",
          "en-US": "Increases the hero's gold reward after battle by 7%",
          "ru-RU": "Увеличивает награду героя золотом после боя на 7%",
        },
        attr: [{name: "gold", type: BONUS_VALUE_TYPES.PERCENT, val: 1.07}],
        change: [],
        priceBuy: 5000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid14: {
        id: "artid14",
        img: "lifeblood_vial.png",
        name: {
          "default": "Vial of Lifeblood",
          "en-US": "Vial of Lifeblood",
          "ru-RU": "Склянка жизненной силы",
        },
        desc: {
          "default": "Increases the health of all units in the hero's army by +3",
          "en-US": "Increases the health of all units in the hero's army by +3",
          "ru-RU": "Увеличивает показатель здоровья всех юнитов армии героя на +3",
        },
        attr: [{ name: "unit_health", type: BONUS_VALUE_TYPES.INTEGER, val: 3 }],
        change: [],
        priceBuy: 1000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid15: {
        id: "artid15",
        img: "darkpact_sword.png",
        name: {
          "default": "Dark Pact Sword",
          "en-US": "Dark Pact Sword",
          "ru-RU": "Меч Темного Договора",
        },
        desc: {
          "default": "Increases the hero's attack by +15, reduces the health of all units in the hero's army by -35%",
          "en-US": "Increases the hero's attack by +15, reduces the health of all units in the hero's army by -35%",
          "ru-RU": "Увеличивает атаку героя на +15, уменьшает здоровье всех юнитов в армии героя на -35%",
        },
        attr: [
            { name: "atk", type: BONUS_VALUE_TYPES.INTEGER, val: 15 },
            { name: "unit_health", type: BONUS_VALUE_TYPES.PERCENT, val: (1 - 0.35) },
        ],
        change: [],
        priceBuy: 7000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid16: {
        id: "artid16",
        img: "crusaders_sword.png",
        name: {
          "default": "Crusader's Sword",
          "en-US": "Crusader's Sword",
          "ru-RU": "Меч Крестоносца",
        },
        desc: {
          "default": "Increases attack of all units in the hero's army by +20%",
          "en-US": "Increases attack of all units in the hero's army by +20%",
          "ru-RU": "Увеличивает атаку всех юнитов в армии героя на +20",
        },
        attr: [
            { name: "unit_attack", type: BONUS_VALUE_TYPES.PERCENT, val: 1.2 },
        ],
        change: [],
        priceBuy: 7000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid17: {
        id: "artid17",
        img: 'ring_strength.png',
        name: {
          "default": "Ring of Strength",
          "en-US": "Ring of Strength",
          "ru-RU": "Кольцо Силы",
        },
        desc: {
          "default": "Increases the hero's attack by +5, increases attack of all units in the hero's army by +10%",
          "en-US": "Increases the hero's attack by +5, increases attack of all units in the hero's army by +10%",
          "ru-RU": "Увеличивает атаку героя на +5, увеличивает атаку всех юнитов в армии героя на +10%",
        },
        attr: [
            { name: "atk", type: BONUS_VALUE_TYPES.INTEGER, val: 5 },
            { name: "unit_attack", type: BONUS_VALUE_TYPES.PERCENT, val: 1.1 },
        ],
        change: [],
        priceBuy: 3000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    },
    artid18: {
        id: "artid18",
        img: 'ring_protection.png',
        name: {
          "default": "Ring of Protection",
          "en-US": "Ring of Protection",
          "ru-RU": "Кольцо Защиты",
        },
        desc: {
          "default": "Increases the hero's defence by +5, increases defence of all units in the hero's army by +10%",
          "en-US": "Increases the hero's defence by +5, increases defence of all units in the hero's army by +10%",
          "ru-RU": "Увеличивает защиту героя на +5, увеличивает защиту всех юнитов в армии героя на +10%",
        },
        attr: [
            { name: "def", type: BONUS_VALUE_TYPES.INTEGER, val: 5 },
            { name: "unit_defence", type: BONUS_VALUE_TYPES.PERCENT, val: 1.1 },
        ],
        change: [],
        priceBuy: 3000000,
        chance: 1,
        type: "artefactsWorn",
        artefactsWorn: 1
    }
};

Object.freeze(artefacts);
