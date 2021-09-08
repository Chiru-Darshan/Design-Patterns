CoordinateSystem = Object.freeze({
    cartesian: 0,
    polar: 1
})

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    //   constructor(rho, theta){
    //       this.x = rho * Math.sin(theta);
    //       this.y = rho * Math.cos(theta);
    //   }


    // constructor(a, b, cos = CoordinateSystem.cartesian) {
    //     switch (cos) {
    //         case CoordinateSystem.cartesian:
    //             this.x = a;
    //             this.y = b;
    //             break;
    //         case CoordinateSystem.polar:
    //             this.x = rho * Math.sin(theta);
    //             this.y = rho * Math.cos(theta);
    //             break;
    //     }

    // }

    // static newCartesianPoint(x, y) {
    //     return new Point(x, y)
    // }
    // static newPolarPoint(rho, theta) {
    //     return new Point(
    //         rho * Math.sin(theta),
    //         rho * Math.cos(theta)
    //     )
    // }

}

class PointFactory {
    static newCartesianPoint(x, y) {
        return new Point(x, y)
    }
    static newPolarPoint(rho, theta) {
        return new Point(
            rho * Math.sin(theta),
            rho * Math.cos(theta)
        )
    }
}


let p1 = PointFactory.newCartesianPoint(5, 6)
console.log(`*  cartesian : ${JSON.stringify(p1)}`)
let p2 = PointFactory.newPolarPoint(5, 6)
console.log(`*  polar : ${JSON.stringify(p2)}`)