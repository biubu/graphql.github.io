/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');

export default () =>
  <div className="algolia-search-wrapper">
    <input id="algolia-search-input" type="text" placeholder="搜索文档..." aria-label="搜索文档" />
  </div>
