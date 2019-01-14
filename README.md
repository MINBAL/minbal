### Install

  1. Run `gem install middleman` (only for intial setup)

  2. Run `bundle install` to make sure all the things are there (this only needs to be done for intial setup or if new packages have been added 

### Running the site locally

  1. Always start with a fresh branch of master by running `git pull` to pickup any changes that have been made. 

  2. Run `middleman` to develop on your local machine 

          go to http://localhost:4567 to see your site. It should automatically rerfresh after any changes habe been made and saved in the text editor of your choice.
          
### Commiting your changes

  1. Run `git add .` to stage any new files that have been created
  
  2. Run `git ci -am "message about change being made"` to commit those files to master branch
  
  3. Run `git push` to push your changes to the remote master branch on github (this will not update the site, see below)

### Deploy to gh-pages

  1. Run `middleman deploy` this build your website in a folder called `source` and then deploy that folder to production. It may take 5-10 minutes to see the changes in production. 
