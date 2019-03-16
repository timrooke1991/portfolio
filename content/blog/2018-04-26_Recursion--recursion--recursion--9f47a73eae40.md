---
slug: recursion-recursion-recursion
date: 2018-04-26T13:22:22.449Z
title: "Recursion, recursion, recursion…"
template: "post"
draft: false
description: "Today, we’re going to look at recursion. If you’ve not been keeping up to date, this is an ongoing blog series on algorithms. You’re only 2 posts behind, so can catch up in no time. Part one is here…"
category: ""
tags: [Algorithms,Recursion,Coding,Programming,Fibonacci]
---

### Recursion, recursion, recursion…

Today, we’re going to look at recursion. If you’ve not been keeping up to date, this is an ongoing blog series on algorithms. You’re only 2 posts behind, so can catch up in no time. [Part one is here](https://medium.com/@timrooke1991/mmmm-algorithms-c3580097680a). [And part two, on Euclid’s algorithm, is here](https://medium.com/@timrooke1991/gcd-euclid-and-efficient-algorithms-8b83af5325fa).

Recursion is an important concept when looking at algorithms. We will see as we progress through the series that recursion and recursive solutions crop up time and time again. Recursion is simply a function that calls itself. Let’s look at a simple example.

```
def countdown(n):
    # base case
    if(n == 0): 
        return n
    
    print(n)
    return countdown(n - 1)
```

This is a very simple recursive function that counts down to `0` from an input number, `n`, that we pass it. Therefore, if we run `countdown(10)`, we get the following output in the terminal.

<figure>

![](/media/recursion-recursion-recursion-0.png)

<figcaption>The output of our countdown function</figcaption></figure>

The number is being printed to the screen using the `print` statement on line 6. This is simple enough, but how does it know to print the other numbers? Well … As mentioned a recursive function calls itself, so you’ll see that at line 7 we are returning `countdown(n — 1)`. We’re returning the same function that is being executed except this time we are telling to do exactly the same thing but with `n — 1`. Therefore, when we run `countdown(10)`, it executes, prints `10` to the console and then calls `countdown(10–1)` or `countdown(9)`. This runs the same routine: prints `9` to the console and then calls `countdown(9–1)` or `countdown(8)`. And this process is repeated with `8`, and then with `7` and so on. You get the picture.

If we fast-forward, the function stops executing when `n == 0`. Here, we are saying if `n == 0` then return `n`, which is `0`. This is known as a **base case**. Every recursive function must have a base case. If we didn’t, the recursive function would never stop. In our example, without the base case our function would count down for ever and probably crash our computer, so we have to tell when it should stop. Here, we tell it to stop when `n` is `0`. A base case in recursion serves exactly the same purpose as a condition in a while loop. In many respects, recursion is kind of like a loop. In fact, problems that are solved by recursion can also be solved by an iterative approach, which just means that it is using a loop.

### Euclid and Recursion

As mentioned, last time we looked at Euclid’s algorithm to solve the problem of finding the greatest common divisor in two integers. You can read that post [here](https://medium.com/@timrooke1991/gcd-euclid-and-efficient-algorithms-8b83af5325fa). However, the solution we came up with was as follows.

```
def gcd_euclid(a, b):
    
    while b:
        # helper variable to remember the original value of b
        store_b = b
        b = a % b
        a = store_b
      
    return a 
```

In this example, out `gcd_euclid` function accepts two inputs and if `b` is _truthy_ (i.e. not zero), we enter a while loop until `b == 0`. In this loop, we create a variable to remember the value of `b`, we set `b` to the remainder of `a % b`and set `a` to the value of `b` at the beginning of the iteration. We continue this process until `b` is `0`, which means we’ve found a value that divides with a remainder of `0`. As a result, it will return us the greatest common divisor of our two integers. For example, if we passed it `24` and `36`. It would return `12`. `12` is the biggest number to go into **both** our inputs, **24** and **36**. Simple enough.

However, this solution can also be solved recursively. In fact, a recursive solution is probably the most common solution. I have reworked our iterative example into a recursive one.

```
def gcd_recursive(a, b):
    if b == 0:
        return a

    a_primed = a % b
    return gcd_euclid(b, a_primed)
```

Here, the problem solved is exactly the same — find the greatest common divisor between two integers. The only difference is that the solution is recursive and we know this because it calls itself (line 6). The logic is virtually the same as the iterative solution. We’ve got our base case: if `b` is _falsey_ (i.e. zero), then return a. This serves exactly the same purpose as the condition of our while loop in the iterative solution. In the iterative solution, if `b` is _falsey_ (i.e. zero) then we exit the while loop and returned `a`.

The other aspect of this solution is the way we change the values of `a` and `b`. In the iterative function, we simply overwrite the variable values to new values with each loop iteration. In the recursive solution, we instead pass the new values as parameters to the `gcd_recursive` function and return it.

Any recursive function can be implemented in a iterative way and any iterative solution can written in the form of recursion, which begs the question why would you favour one over the other? Well, we can answer that by looking at another example.

### Fibonacci

Fibonacci is a classic interview problem. You have to write a function that returns the _nth_ fibonacci number. The way a fibonacci sequence works is that next number in the sequence is the sum of the previous two numbers. For this to work, we need to start with 2 numbers. The sequence starts with `0` and `1`. An extended fibonacci sequence would look like: `0, 1, 1, 2, 3, 5, 8, 13…` and so on. Our job is to write a function, _fib(n)_, that returns the nth fibonacci number, so _fib(0)_ would return `0` and _fib(5)_ would return `5`.

```
def fib_recursive(n):
    # base case
    if(n <= 1):
        return n
    
    return fib_recursive(n - 2) + fib_recursive(n - 1)
```

This looks pretty neat, but what is it actually doing. The base case returns the value `n`. However, until we hit that base case, we’re return the sum of two functions. This is tricky to get your head around. We can visualise this to make it simpler to understand.

<figure>

![](/media/recursion-recursion-recursion-1.png)

</figure>

Here, we have called the function `fib(5)` initially, so we want the 5th fibonacci sequence. Look at the tree — it spawns off into several function calls. `fib(5)` returns `fib(5–1) + fib(5–2)`, which translates into `fib(4)` and `fib(3)`. Likewise, these call two more functions each — `fib(3)` and `fib(2)` are called by the `fib(4)` invocation and `fib(2)` and `fib(1)` from our `fib(3)` function. With me still? Confusing, right? The only point in the sequence where we return a real value, rather than a function, is when `n ≤ 1`. In this case, we return `n`. These instances are indicated by the blue squares in the image. For `fib(1)`, the function returns `1`. For `fib(0)`, the function returns `0`. If we add all of these numbers together we get: `1 + 0 + 1 + 1 + 0 + 1 + 0 + 1 = 5`. The 5th element in the fibonacci sequence is 5! That’s how it gets the answer!

### Fibonacci: Iterative Approach

As promised, any recursive approach can also be done iteratively, so below we have an iterative solution to the fibonacci problem.

```
def fib_iterative(n):
    if n <= 1:
        return n

    fib_sequence = [0, 1]

    while(len(fib_sequence) <= n):
        fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])

    return fib_sequence[-1]
```

This is a fairly straight forward solution. We have a similar base case to handle inputs that are less than or equal to 1. We then run a while loop until the length of our `fib_sequence` is greater than `n`. With each loop iteration, we append a new value to our `fib_sequence` array, the sum of: `fib_sequence[-1] + fib_sequence[-2]`. These are just the two most recent elements in the array, which create our new fibonacci number. When we exit the loop, we just return the last number in the array.

<figure>

![](/media/recursion-recursion-recursion-2.png)

</figure>

As you, can see the output of the algorithms when passed the input of `10`, we receive the 10th fibonacci number back — both algorithms return `55`. We have two ways to solve the problem.

### Iteration vs. Recursion

For a long time, I assumed blindly that a recursive solution is always the best case. It’s more complicated and more clever, so must result in better performance. However, this is not the case. While theoretically any recursive solution can be solved iteratively and _vice-versa_, the difference in performance of these two respective solutions can differ considerably even though they are tasked with solving the same problem. Let’s look at an example.

<figure>

![](/media/recursion-recursion-recursion-3.png)

</figure>

In the example above, I am asking the algorithm for the 35th fibonacci number. Look at the elapsed time, our iterative solution gets us this in 0.00002 seconds — pretty good! However, our recursive solution takes 5.698 seconds — practically an eternity in computational time! How can two simple solutions to a _fairly_ simple problem differ so drastically in performance?

<figure>

![](/media/recursion-recursion-recursion-4.png)

</figure>

Here’s another recursive fibonacci tree — this time for `fib(7)`. This behaves the same as before, but if you look closely there’s a lot of duplication. For example, `fib(4)` is called 3 times, `fib(3)` 5 times and `fib(2)` 8 times. When we ask for even bigger numbers like `fib(35)`, this problem grows exponentially — we call even more unnecessary functions, which weigh massively on performance. Executing `fib(35)` using our recursive solution results in `29,860,703` function calls! Ridiculous!This shows how a unscalable this recursive solution is in its current implementation. There are ways to deal with this using memoization, which is probably worth its own post.

The iterative solution, by comparison, doesn’t have this type of inefficiency or duplication. For example, if we ask it for `fib(35)` it will loop 35 times, which is well within the computational power of a basic computer.

As seen, performance of your algorithms is massively important. Even simple solutions to something like the fibonacci problem, can come to grinding halt even with seemingly trivial inputs. Next time, we’ll look a bit closer at a slightly robust and recognised way of measuring algorithm performance, particularly on how your algorithms scale.

Until next time.
