function firstAlphabetUpper(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
module.exports = {
  sortByModulePath(lines) {
    lines.sort((a, b) => {
      const modPathRegexp = /'.+'/;
      const modA = modPathRegexp.exec(a)[0];
      const modB = modPathRegexp.exec(b)[0];

      return modA.localeCompare(modB);
    });

    return lines;
  },
  getComponentName(name) {
    let componentName;
    if (name.includes('-')) {
      componentName = name
        .split('-')
        .map(item => {
          return firstAlphabetUpper(item);
        })
        .join('');
    } else {
      componentName = firstAlphabetUpper(name);
    }
    return componentName;
  }
};
