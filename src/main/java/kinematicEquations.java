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
     * target = 2 --> finalVelocity = initialVelocity + (acceleration)*(time)
     *
     * Equation in terms of other variables:
     * target = 1 --> initialVelocity = finalVelocity - (acceleration)*(time)
     * target = 3 --> acceleration = (finalVelocity - initialVelocity) / time
     * target = 4 --> time = (finalVelocity - initialVelocity) / acceleration
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
        // if finalVelocity is the unknown target
        if (target == 2) {
            return initialVelocity + (acceleration * time);
        }
        // if initialVelocity is the unknown target
        else if (target == 1) {
            return finalVelocity - (acceleration * time);
        }
        // if acceleration is the unknown target
        else if (target == 3) {
            return (finalVelocity - initialVelocity) / time;
        }
        // if time is the unknown target
        else if (target == 4) {
            return (finalVelocity - initialVelocity) / acceleration;
        }
        return -1;
    }

    /**
     * Base Kinematic Equation:
     * target = 0 --> displacement = (initialVelocity)*(time) + (0.5)*(acceleration)*(time^2)
     *
     * Equation in terms of other variables:
     * target = 1 --> initialVelocity = ((0.5)*(acceleration)*(time^2) - displacement) / time
     * target = 4 --> time = ((-1 * initialVelocity) +- sqrt( initialVelocity^2 + (2)*(acceleration)*(displacement) )) / acceleration
     * target = 3 --> acceleration = (2 * (displacement - (initialVelocity)*(time))) / time^2
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
        // if displacement is the unknown target
        if (target == 0) {
            return (initialVelocity * time) + (0.5 * acceleration * Math.pow(time, 2));
        }
        // if initialVelocity is the unknown target
        else if (target == 1) {
            return ((0.5 * acceleration * Math.pow(time, 2)) - displacement) / time;
        }
        // if time is the unknown target
        else if (target == 4) {
            double underSQRT = Math.sqrt(Math.pow(initialVelocity, 2) + (2 * acceleration * displacement));
            double time1 = ((-1 * initialVelocity) + underSQRT) / acceleration;
            double time2 = ((-1 * initialVelocity) - underSQRT) / acceleration;
            if ((time1 >= 0) && (time2 >= 0)) {
                System.out.println("Time: " + time1);
                return time2;
            }
            else if (time1 >= 0) {
                    return time1;
            }
            else if (time2 >= 0) {
                return time2;
            }
        }
        // if acceleration is the unknown target
        else if (target == 3) {
            return (2 * (displacement - (initialVelocity * time))) / Math.pow(time, 2);
        }
        return -1;
    }

    /**
     * Base Kinematic Equation:
     * target = 2 --> finalVelocity = sqrt( (initialVelocity^2 + (2)*(acceleration)*(displacement)) )
     *
     * Equation in terms of other variables:
     * target = 1 --> initialVelocity = sqrt( (finalVelocity^2 - (2)*(acceleration)*(displacement)) )
     * target = 3 --> acceleration = (finalVelocity^2 - initialVelocity^2) / (2)*(displacement)
     * target = 0 --> displacement = (finalVelocity^2 - initialVelocity^2) / (2)*(acceleration)
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
        // if finalVelocity is the unknown target
        if (target == 2) {
            return Math.sqrt((Math.pow(initialVelocity, 2) + (2 * acceleration * displacement)));
        }
        // if initialVelocity is the unknown target
        else if (target == 1) {
            return Math.sqrt( Math.pow(finalVelocity, 2) - (2 * acceleration * displacement));
        }
        // if acceleration is the unknown target
        else if (target == 3) {
            return (Math.pow(finalVelocity, 2) - Math.pow(initialVelocity, 2)) / (2 * displacement);
        }
        // if displacement is the unknown target
        else if (target == 0) {
            return (Math.pow(finalVelocity, 2) - Math.pow(initialVelocity, 2)) / (2 * acceleration);
        }
        return -1;
    }

    /**
     * Base Kinematic Equation:
     * target = 0 --> displacement = (0.5)*(initialVelocity + finalVelocity)*(time)
     *
     * Equation in terms of other variables:
     * target = 1 --> initialVelocity = ((2)*(displacement) / time ) - finalVelocity)
     * target = 2 --> finalVelocity = ((2)*(displacement) / time ) - initialVelocity)
     * target = 4 --> time = (2)*(displacement) / (initialVelocity + finalVelocity)
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
        // if displacement is the unknown target
        if (target == 0) {
            return ((0.5 * initialVelocity) + (finalVelocity * time));
        }
        // if initialVelocity is the unknown target
        else if (target == 1) {
            return ((2 * displacement) / time) - finalVelocity;
        }
        // if finalVelocity is the unknown target
        else if (target == 2) {
            return ((2 * displacement) / time ) - initialVelocity;
        }
        // if time is the unknown target
        else if (target == 4) {
            return (2 * displacement) / (initialVelocity + finalVelocity);
        }
        return -1;
    }

    /**
     * Base Kinematic Equation:
     * target = 0 --> displacement = (finalVelocity)*(time) - (0.5)*(acceleration)*(time^2)
     *
     * Equation in terms of other variables:
     * target = 2 --> finalVelocity = (displacement + (0.5)*(acceleration)*(time^2)) / time
     * target = 4 --> time = ((-1 * finalVelocity) +- sqrt( finalVelocity^2 - (2)*(acceleration)*(displacement) )) / (-1)*(acceleration)
     * target = 3 --> acceleration = ((-2)*((displacement - (finalVelocity)*(time)))) / time^2
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
        // if displacement is the unknown target
        if (target == 0) {
            return (finalVelocity * time) - (0.5 * acceleration * Math.pow(time, 2));
        }
        // if finalVelocity is the unknown target
        else if (target == 2) {
            return (displacement + (0.5 * acceleration * Math.pow(time, 2))) / time;
        }
        // if time is the unknown target
        else if (target == 4) {
            double underSQRT = Math.sqrt(Math.pow(finalVelocity, 2) + (2 * acceleration * displacement));
            double time1 = ((-1 * finalVelocity) + underSQRT) / (-1 * acceleration);
            double time2 = ((-1 * finalVelocity) - underSQRT) / (-1 * acceleration);
            if ((time1 >= 0) && (time2 >= 0)) {
                System.out.println("Time: " + time1);
                return time2;
            }
            else if (time1 >= 0) {
                return time1;
            }
            else if (time2 >= 0) {
                return time2;
            }
        }
        // if acceleration is the unknown target
        else if (target == 3) {
            return ((-2 * (displacement - (finalVelocity * time)))) / Math.pow(time, 2);
        }
        return -1;
    }
}
