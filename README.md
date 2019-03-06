# Fitness Tracker Pro Week 2

## Steps:

1. Let's Deploy to Heroku
  a. [Sign up for a Heroku account](https://signup.heroku.com/)
  b. [Install the Heroku Command-Line Interface (CLI)](https://devcenter.heroku.com/articles/heroku-cli)
    - On macOS / Windows, it is recommended to use the appropriate "Download the installer" options
  c. Confirm heroku CLI is installed (might need to open a new terminal session)
  d. From the project directory, run `heroku create`. Heroku will create `[SOME_SUBDOMAIN].herokuapp.com` for you.
  e. `git remote -v`
    - Notice that, in addition to the `origin` remote, you now also have a `heroku` remote. Whenever you push to that remote repo, Heroku will deploy your changes.
  f. `git push heroku master`
    - You'll see a lot of output in the terminal. That's Heroku getting to work, inspecting your project, finding the `package.json` file, installing any necessary dependencies, and then deploying your code to the domain it created for you.
  g. Go check it out! If you've forgotten what domain Heroku created for you, you can always find it on the [Heroku Dashboard](https://dashboard.heroku.com/apps). You can also use `heroku domains` from the terminal.
    - What about logging? When we run our server locally, we can see the request/response cycle in our terminal. Can we see the Heroku server's logs? Sure! Run `heroku logs --tail`, then start clicking on links and refreshing pages on your deployed site. You'll see that the logs are still happening, they're just not on our personal machine.
  h. Let's take a step back and think about what just happened. We've got some code running on our personal machine, and we shipped that code -- over the internet -- to some computer far far away. That computer is running our code and it is open to the public. This would all feel a lot less mysterious if we could just reach out and touch that computer somehow. We can't do that (we don't even know where it is), but we can do something almost as good: we can run a terminal from within it.
  i. On your terminal, enter `heroku ps:exec` and let it run for a second. You'll probably see something like this:
  ```bash
  Establishing credentials... done
  Connecting to web.1 on ⬢ [YOUR_HEROKU_SUBDOMAIN]...
  ```
  Now you see a prompt, but it probably doesn't look exactly like the prompt you're used to. Play around with the following commands:
  ```bash
  pwd # where am i?
  ls # what is all this?
  whoami # who am i?
  cat README.md # show me something familiar.
  logout # get me out of here!
  ```
