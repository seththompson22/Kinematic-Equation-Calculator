import java.util.Scanner;

public class controls {
    public static void main(String[] args) {
        // main control structure for the application
        double displacement = 3.16; // meters --> target = 0
        double v_0 = 12.0; // meters/second --> target = 1
        double v_f = 9.06; // meters/second --> target = 2
        double acceleration = -9.8; // meters/second^2 (gravity) --> target = 3
        double time = 0.3; // seconds --> target = 4
        int target = 0; // 0-4 that is an id of the 5 kinematic inputs that needs to be calculated
        int avoid = 0; // 0-4 that is the id of on of the 5 kinematic inputs that is unknown (not calculated)

        Scanner sc = new Scanner(System.in);
        System.out.println("Welcome to the Kinematic Equation Calculator!\n");

        System.out.println("\n\nWhich value would you like to calculate?");
        System.out.println("(0) Displacement\n(1) Initial Velocity\n(2) Final Velocity\n(3) Acceleration\n(4) Time\n");
        target = sc.nextInt();


        if (target == 0) {
            System.out.println("\nOut of the following values, which one is unknown (that you do not want to find!)");
            System.out.println("(1) Initial Velocity\n(2) Final Velocity\n(3) Acceleration\n(4) Time\n");
            avoid = sc.nextInt();
            if (avoid == 1) {
                System.out.print("Final Velocity: ");
                v_f = sc.nextDouble();
                System.out.print("Acceleration: ");
                acceleration = sc.nextDouble();
                System.out.print("Time: ");
                time = sc.nextDouble();
                kinematicEquations.notInitialVelocity(0, v_f, time, acceleration, target);
            }

            else if (avoid == 2) {
                System.out.print("Initial Velocity: ");
                v_0 = sc.nextDouble();
                System.out.print("Acceleration: ");
                acceleration = sc.nextDouble();
                System.out.print("Time: ");
                time = sc.nextDouble();
                kinematicEquations.notFinalVelocity(0, v_0, time, acceleration, target);
            }

            else if (avoid == 3) {
                System.out.print("Initial Velocity: ");
                v_0 = sc.nextDouble();
                System.out.print("Final Velocity: ");
                v_f = sc.nextDouble();
                System.out.print("Time: ");
                time = sc.nextDouble();
                kinematicEquations.notAcceleration(0, v_0, v_f, time, target);
            }

            else if (avoid == 4) {
                System.out.print("Initial Velocity: ");
                v_0 = sc.nextDouble();
                System.out.print("Final Velocity: ");
                v_f = sc.nextDouble();
                System.out.print("Acceleration: ");
                acceleration = sc.nextDouble();
                kinematicEquations.notTime(v_f, v_0, acceleration, 0, target);
            }

            else {

            }
            System.out.print("Initial Velocity: ");
            v_0 = sc.nextDouble();
            System.out.print("Final Velocity: ");
            v_f = sc.nextDouble();
            System.out.print("Acceleration: ");
            acceleration = sc.nextDouble();
            System.out.print("Time: ");
            time = sc.nextDouble();
        }

        else if (target == 1) {
            if (avoid == )
        }




        kinematicEquations.notDisplacement(v_f, v_0, acceleration, time, target); // finds displacement
        kinematicEquations.notFinalVelocity(displacement, v_0, time, acceleration, target);
        kinematicEquations.notTime(v_f, v_0, acceleration, displacement, target);
        kinematicEquations.notAcceleration(displacement, v_0, v_f, time, target);
        kinematicEquations.notInitialVelocity(displacement, v_f, time, acceleration, target);
    }
}
