
# K6 - Teste de Performance

Scripts para testes de performance rápidos e poderosos de forma simples e executados em ambientes de cloud AWS e GitHub Actions.


## Referência

 - Udemy: https://www.udemy.com/course/teste-de-performance-com-k6/
 - Documentação: https://k6.io/docs/
 

## Tipos de Teste no K6

### Smoke Testing

Verificam se o seu sistema pode lidar com carga mínima, sem problemas.

export const options = {

  vus: 1,
  duration: '1m',

};

### Load Testing

Avaliam o desempenho do sistema em termos de usuários simultâneos ou solicitações por segundo.

#### Carga constante
export const options1 = {
    vus: 100,
    duration: '20m',
};

#### Carga variavel
export const options2 = {
    stages: [
      { duration: '5m', target: 100 }, 
      { duration: '10m', target: 100 }, 
      { duration: '5m', target: 0 }, 
    ]
  };

### Spike and Stress Testing 

Avaliam os limites e a estabilidade do seu sistema sob condições extremas.

#### Spike
export const options = {
    stages: [
        { duration: "10s", target: 100 }, 
        { duration: "1m", target: 100 },
        { duration: "10s", target: 1400 }, 
        { duration: "3m", target: 1400 }, 
        { duration: "10s", target: 100 }, 
        { duration: "3m", target: 100 },
        { duration: "10s", target: 0 },
    ],
};

#### Stress
export const options = {
    stages: [
        { duration: "2m", target: 100 }, 
        { duration: "5m", target: 100 },
        { duration: "2m", target: 200 },
        { duration: "5m", target: 200 },
        { duration: "2m", target: 300 },
        { duration: "5m", target: 300 },
        { duration: "2m", target: 400 }, 
        { duration: "5m", target: 400 },
        { duration: "10m", target: 0 },
    ],
};

### Soak tests 

Avaliam a confiabilidade e o desempenho do seu sistema durante um longo período de tempo.

#### Carga durante um período de tempo
export const options = {
    stages: [
        { duration: '2m', target: 400 },
        { duration: '3h56m', target: 400 }, 
        { duration: '2m', target: 0 }, 
    ],
};
