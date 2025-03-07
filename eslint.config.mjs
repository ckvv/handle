import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'vue/no-parsing-error': 'off',
  },
  ignores: [
    'dist',
    'node_modules',
    'public',
    'src-tauri',
  ],
})
