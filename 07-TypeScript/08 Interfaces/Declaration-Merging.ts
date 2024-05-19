interface Car {
  brand: string;
  start(): void;
}

interface Car {
  model: string;
  stop(): void;
}

const anyCar: Car = {
  brand: "BMW",
  model: "M3",
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};

anyCar.start();
anyCar.stop();
