#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_waveDetail;

// Antiguos inputs del ISF, ahora variables fijas
vec3 color1 = vec3(0.);
vec3 color2 = vec3(0.1, 0.4, 0.7);
vec3 color3 = vec3(0.);
vec3 color4 = vec3(0.3, 0.3, 0.2);
float bandCount = 40.;
float waveAmplitude = 0.;
float waveFrequency = 5.;
float waveSpeed = 0.1;
float rotation = 0.;
float timeSpeed = 1.;

#define PI 3.14159265359

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
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}

void main() {
    float waveDetail = u_waveDetail;
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
    float time = u_time * timeSpeed;

    // Rotación global
    uv = rot(rotation) * uv;

    // Distorsión orgánica con FBM
    float warp1 = fbm(uv * waveFrequency + time * waveSpeed) - 0.5;
    float warp2 = fbm(uv * waveFrequency * 1.5 + vec2(5.2, 1.3) - time * waveSpeed * 0.7) - 0.5;

    // Coordenada base diagonal
    float baseCoord = uv.x * 1.3 + uv.y * 0.7;

    baseCoord += warp1 * waveAmplitude;
    baseCoord += warp2 * waveAmplitude * 0.5;

    // Detalle adicional
    if (waveDetail > 1.0) {
        float detailWarp = fbm(uv * waveFrequency * 3.0 + time * waveSpeed * 0.3) - 0.5;
        baseCoord += detailWarp * (waveDetail - 1.0) * 0.3;
    }

    // Bandas
    float band = baseCoord * bandCount;
    float bandIndex = abs(floor(band));

    // Ciclo de 4 colores: 0, 1, 2, 3, 0, 1, ...
    float colorIdx = mod(bandIndex, 4.0);

    vec3 col;
    if (colorIdx < 1.0) col = color1;
    else if (colorIdx < 2.0) col = color2;
    else if (colorIdx < 3.0) col = color3;
    else col = color4;

    // Viñeta
    vec2 vig_uv = (gl_FragCoord.xy / u_resolution - 0.5) * 1.4;
    float vig = 1.0 - length(vig_uv) * 0.1;
    col *= vig;

    // Gamma
    col = pow(col, vec3(1.0 / 2.2));

    gl_FragColor = vec4(col * 0.55, 1.0);
}