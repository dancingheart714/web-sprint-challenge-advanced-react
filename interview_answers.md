# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A stateful component has State which gets initialized in the constructor. The State may change depending upon the action of the component.it's managed inside of a class-based component.

A functional component is Stateless - it has no render method. It has no lifecycle so it is not possible to use lifecycle methods and other hooks.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

It's used during the mounting phase of the lifecycle and generally is called upon before the coponent gets loaded in the DOM tree.

The componentWillUpdate is similar to componentWillMount the difference being that componentWillUpdate is called every time a re-render is required such as when this.setState() is called.

3. Define stateful logic.

As State changes, life cycle methods are called and a component renders. Stateful logic is the none-visible, changing data that the user never sees. The color of a header changing when clicked is something the user sees but the operations that make that happen are stateful logic.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange; Act; Assert

Arrange - we put ourselves in the experience of the user and look at the things we should be able to do on a page (we ask ourselves "what needs to happen")

Act - the steps that should be done for the thing to be tested

Assert - returns what we are looking for - our result
