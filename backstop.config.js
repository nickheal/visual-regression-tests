const referenceGitSha = process.env.APP_REFERENCE_GIT_SHA
const currentGitSha = process.env.APP_CURRENT_GIT_SHA

if (!referenceGitSha) throw new Error('No reference GIT SHA provided.');
if (!currentGitSha) throw new Error('No GIT SHA provided for this commit.');

module.exports = {
  id: "backstop_default",
  viewports: [
    {
      label: "phone",
      width: 320,
      height: 480
    },
    {
      label: "tablet",
      width: 1024,
      height: 768
    },
    {
      label: "desktop",
      width: 1920,
      height: 1080
    }
  ],
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  scenarios: [
    {
      label: "Homepage",
      cookiePath: "backstop_data/engine_scripts/cookies.json",
      url: "http://localhost:3000",
      referenceUrl: "",
      readyEvent: "",
      readySelector: "",
      delay: 0,
      hideSelectors: [],
      removeSelectors: [],
      hoverSelector: "",
      clickSelector: "",
      postInteractionWait: 0,
      selectors: [],
      selectorExpansion: true,
      expect: 0,
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    }
  ],
  paths: {
    bitmaps_reference: `backstop_data/bitmaps_test/${referenceGitSha}`,
    bitmaps_test: `backstop_data/bitmaps_test/${currentGitSha}`,
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report"
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
}
