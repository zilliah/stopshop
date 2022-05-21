# Stop Shop

A Chrome extension to help with online shopping addiction. Uses mindfulness techniques to help reduce impulsive or emotional spending.

This project is currently on hold.

## Development Plan

### v0

These are the basic features to include in the first version:

1. Check URL to determine if it's a shopping cart:
    * Check a shortlist of cart URLs (Amazon, eBay, etc)
    * Check for `/...cart...` in the URL
2. Block the cart page with a custom page:
    * Instruct user to take three slow breath. Create a "breathing" animation users can breath along with.
    * Ask a couple basic questions about the user's situation to prompt them to self-reflect before buying anything. Eg "What are you feeling right now?", "Is this within your budget?" etc. 
    * Questions will have users select from several options, which will determine the next step.
    * There will also be a "this isn't a cart" option in case the URL is checked incorrectly.
    * Keep the page styling simple and minimal.
3. Depending on the answers to some questions, the user may be:
    * Directed back to the cart if (eg) they are feeling calm, thoughtful, and the purchase is within their budget.
    * Completely blocked from accessing the cart for a certain amount of time (2h, 24h, etc).
    * Sent back to the page if it is not a cart.

### v1

Once the basic features are working, next steps are:

1. Expanded cart checking:
    * Allow users to keep a custom list of URLs, both for sites to keep unblocked and for sites to block that aren't normally detected.
    * Click on extension icon, have options to add sites to block/allow lists.  
2. Improved questions/tasks on blocking page.
    * In addition to preselected options, add questions allow users to type their own answers and encouraging a journaling-style written reflection.
    * For most questions, there are no "right" answers, but there is space for users to type their answers. 
    * For now, next step will still rely on the responses to predetermined options (but those options will also be expanded). 
3. Improved styling, add branding (logo, etc)
4. Expanded actions:
    * Variable time blocks - different predetermined options result in longer or shorter time blocks.
    * Links to mental health resources, other online tools, etc.


### v2

Increased customization:

1. Shared cart checking:
    * Give users option to share their custom cart lists, allowing for more consistent cart blocking.
    * Will count reports per URL, requiring a threshold to be passed before the change is shared.
    * Shared URLs will not overwrite users' custom lists.
2. Breathing animation extension: allow users to breathe with the animation indefinitely, and click to go to the next step.
3. Allow users to customize questions:
    * Edit/remove premade questions.
    * Add custom questions.
4. Add place for user feedback/support (contact form, donate button, etc)

### v3+

Extras if it gets to this point:

1. Port to Firefox
2. More user customizations:
    * Colour customization for blocking page.
    * Set default block time.
3. Additional post-question actions:
    * Clickable [feelings wheel](https://feelingswheel.com/)
    * Save cart as PDF?
4. Some sort of mobile support?
5. Social support:
    * Sharing helpful questions
    * Connect with someone else who's also dealing with shopping addiction.
6. Etc?
