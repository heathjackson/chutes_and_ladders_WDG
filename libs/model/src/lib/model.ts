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
    return theRule;
  }
}

export interface IGame {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  rules: Array<Rule>;
}

export class Game {
  private game: IGame;
  private rules: Array<Rule>

  constructor () {
    this.game = {} as IGame
    this.rules = new Array<Rule>
  }

  setId(id: string) {
    this.game.id = id;
    return this;
  }

  setName(name: string) {
    this.game.name = name;
    return this;
  }

  setDescription(description: string) {
    this.game.description = description;
    return this;
  }

  setImageURL(imageURL: string) {
    this.game.imageURL = imageURL;
    return this;
  }

  setRules(title: string, value: string) {
    const rule = new RuleBuilder()
      .setTitle(title)
      .setValue(value)
      .setOrder(this.rules.length)
      .buildRule()

    this.rules.push(rule)

    return this
  }

  setImage(imageURL: string) {
    this.game.imageURL = imageURL;
    return this;
  }

  build() {
    return this.game;
  }
}

