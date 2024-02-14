# odin-library
The Odin Project's JavaScript Path "Library" project.

## Observations and learnt stuff

### Usage of an HTML "template part"
Instead of creating a DOM element directly from JS, it was easier to model the _card_ in the initial HTML/CSS themselves. Such model is kept in the HTML but invisible. Then, when a new card has to be created, the `.cloneNode(true)` method is used to copy it. The original `id` is removed and the card's data and event bindings are replaced.

Certainly there's a lot of frameworks which do similar things, certainly in easier and cleaner ways, but I don't know them yet, so that's good enough.

### "View" code in the HTML file
A `<script>` element in the HTML file itself is used for the JS code which is highly specific to the structure of _this_ HTML document. It somewhat made a sense of _separation of concerns_ in my mind, along the idea of keeping the `/js` directory free of interface-specific code.

I might be proven wrong someday and this idea is not backed by anything I remember to have read, but it makes sense for now.

### Lessons learnt

* The HTML `hidden` attribute is overriden if the element receives any `display` configuration by CSS.
* The value to be looked upon in a checkbox-type `<input>` is _checked_ instead of _value_.