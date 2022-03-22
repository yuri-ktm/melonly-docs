import 'particles.js'

export const renderBackgroundParticles = (element = 'app') => {
    particlesJS(element, {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 1800,
                },
            },
            color: {
                value: ['#5a6a8a', '#647fb3'],
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#fff',
                },
            },
            opacity: {
                value: 0.6,
                random: false,
                anim: {
                    'enable': false,
                    'speed': 1,
                    'opacity_min': 0.1,
                    'sync': false,
                },
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    'enable': false,
                    'speed': 40,
                    'size_min': 0.1,
                    'sync': false,
                },
            },
            line_linked: {
                enable: false,
            },
            move: {
                speed: 2,
            },
        },
    })
}
