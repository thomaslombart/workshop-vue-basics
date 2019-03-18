# Vue basics

## Introduction

Web apps nowadays are really evolved. Take a look at the implementation of a [counter in plain old JavaScript](./counter-vanilla) and you'll see that we have written **30 lines** just to make a simple counter. Building a web app such as Airbnb, Twitter or Facebook in Vanilla JS would be possible but really hard to do.

That's why we need frameworks such as Vue, React or Angular. They make our life easier by giving us tools that allows us to create maintainable and performant code.

Look at the implementation of the same [counter in Vue](./counter-vue) and you'll see how things are much easier. Why is it easier you might think? What problems does Vue solve?

A pain point in writing web applications is to keep things in sync. However Vue (just like Angular or React) has a reactivity system that handles this for us. In this workshop, we'll dive into Vue because it's (in my opinion) one of the easiest yet powerful JS frameworks to learn.

## Data binding

**In that part, refer to the code at [01-data-binding](./01-data-binding).**

One of the great things you can do with Vue is to render data to the DOM (Document Object Model) in a simple way. By looking at the code, you may think “Oh boy, what did just happen?”.

You might think: _"Oh boy, what did just happen?"_

First, we've created a basic HTML file and included the script that allows us to use Vue.

Next, if you look at the JavaScript code, you can see we created a new Vue instance. We precise where to **mount this instance** with the `el` property, that is to say in the `div` whose id is `#app`.

Finally, we provide a `data` object to that instance. We set a `name` property whose value is `James Bond`.

Go back to the HTML file. You can see there is a `p` tag containing `My name is {{ name }}`. By using these double brackets, you're telling Vue: _"Do you see this name property that you have in your data? I want you to put its value in these brackets!"_

And the magic happens. Vue, behind the scenes has done a lot of stuff and has made your **data reactive with the DOM**. It means, that whenever you'll modify the name, the changes will be **reflected immediately** into the DOM. Cool, right?

Go ahead and change the name in the JS file, for example _John Doe_. You'll see that the output changes too.

Vue can **bind the attributes of your elements to your data properties.** Binding means keeping your attributes _up-to-date_ with your properties.

You can do so using the directive `v-bind:ATTRIBUTE` or with the shorthand `:ATTRIBUTE`

In the example, by specifying `v-bind:placeholder="placeholder"`, we told Vue to bind the input's `placeholder` to its property `placeholder`. Therefore, whenever you change your `placeholder` property, the input's placeholder will change too. This binding is available for a lot of HTML attributes: `title`, `href`, `class`, `src`, etc.

## `v-if` and `v-on`

**In that part, refer to the code at [02-v-if-and-v-on](./02-v-if-and-v-on).**

I bet you can guess what is the purpose of `v-if` just with the name. It's about **conditional rendering: render elements based on a condition.**

As an example, you may want to render elements only if the user is an admin.

On the example, you just see _You're not an admin_. Click on the button. Now you see _"You can see this sentence because you're an admin"._

Indeed, in the `index.html` file, by putting the `v-if` directive on the `p` tag, you made sure that this sentence would appear only if you're an admin.

You can also see that Vue provides another conditional directive: `v-else`. In our case, we put it just beneath the first `p` tag, which is important! `v-else` must always been under a `v-if`.

Now, maybe you wonder how the property changed when we click on the button. Well, let me introduce you `v-on` and event listeners.

You will often use this directive. It allows us to **attach event listeners to elements.** These events when triggered will **invoke methods of your Vue instance.**

Here is the syntax : `v-on:event="method"` or the shorthand `@event="method"`.

If you come from a React background, this is similar to `onClick`, `onChange`, etc. There are similar events in Vue.js : `click`, `keyup`, `input`, ...

Now you might think _"what methods is he talking about?"_. In Vue, just like in React, you can add methods to your component. You do it so by providing to the Vue instance a `methods` object just like `data`.

When you click on the button _Make me admin_, you attached the `click` event to your `button` and you're telling Vue to trigger the `makeMeAdmin` method everytime you'll click the button.

If you take a look at the method, you can see a new thing: the use of `this`. Here, `this` refers directly to the Vue instance. Then, you can access your `data` properties in your methods easily using `this.PROPERTY_NAME`. Here, we accessed the `admin` property and changed it using `this.admin` in the `makeMeAdmin` method.

## User input with `v-model`

**In that part, refer to the code at [03-user-input-v-model](./03-user-input-v-model).**

With this directive, you can use **two-way binding** very easily. If you don't know two-way binding, this is what it means:

- Whenever a _model's property_ change, change the _bound element_.
- Whenever the _bound element change_, change the _model's property._

In the example, type something in the input and click on _"Submit"_. You can then see: _"Hello INPUT"_ where INPUT is what you typed. What happened behind the scenes?

1. You bound the `input` to the `name` property using `v-model` (which makes two-way binding happen)
2. You provided the initial value of `name` which is an empty string.
3. You typed a name, let's say _Thomas_
4. Whenever the input changes, an `input` event is sent back to the Vue instance.
5. The Vue instance changed the `name` property
6. The changes have been reflected to your elements.

That's not rocket science, isn't it?

