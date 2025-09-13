import { resolve as tsResolve } from 'eslint-import-resolver-typescript'
import path from 'node:path'

const EXTENSION_REGEX = /\.[jt]sx?$/

const rule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow alias imports when a relative import would work in the same folder',
    },
    schema: [],
    fixable: 'code',
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const importPath = node.source.value
        if (typeof importPath !== 'string') return

        // only check aliased imports
        if (!importPath.startsWith('@')) return

        // ignore linting from stdin
        const filename = context.filename
        if (!filename || filename === '<input>') return

        // resolve imported module actual path
        let resolved
        try {
          const result = tsResolve(importPath, filename)
          resolved = result?.found ? result.path : null
        } catch {
          return // ignore if cannot resolve
        }

        if (!resolved) return

        const importDir = path.dirname(resolved)
        const fileDir = path.dirname(filename)

        if (importDir === fileDir) {
          context.report({
            node,
            message: `Use relative import instead of alias`,
            fix(fixer) {
              let relativePath = path.relative(fileDir, resolved)

              // strip extension if not present in original import
              if (!importPath.match(EXTENSION_REGEX)) {
                relativePath = relativePath.replace(EXTENSION_REGEX, '')
              }

              return fixer.replaceText(node.source, `'./${relativePath}'`)
            },
          })
        }
      },
    }
  },
}

export default rule
