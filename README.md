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

For example, to change the jQuery version to `2.1.1`

```sh
## Submodule configuration
SUBMODULE_TAG=Ember.js                  ## Submodule Git Tag
SUBMODULE_VERSION=1.8.0-beta.5          ## Submodule version to checkout
SUBMODULE_LOCAL_PATH=www/static/js/lib  ## Path to store the submodule
SUBMODULE_LOCAL_NAME=ember              ## Name of the submodule repo and link

## Update .gitmodules
git config -f .gitmodules submodule.$SUBMODULE_LOCAL_PATH/$SUBMODULE_LOCAL_NAME.branch $SUBMODULE_VERSION
## Checkout the new version of the module
git --git-dir .git/modules/$SUBMODULE_LOCAL_PATH/$SUBMODULE_LOCAL_NAME checkout $SUBMODULE_VERSION
## Add the .gitmodules and the submodule to the commit
git add .gitmodules $SUBMODULE_LOCAL_PATH/$SUBMODULE_LOCAL_NAME
## Commit the new version of the module
git commit -m "JavaScript,Libraries,$SUBMODULE_TAG: $SUBMODULE_TAG @ $SUBMODULE_VERSION"
```


## Adding a Library

```sh
## Submodule configuration
SUBMODULE_URL="https://github.com/components/ember.git"
SUBMODULE_TAG=Ember.js                  ## Submodule Git Tag
SUBMODULE_VERSION=1.7.0                 ## Submodule version to checkout
SUBMODULE_LOCAL_PATH=www/static/js/lib  ## Path to store the submodule
SUBMODULE_LOCAL_NAME=ember              ## Name of the submodule repo and link
SUBMODULE_REMOTE_PATH=ember.js          ## Filename in the remote path

## Add the submodule
git submodule add $SUBMODULE_URL $SUBMODULE_LOCAL_PATH/$SUBMODULE_LOCAL_NAME
## Set the .gitmodules branch
git config -f .gitmodules submodule.$SUBMODULE_LOCAL_PATH/$SUBMODULE_LOCAL_NAME.branch $SUBMODULE_VERSION
## Add a newline to the file
echo >> .gitmodules
## Checkout the version
git --git-dir .git/modules/$SUBMODULE_LOCAL_PATH/$SUBMODULE_LOCAL_NAME checkout $SUBMODULE_VERSION

## Link the libray
GIT_DIRECTORY=$(pwd)
cd $SUBMODULE_LOCAL_PATH
ln -s $SUBMODULE_LOCAL_NAME/$SUBMODULE_REMOTE_PATH .
cd $GIT_DIRECTORY

## Add the .gitmodules and the link
git add .gitmodules $SUBMODULE_LOCAL_PATH/$SUBMODULE_LOCAL_NAME*
## Commit the new library
git commit -m "JavaScript,Libraries,$SUBMODULE_TAG: Adding $SUBMODULE_TAG @ $SUBMODULE_VERSION"
```
