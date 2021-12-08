const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      const message = myCookbookCli.add(`carbonara`, [`egg`, `pasta`, `cheese`, `water`]);

      expect(message).toEqual(`Successfully added the following recipe: carbonara`);

    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add(`ramdon`, [`water, chapagetti, neoguri`]);
      myCookbookCli.add(`bibingka`, [`rice flour`, `butter`, `coconut milk`, `salted egg`]);

      const message = myCookbookCli.list();

      expect(message).toEqual(`You have the following recipes: ramdon,bibingka`);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myCookbook =  new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add(`brownies`, [`eggs`, `cocoa powder`, `flour`, `butter`]);

      const message = myCookbookCli.get(`brownies`);

      expect(message).toEqual(`The ingredients for brownies are: eggs,cocoa powder,flour,butter`);

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('laswa', ['fish sauce', 'eggplant', `greens`, `okra`]);
      const message = myCookbookCli.remove('laswa');

      expect(message).toEqual(`Successfully removed the following recipe: laswa`);
    });

    test('should display a warning message when the user attempts to delete a recipe that does not exist', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      const message = myCookbookCli.remove('laswa');

      expect(message).toEqual(`Oh no, we don't have laswa in your cookbook`);
    });
  });
});