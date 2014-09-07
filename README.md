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
## Set the jQuery version
JQUERY_VERSION=2.1.1

## Update .gitmodules
git config -f .gitmodules submodule.www/static/js/lib/jquery.branch $JQUERY_VERSION
## Checkout the new version of jQuery
git --git-dir .git/modules/www/static/js/lib/jquery checkout $JQUERY_VERSION
## Add the .gitmodules and the submodule to the commit
git add .gitmodules www/static/js/lib/jquery
## Commit the new version of jQuery
git commit -m "JavaScript,Libraries,jQuery: jQuery @ $JQUERY_VERSION"
```
