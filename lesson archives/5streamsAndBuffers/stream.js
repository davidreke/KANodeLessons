// 1.the fs module is required to read and write streams.
const fs = require('fs')

// read data by read streams and write data with write streams

// 2. create a readStream. Ignore the second argument for now
const readStream = fs.createReadStream('./docs/blog3.txt')

// 3. use readStream.on
// .on is an event listener for data
readStream.on('data', (chunk) =>{
    console.log('----- NEW CHUNK -----')
    console.log(chunk)
    // 4. Add .toSTring() to the chunk
    //  ( console.log(chunk.toString()))
    
    // 5. remove the to.String() and ... 
    // 5. add {encoding: 'utf8} line seven
    //  (fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'}))
    // 7.add a write stream divided up by a 'new chunk' stream
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk);
})

// 6. create a write stream.

const writeStream = fs.createWriteStream('./docs/blog4.txt')

// 8. lets add a pipe.
// 8... make sure to delete blog 4 before running this
readStream.pipe(writeStream);