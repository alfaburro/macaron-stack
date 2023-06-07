/*
 * Copyright Fastly, Inc.
 * Licensed under the MIT license. See LICENSE file for details.
 */

/** @type {import('@fastly/compute-js-static-publish').StaticPublisherConfig} */

export default {
  rootDir: "./",
  excludeDirs: [ './node_modules', ],
  includeDirs: [ './build', './public' ],
  moduleAssetInclusionTest: function(path) {
    if (path.endsWith('/remix.config.js') || path.endsWith('/remix.config.mjs')) {
      return true;
    }
    return path.indexOf('/build/') === 0 && !path.endsWith('.map');
  },
  server: {
    staticItems : [ './public/build' ],
    autoIndex: [],
    autoExt: [],
  },
};
