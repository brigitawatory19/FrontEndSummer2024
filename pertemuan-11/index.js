// 1. Promise
import helloWorld from './helloWorld.js';
async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}
messages();
// 2.fetch
import ambilDataUser from './ambilDataUser.js';
ambilDataUser();

// 3.Async Await
import ambilDataUserAsync from './ambilDataUserAsync.js';
ambilDataUserAsync();