import * as fs from 'node:fs';

/* How to use

    See 1_Me_Name_Is_Seamus for reference

    - copy and paste poem from word document into a new input txt file 
    - add folder/input_filename.txt to ument into a new input txt file variable below
    - for output file, add folder/output_filename.txt to variable
    - Copy text in output file in poems-db collection, poem field in firebase


    */

const input_poem_filepath = '7_Bottle_Tops/bottle_tops_input.txt';
const output_poem_filepath = '7_Bottle_Tops/bottle_tops_converted.txt';

const readFile = fs.readFileSync(
  input_poem_filepath,
  'utf-8'
);

console.log(readFile);

const arr = readFile.split('\n');

console.log(arr);

const newline_arr = arr.map((sentence) => sentence.replace('\r', '\\n'));

console.log(newline_arr);

const poem_rejoined = newline_arr.join('');

console.log(poem_rejoined);

fs.writeFileSync(output_poem_filepath, poem_rejoined, 'utf-8');
