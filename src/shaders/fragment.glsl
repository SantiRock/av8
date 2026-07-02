precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

varying vec2 v_texcoord;

const float PI = 3.1415926535;
const float TWOPI = PI * 2.;

vec3 hsv2rgb(float h, float s, float v) {
    return mix(vec3(1.), clamp((abs(fract(h+vec3(3., 2.,1.)/3.)*6.-3.)-1.),0.,1.), s) * v;
}


vec3 palette(float t) {
    vec3 c0 = vec3(0.95, 0.85, 0.90);
    vec3 c1 = vec3(0.95, 0.9, 0.85);
    vec3 c2 = vec3(0.75, 0.9, 0.8);
    vec3 c3 = vec3(0.95, 0.85, 0.90);

    t = fract(t);

    vec3 col = mix(c0, c1, smoothstep(0.0, 0.47, t));
    col = mix(col, c2, smoothstep(0.47, 0.93, t));
    col = mix(col, c3, smoothstep(0.93, 1., t));

    return col;
}

float ring(vec2 p) {
    float len = length(p) - 0.55;
    len *= length(p * p) - 0.66;
    float d = len * len * 512.;

    return 1. - d * d;
}

vec2 animation(vec2 p) {
    float t = u_time * 0.25;

    p.x += sin(p.x * 2. + t) * 0.4 -
           cos(p.y * 1. - t) * 0.5 -
           sin(p.x * 3. + t) * 0.3 +
           cos(p.y * 0.3 - t) * 0.1;
    
    p.y += sin(p.x * 5. + t) * 0.7 -
           cos(p.y * 8. - t) * 0.3 +
           sin(p.x * 4. + t) * 0.4 -
           cos(p.y * 6. - t) * 0.3;

    return p;
}

vec3 ring_color(vec2 p) {
    float d = ring(p);
    float angle = (atan(p.y, p.x) + PI) / TWOPI;
    angle += 0.1 * sin(u_time);

    float hue = angle;
    float lum = d;
    vec3 col = hsv2rgb(hue, 0.66, lum);

    return col;
}


void main() {
    vec2 uv = v_texcoord * 0.5 + 0.5;

    uv = animation(uv);
    //uv = animation(uv * 0.9);

    //uv *= 2.;
    //uv = fract(uv);

    vec3 color = vec3(ring(uv));
    color = ring_color(uv);
    
    vec3 grayXfer = vec3(0.3, 0.59, 0.11);
    vec3 gray = vec3(dot(grayXfer, color));
    
    //color += vec3(0., 0., sin(u_time * 0.5)* 0.2);
    color *= 0.5;

    gl_FragColor = vec4(mix(color, gray, 0.7), 1.0);
}