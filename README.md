# PropertyPackets

## Synopsis

Property packets allows a user to enter a city, state, and select a real estate data type. The response is a chart of the real estate data type from that location. This information is derived from the US Census Bureau for the years 2012-2015. Google Charts is providing the format for the chart visualization.

## Motivation

I have an interest in real estate investing and one of the pieces of information that can be useful is knowing how the market is performing in greater detail over time. Some of these details are only available on the US Census Bureau site, but it's not very friendly and doesn't show visually appealing charts making the data easier to read.

## Document Flow

The website starts with a descriptive landing page where the user can get started. After clicking start, the user is directed to a form asking for city, state and data type information. The user then has the option of clicking search for results, or resetting the form to try again. If the user clicks search, three things can happen. 

1. The user is returned with the chart for the information requested. 
2. The user is returned with a message indicating the location chosen is too small in population size. They can click reset and return to the form.
3. The user is returned with a message indicating the location chosen doesn't exist. Their spelling may be wrong. They can click reset and return to the form.

## API Reference

The US Census provides a free API account which is accessed via a get request with an API key [Here](http://api.census.gov/data/key_signup.html).

The available data types within the US Census is very, very large and can be found [Here](https://www.census.gov/data/developers/data-sets.html).

https://api.census.gov/data/2015/acs1/variables.html

## Tests

The search function has been tested for misspellings, capitialized characters, and entries that generally do not match any city on the list.

## Contributors

The most important contribution you can provide is feedback on how to make this app better! Send me an email at matthewjroybal@gmail.com. I look forward to hearing from you.