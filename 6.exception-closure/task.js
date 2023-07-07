function parseCount(a) {
    let result = Number.parseFloat(a);
    if(result === NaN) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(a) {
try {
    let result = parseCount(a);
    if (result) {
        return result;
    }
} catch {
 return new Error("Невалидное значение");
} 

}


class Triangle {
    constructor(a, b, c) {
        this.a  = a;
        this.b  = b;
        this.c  = c;
        if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return (this.a + this.b + this.c);
    }

    get area() {
        const p = 1 / 2 * (this.a + this.b + this.c)
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        return parseFloat(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}