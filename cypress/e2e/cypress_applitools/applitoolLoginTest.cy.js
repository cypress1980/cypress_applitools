describe.skip('Hello world', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Hello Applitools',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });
  it('My first JavaScript test!', () => {
    cy.visit('https://applitools.com/helloworld');
    cy.eyesCheckWindow('Main Page');
    cy.get('button').click();
    cy.eyesCheckWindow('Click!');
  });
});