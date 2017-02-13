$.ready(function (error) {
    if (error) {
        console.log('error', error);
        return;
    }

    $('#led').turnOn();
});
