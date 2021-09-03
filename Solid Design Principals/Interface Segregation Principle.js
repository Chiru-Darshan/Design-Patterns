class Machine {

    constructor() {
        if (this.constructor.name === 'Machine') {
            throw new NotImplementedError('Machine is Abstract')
        }

    }

    print(doc) {}
    fax(doc) {}
    scan(doc) {}
}


class NotImplementedError extends Error {

    constructor(name) {
        let msg = `${name} is not implemented !`
        super(msg)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplementedError)
        }
    }
}



class MultiFunctionPrinter extends Machine {


    print(doc) {
        //
    }
    scan(doc) {
        //
    }
    fax(doc) {
        //
    }
}


class OldFashionedPrinter extends Machine {
    print(doc) {
        //
    }
    scan(doc) {
        //do Nothing
        // leads to principle of least surprise
        throw new NotImplementedError('OldFashionedPrinter')
    }
    // fax(doc) {
    //     //
    // }
}

class Printer {
    constructor() {
        if (this.constructor.name === 'Printer') {
            throw new NotImplementedError("Printer is Abstract!")
        }
    }

    print(doc) {}
}

let printer = new OldFashionedPrinter()

printer.scan()