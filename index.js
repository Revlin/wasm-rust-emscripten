// const rust = import('./target/wasm32-unknown-unknown/debug/bindgenhello'); // works with webpack bundle
const rust = import('./target/wasm32-unknown-emscripten/debug/bindgenhello'); // does not work

rust
    .then(m => m.greet('World!'))
    .catch(console.error);