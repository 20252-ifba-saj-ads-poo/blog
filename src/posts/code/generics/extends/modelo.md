```plantuml
class Veiculo<T>{
    T motor
}
class Moto extends Veiculo
class Carro extends Veiculo
class Caminhao extends Veiculo

class Motor

class MotorCombustao extends Motor

class MotorEletrico extends Motor

Veiculo . Motor

```
