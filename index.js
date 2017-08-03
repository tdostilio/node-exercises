const fs = require('fs');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the filename: ', (filename) => {
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message);
            return;
        }
        let content = buffer.toString();
        let upcased = content.toUpperCase();
        console.log(upcased);
    })
});


//     rl.close();
//     fs.readFile(filename, (err, buffer) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         let content = buffer.toString();
//         markdownpdf().from.string(content)
//                  .to(filename + '.pdf', () => {
//                      console.log('It worked!');
//                  })
//         // let upcased = content.toUpperCase();
//         // console.log(upcased);
//     })
// })