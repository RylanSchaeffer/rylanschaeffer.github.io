from itertools import product
import matplotlib.pyplot as plt
import numpy as np

Ns = [1e4, 1e6, 1e8]
Ks = [5e1, 1e2]
Ps = [1e-2, 1e-1, 25e-2]


def compute_dating_distribution(N, K, p):
    N, K = int(N), int(K)

    # proportion of new men a woman prefers
    men_matches = dict()
    for woman in range(N):
        # first woman chooses K random men
        if woman == 0:
            for i in range(K):
                men_matches[i] = 1
        else:
            # every subsequent woman choose (1-p)*K men proportional to how
            # many women have previously picked them, and p*K new men
            num_new_men = np.random.binomial(n=K, p=p, size=1)[0]
            num_old_men = K - num_new_men

            # sample old men
            probabilities = list(men_matches.values())
            probabilities /= np.sum(probabilities)
            overlapping_men = np.random.choice(
                np.arange(len(probabilities)),
                size=num_old_men,
                p=probabilities,
                replace=False,
            )
            for overlapping_man in overlapping_men:
                men_matches[overlapping_man] += 1

            # add new men
            for i in range(man_index, man_index + num_new_men):
                men_matches[i] = 1

        man_index = i

    sorted_men_matches = {
        k: v / woman for k, v in sorted(men_matches.items(), key=lambda item: -item[1])
    }

    return sorted_men_matches


for N in Ns:
    for K in Ks:
        N, K = int(N), int(K)
        fig, ax = plt.subplots()
        ax.set_title(f"N={N}, K={K}")
        ax.set_xlabel("Man (index)")
        ax.set_ylabel("Proportion of Interested Women")
        for p in Ps:
            sorted_men_matches = compute_dating_distribution(N, K, p=p)
            ax.loglog(
                np.arange(len(sorted_men_matches)),
                list(sorted_men_matches.values()),
                label=f"p={p}",
            )
            ax.legend()
            plt.savefig(f"dating, N={N}, K={K}.png")
