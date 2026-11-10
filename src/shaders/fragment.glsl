#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_lineThickness;

// Antiguos inputs del ISF, ahora variables fijas
vec3 color1 = vec3(0.16, 0.4, 1.0);   // fondo
vec3 color2 = vec3(0.);              // color de línea
float scale = 40.;
float lineCount = 30.;
float distortion = 3.;
float detail = 4.;
float flowSpeed = 0.4;
float rotation = 0.;
float warp = 0.;
float timeSpeed = 0.4;

mat2 rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    int octaves = int(detail);
    for (int i = 0; i < 8; i++) {
        if (i >= octaves) break;
        value += amplitude * noise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

float warpedFbm(vec2 p) {
    vec2 q = vec2(
        fbm(p + vec2(0.0, 0.0)),
        fbm(p + vec2(5.2, 1.3))
    );

    vec2 r = vec2(
        fbm(p + 4.0 * q + vec2(1.7, 9.2)),
        fbm(p + 4.0 * q + vec2(8.3, 2.8))
    );

    return fbm(p + warp * r);
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
    float time = u_time * timeSpeed;

    uv = rot(rotation) * uv;
    uv *= scale;
    uv += time * flowSpeed;

    // Ruido orgánico
    float n = warpedFbm(uv * 0.5);
    n *= distortion;

    // Curvas de nivel
    float contour = fract(n * lineCount / 8.0);
    float line = step(u_lineThickness, contour);

    vec3 col = mix(color1, color2, line);

    // Textura sutil
    float grain = noise(uv * 20.0) * 0.015;
    col += grain;

    // Viñeta
    vec2 vig_uv = (gl_FragCoord.xy / u_resolution - 0.5) * 1.4;
    float vig = 1.0 - length(vig_uv) * 0.15;
    col *= vig;

    col = pow(col, vec3(1.0 / 2.2));

    gl_FragColor = vec4(col * 0.4, 1.0);
}
