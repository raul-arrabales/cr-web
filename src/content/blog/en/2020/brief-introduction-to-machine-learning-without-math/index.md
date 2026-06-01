---
title: "Brief Introduction to Machine Learning (no maths)"
date: 2020-11-28
categories: 
  - "artificial-intelligence"
tags: 
  - "learning"
  - "machine-learning"
---

<img src="/legacy-images/images/ML_800.png" alt="" />

### The discipline of Machine Learning focuses on the study and development of algorithms that learn from data.

* * *

To understand how Machine Learning works, **you must first understand the concept of algorithm**. Bear in mind that there are many types of algorithms, but not all of them are capable of generating learning. We will see below what we understand by algorithm in general, and then go on to discover what is special about algorithms that learn.

An algorithm is nothing more than **a list of instructions (like a cooking recipe)** that, in the case of computing, can be executed by a computer:

<img src="/legacy-images/images/ML-fig1-en.png" alt="" />

In other words, an algorithm is nothing more than a kind of “pre-programmed intelligence”. Like a cooking recipe, it contains the information necessary to make, for example, a Spanish omelette. In this case, the schema would be:

<img src="/legacy-images/images/ML-fig2-en.png" alt="" />

It is clear from the previous example that if I don't have potatoes or eggs, no matter how good recipes I have, I'm not going to get a Spanish omelette. That is why, in the world of data analysis, we place much more importance on the quality of the data than on the algorithms themselves.

Although there are different types of instructions that a computer can execute, we can simplify by thinking that most of the instructions are just rules. The rules usually take the following form:

```
IF (<condition>) IS TRUE THEN 
    DO (<action 1>) 
ELSE 
    DO (<action 2>) 
```

In our example of a recipe to make potato omelette, we could find rules of this style:

```
IF (<potatoes have beautiful golden color>) IS TRUE THEN
    DO (<remove the potatoes from pan>)
ELSE
    DO (<keep them frying in the pan>)
```

Of course, there are many other more complex ways of expressing rules, as well as specifying conditions and actions, but we don't need to go into detail. The important thing is that **a set of well-written rules in the proper order constitutes an algorithm** that is to be used to automate a process.

We could, for example, want **to automate the process of personalizing ads** on a web page, so that users who are browsing the site with an Android mobile are shown an offer of a new Samsung phone, while users who are browsing the site with another operating system, they are shown an ad of a new Apple phone:

```
IF (<user using Android>) IS TRUE THEN
    DO (<show Samsung ad>)
ELSE
    DO (<show Apple ad>)
```

The previous rule constitutes an algorithm in itself. It is a single rule algorithm. As you can imagine, there are much more complex algorithms, with thousands or millions of rules. In any case, t**hese types of algorithms do not learn**, they are simply composed of **fixed and pre-programmed rules**. That is, the intelligence they show originates from the person who originally wrote the rules.

### If you have a problem for which you know well the rules that must be applied to obtain the solution, then you do not need Machine Learning.

In that case you simply need someone to program the recipe (the algorithm). For example, if a banking analyst analyzes the data of the last loans granted and observes that 94% of the clients who earned less than 700 Euros per month did not repay the loan, they will simply have to write this rule:

```
IF (<the applicant earns less than 700 EUR>) IS TRUE THEN
    DO (<reject loan>)
ELSE
    DO (<keep analyzing risk of non-payment>)
```

Obviously the previous rule is not infallible, in fact, statistics tell us that this algorithm will be wrong 6% of the time (based on the experience that the condition is true 94% of the time). But hey, maybe a 94% success rate is acceptable for your business. In that case, you are done, you don't need to apply Machine Learning. The rules you already know are enough for you to run an algorithm that helps you make decisions.

So when does it make sense to harness the power of Machine Learning? Mainly, in two cases:

1. When you don't know a priori the rules or the pattern that would help you make a decision or automate a process.
2. When the rules or conditions are constantly changing and, therefore, you would not have time to be programming by hand the rules that are most effective at all times.

