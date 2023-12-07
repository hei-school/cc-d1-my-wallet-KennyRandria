
class Portfolio:
    def __init__(self, username, password):
        self.balance = 0
        self.username = username
        self.password = password
        self.transactions = []

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transactions.append(f"Deposit: +{amount}")

    def withdraw(self, amount):
        if amount > 0 and amount <= self.balance:
            self.balance -= amount
            self.transactions.append(f"Withdrawal: -{amount}")
        else:
            print("Insufficient funds or invalid withdrawal amount.")

    def display_balance(self):
        print(f"Current balance: {self.balance}")

    def authenticate(self, input_username, input_password):
        return input_username == self.username and input_password == self.password

    def display_transactions(self):
        print("Transaction history:")
        for transaction in self.transactions:
            print(transaction)
