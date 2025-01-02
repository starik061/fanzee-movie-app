import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,

  {
    name: 'override-rules',
    rules: {
      // Отключаем правило multi-word-component-names
      'vue/multi-word-component-names': 'off',
    },
  },
];