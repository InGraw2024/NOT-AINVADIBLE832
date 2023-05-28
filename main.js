class MyExtension {
  getInfo() {
    return {
      id: 'myextension',
      name: 'Własne zmiene',
      blocks: [
        {
          opcode: 'say',
          blockType: Scratch.BlockType.COMMAND,
          text: 'powiedz()',
          arguments: {},
        },
      ],
      menus: {},
    };
  }

  say() {
    console.log('Hello from powiedz() block!');
  }
}

Scratch.extensions.register(new MyExtension());
