# Static Site Boilerplate
#### A simple boilerplate for static sites

Boilerplate includes;

- Grunt Utilities + Watchers
- SASS + Compass Framework
- Consistent static directory structure
- jQuery as a git submodule


## Cloning

To clone the repository, use 
`git clone --recursive <url>`
to ensure git submodules included.


## Changing Library Versions

Libraries are included as [git submodules](http://git-scm.com/docs/git-submodule).

This makes for easy library version management, and keeps the commits cleaner.

For example, to checkout `Ember.js @ 1.8.0-beta.5`

```sh
## Submodule configuration
SUBMODULE_NAME=ember                ## Name of the submodule
SUBMODULE_VERSION=1.8.0-beta.5      ## Submodule version to checkout
SUBMODULE_TAG=Ember.js              ## Submodule Git tag, for $ git log --grep
SUBMODULE_PATH=www/static/js/lib    ## Path to submodules

## Update .gitmodules
git config -f .gitmodules submodule.$SUBMODULE_PATH/$SUBMODULE_NAME.branch $SUBMODULE_VERSION
## Checkout the new version of the module
git --git-dir .git/modules/$SUBMODULE_PATH/$SUBMODULE_NAME checkout $SUBMODULE_VERSION
## Add the .gitmodules and the submodule to the commit
git add .gitmodules $SUBMODULE_PATH/$SUBMODULE_NAME
## Commit the new version of the module
git commit -m "JavaScript,Libraries,$SUBMODULE_TAG: $SUBMODULE_TAG @ $SUBMODULE_VERSION"
```


## Adding a Library

Libraries are easy to include with the following script, as well

For example, to add `Ember.js @ 1.7.0`

```sh
## Submodule configuration
SUBMODULE_URL="https://github.com/components/ember.git"
SUBMODULE_NAME=ember                ## Name of the submodule
SUBMODULE_VERSION=1.7.0             ## Submodule version to checkout
SUBMODULE_TAG=Ember.js              ## Submodule Git tag, for $ git log --grep
SUBMODULE_PATH=www/static/js/lib    ## Path to submodules

## Add the submodule
git submodule add $SUBMODULE_URL $SUBMODULE_PATH/$SUBMODULE_NAME
## Set the .gitmodules branch
git config -f .gitmodules submodule.$SUBMODULE_PATH/$SUBMODULE_NAME.branch $SUBMODULE_VERSION
## Add a newline to the file
echo >> .gitmodules
## Checkout the version
git --git-dir .git/modules/$SUBMODULE_PATH/$SUBMODULE_NAME checkout $SUBMODULE_VERSION

## Link the libray
GIT_DIRECTORY=$(pwd)
cd $SUBMODULE_PATH
ln -s $SUBMODULE_NAME/$SUBMODULE_NAME.js .
cd $GIT_DIRECTORY

## Add the .gitmodules and the link
git add .gitmodules $SUBMODULE_PATH/$SUBMODULE_NAME*
## Commit the new library
git commit -m "JavaScript,Libraries,$SUBMODULE_TAG: Adding $SUBMODULE_TAG @ $SUBMODULE_VERSION"
```
