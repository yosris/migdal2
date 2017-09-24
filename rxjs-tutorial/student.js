"use strict";
/**
 * Created by yarivkatz on 18/09/2017.
 */
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(json) {
        this.id = -1;
        this.name = '';
        this.age = 0;
        this.id = json.id || -1;
        this.name = json.name || "";
        this.age = json.age || 0;
    }
    return Student;
}());
exports.Student = Student;
