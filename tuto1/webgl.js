main();

function main() {
    const canvas = document.querySelector("#glcanvas");
    const gl = document.getContext("webgl");

    if (gl === null) {
        alert("No funciona WebGL en este navegador");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

