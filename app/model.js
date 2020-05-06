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

const LOGGER = require('../libs/log4'),
    DB = require('../config/db')(),
    TABLE = 'tbl_records';

/**
 * Creates record
 * @param req
 * @param callback
 */
exports.create = function (req, callback) {

    DB(TABLE)
        .insert(record)
        .then(function (data) {
            callback({
                status: 201,
                message: 'Record created.'
            });
        })
        .catch(function (error) {
            LOGGER.module().error('FATAL: Unable to create record ' + error);
            throw 'FATAL: Unable to create record ' + error;
        });
};

/**
 * Reads record
 * @param req
 * @param callback
 */
exports.read = function (req, callback) {

    DB(TABLE)
        .select('*')
        .where({
            id: req.query.id
        })
        .then(function (data) {

            callback({
                status: 200,
                message: 'Record retrieved.',
                data: data
            });

        })
        .catch(function (error) {
            LOGGER.module().fatal('FATAL: Unable to read record ' + error);
            throw 'FATAL: Unable to read record ' + error;
        });
};

/**
 * Updates record
 * @param req
 * @param callback
 */
exports.update = function (req, callback) {

    DB(TABLE)
        .where({
            id: req.body.id
        })
        .update({
           record_name: 'meow'
        })
        .then(function (data) {

            if (data === 1) {

                callback({
                    status: 200,
                    message: 'Record updated.'
                });
            }

        })
        .catch(function (error) {
            LOGGER.module().fatal('FATAL: Unable to update record ' + error);
            throw 'FATAL: Unable to update record ' + error;
        });
};

/**
 * Deletes records
 * @param req
 * @param callback
 */
exports.delete = function (req, callback) {

    DB(TABLE)
        .where({
            id: req.query.id
        })
        .del()
        .then(function (data) {

            callback({
                status: 204,
                message: 'Record deleted.'
            });

        })
        .catch(function (error) {
            LOGGER.module().fatal('FATAL: Unable to delete record ' + error);
            throw 'FATAL: Unable to delete record ' + error;
        });
};