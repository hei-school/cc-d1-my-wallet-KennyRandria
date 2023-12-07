
class Wallet {
    private $balance;
    private $username;
    private $password;

    public function __construct($username, $password) {
        $this->balance = 0;
        $this->username = $username;
        $this->password = $password;
    }

    public function deposit($amount) {
        $this->authenticate();
        $this->balance += $amount;
        echo "Deposit successful\n";
    }

    public function withdraw($amount) {
        $this->authenticate();
        if ($amount <= $this->balance) {
            $this->balance -= $amount;
            echo "Withdrawal successful\n";
        } else {
            echo "Insufficient funds\n";
        }
    }

    public function getBalance() {
        $this->authenticate();
        return $this->balance;
    }

    private function authenticate() {    
        echo "Enter username: ";
        $inputUsername = trim(fgets(STDIN));
        echo "Enter password: ";
        $inputPassword = trim(fgets(STDIN));

        if ($this->username !== $inputUsername || $this->password !== $inputPassword) {
            echo "Authentication failed. Access denied.\n";
            exit(1); 
        }
    }
}
