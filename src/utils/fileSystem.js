const path = require('path');
const fs = require('fs');
class fileSystem{
    constructor(file){
        this.file = file
    }
    read(){
       return JSON.parse(fs.readFileSync(path.resolve(__dirname, `../model/${this.file}`), {encoding:'utf8', flag:'r'}))
    }
    write(data){
        fs.writeFileSync(path.resolve(__dirname,`../model/${this.file}`), JSON.stringify(data, null, 4))
    }
};

module.exports = fileSystem;