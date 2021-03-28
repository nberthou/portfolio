import styled from 'styled-components';
import ReactParticles from 'react-tsparticles';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(43,45,47);
    background: radial-gradient(ellipse at bottom, rgba(252,176,69,1) transparent);
    color: white;
`

const TitleContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    margin: 0;
    font-size: 3em;
`;

const Subtitle = styled.h2`
    margin: 0;
    font-size: 2.5em;
`;

const params = {
    "particles": {
      "number": {
        "value": 25,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ff8736"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 7.6,
        "direction": "top-right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

const HomePage = () => (
    <Container>
        <Particles>
        <Title>NICOLAS BERTHOU</Title>
        <Subtitle>Développeur web</Subtitle>
        <br/>
        <b>Coming soon<sup>TM</sup></b>
       </Particles>
    </Container>
);

type ParticlesProps = {
    children: any;
}

const Particles = ({children }: ParticlesProps) => (
    <div style={{position: 'relative', height: '100vh'}}>
    <ReactParticles
        params={params}
        style={{
            position: 'absolute',
            zIndex: 1,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
        }}
    />
    {children && <TitleContainer style={{position: "relative"}}>{children}</TitleContainer>}
    </div>
)

export default HomePage;