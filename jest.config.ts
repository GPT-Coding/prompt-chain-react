const ignores = [
  '/node_modules/',
  '/__fixtures__/',
  '/fixtures/',
  '/__tests__/helpers/',
  '/__tests__/utils/',
  '__mocks__',
  '/infra/',
];

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },

  roots: ['<rootDir>/src'],
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  modulePaths: ['<rootDir>/src', 'shared', '<rootDir>/tests'],
  collectCoverageFrom: ['src/**/*.+(js|jsx|ts|tsx)', '!src/**/*.d.ts'],
  testMatch: ['**/__tests__/**/*.+(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: [...ignores],
  coveragePathIgnorePatterns: [
    ...ignores,
    'src/(umd|cjs|esm)-entry.js$',
    'App.tsx',
    'main.tsx',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};
