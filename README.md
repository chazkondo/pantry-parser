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

Note: This is subject to change. Letters must be lower case. 



