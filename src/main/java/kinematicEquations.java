public class kinematicEquations {

    /*
    When target = 0 -> displacement is the unknown target
    When target = 1 -> initialVelocity is the unknown target
    When target = 2 -> finalVelocity is the unknown target
    When target = 3 -> acceleration is the unknown target
    When target = 4 -> time is the unknown target
     */
    /**
     * Base Kinematic Equation:
     * finalVelocity = initialVelocity + (acceleration)*(time)
     *
     * Equation in terms of other variables:
     *
     *
     *
     * @param finalVelocity      value for final velocity : 2 (target value)
     * @param initialVelocity    value for initial velocity : 1 (target value)
     * @param acceleration       value for acceleration : 3 (target value)
     * @param time               value for time : 4 (target value)
     * @param target             holds the value for position of unknown argument (an assigned id)
     * @return    value of the unknown target as a double
     */

    public static double notDisplacement(double finalVelocity, double initialVelocity, double acceleration, double time, int target) {
        // filler value for now, there will be 4 calculations per method based on which value is missing
        // (missing values will be zero and the missing variable will also indicate the variable
        // that is unknown, in case of zero as a normal input)
        return finalVelocity;
    }

    /**
     * Base Kinematic Equation:
     * displacement = (initialVelocity)*(time) + (0.5)*(acceleration)*(time^2)
     *
     * Equation in terms of other variables:
     *
     *
     *
     * @param displacement       value for displacement : 0 (target value)
     * @param initialVelocity    value for initial velocity : 1 (target value)
     * @param time               value for time : 4 (target value)
     * @param acceleration       value for acceleration : 3 (target value)
     * @param target             holds the value for position of unknown argument (an assigned id)
     * @return    value of the unknown target as a double
     */
    public static double notFinalVelocity(double displacement, double initialVelocity, double time, double acceleration, int target) {
        // filler value for now
        return displacement;
    }

    /**
     * Base Kinematic Equation:
     * finalVelocity^2 = initialVelocity^2 + (2)*(acceleration)*(displacement)
     *
     * Equation in terms of other variables:
     *
     *
     *
     * @param finalVelocity      value for final velocity : 2 (target value)
     * @param initialVelocity    value for initial velocity : 1 (target value)
     * @param acceleration       value for acceleration : 3 (target value)
     * @param displacement       value for displacement : 0 (target value)
     * @param target             holds the value for position of unknown argument (an assigned id)
     * @return    value of the unknown target as a double
     */
    public static double notTime(double finalVelocity, double initialVelocity, double acceleration, double displacement, int target) {
        // filler value for now
        return finalVelocity;
    }

    /**
     * Base Kinematic Equation:
     * displacement = (0.5)*(initialVelocity + finalVelocity)*(time)
     *
     * Equation in terms of other variables:
     *
     *
     *
     * @param displacement       value for displacement : 0 (target value)
     * @param initialVelocity    value for initial velocity : 1 (target value)
     * @param finalVelocity      value for final velocity : 2 (target value)
     * @param time               value for time : 4 (target value)
     * @param target             holds the value for position of unknown argument (an assigned id)
     * @return    value of the unknown target as a double
     */
    public static double notAcceleration(double displacement, double initialVelocity, double finalVelocity, double time, int target) {
        // filler value for now
        return displacement;
    }

    /**
     * Base Kinematic Equation:
     * displacement = (finalVelocity)*(time) - (0.5)*(acceleration)*(time^2)
     *
     * Equation in terms of other variables:
     *
     *
     *
     * @param displacement     value for displacement : 0 (target value)
     * @param finalVelocity    value for final velocity : 2 (target value)
     * @param time             value for time : 4 (target value)
     * @param acceleration     value for acceleration : 3 (target value)
     * @param target           holds the value for position of unknown argument (an assigned id)
     * @return    value of the unknown target as a double
     */
    public static double notInitialVelocity(double displacement, double finalVelocity, double time, double acceleration, int target) {
        // filler value for now
        return displacement;
    }
}
