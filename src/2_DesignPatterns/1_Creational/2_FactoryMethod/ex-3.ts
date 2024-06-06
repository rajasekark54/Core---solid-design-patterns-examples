export {};

interface Button {
  render(): void;
}
class WindowsButton implements Button {
  render() {
    console.log('Rendering Windows Button.');
  }
}
class MacOSButton implements Button {
  render() {
    console.log('Rendering MacOS Button.');
  }
}

interface ButtonFactory {
  createButton(): Button;
}
class WindowsButtonFactory implements ButtonFactory {
  createButton() {
    return new WindowsButton();
  }
}
class MacOSButtonFactory implements ButtonFactory {
  createButton() {
    return new MacOSButton();
  }
}

function clientCode(factory: ButtonFactory) {
  const button = factory.createButton();
  button.render();
}

clientCode(new WindowsButtonFactory()); // Output: Rendering Windows Button.
clientCode(new MacOSButtonFactory()); // Output: Rendering MacOS Button.
