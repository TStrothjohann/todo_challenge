[![Build Status](https://travis-ci.org/TStrothjohann/todo_challenge.svg)](https://travis-ci.org/TStrothjohann/todo_challenge)

# AngularJS Todo List

This is Todo list front-end application. It has no state. After reloading the page, the todos are gone.

Done:

The user can add and delete ToDos.
The ToDo-List consists of a controller and a ToDo-item-Factory.
ToBeDone:

HTML could be more expressive. I want to research how to split the page into several html-partials.

A ToDo can be marked as done. The model will change to done = true. But I haven't implemented a view change yet. Reordering the list and aplying another css-class would be nice.

I want to capture the return-key to save a ToDo.

I'm not so sure if a factory was the best way to encapsulate the ToDo-item creation. Had issues creating a todo with the text as argument.

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)


Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

## Possible Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

