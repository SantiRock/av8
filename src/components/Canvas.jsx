import { useEffect, useRef } from "react";

import vertexSource from "../shaders/vertex.glsl?raw";
import fragmentSource from "../shaders/fragment.glsl?raw";

export function Canvas() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const gl = canvas.getContext("webgl");

        if (!gl) {
            console.error("WebGL no soportado");
            return;
        }

        //-------------------------
        // Buffers
        //-------------------------

        const vertices = [
            -1,  1, 0,
            -1, -1, 0,
             1, -1, 0,
             1,  1, 0
        ];

        const indices = [
            3,2,1,
            3,1,0
        ];

        const vertexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(vertices),
            gl.STATIC_DRAW
        );

        const indexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

        gl.bufferData(
            gl.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(indices),
            gl.STATIC_DRAW
        );

        //-------------------------
        // Vertex Shader
        //-------------------------

        const vertShader = gl.createShader(gl.VERTEX_SHADER);

        gl.shaderSource(vertShader, vertexSource);

        gl.compileShader(vertShader);

        if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {

            console.error(gl.getShaderInfoLog(vertShader));

            return;

        }

        //-------------------------
        // Fragment Shader
        //-------------------------

        const fragShader = gl.createShader(gl.FRAGMENT_SHADER);

        gl.shaderSource(fragShader, fragmentSource);

        gl.compileShader(fragShader);

        if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {

            console.error(gl.getShaderInfoLog(fragShader));

            return;

        }

        //-------------------------
        // Program
        //-------------------------

        const program = gl.createProgram();

        gl.attachShader(program, vertShader);

        gl.attachShader(program, fragShader);

        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {

            console.error(gl.getProgramInfoLog(program));

            return;

        }

        gl.useProgram(program);

        //-------------------------
        // Attributes
        //-------------------------

        const position = gl.getAttribLocation(
            program,
            "a_position"
        );

        gl.vertexAttribPointer(
            position,
            3,
            gl.FLOAT,
            false,
            0,
            0
        );

        gl.enableVertexAttribArray(position);

        //-------------------------
        // Uniforms
        //-------------------------

        const uTime = gl.getUniformLocation(program, "u_time");

        const uResolution = gl.getUniformLocation(
            program,
            "u_resolution"
        );

        //-------------------------
        // Resize
        //-------------------------

        function resize() {

            canvas.width = window.innerWidth;

            canvas.height = window.innerHeight;

            gl.viewport(0, 0, canvas.width, canvas.height);

            gl.uniform2f(
                uResolution,
                canvas.width,
                canvas.height
            );

        }

        window.addEventListener("resize", resize);

        resize();

        //-------------------------
        // Animation
        //-------------------------

        const start = performance.now();

        let animationId;

        function render() {

            const t = (performance.now() - start) * 0.001;

            gl.uniform1f(uTime, t);

            gl.clearColor(0,0,0,1);

            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.drawElements(
                gl.TRIANGLES,
                indices.length,
                gl.UNSIGNED_SHORT,
                0
            );

            animationId = requestAnimationFrame(render);

        }

        render();

        //-------------------------
        // Cleanup
        //-------------------------

        return () => {

            cancelAnimationFrame(animationId);

            window.removeEventListener("resize", resize);

            gl.deleteProgram(program);

            gl.deleteShader(vertShader);

            gl.deleteShader(fragShader);

            gl.deleteBuffer(vertexBuffer);

            gl.deleteBuffer(indexBuffer);

        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="canvas"
        />
    );
}
