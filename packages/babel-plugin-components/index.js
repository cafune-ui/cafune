const MODULE_NAME = 'components';
export default function alterImport(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      CallExpression(path) {
        const { node } = path;
        if (
          t.isIdentifier(node.callee, { name: 'require' }) &&
          node.arguments &&
          node.arguments.length === 1
        ) {
          const source = node.arguments[0];
          if (t.isStringLiteral(source, { value: MODULE_NAME })) {
            throw path.buildCodeFrameError(
              `require('${MODULE_NAME}') is not allowed, use import { ... } from '${MODULE_NAME}'`
            );
          }
        }
      },

      ImportDeclaration(path, state) {
        const { node } = path;
        if (t.isStringLiteral(node.source, { value: MODULE_NAME })) {
          const { specifiers } = node;
          const specifierCount = specifiers.length;
          if (specifierCount === 0) {
            throw path.buildCodeFrameError(
              `Side-effect only import is allowed in ${MODULE_NAME}.'`
            );
          }

          const replacement = specifiers.reduce((r, sp) => {
            if (t.isImportNamespaceSpecifier(sp)) {
              throw path.buildCodeFrameError(
                `Namespace import is not allowed in ${MODULE_NAME}, pick the components you need.`
              );
            }

            if (t.isImportDefaultSpecifier(sp)) {
              throw path.buildCodeFrameError(
                `There is no default export in ${MODULE_NAME}.`
              );
            }
            if (t.isImportSpecifier(sp)) {
              return r.concat(buildImportReplacement(sp, t, state, path));
            }

            return r;
          }, []);
          const { opts: options } = state;
          if (options.noModuleRewrite) {
            path.insertAfter(replacement);
          } else {
            path.replaceWithMultiple(replacement);
          }
        }
      }
    }
  };
}

function buildImportReplacement(specifier, types, state, originalPath) {
  initModuleMappingAsNecessary(state);

  const importedName = specifier.imported.name;
  const localName = specifier.local.name;
  const replacement = [];
  const { opts: options, data } = state;

  if (data.MODULE_MAPPING.hasOwnProperty(importedName)) {
    const { noModuleRewrite } = options;
    const rule = data.MODULE_MAPPING[importedName];

    // js
    if (!noModuleRewrite) {
      replacement.push(
        types.importDeclaration(
          [types.importDefaultSpecifier(types.identifier(localName))],
          types.stringLiteral(rule.js)
        )
      );
    }
  } else {
    throw originalPath.buildCodeFrameError(
      `No export named '${importedName}' found in Qiujiang.`
    );
  }

  return replacement;
}

function initModuleMappingAsNecessary(state) {
  if (!state.data) {
    state.data = {};
  }

  const data = state.data;
  if (!data.MODULE_MAPPING) {
    const moduleMappingFile = `${process.cwd()}/src/components/mapping.json`;

    // eslint-disable-next-line
    data.MODULE_MAPPING = require(moduleMappingFile);
  }
}
