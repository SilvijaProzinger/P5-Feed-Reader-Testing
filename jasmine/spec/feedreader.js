/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* 
         * This test ensures that all entries are defined
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* 
         * Loop through every entry and ensure that it's URL is defined and not empty
         */

         it('URL is defined and not empty', function() {
            for (var id = 0; id < allFeeds.length; id++){
                expect(allFeeds[id].url).toBeDefined();
                expect(allFeeds[id].url.length).not.toBe(0);
            }
         });

        /* 
         * Loop through every entry and ensure that it's name is defined and not empty
         */

         it('name is defined and not empty', function(){
            for (var id = 0; id < allFeeds.length; id++){
                expect(allFeeds[id].name).toBeDefined();
                expect(allFeeds[id].name.length).not.toBe(0);
            }
         });
    });

    /* Write a new test suite called 'The menu' */
    describe('The menu', function(){

        /*  
         * Make sure that the menu on the left side is hidden by default
         */

        it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
         });

         /* 
          * Test that the menu displays when it's clicked on and goes back to hidden after clicking again
          */

        it('the menu displays when clicked and hides when clicked again', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });

    /* Write a new test suite called 'Initial Entries' */
    describe('Initial Entries', function(){

        /* 
         * We use beforeEach command to ensure that when loadFeed() function runs there is at least one entry in the feed
         */

         beforeEach(function (done){
            loadFeed(0, function() {
                done();
            });
         });

         it('at least one entry within container', function (done) {
            expect($('.entry').length).not.toBe(0);
            done();
        });
    });

    /* Write a test suite called 'New Feed Selection' */
    describe('New Feed Selection', function(){
        /* 
         * We declare two new variables, feedContent which represents currently loaded entry and 
         * newFeedContent which represents newly loaded entry and we test to make sure that the newly loaded entry 
         * isn't the same as the previous one 
         */
         let feedContent;
         let newFeedContent;

        beforeEach(function (done){
        loadFeed(0, function(){
        feedContent = $('.feed').html();

        loadFeed(1, function(){
        done();
        });
        });
        });

         it('the content changes when a new feed is loaded', function (done){
            newFeedContent = $('.feed').html();
            expect(feedContent).not.toEqual(newFeedContent);
            done();
         });
   })
}());
