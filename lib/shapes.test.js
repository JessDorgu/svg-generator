const {Shapes, Square, Triangle, Circle} = require('./shapes.js');


describe('Square' , () => {
    it('Square render method should return the correct svg string', () => {
        const shape = new Square();
        const setColor = 'purple'
        expect(shape.render(setColor)).toEqual('<rect x="10" y="10" width="300" height="300" fill="purple"/>');
    })
})

describe('Triangle' , () => {
    it('Triangle render method should return the correct svg string', () => {
        const shape = new Triangle();
        const setColor = 'blue'
        expect(shape.render(setColor)).toEqual('<polygon points="150,18 244,182 56,182" fill="blue"/>');
    })
})

describe('Circle' , () => {
    it('Circle render method should return the correct svg string', () => {
        const shape = new Circle();
        const setColor = 'green'
        expect(shape.render(setColor)).toEqual('<circle cx="25" cy="75" r="200" fill="green"/>');
    })
})


