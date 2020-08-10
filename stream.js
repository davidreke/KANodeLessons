// 1.the fs module is required to read and write streams.
const fs = require('fs')

// read data by read streams and write data with write streams

// 2. create a readStream. Ignore the second argument for now
// const readStream = fs.createReadStream('./docs/blog3.txt')
// part 5 continued.
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'} )
// first argument is where we want to write from

// 6. Now we are going to write a steam. This follow the format of read stream.
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// 3. Create a readstream listener
//  .on is an event listener that listens to data event.
// every time we get a "data" event we take the chunk of data and fire callback function on that chunk of data
// readStream.on('data', (chunk)=>{
//     // add some console.logs.
//     console.log('---- New Chunk ----')
//     console.log(chunk)
//     // 4.convert you console.log to console.log(chunk.toString())
//     // console.log(chunk.toString())
//     // 5 go back to createReadStream Method and add a second argument
//     // 7. Add a write stream line in our readStream on callback function
//     // The new chunk puts the words New Chunk in our blog.
//     writeStream.write('\nNew Chunk\n')
//     writeStream.write(chunk);
// })


// 8 now we're going to try piping, which is more simple but less flexible. It has to send data from a readable stream to a writeable stream.
readStream.pipe(writeStream)