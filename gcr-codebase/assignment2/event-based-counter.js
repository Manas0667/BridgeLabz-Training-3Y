let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
}

function decrement() {
    count--;
    console.log("Count:", count);
}

function counterOperations() {
    let message = "Counter Operations";

    function showCount() {
        console.log(message);
        console.log("Current Count:", count);
    }

    increment();
    increment();
    showCount();
    decrement();
    showCount();
}

counterOperations();