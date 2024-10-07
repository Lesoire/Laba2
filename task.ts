// Завдання 1
interface Animal {
    name: string;
    move(): void;
}

class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is walking.`);
    }
}

class Bird implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is flying.`);
    }
}

class Fish implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is swimming.`);
    }
}

// Завдання 2
interface Shape {
    getArea(): number;
    getPerimeter(): number;
}

class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Triangle implements Shape {
    base: number;
    height: number;
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }
    getArea(): number {
        return 0.5 * this.base * this.height;
    }
    getPerimeter(): number {
        return 3 * this.base;
    }
}

// Завдання 3
abstract class Car {
    make: string;
    model: string;
    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
    abstract display(): void;
}

class Sedan extends Car {
    constructor(make: string, model: string) {
        super(make, model);
    }
    display() {
        console.log(`Sedan:git init ${this.make} ${this.model}`);
    }
}

class SUV extends Car {
    constructor(make: string, model: string) {
        super(make, model);
    }
    display() {
        console.log(`SUV: ${this.make} ${this.model}`);
    }
}

class Truck extends Car {
    constructor(make: string, model: string) {
        super(make, model);
    }
    display() {
        console.log(`Truck: ${this.make} ${this.model}`);
    }
}

// Завдання 4
abstract class Employee {
    name: string;
    age: number;
    salary: number;
    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    abstract getAnnualBonus(): number;
}

class Developer extends Employee {
    getAnnualBonus(): number {
        return this.salary * 0.1;
    }
}

class Manager extends Employee {
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }
}

interface Payable {
    pay(): void;
}

class PayableDeveloper extends Developer implements Payable {
    pay() {
        console.log(`${this.name} has been paid.`);
    }
}

class PayableManager extends Manager implements Payable {
    pay() {
        console.log(`${this.name} has been paid.`);
    }
}

// Завдання 5
interface Course {
    courseName: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course {
    courseName: string;
    duration: number;
    students: string[];
    constructor(courseName: string, duration: number) {
        this.courseName = courseName;
        this.duration = duration;
        this.students = [];
    }
    registerStudent(student: string) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
    }
    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    courses: Course[];
    constructor() {
        this.courses = [];
    }
    addCourse(course: Course) {
        this.courses.push(course);
    }
    removeCourse(courseName: string) {
        this.courses = this.courses.filter(course => course.courseName !== courseName);
    }
    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.courseName === courseName);
    }
}

// Завдання 6
interface LibraryItem {
    title: string;
    author: string;
    borrow(): void;
}

class Book implements LibraryItem {
    title: string;
    author: string;
    pages: number;
    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    borrow() {
        console.log(`${this.title} by ${this.author} has been borrowed.`);
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    issueNumber: number;
    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow() {
        console.log(`${this.title} by ${this.author} has been borrowed.`);
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    duration: number;
    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    borrow() {
        console.log(`${this.title} by ${this.author} has been borrowed.`);
    }
}

class Library {
    items: LibraryItem[];
    constructor() {
        this.items = [];
    }
    addItem(item: LibraryItem) {
        this.items.push(item);
    }
}

// Виконання завдань
const cat = new Cat("Whiskers");
const bird = new Bird("Tweety");
const fish = new Fish("Goldie");

cat.move();
bird.move();
fish.move();

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4);

console.log(`Circle area: ${circle.getArea()}, perimeter: ${circle.getPerimeter()}`);
console.log(`Rectangle area: ${rectangle.getArea()}, perimeter: ${rectangle.getPerimeter()}`);
console.log(`Triangle area: ${triangle.getArea()}, perimeter: ${triangle.getPerimeter()}`);

const sedan = new Sedan("Toyota", "Camry");
const suv = new SUV("Honda", "CR-V");
const truck = new Truck("Ford", "F-150");

sedan.display();
suv.display();
truck.display();

const dev = new PayableDeveloper("Alice", 30, 50000);
const mgr = new PayableManager("Bob", 40, 70000);

dev.pay();
mgr.pay();

const course1 = new OnlineCourse("TypeScript Basics", 10);
const course2 = new OnlineCourse("Advanced TypeScript", 20);

course1.registerStudent("John Doe");
course2.registerStudent("Jane Smith");

const courseManager = new CourseManager();
courseManager.addCourse(course1);
courseManager.addCourse(course2);

console.log(courseManager.findCourse("TypeScript Basics"));

const book = new Book("1984", "George Orwell", 328);
const magazine = new Magazine("National Geographic", "Various", 202);
const dvd = new DVD("Inception", "Christopher Nolan", 148);

const library = new Library();
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);

book.borrow();
magazine.borrow();
dvd.borrow();
