import random,sys

print("ROCK, PAPER, SCISSORS")

wins = 0
losses = 0
ties = 0

while True:
    print()
    print(str(wins)+" Wins, " + str(losses) + " Losses, " + str(ties) + " Ties")

    #user move
    print("Enter your move: (R)ock (P)aper (S)cissors or (Q)uit")
    userMove = input().lower()

    if userMove == "p":
        print("PAPER versus...")

    elif userMove == "r":
        print("ROCK versus...")
    elif userMove == "s":
        print("SCISSOR versus...")
    elif userMove == "q":
        sys.exit()
    else:
        print("Enter valid input")
        continue

    # computer move
    randInput = random.randint(1, 3)
    computerMove = ""

    if randInput == 1:
        computerMove = "r"
        print("ROCK")
    elif randInput == 2:
        computerMove = "p"
        print("PAPER")
    else:
        computerMove = "s"
        print("SCISSOR")


    if computerMove == userMove:
        print("It's a tie!")
        ties += 1
    elif computerMove == 'r' and userMove == "p":
        print("You win!")
        wins += 1
    elif computerMove == 'p' and userMove == "r":
        print("You lose")
        losses += 1
    elif computerMove == 'p' and userMove == "s":
        print("You win!")
        wins += 1
    elif computerMove == 's' and userMove == "p":
        print("You lose")
        losses += 1
    elif computerMove == 'r' and userMove == "s":
        print("You lose")
        losses += 1
    elif computerMove == 's' and userMove == "r":
        print("You win!")
        wins += 1

