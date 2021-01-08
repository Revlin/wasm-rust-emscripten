After installing rust and cargo via [rustup](https://www.rust-lang.org/tools/install), add the wasm target and then compile the module:

    rustup target add wasm32-unknown-emscripten
    cargo install wasm-bindgen-cli
    cargo build --target wasm32-unknown-emscripten
    wasm-bindgen target/wasm32-unknown-emscripten/debug/bindgenhello.wasm --out-dir target/wasm32-unknown-emscripten/debug

Then try bundling with `npm run bundle`
