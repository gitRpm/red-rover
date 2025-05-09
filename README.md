# Ryan Morris Coding Challenge

Hello, thank your letting me take the coding challenge. It looked simple at first, but after peeling back the layers, it certainly took some brainpower.

## Approach

My initial thought was to just iterate through the string and build my output on the fly, but I quickly realized that wouldn't work very well with sorting the data.

I figured my best bet was to build an object that I could manipulate based on the desired output. So that's the direction I went.

First, I split the string into an array so I can iterate that and determine how to treat each item.

Then, I basically just used parentheses to determine whether to build a children with recursion or return.

Once I got the data in an object, it was smooth sailing from there.

## Running red-rover

To run the project, simply type `npm start` in your terminal. This will start the program and print the unsorted and sorted results of the string to the console.

Thanks again for the opportunity!
