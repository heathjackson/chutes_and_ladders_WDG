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

export interface IPlayGame {
  id: string;
  uuid: string;
  dateCreated: number;
}

export interface IGameBuilder extends IPlayGame {
  lastModified: Date
  gameMethodMap?: Map<string, () => string | undefined> //reducer will need to be used
}

export class GameBuilder {
  private gameBuild: IGameBuilder;

  constructor () {
    this.gameBuild = {
      uuid: randomUUID(),
      dateCreated: Date.now(),
    } as IGameBuilder
  }

  setId(id: string): GameBuilder {
    this.gameBuild.id = id;
    return this
  }

  addMethods(title: string, value: () => string | undefined) {
    this.gameBuild.gameMethodMap?.set(title, value)
    return this
  }

  buildNewGame(): IGameBuilder {
    return this.gameBuild
  }
}




