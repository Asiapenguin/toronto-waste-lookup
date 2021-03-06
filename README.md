# Toronto Waste Lookup

A web app to search for waste items using the Toronto Waste Wizard database, and save frequently used ones.

## Demo

[Demo](https://asiapenguin.github.io/toronto-waste-lookup/). As an example, start by searching for "takeout" as seen in the picture image and try to add favorites.

## Features
- Reproduced the design as provided in the screenshot, which displays example search results.
- The data taken from the [Waste Wizard Lookup data (JSON)](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#5ed40494-a290-7807-d5da-09ab6a56fca2).
- Typing in the search field will not perform an API call.
- A search is performed when hitting enter or clicking the search button.
- When the search input field is cleared, the list of results is cleared. 
- Performing a search renders a list of potential matching items based on keywords. Each item:
   - Render the title and description of the item.
   - Render a grey star button *if the item is not already favourited*.
   - Render a green star icon *if the item is not already favourited*.
   - Clicking the star button should add the item to the favourites list.
- When the number of favourites is more than one, the app renders a list of items. Each saved item:
   - Render the title and description of the item.
   - Render a green star button *if the item has been favourited*.
   - Clicking the green star button should remove the item from the saved list.

## Design

Design is based on ![This](http://cdn.shopify.com/static/web-eng-challenge-summer-2019/design.png)
