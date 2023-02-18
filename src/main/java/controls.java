public class controls {
    public static void main(String[] args) {
        // main control structure for the application
        double v_0 = 12.0; // meters/second
        double v_f = 9.06; // meters/second
        double displacement = 3.16; // meters
        double acceleration = -9.8; // meters/second^2 (gravity)
        double time = 0.3; // seconds
        int missing = 0; // 0-3 that represents which unit is missing in index of parameter list
        kinematicEquations.notDisplacement(v_f, v_0, acceleration, time, missing); // finds displacement
        kinematicEquations.notFinalVelocity(displacement, v_0, time, acceleration, missing);
        kinematicEquations.notTime(v_f, v_0, acceleration, displacement, missing);
        kinematicEquations.notAcceleration(displacement, v_0, v_f, time, missing);
        kinematicEquations.notInitialVelocity(displacement, v_f, time, acceleration, missing);
    }
}
