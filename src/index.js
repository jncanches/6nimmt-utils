import React, {Component} from 'react'

export default class extends Component {
    static getWeightFromFaceValue(faceValue) {
        var weight = 0;
        if (faceValue % 11 === 0) {
            weight += 5;
        }
        if (faceValue % 10 === 5) {
            weight += 2;
        }
        if (faceValue % 10 === 0) {
            weight += 3;
        }
        return weight || 1;
    }

    render() {
    }
};