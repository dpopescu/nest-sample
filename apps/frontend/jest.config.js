module.exports = {
  name: 'apps-frontend',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/apps/frontend',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
