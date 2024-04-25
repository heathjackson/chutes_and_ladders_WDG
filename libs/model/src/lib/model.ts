import { randomUUID } from 'crypto';

interface Rule {
  order: number;
  title: string;
  value: string;
}

class RuleBuilder {
  private rule: Rule;
  constructor() {
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

  constructor() {
    this.gameRules = {} as IGameInfo;
    this.gameRules.rules = new Array<Rule>();
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
      .buildRule();

    this.gameRules.rules.push(rule);

    return this;
  }

  buildGameInfo() {
    return this.gameRules;
  }
}

export interface IGameBuilder {
  id: string;
  uuid: string;
  dateCreated: number;
  lastModified: number;
  gameInstance: object;
}

export class GameBuilder {
  private gameBuild: IGameBuilder;

  constructor() {
    this.gameBuild = {
      id: '',
      uuid: randomUUID(),
      dateCreated: Math.round(Date.now() / 60000),
    } as IGameBuilder;
  }

  setId(id: string): GameBuilder {
    this.gameBuild.id = id;
    return this;
  }

  setLastModified(): GameBuilder {
    this.gameBuild.lastModified = Date.now();
    return this;
  }

  setGameInstance(game: object): GameBuilder {
    this.gameBuild.gameInstance = game;
    return this;
  }

  getDateCreated() {
    return this.gameBuild.dateCreated;
  }

  getUUID() {
    return this.gameBuild.uuid;
  }

  getId() {
    return this.gameBuild.id;
  }

  buildNewGame(): IGameBuilder {
    return this.gameBuild;
  }
}
