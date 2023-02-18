public class kinematicEquations {
    public static double notDisplacement(double finalVelocity, double initialVelocity, double acceleration, double time, int missing) {
        // filler value for now, there will be 4 calculations per method based on which value is missing
        // (missing values will be zero and the missing variable will also indicate the variable
        // that is unknown, in case of zero as a normal input)
        return finalVelocity;
    }
    public static double notFinalVelocity(double displacement, double initialVelocity, double time, double acceleration, int missing) {
        // filler value for now
        return displacement;
    }
    public static double notTime(double finalVelocity, double initialVelocity, double acceleration, double displacement, int missing) {
        // filler value for now
        return finalVelocity;
    }
    public static double notAcceleration(double displacement, double initialVelocity, double finalVelocity, double time, int missing) {
        // filler value for now
        return displacement;
    }
    public static double notInitialVelocity(double displacement, double finalVelocity, double time, double acceleration, int missing) {
        // filler value for now
        return displacement;
    }
}
