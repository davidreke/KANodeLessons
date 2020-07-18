// 1. import the file system module
const fs = require('fs');

//  reading files
// 2. create a docs folder with blog1.txt
// 3. read the file using the readfile method
fs.readFile('./docs/blog1.txt', (err, data) =>{
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})
// thoughts on the readFile method
//  a. it asynchronous
//  b. it takes two arguments. The second is a callback functiont that takes err and data as its arguments
//  c. show the class what happens if you don't include the .toString() method
//  d. add a random console.log below the readvile method to show that it is asynchonous
//  e. show an error by trying to read a file that doesn't exist.

console.log('this is the last line but not really')

// writing files
// 4. create the write file command
fs.writeFile('./docs/blog1.txt', 'hello world!',  () => {
    console.log('file was written')
})
//  a. the first arguments is where to write the file, the second argument is what to write in the file, and the third arguments is a callback function.

// 5. copy the method above but have it write a new string to a location that doesn't exist and see what happens.
fs.writeFile('./docs/blog2.txt', 'hello again!',  () => {
    console.log('file was written')
})


// directories
// 6. Create a new directory with fs.mkdir()
// fs.mkdir('./assets', (err) => {
//  if (err) {
//      console.log(err)
//  }
//  console.log('folder created')
// })

// 7. try running node files again. Then after seeing the error add fs.existsSync

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder created')
    })
    // 8. add an else function that removes the folder
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}

// deleting files
// 9 add the following code that deletes the file
if (fs.existsSync('./docs.deleteMe.txt')){
    fs.unlink('./docs./deleteMe.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}


