var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " is walking."));
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " is flying."));
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " is swimming."));
    };
    return Fish;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getArea = function () {
        return 0.5 * this.base * this.height;
    };
    Triangle.prototype.getPerimeter = function () {
        // Simplified for equilateral triangle
        return 3 * this.base;
    };
    return Triangle;
}());
// Завдання 3
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    return Car;
}());
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(make, model) {
        return _super.call(this, make, model) || this;
    }
    Sedan.prototype.display = function () {
        console.log("Sedan: ".concat(this.make, " ").concat(this.model));
    };
    return Sedan;
}(Car));
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(make, model) {
        return _super.call(this, make, model) || this;
    }
    SUV.prototype.display = function () {
        console.log("SUV: ".concat(this.make, " ").concat(this.model));
    };
    return SUV;
}(Car));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model) {
        return _super.call(this, make, model) || this;
    }
    Truck.prototype.display = function () {
        console.log("Truck: ".concat(this.make, " ").concat(this.model));
    };
    return Truck;
}(Car));
// Завдання 4
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.1;
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.2;
    };
    return Manager;
}(Employee));
var PayableDeveloper = /** @class */ (function (_super) {
    __extends(PayableDeveloper, _super);
    function PayableDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayableDeveloper.prototype.pay = function () {
        console.log("".concat(this.name, " has been paid."));
    };
    return PayableDeveloper;
}(Developer));
var PayableManager = /** @class */ (function (_super) {
    __extends(PayableManager, _super);
    function PayableManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayableManager.prototype.pay = function () {
        console.log("".concat(this.name, " has been paid."));
    };
    return PayableManager;
}(Manager));
var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(courseName, duration) {
        this.courseName = courseName;
        this.duration = duration;
        this.students = [];
    }
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
    };
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        return this.students.includes(student);
    };
    return OnlineCourse;
}());
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    CourseManager.prototype.removeCourse = function (courseName) {
        this.courses = this.courses.filter(function (course) { return course.courseName !== courseName; });
    };
    CourseManager.prototype.findCourse = function (courseName) {
        return this.courses.find(function (course) { return course.courseName === courseName; });
    };
    return CourseManager;
}());
var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    Book.prototype.borrow = function () {
        console.log("".concat(this.title, " by ").concat(this.author, " has been borrowed."));
    };
    return Book;
}());
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    Magazine.prototype.borrow = function () {
        console.log("".concat(this.title, " by ").concat(this.author, " has been borrowed."));
    };
    return Magazine;
}());
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    DVD.prototype.borrow = function () {
        console.log("".concat(this.title, " by ").concat(this.author, " has been borrowed."));
    };
    return DVD;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
    };
    return Library;
}());
// Виконання завдань
var cat = new Cat("Whiskers");
var bird = new Bird("Tweety");
var fish = new Fish("Goldie");
cat.move();
bird.move();
fish.move();
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
var triangle = new Triangle(3, 4);
console.log("Circle area: ".concat(circle.getArea(), ", perimeter: ").concat(circle.getPerimeter()));
console.log("Rectangle area: ".concat(rectangle.getArea(), ", perimeter: ").concat(rectangle.getPerimeter()));
console.log("Triangle area: ".concat(triangle.getArea(), ", perimeter: ").concat(triangle.getPerimeter()));
var sedan = new Sedan("Toyota", "Camry");
var suv = new SUV("Honda", "CR-V");
var truck = new Truck("Ford", "F-150");
sedan.display();
suv.display();
truck.display();
var dev = new PayableDeveloper("Alice", 30, 50000);
var mgr = new PayableManager("Bob", 40, 70000);
dev.pay();
mgr.pay();
var course1 = new OnlineCourse("TypeScript Basics", 10);
var course2 = new OnlineCourse("Advanced TypeScript", 20);
course1.registerStudent("John Doe");
course2.registerStudent("Jane Smith");
var courseManager = new CourseManager();
courseManager.addCourse(course1);
courseManager.addCourse(course2);
console.log(courseManager.findCourse("TypeScript Basics"));
var book = new Book("1984", "George Orwell", 328);
var magazine = new Magazine("National Geographic", "Various", 202);
var dvd = new DVD("Inception", "Christopher Nolan", 148);
var library = new Library();
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);
book.borrow();
magazine.borrow();
dvd.borrow();
