# Pantry Parser

## A simple application to parse items by location and type.

### How to use:

1. Create your inventory. 

2. Divide inventory by location. Locations must be at the top of each sub-list and **must** have the format "# title".

3. Every item within each location needs to be separated by a new line ('\n').

4. To attach a type, you must prepend your item with the format "[letter]. ". Multiple letter can be prepended (ex. cb. cheese)

### Supported types/letters:

1. Lower case C -> 'c' -> Consumable -> Perishable
2. Lower case S -> 's' -> Spoiling
3. Lower case B -> 'b' -> Bad -> Spoiled
4. Lower case L -> 'l' -> Low Stock
4. Lower case O -> 'o' -> Out of Stock

Note: This is subject to change. Letters must be lower case. 

<img width="987" alt="Screenshot 2024-06-09 at 8 18 21 AM" src="https://github.com/chazkondo/pantry-parser/assets/38027158/998d4473-db64-47ba-848f-be5eb17bf2e1">

<img width="973" alt="Screenshot 2024-06-09 at 8 18 48 AM" src="https://github.com/chazkondo/pantry-parser/assets/38027158/678bb04f-4bdc-455c-8a38-a9f7289e58b5">

<img width="946" alt="Screenshot 2024-06-09 at 8 19 02 AM" src="https://github.com/chazkondo/pantry-parser/assets/38027158/8fabd614-5abb-432c-adcc-efb4446de311">

