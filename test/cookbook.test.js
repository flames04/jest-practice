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
      const myCookbook = new Cookbook();
      myCookbook.addRecipe(`grilled cheese`, [`bread`,`cheese`, `butter`]);

      const myRecipe = myCookbook.getRecipe(`grilled cheese`);

      expect(myRecipe).toEqual([`bread`, `cheese`, `butter`]);

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      const myCookbook =  new Cookbook();
      myCookbook.addRecipe(`bibingka`, [`rice flour`, `butter`, `coconut milk`, `salted egg`]);
      myCookbook.addRecipe(`menudo`, [`pork`, `tomato paste`, `potatoes`]);

      myCookbook.removeRecipe(`bibingka`);

      expect(myCookbook.recipes).toEqual({menudo: [`pork`, `tomato paste`, `potatoes`]});


    });
  });
});
