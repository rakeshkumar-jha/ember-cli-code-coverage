module.exports = () => ({
  registry: 'git+ssh://git@github.com/rakeshkumar-jha/ember-cli-code-coverage.git',
  getTagName: pkg => `${pkg.name}-v${pkg.version}-gitpkg`
});
