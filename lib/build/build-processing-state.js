"use strict";
/**
 * This file is part of the node-appstore-connect distribution.
 * Copyright (c) e.GO Digital GmbH, Aachen, Germany (https://www.e-go-digital.com/)
 *
 * node-appstore-connect is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * node-appstore-connect is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildProcessingState = void 0;
var BuildProcessingState;
(function (BuildProcessingState) {
    // Unknown occurs when build does not show up either because it does not exist or because it is not yet shown
    BuildProcessingState["UNKNOWN"] = "UNKNOWN";
    BuildProcessingState["PROCESSING"] = "PROCESSING";
    BuildProcessingState["FAILED"] = "FAILED";
    BuildProcessingState["INVALID"] = "INVALID";
    BuildProcessingState["VALID"] = "VALID";
})(BuildProcessingState = exports.BuildProcessingState || (exports.BuildProcessingState = {}));
//# sourceMappingURL=build-processing-state.js.map