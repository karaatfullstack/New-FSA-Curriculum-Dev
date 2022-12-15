//stack trace example
function first() {
    second();
}

function second() {
    console.trace("This is a trace from");
}

function main() {
    first();
}

main();