In other words, **learning is a function that enables intelligent beings to adapt to a complex and changing environment**. If your business problem is more or less stable, well known and relatively simple, you do not need to learn, you can continue indefinitely applying the same rules that have served you in the past. In that case, the smart thing is to follow the tradition, it helps you to continue applying the classic recipe over and over again.

However, for good or for bad, we live in a complex and changing world. It is precisely for this reason that humans need our own learning function. The rules that served us yesterday, today no longer provide the same results. Something similar happens in the field of digital ecosystems. For example, to effectively personalize the content of a web page or mobile application, **it is no longer enough to apply a series of pre-programmed rules**. Obviously, it can be done like this, or I can even offer static and identical content for all users, but maybe that's not a very smart wat to go…

It is in this context in which Machine Learning is applied, **when a pre-programmed intelligence no longer solves the problem, then I need a self-programming intelligence**. In this sense, Machine Learning algorithms are nothing more than algorithms whose output is more rules, not direct results:

<img src="/legacy-images/images/ML-fig3-en.png" alt="" />

The big difference is that **the Machine Learning algorithm generates another algorithm (which we call a "model")**, which is nothing more than a new set of rules. The interesting thing is that **these new rules have not been written or pre-programmed by a human**, but have been directly calculated by another algorithm.

Understanding in detail how an algorithm can learn by itself requires advanced knowledge of statistics, mathematics, and computer science. For this reason, the professional profile that is dedicated to carrying out these tasks - the data scientist - tends to have very advanced technical training. However, we can summarize, at an intuitive level, which are the rules that the machine learning algorithm itself executes, that is, **the preprogrammed rules that generate new learned rules**:

```
REPEAT CONTINUOUSLY: 
   IF (<I have a good rule for this situation>) IS TRUE THEN
      DO (<apply this "good rule">)
   ELSE 
      DO (<generate "New Random Rule" (NRR)>)
      DO (<obtain the result of applying this NRR>)
      IF (<a good result is obtained>) IS TRUE THEN
         DO (<save NRR for use in similar cases>)
      ELSE
         DO (<discard this random rule>)
```

In short, Machine Learning algorithms follow the same principles as many animals, including humans: when they don't know what to do, they do something randomly, that is, **they use a "trial and error" strategy**. When what they do succeeds, they tend to repeat it, while actions resulting in failure are not likely to be used again. For this reason, when we act as educators, we reward those behaviors of others that we like and punish those actions that don't seem appropriate. In this way, the person, animal or machine that receives the rewards and punishments can adapt their learned rules (their internal model).

Finally, let's see how the learning algorithm would look in some specific cases of ad personalization for a web page:

```
[EXAMPLE CASE 1: 19 years old male user]
- Step 1. There are rules in the model matching this case.
- Step 2. Select rule 997237 from the model.
- Step 3. Execute rule 997237 ("if gender is male and age under 25 then show video game ad").
- Step 4. Obtain the result from the execution (user clicks the add --> REWARD).
- Step 5. Increase priority of rule 997237.

----------------------

[EXAMPLE CASE 2: 34 years old female user]
- Step 1. There's no rule in the model for this situation.
- Step 2. Invent new random rule (NRR-324351).
- Step 3. Execute rule NRR-324351 ("if the gender is female and the age is over 30 then show the radio controlled car ad").
- Step 4. Obtain the result from the execution (user leaves the site -> PUNISHMENT).
- Step 5. Discard rule NRR-324351.
```

In the first case, the model (the set of rules already learned) contained a rule well fitted to the situation and therefore the action that had worked well on other occasions was performed. In the second case, the model did not have any rule applicable to the situation, so it was decided to generate a new random rule to be evaluated.

After thousands and thousands of interactions of this type, in which the algorithm receives information about the success of self-programmed rules, we will have a model that in most cases knows what to do, and also performs the most appropriate action (provided that we had a good set of training situations, i.e, a good education).
