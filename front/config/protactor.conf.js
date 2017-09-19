exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  specs: ['../e2e-spec.ts']
};
