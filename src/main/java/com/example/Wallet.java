
import java.util.Scanner;

public class Wallet {
    private double balance;
    private String username;
    private String password;

    public Wallet(String username, String password) {
        this.balance = 0;
        this.username = username;
        this.password = password;
    }

    public void deposit(double amount) {
        authenticate();
        this.balance += amount;
        System.out.println("Deposit successful");
    }

    public void withdraw(double amount) {
        authenticate();
        if (amount <= this.balance) {
            this.balance -= amount;
            System.out.println("Withdrawal successful");
        } else {
            System.out.println("Insufficient funds");
        }
    }

    public double getBalance() {
        authenticate();
        return balance;
    }

    private void authenticate() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter username: ");
        String inputUsername = scanner.nextLine();
        System.out.print("Enter password: ");
        String inputPassword = scanner.nextLine();

        if (!username.equals(inputUsername) || !password.equals(inputPassword)) {
            System.out.println("Authentication failed. Access denied.");
            System.exit(1);
    }

}
