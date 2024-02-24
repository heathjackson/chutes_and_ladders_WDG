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
    return theRule;
  }
}

class Game {
  id?: string;
  name?: string;
  description?: string;
  imageURL?: string;
  rules: Array<Rule>;

  constructor() {
    this.rules = new Array<Rule>
  }
}

interface GameBuilder_inter {
  setId(id: string): void;
  setName(name: string): void;
  setDescription(description: string): void;
  setImage(imageURL: string): void;
  setRules(title: string, value: string): void;
  build(): Game;
}

export class GameBuilder implements GameBuilder_inter {
  private game: Game;
  
  constructor() {
    this.game = new Game();
  }
 
  setId(id: string): GameBuilder {
    this.game.id = id;
    return this;
  }

  setName(name: string): GameBuilder {
    this.game.name = name;
    return this;
  }

  setDescription(description: string): GameBuilder {
    this.game.description = description;
    return this;
  }

  setImageURL(imageURL: string): GameBuilder {
    this.game.imageURL = imageURL;
    return this;
  }

  setRules(title: string, value: string): GameBuilder {
   const rule = new RuleBuilder()
    .setTitle(title)
    .setValue(value)
    .setOrder(this.game.rules.length)
    .buildRule()
   
    this.game.rules.push(rule)

    return this
  }

  setImage(imageURL: string): GameBuilder{
    this.game.imageURL = imageURL;
    return this;
  }

  build(): Game {
    return this.game;
  }
}

