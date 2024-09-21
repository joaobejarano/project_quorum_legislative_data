import pandas as pd

# Carregar os dados CSV
legislators_df = pd.read_csv('data/csv_files/legislators.csv')
vote_results_df = pd.read_csv('data/csv_files/vote_results.csv')

def get_all_legislator_statistics():
    # Inicializar a lista de resultados
    results = []

    # Iterar por todos os legisladores
    for _, legislator in legislators_df.iterrows():
        legislator_votes = vote_results_df[vote_results_df['legislator_id'] == legislator['id']]
        supported_bills = len(legislator_votes[legislator_votes['vote_type'] == 1])
        opposed_bills = len(legislator_votes[legislator_votes['vote_type'] == 2])

        results.append({
            "id": legislator['id'],
            "name": legislator['name'],
            "supported_bills": supported_bills,
            "opposed_bills": opposed_bills
        })
    
    return results
