# Using This forked repo of ember-cli-code-coverage (https://github.com/kategengler/ember-cli-code-coverage) for the freshrelease app

## Please follow below step to publish as tag in github and install in the app
- git switch to branch ```exclude_in_repo_addon_app_dir```
- Install ```npm install -g gitpkg``` (https://github.com/ramasilveyra/gitpkg)
- add the version that will be used while publishing as tag in github
- Go to ```packages/ember-cli-code-coverage```directory
- run the ```gitpkg publish```

Please check tags it will be generate a tag like below

```ember-cli-code-coverage-v<version>-gitpkg```

---
NOTE: 

 This will not be required once we update to upper version of ember-cli-code-coverage
 
---
