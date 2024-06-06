/* 
What is the Interpreter Pattern?
  The Interpreter pattern is a behavioral design pattern that defines a grammatical representation for a language and provides an interpreter to interpret sentences in that language. This pattern is used to interpret expressions defined in a specific grammar.

Why and When to Use the Interpreter Pattern
  Parsing Expressions: When you need to interpret or evaluate expressions in a language.
  Grammar Representation: When the grammar of the language is simple and stable.
  Extending Language: When you need to easily extend the grammar to accommodate new expressions.
  Repeated Parsing: When the same set of expressions needs to be evaluated multiple times.
  Benefits of the Interpreter Pattern
  Simple Grammar: Simplifies the implementation of grammars for simple languages.
  Extensibility: Easy to extend the grammar by adding new expression classes.
  Reusability: Reusable expression objects for interpreting the language.
*/

// Real-Time Application Example: Simple Math Expression Interpreter
// Let's consider a simple math expression interpreter that can evaluate expressions like 2 + 3, 5 - 1, and (4 + 6) - 3.

// Step 1: Define the Expression Interface
// Expression interface
interface Expression {
  interpret(): number;
}

// Step 2: Create Terminal and Non-terminal Expressions
// Terminal expressions
class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  interpret(): number {
    return this.number;
  }
}

// Non-terminal expressions
class AddExpression implements Expression {
  private leftExpression: Expression;
  private rightExpression: Expression;

  constructor(left: Expression, right: Expression) {
    this.leftExpression = left;
    this.rightExpression = right;
  }

  interpret(): number {
    return this.leftExpression.interpret() + this.rightExpression.interpret();
  }
}

class SubtractExpression implements Expression {
  private leftExpression: Expression;
  private rightExpression: Expression;

  constructor(left: Expression, right: Expression) {
    this.leftExpression = left;
    this.rightExpression = right;
  }

  interpret(): number {
    return this.leftExpression.interpret() - this.rightExpression.interpret();
  }
}

// Step 3: Parse and Interpret Expressions
// Helper function to parse and interpret expressions
function parseExpression(expression: string): Expression {
  const tokens = expression.split(' ');
  const stack: Expression[] = [];

  for (let token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(new NumberExpression(Number(token)));
    } else if (token === '+') {
      const right = stack.pop();
      const left = stack.pop();
      if (left && right) {
        stack.push(new AddExpression(left, right));
      }
    } else if (token === '-') {
      const right = stack.pop();
      const left = stack.pop();
      if (left && right) {
        stack.push(new SubtractExpression(left, right));
      }
    }
  }

  return stack.pop()!;
}

// Example usage
const expression1 = parseExpression('2 3 +');
const expression2 = parseExpression('5 1 -');
const expression3 = parseExpression('4 6 + 3 -');

console.log(expression1.interpret()); // Output: 5
console.log(expression2.interpret()); // Output: 4
console.log(expression3.interpret()); // Output: 7

/* 
Explanation
  Expression Interface (Expression): Defines the interpret method.
  Terminal Expressions (NumberExpression): Represents leaf nodes in the parse tree that cannot be broken down any further.
  Non-terminal Expressions (AddExpression, SubtractExpression): Represents nodes in the parse tree that can be broken down into further expressions.
  Parse Function: Parses a postfix expression and builds a parse tree, then evaluates it using the interpret method of the root node.
*/
