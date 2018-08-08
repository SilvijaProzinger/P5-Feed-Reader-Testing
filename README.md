FEED READER TESTING 2.0

FIXED: Replaced the selectors with jQuery and changed the syntax a little bit.

In this project the goal was to use Jasmine testing alongside JavaScript to test the given code.

HOW TO RUN

By opening index.html file in any browser the Jasmine testing will show all expectations and run the tests.

IMPLEMENTED TESTS

1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named "The menu", then write a test that ensures the menu element is hidden by default. 
4. Write a test that ensures the menu changes visibility when the menu icon is clicked.
5. Write a test suite named "Initial Entries", then write a test that ensures when the loadFeed function is called and completes its work, there is at least a single 
entry element within the .feed container.
6. Write a test suite named "New Feed Selection" and afterwards write a test that ensures when a new feed is loaded by the loadFeed function that the content actually
changes.

CODE DEPENDANCIES AND REFERENCES
1. Base code by Udacity
2. Testing DOM Events Using jQuery and Jasmine 2.0 by Rob Gravelle on htmlgoodies.com
3. Unit Testing Async Calls and Promises with Jasmine by Anne Zhou on medium.com
4. .hasClass() on api.jquery.com