/**

 Copyright 2023 University of Denver

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

const MODEL = require('../app/model');

exports.home = function (req, res) {
    res.render('index', {});
};

exports.create = function (req, res) {
    let record = req.body.record;
    MODEL.create(record, function (data) {
        res.status(data.status).send(data.data);
    });
};

exports.read = function (req, res) {

    let id = req.query.id;

    MODEL.read(id, function (data) {
        res.status(data.status).send(data.data);
    });
};

exports.update = function (req, res) {

    let id = req.body.id;
    let record = req.body.record;

    MODEL.update(id, record, function (data) {
        res.status(data.status).send(data.data);
    });
};

exports.delete = function (req, res) {
    MODEL.delete(req, function (data) {
        res.status(data.status).send(data.data);
    });
};