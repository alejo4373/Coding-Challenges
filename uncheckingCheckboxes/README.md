# uncheckingCheckboxes

A small front-end challenge to check and uncheck all checkboxes in a web page.

## Back Story

I use [Strava](https://www.strava.com/), a kind of social media platform and community for athletes. Users can share their fitness activities and stats there, you can comment and kudos (like) them etc. I like it because seeing that friends and coworkers of mine are physically active helps me be more active.

I have the Strava mobile app installed where I get notifications when friends react to any of my activities etc. The problem I had was that strava was sending me push notifications but also emails with the same information. I wanted to unsubscribe from their emails but they had a lot of checkboxes for me to uncheck, one per each type of notification, I wanted to unsubscribe from all.

I wrote this [LinkedIn Post](https://www.linkedin.com/posts/alejandro-franco_little-moments-that-remind-me-that-being-activity-6764023070257618944-aZ-7) out it. ⚠️ It shows one of the solutions.

## Challenge

Add a button called `Unsubscribe from All` that executes a function to uncheck all checkboxes at once.
A copy of the Strava page with its checkboxes is in [./index.html](./index.html) add a script to this HTML file to accomplish this.
![unchecking all checkboxes by clicking Unsubscribe from All button](https://media.giphy.com/media/AUlsgFZB2E5jR2ivX1/giphy.gif)

💡 Your solution should not require any code change if a new checkbox is added later on to the page.

**Bonus**: Have the checkboxes uncheck with a slight visual delay when the button is pressed.

<details>
<summary>See sample</summary>

![unchecking all checkboxes by clicking Unsubscribe from All button with delay](https://media.giphy.com/media/zA19R4hlUAplzZfq9d/giphy.gif)
</details>

**Bonus 2**: Have the button text change to `Subscribe to All` and make it so that clicking the button checks all checkboxes after they have been unchecked.

## Submission

Submit your solution by putting it into a file that has the following format:

```js
// Challenge ID: uncheckingCheckboxes
// Your Name: Alejandro Franco
// Your Solution (below this line):
function log() {
  // This is an example solution code
  console.log('hello')
}
```

Format is important, colons[:] and newlines are used as separators. Make sure you have them as seen above.

The name of the challenge must be `uncheckingCheckboxes`. Your code should always start on line 4.

To submit execute the following command in the terminal:

```sh
curl https://submit-solutions.herokuapp.com/submissions --data-binary @<PATH_TO_SOLUTION_FILE> -H 'Content-Type: text/plain'
```

For example, if your solution is in a file called `mySolution.js` you would do:

```sh
curl https://submit-solutions.herokuapp.com/submissions --data-binary @mySolution.js -H 'Content-Type: text/plain'
```

## Solutions

See [./solution.js](./solution.js) & [./bonusSolution.js](./bonusSolution.js) for solutions. Of course we will need to add one of them in a `<script>` tag to the html
