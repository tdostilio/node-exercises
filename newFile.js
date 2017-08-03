const fs = require('fs');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What is the filename: ', (filename) => {
//     rl.close();
//     fs.readFile(filename, (err, buffer) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         let content = buffer.toString();
//         let upcased = content.toUpperCase();
//         console.log(upcased);
//     })
// });

// DNS Lookup
// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:

// $ node dns_lookup.js
// Domain name: yahoo.com
// IP Address: 98.139.183.24
// Trigger an error condition by providing an invalid domain. See that the error gets displayed.

// const dns = require('dns');

// rl.question("What is the domain name: ", (domain) => {
//     rl.close();
//     dns.lookup(domain, (err, address, family) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.log('address: %j family: IPv%s', address, family);
//     });
// })

//##### Exercise 3
function SaveFile() {
    rl.question('What is the input filename: ', (inputFile) => {
        rl.question('What is the output file: ', (outputFile) => {
            rl.close();
            fs.readFile(inputFile, (err, buffer) => {
            if (err) {
                console.log(err.message);
                return;
            }
            let content = buffer.toString();
            fs.writeFile(outputFile, content);
            });
        });
    })
}

SaveFile();