In fact, you can implement your own `v-model` if you want. In the end, `v-model` is just [syntactic sugar](https://www.quora.com/What-is-syntactic-sugar-in-programming-languages) for `:value` and `@input`.

## Lists with `v-for`

**In that part, refer to the code at [04-list-v-for](./04-list-v-for).**

When you are build an app, there's always a time when you want to **render lists**, for chat messages, search results, different settings, cart items and more. That's why Vue provides another directive in order to deal with it which is `v-for`.

You use it with the following syntax: `v-for="item in list"`. `list` is the array that you iterate over and `item` is an alias for the array element.

For example, take a look in the code at the list corresponding to _"Things I want to buy"_.

The `v-for` directive will create 4 `li` elements in your `ul` element. But that's not all. You can also iterate over an object, the syntax remains the same as with an array.

You can also provide a second argument when you use `v-for`:

- For an array, the second argument will be the **index** of the array's current element
- For an object, the second argument will be the **key** of the object's current element

Take a look at the **Guardians of the Galaxy** example to see an implementation of how things work.

## Components

**In that part, refer to the code at [05-components](./05-components).**

So far, Vue has made our life simpler. The directives have a simple syntax and are easy to use. That's the same for creating components.

```js
Vue.component("my-component", {
  template: "<div>My component</div>"
});
```

As you can guess, we create a new component with `Vue.component`. The first parameter we give is the component **name** (`my-component` in our case). The second parameter is an object that defines your component. One property of this object is the **template** which is your component's HTML code. You can also use `data`, `methods` in your Vue components since they also are Vue instances!

You can then add your component in your app within your HTML code just like you were adding a simple element.

To see an example of components and events, take a look at the code and analyze it.

**Notes**:

- Be careful of where you define your component. If you define it after calling `new Vue()`, it won't work because it won't be properly registered.
- You may have noticed that `data` is not an object but... a function that returns an object. Why? Well because of how JavaScript works, if `data` was an object, every instance of your component would **share the `data` property**. An immediate side effect is that if you have two `counter` components that has a `count` property, changing the `count` property on the first counter will **also change** the `count` of the second counter. In our case, changing the `isDarkMode` property would change it across all blog posts. That's not what we want. What we want is that `data` remain independent from other components. One way of doing so is by using functions.

What's great about components is that you can reuse it as much as you want. You can see that we have created as many blog posts as there are posts in the `data` object.

### Props

That's where components are really interesting. When you compose components across your app, you will have parent components and child components. Therefore, it's **essential** to communicate between components. One way of doing it is by using **props**. Props are used to communicate from the **parent to the child**.

Here is how to use props:

- On the child, set a `props` property. The value of `props` is an array containing all the props the parent gave to the child.
- On the parent's template, give all the props you want into your component element:

```html
<my-component key1="value" key2="another value"></my-component>
```

You can also **bind props** if you need to pass data that comes from your Vue instance.

By passing a `props` property to our component, we passed data from the parent component to the child component.

Be careful when you declare the props in your child component: You have to be exhaustive when you build your `props` array. If you forget just one prop, it won't work. Delete the `post` prop in the `blog-post` component and you'll see it disappear from the output.

### Custom events

We know how to communicate from parent to child components. But how to communicate from child to parent components ?

By using **custom events**. Just as with props, we have to define one thing on the parent and one thing on the child:

- On the child, you have to use the `$emit` function. This function takes two parameters. The first one is required and is the **event name**. The second one is what you want to **send to the parent**. It can be an object, a string, an array, etc.
- On the parent's template, use `v-on` (or `@`) to listen to the event your child will emit.

```html
<my-component @customEvent="handleChildEvent"></my-component>
```

Let's see what happens when you mark one of the blog post as read.

1. Click on `Mark as Read` on one of the blog posts.
2. As there is a listener on the `click` event in the child component, the `sendToggleEvent` function is triggered
3. In `sendToggleEvent`, the child emits a `toglge` event to the parent and transmits back the index that as been passed as a prop.
4. The parent receives the `toggle` event from the child. The `toggleRead` method is triggered
5. in this method, we set the `read` property of the corresponding to be false if it was true or to be true if it was false.
6. As things are reactive, the child component (`blog-post`) gets its props `post` updated and the `read` property have been set to true.

## Computed properties

**In that part, refer to the code at [06-computed-properties](./06-computed-properties).**

I'm going to introduce you another feature of Vue before summing up all we've learnt: **computed properties**.

Compared to a method, a computed property is **cached** based on its **dependencies**:

- **Caching something** means storing a result somewhere temporarily (in the **cache**). The point of doing it is that this _somewhere_ can be accessed very fast!
- **Dependencies** here means what the computed property **depends on**, what is used inside the implementation of the computed property. It has to be a **data property** or a **prop**.

In our case, the dependency of the computed property is `this.movie.Poster`. So, as long as our `Poster` doesn't change, the **cached result will be returned** and we won't execute what's inside the computed property. However, if we use a method, the method will be **executed whenever the component re-renders!** no matter if `this.movie.Poster`changes or not.

EXPLAIN CODE HERE

To sum up, a computed property, **acts like a method**, **cache results** if we use a **data property or a prop** in the implementation of the computed property (`this.movie.Poster` for example). It can be used in the template just like a **data property** and won't **necessarily be re-executed**.
