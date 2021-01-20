class Cuboid {
    constructor(length, width, height) {
        this.l = length;
        this.w = width;
        this.h = height;
    }
    volume() {
        return this.l*this.w*this.h;
    }
    SurfaceArea() {
        return 2*(this.l * this.w + this.l * this.h + this.w * this.h);
    }
}
console.log("------Cuboid---------");
let new_cuboid = new Cuboid(2,4,1);
console.log(new_cuboid.volume());
console.log(new_cuboid.SurfaceArea());
class Cube extends Cuboid {
    constructor(length) {
        super(length);
    }
    volume() {
        return this.l * this.l * this.l;
    }
    SurfaceArea() {
        return 6 * this.l * this.l;
    }
}
console.log("---------Cube-----------");
let new_cube = new Cube(3);
console.log(new_cube.volume());
console.log(new_cube.SurfaceArea());