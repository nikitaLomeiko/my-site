declare module "particles.js" {
  export interface ParticlesConfig {
    particles: {
      number: {
        value: number;
        density: {
          enable: boolean;
          value_area: number;
        };
      };
      color: {
        value: string;
      };
      shape: {
        type: string;
      };
      opacity: {
        value: number;
        random: boolean;
      };
      size: {
        value: number;
        random: boolean;
      };
      line_linked: {
        enable: boolean;
        distance: number;
        color: string;
        opacity: number;
        width: number;
      };
      move: {
        enable: boolean;
        speed: number;
        direction: string;
        random: boolean;
        straight: boolean;
        out_mode: string;
        bounce: boolean;
        attract: {
          enable: boolean;
          rotateX: number;
          rotateY: number;
        };
      };
    };
    interactivity: {
      detect_on: string;
      events: {
        onhover: {
          enable: boolean;
          mode: string;
        };
        onclick: {
          enable: boolean;
          mode: string;
        };
      };
    };
  }

  export function particlesJS(id: string, config: ParticlesConfig): void;
  export function particlesJS(
    id: string,
    path: string,
    callback: () => void
  ): void;
}
