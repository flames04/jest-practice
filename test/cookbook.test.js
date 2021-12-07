const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe(`carbonara`, [`egg`, `pasta`, `cheese`, `water`]);

      expect(myCookbook.recipes).toEqual({ carbonara: [`egg`, `pasta`, `cheese`, `water`] });
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe(`ramdon`, [`water, chapagetti, neoguri`]);

      const myRecipe = myCookbook.listRecipes();

      expect(myRecipe).toEqual([`ramdon`]);

    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
