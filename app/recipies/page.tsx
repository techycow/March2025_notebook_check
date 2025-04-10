import { title } from "@/components/primitives";

export default function RecipesPage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <div className="flex flex-wrap text-2xl m-2 border-2 border-gray-700 justify-center">
        <p className="m-6 b border-2 border-red-600">recipe #1</p>
        <p className="m-6 border-2  border-orange-500">recipe #2</p>
        <p className="m-6 border-2  border-yellow-400">recipe #3</p>
        <p className="m-6 border-2  border-green-600">recipe #4</p>
        <p className="m-6 border-2  border-blue-500">recipe #5</p>
        <p className="m-6 border-2  border-purple-700">recipe #6</p>
      </div>

      <h3>Mac N Cheese</h3>
      <img
        alt="mac n cheese"
        src="https://tse4.mm.bing.net/th/id/OIP.XaWEZv7FYMc0U53FpjOR3gHaEJ?pid=ImgDet&w=226&h=126.35021097046413&c=7"
      />
      <p>
        Step 1: Start by boiling a pot of salted water and cook your pasta
        according to the package instructions. Make sure to cook it al dente, as
        it will continue to cook when baked with the cheese sauce later. Step 2:
        While the pasta is cooking, you can prepare the cheese sauce. In a
        medium saucepan, melt 1/4 cup of butter over medium heat. Once melted,
        add 1/4 cup of all-purpose flour and whisk continuously for about a
        minute, until the mixture becomes smooth and bubbly. Step 3: Gradually
        pour in 2 cups of milk, whisking constantly to avoid lumps. Continue to
        cook and whisk until the sauce thickens and coats the back of a spoon.
        This should take about 5-7 minutes. Step 4: Now its time to add the star
        of the show, the cheese! Remove the saucepan from the heat and slowly
        stir in 2 cups of shredded cheddar cheese until it melts and forms a
        smooth sauce. Feel free to use your favorite type of cheese or a
        combination for a flavorful twist. Step 5: Once the cheese sauce is
        ready, drain the cooked pasta and add it to a baking dish. Pour the
        cheese sauce over the pasta, stirring gently to ensure each noodle is
        well coated. If desired, you can sprinkle some additional cheese on top
        for a golden, cheesy crust. Step 6: Bake the mac and cheese in a
        preheated oven at 375°F for about 20-25 minutes, or until the top is
        bubbly and golden. Remove from the oven and let it cool for a few
        minutes before serving.
      </p>
      <button type="button">Subscribe for more recipies:</button>

      <menu>
        <li>Cheese Pizza</li>
        <li>Nachos</li>
        <li>Alfredo Pasta</li>
        <li>Tacos</li>
      </menu>
    </div>
  );
}
