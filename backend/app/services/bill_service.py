import pandas as pd

# Carregar os dados CSV
bills_df = pd.read_csv('data/csv_files/bills.csv')
votes_df = pd.read_csv('data/csv_files/votes.csv')
vote_results_df = pd.read_csv('data/csv_files/vote_results.csv')
legislators_df = pd.read_csv('data/csv_files/legislators.csv')

def get_all_bill_statistics():
    stats = []
    for _, bill in bills_df.iterrows():
        # Obter os votos associados a esse projeto de lei
        votes = votes_df[votes_df['bill_id'] == bill['id']]
        
        # Filtrar os resultados dos votos associados
        supporters = 0
        opposers = 0
        for _, vote in votes.iterrows():
            vote_results = vote_results_df[vote_results_df['vote_id'] == vote['id']]
            supporters += len(vote_results[vote_results['vote_type'] == 1])
            opposers += len(vote_results[vote_results['vote_type'] == 2])
        
        # Buscar o nome do patrocinador utilizando sponsor_id
        if pd.notna(bill['sponsor_id']):
            try:
                sponsor_name = legislators_df[legislators_df['id'] == bill['sponsor_id']].iloc[0]['name']
            except IndexError:
                sponsor_name = "Desconhecido"
        else:
            sponsor_name = "Desconhecido"

        stats.append({
            "id": bill['id'],
            "title": bill['title'],
            "supporters": supporters,
            "opposers": opposers,
            "sponsor": sponsor_name
        })
    
    return stats
