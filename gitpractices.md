Team Kitty Counter
Git and GitHub Best Practices </br>

---
General

* Everybody work on different files. Nobody working on the same file at the same time.
* Remember ACP: Add commit push!
* Be careful and deliberate through the process

---
Branches

* Create a branch for each issue wherein the branch name corresponds with the issue name.
* For Example, Imagine issue #1 is titled "Add an about.html page".
The branch name would be 1_add_about_page.


---
Commits

* Add descriptive commit messages with what you changed and why it should be merged.
* Push commits on your branch to the GitHub regularly

---
Pull Requests

* Create a Pull Request for your branch even if you're unsure if it'll be merged into master.

---
Merging Pull Requests to Branches

* Do not merge your own pull request! Have the QA person review your code and they will merge it for you OR have the person assigned to QA your work, QA your work.
* QA person will git 'pull origin branch_name' your branch and examine your branch on their computer. Once successfully examined, the QA person will merge your pull request with your branch.

---
Merging Pull Requests to Mater Branch (Merge Party)

* All team members merge the branch pull requests to master at the same time.
* Merging will occur at least twice a day, at 12 noon (before lunch) and at 5 (before we leave for the day) and as needed.
* Once appropriate branches and updates are merged with the master branch on GitHub, be sure to update your master branch on your computer (be on the master branch of the repo in your command line and git pull origin master)

---
Help Section

* For any Git or GitHub concerns, chat with your team members, Instructor, TAs,  and refer to the CodeFellows 201 course project page: https://canvas.instructure.com/courses/990569/assignments/4340075

* Git tips and tricks: http://rogerdudler.github.io/git-guide/ 
