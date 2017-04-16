from random import choice, shuffle


def simulate_rand_guessing(number_of_trials):
    count = 0
    for _ in xrange(number_of_trials):
        labels = ['a', 'b', 'c', 'd', 'e']
        shuffle(labels)
        possible_labels = ['a', 'b', 'c', 'd', 'e']

        for _ in xrange(5):
            guess = choice(possible_labels)
            if labels[-1] == guess:
                possible_labels.remove(guess)
                count += 1
            else:
                possible_labels.remove(labels[-1])
            labels.pop()

    return count / (5. * number_of_trials)


print(simulate_rand_guessing(10))
print(simulate_rand_guessing(100))
print(simulate_rand_guessing(10000))
print(simulate_rand_guessing(100000000))

