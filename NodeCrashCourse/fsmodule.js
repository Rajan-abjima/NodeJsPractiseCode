const fs = require('fs');


//// reading files /////
// fs.readFile('fille.txt','utf8',(err, data)=>{
//     console.log(err, data)
// })

// fs.readFile('./files/secondfile.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

//// writing files /////
// fs.writeFile('./files/secondfile.txt', 'this is changed SecondTestFile', () =>{
//     console.log('file was written');
// });
// fs.writeFile('./files/secondfile2.txt', 'SecondTestFile', () => {
//     console.log('file was written');
// });

// ///// directories /////
// if (fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }

///// stream data /////
const readStream = fs.createReadStream('./files/dummytext.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./files/writtendummytext.txt');
readStream.on('data', (chunk) => {
    console.log('-----chunk-----');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});