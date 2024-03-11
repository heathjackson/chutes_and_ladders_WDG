import { randomUUID } from "crypto";

interface Rule {
  order: number;
  title: string;
  value: string;
}

class RuleBuilder {
  private rule: Rule;
  constructor () {
    this.rule = {} as Rule;
  }

  setOrder(order: number): RuleBuilder {
    this.rule.order = order;
    return this;
  }

  setTitle(title: string): RuleBuilder {
    this.rule.title = title;
    return this;
  }

  setValue(value: string): RuleBuilder {
    this.rule.value = value;
    return this;
  }

  buildRule() {
    return this.rule;
  }
}

export interface IGameInfo {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  rules: Array<Rule>;
}

export class GameInfoBuilder {
  private gameRules: IGameInfo;

  constructor () {
    this.gameRules = {} as IGameInfo
    this.gameRules.rules = new Array<Rule>
  }

  setID(id: string): GameInfoBuilder {
    this.gameRules.id = id;
    return this;
  }

  setName(name: string): GameInfoBuilder {
    this.gameRules.name = name;
    return this;
  }

  setDescription(description: string): GameInfoBuilder {
    this.gameRules.description = description;
    return this;
  }

  setImageURL(imageURL: string): GameInfoBuilder {
    this.gameRules.imageURL = imageURL;
    return this;
  }

  addRule(title: string, value: string): GameInfoBuilder {
    const rule = new RuleBuilder()
      .setTitle(title)
      .setValue(value)
      .setOrder(this.gameRules.rules.length)
      .buildRule()

    this.gameRules.rules.push(rule)

    return this;
  }

  buildGameInfo() {
    return this.gameRules;
  }
}

export interface IGame {
  name: string
  instanceOfGame: object
  gameMethods: Array<void>
}

export interface IPlayGame {
  uuid: string;
  dateCreated: number;
  dateModified?: number;
}

export class PlayGame implements IPlayGame {
  uuid: string;
  dateCreated: number
  dateModified?: number | undefined

  constructor () {
    this.uuid = randomUUID()
    this.dateCreated = Date.now()
    this.dateModified
  }

  setDateModified(): PlayGame {
    this.dateModified = Date.now()
    return this
  }
}

