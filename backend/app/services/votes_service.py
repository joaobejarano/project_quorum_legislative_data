import pandas as pd

# Carregar os dados CSV
votes_df = pd.read_csv('data/csv_files/votes.csv')
vote_results_df = pd.read_csv('data/csv_files/vote_results.csv')


def get_votes_stats():
    # Contar os votos apoiados (vote_type == 1) e opostos (vote_type == 2)
    supported_votes = len(vote_results_df[vote_results_df['vote_type'] == 1])
    opposed_votes = len(vote_results_df[vote_results_df['vote_type'] == 2])

    return {
        "supported_votes": supported_votes,
        "opposed_votes": opposed_votes
    }
