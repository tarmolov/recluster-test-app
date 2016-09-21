console.log('app1');

setTimeout(() => {
    throw new Error('Error in app1');
}, 1000);
