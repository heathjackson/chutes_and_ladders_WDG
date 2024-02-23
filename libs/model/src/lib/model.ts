export interface Rule {
  order: number;
  title: string;
  value: string;
}

export class RuleBuilder {
  rule: Rule;
  constructor() {
    this.rule = {} as Rule;
  }

  setOrder(order: number) {
    this.rule.order = order;
    return this;
  }

  setTitle(title: string) {
    this.rule.title = title;
    return this;
  }

  setValue(value: string) {
    this.rule.value = value;
    return this;
  }

  buildRule() {
    const theRule = Object.assign({}, this.rule);
    this.rule = {} as Rule;
    return theRule;
  }
}

export interface Game {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  rules: Array<Rule>;
}

interface IID {
  setID(id: string): IName
}

interface IName {
  setName(name: string): IDescription
}

interface IDescription {
  setDescription(description: string): GameBuilder
  buildGame(): Game
}


export class GameBuilder implements IID, IName, IDescription{
  game: Game;
  constructor() {
    this.game = { rules: new Array<Rule>() } as Game
  }
  setID(id: string): IName {
    throw new Error("Method not implemented.");
  }

  static getInstance() {
    return new GameBuilder() as IID
  }

  setId(id: string): IName {
    this.game.id = id;
    return this;
  }

  setName(name: string): IDescription {
    this.game.name = name;
    return this;
  }

  setDescription(description: string): GameBuilder {
    this.game.description = description;
    return this;
  }

  setImageURL(imageURL: string) {
    this.game.imageURL = imageURL;
    return this;
  }

  addRule(title: string, value: string) {
    this.game.rules.push(
      new RuleBuilder()
      .setTitle(title)
      .setValue(value)
      .setOrder(this.game.rules.length)
      .buildRule()
    )
    return this;
  }

  buildGame() {
    const theGame = Object.assign({}, this.game);
    this.game = {} as Game;
    return theGame as Game;
  }
}


const g1 = GameBuilder.getInstance()
g1.setID("1").setName("Heather").buildGame


