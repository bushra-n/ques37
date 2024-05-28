// Task 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt(size:string = 'Large', text:string = 'I Love Typescript'):void {
    console.log(`You have ordered a ${size} size shirt that says ${text}`)
}
make_shirt();
make_shirt('Medium');
// part II any size with different msg.
make_shirt('Small','I need a big shirt to wear')





























