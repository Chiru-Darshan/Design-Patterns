const fs = require('fs')


class Journal {

    constructor() {
        this.entries = {}
    }


    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c} : ${text}`
        this.entries[c] = entry
        return c;
    }


    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n')
    }

}
Journal.count = 0;


class PersistenceManager {

    preprocess(j) {
        // 
    }

    saveToFile(filename, journal) {
        fs.writeFileSync(filename, journal.toString());
    }

    loadFile(filename) {
        //
    }
    loadFromURL(url) {
        //
    }
}

let j = new Journal();
j.addEntry('I enjoyed learning design pattern.')
j.addEntry('I ate rasam today.')
console.log(j.toString())
let pm = new PersistenceManager()
pm.saveToFile('c:\Desktop\journal.txt', j)