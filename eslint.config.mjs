import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'antfu/no-top-level-await': 'off',
  },
  ignores: [
    '**/CharBlock.vue',
    'dist',
    'node_modules',
    'public',
    'src-tauri',
  ],
})
