public class Moto extends Veiculo<MotorCombustao> {
    public Moto(String modelo, MotorCombustao motor) {
        super(modelo, motor);
    }

    @Override
    public void ligar() {
        System.out.println("Moto " + getModelo() + " com " + getMotor() + " está ligada.");
    }
}
