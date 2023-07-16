export default {
  preset: 'react-native',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/app/$1',
    '^@app/theme/(.*)$': '<rootDir>/theme/$1',
    '^@app/components/(.*)$': '<rootDir>/components/$1',
    '^@app/routes/(.*)$': '<rootDir>/routes/$1',
    '^@proj/assets/(.*)$': '<rootDir>/assets/$1',
  },
};
