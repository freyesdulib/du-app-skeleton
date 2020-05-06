/**

 Copyright 2020 University of Denver

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */

'use strict';

const DUAPP = require('../app/controller'),
    TOKEN = require('../libs/tokens');

module.exports = function (app) {

    app.route('/api/app')
        .post(TOKEN.verify, DUAPP.create)
        .get(TOKEN.verify, DUAPP.read)
        .put(TOKEN.verify, DUAPP.update)
        .delete(TOKEN.verify, DUAPP.delete);
};